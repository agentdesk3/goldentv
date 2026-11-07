import type { Metadata } from "next";
import Link from "next/link";

import CinematicLegalLayout from "@/app/components/cinematic-legal-layout";
import { createPageMetadata } from "@/app/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Golden IPTV handles information submitted through trial, support and service request forms.",
  url: "https://www.goldeniptv.co.za/privacy/",
  image: "/images/home/hero-streaming-cinema.webp",
  imageAlt: "Golden IPTV Privacy Policy",
});

export default function PrivacyPage() {
  return (
    <CinematicLegalLayout activeHref="/privacy/">
      <p>
        Golden IPTV
      </p>
      <h1>
        Privacy Policy
      </h1>
      <p>
        This policy explains how Golden IPTV handles information you provide
        when requesting a free trial, contacting support, or making a
        service-related enquiry.
      </p>

      <div>
        <section>
          <h2>
            Information we collect
          </h2>
          <p>
            Depending on the form or request, you may provide information
            such as your name, email address, WhatsApp number, device,
            preferred trial start time, support topic, and any notes or
            details you choose to include.
          </p>
        </section>

        <section>
          <h2>
            How we use your information
          </h2>
          <p>
            We use submitted information to respond to enquiries, process
            trial requests, provide customer support, handle service or
            order requests, and communicate with you about those requests.
            We do not use submitted information for unsolicited marketing.
          </p>
        </section>

        <section>
          <h2>
            WhatsApp
          </h2>
          <p>
            Some forms on this website prepare the information you enter
            for transmission through WhatsApp. When you continue and send
            that message, your information is also handled through
            WhatsApp and its associated services under their own terms and
            privacy practices.
          </p>
        </section>

        <section>
          <h2>
            Retention
          </h2>
          <p>
            We retain information only for as long as reasonably necessary
            to handle the purposes described in this policy and legitimate
            operational or record-keeping needs.
          </p>
        </section>

        <section>
          <h2>
            Security
          </h2>
          <p>
            We take reasonable steps to protect information handled in
            connection with our service. No method of electronic
            communication or storage can be guaranteed to be completely
            secure.
          </p>
        </section>

        <section>
          <h2>
            Your information
          </h2>
          <p>
            To ask about information associated with your request, request
            access, or request deletion, contact{" "}
            <a
              href="mailto:contact@goldeniptv.co.za"
            >
              contact@goldeniptv.co.za
            </a>
            .
          </p>
        </section>

        <section>
          <h2>
            Contact
          </h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:contact@goldeniptv.co.za"
            >
              contact@goldeniptv.co.za
            </a>
            .
          </p>
        </section>
      </div>

      <div>
        <Link
          href="/contact/"
        >
          Contact Golden IPTV
        </Link>
      </div>
    </CinematicLegalLayout>
  );
}


