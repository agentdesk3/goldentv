# Step 57 — V7 React integration candidate

Workspace: `C:\Users\lenovo\goldeniptv-integration-v1`.
Date: 2026-11-04 UTC.

The isolated React integration candidate passes its automated checks. **The homepage remains inactive.** No existing source files were modified, no application route was added, and no commits, pushes, dependency changes or deployments were made. Production and design-preview workspaces were not accessed or modified.

## API and architecture confirmed before implementation

Inspected `V7-REPORT.md`, `cinematic-v7/runtime.mjs`, the V7 contract/browser tests, the existing Server Component, homepage, analytics script loader and installed Next.js script guides.

The actual API is `createCinematicRuntime({ root, gsap, ScrollTrigger })`, returning `mount()`, `destroy()` and `getStatus()`. Construction has no DOM effects. Mount is synchronous, while image/font completion is asynchronous. Repeated mount on a live instance is a no-op; failed/destroyed instances are terminal and require a fresh factory call. Destruction restores the captured DOM and reports individual cleanup errors through status.

The existing `app/components/cinematic-home.tsx` remains a Server Component that reads the source HTML, extracts `<main>`, and renders it under `#cinematic-home` with the scoped stylesheet. `app/page.tsx` still renders that component and its original SEO JSON-LD. Neither imports the candidate. Existing `next/script` usage is for analytics; no cinematic vendor loader was active. Source HTML contains standalone vendor/runtime scripts, but the Server Component extracts only `<main>`, so those scripts are not rendered by the homepage.

`CinematicRuntimeClient.tsx` is a separate Client Component. It renders `null` and owns initialization and cleanup through a real React `useEffect`. Each effect keeps its exact runtime instance in a local variable. Cleanup aborts pending startup, destroys that instance synchronously, and releases the root claim. A failed initialization also destroys its failed instance, releases ownership, and reports the error. There is no shared runtime singleton.

Root ownership uses a WeakMap of effect claims, containing no runtime instances. Competing controllers for the same root fail before loading or creating another runtime. Claims are released on cancellation, failure, stale-root detection and unmount.

The dependency loader loads `/vendor/gsap.min.js` before `/vendor/ScrollTrigger.min.js`, checks their APIs, and shares successful/in-flight script promises per document. Cancelled effects stop waiting and cannot instantiate a runtime. A cancelled effect does not remove a script needed by a replacement effect. Script failures remove handlers and the failed element, clear the failed cache entry, and allow a fresh effect to retry. Each script has a tested 15-second timeout. Successfully loaded library globals/scripts remain reusable; runtime listeners and animation resources do not survive cleanup.

The test harness uses installed development React 19.2.8, ReactDOM and the vendored real GSAP/ScrollTrigger. It executes the original Server Component to create the fixture markup, then mounts the null-rendering controller as a sibling. It does not replace or duplicate the nine-section renderer in application source. No new dependencies were installed; the test bundle uses the already-installed Next.js webpack compiler and TypeScript transpiler.

## Isolation

Everything is outside `app/` and `public/`, under `cinematic-v7-react/`. The ephemeral harness server binds only to `127.0.0.1`; responses use `X-Robots-Tag: noindex, nofollow, noarchive`, HTML includes matching robots metadata, and harness robots.txt disallows crawling. No test route, sitemap entry or navigation link exists. Browser testing blocks external HTTP(S) destinations; fonts, CSS, images and vendors come from this workspace. Analytics/application scripts are excluded from the isolated fixture document.

SHA-256 verification covers all 419 pre-existing source files, including V6, V7, all prior wrappers/tests, source HTML/CSS/copy/assets, package manifests, homepage, layout, routes and SEO. They remain unchanged. The requested compiler/build checks regenerated `.next` output and TypeScript incremental cache; these generated files are outside the source comparison.

## Exact files created

No pre-existing source files were modified. The root-level `V7-REACT-REPORT.md` and these files under `cinematic-v7-react/` were created:

