// Authoritative Golden IPTV subscription plan data.
//
// Home, Pricing, the Footer, and the South Africa landing page all consume this
// module so durations, prices, currency labels, and the popular-plan state stay
// synchronized. Purchase links are composed by each surface from the production
// WhatsApp flow rather than stored as route data here.

export type Plan = {
  id: string;
  duration: string;
  price: string;
  currencyLabel: string;
  description: string;
  ctaLabel: string;
  /** Optional flag used to visually highlight one plan. */
  popular?: boolean;
};

// The 24-hour free trial is intentionally separate from paid subscriptions.
export const PLANS: Plan[] = [
  {
    id: "1-month",
    duration: "1 Month",
    price: "R199",
    currencyLabel: "South African Rand (ZAR)",
    description:
      "A short-term option if you would like to try Golden IPTV before choosing a longer subscription.",
    ctaLabel: "Choose 1 Month",
  },
  {
    id: "3-months",
    duration: "3 Months",
    price: "R499",
    currencyLabel: "South African Rand (ZAR)",
    description:
      "A medium-term subscription option for viewers who want a bit more time than the monthly plan.",
    ctaLabel: "Choose 3 Months",
  },
  {
    id: "6-months",
    duration: "6 Months",
    price: "R699",
    currencyLabel: "South African Rand (ZAR)",
    description:
      "A longer subscription for viewers who want continued access over several months.",
    ctaLabel: "Choose 6 Months",
  },
  {
    id: "12-months",
    duration: "12 Months",
    price: "R999",
    currencyLabel: "South African Rand (ZAR)",
    description:
      "Our longest listed subscription option, for viewers planning to use Golden IPTV across the full year.",
    ctaLabel: "Choose 12 Months",
    popular: true,
  },
];
