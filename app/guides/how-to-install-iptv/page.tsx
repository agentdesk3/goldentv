import type { Metadata } from "next";

import EditorialGuide from "@/app/components/editorial-guide";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "How to Install IPTV: Setup Guide",
  description:
    "Learn how to install and set up IPTV on compatible Smart TVs, Firestick, Android TV, Apple TV and other streaming devices.",
  url: "https://goldeniptv.co.za/guides/how-to-install-iptv/",
  image: "/images/home/guide-installation.webp",
  imageAlt: "Golden IPTV installation guide",
});

const requirements = [
  {
    title: "Compatible device",
    description:
      "A device that can run a compatible IPTV application, such as a Smart TV, streaming device or TV box.",
  },
  {
    title: "Internet connection",
    description: "A stable internet connection is required for streaming.",
  },
  {
    title: "Compatible application",
    description:
      "An application capable of connecting to IPTV services on your chosen device.",
  },
  {
    title: "Subscription or trial",
    description:
      "An active IPTV subscription or the Golden IPTV 24-hour free trial.",
  },
  {
    title: "Setup information",
    description:
      "The login or configuration details supplied with your subscription or trial.",
  },
] as const;

const steps = [
  {
    title: "Choose a compatible device",
    detail:
      "Select a device that supports IPTV applications. Common options include Smart TVs, streaming sticks and TV boxes.",
  },
  {
    title: "Connect the device to the internet",
    detail:
      "Ensure the device has an active connection through Wi-Fi or wired Ethernet.",
  },
  {
    title: "Find a compatible IPTV application",
    detail:
      "Browse the device's application store or supported applications to find an option that works with your service.",
  },
  {
    title: "Install the application",
    detail:
      "Download and install the application from the device's app store or another trusted source supported by the device.",
  },
  {
    title: "Open the application",
    detail: "Launch the installed application to begin the setup process.",
  },
  {
    title: "Enter the supplied setup information",
    detail:
      "Input the credentials, server details or configuration information supplied with your subscription or trial.",
  },
  {
    title: "Complete the application setup",
    detail:
      "Follow the application's on-screen instructions to connect it to the IPTV service.",
  },
  {
    title: "Test playback and connection",
    detail:
      "Play a channel or video to confirm that the application and connection work correctly.",
  },
  {
    title: "Troubleshoot if necessary",
    detail:
      "If playback is interrupted, check your internet connection, restart the application and use the buffering guide.",
  },
] as const;

const faqs = [
  {
    question: "How do I install IPTV?",
    answer:
      "Choose a compatible device, connect it to the internet, install a compatible IPTV application and enter the setup information supplied with your subscription or trial.",
  },
  {
    question: "What device do I need?",
    answer:
      "Smart TVs, streaming sticks and TV boxes may work when they support a compatible application. Use the device directory for the listed Golden IPTV guides.",
  },
  {
    question: "Do I need an internet connection?",
    answer:
      "Yes. IPTV streams content over the internet, so a stable connection is required.",
  },
  {
    question: "What should I do if playback buffers?",
    answer:
      "Open the IPTV buffering guide for common causes and practical troubleshooting steps.",
  },
] as const;

export default function HowToInstallIptvPage() {
  return (
    <EditorialGuide
      category="Installation"
      title="How to Install IPTV"
      summary="Follow the general setup process for a compatible television or streaming device without relying on device-specific codes or invented credentials."
      steps={steps}
      highlights={requirements}
      faqs={faqs}
      showTrialLink
    />
  );
}
