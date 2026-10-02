import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV on LG Smart TV: Setup Guide",
  description:
    "Learn how to set up Golden IPTV on a compatible LG Smart TV, check app availability and troubleshoot common streaming issues.",
  url: "https://goldeniptv.co.za/devices/lg-smart-tv/",
  image: "/images/home/device-lg-smart-tv.webp",
  imageAlt: "Golden IPTV setup guide for LG Smart TV",
});

export default function LgSmartTvPage() {
  return <DeviceGuide device="lg" />;
}
