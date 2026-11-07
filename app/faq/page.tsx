import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import { createPageMetadata } from "@/app/seo-metadata";
import CinematicFaqHeader from "./cinematic-faq-header";
import CinematicFaqFooter from "./cinematic-faq-footer";
import FaqExplorer, { type FaqItem } from "./faq-explorer";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV FAQs: Setup, Plans & Devices",
  description:
    "Find answers about Golden IPTV subscriptions, free trials, compatible devices, internet speed, setup and troubleshooting in South Africa.",
  url: "https://www.goldeniptv.co.za/faq/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV frequently asked questions",
});

// Primary categories describe the question's purpose, never incidental answer keywords.
// General IPTV and contact guidance belong to getting started under Setup.
const faqs: FaqItem[] = [
  {
    "question": "What is IPTV?",
    "answer": "IPTV is a way of delivering television and video content over an internet connection rather than through traditional broadcast or satellite delivery.",
    "category": "setup"
  },
  {
    "question": "How does the Golden IPTV free trial work?",
    "answer": "Golden IPTV offers a 24-hour trial so you can test the service on a compatible device before choosing a paid subscription.",
    "category": "trial"
  },
  {
    "question": "Which devices can I use with IPTV?",
    "answer": "Golden IPTV provides setup guidance for compatible devices including Samsung Smart TV, LG Smart TV, Firestick, Android TV and Apple TV.",
    "category": "devices"
  },
  {
    "question": "Do I need a fast internet connection for IPTV?",
    "answer": "Your required internet speed depends on streaming quality, device usage and network conditions. A stable connection is important, and wired Ethernet can sometimes provide a more consistent connection than Wi-Fi.",
    "category": "setup"
  },
  {
    "question": "Why does IPTV sometimes buffer?",
    "answer": "Buffering can have several causes, including an unstable internet connection, busy Wi-Fi networks, device performance or temporary service issues. Our buffering guide covers common troubleshooting steps.",
    "category": "setup"
  },
  {
    "question": "Can I use IPTV on a Smart TV?",
    "answer": "Yes. Setup guidance is available for compatible Samsung and LG Smart TVs. The exact setup process can vary depending on the television and available apps.",
    "category": "devices"
  },
  {
    "question": "Can I use IPTV on Firestick?",
    "answer": "Yes. Golden IPTV provides a general Firestick and Fire TV setup guide covering the main steps, internet requirements and common troubleshooting checks.",
    "category": "devices"
  },
  {
    "question": "How do I install IPTV?",
    "answer": "The setup process depends on your device. Our installation guide explains the general process and links to device-specific guides for supported devices.",
    "category": "setup"
  },
  {
    "question": "What IPTV subscription plans are available?",
    "answer": "Golden IPTV currently offers 1-month, 3-month, 6-month and 12-month subscription options. Visit the pricing page for the current prices.",
    "category": "plans"
  },
  {
    "question": "How can I contact Golden IPTV?",
    "answer": "You can use the contact page for subscription questions, device compatibility, setup guidance and other support requests. WhatsApp is intended to be the main customer contact channel.",
    "category": "setup"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

export default function FAQPage() {
  return (
    <>
      <CinematicFaqHeader />
      <main id="faq-main" tabIndex={-1} className="min-w-0 bg-[#0B0A0A] text-[#EEEBDD] focus:outline-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <section aria-labelledby="faq-heading" className="pb-10 pt-14 md:pb-12 md:pt-20">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">
              <p className="flex items-center gap-3"><BookOpen aria-hidden="true" className="h-5 w-5" /> The Golden IPTV Answer Library</p>
              <p className="hidden md:block">Subscriptions · Devices · Setup</p>
            </div>
            <h1 id="faq-heading" className="mt-8 font-heading text-[clamp(2.5rem,5.5vw,5.75rem)] font-medium leading-[1.08] tracking-[-0.04em]">
              Questions,{" "}<span className="text-[#CE1212]">Meet Answers.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#BDBDC5]">
             Find answers to common IPTV questions in South Africa,
             including Golden IPTV subscription plans, 24-hour free
             trials, compatible Smart TVs and streaming devices,
             installation, internet requirements and buffering.
            </p>
          </section>

          <FaqExplorer faqs={faqs} />

          <section aria-labelledby="faq-next-step-heading" className="mb-16 mt-6 grid items-center gap-8 border-y border-white/20 bg-[#211617] px-5 py-8 sm:px-8 md:mb-24 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#BDBDC5]">Your next chapter</p>
              <h2 id="faq-next-step-heading" className="mt-3 font-heading text-3xl font-medium leading-tight tracking-tight">Put your answers into action.</h2>
              <p className="mt-4 text-sm leading-7 text-[#BDBDC5]">Explore subscription options or request a 24-hour trial on your compatible device before choosing a plan.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/pricing/" className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white/5 ${focusStyle}`}>Explore Plans <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
              <Link href="/iptv-free-trial/" className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#CE1212] px-6 py-3 text-sm font-bold text-white hover:bg-[#a90e0e] ${focusStyle}`}>Start Free Trial <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
            </div>
          </section>
        </div>
      </main>
      <CinematicFaqFooter />
    </>
  );
}