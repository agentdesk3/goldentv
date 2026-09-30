import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Cast,
  CircleHelp,
  CirclePlay,
  CreditCard,
  Headphones,
  House,
  Laptop,
  ListChecks,
  MailCheck,
  MessageCircle,
  MonitorPlay,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tv,
  Zap,
} from "lucide-react";

import HomeCatalog from "@/app/components/home-catalog";
import HomePlanPreview from "@/app/components/home-plan-preview";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { PLANS } from "@/app/iptv-south-africa/plans-data";

export const metadata: Metadata = {
  title: "IPTV South Africa | Golden IPTV",
  description:
    "Explore IPTV in South Africa with Golden IPTV. Compare subscription plans, request a 24-hour free trial and find setup guides for supported TVs and streaming devices.",
  alternates: {
    canonical: "https://goldeniptv.co.za/",
  },
};

type CatalogStat = {
  value: string;
  label: string;
  description: string;
  badge: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  badgeClassName: string;
};

const catalogStats: CatalogStat[] = [
  {
    value: "30,000+",
    label: "Live Channels",
    description: "Global sports, news, entertainment and local programming.",
    badge: "Live worldwide",
    image: "/images/home/stitch-catalog-sports.jpg",
    icon: Tv,
    accent: "text-[#d4bbff]",
    badgeClassName:
      "border-[rgba(212,187,255,0.28)] bg-[rgba(139,61,255,0.18)] text-[#d4bbff]",
  },
  {
    value: "160,000+",
    label: "Movies",
    description: "A broad on-demand library spanning new and classic cinema.",
    badge: "On-demand VOD",
    image: "/images/home/stitch-catalog-cinema.jpg",
    icon: MonitorPlay,
    accent: "text-[#afc6ff]",
    badgeClassName:
      "border-[rgba(175,198,255,0.28)] bg-[rgba(40,124,255,0.18)] text-[#afc6ff]",
  },
  {
    value: "59,000+",
    label: "Series",
    description: "Complete seasons and episodic entertainment in one place.",
    badge: "Full boxsets",
    image: "/images/home/stitch-catalog-global.jpg",
    icon: CirclePlay,
    accent: "text-[#c1c1ff]",
    badgeClassName:
      "border-[rgba(193,193,255,0.28)] bg-[rgba(93,92,255,0.18)] text-[#c1c1ff]",
  },
];

const trustItems = [
  { label: "24-Hour Trial", icon: Sparkles, accent: "text-[#d4bbff]" },
  { label: "Supported Devices", icon: MonitorPlay, accent: "text-[#afc6ff]" },
  { label: "No Card Required", icon: CreditCard, accent: "text-[#c1c1ff]" },
] as const;

const deviceCards = [
  {
    title: "Smart TVs",
    description: "Samsung and LG Smart TV setup routes.",
    detail: "Samsung · LG",
    icon: Tv,
    accent: "text-[#d4bbff]",
    surface: "bg-[rgba(139,61,255,0.16)]",
    href: "/devices/",
  },
  {
    title: "Streaming Devices",
    description: "Fire TV, Android TV and Apple TV guidance.",
    detail: "Fire TV · Apple TV",
    icon: Cast,
    accent: "text-[#afc6ff]",
    surface: "bg-[rgba(40,124,255,0.16)]",
    href: "/devices/",
  },
  {
    title: "Mobile & Tablets",
    description: "Continue on phones and tablets with compatible players.",
    detail: "iOS · Android",
    icon: Smartphone,
    accent: "text-[#c1c1ff]",
    surface: "bg-[rgba(93,92,255,0.16)]",
    href: "/guides/",
  },
  {
    title: "PC & Web",
    description: "Use desktop players and browser-based setup guidance.",
    detail: "Windows · macOS",
    icon: Laptop,
    accent: "text-[#d4bbff]",
    surface: "bg-[rgba(139,61,255,0.16)]",
    href: "/guides/",
  },
] as const;