| File | Purpose |
| --- | --- |
| `CinematicRuntimeClient.tsx` | Null-rendering Client Component; effect cancellation, instance ownership and cleanup. |
| `load-dependencies.ts` | Ordered, cached, bounded local vendor loading and failure handling. |
| `browser-tests.tsx` | Real React Strict Mode/browser lifecycle scenarios and native-resource instrumentation. |
| `contract.test.cjs` | DOM-free loader import and Client Component contract checks. |
| `build-harness.cjs` | Renders the unchanged Server Component and builds the isolated development React test bundle. |
| `ts-loader.cjs` | Test-only TypeScript/TSX webpack transpilation using the installed compiler. |
| `run-browser.cjs` | Loopback fixture server, isolated Edge/CDP runner, failure injection and screenshots. |
| `check-evidence.cjs` | Offline browser evidence, vendor order and pixel comparison assertions. |
| `integrity.cjs` | Pre-existing source SHA-256 capture/comparison. |
| `baseline.json` | Pre-implementation hashes of 419 existing files. |
| `verify.cjs` | Syntax, contracts, relevant regressions, TypeScript, build and route-isolation verification. |
| `clean-test-profiles.cjs` | Removes only resolved test-profile directories inside this candidate folder. |
| `artifacts/harness.js` | Generated development React browser bundle; never deployed or imported by an app route. |
| `artifacts/server-markup.html` | Fixture rendered by the original Server Component. |
| `artifacts/browser-evidence.json` | Scenario results, effect/runtime traces, errors, requests and exact pixel-equality summary. |
| `artifacts/verification.json` | Verification command outputs, exit codes and production route inventory. |

Thirty screenshot files are also created under `cinematic-v7-react/artifacts/`:

| Reference | React/V7 candidate | Difference image |
| --- | --- | --- |
| `desktop-hero-reference.png` | `desktop-hero-candidate.png` | `desktop-hero-diff.png` |
| `desktop-sports-reference.png` | `desktop-sports-candidate.png` | `desktop-sports-diff.png` |
| `desktop-pricing-reference.png` | `desktop-pricing-candidate.png` | `desktop-pricing-diff.png` |
| `desktop-faq-reference.png` | `desktop-faq-candidate.png` | `desktop-faq-diff.png` |
| `desktop-final-reference.png` | `desktop-final-candidate.png` | `desktop-final-diff.png` |
| `mobile-hero-reference.png` | `mobile-hero-candidate.png` | `mobile-hero-diff.png` |
| `mobile-sports-reference.png` | `mobile-sports-candidate.png` | `mobile-sports-diff.png` |
| `mobile-pricing-reference.png` | `mobile-pricing-candidate.png` | `mobile-pricing-diff.png` |
| `mobile-faq-reference.png` | `mobile-faq-candidate.png` | `mobile-faq-diff.png` |
| `mobile-final-reference.png` | `mobile-final-candidate.png` | `mobile-final-diff.png` |

Temporary isolated browser profiles and the temporary diagnostic helper were removed. No temporary app route was created.

## Automated verification

| Check | Result |
| --- | --- |
| Client contract tests | 2/2 passed; the initial pre-implementation run failed because the new modules did not exist. |
| Genuine development React Strict Mode | Setup → cleanup → setup observed in traces; cancelled setup creates no stale instance. |
| Explicit cleanup and fresh mount | Exact old instance destroyed once; a distinct instance mounts with warm dependencies. |
| Browser scenarios | 18/18 pages, 30/30 assertion groups passed, using Edge 156 at 1440 × 1000 and mobile-emulated 390 × 844. |
| Runtime errors | No uncaught exceptions or console errors in the browser scenarios. Expected failures reach the supplied error handler. |
| Negative dependency tests | HTTP 503, missing vendor API and a real 15-second timeout all pass; each can recover through a fresh effect. Only intentional 503 responses appear as network errors. |
| Vendor order and deduplication | GSAP requested before ScrollTrigger, once per document; rerender/remount does not insert duplicate vendor tags. |
| Native/runtime cleanup | Owned listeners and pending RAFs removed, contexts/MatchMedia reverted, owned ScrollTriggers return to zero, cleanup errors empty, Server Component markup restored. |
| Competing controllers | Same-root second controller rejected; cleanup permits a subsequent fresh owner. |
| Visual comparison | 10/10 screenshot pairs have exact decoded-pixel equality, not merely a tolerance match. |
| JavaScript syntax | All eight new `.cjs` files pass `node --check`. TS/TSX is parsed by the harness compiler and checked by TypeScript. |
| Existing V7 contract | Passed. |
| V6 choreography extraction parity | Passed; the existing V7 initializers were not edited. |
| Existing lifecycle and GSAP wrapper regressions | Passed. |
| `npx tsc --noEmit` | Exit 0. |
| `npm run build` | Exit 0; Next.js 16.3.6 compilation, TypeScript and all 24 static pages passed. |
| Production isolation | Same before/after app route inventory; built homepage and sitemap contain no candidate/harness activation. |
| Source integrity | All 419 pre-existing files unchanged. |

