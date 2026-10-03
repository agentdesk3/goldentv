import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  KeyRound,
  MessageCircle,
  MonitorPlay,
} from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { createPageMetadata } from "@/app/seo-metadata";
import SetupHubGrid from "./setup-hub-grid";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV Setup & Troubleshooting Guides",
  description:
    "Explore Golden IPTV guides for installation, buffering problems, internet speed and setup help for compatible streaming devices.",
  url: "https://goldeniptv.co.za/guides/",
  image: "/images/stitch/setup-hub-01.webp",
  imageAlt: "Golden IPTV setup and troubleshooting guides",
});

const setupFaqs = [
  {
    question: "Where do I find the setup details for my service?",
    answer:
      "Use the setup information supplied with your Golden IPTV trial or subscription. If you need help locating it, contact Golden IPTV through WhatsApp.",
  },
  {
    question: "Which device guide should I open?",
    answer:
      "Choose the guide that matches your television or streaming device. The supported routes cover Samsung Smart TV, LG Smart TV, Firestick, Android TV and Apple TV.",
  },
  {
    question: "What should I check if playback buffers?",
    answer:
      "Start with the IPTV buffering guide and check your internet connection, Wi-Fi conditions and device performance.",
  },
] as const;

export default function GuidesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <div className="pointer-events-none absolute left-[-7rem] top-24 h-[520px] w-[520px] rounded-full bg-[#8b3dff]/15 blur-[145px]" />
      <div className="pointer-events-none absolute right-[-5rem] top-20 h-[540px] w-[540px] rounded-full bg-[#046ef1]/15 blur-[150px]" />

      <section className="relative mx-auto grid w-full max-w-[1440px] gap-8 px-5 pb-12 pt-10 md:px-8 lg:grid-cols-12 lg:px-16">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#272936]/75 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#046ef1]" />
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
              Hardware deployment guides
            </span>
          </div>
          <h1 className="mt-4 font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[44px] md:leading-[52px]">
            IPTV Setup &amp;
            <span className="block bg-gradient-to-r from-[#d4bbff] to-[#afc6ff] bg-clip-text text-transparent">
              Troubleshooting Guides
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#cdc2d8]">
            Choose a platform or practical help topic for step-by-step guidance
            using the routes already available in this project.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#968da1]">
                Guide routes
              </span>
              <strong className="mt-1 block font-heading text-xl">8</strong>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#968da1]">
                Device guides
              </span>
              <strong className="mt-1 block font-heading text-xl">5</strong>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#968da1]">
                Trial
              </span>
              <strong className="mt-1 block font-heading text-xl">24 hours</strong>
            </div>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-[2rem] shadow-2xl lg:col-span-7">
          <Image
            src="/images/stitch/setup-hub-01.webp"
            alt="Cinematic television displaying the Golden IPTV setup interface"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19] via-transparent to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#0b0e19]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#ff3b56]" />
            Setup guide preview
          </span>
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <MonitorPlay className="h-4 w-4 text-[#d4bbff]" />
              Visual platform guidance
            </span>
            <span className="rounded-full bg-[#8b3dff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
              Golden IPTV
            </span>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1440px] px-5 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#968da1]">
              Select a route
            </span>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Published Platform Guides
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-[#cdc2d8]">
            Search the real installation, troubleshooting and device guide
            routes. Each card opens published repository content.
          </p>
        </div>
        <SetupHubGrid />
      </section>

      <section className="relative mx-auto mt-8 w-full max-w-[1312px] overflow-hidden rounded-[2rem] bg-[#181b27]/85 p-6 shadow-xl md:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#272936] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#d4bbff]">
              <KeyRound className="h-3.5 w-3.5" />
              Setup information
            </div>
            <h2 className="mt-4 font-heading text-3xl font-bold">
              What Your Player May Ask For
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#cdc2d8]">
              The exact fields vary by the compatible application you choose.
              Enter only the setup information supplied with your trial or
              subscription.
            </p>
            <div className="mt-6 space-y-2">
              {[
                ["1", "Profile or playlist name", "Choose a recognisable label"],
                ["2", "Service or server detail", "Use the supplied value exactly"],
                ["3", "Account credentials", "Use the supplied login information"],
              ].map(([number, label, value]) => (
                <div
                  key={number}
                  className="flex flex-col gap-2 rounded-2xl bg-[#0b0e19]/70 p-4 sm:flex-row sm:items-center"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#272936] text-xs font-bold text-[#d4bbff]">
                    {number}
                  </span>
                  <strong className="text-sm sm:w-48">{label}</strong>
                  <span className="text-xs text-[#cdc2d8] sm:ml-auto">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative h-56 overflow-hidden rounded-2xl">
              <Image
                src="/images/stitch/setup-hub-02.webp"
                alt="Remote control used with a cinematic television setup"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19] via-transparent" />
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold">
              Keep your supplied details private
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
              If you are unsure which field to use, contact Golden IPTV through
              the real support channel before sharing account information.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-4xl px-5 py-16 md:px-8">
        <div className="text-center">
          <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#968da1]">
            Fast resolutions
          </span>
          <h2 className="mt-1 font-heading text-3xl font-bold">
            Common Hardware Questions
          </h2>
        </div>
        <div className="mt-7 space-y-2">
          {setupFaqs.map((item) => (
            <details key={item.question} className="group rounded-2xl bg-[#181b27]/80">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-lg font-semibold">
                {item.question}
                <span className="text-[#968da1] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-7 text-[#cdc2d8]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mb-10 w-[calc(100%-2.5rem)] max-w-[1312px] overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#181b27] to-[#14213d] p-7 shadow-xl md:p-9">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#afc6ff]">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" /> WhatsApp support
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> Real support route
              </span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold">
              Need assistance setting up?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
              Use WhatsApp for setup questions or open the contact page for the
              available support paths.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b3dff] to-[#046ef1] px-6 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Support
            </a>
            <Link
              href="/contact/"
              className="ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#313441] px-6 text-sm font-bold"
            >
              Contact options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}