const onboardingSteps = [
  {
    number: "1",
    title: "Choose a Plan or Request a Trial",
    description:
      "Compare the four published subscription periods or begin with the 24-hour trial request.",
    action: "Compare your options",
    href: "/pricing/",
    icon: ListChecks,
    accent: "text-[#d4bbff]",
    numberClassName: "bg-[var(--brand-violet)]",
  },
  {
    number: "2",
    title: "Send Your Access Request",
    description:
      "Complete the trial form and send the prepared request to Golden IPTV through WhatsApp.",
    action: "Open the trial form",
    href: "/iptv-free-trial/",
    icon: MailCheck,
    accent: "text-[#afc6ff]",
    numberClassName: "bg-[var(--brand-blue)]",
  },
  {
    number: "3",
    title: "Follow the Setup Guide",
    description:
      "Choose the matching device guide and use its documented steps to get connected.",
    action: "View setup guides",
    href: "/guides/",
    icon: Play,
    accent: "text-[#c1c1ff]",
    numberClassName: "bg-[var(--brand-indigo)]",
  },
] as const;

const faqs = [
  {
    question: "How does the 24-hour free trial work?",
    answer:
      "Complete the trial request form, then send the prepared WhatsApp message to Golden IPTV. The trial is separate from the paid subscription plans.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Golden IPTV publishes setup guidance for Samsung and LG Smart TVs, Fire TV, Android TV and Apple TV devices.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Choose a plan or request the trial, send your details through the available route, then follow the setup guide for your device.",
  },
  {
    question: "Can I get help with setup?",
    answer:
      "Yes. Use the documented device guides first, then contact Golden IPTV through the support page or WhatsApp if you need more help.",
  },
] as const;

const mobileNavigation = [
  { label: "Home", href: "/", icon: House },
  { label: "Plans", href: "/pricing/", icon: ListChecks },
  { label: "Devices", href: "/devices/", icon: Tv },
  { label: "Setup", href: "/guides/", icon: BookOpen },
  { label: "Support", href: "/contact/", icon: CircleHelp },
] as const;

const subscriptionBenefits = [
  { label: "No Buffering", icon: Zap, accent: "text-[#d4bbff]" },
  { label: "Instant Activation", icon: Sparkles, accent: "text-[#afc6ff]" },
  { label: "24/7 Support", icon: Headphones, accent: "text-[#c1c1ff]" },
] as const;

export default function Home() {
  return (
    <main className="home-page min-h-screen overflow-hidden bg-[var(--background-primary)] text-text-primary">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="ambient-drift pointer-events-none absolute -right-48 -top-44 h-[560px] w-[560px] rounded-full bg-[rgba(40,124,255,0.12)] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="ambient-drift pointer-events-none absolute -left-44 top-60 h-[520px] w-[520px] rounded-full bg-[rgba(139,61,255,0.16)] blur-[150px]"
        />

        <MobileHero />
        <DesktopHero />
      </div>

      <CatalogShowcase />
      <HomeCatalog />
      <DeviceShowcase />
      <Onboarding />
      <PricingShowcase />
      <FaqPreview />
      <FinalCta />

      <nav
        className="home-mobile-nav fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[rgba(5,7,17,0.92)] px-1 pb-[max(env(safe-area-inset-bottom),0.25rem)] backdrop-blur-xl lg:hidden"
        aria-label="Home quick navigation"
      >
        <div className="mx-auto flex h-16 max-w-md items-center justify-around">
          {mobileNavigation.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/";

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "flex min-h-11 min-w-14 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors",
                  active
                    ? "text-[#d4bbff]"
                    : "text-text-secondary hover:text-white",
                ].join(" ")}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </main>
  );
}

