import { createCinematicRuntime as factory } from './runtime.mjs';
let instances = [], fixtures = [];
function createCinematicRuntime(options) { const runtime = factory(options); instances.push(runtime); return runtime; }
const results = [];
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const equal = (a, b, message) => assert(JSON.stringify(a) === JSON.stringify(b), message);
const tick = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };
const source = await (await fetch('/cinematic-source/index.html')).text();
const template = new DOMParser().parseFromString(source, 'text/html').querySelector('main');
const keys = ['hero', 'sports', 'universe', 'devices', 'pricing', 'how', 'trust', 'faq', 'final'];
const original = {
  add: EventTarget.prototype.addEventListener, remove: EventTarget.prototype.removeEventListener,
  raf: window.requestAnimationFrame, cancel: window.cancelAnimationFrame,
  matchMedia: window.matchMedia, decode: HTMLImageElement.prototype.decode,
  fonts: Object.getOwnPropertyDescriptor(document, 'fonts')
};
let active = [], queue = new Map(), nextId = 1;
EventTarget.prototype.addEventListener = function(type, callback, options) {
  const capture = typeof options === 'boolean' ? options : !!options?.capture;
  if (!active.some(x => x.target === this && x.type === type && x.callback === callback && x.capture === capture)) active.push({ target: this, type, callback, capture });
  return original.add.call(this, type, callback, options);
};
EventTarget.prototype.removeEventListener = function(type, callback, options) {
  const capture = typeof options === 'boolean' ? options : !!options?.capture;
  active = active.filter(x => !(x.target === this && x.type === type && x.callback === callback && x.capture === capture));
  return original.remove.call(this, type, callback, options);
};
window.requestAnimationFrame = callback => { const id = nextId++; queue.set(id, callback); return id; };
window.cancelAnimationFrame = id => queue.delete(id);
let reduced = false;
window.matchMedia = query => Object.assign(new EventTarget(), {
  media: query, matches: query.includes('prefers-reduced-motion: reduce') ? reduced : true
});
let resolveImages, resolveFonts;
function deferredAssets() {
  const images = new Promise(resolve => { resolveImages = resolve; });
  const fonts = new Promise(resolve => { resolveFonts = resolve; });
  HTMLImageElement.prototype.decode = () => images;
  Object.defineProperty(document, 'fonts', { configurable: true, value: { ready: fonts } });
}
function fixture() {
  const root = template.cloneNode(true);
  document.body.append(root);
  fixtures.push(root);
  return root;
}
function dependencies({ failAt = 0, cleanupFailure = false } = {}) {
  let scope, count = 0;
  const contexts = [], media = [];
  const ScrollTrigger = { refreshes: 0, refresh() { this.refreshes++; } };
  const gsap = {
    registerPlugin() {},
    context(callback, element) {
      const context = { reverts: 0, add(fn) {
        const previous = scope; scope = element;
        try { fn(); } finally { scope = previous; }
      }, revert() { this.reverts++; if (cleanupFailure) throw new Error('injected cleanup failure'); } };
      contexts.push(context); callback(); return context;
    },
    matchMedia() {
      const instance = { reverts: 0, callbacks: [], add(query, fn) {
        this.callbacks.push(fn);
        if (++count === failAt) throw new Error('injected section failure');
        fn({ conditions: { motion: !reduced, mobile: false, desktop: true } });
      }, revert() { this.reverts++; } };
      media.push(instance); return instance;
    },
    utils: { toArray(selector) { return [...scope.querySelectorAll(selector)]; } },
    set() {}, to() {}, timeline() { return { to() { return this; }, revert() {} }; }
  };
  return { gsap, ScrollTrigger, contexts, media };
}
function noResources(runtime, message = '') {
  equal(runtime.getStatus().resources, { listeners: 0, frames: 0, contexts: 0, matchMedia: 0, bus: 0 }, 'owner resources released ' + message);
  equal(active.length, 0, 'native listeners removed ' + message);
  equal(queue.size, 0, 'native RAF queue empty ' + message);
}
async function test(name, fn) {
  try { await fn(); results.push({ name, passed: true }); }
  catch (error) { results.push({ name, passed: false, error: error.stack }); }
  finally {
    for (const runtime of instances) runtime.destroy();
    for (const root of fixtures) root.remove();
    instances = []; fixtures = [];
  }
}
await test('Mount/destroy; nine initializers; listener, Event Bus, RAF, Context and MatchMedia cleanup', async () => {
  deferredAssets(); const root = fixture(), before = root.outerHTML, deps = dependencies();
  const runtime = createCinematicRuntime({ root, ...deps });
  equal(runtime.getStatus().state, 'idle', 'initial state');
  runtime.mount();
  equal(runtime.getStatus().mounted, keys, 'nine sections in original order');
  assert(root.querySelectorAll('#section-pricing .plan').length === 4, 'pricing initialized');
  assert(active.length > 20, 'native DOM and media listeners exercised');
  assert(queue.size > 0, 'RAF work pending');
  equal(active.filter(x => x.target === window && x.type === 'scroll').length, 1, 'one native scroll bus listener');
  equal(active.filter(x => x.target === window && x.type === 'resize').length, 1, 'one native resize bus listener');
  equal(deps.contexts.length, 9, 'nine contexts'); equal(deps.media.length, 2, 'two GSAP media owners');
  runtime.destroy(); noResources(runtime);
  assert(deps.contexts.every(c => c.reverts === 1), 'all contexts reverted once');
  assert(deps.media.every(m => m.reverts === 1), 'all MatchMedia instances reverted once');
  equal(root.outerHTML, before, 'original DOM restored'); root.remove();
  resolveImages(); resolveFonts(); await tick();
});
await test('Repeated mount registers nothing twice; status snapshots cannot mutate runtime', () => {
  deferredAssets(); const root = fixture(), deps = dependencies(), runtime = createCinematicRuntime({ root, ...deps });
  runtime.mount(); const count = active.length, frames = queue.size;
  runtime.mount(); equal(active.length, count, 'listener count unchanged'); equal(queue.size, frames, 'RAF count unchanged');
  equal(deps.contexts.length, 9, 'contexts unchanged');
  runtime.getStatus().mounted.length = 0; equal(runtime.getStatus().mounted.length, 9, 'status copied');
  runtime.destroy(); root.remove();
});
await test('Double destroy and destroy before mount are safe', () => {
  deferredAssets(); const root = fixture(), deps = dependencies(), runtime = createCinematicRuntime({ root, ...deps });
  runtime.mount(); runtime.destroy(); runtime.destroy(); noResources(runtime);
  assert(deps.contexts.every(c => c.reverts === 1), 'cleanup not repeated');
  const idle = createCinematicRuntime({ root, ...dependencies() }); idle.destroy(); idle.destroy();
  let rejected = false; try { idle.mount(); } catch { rejected = true; } assert(rejected, 'terminal instance cannot restart'); root.remove();
});
await test('Fresh mount on same DOM restores FAQ behavior without duplicate handlers', async () => {
  deferredAssets(); const root = fixture();
  let runtime = createCinematicRuntime({ root, ...dependencies() }); runtime.mount();
  const firstCount = active.length;
  root.querySelector('#section-faq .question').click(); runtime.destroy(); noResources(runtime);
  runtime = createCinematicRuntime({ root, ...dependencies() }); runtime.mount();
  equal(active.length, firstCount, 'same number of listeners on remount');
  const button = root.querySelector('#section-faq .question'), old = button.getAttribute('aria-expanded');
  button.click(); assert(button.getAttribute('aria-expanded') !== old, 'FAQ toggles exactly once');
  runtime.destroy(); root.remove(); resolveImages(); resolveFonts(); await tick();
});
await test('Detached DOM and already queued callbacks cannot mutate after destruction', async () => {
  deferredAssets(); const root = fixture(), deps = dependencies(), runtime = createCinematicRuntime({ root, ...deps }); runtime.mount();
  const frames = [...queue.values()], lateClick = active.find(x => x.type === 'click').callback;
  runtime.destroy(); root.remove(); const before = root.outerHTML, refreshes = deps.ScrollTrigger.refreshes;
  for (const callback of frames) callback(100);
  for (const media of deps.media) for (const callback of media.callbacks) callback({ conditions: { motion: true, desktop: true } });
  lateClick(new Event('click')); window.dispatchEvent(new Event('scroll')); window.dispatchEvent(new Event('resize'));
  resolveImages(); resolveFonts(); await tick();
  equal(root.outerHTML, before, 'late callbacks did not mutate detached DOM');
  equal(deps.ScrollTrigger.refreshes, refreshes, 'late assets did not refresh ScrollTrigger');
  equal(runtime.getStatus().assetsReady, false, 'late assets not marked ready'); noResources(runtime);
});
await test('Two instances own independent buses and DOM; destroying one leaves the other working', () => {
  deferredAssets(); const first = fixture(), second = fixture();
  const a = createCinematicRuntime({ root: first, ...dependencies() }), b = createCinematicRuntime({ root: second, ...dependencies() });
  a.mount(); b.mount();
  equal(active.filter(x => x.target === window && x.type === 'scroll').length, 2, 'one bus per instance');
  a.destroy();
  equal(active.filter(x => x.target === window && x.type === 'scroll').length, 1, 'other native bus remains');
  const button = second.querySelector('#section-faq .question'), old = button.getAttribute('aria-expanded');
  button.click(); assert(button.getAttribute('aria-expanded') !== old, 'other instance still interactive');
  b.destroy(); noResources(b); first.remove(); second.remove();
});
await test('Live async completion refreshes successfully; reduced motion branch mounts', async () => {
  deferredAssets(); reduced = true; const root = fixture(), deps = dependencies(), runtime = createCinematicRuntime({ root, ...deps });
  runtime.mount(); resolveImages(); resolveFonts(); await tick();
  equal(runtime.getStatus().assetsReady, true, 'live assets ready'); assert(deps.ScrollTrigger.refreshes > 0, 'live refresh');
  runtime.destroy(); noResources(runtime); root.remove(); reduced = false;
});
await test('Failure inside section initialization rolls back partially created contexts/media and listeners', async () => {
  deferredAssets(); const root = fixture(), before = root.outerHTML, deps = dependencies({ failAt: 2 });
  const runtime = createCinematicRuntime({ root, ...deps });
  let threw = false; try { runtime.mount(); } catch (error) { threw = error.message.includes('injected section failure'); }
  assert(threw, 'mount surfaced initialization failure'); equal(runtime.getStatus().state, 'failed', 'failed status'); noResources(runtime);
  assert(deps.contexts.every(c => c.reverts === 1), 'partial context reverted');
  assert(deps.media.every(m => m.reverts === 1), 'partial media reverted'); equal(root.outerHTML, before, 'failure restored DOM');
  resolveImages(); resolveFonts(); await tick(); equal(deps.ScrollTrigger.refreshes, 0, 'failed instance async suppressed');
  runtime.destroy(); runtime.destroy(); root.remove();
});
await test('Failure after previous sections ran restores mutated DOM and permits a fresh instance', () => {
  deferredAssets(); const root = fixture(); root.querySelector('#section-final').remove(); const before = root.outerHTML;
  const runtime = createCinematicRuntime({ root, ...dependencies() });
  let threw = false; try { runtime.mount(); } catch { threw = true; } assert(threw, 'missing section rejected');
  noResources(runtime); equal(root.outerHTML, before, 'all earlier mutations rolled back');
  root.append(template.querySelector('#section-final').cloneNode(true));
  const fresh = createCinematicRuntime({ root, ...dependencies() }); fresh.mount(); equal(fresh.getStatus().mounted, keys, 'fresh instance works'); fresh.destroy(); root.remove();
});
await test('Cleanup continues if one GSAP cleanup throws', () => {
  deferredAssets(); const root = fixture(), deps = dependencies({ cleanupFailure: true }), runtime = createCinematicRuntime({ root, ...deps });
  runtime.mount(); runtime.destroy(); noResources(runtime);
  equal(runtime.getStatus().cleanupErrors.length, 9, 'cleanup errors inspectable');
  assert(deps.contexts.every(c => c.reverts === 1), 'every cleanup attempted'); root.remove();
});

