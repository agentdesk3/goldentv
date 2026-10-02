import type { Metadata } from "next";
import Link from "next/link";
import { PLANS } from "@/app/iptv-south-africa/plans-data";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Golden IPTV | Plans, Trial & Setup Guides",
  description:
    "Explore Golden IPTV plans, request a 24-hour free trial and find setup guides for compatible Smart TVs and streaming devices.",
  url: "https://goldeniptv.co.za/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV streaming service",
  absoluteTitle: true,
});

const devices = [
  ["Samsung Smart TV", "/devices/samsung-smart-tv/", "Smart TV"],
  ["LG Smart TV", "/devices/lg-smart-tv/", "Smart TV"],
  ["Firestick", "/devices/firestick/", "Streaming"],
  ["Android TV", "/devices/android-tv/", "Streaming"],
  ["Apple TV", "/devices/apple-tv/", "Streaming"],
];

const guides = [
  {
    title: "How to Install IPTV",
    description:
      "Follow our practical IPTV installation guide for compatible TVs and streaming devices.",
    href: "/guides/how-to-install-iptv/",
    number: "01",
  },
  {
    title: "Fix IPTV Buffering",
    description:
      "Understand common buffering causes and the steps you can take to improve playback.",
    href: "/guides/iptv-buffering/",
    number: "02",
  },
  {
    title: "Internet Speed for IPTV",
    description:
      "Learn how internet speed, Wi-Fi and device performance can affect streaming.",
    href: "/guides/internet-speed-for-iptv/",
    number: "03",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Golden IPTV",
  url: "https://goldeniptv.co.za/",
  description:
    "Golden IPTV subscription plans, free-trial information and setup guides for compatible streaming devices.",
  inLanguage: "en-ZA",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(218,170,45,0.15),transparent_38%)]" />
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#c99a25]/10 blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#c99a25]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9ad3d]/25 bg-[#d9ad3d]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e7c65f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e7c65f] shadow-[0_0_10px_#e7c65f]" />
              Golden IPTV
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Golden IPTV.
              <br />
              <span className="bg-gradient-to-r from-[#fff1a8] via-[#e5b83d] to-[#a8780d] bg-clip-text text-transparent">
                Your entertainment.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Explore Golden IPTV subscription plans, start a 24-hour free
              trial and discover simple setup guides for Smart TVs and
              streaming devices in South Africa.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iptv-free-trial/"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#f7d774] via-[#dfb43f] to-[#b47e12] px-8 text-base font-bold text-black shadow-[0_12px_40px_rgba(211,166,48,0.18)] transition hover:-translate-y-1"
              >
                Start 24-Hour Free Trial
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/pricing/"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 text-base font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                View IPTV Plans
              </Link>

              <Link
                href={WHATSAPP_URL}
