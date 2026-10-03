import {
  PrimaryButton,
  SecondaryButton,
} from "@/app/components/buttons";
import PageContainer from "@/app/components/page-container";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#10131e] py-16 text-[#e0e1f2]">
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#8b3dff]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#046ef1]/12 blur-[140px]" />
      <PageContainer className="relative">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.06] bg-[#181b27]/85 p-8 text-center shadow-xl md:p-12">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#afc6ff]">
            Error 404
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#cdc2d8]">
            The page you requested does not exist. Use one of the links below
            to continue browsing Golden IPTV.
          </p>
          <nav
            aria-label="Helpful pages"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <PrimaryButton href="/">Return Home</PrimaryButton>
            <SecondaryButton href="/pricing/">View Pricing</SecondaryButton>
            <SecondaryButton href="/devices/">Device Guides</SecondaryButton>
            <SecondaryButton href="/guides/">Setup Guides</SecondaryButton>
          </nav>
        </section>
      </PageContainer>
    </main>
  );
}
