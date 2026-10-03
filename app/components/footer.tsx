import Link from "next/link";

import BrandMark from "@/app/components/brand-mark";
import PageContainer from "@/app/components/page-container";
import PaymentMethods from "@/app/components/payment-methods";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { PLANS } from "@/app/iptv-south-africa/plans-data";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "/" },
    { label: "Plans", href: "/pricing/" },
    { label: "Free Trial", href: "/iptv-free-trial/" },
    { label: "Devices", href: "/devices/" },
  ],
  Resources: [
    { label: "Setup Hub", href: "/guides/" },
    { label: "Setup Guide", href: "/guides/how-to-install-iptv/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Support", href: "/contact/" },
  ],
  Help: [
    { label: "IPTV South Africa", href: "/iptv-south-africa/" },
    { label: "Contact", href: "/contact/" },
    { label: "WhatsApp", href: WHATSAPP_URL, external: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "Refund & Cancellation", href: "/refund-policy/" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-[var(--background-primary)]">
      <PageContainer className="pb-6 pt-10">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-start gap-4 lg:col-span-2">
            <Link
              href="/"
              aria-label="Golden IPTV home"
              className="inline-flex rounded-full"
            >
              <BrandMark />
            </Link>
            <p className="max-w-sm text-[15px] leading-6 text-text-secondary">
              Explore subscription information, setup guidance, supported
              devices and the 24-hour Golden IPTV free trial.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="rounded-full bg-[var(--surface-elevated)] px-2 py-0.5 font-heading text-[11px] font-extrabold uppercase leading-4 tracking-[0.14em] text-[#c1c1ff]">
                24-Hour Trial
              </span>
              <span className="rounded-full bg-[var(--surface-elevated)] px-2 py-0.5 font-heading text-[11px] font-extrabold uppercase leading-4 tracking-[0.14em] text-[#afc6ff]">
                5 Device Guides
              </span>
            </div>
            <PaymentMethods />
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-2">
              <h2 className="text-[14px] font-bold uppercase leading-5 tracking-[0.02em] text-text-primary">
                {group}
              </h2>
              <nav
                className="flex flex-col gap-2"
                aria-label={`${group} links`}
              >
                {links.map((link) =>
                  "external" in link && link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit text-[15px] leading-6 text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="w-fit text-[15px] leading-6 text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-[13px] leading-5 text-text-secondary md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="mr-2 text-[12px] font-semibold uppercase tracking-[0.04em]">
              Plan periods:
            </span>
            {PLANS.map((plan) => (
              <span
                key={plan.id}
                className="rounded-lg bg-[var(--surface-base)] px-3 py-1 font-semibold text-text-primary"
              >
                {plan.duration}
              </span>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Golden IPTV. All rights reserved.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
