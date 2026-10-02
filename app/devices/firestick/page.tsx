import type { Metadata } from "next";
import Link from "next/link";
import Faq from "../../iptv-south-africa/faq";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV on Firestick: Setup Guide",
  description:
    "Learn how to set up Golden IPTV on Firestick and Fire TV, check internet requirements and troubleshoot common streaming problems.",
  url: "https://goldeniptv.co.za/devices/firestick/",
  image: "/images/home/device-fire-tv.webp",
  imageAlt: "Golden IPTV setup guide for Firestick and Fire TV",
});

const REQUIREMENTS = [
  { item: "Compatible Fire TV or Firestick device", detail: "A Fire TV Stick, Fire TV Stick 4K, or other Fire TV device." },
  { item: "Television with appropriate input", detail: "An HDMI port on your TV for connecting the Firestick." },
  { item: "Reliable internet connection", detail: "A stable connection for streaming content." },
  { item: "Compatible IPTV application", detail: "An app that works with your Fire TV device and IPTV service." },
  { item: "Active IPTV subscription or trial", detail: "A Golden IPTV subscription or the available 24-hour free trial." },
  { item: "Fire TV remote", detail: "The remote included with your Fire TV device for navigation." },
  { item: "Available device storage where required", detail: "Some devices need free storage space for app installation." },
] as const;

const SETUP_STEPS = [
  { step: "Connect the Firestick or Fire TV device to the television.", detail: "Plug the device into an available HDMI port on your TV." },
  { step: "Connect the device to power.", detail: "Use the included power adapter and connect to a wall outlet for reliable operation." },
  { step: "Connect Firestick to Wi-Fi or another supported network.", detail: "Follow the on-screen prompts to connect to your home network." },
  { step: "Complete the Fire TV initial setup if necessary.", detail: "If this is a new device, follow the on-screen instructions to complete setup." },
  { step: "Open the application/store area.", detail: "Navigate to the section where you can search for and install applications." },
  { step: "Find a compatible IPTV application.", detail: "Search for an IPTV app that works with your Fire TV device and service." },
  { step: "Install and open the application.", detail: "Download the app to your device, then open it when installation is complete." },
  { step: "Follow the application's setup instructions.", detail: "Each IPTV application has its own configuration process." },
  { step: "Enter the subscription information provided by the IPTV service.", detail: "Input your credentials or configuration details exactly as provided." },
  { step: "Save the configuration and test playback.", detail: "Confirm your settings and try playing a channel to verify the setup works." },
] as const;

const TROUBLESHOOTING: readonly { title: string; description: string; linkHref?: string; linkText?: string }[] = [
  { title: "IPTV application not opening", description: "Try closing and reopening the app. If it still does not open, restart your Firestick by going to Settings > My Fire TV > Restart, then try again." },
  { title: "Buffering during playback", description: "Buffering is often related to internet speed or Wi-Fi signal quality. Check your connection and see our ", linkHref: "/guides/iptv-buffering/", linkText: "IPTV buffering guide" },
  { title: "Playback stopping unexpectedly", description: "This can be caused by network interruptions or app issues. Restart the app and your device, and check for updates." },
  { title: "Application freezing", description: "Freezing may result from device performance issues. Close other apps, restart your Firestick, and check available storage." },
  { title: "Login or configuration issues", description: "Double-check that all credentials and settings were entered exactly as provided. Pay attention to spelling, spaces, and special characters." },
  { title: "Weak Wi-Fi signal", description: "If your Firestick is far from the router or behind the TV, the Wi-Fi signal may be weak. Consider repositioning the router, using an HDMI extender, or a network adapter." },
  { title: "Firestick running slowly", description: "Restart the device, close unused apps, and check for system updates. Low storage can also affect performance." },
  { title: "Insufficient storage", description: "Remove unused applications to free up space. Go to Settings > Applications > Manage Installed Applications to uninstall apps you do not need." },
  { title: "Application or device needs updating", description: "Check for updates to the IPTV app and the Fire TV system software. Outdated software can cause compatibility and performance issues." },
];

const PERFORMANCE_TIPS: readonly { tip: string; detail: string }[] = [
  { tip: "Keep your Fire TV device updated", detail: "Install system updates when available to maintain performance and compatibility." },
  { tip: "Manage storage", detail: "Remove unused applications to keep sufficient free space on your device." },
  { tip: "Restart the device periodically", detail: "A periodic restart can help clear temporary issues and maintain performance." },
  { tip: "Maintain a stable Wi-Fi signal", detail: "Position your Firestick where it can receive a reliable wireless signal from your router." },
  { tip: "Reduce unnecessary network usage", detail: "Pause downloads and other streams when watching IPTV to free up bandwidth." },
  { tip: "Position the device for good wireless reception", detail: "If the Firestick is behind the TV, consider using the included HDMI extender to improve Wi-Fi reception." },
  { tip: "Test other streaming services", detail: "If problems occur, check whether other apps also have issues to help determine if the problem is with IPTV or your connection." },
];

