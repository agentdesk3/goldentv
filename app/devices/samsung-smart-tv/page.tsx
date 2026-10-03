import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV on Samsung Smart TV: Setup Guide",
  description:
    "Learn how to set up Golden IPTV on a compatible Samsung Smart TV, check app availability and follow practical setup steps.",
  url: "https://www.goldeniptv.co.za/devices/samsung-smart-tv/",
  image: "/images/home/device-samsung-smart-tv.webp",
  imageAlt: "Golden IPTV setup guide for Samsung Smart TV",
});

export default function SamsungSmartTvPage() {
  return <DeviceGuide device="samsung" />;
}

