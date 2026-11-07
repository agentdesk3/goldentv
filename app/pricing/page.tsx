import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo-metadata";
import { PLANS } from "@/app/iptv-south-africa/plans-data";

import PricingClient from "./pricing-client";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV Prices & Plans South Africa",
  description:
    "Compare Golden IPTV subscription periods and prices in South African Rand, then request a 24-hour free trial before choosing a plan.",
  url: "https://www.goldeniptv.co.za/pricing/",
  image: "/images/stitch/pricing-01.webp",
  imageAlt: "Golden IPTV subscription plans and prices",
});

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.goldeniptv.co.za/pricing/#service",
  name: "Golden IPTV Subscription Service",
  serviceType: "IPTV subscription service",
  description:
    "Golden IPTV subscription plans for customers in South Africa, with setup guidance for compatible streaming devices.",
  provider: {
    "@id": "https://www.goldeniptv.co.za/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  url: "https://www.goldeniptv.co.za/pricing/",
hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Golden IPTV Subscription Plans",
  itemListElement: PLANS.map((plan) => ({
  "@type": "Offer",
  name: `Golden IPTV ${plan.duration} Subscription`,
  price: Number(plan.price.replace(/[^\d.]/g, "")),
  priceCurrency: "ZAR",
  url: `https://www.goldeniptv.co.za/pricing/#${plan.id}`,
})),
},
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PricingClient />
    </>
  );
}
