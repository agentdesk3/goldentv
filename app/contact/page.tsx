import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleHelp,
  CreditCard,
  MessageCircle,
  MonitorSmartphone,
  PlayCircle,
  Wrench,
} from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { createPageMetadata } from "@/app/seo-metadata";
import SupportRequestForm from "./support-request-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & IPTV Support",
  description:
    "Contact Golden IPTV for subscription questions, device compatibility, setup guidance and IPTV support in South Africa.",
  url: "https://goldeniptv.co.za/contact/",
  image: "/images/stitch/support-01.webp",
  imageAlt: "Golden IPTV customer support",
});

const pathways = [
  {
    icon: MonitorSmartphone,
    label: "Pathway 01",
    title: "I need help setting up my device",
    copy: "Open practical setup guidance for supported televisions and streaming devices.",
    href: "/guides/",
    action: "Access Setup Hub",
  },
  {
    icon: PlayCircle,
    label: "Pathway 02",
    title: "I want to request a free trial",
    copy: "Request the real Golden IPTV 24-hour trial through the existing WhatsApp flow.",
    href: "/iptv-free-trial/",
    action: "Request Trial Access",
  },
  {
    icon: CreditCard,
    label: "Pathway 03",
    title: "I have a question about plans",
    copy: "Compare the current 1, 3, 6 and 12-month subscription periods and ZAR prices.",
    href: "/pricing/",
    action: "Explore Plans",
  },
  {
    icon: Wrench,
    label: "Pathway 04",
    title: "Technical troubleshooting",
    copy: "Use the buffering and internet-speed guides, or prepare a WhatsApp support request below.",
    href: "/guides/iptv-buffering/",
    action: "Open Troubleshooting",
  },
] as const;

const quickSolutions = [
  {
    title: "Stream buffering",
    copy: "Check connection stability, Wi-Fi conditions and the device with the buffering guide.",
    href: "/guides/iptv-buffering/",
  },
  {
    title: "Internet speed",
    copy: "Review practical speed guidance and the network factors that affect playback.",
    href: "/guides/internet-speed-for-iptv/",
  },
  {
    title: "Device setup",
    copy: "Choose the route for your supported television or streaming device.",
    href: "/devices/",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[540px] w-[540px] rounded-full bg-[#8b3dff]/15 blur-[145px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-16 h-[560px] w-[560px] rounded-full bg-[#046ef1]/15 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 py-10 md:px-8 lg:px-12">
        <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#272936]/75 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#046ef1]" />
              <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
                Golden IPTV support
              </span>
            </div>
            <h1 className="mt-4 font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[44px] md:leading-[52px]">
              Golden IPTV Support
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#cdc2d8]">
              Choose the route that best matches your setup, subscription or
              general support question.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#181b27]/85 px-5 py-4 shadow-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </span>
            <span>
              <strong className="block text-sm">WhatsApp contact</strong>
              <small className="text-[#cdc2d8]">Open the real support channel</small>
            </span>
          </a>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map(({ icon: Icon, label, title, copy, href, action }) => (
            <article
              key={title}
              className="story-card flex min-h-72 flex-col rounded-[2rem] border border-white/[0.06] bg-[#181b27]/80 p-6 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#8b3dff]/30 to-[#046ef1]/25">
                  <Icon className="h-5 w-5 text-[#d4bbff]" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#968da1]">
                  {label}
                </span>
              </div>
              <h2 className="story-card-title mt-5 font-heading text-xl font-bold">
                {title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#cdc2d8]">
                {copy}
              </p>
              <Link
                href={href}
                className="story-card-action mt-5 inline-flex items-center gap-2 text-sm font-bold"
              >
                {action} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-8 grid items-start gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-[#181b27]/85 p-6 shadow-xl lg:col-span-7 md:p-8">
            <div className="mb-6">
              <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#d4bbff]">
                WhatsApp support request
              </span>
              <h2 className="mt-1 font-heading text-3xl font-bold">
                Prepare your support message
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
                This form prepares your details in WhatsApp. You still need to
                send the message there to contact Golden IPTV.
              </p>
            </div>
            <SupportRequestForm />
          </div>

          <aside className="space-y-5 lg:col-span-5">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#181b27] to-[#14213d] p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/15">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </span>
                <div>
                  <h2 className="font-heading text-xl font-bold">
                    WhatsApp Support
                  </h2>
                  <p className="text-xs text-[#cdc2d8]">
                    Golden IPTV&apos;s listed contact path
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#cdc2d8]">
                Ask about subscription plans, device compatibility, trial
                requests or setup guidance.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-[#07120a]"
              >
                Launch WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="story-card overflow-hidden rounded-[2rem] bg-[#181b27]/85 shadow-xl">
              <div className="relative h-56">
                <Image
                  src="/images/stitch/support-01.webp"
                  alt="Cinematic streaming support console in violet and blue light"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="story-media object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b27] via-transparent" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#afc6ff]">
                  Supported setup routes
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold">
                  Compatible with the listed devices
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
                  Use the device directory to find the matching Golden IPTV
                  guide before requesting additional help.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#968da1]">
                Practical help
              </span>
              <h2 className="mt-1 font-heading text-3xl font-bold">
                Frequently Consulted Solutions
              </h2>
            </div>
            <Link
              href="/faq/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#afc6ff] hover:text-white"
            >
              View FAQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="story-card rounded-2xl border border-white/[0.06] bg-[#181b27]/75 p-5"
              >
                <CircleHelp className="h-5 w-5 text-[#d4bbff]" />
                <h3 className="mt-3 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#cdc2d8]">{item.copy}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}