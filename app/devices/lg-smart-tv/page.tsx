import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";

export const metadata: Metadata = {
  title: "IPTV on LG Smart TV | Setup Guide | Golden IPTV",
  description:
    "Learn how to set up IPTV on an LG Smart TV with Golden IPTV. Check compatibility, follow the setup steps and troubleshoot common IPTV issues on LG TVs.",
  alternates: {
    canonical: "https://goldeniptv.co.za/devices/lg-smart-tv/",
  },
};

export default function LgSmartTvPage() {
  return <DeviceGuide device="lg" />;
}
