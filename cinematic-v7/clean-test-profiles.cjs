const fs = require('node:fs');
const path = require('node:path');
// Only generated browser test profiles inside this candidate directory may be removed.
for (const entry of fs.readdirSync(__dirname, { withFileTypes: true })) {
  if (!entry.isDirectory() || !/^\.browser-profile-[A-Za-z0-9]+$/.test(entry.name)) continue;
  const target = fs.realpathSync(path.join(__dirname, entry.name));
  if (path.dirname(target) !== fs.realpathSync(__dirname)) throw new Error('Profile resolves outside candidate directory');
  fs.rmSync(target, { recursive: true, force: true, maxRetries: 20, retryDelay: 200 });
  console.log('Removed isolated test profile: ' + entry.name);
}
