import type { Metadata } from "next";
import Image from "next/image";
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
  Sparkles,
  Tv,
  Wifi,
} from "lucide-react";

import { PrimaryButton, SecondaryButton } from "@/app/components/buttons";
import { MotionReveal } from "@/app/components/motion-reveal";
import PageContainer from "@/app/components/page-container";
import SectionHeading from "@/app/components/section-heading";
import SurfaceCard from "@/app/components/surface-card";
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
    <main className="relative flex-1 overflow-hidden bg-background-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_50%_0%,rgba(139,61,255,0.18),transparent_46%),radial-gradient(circle_at_82%_18%,rgba(40,124,255,0.12),transparent_30%)]"
      />

      <PageContainer>
        <nav aria-label="Breadcrumb" className="relative py-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
            <li>
              <Link
                href="/"
                className="rounded-sm transition-colors hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-muted">
              /
            </li>
            <li aria-current="page" className="text-text-primary">
              IPTV South Africa
            </li>
          </ol>
        </nav>
      </PageContainer>

      <section
        aria-labelledby="page-heading"
        className="relative pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16"
      >
        <PageContainer>
          <MotionReveal className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-[11px] font-extrabold uppercase leading-4 tracking-[0.14em] text-brand-violet">
              Golden IPTV South Africa
            </p>
            <h1
              id="page-heading"
              className="mt-5 font-heading text-[42px] font-bold leading-[1.05] tracking-[-0.035em] text-text-primary sm:text-[58px] lg:text-[72px]"
            >
              IPTV South Africa
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Compare subscription plans in South African Rand, review supported
              devices, and find the setup guidance you need before getting started.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/iptv-free-trial/">
                <Play aria-hidden="true" />
                Start Free Trial
              </PrimaryButton>
              <SecondaryButton href="#plans">
                View Plans
                <ArrowRight aria-hidden="true" />
              </SecondaryButton>
            </div>
          </MotionReveal>

          <MotionReveal delay={100} className="mt-12 sm:mt-16">
            <div className="relative mx-auto aspect-[16/10] max-h-[38rem] overflow-hidden rounded-[var(--radius-card-large)] border border-[color:var(--border-elevated)] bg-surface-base shadow-[var(--shadow-elevated)] sm:aspect-[16/8]">
              <Image
                src="/images/home/hero-streaming-cinema.webp"
                alt="Golden IPTV streaming catalogue displayed across a television and connected devices"
                fill
                priority
                sizes="(min-width: 1440px) 1312px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-[color:var(--glass-border)] bg-[var(--glass-surface-elevated)] p-4 backdrop-blur-[var(--glass-blur-elevated)] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full [background:var(--gradient-cta)] text-white">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-sm leading-6 text-text-secondary">
                  Plans, devices, guides and support—all in one South Africa-focused
                  starting point.
                </p>
              </div>
            </div>
          </MotionReveal>
        </PageContainer>
      </section>

      <section
        aria-labelledby="intro-heading"
        className="border-y border-border bg-background-secondary py-16 sm:py-20 lg:py-24"
      >
        <PageContainer className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <MotionReveal>
            <SectionHeading
              eyebrow="Understand the service"
              heading="IPTV for viewers in South Africa"
              supportingCopy="IPTV delivers television content over an internet connection rather than through a traditional satellite, cable or terrestrial signal."
            />
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-text-secondary">
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
            </div>
          </MotionReveal>

          <MotionReveal delay={100}>
            <SurfaceCard elevated className="p-6 sm:p-7">
              <CircleHelp aria-hidden="true" className="h-7 w-7 text-brand-violet" />
              <h3 className="mt-5 font-heading text-xl font-semibold">
                Not sure where to begin?
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
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
          </MotionReveal>
        </PageContainer>
      </section>

      <section aria-labelledby="value-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <MotionReveal>
            <SectionHeading
              eyebrow="Catalogue showcase"
              heading="Explore the catalogue"
              supportingCopy="These catalogue totals match the current Golden IPTV plan information."
              align="center"
            />
          </MotionReveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
            {VALUE_POINTS.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionReveal key={item.title} delay={index * 45}>
                  <SurfaceCard className="h-full p-6 sm:p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-violet/15 text-[#c9a8ff]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </SurfaceCard>
                </MotionReveal>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <section
        id="plans"
        aria-labelledby="plans-heading"
        className="scroll-mt-24 border-y border-border bg-background-secondary py-16 sm:py-20 lg:py-24"
      >
        <PageContainer>
          <MotionReveal>
            <SectionHeading
              eyebrow="Subscription options"
              heading="Golden IPTV plans"
              supportingCopy="Choose from the current website plans below. Prices are shown in South African Rand (ZAR)."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan, index) => (
              <MotionReveal key={plan.id} delay={index * 55}>
                <SurfaceCard
                  elevated={plan.popular}
                  className={`relative flex h-full flex-col p-6 ${plan.popular ? "border-brand-violet/70" : ""}`}
                >
                  {plan.popular ? (
                    <span className="absolute right-5 top-5 rounded-full [background:var(--gradient-cta)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                      Featured
                    </span>
                  ) : null}
                  <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[#c9a8ff]">
                    {plan.duration}
                  </p>
                  <p className="mt-5 font-heading text-4xl font-bold tracking-[-0.03em]">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{plan.currencyLabel}</p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-text-secondary">
                    {plan.description}
                  </p>
                  <div className="my-5 h-px bg-border" />
                  <ul className="mb-6 space-y-3" aria-label="Plan benefits">
                    {PRICING_BENEFITS.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-text-primary"
                      >
                        <Check
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-brand-violet"
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
              </MotionReveal>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-secondary">
            Need a side-by-side overview?{" "}
            <Link
              href="/pricing/"
              className="font-semibold text-text-primary underline decoration-brand-violet underline-offset-4 hover:text-[#d4bbff]"
            >
              Visit the full pricing page
            </Link>
            .
          </p>
        </PageContainer>
      </section>

      <section aria-labelledby="devices-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <MotionReveal>
            <SectionHeading
              eyebrow="Device directory"
              heading="Supported device guides"
              supportingCopy="Open the dedicated page for your device to review its setup guidance."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DEVICES.map((device, index) => (
              <MotionReveal key={device.name} delay={index * 45}>
                <Link
                  href={device.href}
                  className="group block h-full rounded-[var(--radius-card-large)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <SurfaceCard className="flex h-full flex-col p-5 transition-[transform,border-color,background-color] duration-200 group-hover:-translate-y-1 group-hover:border-[color:var(--border-focus)] group-hover:bg-[var(--surface-elevated)] motion-reduce:transition-none">
                    <MonitorSmartphone
                      aria-hidden="true"
                      className="h-6 w-6 text-brand-violet"
                    />
                    <h3 className="mt-5 font-heading text-base font-semibold">
                      {device.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                      {device.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c9a8ff]">
                      View device
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </span>
                  </SurfaceCard>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section
        aria-labelledby="steps-heading"
        className="border-y border-border bg-background-secondary py-16 sm:py-20 lg:py-24"
      >
        <PageContainer>
          <MotionReveal>
            <SectionHeading
              eyebrow="Getting started"
              heading="Three simple steps"
              supportingCopy="Choose your starting point, contact the team, and use the right setup guide."
              align="center"
            />
          </MotionReveal>

          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <MotionReveal key={step.title} delay={index * 60}>
                <SurfaceCard className="h-full p-6 sm:p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full [background:var(--gradient-cta)] font-heading text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {step.description}
                  </p>
                </SurfaceCard>
              </MotionReveal>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section aria-labelledby="connection-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <MotionReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card-large)] border border-[color:var(--glass-border)]">
              <Image
                src="/images/stitch/setup-hub-01.webp"
                alt="Connected television setup in a dark living room"
                fill
                sizes="(min-width: 1024px) 42vw, calc(100vw - 40px)"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background-primary/80 via-transparent to-brand-violet/20" />
            </div>
          </MotionReveal>

          <MotionReveal delay={100}>
            <SectionHeading
              eyebrow="Before you stream"
              heading="Internet and setup guidance"
              supportingCopy="IPTV uses your internet connection. Connection quality, home network conditions and device setup can all affect playback."
            />
            <div className="mt-6 grid gap-3">
              <Link
                href="/guides/internet-speed-for-iptv/"
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-[color:var(--glass-border)] bg-[var(--glass-surface)] px-5 py-4 transition-colors hover:border-[color:var(--border-focus)] hover:bg-[var(--surface-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Wifi aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-violet" />
                <span className="flex-1 font-semibold">Review internet speed guidance</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <Link
                href="/guides/iptv-buffering/"
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-[color:var(--glass-border)] bg-[var(--glass-surface)] px-5 py-4 transition-colors hover:border-[color:var(--border-focus)] hover:bg-[var(--surface-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Gauge aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-violet" />
                <span className="flex-1 font-semibold">Troubleshoot buffering</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            </div>
          </MotionReveal>
        </PageContainer>
      </section>

      <section
        aria-labelledby="guides-heading"
        className="border-y border-border bg-background-secondary py-16 sm:py-20 lg:py-24"
      >
        <PageContainer>
          <MotionReveal>
            <SectionHeading
              eyebrow="Installation help"
              heading="Featured setup guides"
              supportingCopy="Use the installation and troubleshooting articles when preparing your device."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INSTALLATION_GUIDES.map((guide, index) => (
              <MotionReveal key={guide.href} delay={index * 60}>
                <Link
                  href={guide.href}
                  className="group block h-full rounded-[var(--radius-card-large)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <SurfaceCard className="h-full overflow-hidden transition-[transform,border-color] duration-200 group-hover:-translate-y-1 group-hover:border-[color:var(--border-focus)] motion-reduce:transition-none">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={guide.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 31vw, calc(100vw - 40px)"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-base/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-text-secondary">
                        {guide.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c9a8ff]">
                        Read guide
                        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </div>
                  </SurfaceCard>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section aria-labelledby="faq-heading" className="py-16 sm:py-20 lg:py-24">
        <PageContainer className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <MotionReveal>
            <SectionHeading
              eyebrow="Frequently asked questions"
              heading="IPTV South Africa questions"
              supportingCopy="Helpful context about IPTV, compatible devices and getting started."
            />
            <Link
              href="/faq/"
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#c9a8ff] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Browse every FAQ
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </MotionReveal>
          <MotionReveal delay={100}>
            <Faq items={FAQS} />
          </MotionReveal>
        </PageContainer>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24" aria-labelledby="cta-heading">
        <PageContainer>
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[var(--radius-card-large)] border border-[color:var(--border-elevated)] bg-[var(--surface-elevated)] px-6 py-12 text-center shadow-[var(--shadow-elevated)] sm:px-10 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,61,255,0.28),transparent_48%)]"
              />
              <div className="relative mx-auto max-w-2xl">
                <MessageCircle
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-[#c9a8ff]"
                />
                <h2
                  id="cta-heading"
                  className="mt-5 font-heading text-3xl font-bold tracking-[-0.02em] sm:text-4xl"
                >
                  Ready to explore Golden IPTV?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-secondary">
                  Start with the 24-hour free trial, compare every plan, or contact
                  the team with a subscription or setup question.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <PrimaryButton href="/iptv-free-trial/">
                    Start Free Trial
                  </PrimaryButton>
                  <SecondaryButton href="/pricing/">View Pricing</SecondaryButton>
                  <SecondaryButton href="/contact/">Contact Us</SecondaryButton>
                </div>
              </div>
            </div>
          </MotionReveal>
        </PageContainer>
      </section>
    </main>
  );
}
