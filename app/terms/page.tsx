import type { Metadata } from "next";
import Link from "next/link";

import CinematicLegalLayout from "@/app/components/cinematic-legal-layout";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Read the Golden IPTV terms covering subscriptions, activation, payments, renewals, trials, support and refunds.",
  url: "https://www.goldeniptv.co.za/terms/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV Terms of Service",
});

export default function TermsPage() {
  return (
    <CinematicLegalLayout activeHref="/terms/">
      <p>
        Golden IPTV
      </p>

      <h1>
        Terms of Service
      </h1>

      <p>
        These terms explain the main conditions that apply when you request
        a trial, purchase a subscription, or use support provided by Golden
        IPTV.
      </p>

      <div>
        <section>
          <h2>
            Subscriptions
          </h2>
          <p>
            Golden IPTV offers subscription plans for the periods and prices
            displayed on the website. A subscription period begins when the
            service is activated.
          </p>
          <p>
            Subscriptions do not renew automatically. If you want to
            continue after your current subscription period ends, renewal
            must be requested manually.
          </p>
        </section>

        <section>
          <h2>
            Pricing and payment
          </h2>
          <p>
            The prices displayed on the Golden IPTV website are the final
            prices charged by Golden IPTV. Available payment methods may
            include PayPal, cryptocurrency, Wave, Orange Money, and card
            payment.
          </p>
          <p>
            A third-party payment provider may apply its own charges,
            exchange rates, or processing conditions independently of
            Golden IPTV.
          </p>
        </section>

        <section>
          <h2>
            Free trial
          </h2>
          <p>
            Customers may request a free 24-hour trial. No payment or card
            details are required to request the trial. The trial is intended
            to let you evaluate the service on your device before choosing
            a subscription.
          </p>
        </section>

        <section>
          <h2>
            Devices, internet and service conditions
          </h2>
          <p>
            Your experience can depend on factors outside Golden IPTV,
            including your device, application, internet connection,
            network conditions, and local configuration. You are
            responsible for maintaining compatible equipment and a suitable
            internet connection.
          </p>
        </section>

        <section>
          <h2>
            Support
          </h2>
          <p>
            Customer support is available through WhatsApp and email
            throughout the day, using South Africa Standard Time (SAST) as
            the reference timezone. Availability does not guarantee an
            immediate response.
          </p>
        </section>

        <section>
          <h2>
            Refunds and cancellation
          </h2>
          <p>
            Refund requests may be made within 7 days of activation. If the
            service was not activated, a full refund may be requested.
            Customers may also request a refund within the 7-day period
            after activation, including when they change their mind.
          </p>
          <p>
            Approved refunds are normally processed within approximately
            3–5 business days.
          </p>
          <p>
            See the{" "}
            <Link
              href="/refund-policy/"
            >
              Refund & Cancellation Policy
            </Link>{" "}
            for more information.
          </p>
        </section>

        <section>
          <h2>
            Customer responsibilities
          </h2>
          <p>
            You are responsible for providing accurate information when
            requesting a trial, subscription, or support and for following
            reasonable setup and troubleshooting instructions associated
            with your device.
          </p>
        </section>

        <section>
          <h2>
            Privacy
          </h2>
          <p>
            Information submitted through the website or support flows is
            handled as described in our{" "}
            <Link
              href="/privacy/"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>
            Contact
          </h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:contact@goldeniptv.co.za"
            >
              contact@goldeniptv.co.za
            </a>
            .
          </p>
        </section>
      </div>
    </CinematicLegalLayout>
  );
}
