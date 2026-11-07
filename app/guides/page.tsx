import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, KeyRound, LockKeyhole, MessageCircle, Minus, Plus } from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { createPageMetadata } from "@/app/seo-metadata";
import CinematicGuidesHeader from "./cinematic-guides-header";
import CinematicGuidesFooter from "./cinematic-guides-footer";
import SetupHubGrid, { type EditorialGuide } from "./setup-hub-grid";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV Setup & Troubleshooting Guides",
  description:
    "Explore Golden IPTV guides for installation, buffering problems, internet speed and setup help for compatible streaming devices.",
  url: "https://www.goldeniptv.co.za/guides/",
  image: "/images/stitch/setup-hub-01.webp",
  imageAlt: "Golden IPTV setup and troubleshooting guides",
});

const editorialGuides: EditorialGuide[] = [
  {
    title: "How to Install IPTV",
    description: "General installation steps plus links to device-specific guidance.",
    href: "/guides/how-to-install-iptv/",
    type: "Installation",
    category: "installation",
    featured: true
  },
  {
    title: "How to Fix IPTV Buffering",
    description: "Practical checks for internet, Wi-Fi, device and playback problems.",
    href: "/guides/iptv-buffering/",
    type: "Troubleshooting",
    category: "network",
    featured: false
  },
  {
    title: "Internet Speed for IPTV",
    description: "Understand how connection speed and network conditions affect streaming.",
    href: "/guides/internet-speed-for-iptv/",
    type: "Network",
    category: "network",
    featured: false
  }
];

const setupFaqs = [
  {
    question: "Where do I find the setup details for my service?",
    answer: "Use the setup information supplied with your Golden IPTV trial or subscription. If you need help locating it, contact Golden IPTV through WhatsApp."
  },
  {
    question: "Which device guide should I open?",
    answer: "Choose the guide that matches your television or streaming device. The supported routes cover Samsung Smart TV, LG Smart TV, Firestick, Android TV and Apple TV."
  },
  {
    question: "What should I check if playback buffers?",
    answer: "Start with the IPTV buffering guide and check your internet connection, Wi-Fi conditions and device performance."
  }
];

const setupInformation = [
  { title: "Profile or playlist name", detail: "Choose a recognisable label." },
  { title: "Service or server details", detail: "Use the supplied value exactly." },
  { title: "Account credentials", detail: "Use the supplied login information." },
] as const;

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const buttonStyle = `inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-bold transition-colors motion-reduce:transition-none ${focusStyle}`;

