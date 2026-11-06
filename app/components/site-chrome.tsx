
"use client";

import { usePathname } from "next/navigation";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

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

  if (isCinematicHome || isCinematicPricing || isCinematicSetup || isCinematicTrial || isCinematicContact || isCinematicFaq || isCinematicGuides || isCinematicContent) {
    return <div className="flex-1">{children}</div>;
  }

  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
