import { initializeSections } from './sections.mjs';

/** Single-use instance. A destroyed or failed instance requires a fresh factory call. */
export function createCinematicRuntime({ root, gsap, ScrollTrigger } = {}) {
  if (!root || root.nodeType !== 1 || !root.ownerDocument?.defaultView) {
    throw new TypeError('root must be a DOM Element with an owner window');
  }
  if (!gsap?.context || !gsap?.matchMedia || !ScrollTrigger?.refresh) {
    throw new TypeError('gsap and ScrollTrigger must be supplied');
  }
  const viewport = root.ownerDocument.defaultView;
  let state = 'idle', assetsReady = false;
  const mounted = [], errors = [], cleanupErrors = [];
  const listeners = [], frames = new Set(), contexts = new Set(), media = new Set(), bus = new Map();
  let restore = null;
  const alive = () => (state === 'mounting' || state === 'mounted') && root.isConnected;
  const owner = {
    guard(fn) {
      if (typeof fn !== 'function') return fn;
      return function (...args) { if (alive()) return fn.apply(this, args); };
    },
    listen(target, type, callback, options) {
      if (!alive() || !target) return;
      const wrapped = owner.guard(callback);
      const capture = typeof options === 'boolean' ? options : !!options?.capture;
      if (listeners.some(x => x.target === target && x.type === type && x.callback === callback && x.capture === capture)) return;
      // Record before registration so rollback also covers an injected registration failure.
      listeners.push({ target, type, callback, wrapped, options, capture });
      target.addEventListener(type, wrapped, options);
    },
    frame(callback) {
      if (!alive()) return 0;
      const id = viewport.requestAnimationFrame(time => {
        frames.delete(id);
        if (alive()) callback(time);
      });
      frames.add(id);
      return id;
    }
  };
  function attempt(fn) {
    try { fn(); } catch (error) { cleanupErrors.push(String(error.message || error)); }
  }
  function teardown() {
    for (const { target, type, wrapped, options } of listeners.splice(0)) attempt(() => target.removeEventListener(type, wrapped, options));
    for (const id of frames) attempt(() => viewport.cancelAnimationFrame(id));
    frames.clear();
    bus.clear();
    for (const instance of media) attempt(() => instance.revert());
    media.clear();
    for (const context of contexts) attempt(() => context.revert());
    contexts.clear();
    if (restore) attempt(restore);
    restore = null;
  }
  function destroy() {
    if (state === 'destroyed') return;
    state = 'destroyed'; // Invalidate callbacks before any cleanup can trigger one.
    teardown();
  }
  function getStatus() {
    return { state, mounted: [...mounted], errors: [...errors], cleanupErrors: [...cleanupErrors], assetsReady,
      resources: { listeners: listeners.length, frames: frames.size, contexts: contexts.size, matchMedia: media.size, bus: bus.size } };
  }
  function eventListen(type, callback, options) {
    if (!alive()) return;
    if (!['scroll', 'resize'].includes(type)) return owner.listen(viewport, type, callback, options);
    if (!bus.has(type)) {
      const callbacks = new Set();
      bus.set(type, callbacks);
      owner.listen(viewport, type, event => {
        for (const fn of callbacks) { if (alive()) fn(event); }
      }, { passive: true });
    }
    bus.get(type).add(callback);
  }
  function trackMedia(instance) {
    media.add(instance);
    return new Proxy(instance, { get(target, property) {
      if (property === 'add') return (conditions, callback, scope) => target.add(conditions, owner.guard(callback), scope);
      const value = Reflect.get(target, property, target);
      return typeof value === 'function' ? value.bind(target) : value;
    } });
  }
  function layoutRect(el) {
    let top = 0, left = 0, node = el;
    while (node) { top += node.offsetTop; left += node.offsetLeft; node = node.offsetParent; }
    return { top: top - viewport.scrollY, left: left - viewport.scrollX, width: el.offsetWidth,
      height: el.offsetHeight, bottom: top - viewport.scrollY + el.offsetHeight };
  }
  function captureDOM() {
    // Keep node identity. Restore pricing children, text, attributes and inline styles on teardown.
    const nodes = [root, ...root.querySelectorAll('*')].map(node => ({ node,
      attributes: [...node.attributes].map(a => [a.name, a.value]), children: [...node.childNodes],
      text: [...node.childNodes].filter(n => n.nodeType === 3).map(n => [n, n.data]) }));
    return () => {
      for (const { node, attributes, children, text } of nodes) {
        if (node.childNodes.length !== children.length || children.some((child, i) => node.childNodes[i] !== child)) node.replaceChildren(...children);
        for (const attr of [...node.attributes]) node.removeAttribute(attr.name);
        for (const [name, value] of attributes) node.setAttribute(name, value);
        for (const [child, value] of text) child.data = value;
      }
    };
  }
  function mount() {
    if (state === 'mounted') return getStatus();
    if (state !== 'idle') throw new Error(`Cannot mount runtime in ${state} state; create a fresh instance`);
    if (!root.isConnected) throw new Error('root must be connected before mount');
    state = 'mounting';
    try {
      restore = captureDOM();
      gsap.registerPlugin(ScrollTrigger);
      initializeSections({ owner, viewport, gsap, ScrollTrigger, layoutRect, trackMedia, eventListen,
        matchMedia: viewport.matchMedia.bind(viewport),
        mount(key, ids, initialize) {
          const section = root.querySelector('#section-' + key);
          if (!section) throw new Error(`Missing cinematic section: ${key}`);
          const query = selector => selector.replace(/#([\w-]+)/g, (all, id) => '#' + (ids[id] || id));
          const document = new Proxy(root.ownerDocument, { get(target, property) {
            if (property === 'querySelector') return s => section.querySelector(query(s));
            if (property === 'querySelectorAll') return s => section.querySelectorAll(query(s));
            if (property === 'getElementById') return id => section.querySelector('#' + viewport.CSS.escape(ids[id] || id));
            if (property === 'body' || property === 'documentElement') return section;
            if (property === 'images') return section.querySelectorAll('img');
            const value = Reflect.get(target, property, target);
            return typeof value === 'function' ? value.bind(target) : value;
          } });
          // Plain facade avoids assigning any runtime state to window.
          const window = new Proxy(viewport, { get(target, property) {
            if (property === 'document') return document;
            if (property === 'gsap') return gsap;
            if (property === 'ScrollTrigger') return ScrollTrigger;
            if (property === 'addEventListener') return eventListen;
            const value = Reflect.get(target, property, target);
            return typeof value === 'function' ? value.bind(target) : value;
          } });
          if (key === 'faq') section.querySelectorAll('.question').forEach(button => {
            button.setAttribute('aria-expanded', button.dataset.initialExpanded);
            button.closest('.qa').classList.toggle('open', button.dataset.initialExpanded === 'true');
          });
          // Own the context BEFORE running code that may throw.
          const context = gsap.context(() => {}, section);
          contexts.add(context);
          context.add(() => initialize(document, window, eventListen));
          section.classList.add('motion-ready');
          mounted.push(key);
        }
      });
      const refresh = owner.guard(() => {
        ScrollTrigger.refresh();
        // Notify only this instance's bus, avoiding synthetic events in unrelated runtimes.
        for (const callback of bus.get('resize') || []) { if (alive()) callback(new viewport.Event('resize')); }
      });
      const completion = Promise.allSettled([...root.querySelectorAll('img')].map(image => image.decode()));
      completion.then(owner.guard(() => root.ownerDocument.fonts.ready)).then(owner.guard(() => {
        refresh(); assetsReady = true;
      })).catch(owner.guard(error => errors.push(String(error.message || error))));
      owner.listen(viewport, 'pageshow', refresh);
      owner.listen(root, 'focusin', event => {
        const element = event.target.closest('.reveal,[data-reveal]');
        if (element && root.contains(element)) { element.classList.add('keyboard-visible'); element.style.opacity = '1'; }
      });
      root.querySelectorAll('#section-faq .question').forEach(button => owner.listen(button, 'click', () => ScrollTrigger.refresh()));
      root.querySelectorAll('#section-final .preview').forEach(element => { element.style.position = 'absolute'; });
      state = 'mounted';
      return getStatus();
    } catch (error) {
      errors.push(String(error.message || error));
      state = 'failed';
      teardown();
      throw error;
    }
  }
  return { mount, destroy, getStatus };
}