export default function GuidesPage() {
  return (
    <>
      <CinematicGuidesHeader />
      <main id="guides-main" tabIndex={-1} className="min-w-0 bg-[#0B0A0A] text-[#EEEBDD] focus:outline-none">
        <section aria-labelledby="guides-heading" className="border-b border-white/15 bg-[#171112]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:px-16">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]"><span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#CE1212]" /> Golden IPTV / The Setup Library</p>
              <h1 id="guides-heading" className="mt-7 font-heading text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[1.04] tracking-[-0.045em]">Your Setup.<br /><span className="text-[#CE1212]">Made Simple.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#BDBDC5]">Find device-specific setup guides, installation help, internet-speed guidance and practical buffering checks. Choose the guide that matches the step you’re on.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#guide-directory" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}>Browse the guides <ArrowDown aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
                <Link href="/contact/" className={`${buttonStyle} border border-white/30 hover:bg-white/5`}>Contact support <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              </div>
            </div>
            <aside aria-labelledby="guides-start-heading" className="min-w-0 border-l-2 border-[#713333] pl-6 lg:mt-12 lg:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#BDBDC5]">A practical starting point</p>
              <h2 id="guides-start-heading" className="mt-4 font-heading text-2xl font-medium">Begin with the essentials.</h2>
              <nav aria-label="Essential setup guides" className="mt-6">
                <ul className="divide-y divide-white/15 border-y border-white/15">
                  {editorialGuides.map((guide) => (
                    <li key={guide.href}><Link href={guide.href} className={`flex min-h-16 items-center justify-between gap-4 py-4 text-sm font-semibold hover:text-white ${focusStyle}`}>{guide.title}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link></li>
                  ))}
                </ul>
              </nav>
              <dl className="mt-7 grid grid-cols-3 gap-3">
                <div><dt className="text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#BDBDC5]">Guide routes</dt><dd className="mt-2 font-heading text-3xl font-medium">{editorialGuides.length + DEVICES.length}</dd></div>
                <div><dt className="text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#BDBDC5]">Device guides</dt><dd className="mt-2 font-heading text-3xl font-medium">{DEVICES.length}</dd></div>
                <div><dt className="text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#BDBDC5]">Help topics</dt><dd className="mt-2 font-heading text-3xl font-medium">{editorialGuides.length}</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <section id="guide-directory" tabIndex={-1} aria-labelledby="guide-directory-heading" className="scroll-mt-8 py-16 focus:outline-none md:py-24">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">The guide directory</p>
                <h2 id="guide-directory-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-tight tracking-[-0.035em]">Choose your starting point.</h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#BDBDC5]">Start with installation, find your device or work through a connection question. Every guide opens the relevant instructions.</p>
            </div>
            <SetupHubGrid editorialGuides={editorialGuides} />
          </section>

          <section aria-labelledby="setup-information-heading" className="border-y border-white/15 bg-[#1C1516] px-5 py-8 sm:px-8 md:py-12">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#BDBDC5]"><KeyRound aria-hidden="true" className="h-5 w-5" /> Before you begin</div>
            <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
              <div className="min-w-0">
                <h2 id="setup-information-heading" className="font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl">What your player may ask for.</h2>
                <p className="mt-4 text-sm leading-7 text-[#BDBDC5]">The exact fields vary by the compatible application you choose. Enter only the setup information supplied with your trial or subscription.</p>
                <dl className="mt-7 divide-y divide-white/15 border-y border-white/15">
                  {setupInformation.map((item) => (
                    <div key={item.title} className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:gap-5">
                      <dt className="text-sm font-semibold">{item.title}</dt>
                      <dd className="text-sm leading-6 text-[#BDBDC5]">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <aside aria-labelledby="setup-privacy-heading" className="border-l-2 border-[#713333] pl-5 lg:mt-1">
                <LockKeyhole aria-hidden="true" className="h-6 w-6 text-[#BDBDC5]" />
                <h3 id="setup-privacy-heading" className="mt-5 font-heading text-2xl font-medium">Keep your supplied details private.</h3>
                <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">If you are unsure which field to use, contact Golden IPTV through the support channel before sharing account information. Keep account credentials out of public messages and screenshots.</p>
                <Link href="/contact/" className={`mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-8 ${focusStyle}`}>Ask about your setup <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              </aside>
            </div>
          </section>

          <section aria-labelledby="setup-questions-heading" className="grid gap-8 py-16 md:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">Common setup questions</p>
              <h2 id="setup-questions-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-tight tracking-[-0.035em]">Before you<br />press play.</h2>
            </div>
            <div className="min-w-0 space-y-3">
              {setupFaqs.map((item) => (
                <details key={item.question} className="group rounded-md border border-white/15 bg-[#151313] open:border-[#824141] open:bg-[#241718]">
                  <summary className={`flex min-h-16 cursor-pointer list-none items-start justify-between gap-4 rounded-md px-5 py-5 text-left font-heading text-lg font-medium leading-7 [&::-webkit-details-marker]:hidden sm:px-6 ${focusStyle}`}>
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="mt-1 shrink-0 text-[#BDBDC5]"><Plus className="h-5 w-5 group-open:hidden" /><Minus className="hidden h-5 w-5 group-open:block" /></span>
                  </summary>
                  <p className="mx-5 border-t border-white/15 pb-6 pt-5 text-sm leading-8 text-[#BDBDC5] sm:mx-6">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="guides-support-heading" className="mb-16 flex flex-col items-start justify-between gap-7 border border-[#713333] bg-[#281314] p-6 md:mb-24 md:p-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#BDBDC5]">A little help along the way</p>
              <h2 id="guides-support-heading" className="mt-4 font-heading text-3xl font-medium tracking-tight">Still finding your way?</h2>
              <p className="mt-4 text-sm leading-7 text-[#BDBDC5]">Ask our team about your device or the step you’re on. Open WhatsApp, review your message and press Send to start the conversation.</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}><MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> WhatsApp support<span className="sr-only"> (opens in a new tab)</span></a>
              <Link href="/contact/" className={`${buttonStyle} border border-white/30 hover:bg-white/5`}>Contact options <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
            </div>
          </section>
        </div>
      </main>
      <CinematicGuidesFooter />
    </>
  );
}