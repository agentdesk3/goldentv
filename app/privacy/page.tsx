import type { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/app/components/page-container";
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
    <main className="min-h-screen bg-[var(--background-primary)] py-16 text-text-primary">
      <PageContainer>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#c9a8ff]">
            Golden IPTV
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-7 text-text-secondary">
            This policy explains how Golden IPTV handles information you provide
            when requesting a free trial, contacting support, or making a
            service-related enquiry.
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-text-secondary">
            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Information we collect
              </h2>
              <p className="mt-3">
                Depending on the form or request, you may provide information
                such as your name, email address, WhatsApp number, device,
                preferred trial start time, support topic, and any notes or
                details you choose to include.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                How we use your information
              </h2>
              <p className="mt-3">
                We use submitted information to respond to enquiries, process
                trial requests, provide customer support, handle service or
                order requests, and communicate with you about those requests.
                We do not use submitted information for unsolicited marketing.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                WhatsApp
              </h2>
              <p className="mt-3">
                Some forms on this website prepare the information you enter
                for transmission through WhatsApp. When you continue and send
                that message, your information is also handled through
                WhatsApp and its associated services under their own terms and
                privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Retention
              </h2>
              <p className="mt-3">
                We retain information only for as long as reasonably necessary
                to handle the purposes described in this policy and legitimate
                operational or record-keeping needs.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Security
              </h2>
              <p className="mt-3">
                We take reasonable steps to protect information handled in
                connection with our service. No method of electronic
                communication or storage can be guaranteed to be completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Your information
              </h2>
              <p className="mt-3">
                To ask about information associated with your request, request
                access, or request deletion, contact{" "}
                <a
                  href="mailto:contact@goldeniptv.co.za"
                  className="font-semibold text-[#afc6ff] hover:underline"
                >
                  contact@goldeniptv.co.za
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Contact
              </h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
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

          <div className="mt-12 border-t border-border pt-6">
            <Link
              href="/contact/"
              className="font-semibold text-[#afc6ff] hover:underline"
            >
              Contact Golden IPTV
            </Link>
          </div>
        </article>
      </PageContainer>
    </main>
  );
}


