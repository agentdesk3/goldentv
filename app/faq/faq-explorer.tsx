"use client";

import { ArrowRight, Headphones, MonitorSmartphone, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const categories = [
  { id: "all", label: "All Questions", terms: [] },
  { id: "trial", label: "Free Trial", terms: ["trial"] },
  { id: "plans", label: "Plans", terms: ["subscription", "plan"] },
  { id: "devices", label: "Devices", terms: ["device", "smart tv", "firestick"] },
  { id: "setup", label: "Setup", terms: ["install", "setup", "buffer", "internet"] },
] as const;

export default function FaqExplorer({ faqs }: { faqs: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const visibleFaqs = useMemo(() => {
    const selected = categories.find((item) => item.id === category);
    const normalized = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const content = `${faq.question} ${faq.answer}`.toLowerCase();
      const matchesQuery = !normalized || content.includes(normalized);
      const matchesCategory =
        !selected || selected.terms.length === 0 ||
        selected.terms.some((term) => content.includes(term));
      return matchesQuery && matchesCategory;
    });
  }, [category, faqs, query]);

  return (
    <>
      <section className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#272936]/75 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#046ef1] motion-reduce:animate-none" />
          <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
            Golden IPTV knowledge base
          </span>
        </div>
        <h1 className="mt-4 font-heading text-[38px] font-extrabold leading-[44px] tracking-[-0.02em] md:text-[44px] md:leading-[52px]">
          How can we help you stream?
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#cdc2d8]">
          Search answers about subscriptions, the 24-hour trial, supported
          devices, setup and internet requirements.
        </p>

        <label className="relative mx-auto mt-7 block max-w-2xl">
          <span className="sr-only">Search frequently asked questions</span>
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#968da1]" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search setup, devices, subscription plans..."
            className="min-h-14 w-full rounded-full border border-white/[0.06] bg-[#181b27]/90 pl-14 pr-5 text-sm text-white placeholder:text-[#968da1] shadow-[0_0_30px_rgba(139,61,255,0.08)] focus:border-[#8b3dff] focus:ring-2 focus:ring-[#8b3dff]/30"
          />
        </label>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <section className="lg:col-span-8">
          <div
            role="toolbar"
            aria-label="FAQ categories"
            className="flex flex-wrap gap-2"
          >
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={category === item.id}
                onClick={() => setCategory(item.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  category === item.id
                    ? "bg-gradient-to-r from-[#8b3dff] to-[#046ef1] text-white"
                    : "bg-[#181b27]/80 text-[#cdc2d8] hover:bg-[#272936] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-2">
            {visibleFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-transparent bg-[#181b27]/80 shadow-sm transition open:border-[#8b3dff]/30 open:bg-[#1c1f2b]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-heading text-lg font-semibold">
                  {faq.question}
                  <span className="shrink-0 text-[#968da1] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-7 text-[#cdc2d8]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {visibleFaqs.length === 0 && (
            <div className="mt-5 rounded-[2rem] bg-[#181b27]/80 p-8 text-center">
              <p className="font-heading text-xl font-bold">
                No answers match your search
              </p>
              <p className="mt-2 text-sm text-[#cdc2d8]">
                Try another keyword or contact Golden IPTV through WhatsApp.
              </p>
            </div>
          )}
        </section>

        <aside className="space-y-4 lg:col-span-4">
          <div className="rounded-[2rem] bg-[#181b27]/85 p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8b3dff]/15">
                <MonitorSmartphone className="h-6 w-6 text-[#d4bbff]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#afc6ff]">
                8 guide routes
              </span>
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold">Setup Hub</h2>
            <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
              Open practical installation, buffering, internet speed and
              supported-device guides.
            </p>
            <Link
              href="/guides/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#afc6ff] hover:text-white"
            >
              Open Setup Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-b from-[#181b27] to-[#14213d] p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#046ef1]/15">
              <Headphones className="h-6 w-6 text-[#afc6ff]" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold">
              Contact Support
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#cdc2d8]">
              Use the real Golden IPTV contact route for plan, device or setup
              questions.
            </p>
            <Link
              href="/contact/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#afc6ff] hover:text-white"
            >
              View support options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
