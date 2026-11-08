import type { Metadata } from "next";
import Link from "next/link";
import { PLANS } from "@/app/iptv-south-africa/plans-data";
import { DEVICES } from "@/app/iptv-south-africa/devices-data";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Best IPTV South Africa: How to Choose a Provider",
  description: "Compare what matters when choosing an IPTV provider in South Africa: pricing, device support, free trials, streaming stability and customer support.",
  url: "https://www.goldeniptv.co.za/best-iptv-south-africa/",
  image: "/images/stitch/setup-hub-01.webp",
  imageAlt: "Golden IPTV device setup and viewing guidance",
});

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]";
const link = `font-semibold text-[#EEEBDD] underline decoration-[#CE1212] underline-offset-4 hover:decoration-[#EEEBDD] ${focus}`;
const heading = "font-heading text-2xl font-semibold leading-tight tracking-tight text-[#EEEBDD] sm:text-3xl";
const section = "space-y-6 border-t border-white/15 py-10 sm:py-14";

const CHECKLIST = [
  ["Pricing", "Compare monthly and longer-plan totals, not just a headline monthly equivalent. Ask about separate player fees, renewal terms and any additional charges."],
  ["Trial", "Check whether testing is available, how long access lasts and how to request it. Use your own device and connection."],
  ["Device compatibility", "Check the exact Firestick, Android TV, Samsung, LG or Apple TV model, available player and required setup method. A device category alone does not confirm compatibility."],
  ["Streaming quality", "Test actual picture, sound and playback stability on your connection, including the hours you normally watch."],
  ["Support", "Check contact channels and ask about support hours and response expectations. Try a genuine setup question before paying."],
  ["Refunds", "Read published eligibility rules, request periods and exclusions. Confirm cancellation and renewal conditions before purchase."],
  ["Content access", "Confirm the content you need is available in South Africa and ask how appropriate distribution rights are established. A large catalogue or working stream is not evidence of permission."],
] as const;

const TRIAL_CHECKS = [
  ["Device compatibility", "Install a compatible player using the relevant device guide and check that the supplied configuration works. Note any separate app costs before proceeding."],
  ["Playback stability", "Watch continuously for a normal viewing session and try changing channels. Note pauses, disconnections and whether playback recovers."],
  ["Picture quality", "Check picture and sound on your own screen. Compare any available quality settings without assuming that every programme has the same resolution."],
  ["Peak-hour performance", "If the trial timing allows, test during your usual evening viewing hours with normal household internet use. One successful test cannot guarantee future performance."],
  ["App usability", "Try navigation, search and returning to a programme where those features are available. Make sure the controls are usable with your remote."],
  ["Support responsiveness", "Ask a specific setup or subscription question through the published support channel. Assess the clarity of the answer as well as the response time."],
] as const;

const MISTAKES = [
  "Choosing solely by advertised channel count instead of checking the content you actually need and the rights to offer it.",
  "Assuming a player works on every model without checking device and app compatibility.",
  "Skipping a trial or testing on a different connection from the one you will use at home.",
  "Assuming all IPTV providers have identical content rights or regional availability.",
  "Paying without reading refund exclusions, cancellation conditions and renewal terms.",
  "Buying a long subscription before testing, simply because its advertised monthly equivalent looks lower.",
] as const;

const FAQS = [
  { question: "What should I look for in an IPTV provider in South Africa?", answer: "Check your exact device, reliable playback on your connection, total subscription costs, trial availability, support channels and published refund and cancellation policies. Ask about legitimate access to the content you want." },
  { question: "Is a free trial important?", answer: "A trial helps you assess setup, app usability and playback before paying. Test on the device and internet connection you intend to use; a short trial does not guarantee future performance." },
  { question: "Can IPTV work on fibre or LTE?", answer: "Reliable fibre can support stable streaming. LTE and 5G can also work, but signal strength, congestion and data limits may affect viewing. Wi-Fi stability matters too, so test your actual setup." },
  { question: "Which devices can I use?", answer: "Golden IPTV publishes guides for Firestick and Fire TV, Android TV, Samsung Smart TV, LG Smart TV and Apple TV. Compatibility depends on the model, available player and configuration method; check the matching guide first." },
  { question: "Is a monthly plan better for first-time users?", answer: "A monthly plan limits the initial commitment while you assess a service. A longer plan may have a lower equivalent monthly cost but requires more upfront spending. Test first and review the terms before deciding." },
  { question: "How do I check refund policies?", answer: "Open the provider's published refund policy before paying. Check eligibility, exclusions, request deadlines, evidence needed and processing times. Ask support to clarify anything unclear rather than assuming a refund is guaranteed." },
] as const;

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.goldeniptv.co.za/" },
    { "@type": "ListItem", position: 2, name: "Best IPTV South Africa: Buyer's Guide", item: "https://www.goldeniptv.co.za/best-iptv-south-africa/" },
  ],
};

