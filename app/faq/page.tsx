import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/app/seo-metadata";

import FaqExplorer from "./faq-explorer";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV FAQs: Setup, Plans & Devices",
  description:
    "Find answers about Golden IPTV subscriptions, free trials, compatible devices, internet speed, setup and troubleshooting in South Africa.",
  url: "https://goldeniptv.co.za/faq/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV frequently asked questions",
});

const faqs = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV is a way of delivering television and video content over an internet connection rather than through traditional broadcast or satellite delivery.",
  },
  {
    question: "How does the Golden IPTV free trial work?",
    answer:
      "Golden IPTV offers a 24-hour trial so you can test the service on a compatible device before choosing a paid subscription.",
  },
  {
    question: "Which devices can I use with IPTV?",
    answer:
      "Golden IPTV provides setup guidance for compatible devices including Samsung Smart TV, LG Smart TV, Firestick, Android TV and Apple TV.",
  },
  {
    question: "Do I need a fast internet connection for IPTV?",
    answer:
      "Your required internet speed depends on streaming quality, device usage and network conditions. A stable connection is important, and wired Ethernet can sometimes provide a more consistent connection than Wi-Fi.",
  },
  {
    question: "Why does IPTV sometimes buffer?",
    answer:
      "Buffering can have several causes, including an unstable internet connection, busy Wi-Fi networks, device performance or temporary service issues. Our buffering guide covers common troubleshooting steps.",
  },
  {
    question: "Can I use IPTV on a Smart TV?",
    answer:
      "Yes. Setup guidance is available for compatible Samsung and LG Smart TVs. The exact setup process can vary depending on the television and available apps.",
  },
  {
    question: "Can I use IPTV on Firestick?",
    answer:
      "Yes. Golden IPTV provides a general Firestick and Fire TV setup guide covering the main steps, internet requirements and common troubleshooting checks.",
  },
  {
    question: "How do I install IPTV?",
    answer:
      "The setup process depends on your device. Our installation guide explains the general process and links to device-specific guides for supported devices.",
  },
  {
    question: "What IPTV subscription plans are available?",
    answer:
      "Golden IPTV currently offers 1-month, 3-month, 6-month and 12-month subscription options. Visit the pricing page for the current prices.",
  },
  {
    question: "How can I contact Golden IPTV?",
    answer:
      "You can use the contact page for subscription questions, device compatibility, setup guidance and other support requests. WhatsApp is intended to be the main customer contact channel.",
  },
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

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pointer-events-none absolute -top-36 left-1/3 h-[520px] w-[520px] rounded-full bg-[#8b3dff]/15 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-[520px] w-[520px] rounded-full bg-[#046ef1]/15 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 py-10 md:px-8 lg:px-12">
        <FaqExplorer faqs={faqs} />

        <section className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#181b27]/85 p-7 shadow-xl md:p-9">
          <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#8b3dff]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
                Try the service first
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
                Ready to request your 24-hour trial?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#cdc2d8]">
                Test Golden IPTV on a compatible device before choosing one of
                the listed subscription periods.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing/"
                className="ui-button inline-flex min-h-12 items-center justify-center rounded-full bg-[#313441] px-6 text-sm font-bold hover:bg-[#363945]"
              >
                Explore Plans
              </Link>
              <Link
                href="/iptv-free-trial/"
                className="ui-button inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8b3dff] to-[#046ef1] px-6 text-sm font-bold text-white"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}