function MobileHero() {
  return (
    <section className="relative z-10 px-5 pb-7 pt-5 text-center lg:hidden">
      <div className="hero-copy mx-auto flex max-w-md flex-col items-center">
        <Eyebrow>Premium IPTV Entertainment</Eyebrow>
        <h1 className="mt-4 max-w-sm font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] text-text-primary">
          Unlimited Entertainment.
          <span className="block bg-[linear-gradient(90deg,#d4bbff,#c1c1ff,#afc6ff)] bg-clip-text text-transparent">
            All in One Place.
          </span>
        </h1>
        <p className="mt-3 max-w-xs text-[15px] leading-6 text-text-secondary">
          Explore subscription plans, request a 24-hour free trial and follow
          setup guides for your preferred screen.
        </p>

        <div className="mt-5 grid w-full max-w-xs gap-2">
          <Link
            href="/iptv-free-trial/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--gradient-cta)] px-6 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,61,255,0.45)] transition-transform active:scale-[0.98] motion-reduce:transform-none"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            Start Free Trial
          </Link>
          <Link
            href="/pricing/"
            className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full border border-white/10 bg-[rgba(18,24,42,0.88)] px-6 text-sm font-semibold text-text-primary"
          >
            Explore Plans
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-media-composition relative mt-6 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-base)] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.72),0_0_28px_rgba(139,61,255,0.2)]">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              fill
              priority
              src="/images/home/hero-streaming-cinema.webp"
              alt="Golden IPTV streaming interface displayed on a television"
              sizes="(max-width: 1023px) 92vw, 0px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,7,17,0.54)] to-transparent" />
          </div>
        </div>

        <div className="mt-4 grid w-full max-w-sm grid-cols-3 gap-1.5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.07] bg-[rgba(13,18,32,0.74)] px-1.5"
              >
                <Icon className={["h-4 w-4", item.accent].join(" ")} aria-hidden="true" />
                <span className="text-[10px] font-semibold leading-3.5 text-text-primary">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesktopHero() {
  return (
    <section className="relative z-10 mx-auto hidden w-full max-w-[1440px] px-[var(--page-gutter)] pb-24 pt-9 lg:block">
      <div className="grid grid-cols-12 items-center gap-8">
        <div className="hero-copy col-span-5 flex flex-col items-start">
          <Eyebrow>Premium IPTV Entertainment</Eyebrow>
          <h1 className="mt-4 font-heading text-[64px] font-extrabold leading-[72px] tracking-[-0.02em] text-text-primary">
            Unlimited Entertainment.
            <span className="block bg-[linear-gradient(90deg,#d4bbff,#c1c1ff,#afc6ff)] bg-clip-text text-transparent">
              All in One Place.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-7 text-text-secondary">
            Explore Golden IPTV subscription options, start with a 24-hour free
            trial and use the matching setup guide for your screen.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/iptv-free-trial/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--gradient-cta)] px-10 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,61,255,0.45),0_0_40px_rgba(40,124,255,0.25)] transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(139,61,255,0.7)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(18,24,42,0.8)] px-7 text-sm font-semibold text-text-primary backdrop-blur transition-colors hover:bg-[var(--surface-higher)]"
            >
              Explore Plans
            </Link>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-2 xl:grid-cols-4">
            {[
              { label: "Free 24h Trial", icon: Sparkles },
              { label: "All Devices", icon: MonitorPlay },
              { label: "No Card Required", icon: ShieldCheck },
              { label: "Quick Delivery", icon: Zap },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex min-h-14 items-center gap-2 rounded-xl border border-white/[0.07] bg-[rgba(13,18,32,0.72)] px-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#d4bbff]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold leading-4 text-text-primary">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <HeroMediaStage />
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(18,24,42,0.8)] px-3 py-1 backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-violet)] opacity-70 motion-reduce:animate-none" />
        <span className="relative h-2 w-2 rounded-full bg-[var(--brand-violet)]" />
      </span>
      <span className="font-heading text-[11px] font-extrabold uppercase leading-4 tracking-[0.14em] text-[#d4bbff]">
        {children}
      </span>
    </div>
  );
}

