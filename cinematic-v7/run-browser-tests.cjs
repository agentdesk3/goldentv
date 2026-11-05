const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const base = path.resolve(__dirname, '..');
const mutateRAF = process.argv.includes('--mutate-raf');
const mobile = process.argv.includes('--mobile');
const browser = [process.env.CINEMATIC_TEST_BROWSER, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'].filter(Boolean).find(p => fs.existsSync(p));
if (!browser) throw new Error('No local Chromium browser; set CINEMATIC_TEST_BROWSER');
const profile = fs.mkdtempSync(path.join(__dirname, '.browser-profile-'));
let child, timer, finished = false;
const server = http.createServer((req, res) => {
  if (req.url === '/result' && req.method === 'POST') {
    let body = ''; req.on('data', chunk => { body += chunk; });
    req.on('end', () => { res.end('ok'); finish(JSON.parse(body)); }); return;
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<!doctype html><html><head><link rel="stylesheet" href="/cinematic-scoped.css"></head><body><script src="/vendor/gsap.min.js"></script><script src="/vendor/ScrollTrigger.min.js"></script><script type="module" src="/cinematic-v7/browser-tests.mjs"></script></body></html>'); return;
  }
  const url = new URL(req.url, 'http://localhost');
  const relative = decodeURIComponent(url.pathname).slice(1);
  const target = path.resolve(base, relative.startsWith('cinematic-v7/') || relative.startsWith('cinematic-source/') ? relative : 'public/' + relative);
  if (!target.startsWith(base + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(target, (error, data) => {
    if (error) { res.writeHead(404).end(); return; }
    if (mutateRAF && target === path.join(__dirname, 'runtime.mjs')) {
      data = Buffer.from(data.toString('utf8').replace('if (alive()) callback(time);', 'callback(time);'));
    }
    const types = { '.mjs': 'text/javascript', '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' };
    res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream'); res.end(data);
  });
});
function finish(report) {
  if (finished) return; finished = true; clearTimeout(timer);
  fs.writeFileSync(path.join(__dirname, mutateRAF ? 'mutation-results.json' : mobile ? 'browser-results-mobile.json' : 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(report.userAgent || 'Browser runner');
  for (const result of report.results) console.log(`${result.passed ? 'PASS' : 'FAIL'}: ${result.name}${result.error ? '\n' + result.error : ''}`);
  if (mutateRAF) {
    const caught = report.results.some(result => !result.passed && result.name.startsWith('Detached DOM'));
    console.log(caught ? 'PASS: suite detected removal of RAF destruction guard' : 'FAIL: RAF mutation escaped detection');
    process.exitCode = caught ? 0 : 1;
  } else process.exitCode = report.results.some(result => !result.passed) ? 1 : 0;
  if (child) child.kill(); server.close(); server.closeAllConnections();
}
server.listen(0, '127.0.0.1', () => {
  child = spawn(browser, ['--headless', '--disable-gpu', '--no-first-run', '--disable-extensions', '--no-proxy-server', mobile ? '--window-size=500,900' : '--window-size=1440,1000', '--user-data-dir=' + profile, `http://127.0.0.1:${server.address().port}/`], { windowsHide: true, stdio: 'ignore' });
  child.on('error', error => finish({ results: [{ name: 'browser launch', passed: false, error: error.message }] }));
  child.on('exit', () => {
    if (!finished) finish({ results: [{ name: 'browser exited before reporting', passed: false }] });
    if (!profile.startsWith(__dirname + path.sep + '.browser-profile-')) throw new Error('Unexpected profile path');
    fs.rm(profile, { recursive: true, force: true, maxRetries: 20, retryDelay: 200 }, error => {
      if (error) { console.error('Could not remove isolated test profile:', error.message); process.exitCode = 1; }
    });
  });
  timer = setTimeout(() => finish({ results: [{ name: 'browser suite timeout', passed: false, error: 'No result within 45 seconds' }] }), 45000);
});
