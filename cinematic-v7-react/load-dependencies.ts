export type CinematicDependencies = {
  gsap: object;
  ScrollTrigger: { refresh(): void };
};

// Cache library loads, never runtime instances. Strict Mode cancellation must not
// tear down a script that the replacement effect is still waiting for.
const loads = new WeakMap<Document, Map<string, Promise<void>>>();
const TIMEOUT_MS = 15_000;

function loadScript(document: Document, src: string, ready: () => boolean) {
  if (ready()) return Promise.resolve();
  let cache = loads.get(document);
  if (!cache) { cache = new Map(); loads.set(document, cache); }
  const existing = cache.get(src);
  if (existing) return existing;
  const pending = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.cinematicVendor = src;
    const finish = (error?: Error) => {
      clearTimeout(timer);
      script.removeEventListener('load', loaded);
      script.removeEventListener('error', failed);
      if (error) { script.remove(); reject(error); } else resolve();
    };
    const loaded = () => finish(ready() ? undefined : new Error(`Vendor API missing after loading ${src}`));
    const failed = () => finish(new Error(`Unable to load local cinematic vendor: ${src}`));
    const timer = setTimeout(() => finish(new Error(`Timed out loading local cinematic vendor: ${src}`)), TIMEOUT_MS);
    script.addEventListener('load', loaded);
    script.addEventListener('error', failed);
    document.head.append(script);
  });
  cache.set(src, pending);
  // A failed request is retryable; successful vendor scripts persist per document.
  void pending.catch(() => { if (cache.get(src) === pending) cache.delete(src); });
  return pending;
}

function abortable<T>(promise: Promise<T>, signal: AbortSignal): Promise<T> {
  if (signal.aborted) return Promise.reject(new DOMException('Cinematic initialization cancelled', 'AbortError'));
  return new Promise<T>((resolve, reject) => {
    const aborted = () => reject(new DOMException('Cinematic initialization cancelled', 'AbortError'));
    signal.addEventListener('abort', aborted, { once: true });
    promise.then(value => { signal.removeEventListener('abort', aborted); resolve(value); },
      error => { signal.removeEventListener('abort', aborted); reject(error); });
  });
}

export async function loadCinematicDependencies(document: Document, signal: AbortSignal): Promise<CinematicDependencies> {
  const view = document.defaultView as (Window & {
    gsap?: object;
    ScrollTrigger?: { refresh(): void };
  }) | null;
  if (!view) throw new Error('Cinematic dependencies require an owner window');
  if (signal.aborted) throw new DOMException('Cinematic initialization cancelled', 'AbortError');
  const hasGsap = () => !!view.gsap && ['context', 'matchMedia', 'registerPlugin'].every(key =>
    typeof Reflect.get(view.gsap!, key) === 'function');
  await abortable(loadScript(document, '/vendor/gsap.min.js', hasGsap), signal);
  if (signal.aborted) throw new DOMException('Cinematic initialization cancelled', 'AbortError');
  await abortable(loadScript(document, '/vendor/ScrollTrigger.min.js', () => typeof view.ScrollTrigger?.refresh === 'function'), signal);
  if (signal.aborted || !hasGsap() || !view.ScrollTrigger) throw new Error('Cinematic vendor dependencies unavailable');
  return { gsap: view.gsap!, ScrollTrigger: view.ScrollTrigger };
}
