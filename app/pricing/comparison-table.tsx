// Responsive plan comparison table for /pricing/.
//
// On small screens the table scrolls horizontally within its
// container instead of overflowing the page, keeping the layout
// usable on mobile while still presenting tabular data semantically.

import { PLANS } from "../iptv-south-africa/plans-data";

const DEVICE_COMPATIBILITY_SUMMARY =
  "Smart TV, Firestick, Android TV, Apple TV";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-black/[.08] dark:border-white/[.145]">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-black/[.08] bg-zinc-50 dark:border-white/[.145] dark:bg-zinc-950">
            <th scope="col" className="px-4 py-3 font-semibold">
              Plan
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Duration
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Price
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Trial Availability
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Device Compatibility
            </th>
          </tr>
        </thead>
        <tbody>
          {PLANS.map((plan) => (
            <tr
              key={plan.id}
              className="border-b border-black/[.08] last:border-b-0 dark:border-white/[.145]"
            >
              <th scope="row" className="px-4 py-3 font-medium">
                {plan.duration} Plan
              </th>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                {plan.duration}
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                {plan.price} (ZAR)
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                24-hour trial available
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                {DEVICE_COMPATIBILITY_SUMMARY}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
