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
    .replace(
      '<p>Big nights. Bigger feelings.</p>',
      '<p>Big nights. Bigger feelings.</p><p>Golden IPTV offers IPTV subscription plans for customers in South Africa, with a 24-hour trial option and setup guides for compatible streaming devices.</p>'
    )
    .replace(
      /(<nav class="footer-nav" aria-label="Explore">)[\s\S]*?(<\/nav>)/,
      `$1
        <a href="/">Home</a>
        <a href="/iptv-south-africa/">IPTV South Africa</a>
        <a href="/pricing/">Memberships</a>
        <a href="/iptv-free-trial/">24-hour trial</a>
        <a href="/devices/">Compatible devices</a>
        <a href="/guides/">Setup guides</a>
      $2`
    )
    .replace(
      /(<nav class="footer-nav" aria-label="Support">)[\s\S]*?(<\/nav>)/,
      `$1
        <a href="/contact/">Contact us</a>
        <a href="/faq/">Frequently asked questions</a>
        <a href="https://wa.me/212607077404" target="_blank" rel="noopener noreferrer">WhatsApp assistance ↗</a>
      $2`
    )
    .replace(
      /(<nav class="footer-nav" aria-label="Information">)[\s\S]*?(<\/nav>)/,
      `$1
        <a href="/privacy/">Privacy Policy</a>
        <a href="/terms/">Terms of Service</a>
        <a href="/refund-policy/">Refund Policy</a>
        <a href="/devices/firestick/">Firestick setup</a>
      $2`
    )
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
  '<div class="preview">DESIGN PREVIEW · NOT PRODUCTION</div>',
  ''
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
)
.replaceAll(
  "An entertainment universe, revealed as you explore. Move your cursor over each mark to see the composition respond.",
  "Explore a world of sports, movies and series with Golden IPTV."
)
.replaceAll(
  'href="https://www.goldeniptv.co.za/">Visit website ↗',
  'href="/contact/">Contact support ↗'
)
.replaceAll(
  'href="https://www.goldeniptv.co.za/pricing/">Plans &amp; terms',
  'href="/terms/">Terms of service'
)
.replaceAll(
  'href="https://www.goldeniptv.co.za/">Service information',
  'href="/iptv-south-africa/">Service information'
)
.replaceAll(
  'alt="AI-generated premier league design-study logo"',
  'alt="Premier League themed illustration"'
)
.replaceAll(
  'alt="AI-generated serie a design-study logo"',
  'alt="Serie A themed illustration"'
)
.replaceAll(
  'alt="AI-generated laliga design-study logo"',
  'alt="La Liga themed illustration"'
)
.replaceAll(
  'alt="AI-generated bundesliga design-study logo"',
  'alt="Bundesliga themed illustration"'
)
.replaceAll(
  'alt="AI-generated ligue 1 design-study logo"',
  'alt="Ligue 1 themed illustration"'
)
.replaceAll(
  'alt="AI-generated champions league design-study logo"',
  'alt="Champions League themed illustration"'
)
.replaceAll(
  'alt="AI-generated europa league design-study logo"',
  'alt="Europa League themed illustration"'
)
.replaceAll(
  'alt="AI-generated conference league design-study logo"',
  'alt="Conference League themed illustration"'
)
.replaceAll(
  'alt="User-supplied football player collage with stadium lighting; private visual reference"',
  'alt="Football player collage with stadium lighting"'
)
.replaceAll(
  'alt="AI-generated motor racing illustration; private design reference"',
  'alt="Motor racing illustration"'
)
.replaceAll(
  'alt="AI-generated basketball illustration; private design reference"',
  'alt="Basketball illustration"'
)
.replaceAll(
  'alt="AI-generated combat sports illustration; private design reference"',
  'alt="Combat sports illustration"'
);
  return (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-black"
    >
      Skip to content
    </a>

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
