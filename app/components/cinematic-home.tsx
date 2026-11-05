import CinematicRuntimeClient from "@/cinematic-v7-react/CinematicRuntimeClient";
import { readFileSync } from "node:fs";
import path from "node:path";

export default function CinematicHome() {
  const source = path.join(
    process.cwd(),
    "cinematic-source",
    "index.html"
  );

  const html = readFileSync(source, "utf8");

  const main = html.match(
    /<main\b[^>]*>[\s\S]*?<\/main>/i
  );

  if (!main) {
    throw new Error("Cinematic main element not found.");
  }

  const productionHtml = main[0]
    .replaceAll(
    '<p class="rights">Layout study · supplied poster references · rights unverified · not a catalogue.<br><a href="/provenance.html">Asset provenance</a></p>',
    ''
  )
  .replaceAll(
    '<a href="/comparison.html">Reference comparison</a>',
    ''
  )
  .replaceAll(
    '<aside class="review"><a href="/provenance.html">Asset provenance ↗</a></aside>',
    ''
  )
  .replaceAll(
    "Golden IPTV / Private design study",
    "Golden IPTV / Entertainment Universe"
  )
  .replaceAll(
    "GOLDEN IPTV · MEMBERSHIP DESIGN STUDY · V4 SCROLL EDITION",
    "GOLDEN IPTV · MEMBERSHIPS"
  )
  .replaceAll(
    "DESIGN PREVIEW · NOT PRODUCTION",
    ""
  )
.replaceAll(
  "Private visual design study only. Third-party marks are references, not evidence of availability, bundled subscriptions, affiliation, broadcast rights or licensing. Commercial usage requires verification and permissions.",
  "Third-party trademarks belong to their respective owners. Displayed brands do not imply affiliation, endorsement, or guaranteed content availability."
)
.replaceAll(
  "Private visual concept. Device compatibility must be verified before commercial publication. Brand names identify example device categories; no affiliation implied.",
  "Device compatibility varies by model and playback application. Contact support to confirm compatibility before purchasing. Device brands are referenced for identification only."
)
.replaceAll(
  "Content catalogue figures and service features are provided for this design preview and should be verified before publication. Streaming performance depends on connection and device. Refund requests within 7 days are subject to the published refund terms and eligibility.",
  "Channel and content availability may vary. Streaming performance depends on your internet connection and device. Refund requests within 7 days are subject to the published refund policy and eligibility conditions."
)
.replaceAll(
  "Private local design preview. Illustrations are conceptual; device compatibility and content availability depend on the actual service.",
  "Illustrations are for demonstration purposes. Device compatibility and content availability may vary."
)
.replaceAll(
  "Private local design preview. Visuals and chat messages are illustrative, not evidence of actual staff, response times, or customer conversations. Refund eligibility and service availability are subject to published terms.",
  "Support illustrations and conversations are examples, not actual customer interactions. Service availability and refund eligibility are subject to published terms."
)
.replaceAll(
  "Private design preview · Content and service claims require verification before publication.",
  "Service features and availability may vary. Contact our team for current information."
)
.replaceAll(
  "Private design preview · Content and policy details require verification before publishing.",
  "Service availability and policies are subject to the published terms."
);
  return (
    <>
      <link
        rel="stylesheet"
        href="/cinematic-scoped.css"
      />

      <div
        id="cinematic-home"
        dangerouslySetInnerHTML={{
          __html: productionHtml,
        }}
      />

      <CinematicRuntimeClient />
    </>
  );
}
