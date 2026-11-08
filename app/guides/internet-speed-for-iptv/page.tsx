import type { Metadata } from "next";

import { ArrowDown, ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CinematicContentHeader from "@/app/components/cinematic-content-header";
import CinematicContentFooter from "@/app/components/cinematic-content-footer";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Internet Speed for IPTV: HD, 4K & Data Usage",
  description:
    "Plan IPTV speeds for SD, HD and 4K, estimate data usage, and troubleshoot fibre, LTE, 5G and Wi-Fi connections in South Africa.",
  url: "https://www.goldeniptv.co.za/guides/internet-speed-for-iptv/",
  image: "/images/home/guide-internet-speed.webp",
  imageAlt: "Internet speed guidance for IPTV streaming",
});

const speedRequirements = [
  { label: "Standard Definition (SD)", value: "3–5 Mbps" },
  { label: "HD / 720p", value: "5–10 Mbps" },
  { label: "Full HD / 1080p", value: "10–15 Mbps" },
  { label: "4K / UHD", value: "25 Mbps or more" },
] as const;

const performanceTips = [
  {
    title: "Use Ethernet where practical",
    description:
      "Where your device supports Ethernet, compare wired playback with Wi-Fi. Ethernet avoids wireless interference, but cannot fix congestion or faults elsewhere on the connection.",
  },
  {
    title: "Position the router strategically",
    description:
      "Place the router in a central, open location and avoid hiding it behind furniture. Check signal strength at the television and interference from walls or nearby wireless devices.",
  },
  {
    title: "Reduce simultaneous usage",
    description:
      "Pause large downloads or other streams to free bandwidth for playback.",
  },
  {
    title: "Restart the router when needed",
    description:
      "Restart the player app or streaming device first if it stops responding. Restarting the router may also clear a temporary connection fault.",
  },
  {
    title: "Keep devices and apps updated",
    description:
      "Install available updates for the streaming device and compatible application.",
  },
  {
    title: "Test another device",
    description:
      "Comparing devices helps determine whether a problem is device-specific.",
  },
] as const;

const steps = [
  {
    title: "Stop unnecessary downloads and streams",
    detail:
      "Close other applications using bandwidth to get a clearer reading of available speed.",
  },
  {
    title: "Test near the IPTV device",
    detail:
      "Run the test where the streaming device is normally used, especially when connected through Wi-Fi.",
  },
  {
    title: "Use a reputable speed test",
    detail:
      "Choose a well-known testing service to measure download speed and connection performance.",
  },
  {
    title: "Test at different times",
    detail:
      "Network performance can vary during busy periods, so compare results across the day.",
  },
  {
    title: "Compare the practical guidelines",
    detail:
      "Check whether measured download speeds align with the approximate range for the preferred quality.",
  },
  {
    title: "Compare Wi-Fi locations",
    detail:
      "Test close to the router and at the device location to understand the effect of signal quality.",
  },
] as const;

