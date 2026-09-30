import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";

export const metadata: Metadata = {
  title: "IPTV on Android TV | Android TV IPTV Setup Guide | Golden IPTV",
  description:
    "Learn how to set up IPTV on Android TV. Follow a practical IPTV setup guide, check internet requirements and troubleshoot common Android TV streaming problems.",
  alternates: {
    canonical: "https://goldeniptv.co.za/devices/android-tv/",
  },
};

export default function AndroidTvPage() {
  return <DeviceGuide device="android" />;
}
