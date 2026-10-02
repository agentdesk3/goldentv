"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";

import { PLANS } from "@/app/iptv-south-africa/plans-data";

const subscriptionBenefits = [
  "Buffering troubleshooting guidance",
  "Request activation via WhatsApp",
  "WhatsApp customer support",
] as const;

export default function HomePlanPreview() {
  const [selectedPlanId, setSelectedPlanId] = useState(PLANS[0]?.id ?? "");
  const selectedPlan =
    PLANS.find((plan) => plan.id === selectedPlanId) ?? PLANS[0];

  if (!selectedPlan) return null;

  return (
    <div className="rounded-2xl border border-[color:var(--border-elevated)] bg-[rgba(18,24,42,0.86)] p-4 shadow-[var(--shadow-elevated)]">
      <div
        className="grid grid-cols-4 gap-1 rounded-full border border-white/10 bg-[var(--background-secondary)] p-1"
        aria-label="Select a subscription duration"
      >
        {PLANS.map((plan) => {
          const selected = plan.id === selectedPlan.id;

          return (
            <button
              key={plan.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`min-h-9 rounded-full px-1 text-[11px] font-semibold transition-[background-color,color,box-shadow] motion-reduce:transition-none ${
                selected
                  ? "bg-[var(--brand-violet)] text-white shadow-[0_0_14px_rgba(139,61,255,0.45)]"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              {plan.duration.split(" ")[0]} Mo
            </button>
          );
        })}
      </div>

      <div className="py-5 text-center">
        <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-secondary">
          {selectedPlan.duration} pass
        </p>
        <p className="mt-1 font-heading text-[32px] font-extrabold leading-10 text-text-primary">
          {selectedPlan.price}
          <span className="ml-1 text-sm font-medium text-text-secondary">
            / {selectedPlan.duration.toLowerCase()}
          </span>
        </p>
        <p className="mt-1 text-xs text-[#d4bbff]">
          One-time duration · South African Rand
        </p>
      </div>

      <div className="border-t border-white/10 pt-4">
        <p className="mb-3 font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
          Included with this subscription
        </p>
        <ul className="grid gap-2.5">
          {subscriptionBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-[13px] text-text-primary"
            >
              <Check className="h-4 w-4 text-[#d4bbff]" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/pricing/"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--gradient-cta)] px-5 text-sm font-bold text-white shadow-[0_0_20px_rgba(139,61,255,0.4)] transition-[transform,box-shadow] hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(139,61,255,0.6)] motion-reduce:transform-none motion-reduce:transition-none"
      >
        Compare All Plans
      </Link>
    </div>
  );
}