const faqs = [
  {
    question: "How much speed do I need for IPTV?",
    answer:
      "The practical guideline depends on stream quality, connected devices and network conditions. The reference table gives approximate starting points.",
  },
  {
    question: "Is 10 Mbps enough for IPTV?",
    answer:
      "It may be enough for one HD stream in good conditions, but other network usage and connection stability also matter.",
  },
  {
    question: "Does Wi-Fi affect buffering?",
    answer:
      "Yes. Distance, walls, interference and congestion can reduce Wi-Fi quality even when the internet plan has enough headline speed.",
  },
  {
    question: "Is Ethernet better than Wi-Fi?",
    answer:
      "Ethernet can be more consistent because it avoids wireless interference, although strong Wi-Fi can work well for many setups.",
  },
  {
    question: "What speed is needed for 4K IPTV?",
    answer: "Use 25 Mbps or more per stream as an illustrative planning estimate, with spare capacity for other devices. This is not a tested Golden IPTV requirement: actual needs depend on bitrate, compression, player, device and connection stability.",
  },
  {
    question: "How much data does IPTV use per hour?",
    answer: "Approximate decimal GB per hour by multiplying the sustained average stream bitrate in Mbps by 0.45. A 10 Mbps stream uses about 4.5 GB per hour before additional overhead. Your broadband plan's advertised speed is not the stream bitrate.",
  },
  {
    question: "Is fibre better than LTE for IPTV?",
    answer: "Reliable fibre can provide stable streaming without relying on a cellular radio signal. Fixed LTE and mobile LTE or 5G can also work, but signal strength, congestion and variable latency may affect playback. Test your actual connection rather than choosing by connection type alone.",
  },
  {
    question: "Why does IPTV buffer even with fast internet?",
    answer: "A speed test is a snapshot to a test server, not a guarantee of steady delivery from a streaming source. Weak Wi-Fi, competing downloads, congestion, variable latency, packet loss, app or device problems and source-side interruptions can still affect playback. Compare locations, connection methods and times of day.",
  },
] as const;

function ConnectionAndDataGuidance() {
  const headingStyle = "font-heading text-2xl font-semibold md:text-3xl";
  const linkStyle = "font-semibold text-[#EEEBDD] underline decoration-[#CE1212] underline-offset-4 hover:decoration-[#EEEBDD] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]";
  return (
    <div className="space-y-10 text-base leading-8 text-[#BDBDC5]">
      <section aria-labelledby="local-connections" className="space-y-5 border-t border-white/15 pt-8">
        <h2 id="local-connections" className={`${headingStyle} text-[#EEEBDD]`}>Fibre, LTE and 5G in South Africa</h2>
        <dl className="space-y-5">
          <div><dt className="font-semibold text-[#EEEBDD]">Fibre</dt><dd>Reliable fibre can provide stable streaming without depending on a cellular radio signal. Congestion, faults and your home Wi-Fi can still affect playback, so a fast fibre package alone is not a guarantee.</dd></div>
          <div><dt className="font-semibold text-[#EEEBDD]">Fixed LTE</dt><dd>A home LTE router uses a cellular connection even when it stays in one place. Router placement, signal strength and congestion on the serving network can affect throughput and latency. Test different practical router positions and check your plan&apos;s data allowance and fair-use conditions.</dd></div>
          <div><dt className="font-semibold text-[#EEEBDD]">Mobile LTE and 5G</dt><dd>A phone or portable hotspot can work, but movement, indoor coverage, shared network capacity and signal changes may cause speed and latency to vary. 5G does not guarantee uninterrupted playback. Check mobile data caps before a long viewing session.</dd></div>
          <div><dt className="font-semibold text-[#EEEBDD]">Wi-Fi versus Ethernet</dt><dd>These connect your streaming device to the router; they are separate from whether the router uses fibre or LTE/5G. Ethernet avoids Wi-Fi interference where supported. Strong Wi-Fi can work well, but distance, walls and competing devices matter alongside advertised download speed.</dd></div>
        </dl>
        <p>Latency is the delay in delivery, not download capacity. Large changes in delay or interruptions can affect playback even when an average speed looks sufficient. Test the device and connection you will actually use before subscribing; our <Link href="/iptv-south-africa/" className={linkStyle}>IPTV in South Africa overview</Link> provides service and setup context.</p>
      </section>

      <section aria-labelledby="data-usage" className="space-y-5 border-t border-white/15 pt-8">
        <h2 id="data-usage" className={`${headingStyle} text-[#EEEBDD]`}>How much data does IPTV use per hour?</h2>
        <p>Estimate usage from the sustained average stream bitrate, not your broadband package&apos;s advertised speed. A 100 Mbps connection does not mean the video continuously uses 100 Mbps.</p>
        <p className="border-l-2 border-[#CE1212] pl-4 font-semibold text-[#EEEBDD]">GB per hour ≈ Mbps × 0.45</p>
        <p>The decimal conversion is Mbps × 3,600 seconds ÷ 8 bits per byte ÷ 1,000 MB per GB. The examples below assume a constant average bitrate for one hour and exclude additional overhead.</p>
        <div role="region" aria-label="Illustrative IPTV data usage" tabIndex={0} className="max-w-full overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]">
          <table className="w-full table-fixed text-left text-sm leading-6">
            <caption className="sr-only">Approximate decimal gigabytes used per hour at a sustained bitrate</caption>
            <thead><tr className="border-b border-white/15 text-[#EEEBDD]"><th scope="col" className="w-1/2 py-3 pr-3">Average stream bitrate</th><th scope="col" className="py-3">Approximate data per hour</th></tr></thead>
            <tbody>{[5, 10, 15, 25].map(bitrate => <tr key={bitrate} className="border-b border-white/15"><th scope="row" className="py-4 pr-3 font-normal">{bitrate} Mbps</th><td className="py-4">{Number((bitrate * 0.45).toFixed(2))} GB</td></tr>)}</tbody>
          </table>
        </div>
        <p>Actual usage varies with video bitrate, compression, audio and network overhead. Adaptive quality can change the average bitrate during playback. Monitor your router or provider&apos;s usage records during a trial, and check data caps, fair-use limits and out-of-bundle charges.</p>
      </section>

      <section aria-labelledby="fast-but-buffering" className="space-y-5 border-t border-white/15 pt-8">
        <h2 id="fast-but-buffering" className={`${headingStyle} text-[#EEEBDD]`}>Fast speed test, but IPTV still buffers?</h2>
        <p>A speed test measures a moment in time against a test server, which may use a different delivery path from your stream. It does not rule out Wi-Fi interference, congestion, variable latency, packet loss, player problems or interruptions at the streaming source.</p>
        <p>Work through the connection checks below: test beside the streaming device, compare signal quality near the router, pause competing downloads and repeat at different times of day. Compare Wi-Fi with Ethernet where your device supports it, then restart the app or device if needed.</p>
        <p>Follow the <Link href="/guides/iptv-buffering/" className={linkStyle}>IPTV buffering troubleshooting guide</Link> for further diagnosis. If you use an Amazon streaming device, the <Link href="/devices/firestick/" className={linkStyle}>Firestick setup guide</Link> covers configuration and device checks.</p>
        <p>Before paying for a subscription, use a <Link href="/iptv-free-trial/" className={linkStyle}>24-hour free trial</Link> to check playback on your actual screen and connection, including your usual viewing hours where possible.</p>
      </section>
    </div>
  );
}

