"use client";

import { ArrowUpRight, BookOpen, Check, Gauge, MonitorSmartphone, Search, Wrench, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const categories = [
  { id: "all", label: "All Guides" },
  { id: "devices", label: "Devices" },
  { id: "installation", label: "Installation" },
  { id: "network", label: "Troubleshooting & Network" },
] as const;

type CategoryFilter = (typeof categories)[number]["id"];
export type EditorialGuide = {
  title: string;
  description: string;
  href: string;
  type: "Installation" | "Troubleshooting" | "Network";
  category: "installation" | "network";
  featured: boolean;
};

const guideIcons = { Installation: BookOpen, Troubleshooting: Wrench, Network: Gauge, Device: MonitorSmartphone };
const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

export default function SetupHubGrid({ editorialGuides }: { editorialGuides: readonly EditorialGuide[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const searchRef = useRef<HTMLInputElement>(null);
  const guides = [
    ...editorialGuides,
    ...DEVICES.map((device) => ({
      title: device.name,
      description: device.description,
      href: device.href,
      type: "Device" as const,
      category: "devices" as const,
      featured: false,
    })),
  ];
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGuides = guides.filter((guide) =>
    (category === "all" || guide.category === category) &&
    [guide.title, guide.description, guide.type].join(" ").toLowerCase().includes(normalizedQuery),
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
      <div className="mt-8">
        <label htmlFor="guide-search" className="block text-sm font-semibold">Find a guide for your device or question</label>
        <div className="mt-3 flex max-w-3xl flex-col gap-3 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#BDBDC5]" />
            <input ref={searchRef} id="guide-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a device, topic or guide type" aria-controls="guide-results" className={`min-h-14 w-full min-w-0 rounded-md border border-white/30 bg-[#151111] py-3 pl-12 pr-4 text-base text-[#EEEBDD] placeholder:text-[#A6A0A5] ${focusStyle}`} />
          </div>
          <button type="button" onClick={clearSearch} disabled={!query} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/5 disabled:cursor-default disabled:opacity-50 ${focusStyle}`}><X aria-hidden="true" className="h-4 w-4" /> Clear Search</button>
        </div>
      </div>

      <div role="group" aria-label="Filter guides by category" className="mt-6 flex flex-wrap gap-2">
        {categories.map((item) => {
          const active = category === item.id;
          const count = item.id === "all" ? guides.length : guides.filter((guide) => guide.category === item.id).length;
          return (
            <button key={item.id} type="button" aria-pressed={active} aria-controls="guide-results" onClick={() => setCategory(item.id)}
              className={`inline-flex min-h-11 max-w-full items-center gap-2 rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors motion-reduce:transition-none ${focusStyle} ${active ? "border-[#CE1212] bg-[#CE1212] text-white" : "border-white/20 text-[#BDBDC5] hover:border-white/50 hover:text-[#EEEBDD]"}`}>
              {active && <Check aria-hidden="true" className="h-4 w-4 shrink-0" />}
              <span className="min-w-0">{item.label}</span>
              <span className="shrink-0 text-xs">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="my-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
        <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-[#BDBDC5]">Showing {visibleGuides.length} of {guides.length} guides</p>
        <button type="button" onClick={resetFilters} disabled={!hasFilters} className={`min-h-11 rounded-sm px-1 text-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white disabled:cursor-default disabled:opacity-50 ${focusStyle}`}>Reset Filters</button>
      </div>

      <ul id="guide-results" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleGuides.map((guide) => {
          const Icon = guideIcons[guide.type];
          return (
            <li key={guide.href} className={`min-w-0 ${guide.featured ? "sm:col-span-2" : ""}`}>
              <Link href={guide.href} className={`group flex h-full min-h-64 flex-col rounded-lg border p-6 transition-colors hover:border-[#CE1212]/80 motion-reduce:transition-none ${focusStyle} ${guide.featured ? "border-[#824141] bg-[#2A1416] md:p-8" : "border-white/15 bg-[#151313]"}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#BDBDC5]"><Icon aria-hidden="true" className="h-5 w-5 shrink-0" />{guide.type}</span>
                  {guide.featured && <span className="border-l-2 border-[#CE1212] pl-3 text-xs font-semibold uppercase tracking-[0.14em]">Start here</span>}
                </div>
                <h3 className={`mt-6 font-heading font-medium leading-tight tracking-tight ${guide.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>{guide.title}</h3>
                <p className="mt-3 max-w-xl flex-1 text-sm leading-7 text-[#BDBDC5]">{guide.description}</p>
                <span className="mt-7 flex min-h-11 items-center justify-between gap-3 border-t border-white/15 pt-4 text-sm font-semibold">Open guide <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" /></span>
              </Link>
            </li>
          );
        })}
      </ul>
      {visibleGuides.length === 0 && (
        <div className="border-y border-white/20 bg-[#1C1415] px-5 py-10 sm:px-8">
          <h3 className="font-heading text-2xl font-medium">Let’s find another starting point.</h3>
          <p className="mt-3 text-sm leading-7 text-[#BDBDC5]">Try a device name or a broader topic. Reset your filters to see every guide, or ask our team for help.</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <button type="button" onClick={resetFilters} className={`min-h-11 rounded-md bg-[#CE1212] px-5 py-3 text-sm font-bold text-white hover:bg-[#a90e0e] ${focusStyle}`}>Reset Filters</button>
            <Link href="/contact/" className={`inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 ${focusStyle}`}>Contact Support <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </>
  );
}
