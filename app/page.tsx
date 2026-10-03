import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Cast, CheckCircle2, ChevronDown, Clock3,
  Headphones, MessageCircle, Monitor, Play, Rocket, Smartphone,
  Sparkles, Tv2, Zap,
} from "lucide-react";
import ChannelMarquee from "@/app/components/channel-marquee";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { PLANS } from "@/app/iptv-south-africa/plans-data";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Golden IPTV | Plans, Trial & Setup Guides",
  description:
    "Explore Golden IPTV plans, request a 24-hour free trial and find setup guides for compatible Smart TVs and streaming devices.",
  url: "https://www.goldeniptv.co.za/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV streaming service",
  absoluteTitle: true,
});

const catalogue = [
  ["30,000+", "Live Channels", "Live worldwide", "Live television across sports, entertainment, news and international programming.", "/images/home/stitch-catalog-sports.jpg", "Live sports broadcast", "text-[#d4bbff]"],
  ["160,000+", "Movies", "On-demand library", "An extensive movie catalogue across genres, languages and viewing styles.", "/images/home/stitch-catalog-cinema.jpg", "Cinematic movie library", "text-[#afc6ff]"],
  ["59,000+", "Series", "Complete seasons", "Series and complete seasons in a catalogue designed for easy browsing.", "/images/home/stitch-catalog-documentary.jpg", "Series catalogue interface", "text-[#c1c1ff]"],
];

const explore = [
  ["Compatibility", "Supported Devices", "Find setup information for Smart TVs, Firestick, Apple TV and Android TV.", "/devices/", "View device guides", "/images/home/device-samsung-smart-tv.webp", "Golden IPTV on a Samsung Smart TV", "Hardware"],
  ["Subscriptions", "Flexible Plans", "Compare 1, 3, 6 and 12-month subscription periods in South African Rand.", "/pricing/", "Explore plans", "/images/stitch/pricing-01.webp", "Streaming subscription options", "Pricing"],
  ["Onboarding", "Setup Hub & Guides", "Follow practical installation and troubleshooting resources for compatible players.", "/guides/", "Browse guides", "/images/stitch/setup-hub-01.webp", "IPTV setup guide interface", "Tutorials"],
  ["Direct help", "Support & FAQ", "Get answers to common questions or contact the Golden IPTV team for assistance.", "/contact/", "Contact support", "/images/stitch/support-01.webp", "Customer support workspace", "Assistance"],
];

const devices = [
  { title: "Smart TVs", copy: "Setup guidance for popular television platforms.", icon: Tv2, links: [["Samsung Smart TV", "/devices/samsung-smart-tv/"], ["LG Smart TV", "/devices/lg-smart-tv/"]] },
  { title: "Firestick", copy: "A dedicated guide for Amazon Fire TV streaming devices.", icon: Cast, links: [["Firestick guide", "/devices/firestick/"]] },
  { title: "Android TV", copy: "Installation help for compatible Android TV screens and boxes.", icon: Monitor, links: [["Android TV guide", "/devices/android-tv/"]] },
  { title: "Apple TV", copy: "Setup information for Apple TV streaming hardware.", icon: Smartphone, links: [["Apple TV guide", "/devices/apple-tv/"]] },
];

const steps = [
  ["Choose your option", "Start with the 24-hour trial or compare the available subscription periods.", "/iptv-free-trial/", "Request trial access"],
  ["Check your device", "Open the setup guide that matches your Smart TV or streaming device.", "/devices/", "Browse devices"],
  ["Set up IPTV", "Follow the step-by-step instructions and troubleshooting guides if needed.", "/guides/how-to-install-iptv/", "Open installation guide"],
];

