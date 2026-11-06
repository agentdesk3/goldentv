import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, CircleHelp, CreditCard, MessageCircle, MonitorSmartphone, PlayCircle, Wifi, Wrench } from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { createPageMetadata } from "@/app/seo-metadata";
import CinematicContactHeader from "./cinematic-contact-header";
import CinematicContactFooter from "./cinematic-contact-footer";
import SupportRequestForm from "./support-request-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & IPTV Support",
  description:
    "Contact Golden IPTV for subscription questions, device compatibility, setup guidance and IPTV support in South Africa.",
  url: "https://www.goldeniptv.co.za/contact/",
  image: "/images/stitch/support-01.webp",
  imageAlt: "Golden IPTV customer support",
});

const pathways = [
  { icon: MonitorSmartphone, title: "Device setup", copy: "Find practical instructions for your television or streaming device. Start with the guide that matches your setup.", href: "/guides/", action: "Explore setup guidance" },
  { icon: PlayCircle, title: "Free trial", copy: "Try Golden IPTV on your compatible device before choosing a subscription. Prepare your 24-hour trial request.", href: "/iptv-free-trial/", action: "Explore the free trial" },
  { icon: CreditCard, title: "Subscription plans", copy: "Compare subscription periods and current prices, then ask our team about the option you have in mind.", href: "/pricing/", action: "View plans and pricing" },
  { icon: Wrench, title: "Troubleshooting", copy: "Work through practical checks for playback and buffering. If you still need help, tell us what you’re seeing.", href: "/guides/iptv-buffering/", action: "Open troubleshooting" },
] as const;

const quickSolutions = [
  { icon: PlayCircle, title: "Buffering", copy: "Check playback, connection stability and your device.", href: "/guides/iptv-buffering/" },
  { icon: Wifi, title: "Internet speed", copy: "Understand the network factors that affect watching.", href: "/guides/internet-speed-for-iptv/" },
  { icon: MonitorSmartphone, title: "Device setup", copy: "Find the guide for your television or streaming device.", href: "/devices/" },
  { icon: CircleHelp, title: "Frequently asked questions", copy: "Explore the essentials before you get started.", href: "/faq/" },
] as const;

const requestNotes = [
  { title: "Your device and model", copy: "A model name helps us understand the screen or streaming device you’re using." },
  { title: "What you were trying to do", copy: "Tell us the step you reached and what happened when you tried it." },
  { title: "What you see on screen", copy: "Include the wording of an error message, if there is one." },
] as const;

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const buttonStyle = `inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-bold transition-colors motion-reduce:transition-none ${focusStyle}`;

