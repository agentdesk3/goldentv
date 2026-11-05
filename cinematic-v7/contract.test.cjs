const { test } = require('node:test');
const assert = require('node:assert/strict');
test('factory imports without browser globals and validates its root', async () => {
  const { createCinematicRuntime } = await import('./runtime.mjs');
  assert.equal(typeof createCinematicRuntime, 'function');
  assert.throws(() => createCinematicRuntime({ root: null }), /root/);
});