export default function InternetSpeedForIptvPage() {
  return (
    <InternetSpeedGuide
      category="Network performance"
      title="Internet Speed for IPTV"
      summary="Learn how to check internet speed for IPTV in South Africa. Compare approximate SD, HD, Full HD and 4K speed guidelines, and test Wi-Fi stability, network congestion and simultaneous device usage."
      steps={steps}
      highlights={performanceTips}
      faqs={faqs}
      metrics={speedRequirements}
    />
  );
}

// Keep the shared V7 presentation local so this guide can include rich content
// without changing the layout or behaviour of other guide routes.
type GuideStep = {
  title: string;
  detail: string;
};

type GuideCard = {
  title: string;
  description: string;
};

type GuideFaq = {
  question: string;
  answer: string;
};

type EditorialGuideProps = {
  category: string;
  title: string;
  summary: string;
  steps: readonly GuideStep[];
  highlights: readonly GuideCard[];
  faqs: readonly GuideFaq[];
  metrics?: readonly { label: string; value: string }[];
  showTrialLink?: boolean;
  breadcrumbParent?: {
    label: string;
    href: string;
  };
};

const guideImages = [
  "/images/stitch/setup-guide-01.webp",
  "/images/stitch/setup-guide-02.webp",
  "/images/stitch/setup-guide-03.webp",
] as const;

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const containerStyle = "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16";
const editorialRoutes = [
  { category: "Installation", title: "How to Install IPTV", label: "Installation guide", href: "/guides/how-to-install-iptv/" },
  { category: "Troubleshooting", title: "How to Fix IPTV Buffering", label: "Buffering guide", href: "/guides/iptv-buffering/" },
  { category: "Network performance", title: "Internet Speed for IPTV", label: "Internet speed guide", href: "/guides/internet-speed-for-iptv/" },
] as const;

