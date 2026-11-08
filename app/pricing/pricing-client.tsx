import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  MonitorPlay,
} from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { PLANS } from "@/app/iptv-south-africa/plans-data";
import CinematicPricingHeader from "./cinematic-pricing-header";
import CinematicPricingFooter from "./cinematic-pricing-footer";

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
    <>
      <CinematicPricingHeader />

      <main className="relative min-h-screen overflow-hidden bg-black text-[#EEEBDD]">

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-10 md:px-8 lg:px-16">

<section
  aria-labelledby="pricing-heading"
  className="relative isolate overflow-hidden border-b border-white/10 pb-16 pt-14 md:pb-24 md:pt-24"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(ellipse at 80% 20%, rgba(129,0,0,0.3), transparent 48%), linear-gradient(145deg, #1B1717 0%, #000000 65%)",
    }}
  />

  <div className="relative mx-auto max-w-5xl">
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <span className="h-px w-9 bg-[#CE1212]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#CE1212]">
        Golden IPTV / Pricing
      </span>
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#BDBDC5]">
        South Africa
      </span>
    </div>

    <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
      <div>
        <h1
          id="pricing-heading"
          className="max-w-4xl text-[clamp(2.9rem,7vw,6.8rem)] font-black leading-[0.98] tracking-[-0.055em]"
        >
          IPTV Plans
          <span className="block text-[#CE1212]">
            & Prices
          </span>
          <span className="mt-3 block text-[clamp(1.5rem,3vw,2.7rem)] font-medium leading-tight tracking-[-0.035em] text-[#EEEBDD]">
            in South Africa
          </span>
        </h1>
      </div>

      <div className="max-w-sm border-l border-[#CE1212]/70 pl-6">
        <p className="text-base leading-8 text-[#BDBDC5]">
          Compare Golden IPTV subscription plans in South Africa,
          starting at R199 for 1 month. Explore 3-month, 6-month
          and 12-month options, with prices in South African Rand
          (ZAR), and request a 24-hour free trial before choosing.
        </p>

        <Link
          href="/iptv-free-trial/"
          className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[#CE1212] pb-1 text-sm font-bold text-[#EEEBDD] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
        >
          Request a 24-hour free trial
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>

    <div className="mt-16 border-t border-white/15 pt-7">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#EEEBDD]">
            Choose your subscription period
          </p>
          <p className="mt-2 text-xs text-[#BDBDC5]">
            All listed prices are in South African Rand (ZAR).
          </p>
        </div>

        <nav
          aria-label="Jump to subscription plan"
          className="flex flex-wrap gap-2"
        >
          {PLANS.map((plan) => (
            <a
              key={plan.id}
              href={`#${plan.id}`}
              className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none ${
                plan.popular
                  ? "border-[#CE1212] bg-[#CE1212] text-white hover:bg-[#a90e0e]"
                  : "border-white/20 bg-white/5 text-[#EEEBDD] hover:border-[#CE1212]/60 hover:bg-[#810000]/20"
              }`}
            >
              {plan.duration}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
</section>

        <section
          aria-label="Golden IPTV subscription plans"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >

{PLANS.map((plan) => (
  <article
    id={plan.id}
    key={plan.id}
    className={`relative flex min-h-[520px] scroll-mt-28 flex-col overflow-hidden rounded-xl border p-6 transition-colors duration-300 md:p-7 motion-reduce:transition-none ${
      plan.popular
        ? "border-[#CE1212] bg-gradient-to-b from-[#351010] via-[#1B1717] to-[#101010]"
        : "border-white/15 bg-[#1B1717] hover:border-[#CE1212]/50"
    }`}
  >
    {plan.popular && (
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#CE1212]"
      />
    )}

    <div className="flex items-center justify-between gap-3">
      <span
        className={`inline-flex rounded-md border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
          plan.popular
            ? "border-[#CE1212] bg-[#810000] text-white"
            : "border-white/15 bg-white/5 text-[#BDBDC5]"
        }`}
      >
        {plan.popular ? "Featured plan" : "Golden IPTV"}
      </span>

      <span
        aria-hidden="true"
        className="text-xs font-bold tracking-[0.15em] text-[#CE1212]"
      >
        0{PLANS.indexOf(plan) + 1}
      </span>
    </div>

    <h2 className="mt-8 text-[clamp(1.7rem,2vw,2.2rem)] font-bold tracking-[-0.035em] text-[#EEEBDD]">
      {plan.duration}
    </h2>

    <p className="mt-3 min-h-20 text-sm leading-7 text-[#BDBDC5]">
      {plan.description}
    </p>

    <div className="mt-6 border-y border-white/15 py-6">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#BDBDC5]">
        Subscription price
      </p>

      <div className="flex items-end gap-2">
        <span className="text-[clamp(2.8rem,4vw,3.8rem)] font-black leading-none tracking-[-0.06em] text-[#EEEBDD]">
          {plan.price}
        </span>
      </div>

      <p className="mt-3 text-xs leading-5 text-[#BDBDC5]">
        For the full {plan.duration.toLowerCase()} period
      </p>
    </div>

    <ul className="my-7 flex-1 space-y-4">
      {planFeatures.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-3 text-sm leading-6 text-[#EEEBDD]"
        >
          <CheckCircle2
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-[#CE1212]"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <a
      href={planWhatsAppUrl(plan.duration, plan.price)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-5 py-3 text-center text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none ${
        plan.popular
          ? "bg-[#CE1212] text-white hover:bg-[#a90e0e]"
          : "border border-white/20 bg-[#EEEBDD] text-black hover:bg-white"
      }`}
    >
      {plan.ctaLabel}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>

    <p className="mt-4 text-center text-[11px] leading-5 text-[#BDBDC5]">
      Enquire about this plan via WhatsApp
    </p>
  </article>
))}

        </section>



