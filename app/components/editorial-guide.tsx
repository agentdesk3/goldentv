import { ArrowDown, ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import CinematicContentHeader from "@/app/components/cinematic-content-header";
import CinematicContentFooter from "@/app/components/cinematic-content-footer";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { WHATSAPP_URL } from "@/app/components/whatsapp";

export type GuideStep = {
  title: string;
  detail: string;
};

export type GuideCard = {
  title: string;
  description: string;
};

export type GuideFaq = {
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

export default function EditorialGuide({
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
                <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="min-w-0 border-t border-white/15 py-5">
                      <dt className="text-sm leading-6 text-[#BDBDC5]">{metric.label}</dt>
                      <dd className="mt-2 font-heading text-xl font-medium">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

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
                <li><a href="#guide-checks" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{checksHeading}</a></li>
                <li><a href="#guide-steps" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{stepsHeading}</a></li>
                <li><a href="#guide-troubleshooting" className={`block py-3 text-[#BDBDC5] hover:text-white ${focusStyle}`}>Troubleshooting</a></li>
              </ul>
            </nav>

            <section id="guide-troubleshooting" aria-labelledby="guide-troubleshooting-heading" className="scroll-mt-8 border-t border-white/15 pt-6">
              <h2 id="guide-troubleshooting-heading" className="font-heading text-2xl font-semibold">Troubleshooting</h2>
              <div className="mt-4 divide-y divide-white/15">
                {faqs.slice(0, 3).map((faq, index) => (
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
