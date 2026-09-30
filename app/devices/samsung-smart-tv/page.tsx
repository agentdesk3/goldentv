import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";

export const metadata: Metadata = {
  title: "IPTV on Samsung Smart TV | Setup Guide | Golden IPTV",
  description:
    "Learn how to set up IPTV on a Samsung Smart TV with Golden IPTV. Check compatibility, follow the setup steps and start watching on your Samsung TV.",
  alternates: {
    canonical: "https://goldeniptv.co.za/devices/samsung-smart-tv/",
  },
};

export default function SamsungSmartTvPage() {
  return <DeviceGuide device="samsung" />;
}

