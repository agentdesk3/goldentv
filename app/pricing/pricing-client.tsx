import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { PLANS } from "@/app/iptv-south-africa/plans-data";

const planFeatures = [
  "Catalogue details available on request.",
  "Buffering troubleshooting guidance",
  "Request activation via WhatsApp",
  "WhatsApp customer support",
] as const;

const benefitGroups = [
  {
    icon: MonitorPlay,
    eyebrow: "Catalogue value",
    title: "Entertainment included",
    items: [
      "Live channel catalogue",
      "On-demand movies",
      "On-demand series",
    ],
  },
  {
    icon: Headphones,
    eyebrow: "Service benefits",
    title: "Ready when you are",
    items: [
      "Buffering troubleshooting guidance",
      "Request activation via WhatsApp",
      "WhatsApp customer support",
      "Works on Supported Devices",
      "Setup Guidance Available",
    ],
  },
] as const;

const pricingFaqs = [
  {
    question: "Which subscription periods are available?",
    answer:
      "Golden IPTV currently lists 1-month, 3-month, 6-month and 12-month subscription options.",
  },
  {
    question: "Can I test the service before choosing a plan?",
    answer:
      "Yes. You can request a 24-hour free trial and test the service on a compatible device before choosing a paid subscription.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Setup guidance is available for Samsung Smart TV, LG Smart TV, Amazon Fire TV or Firestick, Android TV and Apple TV.",
  },
  {
    question: "How do I ask a question about a plan?",
    answer:
      "Use the plan button or Golden IPTV support page to continue the conversation through WhatsApp.",
  },
] as const;

