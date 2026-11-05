const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { spawn } = require('node:child_process');
const sharp = require('sharp');
const base = path.resolve(__dirname, '..'), artifacts = path.join(__dirname, 'artifacts');
const browser = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(file => fs.existsSync(file));
if (!browser) throw new Error('A local Chromium browser is required');
const production = fs.readFileSync(path.join(base, '.next/server/app/index.html'), 'utf8');
const head = production.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link\b[^>]*(?:as="script"|rel="modulepreload")[^>]*>/g, '')
  .replace(/<meta\b[^>]*name="robots"[^>]*>/g, '');
const htmlClass = production.match(/<html[^>]*class="([^"]*)"/)?.[1] || '';
const bodyClass = production.match(/<body[^>]*class="([^"]*)"/)?.[1] || '';
const serverMarkup = fs.readFileSync(path.join(artifacts, 'server-markup.html'), 'utf8');
const requests = [], retries = new Map(), delays = new Set();
const server = http.createServer((req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'no-store');
  const url = new URL(req.url, 'http://localhost');
  requests.push({ path: url.pathname, referer: req.headers.referer || '' });
  if (url.pathname === '/robots.txt') { res.setHeader('Content-Type', 'text/plain'); res.end('User-agent: *\nDisallow: /\n'); return; }
  if (url.pathname === '/') {
    const reference = url.searchParams.get('reference') === 'v6';
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`<!doctype html><html lang="en-ZA" class="${htmlClass}"><head>${head}<meta name="robots" content="noindex,nofollow,noarchive"></head><body class="${bodyClass}">${serverMarkup}<div id="react-controller"></div>${reference ? '<script src="/vendor/gsap.min.js"></script><script src="/vendor/ScrollTrigger.min.js"></script><script src="/reference-v6.js"></script><script src="/reference-ready.js"></script>' : '<script src="/harness.js"></script>'}</body></html>`); return;
  }
  if (url.pathname === '/reference-ready.js') {
    res.setHeader('Content-Type', 'text/javascript'); res.end(`Promise.allSettled([...document.images].map(image=>image.decode())).then(()=>document.fonts.ready).then(()=>{ScrollTrigger.refresh();window.dispatchEvent(new Event('resize'));setTimeout(()=>window.__visualReady=true,200)});`); return;
  }
  if (url.pathname === '/icon.svg') {
    res.setHeader('Content-Type', 'image/svg+xml'); res.end(fs.readFileSync(path.join(base, 'app/icon.svg'))); return;
  }
  let target;
  if (url.pathname === '/harness.js') target = path.join(artifacts, 'harness.js');
  else if (url.pathname === '/reference-v6.js') target = path.join(base, 'public/cinematic-runtime-candidate-v6.js');
  else if (url.pathname.startsWith('/_next/static/')) target = path.resolve(base, '.next/static', url.pathname.slice('/_next/static/'.length));
  else target = path.resolve(base, 'public', decodeURIComponent(url.pathname).slice(1));
  const allowed = [path.join(base, 'public') + path.sep, path.join(base, '.next/static') + path.sep, artifacts + path.sep];
  if (!allowed.some(prefix => target.startsWith(prefix))) { res.writeHead(403).end(); return; }
  const scenario = new URL(req.headers.referer || 'http://localhost/').searchParams.get('case');
  const key = scenario + ':' + new URL(req.headers.referer || 'http://localhost/').searchParams.get('viewport') + ':' + url.pathname;
  const attempt = (retries.get(key) || 0) + 1; retries.set(key, attempt);
  function send() {
    if (url.pathname === '/vendor/ScrollTrigger.min.js' && attempt === 1) {
      if (scenario === 'failure') { res.writeHead(503).end('intentional dependency failure'); return; }
      if (scenario === 'invalid') { res.setHeader('Content-Type', 'text/javascript'); res.end('/* intentional missing API */'); return; }
    }
    fs.readFile(target, (error, content) => {
      if (error) { res.writeHead(404).end(); return; }
      const types = { '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
      res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream'); res.end(content);
    });
  }
  const ms = url.pathname === '/vendor/gsap.min.js' && ['late', 'replaced'].includes(scenario) ? 500 :
    url.pathname === '/vendor/ScrollTrigger.min.js' && scenario === 'timeout' && attempt === 1 ? 18_000 : 0;
  if (ms) { const timer = setTimeout(() => { delays.delete(timer); send(); }, ms); delays.add(timer); }
  else send();
});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class CDP {
  constructor(socket) {
    this.socket = socket; this.next = 1; this.pending = new Map(); this.events = [];
    socket.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id); if (!pending) return;
        this.pending.delete(message.id); clearTimeout(pending.timer);
        message.error ? pending.reject(new Error(JSON.stringify(message.error))) : pending.resolve(message.result);
      } else this.events.push(message);
    });
  }
  static async connect(url) {
    const socket = new WebSocket(url);
    await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
    return new CDP(socket);
  }
  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.next++, timer = setTimeout(() => { this.pending.delete(id); reject(new Error('CDP timeout: ' + method)); }, 30_000);
      this.pending.set(id, { resolve, reject, timer }); this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  async evaluate(expression) {
    const response = await this.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.text + ': ' + response.exceptionDetails.exception?.description);
    return response.result.value;
  }
  async wait(expression, timeout = 25_000) {
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) { const result = await this.evaluate(expression); if (result) return result; await sleep(50); }
    throw new Error('Browser evidence timeout: ' + expression);
  }
}
async function compare(a, b, diff) {
  const one = await sharp(a).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const two = await sharp(b).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  if (one.info.width !== two.info.width || one.info.height !== two.info.height) throw new Error('Screenshot dimensions differ');
  const output = Buffer.alloc(one.data.length); let changed = 0, absolute = 0;
  for (let i = 0; i < one.data.length; i += 3) {
    let max = 0;
    for (let c = 0; c < 3; c++) { const delta = Math.abs(one.data[i+c] - two.data[i+c]); max = Math.max(max, delta); absolute += delta; }
    if (max > 16) { changed++; output[i] = 255; }
    else for (let c = 0; c < 3; c++) output[i+c] = Math.round(one.data[i+c] * .25);
  }
  await sharp(output, { raw: one.info }).png().toFile(diff);
  return { changedPixels: changed, changedPercent: changed / (one.info.width * one.info.height) * 100, meanAbsoluteChannelDifference: absolute / one.data.length };
}
async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const profile = fs.mkdtempSync(path.join(__dirname, '.browser-profile-'));
  const child = spawn(browser, ['--headless', '--disable-gpu', '--no-first-run', '--disable-extensions', '--no-proxy-server', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
  const exited = new Promise(resolve => child.once('exit', resolve));
  let browserCDP;
  const evidence = { scenarios: [], visual: [], requests };
  if (process.argv.includes('--visual-only')) {
    const previous = JSON.parse(fs.readFileSync(path.join(artifacts, 'browser-evidence.json'), 'utf8'));
    evidence.scenarios = previous.scenarios;
    requests.push(...previous.requests);
  }
  try {
    let port;
    for (let i = 0; i < 100; i++) {
      try { port = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0]; break; } catch { await sleep(100); }
    }
    if (!port) throw new Error('Headless browser did not expose its isolated debugging port');
    const version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
    browserCDP = await CDP.connect(version.webSocketDebuggerUrl);
    // No external network is needed. CSS/fonts/images/vendors all come from this workspace.
    async function page(width, height, mobile) {
      const created = await browserCDP.send('Target.createTarget', { url: 'about:blank' });
      const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const cdp = await CDP.connect(targets.find(target => target.id === created.targetId).webSocketDebuggerUrl);
      await cdp.send('Runtime.enable'); await cdp.send('Log.enable'); await cdp.send('Network.enable'); await cdp.send('Page.enable');
      await cdp.send('Network.setBlockedURLs', { urls: ['https://*', 'http://www.*'] });
      await cdp.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
      return { cdp, id: created.targetId, async close() { cdp.socket.close(); await browserCDP.send('Target.closeTarget', { targetId: created.targetId }); } };
    }
    for (const viewport of [{ name: 'desktop', width: 1440, height: 1000, mobile: false }, { name: 'mobile', width: 390, height: 844, mobile: true }].filter(item => !process.argv.includes('--desktop-only') || item.name === 'desktop')) {
      const requested = process.argv.find(arg => arg.startsWith('--case='))?.slice(7);
      for (const scenario of process.argv.includes('--visual-only') ? [] : requested ? [requested] : ['strict', 'late', 'failure', 'invalid', 'timeout', 'replaced', 'mount-failure', 'missing', 'duplicate']) {
        const tab = await page(viewport.width, viewport.height, viewport.mobile);
        try {
          await tab.cdp.send('Page.navigate', { url: origin + '/?case=' + scenario + '&viewport=' + viewport.name });
          const report = await tab.cdp.wait('window.__reactEvidence');
          const runtimeErrors = tab.cdp.events.filter(event => event.method === 'Runtime.exceptionThrown' ||
            event.method === 'Runtime.consoleAPICalled' && event.params.type === 'error');
          const expectedFailures = ['failure', 'invalid', 'timeout', 'mount-failure', 'missing'].includes(scenario);
          const networkErrors = tab.cdp.events.filter(event => event.method === 'Log.entryAdded' && event.params.entry.level === 'error');
          const item = { viewport: viewport.name, ...report, runtimeErrors, networkErrors, expectedFailures };
          evidence.scenarios.push(item);
          fs.writeFileSync(path.join(artifacts, 'browser-evidence.json'), JSON.stringify(evidence, null, 2) + '\n');
          console.log(`${report.results.every(result => result.passed) && !runtimeErrors.length ? 'PASS' : 'FAIL'}: ${viewport.name} ${scenario} (${report.results.length} assertions groups)`);
          for (const result of report.results.filter(result => !result.passed)) console.log(result.error);
          if (runtimeErrors.length) console.log(JSON.stringify(runtimeErrors));
        } finally { await tab.close(); }
      }
      if (process.argv.includes('--no-visual')) continue;
      const captures = {};
      for (const mode of ['reference', 'candidate']) {
        const tab = await page(viewport.width, viewport.height, viewport.mobile);
        try {
          await tab.cdp.send('Page.navigate', { url: origin + (mode === 'reference' ? '/?reference=v6' : '/?case=visual') });
          await tab.cdp.wait('window.__visualReady');
          for (const [name, selector] of [['hero', '#section-hero'], ['sports', '#sports-sports'], ['pricing', '#section-pricing .pricing'], ['faq', '#faq-faq'], ['final', '#final-finale']]) {
            await tab.cdp.evaluate(`(async()=>{const element=document.querySelector(${JSON.stringify(selector)});const offset=${name === 'final' ? '.7' : '0'}*Math.max(0,element.offsetHeight-innerHeight);window.scrollTo({top:element.getBoundingClientRect().top+scrollY+offset,behavior:'instant'});window.dispatchEvent(new Event('scroll'));await new Promise(resolve=>setTimeout(resolve,1100));})()`);
            const screenshot = await tab.cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
            const file = path.join(artifacts, `${viewport.name}-${name}-${mode}.png`);
            fs.writeFileSync(file, Buffer.from(screenshot.data, 'base64')); captures[mode + ':' + name] = file;
          }
          const errors = tab.cdp.events.filter(event => event.method === 'Runtime.exceptionThrown');
          if (errors.length) throw new Error('Visual capture had runtime exceptions: ' + JSON.stringify(errors));
        } finally { await tab.close(); }
      }
      for (const name of ['hero', 'sports', 'pricing', 'faq', 'final']) {
        const metrics = await compare(captures['reference:' + name], captures['candidate:' + name], path.join(artifacts, `${viewport.name}-${name}-diff.png`));
        evidence.visual.push({ viewport: viewport.name, section: name, ...metrics });
        console.log(`VISUAL: ${viewport.name} ${name}: ${metrics.changedPercent.toFixed(4)}% changed pixels`);
      }
    }
    fs.writeFileSync(path.join(artifacts, 'browser-evidence.json'), JSON.stringify(evidence, null, 2) + '\n');
    if (evidence.scenarios.some(item => item.runtimeErrors.length || item.results.some(result => !result.passed))) process.exitCode = 1;
  } finally {
    for (const timer of delays) clearTimeout(timer);
    if (browserCDP) { await browserCDP.send('Browser.close').catch(() => {}); browserCDP.socket.close(); }
    else child.kill();
    await Promise.race([exited, sleep(5000)]);
    await sleep(1000);
    if (path.dirname(fs.realpathSync(profile)) !== fs.realpathSync(__dirname)) throw new Error('Unexpected browser profile location');
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 40, retryDelay: 200 });
    server.close(); server.closeAllConnections();
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; server.close(); server.closeAllConnections(); });
