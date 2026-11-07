import type { ReactNode } from "react";
import Link from "next/link";

import CinematicContentHeader from "@/app/components/cinematic-content-header";
import CinematicContentFooter from "@/app/components/cinematic-content-footer";

const legalNavigation = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/refund-policy/", label: "Refund & Cancellation" },
] as const;

export default function CinematicLegalLayout({
  activeHref,
  children,
}: {
  activeHref: (typeof legalNavigation)[number]["href"];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B0A0A] text-[#EEEBDD]">
      <CinematicContentHeader activeHref={null} />
      <main id="guide-main" tabIndex={-1} className="focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#EEEBDD]">
        <div className="border-b border-white/15 bg-[#211617]">
          <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10 md:py-10 lg:px-16">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#EEEBDD]">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#CE1212]" />
              The Legal Library
            </p>
            <nav aria-label="Legal policies" className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {legalNavigation.map((item) => (
                <Link key={item.href} href={item.href} aria-current={activeHref === item.href ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center border-b-2 py-2 text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none ${activeHref === item.href ? "border-[#CE1212] font-bold text-[#EEEBDD]" : "border-transparent text-[#BDBDC5] hover:text-[#EEEBDD]"}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-20 lg:px-16">
          <article className="mx-auto min-w-0 max-w-[70ch] text-base leading-8 text-[#BDBDC5] [overflow-wrap:anywhere] [&>p:first-child]:text-xs [&>p:first-child]:font-bold [&>p:first-child]:uppercase [&>p:first-child]:tracking-[0.16em] [&>p:first-child]:text-[#EEEBDD] [&>h1]:mt-5 [&>h1]:font-heading [&>h1]:text-4xl [&>h1]:leading-[1.12] [&>h1]:font-semibold [&>h1]:tracking-tight [&>h1]:text-[#EEEBDD] md:[&>h1]:text-5xl [&>h1+p]:mt-6 [&>h1+p]:text-lg [&>h1+p]:leading-8 [&>div]:mt-12 [&_section+section]:mt-10 [&_section]:border-t [&_section]:border-white/15 [&_section]:pt-7 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:font-semibold [&_h2]:text-[#EEEBDD] [&_section_p]:mt-4 [&_a]:font-semibold [&_a]:text-[#EEEBDD] [&_a]:underline [&_a]:decoration-[#CE1212] [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a:hover]:decoration-[#EEEBDD] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#EEEBDD] [&_a:focus-visible]:shadow-none">
            {children}
          </article>
        </div>
      </main>
      <CinematicContentFooter />
    </div>
  );
}
