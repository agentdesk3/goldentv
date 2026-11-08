import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Clapperboard,
  Film,
  Gauge,
  MessageCircle,
  MonitorSmartphone,
  Play,
  Tv,
  Wifi,
} from "lucide-react";

import type { ReactNode } from "react";
import CinematicContentHeader from "@/app/components/cinematic-content-header";
import CinematicContentFooter from "@/app/components/cinematic-content-footer";
import PageContainer from "@/app/components/page-container";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { createPageMetadata } from "@/app/seo-metadata";

import { DEVICES } from "./devices-data";
import Faq from "./faq";
import { PLANS } from "./plans-data";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV South Africa: Plans, Devices & Trial",
  description:
    "Compare Golden IPTV plans in South African Rand, supported devices, setup guides and the 24-hour free trial for viewers in South Africa.",
  url: "https://www.goldeniptv.co.za/iptv-south-africa/",
  image: "/images/home/stitch-hero-stage.jpg",
  imageAlt: "Golden IPTV viewing experience in South Africa",
});

const VALUE_POINTS = [
  {
    title: "Live channel catalogue",
    description: "Explore the live channel catalogue included with Golden IPTV.",
    icon: Tv,
  },
  {
    title: "On-demand movies",
    description: "Choose from a broad on-demand movie catalogue.",
    icon: Film,
  },
  {
    title: "On-demand series",
    description: "Browse series across a wide range of genres.",
    icon: Clapperboard,
  },
] as const;

const PRICING_BENEFITS = [
  "Buffering troubleshooting guidance",
  "Request activation via WhatsApp",
  "WhatsApp customer support",
] as const;

const STEPS = [
  {
    title: "Choose a plan or free trial",
    description:
      "Compare the listed subscription options, or begin with the 24-hour free trial.",
  },
  {
    title: "Send your request on WhatsApp",
    description:
      "Use the plan button to open a pre-filled WhatsApp message for the Golden IPTV team.",
  },
  {
    title: "Follow the setup guide",
    description:
      "Use the guide for your device and contact support if you need setup assistance.",
  },
] as const;

const INSTALLATION_GUIDES = [
  {
    title: "How to Install IPTV",
    href: "/guides/how-to-install-iptv/",
    image: "/images/stitch/setup-guide-01.webp",
    description: "Follow the general installation process for a supported device.",
  },
  {
    title: "How to Fix IPTV Buffering",
    href: "/guides/iptv-buffering/",
    image: "/images/stitch/setup-guide-02.webp",
    description: "Review common causes of buffering and practical troubleshooting steps.",
  },
  {
    title: "Internet Speed for IPTV",
    href: "/guides/internet-speed-for-iptv/",
    image: "/images/stitch/setup-guide-03.webp",
    description: "Understand the connection factors that affect streaming.",
  },
] as const;

const FAQS = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV, or Internet Protocol Television, delivers television content over an internet connection instead of a traditional satellite, cable or terrestrial signal.",
  },
  {
    question: "Can I watch Golden IPTV on a Smart TV?",
    answer:
      "Golden IPTV publishes device guidance for supported Samsung and LG Smart TVs. Compatibility can depend on the television model and the apps available on it.",
  },
  {
    question: "Can I use Golden IPTV on a Firestick?",
    answer:
      "Golden IPTV has a dedicated setup page for Amazon Fire TV and Firestick devices. Follow that guide to review the supported setup process.",
  },
  {
    question: "How do I get started with Golden IPTV?",
    answer:
      "Compare the listed plans or request the 24-hour free trial, send your request through WhatsApp, and then follow the setup guide for your device.",
  },
  {
    question: "Does IPTV require an internet connection?",
    answer:
      "Yes. IPTV delivers content over the internet, so your connection quality and stability can affect the viewing experience.",
  },
] as const;

function planWhatsAppUrl(duration: string, price: string) {
  const message = `Hello Golden IPTV, I would like to ask about the ${duration} plan listed at ${price}.`;

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}


const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

type ActionProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank";
  rel?: string;
  ariaLabel?: string;
  size?: "compact";
};

function PrimaryButton({ href, children, className = "", target, rel, ariaLabel }: ActionProps) {
  return <Link href={href} target={target} rel={rel} aria-label={ariaLabel} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#CE1212] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#a90e0e] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 ${focusStyle} ${className}`}>{children}</Link>;
}

