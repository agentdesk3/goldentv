import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import SiteChrome from "@/app/components/site-chrome";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldeniptv.co.za"),
  title: {
    default: "Golden IPTV | Plans, Trial & Setup Guides",
    template: "%s | Golden IPTV",
  },
  description:
    "Golden IPTV provides IPTV information, subscription plans, device setup guides and a 24-hour free trial for users in South Africa.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Golden IPTV | Plans, Trial & Setup Guides",
    description:
      "Explore IPTV subscription plans, device setup guides and a 24-hour free trial with Golden IPTV.",
    url: "https://goldeniptv.co.za/",
    siteName: "Golden IPTV",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/home/hero-streaming-cinema.webp",
        alt: "Golden IPTV streaming service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden IPTV | Plans, Trial & Setup Guides",
    description:
      "Explore IPTV subscription plans, device setup guides and a 24-hour free trial with Golden IPTV.",
    images: [
      {
        url: "/images/home/hero-streaming-cinema.webp",
        alt: "Golden IPTV streaming service",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}