// Restore native browser APIs before testing the locally vendored real GSAP/ScrollTrigger.
EventTarget.prototype.addEventListener = original.add;
EventTarget.prototype.removeEventListener = original.remove;
window.requestAnimationFrame = original.raf; window.cancelAnimationFrame = original.cancel;
window.matchMedia = original.matchMedia; HTMLImageElement.prototype.decode = original.decode;
if (original.fonts) Object.defineProperty(document, 'fonts', original.fonts); else delete document.fonts;
await test('Real browser DOM + vendored GSAP/ScrollTrigger: mount, scroll, destroy, fresh mount', async () => {
  const globals = ['__cinematicLifecycle', '__cinematicTracking', '__cinematicTrackGsapMedia', 'integrationStatus'];
  const beforeGlobals = globals.map(key => window[key]);
  const root = fixture(), before = root.outerHTML;
  const baseline = window.ScrollTrigger.getAll().length;
  let runtime;
  try {
    for (let i = 0; i < 2; i++) {
      runtime = createCinematicRuntime({ root, gsap: window.gsap, ScrollTrigger: window.ScrollTrigger });
      runtime.mount(); equal(runtime.getStatus().mounted, keys, 'real nine sections');
      await new Promise(resolve => setTimeout(resolve, 150));
      window.dispatchEvent(new Event('scroll')); window.dispatchEvent(new Event('resize'));
      root.querySelector('#section-faq .question').click();
      runtime.destroy();
      equal(window.ScrollTrigger.getAll().length, baseline, 'no owned ScrollTriggers survive');
      equal(root.outerHTML, before, 'real GSAP DOM restored');
    }
    equal(globals.map(key => window[key]), beforeGlobals, 'no runtime globals published');
  } finally { runtime?.destroy(); root.remove(); }
});
await test('Real GSAP failure inside an initializer rolls back and allows a fresh mount', () => {
  const root = fixture(), plans = root.querySelector('#pricing-plans');
  const parent = plans.parentNode, next = plans.nextSibling; plans.remove();
  const before = root.outerHTML, baseline = window.ScrollTrigger.getAll().length;
  const runtime = createCinematicRuntime({ root, gsap: window.gsap, ScrollTrigger: window.ScrollTrigger });
  let threw = false; try { runtime.mount(); } catch { threw = true; }
  assert(threw, 'real initialization failure surfaced');
  equal(root.outerHTML, before, 'real failure DOM rollback');
  equal(window.ScrollTrigger.getAll().length, baseline, 'real failure trigger rollback');
  equal(runtime.getStatus().resources.listeners, 0, 'real failure listeners released');
  parent.insertBefore(plans, next);
  const fresh = createCinematicRuntime({ root, gsap: window.gsap, ScrollTrigger: window.ScrollTrigger });
  fresh.mount(); fresh.destroy();
  equal(window.ScrollTrigger.getAll().length, baseline, 'real fresh mount cleanup'); root.remove();
});
await fetch('/result', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userAgent: navigator.userAgent, viewport: { width: innerWidth, height: innerHeight }, results }) });
document.body.textContent = JSON.stringify(results);
