const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const base = path.resolve(__dirname, '..');
const manifest = path.join(__dirname, 'baseline.json');
function scan(directory, prefix = '') {
  const hashes = {};
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'cinematic-v7-react', 'V7-REACT-REPORT.md', 'tsconfig.tsbuildinfo'].includes(entry.name)) continue;
    const name = prefix + entry.name, target = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Unexpected link: ' + name);
    if (entry.isDirectory()) Object.assign(hashes, scan(target, name + '/'));
    else hashes[name] = crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex');
  }
  return hashes;
}
const hashes = scan(base);
if (process.argv.includes('--capture')) {
  assert(!fs.existsSync(manifest), 'Baseline must never be overwritten');
  fs.writeFileSync(manifest, JSON.stringify(hashes, null, 2) + '\n');
  console.log(`Captured ${Object.keys(hashes).length} pre-existing files`);
} else {
  assert.deepEqual(hashes, JSON.parse(fs.readFileSync(manifest, 'utf8')));
  console.log(`PASS: ${Object.keys(hashes).length} pre-existing files unchanged`);
}
