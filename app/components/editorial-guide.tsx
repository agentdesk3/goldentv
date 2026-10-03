import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-[#8b3dff]/15 blur-[145px]" />
      <div className="pointer-events-none absolute right-[-7rem] top-48 h-[500px] w-[500px] rounded-full bg-[#046ef1]/12 blur-[150px]" />

      <nav
        aria-label="Breadcrumb"
        className="relative mx-auto w-full max-w-[1320px] px-5 py-4 text-xs text-[#cdc2d8] md:px-8 lg:px-12"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={breadcrumbParent.href} className="hover:text-white">
              {breadcrumbParent.label}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-white">{title}</li>
        </ol>
      </nav>

      <section className="relative mx-auto w-[calc(100%-2.5rem)] max-w-[1224px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#181b27] to-[#14213d] p-7 shadow-xl md:p-10">
        <div className="pointer-events-none absolute right-[-4rem] top-[-5rem] h-64 w-64 rounded-full bg-[#8b3dff]/25 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#8b3dff]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d4bbff]">
                {category}
              </span>
              <span className="rounded-full bg-[#272936] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#afc6ff]">
                Golden IPTV guide
              </span>
            </div>
            <h1 className="mt-5 font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[44px] md:leading-[52px]">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#cdc2d8] md:text-base">
              {summary}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:min-w-72">
            <span className="rounded-2xl bg-[#0b0e19]/45 p-4">
              <Clock3 className="h-4 w-4 text-[#d4bbff]" />
              <strong className="mt-2 block font-heading text-lg">
                {steps.length} steps
              </strong>
              <small className="text-[#cdc2d8]">Practical walkthrough</small>
            </span>
            <span className="rounded-2xl bg-[#0b0e19]/45 p-4">
              <ShieldCheck className="h-4 w-4 text-[#afc6ff]" />
              <strong className="mt-2 block font-heading text-lg">
                Published
              </strong>
              <small className="text-[#cdc2d8]">Repository content</small>
            </span>
          </div>
        </div>
      </section>

      <div className="relative mx-auto grid w-full max-w-[1320px] items-start gap-6 px-5 py-8 md:px-8 lg:grid-cols-12 lg:px-12">
        <section className="space-y-5 lg:col-span-8">
          {metrics.length > 0 && (
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#181b27]/80 shadow-xl">
              <div className="border-b border-white/[0.06] px-6 py-5">
                <h2 className="font-heading text-2xl font-bold">
                  Practical reference
                </h2>
              </div>
              <div className="grid sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-b border-white/[0.06] px-6 py-4 sm:border-r"
                  >
                    <span className="block text-xs text-[#cdc2d8]">
                      {metric.label}
                    </span>
                    <strong className="mt-1 block text-sm">{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}

          <h2 className="sr-only">Guide steps</h2>
          {steps.map((step, index) => {
            const showImage = imageIndexes.has(index);
            const image = showImage
              ? guideImages[Math.min(imageCursor++, guideImages.length - 1)]
              : null;

            return (
              <article
                key={step.title}
                className="rounded-[2rem] border border-white/[0.06] bg-[#181b27]/80 p-6 shadow-xl md:p-7"
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8b3dff] to-[#046ef1] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#968da1]">
                      Step {index + 1} of {steps.length}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#cdc2d8]">
                      {step.detail}
                    </p>
                  </div>
                </div>
                {image && (
                  <div className="relative mt-5 h-64 overflow-hidden rounded-[1.5rem] md:h-80">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19]/70 via-transparent" />
                  </div>
                )}
              </article>
            );
          })}

          <div className="rounded-[2rem] bg-[#181b27]/80 p-6 shadow-xl">
            <h2 className="font-heading text-2xl font-bold">
              Additional checks
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#0b0e19]/55 p-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-[#d4bbff]" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#cdc2d8]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:col-span-4">
          <div className="rounded-[2rem] bg-[#181b27]/85 p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-[#d4bbff]" />
              <h2 className="font-heading text-xl font-bold">Troubleshooting</h2>
            </div>
            <div className="mt-5 space-y-2">
              {faqs.slice(0, 3).map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group rounded-2xl bg-[#1c1f2b] p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold">
                    {faq.question}
                    <span className="text-[#968da1] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-xs leading-5 text-[#cdc2d8]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#2b2450] to-[#14213d] p-6 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#afc6ff]">
              Still need help?
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold">
              Contact Golden IPTV
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
              Ask for help through the real WhatsApp contact route.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b3dff] to-[#046ef1] px-5 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact/"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-[#afc6ff] hover:text-white"
            >
              Other support options <ArrowRight className="h-4 w-4" />
            </Link>
            {showTrialLink && (
              <Link
                href="/iptv-free-trial/"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-[#afc6ff] hover:text-white"
              >
                Test this setup with a 24-hour trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="rounded-[2rem] bg-[#181b27]/80 p-6">
            <h2 className="font-heading text-lg font-bold">Related guides</h2>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/guides/how-to-install-iptv/" className="flex items-center justify-between text-[#cdc2d8] hover:text-white">
                Installation guide <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/guides/iptv-buffering/" className="flex items-center justify-between text-[#cdc2d8] hover:text-white">
                Buffering guide <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/guides/internet-speed-for-iptv/" className="flex items-center justify-between text-[#cdc2d8] hover:text-white">
                Internet speed guide <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/devices/" className="flex items-center justify-between text-[#cdc2d8] hover:text-white">
                Device guides <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
