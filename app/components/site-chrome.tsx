
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

  if (isCinematicHome || isCinematicPricing) {
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