export default function BestIptvSouthAfricaPage() {
  return (
    <main id="guide-main" tabIndex={-1} className="min-w-0 bg-[#0B0A0A] text-[#EEEBDD] focus:outline-none">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
      <div className="border-b border-white/15 bg-[#171112]">
        <div className="mx-auto max-w-[1100px] px-5 py-10 md:px-10 md:py-16 lg:px-16">
          <nav aria-label="Breadcrumb" className="text-sm leading-6 text-[#BDBDC5]">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li><Link href="/" className={link}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Best IPTV South Africa: Buyer&apos;s Guide</li>
            </ol>
          </nav>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-[#BDBDC5]">The Golden IPTV Field Guide / Choosing a provider</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Best IPTV in South Africa: How to Choose a Provider</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#BDBDC5]">Choose for your screen, your connection and your budget. Use practical checks to compare IPTV providers in South Africa before committing to a subscription.</p>
          <p className="mt-6 max-w-3xl border-l-2 border-[#CE1212] pl-4 text-sm leading-7 text-[#BDBDC5]">Published by Golden IPTV, a service provider. This is a buying checklist, not an independent provider ranking or a claim that Golden IPTV is the best.</p>
          <a href="#comparison" className={`mt-8 inline-flex min-h-12 items-center rounded-md bg-[#CE1212] px-6 py-3 text-sm font-bold text-white ${focus}`}>Open the comparison checklist</a>
        </div>
      </div>

      <article aria-label="IPTV provider buying guide" className="mx-auto max-w-[1100px] px-5 text-base leading-8 text-[#BDBDC5] md:px-10 lg:px-16">
        <section aria-labelledby="quick-answer" className="space-y-6 py-10 sm:py-14">
          <h2 id="quick-answer" className={heading}>Quick answer: what makes an IPTV provider a good fit?</h2>
          <p>The best IPTV provider for you depends on compatible devices, connection reliability, transparent subscription pricing, an opportunity to test, helpful support and clear refund and cancellation policies. Legitimate access to the content offered matters alongside playback quality.</p>
          <p>Start with your must-watch content and exact device model. Shortlist providers that can explain their offering and terms, then test on your own connection. Price or an advertised channel count alone cannot establish which service suits you.</p>
        </section>

        <section id="comparison" aria-labelledby="comparison-heading" className={`${section} scroll-mt-8`}>
          <h2 id="comparison-heading" className={heading}>IPTV provider comparison checklist</h2>
          <p>Ask each provider the same questions and record the answers. Treat missing or unclear information as something to resolve before payment.</p>
          <p id="table-help" className="text-sm">On a narrow screen, scroll the table sideways to read both columns.</p>
          <div role="region" aria-label="Provider comparison checklist" aria-describedby="table-help" tabIndex={0} className={`max-w-full overflow-x-auto border border-white/15 ${focus}`}>
            <table className="w-full min-w-[480px] border-collapse text-left text-sm leading-7">
              <caption className="sr-only">Criteria and questions for comparing IPTV providers in South Africa</caption>
              <thead className="bg-[#211617] text-[#EEEBDD]"><tr><th scope="col" className="px-5 py-4">Criterion</th><th scope="col" className="px-5 py-4">What to check</th></tr></thead>
              <tbody>{CHECKLIST.map(([criterion, detail]) => <tr key={criterion} className="border-t border-white/15"><th scope="row" className="px-5 py-4 align-top font-semibold text-[#EEEBDD]">{criterion}</th><td className="px-5 py-4 align-top">{detail}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="south-africa" className={section}>
          <h2 id="south-africa" className={heading}>IPTV in South Africa: test your connection, not just its speed</h2>
          <p>Reliable fibre can provide stable streaming, while LTE and 5G can also work. Mobile network congestion, signal strength and changing network conditions may affect playback. No connection type guarantees a trouble-free stream.</p>
          <p>Wi-Fi quality matters alongside advertised download speed. Test where your television sits, with the household devices you normally use online. Streaming uses data; check your allowance, any caps or fair-use conditions, and monitor usage during the trial rather than assuming an uncapped experience.</p>
          <p>Use the <Link href="/guides/internet-speed-for-iptv/" className={link}>internet speed and connection guide</Link> to prepare your network, and the <Link href="/guides/iptv-buffering/" className={link}>IPTV buffering checklist</Link> if playback pauses.</p>
        </section>

        <section aria-labelledby="trial" className={section}>
          <h2 id="trial" className={heading}>How to evaluate an IPTV trial</h2>
          <p>Keep brief notes on what works and what does not. Test the content you intend to watch and ask about anything unavailable rather than assuming a paid plan will resolve it.</p>
          <ol className="space-y-5">{TRIAL_CHECKS.map(([title, detail], index) => <li key={title} className="border-l border-[#CE1212] pl-5"><h3 className="font-heading text-lg font-semibold text-[#EEEBDD]">{index + 1}. {title}</h3><p className="mt-1">{detail}</p></li>)}</ol>
          <p>Golden IPTV offers a <Link href="/iptv-free-trial/" className={link}>24-hour free trial request</Link>. Follow the request instructions and press Send in WhatsApp to complete your request.</p>
        </section>

        <section aria-labelledby="subscriptions" className={section}>
          <h2 id="subscriptions" className={heading}>Monthly vs annual subscriptions: commitment before savings</h2>
          <p>A monthly subscription limits your initial financial commitment while you learn how a service performs. An annual subscription may cost less per month when averaged across the term, but requires a larger upfront payment. A lower equivalent monthly price does not remove compatibility or service risks.</p>
          <p>Golden IPTV&apos;s listed subscription totals in South African Rand (ZAR) are:</p>
          <ul className="grid gap-x-8 gap-y-3 border-y border-white/15 py-5 sm:grid-cols-2">{PLANS.map(plan => <li key={plan.id} className="flex flex-wrap justify-between gap-x-4"><span>{plan.duration}</span><strong className="text-[#EEEBDD]">{plan.price}</strong></li>)}</ul>
          <p>These are Golden IPTV prices, not a market comparison. Review <Link href="/pricing/" className={link}>current subscription plans and pricing</Link> and confirm payment, renewal and cancellation conditions before buying. Test first; choose a term you are comfortable committing to.</p>
        </section>

        <section aria-labelledby="mistakes" className={section}>
          <h2 id="mistakes" className={heading}>Common mistakes when choosing a provider</h2>
          <ul className="list-disc space-y-3 pl-5 marker:text-[#EEEBDD]">{MISTAKES.map(mistake => <li key={mistake}>{mistake}</li>)}</ul>
        </section>

        <section aria-labelledby="golden-option" className={section}>
          <h2 id="golden-option" className={heading}>Golden IPTV as one option to evaluate</h2>
          <p>Golden IPTV lists monthly, three-month, six-month and annual plans, a 24-hour free trial, device setup guidance and WhatsApp support. These are published service details, not evidence of superiority over other providers or independent verification of content rights.</p>
          <p>Setup guides cover the following devices. Model, app availability and configuration requirements still need checking:</p>
          <ul className="list-disc space-y-2 pl-5">{DEVICES.map(device => <li key={device.href}><Link href={device.href} className={link}>{device.name} setup guide</Link></li>)}</ul>
          <p>Read the <Link href="/refund-policy/" className={link}>refund and cancellation policy</Link>, <Link href="/terms/" className={link}>terms of service</Link> and <Link href="/privacy/" className={link}>privacy policy</Link>. Use <Link href="/contact/" className={link}>Golden IPTV support</Link> to clarify unanswered questions before payment.</p>
          <p>For the service overview rather than buying criteria, visit <Link href="/iptv-south-africa/" className={link}>Golden IPTV plans, devices and trial information for South Africa</Link>.</p>
        </section>

        <section aria-labelledby="questions" className={section}>
          <h2 id="questions" className={heading}>Questions before you choose</h2>
          <div className="divide-y divide-white/15 border-y border-white/15">{FAQS.map(faq => <details key={faq.question} className="py-5"><summary className={`cursor-pointer font-heading text-lg font-semibold text-[#EEEBDD] ${focus}`}>{faq.question}</summary><p className="mt-4">{faq.answer}</p></details>)}</div>
        </section>
      </article>
    </main>
  );
}
