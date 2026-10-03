import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cast,
  KeyRound,
  MonitorSmartphone,
  Router,
  ShieldCheck,
} from "lucide-react";

import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { createPageMetadata } from "@/app/seo-metadata";
import DevicesGrid from "./devices-grid";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV Devices & Setup Guides",
  description:
    "Explore Golden IPTV setup guides for compatible Samsung and LG Smart TVs, Firestick, Android TV and Apple TV devices.",
  url: "https://www.goldeniptv.co.za/devices/",
  image: "/images/stitch/devices-01.webp",
  imageAlt: "Devices supported by Golden IPTV setup guides",
});

const platformNotes = [
  {
    icon: KeyRound,
    title: "Setup information",
    copy: "Keep the setup details supplied with your Golden IPTV trial or subscription available.",
  },
  {
    icon: Cast,
    title: "Device-specific guidance",
    copy: "Open the guide for your exact television or streaming device before you begin.",
  },
  {
    icon: Router,
    title: "Stable internet connection",
    copy: "Connect the device to a reliable network and use wired Ethernet where practical.",
  },
] as const;

export default function DevicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#8b3dff]/15 blur-[145px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-[560px] w-[560px] rounded-full bg-[#046ef1]/15 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-10 md:px-8 lg:px-16">
        <section className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#272936]/75 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#d4bbff]" />
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#d4bbff]">
              Five supported device guides
            </span>
          </div>
          <h1 className="mt-4 font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[64px] md:leading-[72px]">
            IPTV Device{" "}
            <span className="bg-gradient-to-r from-[#d4bbff] to-[#afc6ff] bg-clip-text text-transparent">
              Compatibility
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#cdc2d8] md:text-lg">
            Explore the Golden IPTV setup routes for supported smart
            televisions and streaming devices.
          </p>
          <DevicesGrid />
        </section>

        <section className="mt-16">
          <div className="mb-6">
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#968da1]">
              Device guide directory
            </span>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Available setup guide matrix
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#cdc2d8]">
              Every listed platform links to the corresponding guide already
              available in this project.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[2rem] border border-white/[0.06] bg-[#181b27]/80 shadow-xl">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#0b0e19]/70 text-[11px] uppercase tracking-wider text-[#cdc2d8]">
                  <th className="px-6 py-4 font-semibold">Supported device</th>
                  <th className="px-6 py-4 font-semibold">Guide status</th>
                  <th className="px-6 py-4 font-semibold">Setup route</th>
                  <th className="px-6 py-4 font-semibold">Next step</th>
                </tr>
              </thead>
              <tbody>
                {DEVICES.map((device) => (
                  <tr
                    key={device.href}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <th className="px-6 py-5 font-heading text-base font-semibold">
                      {device.name}
                    </th>
                    <td className="px-6 py-5 text-sm text-[#cdc2d8]">
                      <span className="inline-flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#d4bbff]" />
                        Available
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-[#cdc2d8]">
                      {device.href}
                    </td>
                    <td className="px-6 py-5">
                      <Link
                        href={device.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#afc6ff] hover:text-white"
                      >
                        Open guide <ArrowRight className="h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {platformNotes.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="story-card rounded-[2rem] border border-white/[0.06] bg-[#181b27]/75 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4bbff]/10">
                <Icon className="h-5 w-5 text-[#d4bbff]" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">{copy}</p>
            </article>
          ))}
        </section>

        <section className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#181b27] via-[#1c1f2b] to-[#27204d] p-7 shadow-xl md:p-10">
          <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-64 w-64 rounded-full bg-[#8b3dff]/25 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
                Assisted onboarding
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Ready to configure your device?
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#cdc2d8] md:text-base">
                Open the setup hub for practical guides, or request a 24-hour
                trial before choosing a subscription.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guides/"
                className="ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b3dff] to-[#046ef1] px-6 text-sm font-bold text-white"
              >
                <MonitorSmartphone className="h-4 w-4" />
                Open Setup Hub
              </Link>
              <Link
                href="/iptv-free-trial/"
                className="ui-button inline-flex min-h-12 items-center justify-center rounded-full bg-[#313441] px-6 text-sm font-bold text-white hover:bg-[#363945]"
              >
                Request Free Trial
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}