const faqs = [
  ["How does the 24-hour free trial work?", "Request the trial from the free-trial page, then use the access period to check compatibility and explore the setup process before choosing a paid plan."],
  ["Which devices are supported?", "Golden IPTV provides setup guides for Samsung and LG Smart TVs, Firestick, Android TV and Apple TV."],
  ["Where can I compare subscription options?", "The pricing page lists the available 1, 3, 6 and 12-month plans in South African Rand."],
  ["Can I get help with setup?", "Start with the installation and troubleshooting guides, or contact the team on WhatsApp if you need more help."],
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Golden IPTV",
  url: "https://www.goldeniptv.co.za/",
  description: "Golden IPTV subscription plans, free-trial information and setup guides for compatible streaming devices.",
  inLanguage: "en-ZA",
};

const primary = "ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--gradient-cta)] px-6 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,61,255,.4)] transition hover:brightness-110";
const secondary = "ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#12182a]/75 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-[#5d5cff]/60 hover:bg-[#1e263d]";
const shell = "mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-16";

function Heading({ eyebrow, title, copy, centered = false }: { eyebrow: string; title: string; copy: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-heading text-[11px] font-extrabold uppercase tracking-[.14em] text-[#c1c1ff]">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-[30px] font-bold leading-tight tracking-[-.015em] sm:text-[38px] lg:text-[44px]">{title}</h2>
      <p className="mt-3 text-[15px] leading-6 text-text-secondary sm:text-lg">{copy}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-page min-h-screen overflow-hidden bg-[#050711] text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }} />

      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
        <div className="ambient-drift pointer-events-none absolute -right-48 -top-52 h-[34rem] w-[34rem] rounded-full bg-[#287cff]/12 blur-[140px]" />
        <div className="ambient-drift pointer-events-none absolute -left-48 top-48 h-[32rem] w-[32rem] rounded-full bg-[#8b3dff]/16 blur-[150px]" />
        <div className={shell + " relative grid gap-10 pb-16 pt-10 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24"}>
          <div className="hero-copy z-10 lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#8b3dff]/20 bg-[#12182a]/80 px-3 py-1 font-heading text-[11px] font-extrabold uppercase tracking-[.14em] text-[#d4bbff]">
              <span className="h-2 w-2 rounded-full bg-[#d4bbff] shadow-[0_0_12px_#d4bbff]" />Premium IPTV entertainment
            </p>
            <h1 id="hero-title" className="mt-5 font-heading text-[38px] font-extrabold leading-[1.1] tracking-[-.02em] sm:text-5xl lg:text-[64px]">
              Unlimited Entertainment.
              <span className="block bg-gradient-to-r from-[#d4bbff] via-[#8b3dff] to-[#287cff] bg-clip-text text-transparent">All in One Place.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-text-secondary sm:text-lg">
              Explore Golden IPTV subscription plans, start a 24-hour free trial and discover simple setup guides for Smart TVs and streaming devices in South Africa.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/iptv-free-trial/" className={primary}><Play aria-hidden="true" className="h-4 w-4 fill-current" />Start 24-Hour Free Trial</Link>
              <Link href="/pricing/" className={secondary}>Explore Plans <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
            <div className="mt-7 grid gap-2 min-[420px]:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <span className="flex items-center gap-2 rounded-xl border border-white/[.07] bg-[#0d1220]/75 px-3 py-2.5 text-[12px] font-semibold"><Clock3 aria-hidden="true" className="h-4 w-4 text-[#afc6ff]" />24-hour free trial</span>
              <span className="flex items-center gap-2 rounded-xl border border-white/[.07] bg-[#0d1220]/75 px-3 py-2.5 text-[12px] font-semibold"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#afc6ff]" />Multiple plan periods</span>
              <span className="flex items-center gap-2 rounded-xl border border-white/[.07] bg-[#0d1220]/75 px-3 py-2.5 text-[12px] font-semibold"><BookOpen aria-hidden="true" className="h-4 w-4 text-[#afc6ff]" />Device setup guides</span>
            </div>
          </div>
          <div className="hero-media-composition relative z-10 lg:col-span-7">
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#8b3dff]/25 to-[#287cff]/20 blur-[80px]" />
            <div className="relative mx-auto max-w-[760px] rounded-[1.4rem] border border-white/10 bg-[#0b0e19]/95 p-2 shadow-[0_28px_80px_rgba(0,0,0,.72),0_0_42px_rgba(139,61,255,.2)] sm:p-3">
              <div className="flex items-center justify-between border-b border-white/[.07] px-2 pb-2 text-[10px] text-text-secondary sm:text-[11px]">
                <b className="text-white">Golden TV</b><span className="hidden gap-4 sm:flex"><b className="text-[#d4bbff]">Live Channels</b><span>Movies</span><span>Series</span></span><span className="text-[#afc6ff]">● Connected</span>
              </div>
              <div className="relative mt-2 aspect-video overflow-hidden rounded-2xl">
                <Image src="/images/home/stitch-hero-stage.jpg" alt="Golden IPTV cinematic live-streaming interface" fill priority sizes="(min-width:1024px) 54vw, 92vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-[#ff3b56] px-3 py-1 text-[10px] font-bold uppercase text-white">● Live broadcast</span>
              </div>
            </div>
            <div className="mx-auto h-3 w-32 rounded-b-lg bg-[#313441]" /><div className="mx-auto h-1.5 w-52 rounded-full bg-[#1e263d]" />
          </div>
        </div>
      </section>

      <section aria-labelledby="catalogue-title" className="border-y border-white/[.06] bg-gradient-to-b from-[#0b0e19] via-[#10131e] to-[#0b0e19] py-16 sm:py-20">
        <div className={shell}>
          <div id="catalogue-title"><Heading eyebrow="Unrivalled catalogue" title="Everything You Want to Watch. One Subscription." copy="Live television, movies and series brought together in one entertainment experience." centered /></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {catalogue.map(([value, label, badge, copy, image, alt, accent]) => (
              <article key={label} className="story-card group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-[#1c1f2b]/70 p-7 shadow-2xl">
                <Image src={image} alt={alt} fill sizes="(min-width:768px) 33vw, 100vw" className="story-media object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111522] via-[#111522]/85 to-transparent" />
                <div className="relative flex min-h-[246px] flex-col justify-between">
                  <span className="w-fit rounded-full border border-[#8b3dff]/40 bg-[#8b3dff]/15 px-3 py-1 text-[11px] font-semibold text-[#d4bbff]">{badge}</span>
                  <div><p className={"font-heading text-5xl font-extrabold tracking-[-.03em] lg:text-[56px] " + accent}>{value}</p><h3 className="mt-1 font-heading text-xl font-bold uppercase">{label}</h3><p className="mt-2 text-[13px] leading-5 text-text-secondary">{copy}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-title" className="bg-[#080b16] py-16 sm:py-20">
        <div className={shell}>
          <div id="explore-title"><Heading eyebrow="Explore the platform" title="Quick Access to Every Destination." copy="Move from device compatibility to plans, setup resources and direct support without losing your place." /></div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map(([eyebrow, title, copy, href, action, image, alt, tag]) => (
              <Link key={title} href={href} className="story-card group overflow-hidden rounded-2xl border border-white/[.08] bg-[#1c1f2b] shadow-xl">
                <div className="relative aspect-video overflow-hidden bg-[#272936]"><Image src={image} alt={alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="story-media object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#1c1f2b] to-transparent" /><span className="absolute left-3 top-3 rounded-md bg-[#8b3dff]/90 px-2.5 py-1 text-[10px] font-semibold text-white">{tag}</span></div>
                <div className="flex min-h-52 flex-col p-5"><p className="font-heading text-[11px] font-extrabold uppercase tracking-[.14em] text-[#afc6ff]">{eyebrow}</p><h3 className="story-card-title mt-1 font-heading text-xl font-semibold">{title}</h3><p className="mt-2 text-[13px] leading-5 text-text-secondary">{copy}</p><span className="story-card-action mt-auto flex items-center gap-1.5 pt-5 text-[12px] font-semibold text-[#d4bbff]">{action} <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ChannelMarquee />

      <section aria-labelledby="devices-title" className="border-y border-white/[.06] bg-[#0d101c] py-16 sm:py-20">
        <div className={shell}>
          <div id="devices-title"><Heading eyebrow="Universal compatibility" title="Stream Across Your Screens." copy="Explore setup guidance for popular Smart TVs and streaming platforms." centered /></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((device, index) => {
              const Icon = device.icon;
              return <article key={device.title} className="rounded-2xl border border-white/[.08] bg-[#181b27]/80 p-6 shadow-lg">
                <div className={(index % 2 ? "bg-[#287cff]/15 text-[#afc6ff]" : "bg-[#8b3dff]/15 text-[#d4bbff]") + " grid h-11 w-11 place-items-center rounded-xl"}><Icon aria-hidden="true" className="h-5 w-5" /></div>
                <h3 className="mt-5 font-heading text-xl font-semibold">{device.title}</h3><p className="mt-2 min-h-10 text-[13px] leading-5 text-text-secondary">{device.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">{device.links.map(([label, href]) => <Link key={href} href={href} className="rounded-lg bg-[#272936] px-2.5 py-1.5 text-[11px] font-semibold hover:text-[#d4bbff]">{label}</Link>)}</div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="bg-[#080b16] py-16 sm:py-20">
        <div className={shell}>
          <div id="steps-title"><Heading eyebrow="Getting started" title="Three Steps to Start Streaming." copy="From trial request to device setup, the process stays straightforward." centered /></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(([title, copy, href, action], index) => <article key={title} className="rounded-2xl border border-white/[.08] bg-[#1c1f2b]/80 p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#8b3dff] to-[#287cff] text-sm font-bold text-white">{index + 1}</span><p className="mt-7 text-[11px] font-semibold uppercase tracking-[.12em] text-text-muted">Step 0{index + 1}</p><h3 className="mt-1 font-heading text-xl font-semibold">{title}</h3><p className="mt-2 text-[13px] leading-5 text-text-secondary">{copy}</p><Link href={href} className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#d4bbff]">{action} <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-title" className="relative border-y border-white/[.06] bg-[#0d101c] py-16 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#8b3dff]/10 blur-[110px]" />
        <div className={shell + " relative"}>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div id="pricing-title"><Heading eyebrow="Pricing options" title="Simple, Transparent Plans." copy="Pick the duration that works best for you, with a separate 24-hour free trial available." /></div><Link href="/pricing/" className="flex items-center gap-2 text-sm font-bold text-[#d4bbff]">View all subscription options <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => <article key={plan.id} className={(plan.popular ? "border-[#8b3dff]/70 bg-[#272936] shadow-[0_0_24px_rgba(139,61,255,.25)]" : "border-white/[.08] bg-[#1c1f2b]") + " relative flex flex-col rounded-2xl border p-6"}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--gradient-cta)] px-3 py-1 text-[10px] font-bold uppercase text-white">Popular choice</span>}
              <p className="font-heading text-[11px] font-extrabold uppercase tracking-[.14em] text-[#afc6ff]">Subscription plan</p><h3 className="mt-2 font-heading text-2xl font-bold">{plan.duration}</h3>
              <div className="mt-5 rounded-xl bg-[#0b0e19] px-4 py-3"><p className="font-heading text-3xl font-bold text-[#d4bbff]">{plan.price}</p><p className="mt-1 text-[10px] uppercase text-text-muted">{plan.currencyLabel}</p></div>
              <p className="mt-4 flex-1 text-[13px] leading-5 text-text-secondary">{plan.description}</p><Link href="/pricing/" className={(plan.popular ? primary : secondary) + " mt-6 min-h-10 px-4 text-[13px]"}>{plan.ctaLabel}</Link>
            </article>)}
          </div>
          <div className="mt-6 rounded-2xl border border-white/[.08] bg-[#181b27]/80 p-5 sm:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-center">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#8b3dff]/15 text-[#d4bbff]"><Sparkles aria-hidden="true" className="h-5 w-5" /></span><div><h3 className="font-heading text-lg font-semibold">Included with every plan</h3><p className="text-[12px] text-text-secondary">Service benefits across subscription periods.</p></div></div>
              <div className="grid gap-3 sm:grid-cols-3"><span className="flex items-center gap-2 rounded-xl bg-[#0d1220] px-3 py-3 text-[12px] font-semibold"><Zap aria-hidden="true" className="h-4 w-4 text-[#afc6ff]" />No Buffering</span><span className="flex items-center gap-2 rounded-xl bg-[#0d1220] px-3 py-3 text-[12px] font-semibold"><Rocket aria-hidden="true" className="h-4 w-4 text-[#afc6ff]" />Instant Activation</span><span className="flex items-center gap-2 rounded-xl bg-[#0d1220] px-3 py-3 text-[12px] font-semibold"><Headphones aria-hidden="true" className="h-4 w-4 text-[#afc6ff]" />24/7 Support</span></div>
            </div>
          </div>
          <p className="mt-5 text-[13px] text-text-secondary">Looking for local details? Read the <Link href="/iptv-south-africa/" className="font-semibold text-[#d4bbff] underline underline-offset-4">IPTV South Africa guide</Link> for plan, compatibility, setup and free-trial information.</p>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-[#080b16] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div id="faq-title"><Heading eyebrow="Help & answers" title="Questions Before You Start?" copy="Quick answers to common questions about trials, devices, plans and setup." centered /></div>
          <div className="mt-9 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-white/[.08] bg-[#1c1f2b] px-5 py-4 open:border-[#8b3dff]/35"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold sm:text-lg [&::-webkit-details-marker]:hidden">{question}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#272936] text-[#d4bbff] group-open:bg-[#8b3dff] group-open:text-white"><ChevronDown aria-hidden="true" className="h-4 w-4 transition group-open:rotate-180" /></span></summary><p className="mt-4 border-t border-white/[.07] pt-4 text-[14px] leading-6 text-text-secondary">{answer}</p></details>)}</div>
          <div className="mt-7 flex flex-wrap justify-center gap-5"><Link href="/faq/" className="flex items-center gap-2 text-sm font-bold text-[#d4bbff]">View all FAQs <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link><Link href="/guides/iptv-buffering/" className="text-sm font-semibold text-text-secondary">Buffering guide</Link><Link href="/guides/internet-speed-for-iptv/" className="text-sm font-semibold text-text-secondary">Internet speed guide</Link></div>
        </div>
      </section>

      <section aria-labelledby="cta-title" className="bg-[#080b16] px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative mx-auto max-w-[82rem] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1c1f2b] via-[#272936] to-[#17233c] px-6 py-10 shadow-2xl sm:px-10 lg:py-12">
          <div className="cta-glow absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#8b3dff]/25 blur-[90px]" /><div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#287cff]/20 blur-[90px]" />
          <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full border border-[#8b3dff]/30 bg-[#0b0e19]/75 px-3 py-1 text-[11px] font-semibold text-[#d4bbff]"><CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5" />24-hour trial available</span><h2 id="cta-title" className="mt-4 font-heading text-[30px] font-extrabold sm:text-[44px]">Ready to Start Watching?</h2><p className="mt-3 text-[15px] text-text-secondary sm:text-lg">Request your 24-hour free trial or compare the available Golden IPTV subscription plans.</p></div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"><Link href="/iptv-free-trial/" className={primary}>Start Free Trial</Link><Link href="/pricing/" className={secondary}>View Plans</Link><Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-950/40 px-6 text-sm font-semibold text-emerald-200"><MessageCircle aria-hidden="true" className="h-4 w-4" />Chat on WhatsApp</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