function planWhatsAppUrl(duration: string, price: string) {
  const message = `Hello Golden IPTV, I would like to ask about the ${duration} plan listed at ${price}.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export default function PricingClient() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10131e] text-[#e0e1f2]">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-[#046ef1]/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-[-5rem] top-48 h-[620px] w-[620px] rounded-full bg-[#8b3dff]/20 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-10 md:px-8 lg:px-16">
        <section className="mx-auto flex max-w-4xl flex-col items-center pb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#272936]/70 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#d4bbff] motion-reduce:animate-none" />
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#d4bbff]">
              Four flexible subscription periods
            </span>
          </div>
          <h1 className="font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[64px] md:leading-[72px]">
            IPTV Plans & Prices
            <span className="bg-gradient-to-r from-[#d4bbff] via-[#c1c1ff] to-[#afc6ff] bg-clip-text text-transparent">
              in South Africa
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#cdc2d8] md:text-lg">
            Compare the current Golden IPTV prices and choose the subscription
            period that suits you.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2 rounded-full bg-[#181b27]/90 p-1.5 shadow-lg">
            {PLANS.map((plan) => (
              <a
                key={plan.id}
                href={`#${plan.id}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#8b3dff] to-[#046ef1] text-white shadow-md"
                    : "text-[#cdc2d8] hover:bg-[#272936]/60 hover:text-white"
                }`}
              >
                {plan.duration}
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#afc6ff]">
            All prices are listed in South African Rand (ZAR)
          </p>
        </section>

        <section
          aria-label="Golden IPTV subscription plans"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {PLANS.map((plan) => (
            <article
              id={plan.id}
              key={plan.id}
              className={`story-card relative flex min-h-[510px] scroll-mt-28 flex-col rounded-[2rem] border p-6 backdrop-blur-xl ${
                plan.popular
                  ? "border-[#8b3dff]/70 bg-gradient-to-b from-[#5930a7]/80 via-[#24234d]/90 to-[#181b27]/95 shadow-[0_0_28px_rgba(139,61,255,0.28)]"
                  : "border-white/[0.06] bg-[#181b27]/85 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d4bbff] to-transparent" />
              )}
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 font-heading text-[11px] font-extrabold uppercase tracking-[0.12em] ${
                    plan.popular
                      ? "bg-[#8b3dff] text-white"
                      : "bg-[#272936] text-[#d4bbff]"
                  }`}
                >
                  {plan.popular ? "Featured" : "Golden IPTV"}
                </span>
                <Sparkles className="h-5 w-5 text-[#968da1]" />
              </div>

              <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-[#e0e1f2]">
                {plan.duration}
              </h2>
              <p className="mt-2 min-h-24 text-sm leading-6 text-[#cdc2d8]">
                {plan.description}
              </p>

              <div className="mt-5 rounded-2xl bg-[#0b0e19]/80 p-4 shadow-inner">
                <div className="flex items-end gap-2">
                  <span className="font-heading text-[44px] font-extrabold leading-none tracking-tight text-white">
                    {plan.price}
                  </span>
                </div>
                <span className="mt-2 block text-xs text-[#968da1]">
                  for the full {plan.duration.toLowerCase()} period
                </span>
              </div>

              <ul className="my-6 flex-1 space-y-3">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#e0e1f2]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4bbff]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={planWhatsAppUrl(plan.duration, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`ui-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#8b3dff] to-[#046ef1] text-white shadow-[0_0_24px_rgba(139,61,255,0.4)]"
                    : "bg-[#313441] text-white hover:bg-[#363945]"
                }`}
              >
                {plan.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </section>

        <section className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#181b27] via-[#1c1f2b] to-[#181b27] p-6 shadow-xl md:p-8">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[#046ef1]/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d4bbff]/10">
                <Clock3 className="h-7 w-7 text-[#d4bbff]" />
              </div>
              <div>
                <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
                  24-hour free trial
                </span>
                <h2 className="mt-1 font-heading text-2xl font-bold">
                  Not ready to subscribe?
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-[#cdc2d8]">
                  Request a free trial to explore Golden IPTV on a compatible
                  device before choosing one of the paid plans.
                </p>
              </div>
            </div>
            <Link
              href="/iptv-free-trial/"
              className="ui-button inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#313441] px-6 text-sm font-bold text-white hover:bg-[#363945]"
            >
              Request Free Trial
              <MonitorPlay className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto mb-7 max-w-2xl text-center">
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#968da1]">
              Included with every plan
            </span>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight">
              Golden IPTV plan essentials
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {benefitGroups.map(({ icon: Icon, eyebrow, title, items }) => (
              <article
                key={title}
                className="story-card rounded-2xl border border-white/[0.06] bg-[#181b27]/75 p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4bbff]/10 text-[#d4bbff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
                      {eyebrow}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-semibold">{title}</h3>
                  </div>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-[#0b0e19]/55 px-3 py-2.5 text-sm font-semibold text-[#e0e1f2]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4bbff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#0b0e19] shadow-2xl">
          <div className="grid items-center lg:grid-cols-12">
            <div className="p-7 md:p-10 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#272936] px-4 py-1.5">
                <ShieldCheck className="h-4 w-4 text-[#d4bbff]" />
                <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#d4bbff]">
                  Cinematic setup
                </span>
              </div>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Designed for a modern streaming setup
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#cdc2d8] md:text-base">
                Choose a plan, use a supported device and follow the relevant
                setup guidance. Golden IPTV keeps the path from subscription to
                playback clear and practical.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#181b27]/80 p-4">
                  <strong className="font-heading text-lg">5 device guides</strong>
                  <span className="mt-1 block text-xs text-[#cdc2d8]">
                    Repository-backed setup routes
                  </span>
                </div>
                <div className="rounded-2xl bg-[#181b27]/80 p-4">
                  <strong className="font-heading text-lg">24-hour trial</strong>
                  <span className="mt-1 block text-xs text-[#cdc2d8]">
                    Request before subscribing
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[320px] lg:col-span-6 lg:h-[440px]">
              <Image
                src="/images/stitch/pricing-01.webp"
                alt="Cinematic television, streaming device and remote in violet and blue light"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19] via-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl">
          <div className="mb-7 text-center">
            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#968da1]">
              Subscription questions
            </span>
            <h2 className="mt-1 font-heading text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-2">
            {pricingFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-[#181b27]/80 shadow-sm"
              >
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
      </div>
    </main>
  );
}