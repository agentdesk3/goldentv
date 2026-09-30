"use client";

import { ArrowRight, MonitorCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { DEVICES } from "@/app/iptv-south-africa/devices-data";

const deviceVisuals: Record<string, { image: string; category: string; label: string }> = {
  "Samsung Smart TV": {
    image: "/images/stitch/devices-01.webp",
    category: "smart-tv",
    label: "Smart TV",
  },
  "LG Smart TV": {
    image: "/images/stitch/devices-01.webp",
    category: "smart-tv",
    label: "Smart TV",
  },
  "Amazon Fire TV / Firestick": {
    image: "/images/stitch/devices-02.webp",
    category: "streaming",
    label: "Streaming stick",
  },
  "Android TV": {
    image: "/images/stitch/devices-04.webp",
    category: "android",
    label: "Android & Google TV",
  },
  "Apple TV": {
    image: "/images/stitch/devices-03.webp",
    category: "apple",
    label: "Apple ecosystem",
  },
};

const filters = [
  { id: "all", label: "All Devices" },
  { id: "smart-tv", label: "Smart TVs" },
  { id: "streaming", label: "Streaming Sticks" },
  { id: "apple", label: "Apple Ecosystem" },
  { id: "android", label: "Android & Google TV" },
] as const;

export default function DevicesGrid() {
  const [filter, setFilter] = useState("all");
  const visibleDevices = DEVICES.filter(
    (device) =>
      filter === "all" || deviceVisuals[device.name]?.category === filter,
  );

  return (
    <>
      <div
        role="toolbar"
        aria-label="Filter supported devices"
        className="mx-auto mt-7 flex max-w-fit flex-wrap justify-center gap-1 rounded-full bg-[#181b27]/80 p-1.5"
      >
        {filters.map((item) => {
          const active = item.id === filter;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                active
                  ? "bg-gradient-to-r from-[#8b3dff] to-[#046ef1] text-white shadow-[0_0_16px_rgba(139,61,255,0.35)]"
                  : "text-[#cdc2d8] hover:bg-[#272936] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleDevices.map((device) => {
          const visual = deviceVisuals[device.name];

          return (
            <article
              key={device.name}
              className="story-card group overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#181b27]/85 shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={visual.image}
                  alt={`Cinematic ${device.name} streaming setup`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={`story-media object-cover ${
                    device.name === "LG Smart TV" ? "object-right" : "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b27] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#0b0e19]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  <MonitorCheck className="h-3.5 w-3.5 text-[#d4bbff]" />
                  {visual.label}
                </span>
              </div>
              <div className="flex min-h-64 flex-col p-6">
                <h2 className="story-card-title font-heading text-2xl font-bold tracking-tight">
                  {device.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#cdc2d8]">
                  {device.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#272936] px-3 py-1 text-[10px] font-semibold text-[#c1c1ff]">
                    Setup guide
                  </span>
                  <span className="rounded-full bg-[#272936] px-3 py-1 text-[10px] font-semibold text-[#afc6ff]">
                    Golden IPTV
                  </span>
                </div>
                <Link
                  href={device.href}
                  className="story-card-action mt-5 inline-flex items-center justify-between gap-2 text-sm font-bold text-[#e0e1f2]"
                >
                  View setup guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
