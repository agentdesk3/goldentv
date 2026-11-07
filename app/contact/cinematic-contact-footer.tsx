import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";

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
    { label: "Frequently Asked Questions", href: "/faq/" },
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

export default function CinematicContactFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-[#EEEBDD]">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 md:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 pb-14 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BDBDC5]">Support that feels human.</p>
            <h2 className="mt-5 max-w-3xl font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">A clearer next step.<br /><span className="text-[#CE1212]">A conversation away.</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#BDBDC5]">Talk through your device, trial or subscription question with Golden IPTV. Start directly in WhatsApp or prepare your details first.</p>
          </div>
          <a href="#support-request" className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#CE1212] px-6 py-3 text-sm font-bold text-white hover:bg-[#a90e0e] ${focusStyle}`}>Prepare a support request <ArrowDown aria-hidden="true" className="h-5 w-5" /></a>
        </div>
        <div className="grid gap-12 border-b border-white/10 py-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <Link href="/" aria-label="Golden IPTV home" className={`inline-flex rounded-md ${focusStyle}`}>
              <Image src="/assets/branding/logo-horizontal-transparent.png" alt="Golden IPTV" width={220} height={70} className="h-auto w-[180px] object-contain md:w-[210px]" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#BDBDC5]">Practical guidance for your device, subscription and viewing experience. Find your next step with Golden IPTV.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex min-h-11 items-center gap-3 border-b border-[#CE1212] text-sm font-semibold ${focusStyle}`}>
              <MessageCircle aria-hidden="true" className="h-5 w-5" /> Chat with our team <ArrowUpRight aria-hidden="true" className="h-4 w-4" /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="min-w-0">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.12em]">{group}</h3>
                <nav aria-label={`Contact ${group.toLowerCase()} footer links`}>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        {link.href === WHATSAPP_URL ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={`inline-block py-1 text-sm leading-6 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{link.label}<span className="sr-only"> (opens in a new tab)</span></a>
                        ) : (
                          <Link href={link.href} aria-current={link.href === "/contact/" ? "page" : undefined} className={`inline-block py-1 text-sm leading-6 text-[#BDBDC5] hover:text-white ${focusStyle}`}>{link.label}</Link>
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
          <p className="max-w-md">Device compatibility and service availability may vary. Ask our team for guidance on your setup.</p>
        </div>
      </div>
    </footer>
  );
}
