const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const assert = require('node:assert/strict');
const base = path.resolve(__dirname, '..');
const artifacts = path.join(__dirname, 'artifacts');
const routes = () => Object.keys(JSON.parse(fs.readFileSync(path.join(base, '.next/server/app-paths-manifest.json'), 'utf8'))).sort();
const before = routes();
const checks = [
  ...fs.readdirSync(__dirname).filter(name => /\.cjs$/.test(name)).map(name => ['node', ['--check', 'cinematic-v7-react/' + name]]),
  ['node', ['--test', 'cinematic-v7-react/contract.test.cjs']],
  ['node', ['--test', 'cinematic-v7/contract.test.cjs']],
  ['node', ['cinematic-v7/extract-sections.cjs', '--check']],
  ['node', ['test-cinematic-wrapper.cjs']],
  ['node', ['test-cinematic-gsap-lifecycle.cjs']],
  ['npx', ['tsc', '--noEmit']],
  ['npm', ['run', 'build']],
  ['node', ['cinematic-v7-react/integrity.cjs']],
];
const results = [];
for (const [command, args] of checks) {
  const label = [command, ...args].join(' '); console.log('\n' + label);
  const npm = ['npm', 'npx'].includes(command), start = Date.now();
  const result = spawnSync(npm && process.platform === 'win32' ? process.env.ComSpec || 'cmd.exe' : npm ? command : process.execPath,
    npm && process.platform === 'win32' ? ['/d', '/s', '/c', label] : args,
    { cwd: base, windowsHide: true, encoding: 'utf8', timeout: 240_000 });
  const output = (result.stdout || '') + (result.stderr || '') + (result.error?.message || '');
  console.log(output); results.push({ command: label, exitCode: result.status, milliseconds: Date.now() - start, output });
}
try {
  assert.deepEqual(routes(), before, 'Production route inventory changed');
  const source = fs.readFileSync(path.join(artifacts, 'server-markup.html'), 'utf8');
  assert(source.includes('id="cinematic-home"') && source.includes('id="section-final"'), 'Server Component fixture missing');
  const html = fs.readFileSync(path.join(base, '.next/server/app/index.html'), 'utf8');
  assert(!/cinematic-v7|CinematicRuntimeClient|harness\.js/.test(html), 'Candidate appeared on homepage');
  const sitemap = fs.readFileSync(path.join(base, 'app/sitemap.ts'), 'utf8');
  assert(!/cinematic-v7|harness/.test(sitemap), 'Candidate appeared in sitemap');
  results.push({ command: 'route inventory / homepage / sitemap isolation', exitCode: 0, output: 'PASS: same production routes; no harness or V7 activation', routes: before });
  console.log('PASS: same production route inventory; homepage and sitemap contain no candidate');
} catch (error) { results.push({ command: 'route / homepage / sitemap isolation', exitCode: 1, output: String(error.stack) }); console.error(error); }
fs.writeFileSync(path.join(artifacts, 'verification.json'), JSON.stringify(results, null, 2) + '\n');
process.exitCode = results.some(result => result.exitCode !== 0) ? 1 : 0;
