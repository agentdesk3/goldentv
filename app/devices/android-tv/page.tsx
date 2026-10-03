import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV on Android TV: Setup Guide",
  description:
    "Learn how to set up Golden IPTV on Android TV, check internet requirements and troubleshoot common streaming problems.",
  url: "https://www.goldeniptv.co.za/devices/android-tv/",
  image: "/images/home/device-android-tv.webp",
  imageAlt: "Golden IPTV setup guide for Android TV",
});

export default function AndroidTvPage() {
  return <DeviceGuide device="android" />;
}
