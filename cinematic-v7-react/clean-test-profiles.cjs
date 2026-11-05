const fs = require('node:fs');
const path = require('node:path');
for (const entry of fs.readdirSync(__dirname, { withFileTypes: true })) {
  if (!entry.isDirectory() || !/^\.browser-profile-[A-Za-z0-9]+$/.test(entry.name)) continue;
  const target = fs.realpathSync(path.join(__dirname, entry.name));
  if (path.dirname(target) !== fs.realpathSync(__dirname)) throw new Error('Unexpected profile location');
  fs.rmSync(target, { recursive: true, force: true, maxRetries: 40, retryDelay: 200 });
  console.log('Removed isolated harness profile: ' + entry.name);
}