function GuideChecks({ items, heading }: { items: readonly GuideCard[]; heading: string }) {
  return (
    <section id="guide-checks" aria-labelledby="guide-checks-heading" className="scroll-mt-8 border-y border-white/15 py-8 md:py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BDBDC5]">Field notes</p>
      <h2 id="guide-checks-heading" className="mt-3 font-heading text-2xl font-semibold md:text-3xl">{heading}</h2>
      <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="min-w-0 border-l border-[#CE1212] pl-4">
            <h3 className="flex items-start gap-2 text-sm font-semibold leading-6"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#EEEBDD]" />{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#BDBDC5]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InternetSpeedGuide({
  category,
  title,
  summary,
  steps,
  highlights,
  faqs,
  metrics = [],
  showTrialLink = false,
  breadcrumbParent = {
    label: "Setup Hub",
    href: "/guides/",
  },
}: EditorialGuideProps) {
  const imageIndexes = new Set([
    0,
    Math.max(0, Math.floor(steps.length / 2)),
    Math.max(0, steps.length - 1),
  ]);
  let imageCursor = 0;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.goldeniptv.co.za/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbParent.label,
          item: `https://www.goldeniptv.co.za${breadcrumbParent.href}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title,
      description: summary,
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.detail,
      })),
    },
  ];

  const isDevice = breadcrumbParent.href === "/devices/";
  const isInstallation = category === "Installation" && title === "How to Install IPTV";
  const variant = isDevice ? "device" : isInstallation ? "installation" : "diagnostic";
  // Resolve only exact known identities; unknown inputs keep every related link.
  const currentHref = isDevice
    ? DEVICES.find((device) => device.name === category && title === `IPTV on ${device.name}`)?.href
    : editorialRoutes.find((guide) => guide.category === category && guide.title === title)?.href;
  const relatedGuides = [
    ...editorialRoutes,
    { label: "Device guides", href: "/devices/" },
    ...(isDevice ? DEVICES.map((device) => ({ label: device.name, href: device.href })) : []),
  ].filter((guide) => guide.href !== currentHref);
  const checksHeading = isDevice ? "Before you begin" : isInstallation ? "What you’ll need" : "Additional checks";
  const stepsHeading = isDevice ? "Set up your device" : isInstallation ? "Your installation, step by step" : "Work through the checks";
  const firstSection = metrics.length > 0 ? "#guide-reference" : variant === "diagnostic" ? "#guide-steps" : "#guide-checks";

  return (
    <div className="bg-[#0B0A0A] text-[#EEEBDD]">
      <CinematicContentHeader activeHref={isDevice ? "/devices/" : "/guides/"} />
      <main id="guide-main" tabIndex={-1} data-guide-variant={variant} className="min-w-0 scroll-mt-6 outline-none">
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }} />
        <div className={containerStyle}>
          <nav aria-label="Breadcrumb" className="border-b border-white/15 py-5 text-xs leading-6 text-[#BDBDC5]">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link href="/" className={`hover:text-white ${focusStyle}`}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={breadcrumbParent.href} className={`hover:text-white ${focusStyle}`}>{breadcrumbParent.label}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#EEEBDD]">{title}</li>
            </ol>
          </nav>
        </div>

        <section aria-labelledby="guide-title" className={variant === "device" ? "border-b border-white/15 bg-[#211617]" : "border-b border-white/15"}>
          <div className={`${containerStyle} grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end lg:gap-16 lg:py-20`}>
            <div className="min-w-0">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#BDBDC5]"><span aria-hidden="true" className="h-2 w-2 bg-[#CE1212]" />The Golden IPTV Field Guide <span aria-hidden="true">/</span> {category}</p>
              <h1 id="guide-title" className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#BDBDC5]">{summary}</p>
              <a href={firstSection} className={`mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#CE1212] px-6 text-sm font-semibold text-white hover:bg-[#a90e0e] ${focusStyle}`}>
                {variant === "diagnostic" ? "Review the checks" : "Start with preparation"}<ArrowDown aria-hidden="true" className="h-4 w-4 shrink-0" />
              </a>
            </div>
            <div className={`min-w-0 border-l-2 border-[#CE1212] pl-6 ${variant === "diagnostic" ? "bg-[#211617] py-6" : "py-2"}`}>
              <span className="font-heading text-6xl font-medium leading-none tracking-tight md:text-7xl">{String(steps.length).padStart(2, "0")}</span>
              <p className="mt-3 text-sm font-semibold">{variant === "diagnostic" ? "Practical checks" : "Steps to follow"}</p>
              <p className="mt-2 text-xs leading-6 text-[#BDBDC5]">Golden IPTV guide<br />Setup &amp; troubleshooting</p>
            </div>
          </div>
        </section>

        <div className={`${containerStyle} grid items-start gap-12 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-12 xl:gap-20`}>
          <div className="min-w-0 space-y-10">
            {metrics.length > 0 && (
              <section id="guide-reference" aria-labelledby="guide-reference-heading" className="scroll-mt-8 border-t-2 border-[#CE1212] bg-[#211617] px-5 py-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BDBDC5]">Connection reference</p>
                <h2 id="guide-reference-heading" className="mt-3 font-heading text-2xl font-semibold md:text-3xl">Practical reference</h2>
                <p className="mt-5 text-sm leading-7 text-[#BDBDC5]">Illustrative download-speed planning estimates per stream, not guaranteed service requirements or independently tested Golden IPTV minimums. Actual needs depend on stream bitrate, compression, player, device and connection stability. Allow spare capacity for other streams and household use.</p>
                <div role="region" aria-label="Suggested IPTV speeds" tabIndex={0} className={`mt-6 max-w-full overflow-x-auto ${focusStyle}`}>
                  <table className="w-full table-fixed text-left text-sm leading-6">
                    <caption className="sr-only">Illustrative download speeds per IPTV stream</caption>
                    <thead><tr className="border-b border-white/15"><th scope="col" className="w-1/2 py-3 pr-3">Streaming quality</th><th scope="col" className="py-3">Suggested speed per stream</th></tr></thead>
                    <tbody>{metrics.map(metric => <tr key={metric.label} className="border-b border-white/15"><th scope="row" className="py-4 pr-3 font-normal text-[#BDBDC5]">{metric.label}</th><td className="py-4 font-semibold">{metric.value}</td></tr>)}</tbody>
                  </table>
                </div>
              </section>
            )}

            <ConnectionAndDataGuidance />

            {variant !== "diagnostic" && <GuideChecks items={highlights} heading={checksHeading} />}

            <section id="guide-steps" aria-labelledby="guide-steps-heading" className="scroll-mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BDBDC5]">{variant === "diagnostic" ? "Diagnose / test / compare" : "Prepare / configure / test"}</p>
              <h2 id="guide-steps-heading" className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">{stepsHeading}</h2>
              <ol className="mt-8 list-none">
                {steps.map((step, index) => {
                  const showImage = imageIndexes.has(index);
                  const image = showImage ? guideImages[Math.min(imageCursor++, guideImages.length - 1)] : null;
                  return (
                    <li key={step.title} id={`guide-step-${index + 1}`} className="min-w-0 scroll-mt-8 border-t border-white/15 py-7 md:py-9">
                      <article>
                        <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
                          <span aria-hidden="true" className="font-heading text-2xl font-medium leading-none text-[#EEEBDD] sm:text-3xl">{String(index + 1).padStart(2, "0")}</span>
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#BDBDC5]">Step {index + 1} of {steps.length}</p>
                            <h3 className="mt-2 font-heading text-xl font-semibold leading-snug sm:text-2xl">{step.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-[#BDBDC5] sm:text-base sm:leading-8">{step.detail}</p>
                          </div>
                        </div>
                        {image && (
                          <div className="relative mt-6 aspect-[16/9] overflow-hidden border border-white/15">
                            <Image src={image} alt="" fill sizes="(min-width: 1440px) 870px, (min-width: 1024px) 60vw, 100vw" className="object-cover" />
                          </div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>

            {variant === "diagnostic" && <GuideChecks items={highlights} heading={checksHeading} />}
          </div>

          <aside aria-label="Guide navigation and support" className="min-w-0 space-y-8">
            <nav aria-label="On this page" className="border-t-2 border-[#CE1212] pt-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em]">In this guide</h2>
              <ul className="mt-4 divide-y divide-white/10 text-sm">
                {metrics.length > 0 && <li><a href="#guide-reference" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>Practical reference</a></li>}
                <li><a href="#local-connections" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>South African connections</a></li>
                <li><a href="#data-usage" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>Data usage per hour</a></li>
                <li><a href="#fast-but-buffering" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>Fast connection, slow playback</a></li>
                <li><a href="#guide-checks" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{checksHeading}</a></li>
                <li><a href="#guide-steps" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{stepsHeading}</a></li>
                <li><a href="#guide-troubleshooting" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>Troubleshooting</a></li>
              </ul>
            </nav>

            <section id="guide-troubleshooting" aria-labelledby="guide-troubleshooting-heading" className="scroll-mt-8 border-t border-white/15 pt-6">
              <h2 id="guide-troubleshooting-heading" className="font-heading text-2xl font-semibold">Troubleshooting</h2>
              <div className="mt-4 divide-y divide-white/15">
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0} className="group py-4">
                    <summary className={`flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold leading-6 ${focusStyle}`}>
                      {faq.question}<span aria-hidden="true" className="shrink-0 text-xl font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section aria-labelledby="guide-support-heading" className="border-l-2 border-[#CE1212] bg-[#211617] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#BDBDC5]">Still need help?</p>
              <h2 id="guide-support-heading" className="mt-3 font-heading text-2xl font-semibold">Contact Golden IPTV</h2>
              <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Contact Golden IPTV for setup help.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#CE1212] px-3 text-center text-sm font-semibold text-white hover:bg-[#a90e0e] ${focusStyle}`}>
                <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/contact/" className={`mt-4 flex min-h-11 items-center justify-between gap-3 text-sm font-semibold hover:underline ${focusStyle}`}>Other support options<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              {showTrialLink && (
                <Link href="/iptv-free-trial/" className={`mt-3 flex min-h-11 items-center justify-between gap-3 border-t border-white/15 pt-4 text-sm font-semibold leading-6 hover:underline ${focusStyle}`}>Test this setup with a 24-hour trial<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              )}
            </section>

            <nav aria-labelledby="related-guides-heading" className="border-t border-white/15 pt-6">
              <h2 id="related-guides-heading" className="font-heading text-xl font-semibold">Related guides</h2>
              <ul className="mt-3 divide-y divide-white/10">
                {relatedGuides.map((guide) => (
                  <li key={guide.href}><Link href={guide.href} className={`flex min-h-12 items-center justify-between gap-3 py-3 text-sm leading-6 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{guide.label}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link></li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </main>
      <CinematicContentFooter />
    </div>
  );
}