const OTHER_DEVICES = [
  { name: "Samsung Smart TV", href: "/devices/samsung-smart-tv/" },
  { name: "LG Smart TV", href: "/devices/lg-smart-tv/" },
  { name: "Android TV", href: "/devices/android-tv/" },
  { name: "Apple TV", href: "/devices/apple-tv/" },
] as const;

const FAQS = [
  { question: "Can I use IPTV on Firestick?", answer: "Many Fire TV and Firestick devices can support IPTV through a compatible application. Availability and performance depend on your specific device model, the application you choose, and your internet connection." },
  { question: "How do I install IPTV on Firestick?", answer: "Connect your Firestick to your TV and internet, open the app store area, search for a compatible IPTV application, install it, then open the app and enter your subscription details. Follow the setup steps on this page for more detail." },
  { question: "Do I need a separate IPTV application?", answer: "Yes, an IPTV application is generally required to stream IPTV on Firestick. The exact application depends on your preferences and what is available on your device." },
  { question: "Does IPTV work over Firestick Wi-Fi?", answer: "Yes, IPTV can work over Wi-Fi on Firestick devices. Performance depends on your Wi-Fi signal strength, distance from the router, and network congestion. A strong Wi-Fi signal or Ethernet adapter can help improve stability." },
  { question: "Is Ethernet better than Wi-Fi for Firestick?", answer: "Ethernet can provide a more consistent connection than Wi-Fi, which may reduce buffering. Some Fire TV devices support Ethernet adapters. However, Wi-Fi works well for many users when the signal is strong." },
  { question: "Why is IPTV buffering on my Firestick?", answer: "Buffering can be caused by several factors including internet speed, Wi-Fi signal quality, network congestion, device performance, or application issues. See our IPTV buffering guide for troubleshooting steps." },
  { question: "What should I do if my IPTV application stops working?", answer: "Try closing and reopening the app, restarting your Firestick, checking for app and system updates, and verifying your internet connection. If problems continue, confirm your subscription details are correct." },
] as const;
const firestickStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://goldeniptv.co.za/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Devices",
        item: "https://goldeniptv.co.za/devices/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Firestick",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "IPTV on Firestick",
    description:
      "Set up IPTV on a compatible Amazon Fire TV or Firestick device.",
    step: SETUP_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.step,
      text: step.detail,
    })),
  },
] as const;

