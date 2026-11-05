const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const checks = [
  ...fs.readdirSync(__dirname).filter(name => /\.(mjs|cjs)$/.test(name)).map(name => ['node', ['--check', 'cinematic-v7/' + name]]),
  ['node', ['--test', 'cinematic-v7/contract.test.cjs']],
  ['node', ['cinematic-v7/extract-sections.cjs', '--check']],
  ['node', ['test-cinematic-wrapper.cjs']],
  ['node', ['test-cinematic-gsap-lifecycle.cjs']],
  ['npx', ['tsc', '--noEmit']],
  ['npm', ['run', 'build']],
  ['node', ['cinematic-v7/verify-boundaries.cjs']]
];
const results = [];
for (const [command, args] of checks) {
  const label = [command, ...args].join(' ');
  console.log('\n' + label);
  const start = Date.now();
  const windowsScript = process.platform === 'win32' && ['npm', 'npx'].includes(command);
  // Only fixed, repository-owned commands enter cmd; Node scripts run directly.
  const result = spawnSync(windowsScript ? process.env.ComSpec || 'cmd.exe' : process.execPath,
    windowsScript ? ['/d', '/s', '/c', label] : args,
    { cwd: path.resolve(__dirname, '..'), encoding: 'utf8', timeout: 240000, windowsHide: true });
  const output = (result.stdout || '') + (result.stderr || '') + (result.error?.message || '');
  console.log(output);
  results.push({ command: label, exitCode: result.status, milliseconds: Date.now() - start, output });
}
fs.writeFileSync(path.join(__dirname, 'verification-results.json'), JSON.stringify(results, null, 2) + '\n');
process.exitCode = results.some(result => result.exitCode !== 0) ? 1 : 0;
