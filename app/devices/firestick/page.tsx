import type { Metadata } from "next";

import DeviceGuide from "@/app/components/device-guide";

export const metadata: Metadata = {
  title: "IPTV on Firestick | Fire TV IPTV Setup Guide | Golden IPTV",
  description:
    "Learn how to set up IPTV on Firestick and Fire TV. Follow a simple setup guide, check internet requirements and troubleshoot common IPTV streaming problems.",
  alternates: {
    canonical: "https://goldeniptv.co.za/devices/firestick/",
  },
};

export default function FirestickPage() {
  return <DeviceGuide device="firestick" />;
}
