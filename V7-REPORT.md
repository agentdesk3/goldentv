# V7 unified cinematic lifecycle — Step 56

Verified workspace: `C:\Users\lenovo\goldeniptv-integration-v1`.
Date: 2026-11-04 (UTC).

V7 is implemented and ready for a separate React integration step. It is **not activated**. The homepage does not import or load these candidate modules. No commits, pushes, deployments, dependency changes, or operations in the production/design-preview workspaces were performed.

## Exact files created

All candidate implementation, tooling and evidence is in `cinematic-v7/`:

| File | Purpose |
| --- | --- |
| `runtime.mjs` | Exported factory, one lifecycle owner per instance, scoped mounting, rollback and teardown. |
| `sections.mjs` | All nine V6 initializers with lifecycle adaptations; generated deterministically from V6. |
| `extract-sections.cjs` | Development-only TypeScript AST extraction/verification; reads V6 and writes only the candidate sections module. |
| `contract.test.cjs` | Node import and factory boundary test. |
| `browser-tests.mjs` | Isolated real DOM lifecycle tests and real GSAP integration tests. |
| `run-browser-tests.cjs` | Loopback-only fixture server and isolated headless Edge/Chrome runner. |
| `verify.cjs` | Syntax, Node tests, extraction parity, existing wrapper tests, TypeScript, build and source-boundary checks. |
| `verify-boundaries.cjs` | SHA-256 comparison of pre-existing files against the captured baseline. |
| `clean-test-profiles.cjs` | Deletes only generated test profiles whose resolved parent is this candidate directory. |
| `source-baseline.json` | Hashes of 404 pre-existing files, captured before runtime implementation. |
| `browser-results.json` | Desktop real-browser test evidence. |
| `browser-results-mobile.json` | Narrow-viewport real-browser test evidence. |
| `mutation-results.json` | Expected test failure when the served RAF destruction guard is deliberately removed. |
| `verification-results.json` | Syntax/test/TypeScript/build/boundary command output and exit codes. |

This root-level `V7-REPORT.md` is the only other new source deliverable. Temporary browser profiles were removed. The requested compiler/build checks regenerated ignored `.next` build output and TypeScript incremental cache; these are excluded from the source baseline.

## Inspection findings

V6 first creates global lifecycle, tracking and GSAP-media helpers, then global document/window facades, an Event Bus and GSAP context arrays. It registers ScrollTrigger and mounts hero, sports, universe, devices, pricing, how, trust, FAQ and final in that order. Asset/font completions, pageshow/pagehide handlers, focus visibility and the extra FAQ refresh handler follow section initialization.

The reviewed standalone wrapper owns cleanup callbacks, listeners and RAFs, but V6 does not consistently route resources through it. V6 directly registers pointer, click and MediaQueryList change listeners. Its scroll/resize bus clears callback sets without removing the native window listeners. Several image/font completion callbacks refresh after teardown; globals survive between mounts. Context construction can fail before its context is recorded. The existing homepage component extracts only `<main>` from `cinematic-source/index.html` and renders it with `/cinematic-scoped.css`; it does not mount V6 or the wrapper.

## API and lifecycle contract

```js
import { createCinematicRuntime } from './cinematic-v7/runtime.mjs';

const runtime = createCinematicRuntime({ root, gsap, ScrollTrigger });
runtime.mount();
const status = runtime.getStatus();
runtime.destroy();
```

This is usage documentation only; no React component was changed.

- `root` is a connected DOM Element containing the nine `section-*` roots. Supply the compatible vendored GSAP and ScrollTrigger objects. Factory construction has no DOM effects and imports safely without browser globals.
- `mount()` synchronously initializes the nine sections and returns a copied status snapshot. Repeating it on a mounted instance is a no-op. Asset completion is asynchronous and appears as `assetsReady` in status.
- `destroy()` invalidates callbacks first, removes native listeners, cancels queued RAFs, releases bus references, reverts owned MatchMedia/context instances, and restores the captured DOM state. It is safe before mount and safe to repeat.
- Initialization errors are thrown to the caller after rollback; `getStatus()` records the failure. Cleanup continues if an individual revert throws, with messages available in `cleanupErrors`.
- States are `idle`, `mounting`, `mounted`, `failed`, and `destroyed`. Failed/destroyed instances are terminal: use a fresh factory call for remounts. `mounted` in the status snapshot records initializer history, not a count of currently active resources. Resource counts show current ownership.

One instance-local owner controls native runtime listeners, MediaQueryList listeners, RAFs, contexts, GSAP MatchMedia, async guards and the bus. No V6 lifecycle globals or `integrationStatus` are published. Each bus has one native listener per scroll/resize event, and teardown removes those listeners. Synthetic asset refreshes notify the instance bus rather than dispatching resize across unrelated instances. GSAP's shared plugin registry/ticker remain library-owned; V7 does not globally kill ScrollTriggers or disable another consumer's plugin.