target="_blank"
rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#d9ad3d]/30 bg-[#d9ad3d]/5 px-8 text-base font-semibold text-[#f0ce67] transition hover:border-[#d9ad3d]/60 hover:bg-[#d9ad3d]/10"
              >
                Chat on WhatsApp
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-500">
              <span>✓ 24-hour free trial</span>
              <span>✓ Multiple subscription periods</span>
              <span>✓ Smart TV & streaming device guides</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#dcb344]">
              Why Golden IPTV
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
              Everything you need to get started with IPTV.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Golden IPTV brings subscription information, device setup guides
              and practical troubleshooting resources together in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ["01", "Flexible Plans"],
              ["02", "24-Hour Trial"],
              ["03", "Device Guides"],
              ["04", "Troubleshooting"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="text-xs font-bold text-[#cda435]">
                  {number}
                </span>

                <p className="mt-8 font-semibold text-zinc-200">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,164,45,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dcb344]">
                Subscription Plans
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                Choose your plan
              </h2>

              <p className="mt-4 max-w-xl text-zinc-400">
                Flexible subscription periods with a separate 24-hour free
                trial available.
              </p>
            </div>

            <Link
              href="/pricing/"
              className="text-sm font-semibold text-[#e3bd50] hover:text-[#f5d77d]"
            >
              Compare all plans →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  plan.popular
                    ? "border-[#cda435]/60 bg-gradient-to-b from-[#191509] to-[#0d0d0d] shadow-[0_20px_60px_rgba(193,145,29,0.08)]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#dcb344]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e5c35b]">
                    Popular
                  </div>
                )}

                <p className="text-sm font-medium text-zinc-500">
                  {plan.duration}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-lg text-[#dcb344]">
                    {plan.currencyLabel}
                  </span>

                  <span className="text-4xl font-black">{plan.price}</span>
                </div>

                <p className="mt-4 min-h-12 text-sm leading-6 text-zinc-500">
                  Flexible IPTV subscription for South African users.
                </p>

                <Link
                  href="/pricing/"
                  className="mt-7 flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold transition hover:border-[#cda435]/40 hover:bg-[#cda435]/10"
                >
                  View Plan
                </Link>
              </div>
            ))}
          </div>

          {/* Trial */}
          <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-[#cda435]/20 bg-gradient-to-r from-[#151207] to-[#0e0e0e] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#dcb344] px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                  Free Trial
                </span>

                <span className="text-sm text-zinc-500">24 hours</span>
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Try before choosing a paid plan.
              </h3>

              <p className="mt-2 text-zinc-400">
                Check compatibility and explore the setup process first.
              </p>
            </div>

            <Link
              href="/iptv-free-trial/"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#e2b943] px-7 font-bold text-black transition hover:bg-[#f0cc5c]"
            >
              Get Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dcb344]">
              Compatibility
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Watch on your favourite device.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Explore setup guides for popular Smart TVs and streaming
              platforms.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {devices.map(([name, href, type]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-white/10 bg-[#111] p-6 transition hover:-translate-y-1 hover:border-[#cda435]/40"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#b9932e]">
                  {type}
                </span>

                <h3 className="mt-8 text-lg font-bold text-white">{name}</h3>

                <span className="mt-5 block text-sm text-zinc-500 transition group-hover:text-[#dcb344]">
                  Setup guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dcb344]">
              Simple Setup
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Getting started is simple.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                "01",
                "Choose your option",
                "Start with the 24-hour trial or explore the available subscription plans.",
              ],
              [
                "02",
                "Check your device",
                "Choose the setup guide that matches your Smart TV or streaming device.",
              ],
              [
                "03",
                "Set up IPTV",
                "Follow the step-by-step instructions and troubleshoot common issues if needed.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-8"
              >
                <span className="text-5xl font-black text-[#d0a633]/20">
                  {number}
                </span>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dcb344]">
                IPTV Guides
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                Need help? Start here.
              </h2>
            </div>

            <Link
              href="/guides/"
              className="text-sm font-semibold text-[#e3bd50]"
            >
              Browse guides →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-3xl border border-white/10 bg-[#111] p-7 transition hover:-translate-y-1 hover:border-[#cda435]/40"
              >
                <span className="text-sm font-bold text-[#cda435]">
                  {guide.number}
                </span>

                <h3 className="mt-10 text-2xl font-bold">{guide.title}</h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {guide.description}
                </p>

                <span className="mt-7 block text-sm font-semibold text-zinc-300 group-hover:text-[#e3bd50]">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,170,45,0.14),transparent_42%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#dcb344]">
            Get Started
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Ready to explore IPTV?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Start with the 24-hour free trial or compare the available Golden
            IPTV subscription plans.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iptv-free-trial/"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#f7d774] to-[#b98212] px-8 font-bold text-black transition hover:-translate-y-1"
            >
              Start Free Trial →
            </Link>

            <Link
              href="/pricing/"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-8 font-semibold transition hover:bg-white/5"
            >
              Compare Plans
            </Link>

            <Link
              href={WHATSAPP_URL}
target="_blank"
rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#d9ad3d]/30 bg-[#d9ad3d]/5 px-8 font-semibold text-[#f0ce67] transition hover:border-[#d9ad3d]/60 hover:bg-[#d9ad3d]/10"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}