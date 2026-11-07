import type { Metadata } from "next";
import Link from "next/link";
import CinematicContentHeader from "@/app/components/cinematic-content-header";
import CinematicContentFooter from "@/app/components/cinematic-content-footer";
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
        name: "IPTV on Firestick",
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

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";
const containerStyle = "mx-auto w-full max-w-[1312px] px-5 md:px-10 lg:px-16";
const primaryLinkStyle = `inline-flex min-h-12 items-center justify-center rounded-md bg-[#CE1212] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#a90e0e] ${focusStyle}`;
const secondaryLinkStyle = `inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 py-3 text-center text-sm font-semibold text-[#EEEBDD] hover:bg-white/10 ${focusStyle}`;
const textLinkStyle = `font-semibold text-[#EEEBDD] underline decoration-[#CE1212] underline-offset-4 hover:decoration-[#EEEBDD] ${focusStyle}`;

export default function FirestickPage() {
  return (
    <div className="bg-[#0B0A0A] text-[#EEEBDD]">
      <CinematicContentHeader activeHref="/devices/" />
      <main id="guide-main" tabIndex={-1} className="min-w-0 scroll-mt-6 outline-none">
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
        <nav aria-label="Breadcrumb" className="border-b border-white/15">
          <ol className={`${containerStyle} flex flex-wrap items-center gap-x-2 py-5 text-xs leading-6 text-[#BDBDC5]`}>
            <li><Link href="/" className={`hover:text-white ${focusStyle}`}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/devices/" className={`hover:text-white ${focusStyle}`}>Devices</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-[#EEEBDD]">Firestick</li>
          </ol>
        </nav>

        {/* Hero */}
        <section aria-labelledby="firestick-title" className="border-b border-white/15 bg-[#211617]">
          <div className={`${containerStyle} grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end lg:gap-16 lg:py-20`}>
            <div className="min-w-0">
              <p className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#BDBDC5]"><span aria-hidden="true" className="h-2 w-2 bg-[#CE1212]" />The Golden IPTV Field Guide / Fire TV</p>
              <h1 id="firestick-title" className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">IPTV on Firestick</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#BDBDC5]">
                Set up IPTV on your Fire TV Stick or Fire TV device. This guide covers compatibility, setup steps, internet requirements, and troubleshooting for Firestick IPTV streaming.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/iptv-free-trial/" className={primaryLinkStyle}>Start 24-Hour Free Trial</Link>
                <Link href="/guides/how-to-install-iptv/" className={secondaryLinkStyle}>How to Install IPTV</Link>
              </div>
            </div>
            <div className="border-l-2 border-[#CE1212] py-2 pl-6">
              <span className="font-heading text-6xl font-medium leading-none tracking-tight md:text-7xl">{String(SETUP_STEPS.length).padStart(2, "0")}</span>
              <p className="mt-3 text-sm font-semibold">Steps to follow</p>
              <nav aria-label="On this page" className="mt-5">
                <ul className="divide-y divide-white/15 text-sm text-[#BDBDC5]">
                  {[
                    { label: "Before you begin", href: "#requirements-heading" },
                    { label: "Installation steps", href: "#setup-heading" },
                    { label: "Network guidance", href: "#internet-heading" },
                    { label: "Troubleshooting", href: "#troubleshooting-heading" },
                    { label: "Firestick FAQs", href: "#faq-heading" },
                  ].map((item) => (
                    <li key={item.href}><a href={item.href} className={`flex min-h-11 items-center justify-between gap-3 py-2 hover:text-white ${focusStyle}`}>{item.label}<span aria-hidden="true">↘</span></a></li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* What is IPTV on Firestick */}
        <section className="border-b border-white/15 py-12 md:py-16 lg:py-20" aria-labelledby="what-is-heading">
          <div className={`${containerStyle} flex flex-col gap-6`}>
            <h2 id="what-is-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">IPTV on Firestick</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              IPTV (Internet Protocol Television) delivers television content over the internet instead of through traditional broadcast or cable systems. This allows you to stream live channels and on-demand content directly to compatible devices.
            </p>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Fire TV devices, including Firestick and Fire TV Stick 4K, can be used for IPTV streaming when the device, application, and IPTV service are compatible. A suitable IPTV application is typically required to receive and play the content on your Fire TV device.
            </p>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Application availability and exact setup procedures can vary. Users should follow the setup instructions provided by their chosen application. Golden IPTV provides the subscription service, while the application handles the streaming interface on your device.
            </p>
          </div>
        </section>

        {/* What You Need */}
        <section className="border-b border-white/15 bg-[#171112] py-12 md:py-16 lg:py-20" aria-labelledby="requirements-heading">
          <div className={`${containerStyle} flex flex-col gap-8`}>
            <h2 id="requirements-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">What You Need</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Before setting up IPTV on your Firestick, make sure you have everything required:
            </p>
            <ul className="grid list-none gap-x-10 gap-y-7 md:grid-cols-2">
              {REQUIREMENTS.map((req) => (
                <li key={req.item} className="min-w-0 border-l border-[#CE1212] pl-5">
                  <span className="font-heading text-lg font-semibold leading-7">{req.item}</span>
                  <span className="mt-2 block text-sm leading-7 text-[#BDBDC5]">{req.detail}</span>
                </li>
              ))}
            </ul>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              For guidance on internet requirements, see our guide on{" "}
              <Link href="/guides/internet-speed-for-iptv/" className={textLinkStyle}>
                internet speed for IPTV
              </Link>.
            </p>
          </div>
        </section>

        {/* Setup Steps */}
        <section className="border-b border-white/15 py-12 md:py-16 lg:py-20" aria-labelledby="setup-heading">
          <div className={`${containerStyle} flex flex-col gap-8`}>
            <h2 id="setup-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">How to Set Up IPTV on Firestick</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Follow these general steps to set up IPTV on your Fire TV device. The exact interface may vary depending on your Firestick model and software version.
            </p>
            <ol className="list-none divide-y divide-white/15 border-y border-white/15">
              {SETUP_STEPS.map((item, index) => (
                <li key={item.step} id={`firestick-step-${index + 1}`} className="grid scroll-mt-8 grid-cols-[2rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6 md:py-9">
                  <span aria-hidden="true" className="font-heading text-2xl font-medium leading-none sm:text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#BDBDC5]">Step {index + 1} of {SETUP_STEPS.length}</p>
                    <h3 className="mt-2 font-heading text-xl font-semibold leading-snug sm:text-2xl">{item.step}</h3>
                    <span className="mt-2 text-sm leading-7 text-[#BDBDC5]">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Internet Speed and Connection */}
        <section className="border-b border-white/15 bg-[#171112] py-12 md:py-16 lg:py-20" aria-labelledby="internet-heading">
          <div className={`${containerStyle} flex flex-col gap-6`}>
            <h2 id="internet-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Internet Speed and Connection</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Your internet connection is important for IPTV streaming quality. Firestick devices typically connect via Wi-Fi, though some models support Ethernet adapters for a wired connection.
            </p>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Wi-Fi performance depends on distance from your router, walls and obstacles, interference from other wireless devices, and how many devices are sharing your network. A weak Wi-Fi signal can cause buffering even if your advertised internet speed is high.
            </p>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Connection stability matters as much as speed. A fast but unstable connection can cause more buffering than a slower but consistent one. When multiple devices use your network simultaneously, available bandwidth for IPTV is reduced.
            </p>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              For more information, see our guides on{" "}
              <Link href="/guides/internet-speed-for-iptv/" className={textLinkStyle}>
                internet speed for IPTV
              </Link>{" "}
              and{" "}
              <Link href="/guides/iptv-buffering/" className={textLinkStyle}>
                IPTV buffering
              </Link>.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="border-b border-white/15 py-12 md:py-16 lg:py-20" aria-labelledby="troubleshooting-heading">
          <div className={`${containerStyle} flex flex-col gap-8`}>
            <h2 id="troubleshooting-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Common Firestick IPTV Problems</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              If you experience issues with IPTV on your Firestick, these troubleshooting tips may help:
            </p>
            <ul className="grid list-none gap-x-10 gap-y-7 md:grid-cols-2">
              {TROUBLESHOOTING.map((item) => (
                <li key={item.title} className="flex min-w-0 flex-col gap-3 border-t border-white/20 pt-5">
                  <span className="font-heading text-lg font-semibold leading-7">{item.title}</span>
                  <span className="mt-2 text-sm leading-7 text-[#BDBDC5]">
                    {item.description}
                    {item.linkHref && (
                      <>
                        {" "}
                        <Link href={item.linkHref} className={textLinkStyle}>
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
        <section className="border-b border-white/15 bg-[#171112] py-12 md:py-16 lg:py-20" aria-labelledby="tips-heading">
          <div className={`${containerStyle} flex flex-col gap-8`}>
            <h2 id="tips-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Firestick Performance Tips</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              These tips can help maintain good performance for IPTV streaming on your Fire TV device:
            </p>
            <ul className="grid list-none gap-x-10 gap-y-7 md:grid-cols-2">
              {PERFORMANCE_TIPS.map((item) => (
                <li key={item.tip} className="flex min-w-0 flex-col gap-3 border-l border-[#CE1212] pl-5">
                  <span className="font-heading text-lg font-semibold leading-7">{item.tip}</span>
                  <span className="mt-2 text-sm leading-7 text-[#BDBDC5]">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Other Devices */}
        <section className="border-b border-white/15 py-12 md:py-16 lg:py-20" aria-labelledby="other-devices-heading">
          <div className={`${containerStyle} flex flex-col gap-6`}>
            <h2 id="other-devices-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Other IPTV Devices</h2>
            <p className="max-w-3xl text-base leading-8 text-[#BDBDC5]">
              Golden IPTV provides setup guidance for other popular streaming devices. Explore setup guides for each:
            </p>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {OTHER_DEVICES.map((device) => (
                <li key={device.href}>
                  <Link
                    href={device.href}
                    className={`flex min-h-20 items-center justify-between gap-4 border-b border-white/20 py-5 text-[#EEEBDD] hover:text-white ${focusStyle}`}
                  >
                    <span className="text-sm font-medium">{device.name}</span>
                    <span aria-hidden="true" className="text-[#BDBDC5]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Free Trial CTA */}
        <section className="border-b border-white/15 bg-[#171112] py-12 md:py-16 lg:py-20" aria-labelledby="trial-heading">
          <div className={`${containerStyle} flex flex-col items-start gap-6 text-left lg:border-l-2 lg:border-[#CE1212]`}>
            <h2 id="trial-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Try Golden IPTV on Your Firestick</h2>
            <p className="max-w-2xl text-base leading-8 text-[#BDBDC5]">
              Test the service on your compatible Fire TV device with the 24-hour free trial. This lets you verify the experience works well on your specific setup before subscribing.
            </p>
            <Link href="/iptv-free-trial/" className={primaryLinkStyle}>Start 24-Hour Free Trial</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/15 py-12 md:py-16 lg:py-20" aria-labelledby="faq-heading">
          <div className={`${containerStyle} flex flex-col gap-8`}>
            <h2 id="faq-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Firestick IPTV FAQs</h2>
            <div className="max-w-4xl divide-y divide-white/15 border-y border-white/15">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className={`flex min-h-11 cursor-pointer list-none items-start justify-between gap-5 text-base font-semibold leading-7 ${focusStyle}`}>
                    {faq.question}<span aria-hidden="true" className="shrink-0 text-2xl font-normal transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#BDBDC5] sm:text-base sm:leading-8">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-white/15 bg-[#171112] py-12 md:py-16 lg:py-20" aria-labelledby="final-cta-heading">
          <div className={`${containerStyle} flex flex-col items-start gap-6 text-left lg:border-l-2 lg:border-[#CE1212]`}>
            <h2 id="final-cta-heading" className="scroll-mt-8 font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Ready to Use IPTV on Your Firestick?</h2>
            <p className="max-w-2xl text-base leading-8 text-[#BDBDC5]">
              Start with a free trial or view subscription options for Golden IPTV.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/pricing/" className={secondaryLinkStyle}>View IPTV Pricing</Link>
              <Link href="/iptv-free-trial/" className={primaryLinkStyle}>Start 24-Hour Free Trial</Link>
            </div>
          </div>
        </section>
      </main>
      <CinematicContentFooter />
    </div>
  );
}