All nine initializer bodies retain their selectors, copy, timing, easing, scroll formulas, animation values, media conditions and ordering. The extraction adapts listener registration, lifecycle tracking, async guards and owner-window viewport access. The two section-local `pagehide` cleanup handlers are removed in favor of explicit `destroy()`. Pageshow refresh behavior remains owned and removable. Image lookup is scoped to each section. DOM facades scope original section IDs to their approved prefixes.

Snapshot restoration preserves original node identity and restores text, attributes, inline styles and pricing children. It runs synchronously during destroy/rollback. Late event/RAF/MatchMedia/image/font callbacks check lifecycle state and connectivity before doing work, including after the root has been detached.

## Verification results

| Check | Result |
| --- | --- |
| JavaScript syntax | All nine `.mjs`/`.cjs` files pass `node --check`; modified test tooling was checked again after review. |
| Node factory contract | 1/1 pass. The initial pre-implementation run failed because the runtime module did not exist. |
| Choreography extraction parity | Pass: exactly nine V6 initializers; `extract-sections.cjs --check` confirms deterministic documented adaptations. |
| Desktop browser suite | 12/12 pass; actual viewport 1416 × 908. |
| Narrow browser suite | 12/12 pass; actual viewport 492 × 808, exercising the real mobile GSAP media condition. |
| RAF mutation check | Pass: removing the destruction guard in the HTTP response causes the detached-DOM test to fail. Candidate files are not mutated. The failure recorded in `mutation-results.json` is intentional. |
| Existing lifecycle wrapper tests | Pass. |
| Existing GSAP lifecycle mock tests | Pass. |
| `npx tsc --noEmit` | Exit 0. |
| `npm run build` | Exit 0; Next.js 16.3.6, successful compilation and all 24 static pages generated. |
| Source boundaries | Pass: all 404 captured pre-existing files unchanged, including routes, SEO metadata, HTML, CSS, original runtime, V6 and wrappers. |

Browser verification used installed headless Microsoft Edge 156 against the actual source HTML and scoped CSS on an ephemeral localhost server. Ten scenarios use a real DOM/EventTarget implementation, instrumented native listener registration, a deterministic RAF queue, deferred images/fonts, controlled media queries and GSAP test doubles. These prove exact cleanup and failure behavior without timing races. Two additional scenarios use the real vendored GSAP/ScrollTrigger with native browser APIs: repeated mount/scroll/FAQ/destroy/fresh mount, and failure inside initialization followed by rollback and a fresh mount. Both verify that owned ScrollTriggers return to the prior count and DOM state is restored. This is browser integration evidence, not a visual design approval or a React Strict Mode test.

The lifecycle cases cover mount/destroy, fresh remount, double destroy, destroy before mount, listener and native Event Bus removal, RAF cancellation, context and MatchMedia reversion, image/font completion after destroy, already queued callbacks, initialization rollback, missing-section rollback, all nine sections, duplicate mount prevention, independent concurrent roots and continuing cleanup after a revert error.

The first browser run exposed a test-selector mistake: `.plan` also exists outside pricing. The assertion was scoped to `#section-pricing .plan`, and fixture cleanup was added to prevent one failed assertion contaminating later tests. No production markup was changed to satisfy the test.

Reproduce from this workspace:

```powershell
node cinematic-v7/verify.cjs
node cinematic-v7/run-browser-tests.cjs
node cinematic-v7/run-browser-tests.cjs --mobile
node cinematic-v7/run-browser-tests.cjs --mutate-raf
```

## Remaining risks and next-step conditions

- React mount/unmount, Strict Mode effect replay and route navigation are deliberately not integrated or verified yet. The next step must create a fresh instance in each effect setup and call that exact instance's `destroy()` from cleanup.
- The caller must provide one runtime per root and give it exclusive ownership of the injected cinematic subtree. Snapshot restoration would overwrite concurrent external edits inside that subtree. Separate roots can coexist and are tested.
- Browsers do not cancel image decode/font promises. V7 prevents their completion from acting after destruction; their closures can remain retained until those promises settle.
- Full screenshot comparisons, scroll choreography review, touch behavior, real reduced-motion OS preferences, Safari and Firefox are not covered. Reduced-motion branches are covered using controlled browser media-query test doubles. Desktop and narrow Chromium runtime behavior is covered with real GSAP.
- Teardown assumes compatible GSAP `context`, `matchMedia`, `add` and `revert` APIs. Throwing third-party cleanup functions are reported and other cleanup proceeds; an underlying library cleanup failure cannot guarantee that library released its internal resources.
- Build success verifies the existing application remains buildable; it does not constitute V7 activation or React integration coverage. No active route imports the candidate.

**Readiness:** ready for a separately reviewed React integration step, with the conditions above. V7 remains inactive.
