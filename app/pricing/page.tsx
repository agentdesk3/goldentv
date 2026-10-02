import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo-metadata";

import PricingClient from "./pricing-client";

export const metadata: Metadata = createPageMetadata({
  title: "IPTV Prices & Plans South Africa",
  description:
    "Compare Golden IPTV subscription periods and prices in South African Rand, then request a 24-hour free trial before choosing a plan.",
  url: "https://goldeniptv.co.za/pricing/",
  image: "/images/stitch/pricing-01.webp",
  imageAlt: "Golden IPTV subscription plans and prices",
});

export default function PricingPage() {
  return <PricingClient />;
}