function SecondaryButton({ href, children, className = "" }: ActionProps) {
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-center text-sm font-semibold text-[#EEEBDD] hover:border-[#CE1212] hover:bg-[#211617] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 ${focusStyle} ${className}`}>{children}</Link>;
}

function SectionHeading({ id, eyebrow, heading, supportingCopy, align }: { id: string; eyebrow: string; heading: string; supportingCopy: string; align?: "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#BDBDC5]">{eyebrow}</p>
      <h2 id={id} className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-[#EEEBDD] md:text-[44px]">{heading}</h2>
      <p className="mt-5 text-base leading-8 text-[#BDBDC5] md:text-lg">{supportingCopy}</p>
    </div>
  );
}

function SurfaceCard({ children, className = "", elevated = false }: { children: ReactNode; className?: string; elevated?: boolean }) {
  return <div className={`min-w-0 border-t ${elevated ? "border-[#CE1212] bg-[#211617]" : "border-white/20"} ${className}`}>{children}</div>;
}

export default function IptvSouthAfricaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0B0A0A] text-[#EEEBDD]">
      <CinematicContentHeader activeHref={null} />
      <main id="guide-main" tabIndex={-1} className="relative focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#EEEBDD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />


      <PageContainer>
        <nav aria-label="Breadcrumb" className="relative py-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[#BDBDC5]">
            <li>
              <Link
                href="/"
                className="rounded-sm transition-colors hover:text-[#EEEBDD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#BDBDC5]">
              /
            </li>
            <li aria-current="page" className="text-[#EEEBDD]">
              IPTV South Africa
            </li>
          </ol>
        </nav>
      </PageContainer>

      <section
        aria-labelledby="page-heading"
        className="relative pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16"
      >
        <PageContainer className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-16">
          <div className="min-w-0 max-w-4xl">
            <p className="font-heading text-[11px] font-extrabold uppercase leading-4 tracking-[0.14em] text-[#EEEBDD]">
              Golden IPTV South Africa
            </p>
            <h1
              id="page-heading"
              className="mt-5 font-heading text-[48px] font-semibold leading-[0.96] tracking-[-0.045em] text-[#EEEBDD] sm:text-[76px] lg:text-[100px] xl:text-[112px]"
            >
              IPTV South Africa
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#BDBDC5] sm:text-lg sm:leading-8">
              Golden IPTV helps viewers in South Africa compare internet-based TV
              subscription plans in South African Rand (ZAR), check device
              compatibility, and request a 24-hour trial before choosing a plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/iptv-free-trial/">
                <Play aria-hidden="true" />
                Start Free Trial
              </PrimaryButton>
              <SecondaryButton href="#plans">
                View Plans
                <ArrowRight aria-hidden="true" />
              </SecondaryButton>
            </div>
          </div>

          <aside className="relative flex min-h-[260px] flex-col justify-end border-l-2 border-[#CE1212] bg-[#211617] px-7 py-10 sm:px-10 lg:min-h-[430px]">
            <span aria-hidden="true" className="pointer-events-none absolute right-5 top-0 font-heading text-[140px] font-semibold leading-none tracking-tighter text-[#EEEBDD]/[0.06] sm:text-[180px]">ZA</span>
            <span aria-hidden="true" className="mb-7 h-px w-12 bg-[#CE1212]" />
            <p className="relative max-w-xs font-heading text-2xl leading-snug text-[#EEEBDD]">Plans, devices, guides and support—all in one South Africa-focused starting point.</p>
          </aside>
        </PageContainer>
      </section>

      <section
        aria-labelledby="intro-heading"
        className="border-y border-white/15 bg-[#151111] py-16 sm:py-20 lg:py-24"
      >
        <PageContainer className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Understand the service"
              id="intro-heading"
              heading="IPTV for viewers in South Africa"
              supportingCopy="IPTV delivers television content over an internet connection rather than through a traditional satellite, cable or terrestrial signal."
            />
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[#BDBDC5]">
              <p>
                Golden IPTV brings its current subscription choices, supported
                devices and installation information together for customers who
                want to compare the service before making a request.
              </p>
              <p>
                Device compatibility can vary by model and available apps. Review
                the dedicated device page first, then use the matching guide during
                setup.
              </p>
              <p>
                Comparing providers before choosing? Use our{" "}
                <Link href="/best-iptv-south-africa/" className="font-semibold text-[#EEEBDD] underline decoration-[#CE1212] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]">
                  buyer&apos;s guide to choosing an IPTV provider in South Africa
                </Link>{" "}
                to check compatibility, trial results, pricing and policies.
              </p>
            </div>
          </div>

          <div>
            <SurfaceCard elevated className="p-6 sm:p-7">
              <CircleHelp aria-hidden="true" className="h-7 w-7 text-[#EEEBDD]" />
              <h3 className="mt-5 font-heading text-xl font-semibold">
                Not sure where to begin?
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">
                Compare every plan on the pricing page or ask the team a question
                before choosing.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <SecondaryButton href="/pricing/" size="compact">
                  Compare all plans
                </SecondaryButton>
                <SecondaryButton href="/contact/" size="compact">
                  Contact support
                </SecondaryButton>
              </div>
            </SurfaceCard>
          </div>
        </PageContainer>
      </section>

      <section aria-labelledby="value-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <div>
            <SectionHeading
              eyebrow="Catalogue showcase"
              id="value-heading"
              heading="Explore the catalogue"
              supportingCopy="Explore Golden IPTV's live TV and on-demand catalogue information, then compare available plans and supported devices."
              align="center"
            />
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
            {VALUE_POINTS.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <SurfaceCard className="h-full p-6 sm:p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-sm bg-[#CE1212]/15 text-[#EEEBDD]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#BDBDC5]">
                      {item.description}
                    </p>
                  </SurfaceCard>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <section
        id="plans"
        aria-labelledby="plans-heading"
        className="scroll-mt-24 border-y border-white/15 bg-[#151111] py-16 sm:py-20 lg:py-24"
      >
        <PageContainer>
          <div>
            <SectionHeading
              eyebrow="Subscription options"
              id="plans-heading"
              heading="Golden IPTV plans"
              supportingCopy="Choose from the current website plans below. Prices are shown in South African Rand (ZAR)."
              align="center"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <div key={plan.id}>
                <SurfaceCard
                  elevated={plan.popular}
                  className={`relative flex h-full flex-col p-6 ${plan.popular ? "border-[#CE1212]" : ""}`}
                >
                  {plan.popular ? (
                    <span className="absolute right-5 top-5 rounded-full bg-[#CE1212] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                      Featured
                    </span>
                  ) : null}
                  <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[#EEEBDD]">
                    {plan.duration}
                  </p>
                  <p className="mt-5 font-heading text-4xl font-bold tracking-[-0.03em]">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-xs text-[#BDBDC5]">{plan.currencyLabel}</p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-[#BDBDC5]">
                    {plan.description}
                  </p>
                  <div className="my-5 h-px bg-white/15" />
                  <ul className="mb-6 space-y-3" aria-label="Plan benefits">
                    {PRICING_BENEFITS.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-[#EEEBDD]"
                      >
                        <Check
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-[#EEEBDD]"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <PrimaryButton
                    href={planWhatsAppUrl(plan.duration, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    ariaLabel={`Ask about the ${plan.duration} plan at ${plan.price} on WhatsApp`}
                  >
                    {plan.ctaLabel}
                  </PrimaryButton>
                </SurfaceCard>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#BDBDC5]">
            Need a side-by-side overview?{" "}
            <Link
              href="/pricing/"
              className="font-semibold text-[#EEEBDD] underline decoration-[#CE1212] underline-offset-4 hover:text-[#EEEBDD]"
            >
              Visit the full pricing page
            </Link>
            .
          </p>
        </PageContainer>
      </section>

      <section aria-labelledby="devices-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <div>
            <SectionHeading
              eyebrow="Device directory"
              id="devices-heading"
              heading="Supported device guides"
              supportingCopy="Open the dedicated page for your device to review its setup guidance."
              align="center"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DEVICES.map((device) => (
              <div key={device.name}>
                <Link
                  href={device.href}
                  className="group block h-full rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
                >
                  <SurfaceCard className="flex h-full flex-col p-5 transition-[transform,border-color,background-color] duration-200 group-hover:border-[#CE1212] group-hover:bg-[#211617] motion-reduce:transition-none">
                    <MonitorSmartphone
                      aria-hidden="true"
                      className="h-6 w-6 text-[#EEEBDD]"
                    />
                    <h3 className="mt-5 font-heading text-base font-semibold">
                      {device.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#BDBDC5]">
                      {device.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#EEEBDD]">
                      View device
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </span>
                  </SurfaceCard>
                </Link>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        aria-labelledby="steps-heading"
        className="border-y border-white/15 bg-[#151111] py-16 sm:py-20 lg:py-24"
      >
        <PageContainer>
          <div>
            <SectionHeading
              eyebrow="Getting started"
              id="steps-heading"
              heading="Three simple steps"
              supportingCopy="Choose your starting point, contact the team, and use the right setup guide."
              align="center"
            />
          </div>

          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <SurfaceCard className="h-full p-6 sm:p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#CE1212] font-heading text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">
                    {step.description}
                  </p>
                </SurfaceCard>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section aria-labelledby="connection-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer className="max-w-[1100px]">


          <div>
            <SectionHeading
              eyebrow="Before you stream"
              id="connection-heading"
              heading="Internet and setup guidance"
              supportingCopy="IPTV uses your internet connection. Connection quality, home network conditions and device setup can all affect playback."
            />
            <div className="mt-6 grid gap-3">
              <Link
                href="/guides/internet-speed-for-iptv/"
                className="group flex min-h-16 items-center gap-4 rounded-sm border border-white/15 bg-[#151111] px-5 py-4 transition-colors hover:border-[#CE1212] hover:bg-[#211617] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
              >
                <Wifi aria-hidden="true" className="h-5 w-5 shrink-0 text-[#EEEBDD]" />
                <span className="flex-1 font-semibold">Review internet speed guidance</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#BDBDC5] transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <Link
                href="/guides/iptv-buffering/"
                className="group flex min-h-16 items-center gap-4 rounded-sm border border-white/15 bg-[#151111] px-5 py-4 transition-colors hover:border-[#CE1212] hover:bg-[#211617] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
              >
                <Gauge aria-hidden="true" className="h-5 w-5 shrink-0 text-[#EEEBDD]" />
                <span className="flex-1 font-semibold">Troubleshoot buffering</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#BDBDC5] transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <section
        aria-labelledby="guides-heading"
        className="border-y border-white/15 bg-[#151111] py-16 sm:py-20 lg:py-24"
      >
        <PageContainer>
          <div>
            <SectionHeading
              eyebrow="Installation help"
              id="guides-heading"
              heading="Featured setup guides"
              supportingCopy="Use the installation and troubleshooting articles when preparing your device."
              align="center"
            />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INSTALLATION_GUIDES.map((guide) => (
              <div key={guide.href}>
                <Link
                  href={guide.href}
                  className="group block h-full rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
                >
                  <SurfaceCard className="h-full overflow-hidden transition-[transform,border-color] duration-200 group-hover:border-[#CE1212] motion-reduce:transition-none">
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">
                        {guide.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#EEEBDD]">
                        Read guide
                        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </div>
                  </SurfaceCard>
                </Link>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section aria-labelledby="faq-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Frequently asked questions"
              id="faq-heading"
              heading="IPTV South Africa questions"
              supportingCopy="Helpful context about IPTV, compatible devices and getting started."
            />
            <Link
              href="/faq/"
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#EEEBDD] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
            >
              Browse every FAQ
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <Faq items={FAQS} />
          </div>
        </PageContainer>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24" aria-labelledby="cta-heading">
        <PageContainer>
          <div>
            <div className="relative overflow-hidden rounded-sm border border-white/20 bg-[#211617] px-6 py-12 text-center sm:px-10 sm:py-16">
              <div className="relative mx-auto max-w-2xl">
                <MessageCircle
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-[#EEEBDD]"
                />
                <h2
                  id="cta-heading"
                  className="mt-5 font-heading text-3xl font-bold tracking-[-0.02em] sm:text-4xl"
                >
                  Ready to explore Golden IPTV?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#BDBDC5]">
                  Start with the 24-hour free trial, compare every plan, or contact
                  the team with a subscription or setup question.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/iptv-free-trial/">
                    Start Free Trial
                  </PrimaryButton>
                  <SecondaryButton href="/pricing/">View Pricing</SecondaryButton>
                  <SecondaryButton href="/contact/">Contact Us</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
      </main>
      <CinematicContentFooter />
    </div>
  );
}
