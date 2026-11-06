import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, MessageCircle, Monitor, Play, Router } from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { createPageMetadata } from "@/app/seo-metadata";
import CinematicSetupHeader from "./cinematic-setup-header";
import CinematicSetupFooter from "./cinematic-setup-footer";
import DevicesGrid from "./devices-grid";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV Devices & Setup Guides",
  description:
    "Explore Golden IPTV setup guides for compatible Samsung and LG Smart TVs, Firestick, Android TV and Apple TV devices.",
  url: "https://www.goldeniptv.co.za/devices/",
  image: "/images/stitch/devices-01.webp",
  imageAlt: "Devices supported by Golden IPTV setup guides",
});

const journey = [
  { icon: Monitor, title: "Choose your device.", copy: "Find your television or streaming device in the directory above. Not sure which model you have? Check its settings or ask our team." },
  { icon: BookOpen, title: "Follow your guide.", copy: "Open the device-specific instructions and keep your supplied setup details nearby. Steps can vary by device model and playback app." },
  { icon: Play, title: "Make it a night.", copy: "After completing the supplied setup steps and confirming your access is active, browse the entertainment available with your service." },
] as const;

const troubleshooting = [
  { title: "Check your connection.", copy: "Confirm your device is online. If playback is unstable, try a wired connection where practical and check whether other devices are using your bandwidth.", href: "/guides/internet-speed-for-iptv/", label: "Internet connection guide" },
  { title: "Review the setup details.", copy: "Check the information you entered against the details supplied with your trial or membership. Follow the guide for your device rather than instructions for another platform.", href: "/guides/how-to-install-iptv/", label: "Installation essentials" },
  { title: "Work through playback issues.", copy: "Restart the playback app and your device, then try again. If the issue continues, note the error message and your device model before contacting support.", href: "/guides/iptv-buffering/", label: "Buffering troubleshooting" },
] as const;

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const buttonStyle = `inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-bold transition-colors motion-reduce:transition-none ${focusStyle}`;

export default function DevicesPage() {
  return (
    <>
      <CinematicSetupHeader />
      <main id="setup-main" tabIndex={-1} className="min-w-0 bg-[#0B0A0A] text-[#EEEBDD] focus:outline-none">
        <section aria-labelledby="setup-heading" className="relative isolate border-b border-white/10 bg-[#171011]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-16 lg:py-24">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BDBDC5]">
                <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#CE1212]" />
                Golden IPTV / Device setup
              </p>
              <h1 id="setup-heading" className="mt-7 font-heading text-[clamp(2.75rem,5.7vw,5.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                Your screen.<br />Your setup.<br /><span className="text-[#CE1212]">Made simple.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-[#BDBDC5]">
                Select your device, follow the right installation guide and get ready for your next night in. A clear place to begin, whatever your screen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#device-selector" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}>
                  Choose your device <ArrowDown aria-hidden="true" className="h-4 w-4" />
                </a>
                <Link href="/iptv-free-trial/" className={`${buttonStyle} border border-white/30 text-[#EEEBDD] hover:bg-white/5`}>
                  Explore free trial <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <figure className="min-w-0 border border-white/15 bg-black">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/pricing-device-cinematic.webp"
                  alt="Television and soundbar in a warmly lit living room"
                  fill
                  preload
                  sizes="(min-width: 1440px) 595px, (min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[60%_center]"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-[#CE1212]" />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#BDBDC5]">
                <span>Your space. Your entertainment.</span><span>{DEVICES.length} device guides</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <section id="device-selector" tabIndex={-1} aria-labelledby="device-selector-heading" className="scroll-mt-8 py-16 focus:outline-none md:py-24">
            <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">01 / Find your screen</p>
                <h2 id="device-selector-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight tracking-[-0.035em]">A guide for your setup.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#BDBDC5]">Choose a category or explore all five guides. Compatibility and app availability vary by model; check your guide or contact support before purchasing.</p>
            </div>
            <DevicesGrid />
            <p className="mt-8 border-l-2 border-[#CE1212] pl-5 text-sm leading-7 text-[#BDBDC5]">
              Can’t find your device? <Link href="/contact/" className={`font-semibold text-[#EEEBDD] underline decoration-white/40 underline-offset-4 hover:decoration-white ${focusStyle}`}>Ask our team about your model.</Link>
            </p>
          </section>

          <section aria-labelledby="setup-journey-heading" className="border-y border-white/15 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">02 / From guide to screen time</p>
            <h2 id="setup-journey-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight tracking-[-0.035em]">Three steps. Then settle in.</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
              {journey.map(({ icon: Icon, title, copy }, index) => (
                <li key={title} className="border-t border-white/20 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl font-medium text-[#CE1212]">0{index + 1}</span>
                    <Icon aria-hidden="true" className="h-6 w-6 text-[#BDBDC5]" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">{copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="setup-help-heading" className="py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">03 / A little help along the way</p>
                <h2 id="setup-help-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight tracking-[-0.035em]">Let’s get you<br />back on track.</h2>
                <p className="mt-5 max-w-md text-base leading-8 text-[#BDBDC5]">Connection trouble or a step that doesn’t look quite right? Start with these practical checks.</p>
                <Router aria-hidden="true" className="mt-8 h-10 w-10 text-[#BDBDC5]" strokeWidth={1} />
              </div>
              <div className="divide-y divide-white/15 border-y border-white/15">
                {troubleshooting.map((item) => (
                  <article key={item.href} className="py-7">
                    <h3 className="font-heading text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">{item.copy}</p>
                    <Link href={item.href} className={`mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline decoration-[#CE1212] underline-offset-8 ${focusStyle}`}>
                      {item.label} <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
            <aside aria-labelledby="setup-support-heading" className="mt-12 flex flex-col items-start justify-between gap-7 border border-[#713333] bg-[#211112] p-6 md:p-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h3 id="setup-support-heading" className="font-heading text-2xl font-semibold">Your setup. A real conversation.</h3>
                <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Send our team your device model and the error you see. Keep passwords and private login details out of screenshots.</p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}>
                  <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp support
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <Link href="/contact/" className={`${buttonStyle} border border-white/25 hover:bg-white/5`}>Contact our team</Link>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <CinematicSetupFooter />
    </>
  );
}