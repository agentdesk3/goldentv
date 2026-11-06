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

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

export default function CinematicSetupHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const desktopActiveRef = useRef<HTMLAnchorElement>(null);

  function closeMenu() {
    setOpen(false);
    menuButtonRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onDesktop = () => {
      if (!desktop.matches) return;
      if (menuRef.current?.contains(document.activeElement) || document.activeElement === menuButtonRef.current) {
        desktopActiveRef.current?.focus();
      }
      setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      className="relative z-50 border-b border-white/10 bg-black text-[#EEEBDD]"
    >
      <a href="#setup-main" className={`sr-only z-50 rounded-md bg-[#EEEBDD] px-5 py-3 font-bold text-black focus:not-sr-only focus:absolute focus:left-5 focus:top-5 ${focusStyle}`}>
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10 lg:px-16">
        <Link href="/" aria-label="Golden IPTV home" className={`flex shrink-0 items-center rounded-md ${focusStyle}`}>
          <Image
            src="/assets/branding/logo-horizontal-transparent.png"
            alt="Golden IPTV"
            width={220}
            height={70}
            className="h-auto w-[145px] object-contain sm:w-[175px] lg:w-[195px]"
          />
        </Link>
        <nav aria-label="Setup primary navigation" className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              ref={item.href === "/devices/" ? desktopActiveRef : undefined}
              href={item.href}
              aria-current={item.href === "/devices/" ? "page" : undefined}
              className={`border-b-2 py-2 text-[13px] font-semibold transition-colors motion-reduce:transition-none ${focusStyle} ${item.href === "/devices/"
                ? "border-[#CE1212] text-[#EEEBDD]"
                : "border-transparent text-[#BDBDC5] hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/iptv-free-trial/" className={`ml-auto hidden min-h-11 items-center justify-center gap-2 rounded-md bg-[#CE1212] px-5 text-sm font-bold text-white transition-colors hover:bg-[#a90e0e] motion-reduce:transition-none sm:inline-flex xl:ml-0 ${focusStyle}`}>
          Start Free Trial <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="setup-mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/25 xl:hidden ${focusStyle}`}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      <div
        ref={menuRef}
        id="setup-mobile-navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-white/15 bg-[#101010] px-5 py-5 shadow-2xl xl:hidden"
      >
        <nav aria-label="Setup mobile navigation" className="mx-auto grid max-w-[1312px] gap-1">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              aria-current={item.href === "/devices/" ? "page" : undefined}
              onClick={closeMenu}
              className={`flex min-h-12 items-center rounded-md border-l-2 px-4 text-sm font-semibold ${focusStyle} ${item.href === "/devices/"
                ? "border-[#CE1212] bg-[#810000]/30 text-white"
                : "border-transparent text-[#BDBDC5] hover:bg-white/10 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/iptv-free-trial/" onClick={closeMenu} className={`mt-3 flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#CE1212] px-5 text-sm font-bold text-white ${focusStyle}`}>
            Start Free Trial <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