export default function FirestickPage() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(firestickStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-black/[.08] dark:border-white/[.145]">
        <ol className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400 sm:px-8">
          <li><Link href="/" className="hover:text-foreground hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/devices/" className="hover:text-foreground hover:underline">Devices</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-foreground">Firestick</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-black/[.08] px-6 py-16 sm:px-8 sm:py-24 dark:border-white/[.145]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">IPTV on Firestick</h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Set up IPTV on your Fire TV Stick or Fire TV device. This guide covers compatibility, setup steps, internet requirements, and troubleshooting for Firestick IPTV streaming.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="/iptv-free-trial/">Start 24-Hour Free Trial</PrimaryButton>
            <SecondaryButton href="/guides/how-to-install-iptv/">How to Install IPTV</SecondaryButton>
          </div>
        </div>
      </section>

      {/* What is IPTV on Firestick */}
      <section className="px-6 py-16 sm:px-8 sm:py-20" aria-labelledby="what-is-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h2 id="what-is-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">IPTV on Firestick</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            IPTV (Internet Protocol Television) delivers television content over the internet instead of through traditional broadcast or cable systems. This allows you to stream live channels and on-demand content directly to compatible devices.
          </p>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Fire TV devices, including Firestick and Fire TV Stick 4K, can be used for IPTV streaming when the device, application, and IPTV service are compatible. A suitable IPTV application is typically required to receive and play the content on your Fire TV device.
          </p>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Application availability and exact setup procedures can vary. Users should follow the setup instructions provided by their chosen application. Golden IPTV provides the subscription service, while the application handles the streaming interface on your device.
          </p>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-zinc-50 px-6 py-16 sm:px-8 sm:py-20 dark:bg-zinc-950" aria-labelledby="requirements-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h2 id="requirements-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">What You Need</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Before setting up IPTV on your Firestick, make sure you have everything required:
          </p>
          <ul className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {REQUIREMENTS.map((req) => (
              <li key={req.item} className="flex flex-col gap-1 rounded-2xl border border-black/[.08] bg-background p-5 dark:border-white/[.145]">
                <span className="font-semibold">{req.item}</span>
                <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{req.detail}</span>
              </li>
            ))}
          </ul>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            For guidance on internet requirements, see our guide on{" "}
            <Link href="/guides/internet-speed-for-iptv/" className="font-medium text-foreground underline underline-offset-4 hover:no-underline">
              internet speed for IPTV
            </Link>.
          </p>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="px-6 py-16 sm:px-8 sm:py-20" aria-labelledby="setup-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h2 id="setup-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">How to Set Up IPTV on Firestick</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Follow these general steps to set up IPTV on your Fire TV device. The exact interface may vary depending on your Firestick model and software version.
          </p>
          <ol className="flex flex-col gap-6">
            {SETUP_STEPS.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold dark:bg-zinc-800">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{item.step}</span>
                  <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Internet Speed and Connection */}
      <section className="bg-zinc-50 px-6 py-16 sm:px-8 sm:py-20 dark:bg-zinc-950" aria-labelledby="internet-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h2 id="internet-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Internet Speed and Connection</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Your internet connection is important for IPTV streaming quality. Firestick devices typically connect via Wi-Fi, though some models support Ethernet adapters for a wired connection.
          </p>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Wi-Fi performance depends on distance from your router, walls and obstacles, interference from other wireless devices, and how many devices are sharing your network. A weak Wi-Fi signal can cause buffering even if your advertised internet speed is high.
          </p>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Connection stability matters as much as speed. A fast but unstable connection can cause more buffering than a slower but consistent one. When multiple devices use your network simultaneously, available bandwidth for IPTV is reduced.
          </p>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            For more information, see our guides on{" "}
            <Link href="/guides/internet-speed-for-iptv/" className="font-medium text-foreground underline underline-offset-4 hover:no-underline">
              internet speed for IPTV
            </Link>{" "}
            and{" "}
            <Link href="/guides/iptv-buffering/" className="font-medium text-foreground underline underline-offset-4 hover:no-underline">
              IPTV buffering
            </Link>.
          </p>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="px-6 py-16 sm:px-8 sm:py-20" aria-labelledby="troubleshooting-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h2 id="troubleshooting-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Common Firestick IPTV Problems</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            If you experience issues with IPTV on your Firestick, these troubleshooting tips may help:
          </p>
          <ul className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {TROUBLESHOOTING.map((item) => (
              <li key={item.title} className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]">
                <span className="font-semibold">{item.title}</span>
                <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                  {item.linkHref && (
                    <>
                      {" "}
                      <Link href={item.linkHref} className="font-medium text-foreground underline underline-offset-4 hover:no-underline">
                        {item.linkText}
                      </Link>.
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="bg-zinc-50 px-6 py-16 sm:px-8 sm:py-20 dark:bg-zinc-950" aria-labelledby="tips-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h2 id="tips-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Firestick Performance Tips</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            These tips can help maintain good performance for IPTV streaming on your Fire TV device:
          </p>
          <ul className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {PERFORMANCE_TIPS.map((item) => (
              <li key={item.tip} className="flex flex-col gap-2 rounded-2xl border border-black/[.08] bg-background p-5 dark:border-white/[.145]">
                <span className="font-semibold">{item.tip}</span>
                <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Devices */}
      <section className="px-6 py-16 sm:px-8 sm:py-20" aria-labelledby="other-devices-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h2 id="other-devices-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Other IPTV Devices</h2>
          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Golden IPTV provides setup guidance for other popular streaming devices. Explore setup guides for each:
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {OTHER_DEVICES.map((device) => (
              <li key={device.href}>
                <Link
                  href={device.href}
                  className="flex items-center justify-between rounded-2xl border border-black/[.08] bg-zinc-50 p-6 transition-colors hover:border-foreground/20 hover:bg-zinc-100 dark:border-white/[.145] dark:bg-zinc-950 dark:hover:bg-zinc-900"
                >
                  <span className="text-sm font-medium">{device.name}</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-zinc-50 px-6 py-16 sm:px-8 sm:py-20 dark:bg-zinc-950" aria-labelledby="trial-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-2xl border border-black/[.08] bg-background p-8 text-center dark:border-white/[.145] sm:p-12">
          <h2 id="trial-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Try Golden IPTV on Your Firestick</h2>
          <p className="mx-auto max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            Test the service on your compatible Fire TV device with the 24-hour free trial. This lets you verify the experience works well on your specific setup before subscribing.
          </p>
          <PrimaryButton href="/iptv-free-trial/">Start 24-Hour Free Trial</PrimaryButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 sm:px-8 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Firestick IPTV FAQs</h2>
          <Faq items={FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-50 px-6 py-16 sm:px-8 sm:py-20 dark:bg-zinc-950" aria-labelledby="final-cta-heading">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-2xl border border-black/[.08] bg-background p-8 text-center dark:border-white/[.145] sm:p-12">
          <h2 id="final-cta-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to Use IPTV on Your Firestick?</h2>
          <p className="mx-auto max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            Start with a free trial or view subscription options for Golden IPTV.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <SecondaryButton href="/pricing/">View IPTV Pricing</SecondaryButton>
            <PrimaryButton href="/iptv-free-trial/">Start 24-Hour Free Trial</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
