"use client";

import { ArrowUpRight, BookOpen, Check, Headphones, Minus, Plus, Search, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "trial", label: "Free Trial" },
  { id: "plans", label: "Plans" },
  { id: "devices", label: "Devices" },
  { id: "setup", label: "Setup" },
] as const;

type CategoryFilter = (typeof categories)[number]["id"];
export type FaqCategory = Exclude<CategoryFilter, "all">;
export type FaqItem = { question: string; answer: string; category: FaqCategory };

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

export default function FaqExplorer({ faqs }: { faqs: readonly FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const searchRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = query.trim().toLowerCase();
  const visibleFaqs = faqs.filter((faq) =>
    (category === "all" || faq.category === category) &&
    `${faq.question} ${faq.answer}`.toLowerCase().includes(normalizedQuery),
  );
  const hasFilters = query.length > 0 || category !== "all";

  function clearSearch() {
    setQuery("");
    searchRef.current?.focus();
  }

  function resetFilters() {
    setQuery("");
    setCategory("all");
    searchRef.current?.focus();
  }

  return (
    <>
      <div className="border-y border-white/20 bg-[#211617] px-5 py-7 sm:px-8">
        <label htmlFor="faq-search" className="block font-heading text-xl font-medium text-[#EEEBDD]">What would you like to know?</label>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#BDBDC5]" />
            <input
              ref={searchRef}
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions and answers"
              aria-controls="faq-results"
              aria-describedby="faq-search-help"
              className={`min-h-14 w-full min-w-0 rounded-md border border-white/30 bg-[#100E0E] py-3 pl-12 pr-4 text-base text-[#EEEBDD] placeholder:text-[#A6A0A5] ${focusStyle}`}
            />
          </div>
          <button type="button" onClick={clearSearch} disabled={!query} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/5 disabled:cursor-default disabled:opacity-50 ${focusStyle}`}>
            <X aria-hidden="true" className="h-4 w-4" /> Clear Search
          </button>
        </div>
        <p id="faq-search-help" className="mt-3 text-xs leading-6 text-[#BDBDC5]">Search by a topic or phrase, then narrow the library by category.</p>
      </div>

      <div className="grid items-start gap-8 py-10 xl:grid-cols-[180px_minmax(0,1fr)_240px] xl:gap-10">
        <div role="group" aria-label="FAQ categories" className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#BDBDC5]">Browse the library</p>
          <div className="flex flex-wrap gap-2 xl:flex-col">
            {categories.map((item) => {
              const active = category === item.id;
              return (
                <button key={item.id} type="button" aria-pressed={active} aria-controls="faq-results" onClick={() => setCategory(item.id)}
                  className={`inline-flex min-h-11 items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors motion-reduce:transition-none ${focusStyle} ${active
                    ? "border-[#CE1212] bg-[#CE1212] text-white"
                    : "border-white/20 text-[#BDBDC5] hover:border-white/50 hover:text-[#EEEBDD]"}`}>
                  {item.label}
                  {active && <Check aria-hidden="true" className="h-4 w-4 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        <section aria-labelledby="faq-results-heading" className="min-w-0">
          <h2 id="faq-results-heading" className="sr-only">Frequently asked questions</h2>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-[#BDBDC5]">{visibleFaqs.length} of {faqs.length} answers</p>
            <button type="button" onClick={resetFilters} disabled={!hasFilters} className={`min-h-11 rounded-sm px-1 text-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white disabled:cursor-default disabled:opacity-50 ${focusStyle}`}>Reset Filters</button>
          </div>
          <div id="faq-results" className="space-y-3">
            {visibleFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-md border border-white/15 bg-[#151313] open:border-[#824141] open:bg-[#241718]">
                <summary className={`flex min-h-16 cursor-pointer list-none items-start justify-between gap-4 rounded-md px-5 py-5 text-left font-heading text-lg font-medium leading-7 [&::-webkit-details-marker]:hidden sm:px-6 ${focusStyle}`}>
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-1 shrink-0 text-[#BDBDC5]">
                    <Plus className="h-5 w-5 group-open:hidden" />
                    <Minus className="hidden h-5 w-5 group-open:block" />
                  </span>
                </summary>
                <p className="mx-5 border-t border-white/15 pb-6 pt-5 text-sm leading-8 text-[#BDBDC5] sm:mx-6">{faq.answer}</p>
              </details>
            ))}
            {visibleFaqs.length === 0 && (
              <div className="border-y border-white/20 bg-[#171313] px-5 py-10 sm:px-6">
                <h3 className="font-heading text-2xl font-medium">No answers found.</h3>
                <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Try fewer words or another category. Reset your filters to browse every answer, or ask our team for help.</p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <button type="button" onClick={resetFilters} className={`min-h-11 rounded-md bg-[#CE1212] px-5 py-3 text-sm font-bold text-white hover:bg-[#a90e0e] ${focusStyle}`}>Reset Filters</button>
                  <Link href="/contact/" className={`inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 ${focusStyle}`}>Contact Support <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
                </div>
              </div>
            )}
          </div>
        </section>

        <aside aria-labelledby="faq-help-heading" className="min-w-0 border-t border-white/20 pt-6 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0">
          <h2 id="faq-help-heading" className="font-heading text-2xl font-medium">A little more guidance.</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-1">
            <div>
              <BookOpen aria-hidden="true" className="h-5 w-5 text-[#BDBDC5]" />
              <h3 className="mt-4 font-heading text-xl font-medium">Setup Hub</h3>
              <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Explore installation, buffering, internet speed and device-specific guides at your own pace.</p>
              <Link href="/guides/" className={`mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-8 ${focusStyle}`}>Open Setup Hub <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
            </div>
            <div>
              <Headphones aria-hidden="true" className="h-5 w-5 text-[#BDBDC5]" />
              <h3 className="mt-4 font-heading text-xl font-medium">Contact Support</h3>
              <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Have a question about your plan, device or setup? Share the details with the Golden IPTV team.</p>
              <Link href="/contact/" className={`mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-8 ${focusStyle}`}>View support options <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
