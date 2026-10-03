import Image from "next/image";
import { Coins } from "lucide-react";

type PaymentMethod =
  | { name: string; logo: string; widthClass: string }
  | { name: "Crypto"; neutralIcon: true; widthClass: string };

const paymentMethods: readonly PaymentMethod[] = [
  {
    name: "Visa",
    logo: "/brands/payments/visa.svg",
    widthClass: "w-[4.25rem]",
  },
  {
    name: "Mastercard",
    logo: "/brands/payments/mastercard.svg",
    widthClass: "w-[4.25rem]",
  },
  {
    name: "American Express",
    logo: "/brands/payments/american-express.svg",
    widthClass: "w-[4.25rem]",
  },
  {
    name: "PayPal",
    logo: "/brands/payments/paypal.svg",
    widthClass: "w-[4.25rem]",
  },
  {
    name: "Crypto",
    neutralIcon: true,
    widthClass: "w-[4.75rem]",
  },
  {
    name: "Wave",
    logo: "/brands/payments/wave.png",
    widthClass: "w-[4.75rem]",
  },
  {
    name: "Orange Money",
    logo: "/brands/payments/orange-money.svg",
    widthClass: "w-[5.25rem]",
  },
];

export default function PaymentMethods() {
  return (
    <div
      className="mt-1 rounded-2xl border border-white/[0.07] bg-[#0d1220]/70 p-3"
      aria-label="Payment methods planned for checkout"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
        Secure payment methods
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {paymentMethods.map((method) => (
          <span
            key={method.name}
            title={method.name + " — planned payment method"}
            className={
              "relative inline-flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.92] px-2 text-[#111521] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-[background-color,border-color] duration-200 hover:border-white/25 hover:bg-white " +
              method.widthClass
            }
          >
            {"logo" in method ? (
              <span className="relative h-5 w-full">
                <Image
                  src={method.logo}
                  alt={method.name}
                  fill
                  unoptimized
                  sizes="84px"
                  className="object-contain"
                />
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.05em]">
                <Coins
                  aria-hidden="true"
                  className="size-3.5"
                  strokeWidth={1.8}
                />
                Crypto
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
