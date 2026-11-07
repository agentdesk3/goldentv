import type { Metadata } from "next";
import CinematicHome from "@/app/components/cinematic-home";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Golden IPTV | Plans, Trial & Setup Guides",
  description:
    "Explore Golden IPTV plans, request a 24-hour free trial and find setup guides for compatible Smart TVs and streaming devices.",
  url: "https://www.goldeniptv.co.za/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV streaming service",
  absoluteTitle: true,
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.goldeniptv.co.za/#organization",
      name: "Golden IPTV",
      url: "https://www.goldeniptv.co.za/",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.goldeniptv.co.za/#website",
      name: "Golden IPTV",
      url: "https://www.goldeniptv.co.za/",
      description:
        "Golden IPTV subscription plans, free-trial information and setup guides for compatible streaming devices.",
      inLanguage: "en-ZA",
      publisher: {
        "@id": "https://www.goldeniptv.co.za/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <CinematicHome />
    </>
  );
}
