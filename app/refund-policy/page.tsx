import type { Metadata } from "next";
import Link from "next/link";

import CinematicLegalLayout from "@/app/components/cinematic-legal-layout";
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
    <CinematicLegalLayout activeHref="/refund-policy/">
      <p>
        Golden IPTV
      </p>

      <h1>
        Refund & Cancellation Policy
      </h1>

      <p>
        This policy explains when you can request a refund for a Golden IPTV
        subscription and how approved refunds are handled.
      </p>

      <div>
        <section>
          <h2>
            7-day refund period
          </h2>
          <p>
            You may request a refund within 7 days of activation of your
            subscription.
          </p>
        </section>

        <section>
          <h2>
            If your service was not activated
          </h2>
          <p>
            If your purchased service was not activated, you may request a
            full refund.
          </p>
        </section>

        <section>
          <h2>
            After activation
          </h2>
          <p>
            You may also request a refund after activation as long as the
            request is made within the 7-day refund period. This includes
            situations where you change your mind after activation.
          </p>
        </section>

        <section>
          <h2>
            Refund processing
          </h2>
          <p>
            Approved refunds are normally processed within approximately
            3–5 business days.
          </p>
          <p>
            The time for funds to appear after processing can also depend on
            the payment method or payment provider.
          </p>
        </section>

        <section>
          <h2>
            Subscription cancellation and renewal
          </h2>
          <p>
            Golden IPTV subscriptions do not renew automatically. Renewal is
            manual, so you do not need to cancel an automatic recurring
            subscription with Golden IPTV when your current plan ends.
          </p>
        </section>

        <section>
          <h2>
            How to request a refund
          </h2>
          <p>
            Contact Golden IPTV through our support channels or email{" "}
            <a
              href="mailto:contact@goldeniptv.co.za"
            >
              contact@goldeniptv.co.za
            </a>{" "}
            to request a refund.
          </p>
        </section>

        <section>
          <h2>
            Related terms
          </h2>
          <p>
            For information about subscriptions, payments, trials and
            customer responsibilities, read our{" "}
            <Link
              href="/terms/"
            >
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </div>
    </CinematicLegalLayout>
  );
}
