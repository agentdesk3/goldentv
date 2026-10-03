import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/app/components/page-container";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "Read the Golden IPTV refund and cancellation policy, including the 7-day refund request period and processing times.",
  url: "https://www.goldeniptv.co.za/refund-policy/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV Refund and Cancellation Policy",
});

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)] py-16 text-text-primary">
      <PageContainer>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#c9a8ff]">
            Golden IPTV
          </p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Refund & Cancellation Policy
          </h1>

          <p className="mt-5 text-base leading-7 text-text-secondary">
            This policy explains when you can request a refund for a Golden IPTV
            subscription and how approved refunds are handled.
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-text-secondary">
            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                7-day refund period
              </h2>
              <p className="mt-3">
                You may request a refund within 7 days of activation of your
                subscription.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                If your service was not activated
              </h2>
              <p className="mt-3">
                If your purchased service was not activated, you may request a
                full refund.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                After activation
              </h2>
              <p className="mt-3">
                You may also request a refund after activation as long as the
                request is made within the 7-day refund period. This includes
                situations where you change your mind after activation.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Refund processing
              </h2>
              <p className="mt-3">
                Approved refunds are normally processed within approximately
                3–5 business days.
              </p>
              <p className="mt-3">
                The time for funds to appear after processing can also depend on
                the payment method or payment provider.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Subscription cancellation and renewal
              </h2>
              <p className="mt-3">
                Golden IPTV subscriptions do not renew automatically. Renewal is
                manual, so you do not need to cancel an automatic recurring
                subscription with Golden IPTV when your current plan ends.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                How to request a refund
              </h2>
              <p className="mt-3">
                Contact Golden IPTV through our support channels or email{" "}
                <a
                  href="mailto:contact@goldeniptv.co.za"
                  className="font-semibold text-[#afc6ff] hover:underline"
                >
                  contact@goldeniptv.co.za
                </a>{" "}
                to request a refund.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Related terms
              </h2>
              <p className="mt-3">
                For information about subscriptions, payments, trials and
                customer responsibilities, read our{" "}
                <Link
                  href="/terms/"
                  className="font-semibold text-[#afc6ff] hover:underline"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </PageContainer>
    </main>
  );
}
