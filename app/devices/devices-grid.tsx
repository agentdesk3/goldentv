"use client";

import { ArrowUpRight, Check, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const filters = [
  { id: "all", label: "All devices" },
  { id: "smart-tv", label: "Smart TVs" },
  { id: "streaming", label: "Streaming sticks" },
  { id: "apple", label: "Apple ecosystem" },
  { id: "android", label: "Android & Google TV" },
] as const;

type Filter = (typeof filters)[number]["id"];
type DeviceVisual = { image: string; category: Filter; label: string };

// Guide URLs are stable identifiers; unfamiliar devices still render safely.
const deviceVisuals: Partial<Record<string, DeviceVisual>> = {
  "/devices/samsung-smart-tv/": {
    image: "/images/home/device-samsung-smart-tv.webp",
    category: "smart-tv", label: "Smart TV",
  },
  "/devices/lg-smart-tv/": {
    image: "/images/home/device-lg-smart-tv.webp",
    category: "smart-tv", label: "Smart TV",
  },
  "/devices/firestick/": {
    image: "/images/home/device-fire-tv.webp",
    category: "streaming", label: "Streaming stick",
  },
  "/devices/android-tv/": {
    image: "/images/home/device-android-tv.webp",
    category: "android", label: "Android TV",
  },
  "/devices/apple-tv/": {
    image: "/images/home/device-apple-tv.webp",
    category: "apple", label: "Apple TV",
  },
};

const fallbackVisual: DeviceVisual = {
  image: "/images/pricing-device-cinematic.webp",
  category: "all", label: "Device setup",
};

export default function DevicesGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleDevices = DEVICES.filter((device) =>
    filter === "all" || (deviceVisuals[device.href] ?? fallbackVisual).category === filter,
  );

  return (
    <>
      <div role="group" aria-label="Filter device guides" className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = item.id === filter;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              aria-controls="setup-device-results"
              onClick={() => setFilter(item.id)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none motion-reduce:transition-none ${active
                ? "border-[#CE1212] bg-[#CE1212] text-white"
                : "border-white/20 bg-transparent text-[#BDBDC5] hover:border-white/50 hover:text-[#EEEBDD]"}`}
            >
              {active && <Check aria-hidden="true" className="h-4 w-4 shrink-0" />}
              {item.label}
            </button>
          );
        })}
      </div>

      <p role="status" aria-live="polite" aria-atomic="true" className="my-6 text-sm text-[#BDBDC5]">
        Showing {visibleDevices.length} of {DEVICES.length} device guides
      </p>

      <ul id="setup-device-results" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleDevices.map((device) => {
          const visual = deviceVisuals[device.href] ?? fallbackVisual;
          return (
            <li key={device.href} className="min-w-0">
              <Link
                href={device.href}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-[#171414] transition-colors hover:border-[#CE1212]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#101010]">
                  <Image
                    src={visual.image}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 420px, (min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover grayscale"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-sm border border-white/20 bg-black/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#EEEBDD]">
                    <Monitor aria-hidden="true" className="h-3.5 w-3.5" />
                    {visual.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-[#EEEBDD]">{device.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#BDBDC5]">{device.description}</p>
                  <span className="mt-7 flex min-h-11 items-center justify-between gap-4 border-t border-white/15 pt-4 text-sm font-bold text-[#EEEBDD]">
                    Open setup guide
                    <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {visibleDevices.length === 0 && (
        <p className="border-y border-white/15 py-8 text-[#BDBDC5]">No guides in this category. Select All devices to explore the directory.</p>
      )}
    </>
  );
}
