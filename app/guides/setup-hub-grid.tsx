"use client";

import {
  ArrowRight,
  BookOpen,
  Flame,
  Gauge,
  MonitorSmartphone,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const editorialGuides = [
  {
    title: "How to Install IPTV",
    description:
      "General installation steps plus links to device-specific guidance.",
    href: "/guides/how-to-install-iptv/",
    type: "Installation",
    icon: BookOpen,
  },
  {
    title: "How to Fix IPTV Buffering",
    description:
      "Practical checks for internet, Wi-Fi, device and playback problems.",
    href: "/guides/iptv-buffering/",
    type: "Troubleshooting",
    icon: Flame,
  },
  {
    title: "Internet Speed for IPTV",
    description:
      "Understand how connection speed and network conditions affect streaming.",
    href: "/guides/internet-speed-for-iptv/",
    type: "Network",
    icon: Gauge,
  },
] as const;

const guides = [
  ...editorialGuides,
  ...DEVICES.map((device) => ({
    title: device.name,
    description: device.description,
    href: device.href,
    type: "Device",
    icon: MonitorSmartphone,
  })),
];

export default function SetupHubGrid() {
  const [query, setQuery] = useState("");
  const visibleGuides = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return guides;

    return guides.filter((guide) =>
      [guide.title, guide.description, guide.type]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  return (
    <>
      <label className="relative mt-6 block max-w-xl">
        <span className="sr-only">Search setup guides</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#968da1]" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search TV, device or setup topic"
          className="min-h-12 w-full rounded-full border border-white/[0.06] bg-[#181b27]/80 pl-12 pr-4 text-sm text-[#e0e1f2] placeholder:text-[#968da1] backdrop-blur-lg transition focus:border-[#8b3dff] focus:ring-2 focus:ring-[#8b3dff]/30"
        />
      </label>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visibleGuides.map((guide, index) => {
          const Icon = guide.icon;
          const featured = index === 0 && query.length === 0;

          return (
            <article
              key={guide.href}
              className={`story-card group flex min-h-64 flex-col rounded-[2rem] border border-white/[0.06] bg-[#181b27]/80 p-6 shadow-xl ${
                featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4bbff]/10">
                  <Icon className="h-5 w-5 text-[#d4bbff]" />
                </span>
                <span className="rounded-full bg-[#272936] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#afc6ff]">
                  {guide.type}
                </span>
              </div>
              <h3 className="story-card-title mt-5 font-heading text-xl font-bold tracking-tight">
                {guide.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-[#cdc2d8]">
                {guide.description}
              </p>
              <Link
                href={guide.href}
                className="story-card-action mt-5 inline-flex items-center justify-between gap-2 text-sm font-bold"
              >
                Open guide <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>

      {visibleGuides.length === 0 && (
        <div className="mt-7 rounded-[2rem] border border-white/[0.06] bg-[#181b27]/75 p-8 text-center">
          <p className="font-heading text-xl font-bold">No matching guide</p>
          <p className="mt-2 text-sm text-[#cdc2d8]">
            Try a device name such as Samsung, LG, Firestick, Android or Apple.
          </p>
        </div>
      )}
    </>
  );
}
