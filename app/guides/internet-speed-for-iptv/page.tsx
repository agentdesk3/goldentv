import type { Metadata } from "next";

import EditorialGuide from "@/app/components/editorial-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Internet Speed for IPTV",
  description:
    "Learn about internet speed for IPTV, recommended speeds by quality, Wi-Fi performance, device usage and common connection issues.",
  url: "https://goldeniptv.co.za/guides/internet-speed-for-iptv/",
  image: "/images/home/guide-internet-speed.webp",
  imageAlt: "Internet speed guidance for IPTV streaming",
});

const speedRequirements = [
  { label: "Standard Definition (SD)", value: "Around 5 Mbps or more" },
  { label: "High Definition (HD)", value: "Around 10 Mbps or more" },
  { label: "Full HD", value: "Around 15 Mbps or more" },
  { label: "4K", value: "Around 25 Mbps or more" },
] as const;

const performanceTips = [
  {
    title: "Use Ethernet where practical",
    description:
      "A wired connection can provide more consistent performance than Wi-Fi.",
  },
  {
    title: "Position the router strategically",
    description:
      "Place the router in a central, open location and avoid hiding it behind furniture.",
  },
  {
    title: "Reduce simultaneous usage",
    description:
      "Pause large downloads or other streams to free bandwidth for playback.",
  },
  {
    title: "Restart the router when needed",
    description:
      "A restart may clear a temporary fault and refresh the connection.",
  },
  {
    title: "Keep devices and apps updated",
    description:
      "Install available updates for the streaming device and compatible application.",
  },
  {
    title: "Test another device",
    description:
      "Comparing devices helps determine whether a problem is device-specific.",
  },
] as const;

const steps = [
  {
    title: "Stop unnecessary downloads and streams",
    detail:
      "Close other applications using bandwidth to get a clearer reading of available speed.",
  },
  {
    title: "Test near the IPTV device",
    detail:
      "Run the test where the streaming device is normally used, especially when connected through Wi-Fi.",
  },
  {
    title: "Use a reputable speed test",
    detail:
      "Choose a well-known testing service to measure download speed and connection performance.",
  },
  {
    title: "Test at different times",
    detail:
      "Network performance can vary during busy periods, so compare results across the day.",
  },
  {
    title: "Compare the practical guidelines",
    detail:
      "Check whether measured download speeds align with the approximate range for the preferred quality.",
  },
  {
    title: "Compare Wi-Fi locations",
    detail:
      "Test close to the router and at the device location to understand the effect of signal quality.",
  },
] as const;

const faqs = [
  {
    question: "How much speed do I need for IPTV?",
    answer:
      "The practical guideline depends on stream quality, connected devices and network conditions. The reference table gives approximate starting points.",
  },
  {
    question: "Is 10 Mbps enough?",
    answer:
      "It may be enough for one HD stream in good conditions, but other network usage and connection stability also matter.",
  },
  {
    question: "Does Wi-Fi affect buffering?",
    answer:
      "Yes. Distance, walls, interference and congestion can reduce Wi-Fi quality even when the internet plan has enough headline speed.",
  },
  {
    question: "Is Ethernet better than Wi-Fi?",
    answer:
      "Ethernet can be more consistent because it avoids wireless interference, although strong Wi-Fi can work well for many setups.",
  },
] as const;

export default function InternetSpeedForIptvPage() {
  return (
    <EditorialGuide
      category="Network performance"
      title="Internet Speed for IPTV"
      summary="Measure the connection where your streaming device is used and consider stability, Wi-Fi quality, network congestion and simultaneous usage—not only headline speed."
      steps={steps}
      highlights={performanceTips}
      faqs={faqs}
      metrics={speedRequirements}
    />
  );
}
