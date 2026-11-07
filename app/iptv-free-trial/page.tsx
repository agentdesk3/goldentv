import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle, Monitor, Router, Settings2, ShieldCheck } from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { createPageMetadata } from "@/app/seo-metadata";
import CinematicTrialHeader from "./cinematic-trial-header";
import CinematicTrialFooter from "./cinematic-trial-footer";
import TrialRequestForm from "./trial-request-form";

export const metadata: Metadata = createPageMetadata({
  title: "24-Hour IPTV Free Trial South Africa",
  description:
    "Request a 24-hour Golden IPTV free trial in South Africa, check device compatibility and test the service before choosing a subscription.",
  url: "https://www.goldeniptv.co.za/iptv-free-trial/",
  image: "/images/stitch/trial-01.webp",
  imageAlt: "Golden IPTV 24-hour free trial",
});

const experience = [
  { icon: Monitor, title: "Your device.", copy: "Start with the screen you actually use. Check the guide for your television or streaming device; compatibility varies by model and playback app.", href: "/devices/", label: "Find your device guide" },
  { icon: Settings2, title: "Your setup.", copy: "Use the information supplied for your trial and follow the relevant setup steps. Ask our team if anything is unclear before you begin.", href: "/guides/how-to-install-iptv/", label: "Explore setup guidance" },
  { icon: Router, title: "Your connection.", copy: "Try playback on your own internet connection. Your device, app and network all affect the experience, so test where you plan to watch.", href: "/guides/internet-speed-for-iptv/", label: "Check connection guidance" },
] as const;

const journey = [
  { title: "Fill in your request.", copy: "Choose your device and add your contact details. A preferred start time and notes are optional." },
  { title: "Send it on WhatsApp.", copy: "Continue to WhatsApp, review the prepared message and press Send. Opening the tab alone does not submit your request." },
  { title: "Set up. Test. Decide.", copy: "Our team will confirm trial availability and provide setup information. Complete the supplied steps, then test for 24 hours on your compatible device." },
] as const;

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const buttonStyle = `inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-bold transition-colors motion-reduce:transition-none ${focusStyle}`;

