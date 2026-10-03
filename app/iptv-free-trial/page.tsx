import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { createPageMetadata } from "@/app/seo-metadata";

import TrialRequestForm from "./trial-request-form";

export const metadata: Metadata = createPageMetadata({
  title: "24-Hour IPTV Free Trial South Africa",
  description:
    "Request a 24-hour Golden IPTV free trial in South Africa, check device compatibility and test the service before choosing a subscription.",
  url: "https://www.goldeniptv.co.za/iptv-free-trial/",
  image: "/images/stitch/trial-01.webp",
  imageAlt: "Golden IPTV 24-hour free trial",
});

const trialBadges = [
  { icon: CheckCircle2, label: "No payment required" },
  { icon: Sparkles, label: "Compatible-device guidance" },
  { icon: Clock3, label: "24-hour trial period" },
] as const;

const nextSteps = [
  {
    title: "Send your request",
    copy: "Complete the form and send the prepared message through WhatsApp.",
  },
  {
    title: "Receive your setup details",
    copy: "Golden IPTV will respond through the WhatsApp conversation with the information needed for your trial.",
  },
  {
    title: "Test for 24 hours",
    copy: "Use the trial on your selected compatible device before choosing a paid plan.",
  },
] as const;

export default function IptvFreeTrialPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <div className="pointer-events-none absolute -left-40 -top-32 h-[540px] w-[540px] rounded-full bg-[#8b3dff]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-[#046ef1]/15 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-10 md:px-8 lg:px-16">
        <section className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#272936]/80 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#046ef1] motion-reduce:animate-none" />
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
              24-hour Golden IPTV trial
            </span>
          </div>
          <h1 className="font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[64px] md:leading-[72px]">
            24-Hour IPTV Free Trial
            <span className="block bg-gradient-to-r from-[#d4bbff] to-[#afc6ff] bg-clip-text text-transparent">
              in South Africa
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#cdc2d8] md:text-lg">
            Try Golden IPTV for 24 hours on a compatible device before choosing
            a subscription plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {trialBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-[#181b27]/90 px-4 py-2 text-xs font-semibold text-[#e0e1f2]"
              >
                <Icon className="h-4 w-4 text-[#d4bbff]" />
                {label}
              </span>
            ))}
          </div>
        </section>

        <section
          id="trial-request"
          className="mt-10 grid items-start gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <TrialRequestForm />
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="story-card overflow-hidden rounded-[2rem] bg-[#181b27]/90 shadow-xl">
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image
                  src="/images/stitch/trial-01.webp"
                  alt="Cinematic smart television displaying a modern streaming interface"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="story-media object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19] via-[#0b0e19]/35 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#0b0e19]/80 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#ff3b56]" />
                  <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.12em]">
                    Trial preview
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#afc6ff]">
                    Compatible-device testing
                  </span>
                  <p className="mt-1 font-heading text-xl font-bold">
                    Test the service on your own setup
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0b0e19]/80 p-5 text-xs text-[#cdc2d8]">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#d4bbff]" />
                  No payment required
                </span>
                <Link
                  href="/devices/"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#afc6ff] hover:text-white"
                >
                  View devices <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#181b27]/80 p-6 shadow-xl backdrop-blur-2xl">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold">
                <Sparkles className="h-5 w-5 text-[#d4bbff]" />
                What Happens Next?
              </h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8b3dff] to-[#046ef1] text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{step.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#cdc2d8]">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl bg-[#1c1f2b] p-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-bold">Need help getting started?</p>
                  <p className="mt-1 text-xs text-[#cdc2d8]">
                    Contact Golden IPTV through WhatsApp.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#313441] px-4 py-2 text-xs font-bold hover:bg-[#363945]"
                >
                  <MessageCircle className="h-4 w-4 text-[#afc6ff]" />
                  Get Support
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#181b27]/70 p-5">
                <strong className="font-heading text-2xl font-extrabold text-[#d4bbff]">
                  24 hours
                </strong>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-[#cdc2d8]">
                  Trial period
                </span>
              </div>
              <div className="rounded-2xl bg-[#181b27]/70 p-5">
                <strong className="font-heading text-2xl font-extrabold text-[#afc6ff]">
                  5 guides
                </strong>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-[#cdc2d8]">
                  Supported devices
                </span>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

