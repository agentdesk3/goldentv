"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const GA_MEASUREMENT_ID = "G-T7R69VENJJ";

type AnalyticsEventName =
  | "whatsapp_click"
  | "pricing_view"
  | "free_trial_view";

type AnalyticsEventParameters = {
  page_path: string;
  cta_location?: string;
  cta_label?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event",
      eventName: AnalyticsEventName,
      parameters: AnalyticsEventParameters,
    ) => void;
  }
}

function normalizePagePath(pathname: string) {
  if (pathname === "/") return pathname;
  return `${pathname.replace(/\/+$/, "")}/`;
}

function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  parameters: AnalyticsEventParameters,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}

export function trackWhatsAppClick(
  ctaLocation: string,
  ctaLabel?: string,
) {
  if (typeof window === "undefined") return;

  trackAnalyticsEvent("whatsapp_click", {
    page_path: normalizePagePath(window.location.pathname),
    cta_location: ctaLocation,
    ...(ctaLabel ? { cta_label: ctaLabel } : {}),
  });
}

function isWhatsAppLink(anchor: HTMLAnchorElement) {
  try {
    const hostname = new URL(anchor.href).hostname.toLowerCase();
    return ["wa.me", "www.wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(
      hostname,
    );
  } catch {
    return false;
  }
}

function getCtaLocation(anchor: HTMLAnchorElement) {
  const explicitLocation = anchor.closest<HTMLElement>(
    "[data-analytics-location]",
  )?.dataset.analyticsLocation;

  if (explicitLocation) return explicitLocation;

  const landmark = anchor.closest<HTMLElement>(
    "section[id], header, nav, footer, main",
  );

  return landmark?.id || landmark?.tagName.toLowerCase() || "page";
}

function getCtaLabel(anchor: HTMLAnchorElement) {
  const label = anchor.getAttribute("aria-label") || anchor.textContent;
  const normalizedLabel = label?.replace(/\s+/g, " ").trim();

  return normalizedLabel ? normalizedLabel.slice(0, 80) : undefined;
}

function AnalyticsEvents({ ready }: { ready: boolean }) {
  const pathname = usePathname();
  const lastCommercialPath = useRef<string | null>(null);

  useEffect(() => {
    if (!ready) return;

    const normalizedPath = normalizePagePath(pathname);
    if (lastCommercialPath.current === normalizedPath) return;

    lastCommercialPath.current = normalizedPath;

    if (normalizedPath === "/pricing/") {
      trackAnalyticsEvent("pricing_view", { page_path: normalizedPath });
    }

    if (normalizedPath === "/iptv-free-trial/") {
      trackAnalyticsEvent("free_trial_view", { page_path: normalizedPath });
    }
  }, [pathname, ready]);

  useEffect(() => {
    if (!ready) return;

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || !isWhatsAppLink(anchor)) return;

      trackWhatsAppClick(getCtaLocation(anchor), getCtaLabel(anchor));
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [ready]);

  return null;
}

export default function GoogleAnalytics() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Script
        id="golden-iptv-ga4"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <AnalyticsEvents ready={ready} />
    </>
  );
}
