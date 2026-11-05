const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const base = path.resolve(__dirname, '..');
const manifest = path.join(__dirname, 'source-baseline.json');
function scan(dir, prefix = '') {
  const result = {};
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'cinematic-v7', 'V7-REPORT.md', 'tsconfig.tsbuildinfo'].includes(entry.name)) continue;
    const key = prefix + entry.name;
    if (entry.isSymbolicLink()) throw new Error(`Unexpected link: ${key}`);
    if (entry.isDirectory()) Object.assign(result, scan(path.join(dir, entry.name), key + '/'));
    else result[key] = crypto.createHash('sha256').update(fs.readFileSync(path.join(dir, entry.name))).digest('hex');
  }
  return result;
}
const current = scan(base);
if (process.argv.includes('--capture')) {
  if (fs.existsSync(manifest)) throw new Error('Baseline already exists');
  fs.writeFileSync(manifest, JSON.stringify(current, null, 2) + '\n');
  console.log(`Captured ${Object.keys(current).length} existing source files`);
} else {
  const baseline = JSON.parse(fs.readFileSync(manifest, 'utf8'));
  require('node:assert/strict').deepEqual(current, baseline);
  console.log(`PASS: ${Object.keys(current).length} existing files unchanged, including routes, SEO, HTML, CSS, and V6`);
}