function CatalogShowcase() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(5,7,17,0.96),rgba(13,18,32,0.7),rgba(5,7,17,0.96))] py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--page-gutter)]">
        <div className="max-w-3xl lg:mx-auto lg:text-center">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
            Massive catalogue
          </p>
          <h2 className="mt-1 font-heading text-[24px] font-bold leading-8 tracking-[-0.01em] text-text-primary lg:text-[44px] lg:leading-[52px]">
            Everything You Want to Watch.
            <span className="text-[#d4bbff]"> One Subscription.</span>
          </h2>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary lg:text-lg lg:leading-7">
            Live television, movies and series brought together in one
            entertainment experience.
          </p>
        </div>

        <div className="mt-5 grid gap-2 lg:hidden">
          {catalogStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="relative min-h-36 overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-base)]"
              >
                <Image
                  fill
                  src={stat.image}
                  alt=""
                  sizes="(max-width: 1023px) 92vw, 0px"
                  className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,7,17,0.98)] via-[rgba(13,18,32,0.84)] to-transparent" />
                <div className="relative z-10 flex min-h-36 flex-col justify-center p-4">
                  <span className="bg-[linear-gradient(90deg,#d4bbff,#c1c1ff,#afc6ff)] bg-clip-text font-heading text-[38px] font-extrabold leading-10 text-transparent">
                    {stat.value}
                  </span>
                  <span className="mt-1 font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">
                    {stat.label}
                  </span>
                  <span className="mt-1 max-w-[78%] text-xs leading-4 text-text-secondary">
                    {stat.description}
                  </span>
                  <Icon
                    className={["absolute right-4 top-4 h-5 w-5", stat.accent].join(" ")}
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 hidden grid-cols-3 gap-6 lg:grid">
          {catalogStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[rgba(18,24,42,0.74)] p-8 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color:var(--border-focus)] hover:shadow-[0_20px_50px_rgba(139,61,255,0.2)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <Image
                  fill
                  src={stat.image}
                  alt=""
                  sizes="(min-width: 1024px) 30vw, 0px"
                  className="object-cover opacity-20 transition-[transform,opacity] duration-500 group-hover:scale-105 group-hover:opacity-30 motion-reduce:transform-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-elevated)] via-[rgba(18,24,42,0.76)] to-transparent" />
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-semibold",
                      stat.badgeClassName,
                    ].join(" ")}
                  >
                    {stat.badge}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-black/20">
                    <Icon className={["h-5 w-5", stat.accent].join(" ")} aria-hidden="true" />
                  </span>
                </div>
                <div className="relative z-10">
                  <p className="bg-[linear-gradient(90deg,#d4bbff,#c1c1ff,#afc6ff)] bg-clip-text font-heading text-6xl font-extrabold tracking-[-0.03em] text-transparent">
                    {stat.value}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-[0.05em] text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-text-secondary">
                    {stat.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeviceShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[var(--page-gutter)] py-8 lg:py-10">
      <div className="max-w-3xl lg:mx-auto lg:text-center">
        <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#c1c1ff]">
          Device compatibility
        </p>
        <h2 className="mt-1 font-heading text-[24px] font-bold leading-8 text-text-primary lg:text-[44px] lg:leading-[52px]">
          <span className="lg:hidden">Stream Across All Your Screens</span>
          <span className="hidden lg:inline">
            Zero Hardware Lock-In. Run on Any Screen.
          </span>
        </h2>
        <p className="mt-2 text-[13px] leading-5 text-text-secondary lg:text-lg lg:leading-7">
          Choose the closest device family, then open the matching setup
          guidance.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
        {deviceCards.map((device) => {
          const Icon = device.icon;
          return (
            <Link
              key={device.title}
              href={device.href}
              className="group flex min-h-44 flex-col rounded-2xl border border-white/[0.08] bg-[rgba(13,18,32,0.82)] p-4 shadow-md transition-[transform,background-color,border-color] hover:-translate-y-1 hover:border-[color:var(--border-focus)] hover:bg-[var(--surface-elevated)] motion-reduce:transform-none lg:min-h-60 lg:p-6"
            >
              <span
                className={[
                  "grid h-10 w-10 place-items-center rounded-xl lg:h-12 lg:w-12",
                  device.surface,
                  device.accent,
                ].join(" ")}
              >
                <Icon className="h-5 w-5 lg:h-7 lg:w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-heading text-[17px] font-semibold leading-6 text-text-primary lg:text-xl">
                {device.title}
              </h3>
              <p className="mt-1 text-[11px] leading-4 text-text-secondary lg:text-[13px] lg:leading-5">
                {device.description}
              </p>
              <span className="mt-auto pt-4 font-mono text-[10px] text-text-secondary lg:text-[11px]">
                {device.detail}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Onboarding() {
  return (
    <section className="bg-[rgba(5,7,17,0.7)] py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--page-gutter)]">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#d4bbff]">
            Getting started
          </p>
          <h2 className="mt-1 font-heading text-[24px] font-bold leading-8 text-text-primary lg:text-[44px] lg:leading-[52px]">
            <span className="lg:hidden">How It Works</span>
            <span className="hidden lg:inline">Three Steps to Live Streaming</span>
          </h2>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary lg:text-[15px] lg:leading-6">
            Choose your option, send the request and follow the documented
            setup path.
          </p>
        </div>

        <div className="mt-5 grid gap-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {onboardingSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="flex gap-4 rounded-2xl border border-white/[0.08] bg-[var(--surface-base)] p-4 shadow-md lg:min-h-56 lg:flex-col lg:p-6"
              >
                <div className="flex shrink-0 items-start lg:items-center lg:justify-between">
                  <span
                    className={[
                      "grid h-8 w-8 place-items-center rounded-full font-heading text-base font-bold text-white shadow-sm lg:h-10 lg:w-10 lg:text-xl",
                      step.numberClassName,
                    ].join(" ")}
                  >
                    {step.number}
                  </span>
                  <Icon className="hidden h-6 w-6 text-text-muted lg:block" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-heading text-[16px] font-semibold leading-5 text-text-primary lg:mt-1 lg:text-xl lg:leading-7">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-4.5 text-text-secondary lg:text-[15px] lg:leading-6">
                    {step.description}
                  </p>
                  <Link
                    href={step.href}
                    className={["mt-auto hidden pt-3 text-xs font-semibold lg:inline-flex", step.accent].join(" ")}
                  >
                    {step.action} →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[var(--page-gutter)] py-8 lg:py-10">
      <div className="mb-5 flex flex-col justify-between gap-4 lg:mb-10 lg:flex-row lg:items-end">
        <div>
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
            Transparent value
          </p>
          <h2 className="mt-1 font-heading text-[24px] font-bold leading-8 text-text-primary lg:text-[44px] lg:leading-[52px]">
            <span className="lg:hidden">Flexible Subscription Passes</span>
            <span className="hidden lg:inline">Simple, Transparent Plans</span>
          </h2>
          <p className="mt-1 max-w-2xl text-[13px] leading-5 text-text-secondary lg:text-[15px] lg:leading-6">
            Choose from the four published Golden IPTV subscription periods.
          </p>
        </div>
        <Link
          href="/pricing/"
          className="hidden items-center gap-2 text-sm font-bold text-[#d4bbff] transition-colors hover:text-white lg:inline-flex"
        >
          View All Subscription Options
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="lg:hidden">
        <HomePlanPreview />
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-6">
          {PLANS.map((plan) => {
            const featured = Boolean(plan.popular);
            return (
              <article
                key={plan.id}
                className={[
                  "relative flex min-h-[300px] flex-col rounded-2xl border p-6 transition-[transform,background-color,box-shadow] hover:-translate-y-1 motion-reduce:transform-none",
                  featured
                    ? "border-[rgba(212,187,255,0.45)] bg-[var(--surface-elevated)] shadow-[var(--shadow-elevated)]"
                    : "border-white/[0.08] bg-[var(--surface-base)] shadow-md hover:bg-[var(--surface-elevated)]",
                ].join(" ")}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-cta)] px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                    Popular Choice
                  </span>
                )}
                <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-secondary">
                  Golden IPTV plan
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary">
                  {plan.duration}
                </h3>
                <p
                  className={[
                    "my-4 rounded-lg bg-[var(--background-secondary)] px-3 py-2 font-mono text-sm",
                    featured ? "text-[#d4bbff]" : "text-[#afc6ff]",
                  ].join(" ")}
                >
                  {plan.price} · ZAR
                </p>
                <p className="text-[13px] leading-5 text-text-secondary">
                  {plan.description}
                </p>
                <Link
                  href="/pricing/"
                  className={[
                    "mt-auto inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-[background-color,box-shadow]",
                    featured
                      ? "bg-[var(--gradient-cta)] text-white hover:shadow-[0_0_20px_rgba(139,61,255,0.5)]"
                      : "bg-[var(--surface-higher)] text-text-primary hover:bg-[#363945]",
                  ].join(" ")}
                >
                  View {plan.duration} Plan
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[rgba(13,18,32,0.78)] p-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-text-primary">
              Included with every subscription
            </h3>
            <p className="mt-1 text-[13px] leading-5 text-text-secondary">
              These service benefits apply to each duration option.
            </p>
          </div>
          <ul className="grid shrink-0 grid-cols-3 gap-5">
            {subscriptionBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.label}
                  className="flex items-center gap-2 text-xs font-semibold text-text-primary"
                >
                  <Icon className={["h-4 w-4", benefit.accent].join(" ")} aria-hidden="true" />
                  {benefit.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="bg-[rgba(5,7,17,0.78)] py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[960px] px-[var(--page-gutter)]">
        <div className="lg:text-center">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#d4bbff]">
            Help &amp; answers
          </p>
          <h2 className="mt-1 font-heading text-[24px] font-bold leading-8 text-text-primary lg:text-[44px] lg:leading-[52px]">
            Questions Before You Start?
          </h2>
          <p className="mt-2 text-[13px] leading-5 text-text-secondary lg:text-[15px] lg:leading-6">
            Quick answers, with the full FAQ available when you need more.
          </p>
        </div>

        <div className="mt-5 grid gap-2 lg:mt-8 lg:gap-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/[0.08] bg-[var(--surface-base)] px-4 py-1 shadow-sm open:bg-[var(--surface-elevated)] lg:px-5"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-heading text-[14px] font-semibold text-text-primary lg:min-h-16 lg:text-xl">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--surface-higher)] text-[#d4bbff] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-white/[0.08] pb-4 pt-3 text-[13px] leading-5 text-text-secondary lg:text-[15px] lg:leading-6">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/faq/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#d4bbff] hover:text-white"
          >
            View All FAQs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[var(--page-gutter)] py-8 lg:py-10">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(120deg,var(--surface-base),var(--surface-elevated),var(--surface-base))] p-6 text-center shadow-[0_20px_50px_rgba(5,7,17,0.9)] lg:p-12 lg:text-left">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[rgba(139,61,255,0.24)] blur-[96px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[rgba(40,124,255,0.2)] blur-[96px]"
        />
        <div className="relative z-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="max-w-2xl">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-cta)] text-white shadow-[0_0_22px_rgba(139,61,255,0.5)] lg:hidden">
              <Tv className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-3 font-heading text-[24px] font-extrabold leading-8 text-text-primary lg:mt-0 lg:text-[44px] lg:leading-[52px]">
              Ready to Start Watching?
            </h2>
            <p className="mt-2 text-[13px] leading-5 text-text-secondary lg:text-lg lg:leading-7">
              Request your 24-hour free trial or compare the available
              subscription options.
            </p>
          </div>

          <div className="grid w-full gap-2 sm:max-w-xs lg:flex lg:max-w-none lg:w-auto">
            <Link
              href="/iptv-free-trial/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--gradient-cta)] px-8 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,61,255,0.45)]"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(5,7,17,0.72)] px-7 text-sm font-semibold text-white"
            >
              View Plans
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#25d366]/30 bg-[#25d366]/10 px-6 text-sm font-semibold text-[#57e389]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMediaStage() {
  return (
    <div
      aria-hidden="true"
      className="hero-media-composition relative col-span-7 flex items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[48px] bg-gradient-to-tr from-[rgba(139,61,255,0.2)] to-[rgba(40,124,255,0.2)] blur-[90px]" />
      <div className="relative flex w-full max-w-[700px] flex-col items-center">
        <div className="flex aspect-[16/9.5] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[rgba(5,7,17,0.92)] shadow-[0_24px_64px_rgba(5,7,17,0.95),0_0_40px_rgba(139,61,255,0.25)]">
          <div className="flex h-10 shrink-0 items-center justify-between bg-[rgba(8,11,22,0.84)] px-4 text-[11px] font-semibold text-text-secondary backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Tv className="h-4 w-4 text-[#d4bbff]" />
              <span className="font-bold text-text-primary">Golden IPTV</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#d4bbff]">Home</span>
              <span>Plans</span>
              <span>Devices</span>
              <span>Setup</span>
            </div>
            <span className="h-2 w-2 rounded-full bg-[var(--brand-blue)] shadow-[0_0_8px_rgba(40,124,255,1)]" />
          </div>

          <div className="grid flex-1 grid-cols-12 gap-3 bg-gradient-to-b from-[rgba(8,11,22,0.5)] to-[var(--background-primary)] p-4">
            <div className="col-span-3 flex flex-col gap-2 rounded-xl bg-[rgba(18,24,42,0.46)] p-3">
              {[
                { label: "Home", icon: House, active: true },
                { label: "Plans", icon: ListChecks },
                { label: "Devices", icon: Tv },
                { label: "Setup", icon: BookOpen },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={[
                      "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-semibold",
                      item.active
                        ? "bg-[rgba(139,61,255,0.3)] text-white"
                        : "text-text-secondary",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                );
              })}
              <div className="mt-auto rounded-lg bg-[rgba(13,18,32,0.68)] px-2 py-1.5 text-[10px] text-[#afc6ff]">
                Guides available
              </div>
            </div>

            <div className="col-span-9 flex flex-col gap-3">
              <div className="relative flex-1 overflow-hidden rounded-xl">
                <Image
                  fill
                  priority
                  src="/images/home/stitch-hero-stage.jpg"
                  alt=""
                  sizes="58vw"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-primary)] via-[rgba(5,7,17,0.25)] to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <span className="rounded-full bg-[rgba(139,61,255,0.82)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Cinematic preview
                  </span>
                  <p className="mt-2 font-heading text-xl font-bold text-white">
                    Entertainment on Your Screen
                  </p>
                  <p className="text-[12px] text-text-secondary">
                    Compare plans, choose a device and follow its setup guide.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Plan options", value: "4 periods", icon: ListChecks },
                  { label: "Device guides", value: "5 routes", icon: MonitorPlay },
                  { label: "Free trial", value: "24 hours", icon: CirclePlay },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex h-16 items-center gap-2 rounded-lg bg-[rgba(18,24,42,0.68)] p-2"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-[rgba(139,61,255,0.16)] text-[#d4bbff]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-semibold text-text-primary">
                          {item.label}
                        </span>
                        <span className="block font-mono text-[10px] text-[#afc6ff]">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="h-3 w-28 rounded-t-sm bg-[var(--surface-higher)]" />
        <div className="h-1.5 w-48 rounded-full bg-[#363945]" />
        <div className="mt-4 flex items-center gap-6">
          <div className="flex h-8 w-44 items-center justify-between rounded-md bg-[rgba(18,24,42,0.92)] px-3 shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
            <span className="font-mono text-[10px] tracking-widest text-text-secondary">
              GOLDEN IPTV
            </span>
            <span className="h-2 w-2 rounded-full bg-[var(--brand-blue)] shadow-[0_0_8px_rgba(40,124,255,1)]" />
          </div>
          <div className="flex h-6 w-24 items-center justify-between rounded-full bg-[rgba(30,38,61,0.82)] px-2">
            <span className="h-2 w-2 rounded-full bg-text-muted" />
            <span className="h-1 w-6 rounded-full bg-[rgba(212,187,255,0.6)]" />
            <span className="h-2 w-2 rounded-full bg-text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}