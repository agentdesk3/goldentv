import Link from "next/link";

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEEBDD] focus-visible:shadow-none";

export default function NotFound() {
  return (
    <main id="guide-main" tabIndex={-1} className="relative bg-[#0B0A0A] text-[#EEEBDD] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#EEEBDD]">
      <div className="mx-auto grid min-h-[70vh] max-w-[1440px] items-center gap-10 px-5 py-12 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-16 lg:py-24">
        <div aria-hidden="true" className="relative flex min-w-0 items-center justify-center border-l-2 border-[#CE1212] bg-[#211617] px-4 py-10 sm:py-14 lg:min-h-[420px]">
          <span className="font-heading text-[clamp(7rem,21vw,17rem)] font-semibold leading-none tracking-[-0.07em] text-[#EEEBDD]">404</span>
          <span className="absolute bottom-6 right-6 h-px w-12 bg-[#CE1212]" />
        </div>
        <div className="min-w-0 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#BDBDC5]">Error 404</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Page not found</h1>
          <p className="mt-6 text-base leading-8 text-[#BDBDC5]">
            The page you requested does not exist. Use one of the links below
            to continue browsing Golden IPTV.
          </p>
          <Link href="/" className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#CE1212] px-6 py-3 text-sm font-bold text-white hover:bg-[#a90e0e] ${focusStyle}`}>Return Home</Link>
          <nav aria-label="Helpful pages" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5">
            <Link href="/pricing/" className={`inline-flex min-h-11 items-center py-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-4 hover:decoration-[#EEEBDD] ${focusStyle}`}>View Pricing</Link>
            <Link href="/devices/" className={`inline-flex min-h-11 items-center py-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-4 hover:decoration-[#EEEBDD] ${focusStyle}`}>Device Guides</Link>
            <Link href="/guides/" className={`inline-flex min-h-11 items-center py-2 text-sm font-semibold underline decoration-[#CE1212] underline-offset-4 hover:decoration-[#EEEBDD] ${focusStyle}`}>Setup Guides</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