Each viewport covers Strict Mode startup, cleanup and warm remount, stable rerender, cancellation during GSAP loading, late dependency completion, dependency failure/API failure/timeout with retry, root replacement during loading, V7 initialization rollback, missing root and competing controllers. The browser scenarios use actual React effects, DOM APIs and vendored GSAP; they do not mock React hooks or GSAP. Fault injection is limited to the local vendor HTTP responses and deliberately missing fixture markup.

Native instrumentation preserves callback identity and browser deduplication. It checks the actual V7 guard wrappers against reported listener counts and tracks their RAF registrations. GSAP's reusable shared scroll/wheel infrastructure is distinguished from owned runtime listeners and checked for stable counts across remounts; the test does not globally disable ScrollTrigger or kill a shared ticker. Changing V7's wrapper shape would require updating this instrumentation; its registration-count assertion fails if the wrappers stop being recognized.

The initial spy wrapped duplicate native registrations and thereby changed browser behavior; that test defect was corrected before final evidence. The initial screenshot capture also inherited smooth scrolling and sampled an FAQ CSS transition before settlement. Final captures use instant test navigation and wait 1.1 seconds without changing CSS or animations. The final scene is sampled 70% through its scroll range so its revealed content is visible.

Reproduce after installing the existing lockfile dependencies, from this workspace:

```powershell
npm run build
node cinematic-v7-react/build-harness.cjs
node cinematic-v7-react/run-browser.cjs
node cinematic-v7-react/check-evidence.cjs
node cinematic-v7-react/verify.cjs
```

The initial production build supplies the existing compiled CSS/fonts and document shell for the fixture. The verification command rebuilds and compares the route inventory. No command activates the candidate.

## Visual review and baseline limits

Automated comparisons use the current integration copy's Server Component markup and compiled styling, with V6 as the behavior reference. Hero, sports, pricing, FAQ and the revealed final scene are pixel-identical to React/V7 at both widths. All nine initializers and their choreography remain unchanged in source; screenshots sample five checkpoints rather than every frame of all nine sections.

Separately, the assistant inspected the rendered desktop/mobile captures, including FAQ, pricing and the revealed final scene, and the archived `public/assets/reference/v61-hero-1440.png` and `hero-390.png`. **The older archived images differ from the current source baseline**: the current source uses the gold horizontal logo and different rendered hero typography/line wrapping. The V6 reference already has those differences and React/V7 matches it exactly. They were not introduced or corrected by Step 57. No human design approval or full manual cross-browser review was performed.

## Remaining risks and activation readiness

- The isolated harness verifies a real React Client Component beside markup rendered by the original Server Component. It does not exercise a Next.js RSC hydration boundary, App Router navigation, back/forward cache or a deployed CSP. These remain checks for the separately authorized homepage integration step.
- Chromium desktop/mobile emulation is covered. Physical touch hardware, Safari, Firefox and native reduced-motion preferences are not newly verified here; prior V7 controlled reduced-motion coverage remains unchanged.
- Shared script loads can finish after all waiting effects cancel. Their API globals are library state; cancellation prevents runtime creation and DOM mutation. In-flight loads remain bounded by the script timeout.
- Services and error callbacks should keep stable identities when used by another Client Component. The Server Component can use the default client services without passing non-serializable callbacks across the server/client boundary.
- V7 still requires exclusive ownership of its injected subtree. Its destroy operation restores a DOM snapshot and should not share that subtree with independent writers.
- The archived-preview/current-source branding and typography discrepancy needs baseline confirmation before claiming exact historical design approval.

**Readiness:** the React integration candidate is technically ready for a separate controlled homepage activation step. It is **not unconditionally production-activation-approved**: confirm the intended visual baseline and perform actual Next.js hydration/navigation checks during that separate step. The current homepage remains unchanged and V7 is not loaded there.
