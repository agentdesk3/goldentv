import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/app/components/whatsapp";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Plans & Pricing", href: "/pricing/" },
    { label: "Free Trial", href: "/iptv-free-trial/" },
    { label: "Device Guides", href: "/devices/" },
  ],
  Resources: [
    { label: "Setup Hub", href: "/guides/" },
    { label: "Installation Guide", href: "/guides/how-to-install-iptv/" },
    { label: "Answer Library", href: "/faq/" },
    { label: "IPTV South Africa", href: "/iptv-south-africa/" },
  ],
  Support: [
    { label: "Contact Support", href: "/contact/" },
    { label: "WhatsApp Support", href: WHATSAPP_URL },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "Refund & Cancellation", href: "/refund-policy/" },
  ],
};

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

export default function CinematicContentFooter() {
  return (
    <footer className="border-t border-white/15 bg-black text-[#EEEBDD]">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-10 lg:px-16">
        <h2 className="sr-only">Golden IPTV resources and information</h2>
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1fr_2fr]">
          <div className="min-w-0">
            <Link href="/" aria-label="Golden IPTV home" className={`inline-flex rounded-md ${focusStyle}`}>
              <Image src="/assets/branding/logo-horizontal-transparent.png" alt="Golden IPTV" width={220} height={70} className="h-auto w-[180px] object-contain md:w-[210px]" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#BDBDC5]">The Golden IPTV Field Guide. Practical guidance for your device, your connection and your next step.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex min-h-11 items-center gap-3 border-b border-[#CE1212] text-sm font-semibold ${focusStyle}`}>
              <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" /> Chat with our team <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="min-w-0">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em]">{group}</h3>
                <nav aria-label={`${group} footer links`}>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        {link.href === WHATSAPP_URL ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={`inline-block py-1 text-sm leading-6 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{link.label}<span className="sr-only"> (opens in a new tab)</span></a>
                        ) : (
                          <Link href={link.href} className={`inline-block py-1 text-sm leading-6 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{link.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs leading-6 text-[#BDBDC5] md:flex-row">
          <p>© {new Date().getFullYear()} Golden IPTV. All rights reserved.</p>
          <p className="max-w-md">Device compatibility and service availability may vary. Contact our team for guidance on your setup.</p>
        </div>
      </div>
    </footer>
  );
}
