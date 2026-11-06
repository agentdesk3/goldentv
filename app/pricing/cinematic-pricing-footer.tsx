import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import PaymentMethods from "@/app/components/payment-methods";
import { WHATSAPP_URL } from "@/app/components/whatsapp";
import { PLANS } from "@/app/iptv-south-africa/plans-data";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Plans & Pricing", href: "/pricing/" },
    { label: "Free Trial", href: "/iptv-free-trial/" },
    { label: "Supported Devices", href: "/devices/" },
  ],
  Resources: [
    { label: "Setup Hub", href: "/guides/" },
    { label: "Installation Guide", href: "/guides/how-to-install-iptv/" },
    { label: "Frequently Asked Questions", href: "/faq/" },
    { label: "IPTV South Africa", href: "/iptv-south-africa/" },
  ],
  Support: [
    { label: "Contact Support", href: "/contact/" },
    { label: "WhatsApp Support", href: WHATSAPP_URL, external: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "Refund & Cancellation", href: "/refund-policy/" },
  ],
};

export default function CinematicPricingFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-[#EEEBDD]">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 md:px-10 lg:px-16">
        <div className="mb-16 border-b border-white/10 pb-14">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#CE1212]">
            Your entertainment. Your choice.
          </p>

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em]">
                Ready for your
                <span className="block text-[#CE1212]">
                  next experience?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#BDBDC5]">
                Compare Golden IPTV subscription options, request a
                24-hour free trial, or contact our team for more
                information before choosing a plan.
              </p>
            </div>

            <Link
              href="/iptv-free-trial/"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#CE1212] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#a90e0e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
            >
              Request Free Trial
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_2fr]">
          <div className="space-y-6">

<Link
  href="/"
  aria-label="Golden IPTV home"
  className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
>
  <Image
    src="/assets/branding/logo-horizontal-transparent.png"
    alt="Golden IPTV"
    width={220}
    height={70}
    className="h-auto w-[180px] object-contain md:w-[210px]"
  />
</Link>


            <p className="max-w-sm text-sm leading-7 text-[#BDBDC5]">
              Explore Golden IPTV subscription periods, device setup
              guidance and a 24-hour free trial for viewers in
              South Africa.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-3 border-b border-[#CE1212]/60 pb-1 text-sm font-semibold text-[#EEEBDD] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5 text-[#CE1212]" />
              Chat with our team
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>

            <div className="max-w-sm">
              <PaymentMethods />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#EEEBDD]">
                  {group}
                </h3>

                <nav aria-label={`${group} footer links`}>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.href}>
                        {"external" in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm leading-6 text-[#BDBDC5] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm leading-6 text-[#BDBDC5] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 border-b border-white/10 py-8 md:flex-row md:items-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#BDBDC5]">
            Available subscription periods
          </p>

          <div className="flex flex-wrap gap-2">
            {PLANS.map((plan) => (
              <span
                key={plan.id}
                className="rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-[#EEEBDD]"
              >
                {plan.duration}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-[#BDBDC5] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Golden IPTV.
            All rights reserved.
          </p>

          <p>
            Subscription information and device compatibility
            may vary. Contact support for current details.
          </p>
        </div>
      </div>
    </footer>
  );
}
