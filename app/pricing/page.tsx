import type { Metadata } from "next";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: "IPTV Prices South Africa | Golden IPTV Subscription Plans",
  description:
    "Compare Golden IPTV subscription plans and prices in South Africa. Choose a flexible IPTV plan and start your free trial.",
  alternates: {
    canonical: "https://goldeniptv.co.za/pricing/",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}