export default function IptvFreeTrialPage() {
  return (
    <>
      <CinematicTrialHeader />
      <main id="trial-main" tabIndex={-1} className="min-w-0 bg-[#0B0A0A] text-[#EEEBDD] focus:outline-none">
        <section aria-labelledby="trial-heading" className="border-b border-white/15 bg-[#191112]">
          <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-10 md:pt-20 lg:px-16 lg:pt-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
              <div className="min-w-0">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">
                  <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#CE1212]" /> Golden IPTV / Free trial
                </p>
                <h1 id="trial-heading" className="mt-7 font-heading text-[clamp(2.75rem,5.6vw,5.5rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
                  24 Hours.<br />Your Screen.<br /><span className="text-[#CE1212]">Your Decision.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-8 text-[#BDBDC5]">
                 Request a 24-hour Golden IPTV free trial in South Africa
                 and test the service on your own compatible device before
                 choosing a subscription. No payment required.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="#trial-request" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}>Request my free trial <ArrowDown aria-hidden="true" className="h-4 w-4" /></a>
                  <Link href="/devices/" className={`${buttonStyle} border border-white/30 hover:bg-white/5`}>Check my device <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
                </div>
                <p className="mt-4 text-xs leading-6 text-[#BDBDC5]">Request through WhatsApp. Setup details are confirmed by our team.</p>
              </div>
              <figure className="min-w-0 border border-white/15 bg-black">
                <div className="relative">
                  <Image
                    src="/images/cinematic/free-trial-viewing-v7.webp"
                    alt="A relaxed viewer watching a coastal landscape on television in a warmly lit South African apartment"
                    width={1672}
                    height={941}
                    preload
                    sizes="(min-width: 1440px) 602px, (min-width: 1024px) calc((100vw - 176px) / 2.1), (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
                    className="block h-auto w-full"
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-[#CE1212]" />
                </div>
                <figcaption className="px-5 py-4 text-xs font-medium leading-6 text-[#BDBDC5]">A night in, on your terms. Test on your own compatible screen.</figcaption>
              </figure>
            </div>
            <dl className="mt-12 grid grid-cols-3 border-t border-white/20 pt-7 md:mt-16">
              <div className="min-w-0 pr-3">
                <dt className="text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#BDBDC5] sm:text-xs">Trial period</dt>
                <dd className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-5xl">24<span className="ml-1 text-sm font-normal text-[#BDBDC5] sm:ml-2 sm:text-base">hours</span></dd>
              </div>
              <div className="min-w-0 border-l border-white/20 px-3 md:px-8">
                <dt className="text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#BDBDC5] sm:text-xs">Trial payment</dt>
                <dd className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-5xl">R0</dd>
              </div>
              <div className="min-w-0 border-l border-white/20 pl-3 md:pl-8">
                <dt className="text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#BDBDC5] sm:text-xs">Device guides</dt>
                <dd className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-5xl">{DEVICES.length}</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <section aria-labelledby="trial-experience-heading" className="py-16 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">Try it where it matters</p>
            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 id="trial-experience-heading" className="max-w-2xl font-heading text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em]">Stop guessing.<br />Start watching.</h2>
              <p className="max-w-sm text-base leading-8 text-[#BDBDC5]">Your device. Your connection. Your verdict. Use your trial to find out how the service fits your setup.</p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {experience.map(({ icon: Icon, title, copy, href, label }) => (
                <article key={title} className="min-w-0 border-t border-white/20 pt-6">
                  <Icon aria-hidden="true" className="h-6 w-6 text-[#BDBDC5]" />
                  <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">{copy}</p>
                  <Link href={href} className={`mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-8 ${focusStyle}`}>{label} <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
                </article>
              ))}
            </div>
          </section>

          <section id="trial-request" tabIndex={-1} aria-labelledby="trial-request-heading" className="scroll-mt-8 border-t border-white/15 py-16 focus:outline-none md:py-24">
            <div className="grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">Your trial starts with a conversation</p>
                <h2 id="trial-request-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]">One day to test.<br /><span className="text-[#CE1212]">Zero payment required.</span></h2>
                <p className="mt-6 max-w-md text-base leading-8 text-[#BDBDC5]">Choose your screen and tell us how to reach you. We’ll prepare your request for WhatsApp, where you can review and send it.</p>
                <div className="mt-8 border-l-2 border-[#CE1212] pl-5">
                  <p className="font-semibold">You choose what comes next.</p>
                  <p className="mt-2 text-sm leading-7 text-[#BDBDC5]">Test first. Explore paid plans only when you’re ready to decide.</p>
                  <Link href="/pricing/" className={`mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 ${focusStyle}`}>View subscription options <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
                </div>
              </div>
              <TrialRequestForm />
            </div>
          </section>

          <section aria-labelledby="trial-journey-heading" className="border-t border-white/15 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BDBDC5]">What happens next</p>
            <h2 id="trial-journey-heading" className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight tracking-[-0.035em]">From request to your screen.</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {journey.map((step, index) => (
                <li key={step.title} className="border-t border-white/20 pt-5">
                  <span className="font-heading text-4xl font-medium text-[#CE1212]">0{index + 1}</span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">{step.copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="trial-confidence-heading" className="mb-16 grid gap-8 border border-[#713333] bg-[#211112] p-6 md:mb-24 md:p-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <ShieldCheck aria-hidden="true" className="h-7 w-7 text-[#BDBDC5]" />
              <h2 id="trial-confidence-heading" className="mt-5 font-heading text-3xl font-semibold tracking-tight">A clear next step.<br />A team to ask.</h2>
              <p className="mt-4 text-sm leading-7 text-[#BDBDC5]">Your request uses the details you provide. Review the prepared message before pressing Send in WhatsApp. Read how your information is handled in our Privacy Policy.</p>
              <Link href="/privacy/" className={`mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 ${focusStyle}`}>Read our Privacy Policy <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
            <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-heading text-2xl font-semibold">Not sure about your device?</h3>
              <p className="mt-4 text-sm leading-7 text-[#BDBDC5]">Check the device directory or send our team your model. The trial helps you evaluate playback on your own setup; results depend on your connection, device and app.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/devices/" className={`${buttonStyle} border border-white/30 hover:bg-white/5`}>Device guidance</Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${buttonStyle} bg-[#CE1212] text-white hover:bg-[#a90e0e]`}><MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> Ask our team<span className="sr-only"> (opens in a new tab)</span></a>
              </div>
              <Link href="/contact/" className={`mt-4 inline-flex min-h-11 items-center text-sm text-[#BDBDC5] underline underline-offset-4 hover:text-white ${focusStyle}`}>Visit our support page</Link>
            </div>
          </section>
        </div>
      </main>
      <CinematicTrialFooter />
    </>
  );
}

