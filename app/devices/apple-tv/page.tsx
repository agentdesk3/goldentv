import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";

export const metadata: Metadata = {
  title: "IPTV on Apple TV | Apple TV IPTV Setup Guide | Golden IPTV",
  description:
    "Learn how to set up IPTV on Apple TV. Follow a practical setup guide, check internet requirements and troubleshoot common IPTV streaming problems.",
  alternates: {
    canonical: "https://goldeniptv.co.za/devices/apple-tv/",
  },
};

export default function AppleTvPage() {
  return <DeviceGuide device="apple" />;
}