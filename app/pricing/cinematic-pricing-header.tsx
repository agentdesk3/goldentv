
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Plans", href: "/pricing/" },
  { label: "Free Trial", href: "/iptv-free-trial/" },
  { label: "Devices", href: "/devices/" },
  { label: "Setup", href: "/guides/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Support", href: "/contact/" },
] as const;

export default function CinematicPricingHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="relative z-50 border-b border-white/10 bg-black text-[#EEEBDD]">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-5 px-5 md:px-10 lg:px-16">

<Link
  href="/"
  aria-label="Golden IPTV home"
  onClick={() => setOpen(false)}
  className="flex shrink-0 items-center focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD]"
>
  <Image
    src="/assets/branding/logo-horizontal-transparent.png"
    alt="Golden IPTV"
    width={220}
    height={70}
    priority
    className="h-auto w-[145px] object-contain sm:w-[175px] lg:w-[195px]"
  />
</Link>

        <nav
          aria-label="Pricing primary navigation"
          className="hidden items-center gap-6 xl:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                item.href === "/pricing/" ? "page" : undefined
              }
              className={`text-[13px] font-semibold transition-colors motion-reduce:transition-none ${
                item.href === "/pricing/"
                  ? "text-[#EEEBDD]"
                  : "text-[#BDBDC5] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 sm:flex xl:ml-0">
          <Link
            href="/iptv-free-trial/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#CE1212] px-5 text-sm font-bold text-white transition-colors hover:bg-[#a90e0e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] motion-reduce:transition-none"
          >
            Start Free Trial
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="pricing-mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 text-[#EEEBDD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEBDD] xl:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="pricing-mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-white/15 bg-[#101010] px-5 py-5 shadow-2xl xl:hidden"
        >
          <nav
            aria-label="Pricing mobile navigation"
            className="mx-auto grid max-w-[1312px] gap-1"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={
                  item.href === "/pricing/" ? "page" : undefined
                }
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center rounded-md px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#EEEBDD] ${
                  item.href === "/pricing/"
                    ? "bg-[#810000]/40 text-white"
                    : "text-[#BDBDC5] hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/iptv-free-trial/"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center rounded-md bg-[#CE1212] px-5 text-sm font-bold text-white"
            >
              Start Free Trial
              <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