export default function ContactPage() {
  return (
    <>
      <CinematicContactHeader />
      <main id="contact-main" tabIndex={-1} className="min-w-0 bg-[#0B0A0A] text-[#EEEBDD] focus:outline-none">
        <section aria-labelledby="contact-heading" className="border-b border-white/15 bg-[#171112]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">
              <p className="flex items-center gap-3"><span aria-hidden="true" className="h-px w-8 bg-[#CE1212]" /> Golden IPTV / Contact & support</p>
              <p>Support that feels human.</p>
            </div>
            <h1 id="contact-heading" className="my-10 font-heading text-[clamp(2.5rem,8vw,7.5rem)] font-semibold leading-[1.03] tracking-[-0.045em] md:my-14">
              <span className="block">Real People.</span>
              <span className="block text-[#CE1212] sm:ml-[12%]">Clear Answers.</span>
            </h1>
            <div className="grid items-end gap-7 border-t border-white/20 pt-7 lg:grid-cols-[1fr_auto] lg:gap-10">
              <div className="max-w-xl">
                <p className="text-lg font-medium">A question is a good place to start.</p>
                <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Get help with subscriptions, device setup, free trials and playback questions. Tell us what you need and we’ll help you find the right next step.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}>
                  <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> Chat on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href="#support-request" className={`${buttonStyle} border border-white/30 hover:bg-white/5`}>Prepare a Support Request <ArrowDown aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <section aria-labelledby="support-routes-heading" className="py-16 md:py-24">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">Choose your support route</p>
                <h2 id="support-routes-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight tracking-[-0.035em]">Find your way forward.</h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#BDBDC5]">Start with the topic that fits your question. Direct support is always an option below.</p>
            </div>
            <ul className="mt-10 grid border-t border-white/20 md:grid-cols-2 md:gap-x-10">
              {pathways.map(({ icon: Icon, title, copy, href, action }, index) => (
                <li key={href} className="min-w-0 border-b border-white/20">
                  <Link href={href} className={`group flex h-full flex-col py-7 transition-colors hover:bg-white/[0.025] motion-reduce:transition-none ${focusStyle}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-[0.12em] text-[#BDBDC5]">0{index + 1}</span>
                      <Icon aria-hidden="true" className="h-5 w-5 text-[#BDBDC5]" />
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 max-w-lg flex-1 text-sm leading-7 text-[#BDBDC5]">{copy}</p>
                    <span className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline decoration-[#CE1212] underline-offset-8">{action}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section id="support-request" tabIndex={-1} aria-labelledby="support-request-heading" className="scroll-mt-8 border-t border-white/15 py-16 focus:outline-none md:py-24">
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">Support request studio</p>
                <h2 id="support-request-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]">Tell us what’s<br />on your mind.</h2>
                <p className="mt-5 max-w-md text-base leading-8 text-[#BDBDC5]">A little context helps us understand your question. Prepare the details here, review the message in WhatsApp, then press Send to start the conversation.</p>
                <h3 className="mt-9 text-xs font-semibold uppercase tracking-[0.16em]">Useful details to include</h3>
                <ul className="mt-5 divide-y divide-white/15 border-y border-white/15">
                  {requestNotes.map((item) => (
                    <li key={item.title} className="py-5">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[#BDBDC5]">{item.copy}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0 rounded-lg border border-white/20 bg-[#211617] p-5 sm:p-8">
                <SupportRequestForm />
              </div>
            </div>
          </section>

          <section aria-labelledby="direct-contact-heading" className="border border-[#713333] bg-[#281314] p-6 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <MessageCircle aria-hidden="true" className="h-8 w-8 text-[#BDBDC5]" strokeWidth={1.5} />
                <h2 id="direct-contact-heading" className="mt-5 font-heading text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight tracking-tight">Prefer to start with hello?</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#BDBDC5]">You don’t need to fill in a form to speak with us. Open WhatsApp directly for questions about plans, device compatibility, trial requests or setup guidance.</p>
              </div>
              <div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonStyle} w-full bg-[#CE1212] text-white hover:bg-[#a90e0e] sm:w-auto`}>
                  Chat on WhatsApp <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="mt-4 max-w-sm text-xs leading-6 text-[#BDBDC5]">Review your message and press Send in WhatsApp to contact Golden IPTV.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="self-service-heading" className="py-16 md:py-24">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">A little guidance goes a long way</p>
                <h2 id="self-service-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight tracking-[-0.035em]">Help, at your own pace.</h2>
              </div>
              <BookOpen aria-hidden="true" className="h-7 w-7 text-[#BDBDC5]" />
            </div>
            <ul className="mt-10 grid gap-x-10 border-t border-white/20 md:grid-cols-2">
              {quickSolutions.map(({ icon: Icon, title, copy, href }) => (
                <li key={href} className="min-w-0 border-b border-white/20">
                  <Link href={href} className={`flex h-full items-start gap-4 py-6 hover:bg-white/[0.025] ${focusStyle}`}>
                    <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#BDBDC5]" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-xl font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#BDBDC5]">{copy}</p>
                    </div>
                    <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <CinematicContactFooter />
    </>
  );
}