import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/app/components/page-container";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Read the Golden IPTV terms covering subscriptions, activation, payments, renewals, trials, support and refunds.",
  url: "https://goldeniptv.co.za/terms/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV Terms of Service",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)] py-16 text-text-primary">
      <PageContainer>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#c9a8ff]">
            Golden IPTV
          </p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 text-base leading-7 text-text-secondary">
            These terms explain the main conditions that apply when you request
            a trial, purchase a subscription, or use support provided by Golden
            IPTV.
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-text-secondary">
            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Subscriptions
              </h2>
              <p className="mt-3">
                Golden IPTV offers subscription plans for the periods and prices
                displayed on the website. A subscription period begins when the
                service is activated.
              </p>
              <p className="mt-3">
                Subscriptions do not renew automatically. If you want to
                continue after your current subscription period ends, renewal
                must be requested manually.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Pricing and payment
              </h2>
              <p className="mt-3">
                The prices displayed on the Golden IPTV website are the final
                prices charged by Golden IPTV. Available payment methods may
                include PayPal, cryptocurrency, Wave, Orange Money, and card
                payment.
              </p>
              <p className="mt-3">
                A third-party payment provider may apply its own charges,
                exchange rates, or processing conditions independently of
                Golden IPTV.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Free trial
              </h2>
              <p className="mt-3">
                Customers may request a free 24-hour trial. No payment or card
                details are required to request the trial. The trial is intended
                to let you evaluate the service on your device before choosing
                a subscription.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Devices, internet and service conditions
              </h2>
              <p className="mt-3">
                Your experience can depend on factors outside Golden IPTV,
                including your device, application, internet connection,
                network conditions, and local configuration. You are
                responsible for maintaining compatible equipment and a suitable
                internet connection.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Support
              </h2>
              <p className="mt-3">
                Customer support is available through WhatsApp and email
                throughout the day, using South Africa Standard Time (SAST) as
                the reference timezone. Availability does not guarantee an
                immediate response.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Refunds and cancellation
              </h2>
              <p className="mt-3">
                Refund requests may be made within 7 days of activation. If the
                service was not activated, a full refund may be requested.
                Customers may also request a refund within the 7-day period
                after activation, including when they change their mind.
              </p>
              <p className="mt-3">
                Approved refunds are normally processed within approximately
                3–5 business days.
              </p>
              <p className="mt-3">
                See the{" "}
                <Link
                  href="/refund-policy/"
                  className="font-semibold text-[#afc6ff] hover:underline"
                >
                  Refund & Cancellation Policy
                </Link>{" "}
                for more information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Customer responsibilities
              </h2>
              <p className="mt-3">
                You are responsible for providing accurate information when
                requesting a trial, subscription, or support and for following
                reasonable setup and troubleshooting instructions associated
                with your device.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Privacy
              </h2>
              <p className="mt-3">
                Information submitted through the website or support flows is
                handled as described in our{" "}
                <Link
                  href="/privacy/"
                  className="font-semibold text-[#afc6ff] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Contact
              </h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:contact@goldeniptv.co.za"
                  className="font-semibold text-[#afc6ff] hover:underline"
                >
                  contact@goldeniptv.co.za
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </PageContainer>
    </main>
  );
}
