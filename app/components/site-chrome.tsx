
"use client";

import { usePathname } from "next/navigation";

import CinematicContentFooter from "@/app/components/cinematic-content-footer";
import CinematicContentHeader from "@/app/components/cinematic-content-header";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isCinematicHome = pathname === "/";
  const isCinematicPricing =
    pathname === "/pricing" || pathname === "/pricing/";
  const isCinematicSetup =
    pathname === "/devices" || pathname === "/devices/";
  const isCinematicTrial =
    pathname === "/iptv-free-trial" || pathname === "/iptv-free-trial/";
  const isCinematicContact =
    pathname === "/contact" || pathname === "/contact/";
  const isCinematicFaq =
    pathname === "/faq" || pathname === "/faq/";
  const isCinematicGuides =
    pathname === "/guides" || pathname === "/guides/";
  const isCinematicSouthAfrica = pathname.replace(/\/$/, "") === "/iptv-south-africa";
  const isCinematicLegal = ["/privacy", "/terms", "/refund-policy"].includes(pathname.replace(/\/$/, ""));
  const isCinematicContent = [
    "/devices/samsung-smart-tv",
    "/devices/lg-smart-tv",
    "/devices/android-tv",
    "/devices/apple-tv",
    "/devices/firestick",
    "/guides/how-to-install-iptv",
    "/guides/iptv-buffering",
    "/guides/internet-speed-for-iptv",
  ].includes(pathname.replace(/\/$/, ""));

  if (isCinematicHome || isCinematicPricing || isCinematicSetup || isCinematicTrial || isCinematicContact || isCinematicFaq || isCinematicGuides || isCinematicContent || isCinematicLegal || isCinematicSouthAfrica) {
    return <div className="flex-1">{children}</div>;
  }

  return (
    <>
      <CinematicContentHeader activeHref={null} />
      <div className="flex-1">{children}</div>
      <CinematicContentFooter />
    </>
  );
}
