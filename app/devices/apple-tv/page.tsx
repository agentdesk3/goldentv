import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV on Apple TV: Setup Guide",
  description:
    "Learn how to set up Golden IPTV on Apple TV, check internet requirements and troubleshoot common IPTV streaming problems.",
  url: "https://www.goldeniptv.co.za/devices/apple-tv/",
  image: "/images/home/device-apple-tv.webp",
  imageAlt: "Golden IPTV setup guide for Apple TV",
});

export default function AppleTvPage() {
  return <DeviceGuide device="apple" />;
}