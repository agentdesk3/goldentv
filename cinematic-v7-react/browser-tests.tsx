import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import CinematicRuntimeClient, { defaultServices } from './CinematicRuntimeClient';

type Runtime = ReturnType<typeof defaultServices.createRuntime>;
type HarnessWindow = Window & { __reactEvidence?: unknown; __visualReady?: boolean; ScrollTrigger?: { getAll(): unknown[] }; gsap?: { ticker: { sleep(): void } } };
const view = window as HarnessWindow;
const results: { name: string; passed: boolean; error?: string }[] = [];
const assert: (condition: unknown, message: string) => asserts condition = (condition, message) => { if (!condition) throw new Error(message); };
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(predicate: () => boolean, timeout = 20_000) {
  const deadline = performance.now() + timeout;
  while (!predicate()) { if (performance.now() > deadline) throw new Error('Harness wait timed out'); await delay(20); }
}

const target = document.getElementById('cinematic-home')!;
const originalHTML = target.outerHTML;
const slot = document.getElementById('react-controller')!;
let react: Root | undefined;
const signals: AbortSignal[] = [], instances: Runtime[] = [], failures: string[] = [];
const trace: string[] = [];
let owner: Runtime | undefined;
const nativeAdd = EventTarget.prototype.addEventListener;
const nativeRemove = EventTarget.prototype.removeEventListener;
const nativeRAF = window.requestAnimationFrame.bind(window), nativeCancel = window.cancelAnimationFrame.bind(window);
type Listener = { target: EventTarget; type: string; callback: EventListenerOrEventListenerObject; options?: boolean | AddEventListenerOptions; owner?: Runtime; runtimeOwned: boolean };
let listeners: Listener[] = [];
const frames = new Map<number, Runtime>();
let sharedBaseline = 0;
EventTarget.prototype.addEventListener = function(type, callback, options) {
  if (!owner || !callback) return nativeAdd.call(this, type, callback, options);
  const capture = typeof options === 'boolean' ? options : !!options?.capture;
  if (!listeners.some(item => item.target === this && item.type === type && item.callback === callback &&
    (typeof item.options === 'boolean' ? item.options : !!item.options?.capture) === capture)) {
    // V7's actual guard wrapper identifies native runtime registrations; GSAP's
    // shared scroll/wheel infrastructure is library-owned and must not be killed.
    const runtimeOwned = typeof callback === 'function' && callback.toString().includes('fn.apply(this, args)');
    listeners.push({ target: this, type, callback, options, owner, runtimeOwned });
  }
  return nativeAdd.call(this, type, callback, options);
};
EventTarget.prototype.removeEventListener = function(type, callback, options) {
  const capture = typeof options === 'boolean' ? options : !!options?.capture;
  const entry = listeners.find(item => item.target === this && item.type === type && item.callback === callback &&
    (typeof item.options === 'boolean' ? item.options : !!item.options?.capture) === capture);
  if (entry) listeners = listeners.filter(item => item !== entry);
  return nativeRemove.call(this, type, callback, options);
};
window.requestAnimationFrame = callback => {
  const runtime = callback.toString().includes('frames.delete(id)') ? owner || instances.findLast(instance => instance.getStatus().state === 'mounted') : undefined;
  const id = nativeRAF(time => {
    frames.delete(id); const prior = owner; owner = runtime;
    try { callback(time); } finally { owner = prior; }
  });
  if (runtime) frames.set(id, runtime);
  return id;
};
window.cancelAnimationFrame = id => { frames.delete(id); nativeCancel(id); };
const services: typeof defaultServices = {
  async loadDependencies(document, signal) { signals.push(signal); trace.push('effect:setup'); signal.addEventListener('abort', () => trace.push('effect:cleanup'), { once: true }); return defaultServices.loadDependencies(document, signal); },
  createRuntime(options) {
    const instance = defaultServices.createRuntime(options); instances.push(instance);
    const mount = instance.mount, destroy = instance.destroy;
    instance.mount = () => { trace.push('runtime:mount'); const previous = owner; owner = instance; try { return mount(); } finally { owner = previous; } };
    instance.destroy = () => { trace.push('runtime:destroy'); destroy(); };
    return instance;
  }
};
const onError = (error: Error) => failures.push(error.message);
function render(rootId?: string) {
  react = createRoot(slot);
  react.render(<StrictMode><CinematicRuntimeClient rootId={rootId} services={services} onError={onError} /></StrictMode>);
}
function unmount() { react?.unmount(); react = undefined; }
function noResources() {
  for (const instance of instances) {
    assert(Object.values(instance.getStatus().resources).every(value => value === 0), 'owned runtime resources survived cleanup');
    assert(instance.getStatus().cleanupErrors.length === 0, 'runtime cleanup reported an error');
  }
  assert(listeners.filter(item => item.runtimeOwned).length === 0, 'native runtime listeners survived React cleanup');
  assert(frames.size === 0, 'owned RAFs survived React cleanup');
  assert((view.ScrollTrigger?.getAll().length || 0) === 0, 'owned ScrollTriggers survived React cleanup');
}
async function check(name: string, fn: () => void | Promise<void>) {
  try { await fn(); results.push({ name, passed: true }); }
  catch (error) { results.push({ name, passed: false, error: error instanceof Error ? error.stack : String(error) }); }
}
async function active(count: number) {
  await waitFor(() => instances.length === count && instances[count - 1].getStatus().state === 'mounted');
  await waitFor(() => instances[count - 1].getStatus().assetsReady);
}
const scenario = new URLSearchParams(location.search).get('case') || 'strict';
async function run() {
  if (scenario === 'visual') {
    render(); await active(1); await document.fonts.ready;
    await delay(200); view.__visualReady = true; return;
  }
  if (scenario === 'strict') {
    await check('Real React Strict Mode setup → cleanup → setup cancels stale startup', async () => {
      render(); await active(1);
      assert(signals.length === 2 && signals[0].aborted && !signals[1].aborted, 'development Strict Mode replay did not occur');
      assert(instances.length === 1, 'cancelled effect created a runtime');
      assert(instances[0].getStatus().mounted.length === 9, 'not all sections mounted');
      assert(listeners.filter(item => item.runtimeOwned).length === instances[0].getStatus().resources.listeners, 'native registration instrumentation missed runtime listeners');
      assert(document.querySelectorAll('script[data-cinematic-vendor]').length === 2, 'duplicate vendor scripts');
      assert(failures.length === 0, 'unexpected initialization failure');
    });
    await check('Unmount destroys exact instance, removes native listeners/RAFs/ScrollTriggers and restores server HTML', () => {
      unmount(); noResources(); assert(target.outerHTML === originalHTML, 'server markup not restored');
      sharedBaseline = listeners.filter(item => !item.runtimeOwned).length;
      assert(trace.filter(item => item === 'runtime:destroy').length === 1, 'instance was not destroyed exactly once');
    });
    await check('Warm dependency remount uses a fresh instance; rerender adds no registrations; FAQ toggles once', async () => {
      render(); await active(2);
      const current = instances[1], count = listeners.length;
      react!.render(<StrictMode><CinematicRuntimeClient services={services} onError={onError} /></StrictMode>);
      await delay(60); assert(instances.length === 2 && listeners.length === count, 'rerender duplicated runtime/listeners');
      const button = target.querySelector<HTMLButtonElement>('#section-faq .question')!, expanded = button.getAttribute('aria-expanded');
      button.click(); assert(button.getAttribute('aria-expanded') !== expanded, 'FAQ duplicate listener or missing interaction');
      assert(current !== instances[0], 'destroyed instance reused');
      assert(document.querySelectorAll('script[data-cinematic-vendor]').length === 2, 'warm remount inserted duplicate scripts');
      const sharedBefore = listeners.filter(item => !item.runtimeOwned).length;
      unmount(); noResources(); assert(target.outerHTML === originalHTML, 'remount markup not restored');
      assert(listeners.filter(item => !item.runtimeOwned).length <= sharedBefore, 'shared vendor listeners grew on cleanup');
      assert(listeners.filter(item => !item.runtimeOwned).length === sharedBaseline, 'warm remount duplicated shared vendor infrastructure');
    });
  } else if (scenario === 'late') {
    await check('Unmount while GSAP is loading cannot create a stale runtime or request ScrollTrigger', async () => {
      render(); await waitFor(() => signals.length === 2); unmount();
      await delay(900); assert(instances.length === 0, 'runtime created after cancellation'); noResources();
      assert(!document.querySelector('script[src="/vendor/ScrollTrigger.min.js"]'), 'cancelled load continued dependency chain');
      assert(target.outerHTML === originalHTML, 'cancelled startup mutated DOM');
    });
    await check('Fresh effect can reuse the completed GSAP load after cancellation', async () => {
      render(); await active(1); unmount(); noResources(); assert(failures.length === 0, 'cancellation reported as a failure');
    });
  } else if (['failure', 'invalid', 'timeout'].includes(scenario)) {
    await check(`Local vendor ${scenario} leaves static HTML intact and creates no runtime`, async () => {
      render(); await waitFor(() => failures.length > 0);
      assert(instances.length === 0, 'runtime created without valid dependencies');
      assert(target.outerHTML === originalHTML, 'dependency failure changed markup');
      if (scenario === 'timeout') assert(failures[0].includes('Timed out'), 'timeout not surfaced');
      assert(!document.querySelector('script[src="/vendor/ScrollTrigger.min.js"]'), 'failed script not removed');
      unmount(); noResources();
    });
    await check(`Fresh effect retries after ${scenario} without duplicating GSAP`, async () => {
      render(); await active(1); assert(document.querySelectorAll('script[src="/vendor/gsap.min.js"]').length === 1, 'GSAP loaded twice');
      unmount(); noResources();
    });
  } else if (scenario === 'replaced') {
    await check('Root replacement during dependency loading cannot attach to stale DOM', async () => {
      render(); await waitFor(() => signals.length === 2);
      const replacement = target.cloneNode(true); target.replaceWith(replacement);
      await delay(900); assert(instances.length === 0, 'stale effect initialized replacement or detached root');
      assert(target.outerHTML === originalHTML, 'detached root changed'); unmount(); noResources();
      render(); await active(1); unmount(); noResources();
    });
  } else if (scenario === 'mount-failure') {
    await check('V7 initialization failure rolls back and the effect destroys its own failed instance', async () => {
      const plans = target.querySelector('#pricing-plans')!, parent = plans.parentNode!, next = plans.nextSibling;
      plans.remove(); const before = target.outerHTML;
      render(); await waitFor(() => failures.length > 0);
      assert(instances.length === 1, 'expected a failed runtime'); noResources();
      assert(target.outerHTML === before, 'runtime failure did not restore DOM'); unmount();
      assert(trace.filter(item => item === 'runtime:destroy').length === 1, 'failed instance destroyed more than once');
      parent.insertBefore(plans, next); render(); await active(2); unmount(); noResources();
    });
  } else if (scenario === 'missing') {
    await check('Missing root fails before script loading and creates no resources', async () => {
      render('absent-cinematic-root'); await waitFor(() => failures.length > 0);
      assert(instances.length === 0 && signals.length === 0, 'missing root requested dependencies');
      assert(!document.querySelector('script[data-cinematic-vendor]'), 'missing root loaded scripts'); unmount(); noResources();
    });
  } else if (scenario === 'duplicate') {
    await check('Two competing Client Components cannot own the same DOM root', async () => {
      react = createRoot(slot);
      react.render(<StrictMode><CinematicRuntimeClient key="one" services={services} onError={onError} /><CinematicRuntimeClient key="two" services={services} onError={onError} /></StrictMode>);
      await active(1);
      assert(failures.length > 0 && failures.every(message => message.includes('already has an owner')), 'duplicate root not rejected');
      assert(instances.length === 1, 'competing controller created another runtime');
      assert(document.querySelectorAll('script[data-cinematic-vendor]').length === 2, 'competing controller duplicated vendor loading');
      unmount(); noResources();
      render(); await active(2); unmount(); noResources();
    });
  }
  view.__reactEvidence = { scenario, results, failures, trace, instances: instances.map(instance => instance.getStatus()),
    userAgent: navigator.userAgent, viewport: { width: innerWidth, height: innerHeight } };
}
void run().catch(error => { unmount(); view.__reactEvidence = { scenario, results: [{ name: 'harness fatal', passed: false, error: String(error.stack || error) }] }; });
