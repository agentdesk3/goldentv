"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import BrandMark from "@/app/components/brand-mark";
import { PrimaryButton, SecondaryButton } from "@/app/components/buttons";
import PageContainer from "@/app/components/page-container";
import { WHATSAPP_URL } from "@/app/components/whatsapp";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Plans", href: "/pricing/" },
  { label: "Free Trial", href: "/iptv-free-trial/" },
  { label: "Devices", href: "/devices/" },
  { label: "Setup", href: "/guides/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Support", href: "/contact/" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;

    const normalizedHref = href.replace(/\/$/, "");
    return (
      pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`)
    );
  };

  useEffect(() => {
    if (!open) return;

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(5,7,17,0.86)] shadow-[0_12px_32px_rgba(5,7,17,0.8),0_0_24px_rgba(139,61,255,0.08)] backdrop-blur-[20px]">
      <PageContainer>
        <div
          className={`relative flex items-center justify-between gap-4 ${
            isHome ? "h-16 lg:h-20" : "h-20"
          }`}
        >
          <Link
            href="/"
            aria-label="Golden IPTV home"
            className="shrink-0 rounded-full"
            onClick={() => setOpen(false)}
          >
            <BrandMark />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 items-center gap-1 rounded-full bg-[rgba(8,11,22,0.74)] p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] xl:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-1 text-[13px] font-semibold leading-5 transition-[background-color,color,box-shadow] duration-200 motion-reduce:transition-none ${
                    active
                      ? "bg-[rgba(18,24,42,0.72)] text-[#d4bbff] shadow-[0_0_16px_rgba(139,61,255,0.35)]"
                      : "text-text-secondary hover:bg-[var(--surface-base)] hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div
            className={`ml-auto shrink-0 items-center gap-2 xl:ml-0 ${
              isHome ? "flex" : "hidden sm:flex"
            }`}
          >
            <Link
              href="/guides/how-to-install-iptv/"
              className="hidden rounded-full px-4 py-2 text-[13px] font-semibold leading-5 text-text-secondary transition-colors hover:text-text-primary 2xl:inline-flex"
            >
              Setup Guide
            </Link>
            {isHome && (
              <Link
                href="/iptv-free-trial/"
                className="inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--gradient-cta)] px-4 text-[13px] font-bold text-white shadow-[0_0_16px_rgba(139,61,255,0.4)] lg:hidden"
              >
                Free Trial
              </Link>
            )}
            <span className={isHome ? "hidden lg:contents" : "contents"}>
              <PrimaryButton
                href="/iptv-free-trial/"
                size="compact"
                className={isHome ? "" : "hidden md:inline-flex"}
              >
                Start Free Trial
              </PrimaryButton>
              <SecondaryButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="compact"
                ariaLabel="Chat with Golden IPTV on WhatsApp"
                className="h-8 w-8 min-h-8 border-0 bg-[#d4bbff] px-0 text-[#41008b] shadow-none hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Chat on WhatsApp</span>
              </SecondaryButton>
            </span>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className={`h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-elevated)] bg-[var(--surface-elevated)] text-text-primary transition-[background-color,border-color] hover:border-[color:var(--border-focus)] hover:bg-[var(--surface-higher)] xl:hidden ${
              isHome ? "hidden lg:inline-flex" : "inline-flex"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {open && (
            <div
              id="mobile-navigation"
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-3xl border border-[color:var(--border-elevated)] bg-[rgba(8,11,22,0.97)] p-3 shadow-[var(--shadow-elevated)] backdrop-blur-[28px] xl:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="grid gap-1 sm:grid-cols-2"
              >
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-12 items-center rounded-2xl border px-4 text-sm font-semibold transition-[background-color,border-color,color] ${
                        active
                          ? "border-[color:var(--border-elevated)] bg-[rgba(139,61,255,0.16)] text-white"
                          : "border-transparent text-text-secondary hover:border-[color:var(--glass-border)] hover:bg-white/[0.045] hover:text-white"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mr-3 h-2 w-2 rounded-full bg-[var(--brand-violet)] shadow-[0_0_10px_rgba(139,61,255,0.72)] ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-3 grid gap-2 border-t border-border pt-3 sm:grid-cols-2">
                <SecondaryButton
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle />
                  Chat on WhatsApp
                </SecondaryButton>
                <PrimaryButton
                  href="/iptv-free-trial/"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Start Free Trial
                </PrimaryButton>
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </header>
  );
}