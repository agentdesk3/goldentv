import type { Metadata } from "next";

import EditorialGuide from "@/app/components/editorial-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "How to Fix IPTV Buffering",
  description:
    "Troubleshoot IPTV buffering, check your connection, improve Wi-Fi performance and identify common device or network issues.",
  url: "https://www.goldeniptv.co.za/guides/iptv-buffering/",
  image: "/images/home/guide-buffering.webp",
  imageAlt: "IPTV buffering troubleshooting guide",
});

const causes = [
  {
    title: "Slow or unstable connection",
    description:
      "Internet speed or connection stability may not be sufficient for smooth streaming.",
  },
  {
    title: "Weak Wi-Fi signal",
    description:
      "Distance, walls or interference can reduce the signal reaching the streaming device.",
  },
  {
    title: "Network congestion",
    description:
      "High traffic on the home network or ISP network can affect performance.",
  },
  {
    title: "Multiple active devices",
    description:
      "Other streams and downloads reduce the bandwidth available for IPTV.",
  },
  {
    title: "Device performance",
    description:
      "Older devices or devices running many applications may struggle with playback.",
  },
  {
    title: "Application or router issues",
    description:
      "An application update, router setting or temporary network fault may affect playback.",
  },
] as const;

const steps = [
  {
    title: "Check other websites and streaming services",
    detail:
      "This helps determine whether the issue affects the overall internet connection or only IPTV playback.",
  },
  {
    title: "Restart the IPTV application",
    detail:
      "Close the application completely and reopen it to clear a temporary glitch.",
  },
  {
    title: "Restart the streaming device",
    detail:
      "Power the device off, wait briefly and turn it back on before testing again.",
  },
  {
    title: "Restart the router if appropriate",
    detail:
      "Unplug the router for about 30 seconds, reconnect it and wait for the internet connection to return.",
  },
  {
    title: "Check Wi-Fi signal strength",
    detail:
      "Move closer to the router or test a wired Ethernet connection where practical.",
  },
  {
    title: "Reduce other network activity",
    detail:
      "Pause downloads and other streams temporarily to see whether playback improves.",
  },
  {
    title: "Test a more stable connection",
    detail:
      "Use Ethernet or another reliable network to determine whether the issue is network-related.",
  },
  {
    title: "Check for application updates",
    detail:
      "Install available updates for the IPTV application and streaming device.",
  },
  {
    title: "Verify the supplied setup details",
    detail:
      "Confirm that the credentials or configuration information were entered exactly as supplied.",
  },
  {
    title: "Test after each major change",
    detail:
      "Checking playback after each step helps identify which change affected the issue.",
  },
] as const;

const faqs = [
  {
    question: "Why does IPTV keep buffering?",
    answer:
      "Possible causes include an unstable internet connection, weak Wi-Fi, network congestion, device performance or application issues.",
  },
  {
    question: "Can Wi-Fi cause buffering?",
    answer:
      "Yes. Distance from the router, walls, interference and network congestion can all affect Wi-Fi quality.",
  },
  {
    question: "Can restarting the router help?",
    answer:
      "A router restart can resolve some temporary network issues, although it will not fix every possible cause.",
  },
  {
    question: "When should I contact support?",
    answer:
      "Contact support if supplied setup details appear incorrect, the application cannot connect on a working network, or the issue continues after basic troubleshooting.",
  },
] as const;

export default function IptvBufferingPage() {
  return (
    <EditorialGuide
      category="Troubleshooting"
      title="How to Fix IPTV Buffering"
      summary="Work through practical checks for the connection, Wi-Fi network, streaming device and application, testing playback after each major change."
      steps={steps}
      highlights={causes}
      faqs={faqs}
    />
  );
}