<section
  aria-labelledby="pricing-trial-heading"
  className="relative mt-10 overflow-hidden rounded-xl border border-[#D8D0C2] bg-[#EEEBDD] p-6 text-[#1B1717] md:p-10"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#810000]/10"
  />

  <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
    <div className="max-w-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#810000]">
        24-hour free trial
      </p>

      <h2
        id="pricing-trial-heading"
        className="mt-4 text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-[#1B1717]"
      >
        Experience it before
        <span className="block text-[#810000]">
          you subscribe.
        </span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#514B47] md:text-base">
        Request a 24-hour free trial to explore Golden IPTV on a
        compatible device before choosing a paid subscription.
      </p>
    </div>

    <Link
      href="/iptv-free-trial/"
      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#810000] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#650000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1717] motion-reduce:transition-none"
    >
      Request Free Trial
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  </div>

  <div className="relative mt-9 border-t border-[#1B1717]/15 pt-5">
    <p className="text-xs leading-6 text-[#625B55]">
      24-hour trial request · Compatible device required · Setup guidance available
    </p>
  </div>
</section>


<section
  aria-labelledby="pricing-benefits-heading"
  className="mt-20 md:mt-28"
>
  <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
    <div>
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#CE1212]">
        Included with every plan
      </p>

      <h2
        id="pricing-benefits-heading"
        className="max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#EEEBDD]"
      >
        Golden IPTV
        <span className="block text-[#CE1212]">
          plan essentials.
        </span>
      </h2>
    </div>

    <p className="max-w-sm text-sm leading-7 text-[#BDBDC5]">
      Explore catalogue information, customer support and
      setup guidance before choosing your subscription.
      {" "}New to the service? Read our{" "}
      <Link
        href="/iptv-south-africa/"
        className="text-[#EEEBDD] underline decoration-[#CE1212] underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
      >
        IPTV South Africa guide
      </Link>{" "}
      for an overview of plans, compatible devices and setup.
    </p>
  </div>

  <div className="grid gap-5 lg:grid-cols-2">
    {benefitGroups.map(({ eyebrow, title, items }, index) => (
      <article
        key={title}
        className={`relative overflow-hidden rounded-xl border p-6 transition-colors md:p-9 motion-reduce:transition-none ${
  index % 2 === 0
    ? "border-[#D8D0C2] bg-[#EEEBDD] text-[#1B1717] hover:border-[#810000]/50"
    : "border-white/15 bg-[#1B1717] text-[#EEEBDD] hover:border-[#CE1212]/50"
}`}
      >

<div className="mb-10 flex items-start justify-between">
  <span
    className={`text-xs font-bold tracking-[0.2em] ${
      index % 2 === 0 ? "text-[#810000]" : "text-[#CE1212]"
    }`}
  >
    0{index + 1}
  </span>

  <span
    aria-hidden="true"
    className={`h-px w-12 ${
      index % 2 === 0 ? "bg-[#810000]/40" : "bg-[#CE1212]/60"
    }`}
  />
</div>

<p
  className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
    index % 2 === 0 ? "text-[#810000]" : "text-[#CE1212]"
  }`}
>
  {eyebrow}
</p>

<h3
  className={`mt-3 text-2xl font-bold tracking-[-0.035em] md:text-3xl ${
    index % 2 === 0 ? "text-[#1B1717]" : "text-[#EEEBDD]"
  }`}
>
  {title}
</h3>

<ul
  className={`mt-8 space-y-3 border-t pt-7 ${
    index % 2 === 0 ? "border-[#1B1717]/15" : "border-white/15"
  }`}
>
  {items.map((item) => (
    <li
      key={item}
      className={`flex items-start gap-3 rounded-md border px-4 py-3 text-sm leading-6 ${
        index % 2 === 0
          ? "border-[#1B1717]/10 bg-[#1B1717]/5 text-[#1B1717]"
          : "border-white/10 bg-black/20 text-[#EEEBDD]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
          index % 2 === 0 ? "bg-[#810000]" : "bg-[#CE1212]"
        }`}
      />
      <span>{item}</span>
    </li>
  ))}
</ul>
      </article>
    ))}
  </div>
</section>


<section
  aria-labelledby="pricing-setup-heading"
  className="mt-20 overflow-hidden rounded-xl border border-white/15 bg-[#1B1717] md:mt-28"
>
  <div className="grid items-stretch lg:grid-cols-2">
    <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-8 bg-[#CE1212]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#CE1212]">
          Device compatibility
        </span>
      </div>

      <h2
        id="pricing-setup-heading"
        className="max-w-xl text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#EEEBDD]"
      >
        Designed for a
        <span className="block text-[#CE1212]">
          modern streaming setup.
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-7 text-[#BDBDC5] md:text-base">
        Choose a subscription period, use a supported device and
        follow the relevant setup guidance. Explore compatibility
        information before requesting activation.
      </p>

      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        <Link
          href="/devices/"
          className="group flex min-h-28 flex-col justify-between rounded-md border border-white/15 bg-black/30 p-5 transition-colors hover:border-[#CE1212]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
        >
          <span className="text-xl font-bold text-[#EEEBDD]">
            Device guides
          </span>

          <span className="flex items-center justify-between gap-2 text-xs text-[#BDBDC5]">
            Explore supported devices
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 text-[#CE1212] transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </span>
        </Link>

        <Link
          href="/iptv-free-trial/"
          className="group flex min-h-28 flex-col justify-between rounded-md border border-white/15 bg-black/30 p-5 transition-colors hover:border-[#CE1212]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
        >
          <span className="text-xl font-bold text-[#EEEBDD]">
            24-hour trial
          </span>

          <span className="flex items-center justify-between gap-2 text-xs text-[#BDBDC5]">
            Request before subscribing
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 text-[#CE1212] transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </span>
        </Link>
      </div>
    </div>

    <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[520px]">
      <Image
        src="/images/pricing-device-cinematic.webp"
        alt="Modern living room with a television showing a historical drama"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1B1717]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#1B1717]/50"
      />

      <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#CE1212] bg-black/70 px-5 py-4 backdrop-blur-md md:bottom-8 md:left-8 md:right-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#CE1212]">
          Golden IPTV
        </p>
        <p className="mt-2 text-sm font-semibold text-[#EEEBDD]">
          Explore setup guidance for compatible devices.
        </p>
      </div>
    </div>
  </div>
</section>



<section
  aria-labelledby="pricing-faq-heading"
  className="mt-20 rounded-xl border border-[#D8D0C2] bg-[#EEEBDD] px-5 py-12 text-[#1B1717] md:mt-28 md:px-12 md:py-16"
>
  <div className="mx-auto max-w-5xl">
    <div className="mb-10 border-b border-[#1B1717]/15 pb-8">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#810000]">
        Subscription questions
      </p>

      <h2
        id="pricing-faq-heading"
        className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#1B1717]"
      >
        Frequently Asked
        <span className="block text-[#810000]">
          Questions.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-[#514B47]">
        Find answers about subscription periods, free trials,
        supported devices and contacting our team.
      </p>
    </div>

    <div className="space-y-3">
      {pricingFaqs.map((item, index) => (
        <details
          key={item.question}
          className="group rounded-lg border border-[#D8D0C2] bg-[#F8F6F0] open:border-[#810000]/50"
        >
          <summary className="flex min-h-20 cursor-pointer list-none items-center gap-4 px-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#810000] md:px-7 [&::-webkit-details-marker]:hidden">
            <span
              aria-hidden="true"
              className="shrink-0 text-xs font-bold tracking-[0.15em] text-[#810000]"
            >
              0{index + 1}
            </span>

            <span className="flex-1 text-left text-base font-semibold leading-6 text-[#1B1717] md:text-lg">
              {item.question}
            </span>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#1B1717]/15 text-xl text-[#810000] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>

          <div className="border-t border-[#1B1717]/10 px-5 pb-6 pt-5 md:px-7">
            <p className="max-w-3xl text-sm leading-7 text-[#514B47] md:pl-9">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>

    <div className="mt-9 flex flex-col items-start justify-between gap-5 border-t border-[#1B1717]/15 pt-7 sm:flex-row sm:items-center">
      <p className="text-sm text-[#514B47]">
        Still have a question about your subscription?
      </p>

      <Link
        href="/contact/"
        className="inline-flex min-h-11 items-center gap-3 border-b border-[#810000] pb-1 text-sm font-bold text-[#810000] transition-colors hover:text-[#1B1717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#810000] motion-reduce:transition-none"
      >
        Contact our team
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  </div>
</section>
      </div>
      </main>

      <CinematicPricingFooter />
    </>
  );
}