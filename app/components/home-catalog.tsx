import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleHelp,
  ListChecks,
  MonitorSmartphone,
  SlidersHorizontal,
} from "lucide-react";

const destinations = [
  {
    title: "Supported Devices",
    description: "Open the setup paths for Smart TVs and streaming devices.",
    mobileDescription: "TVs, streaming devices and setup routes",
    image: "/images/home/stitch-catalog-sports.jpg",
    href: "/devices/",
    label: "Device guides",
    icon: MonitorSmartphone,
    accent: "text-[#d4bbff]",
    surface: "bg-[rgba(139,61,255,0.16)]",
  },
  {
    title: "Subscription Plans",
    description: "Compare the published 1, 3, 6 and 12-month options.",
    mobileDescription: "1, 3, 6 and 12-month options",
    image: "/images/home/stitch-catalog-cinema.jpg",
    href: "/pricing/",
    label: "Plan options",
    icon: ListChecks,
    accent: "text-[#afc6ff]",
    surface: "bg-[rgba(40,124,255,0.16)]",
  },
  {
    title: "Setup Guide",
    description: "Follow practical installation, speed and buffering guidance.",
    mobileDescription: "Step-by-step installation help",
    image: "/images/home/stitch-catalog-global.jpg",
    href: "/guides/",
    label: "Setup hub",
    icon: SlidersHorizontal,
    accent: "text-[#c1c1ff]",
    surface: "bg-[rgba(93,92,255,0.16)]",
  },
  {
    title: "Live Support",
    description: "Use the FAQ, contact page or Golden IPTV WhatsApp route.",
    mobileDescription: "FAQ, contact and WhatsApp",
    image: "/images/home/stitch-catalog-documentary.jpg",
    href: "/contact/",
    label: "Help centre",
    icon: CircleHelp,
    accent: "text-[#d4bbff]",
    surface: "bg-[rgba(139,61,255,0.16)]",
  },
] as const;

export default function HomeCatalog() {
  return (
    <section className="bg-[rgba(5,7,17,0.62)] py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--page-gutter)]">
        <div className="mb-5 lg:mb-7">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#c1c1ff]">
            Explore the platform
          </p>
          <h2 className="mt-1 font-heading text-[24px] font-bold leading-8 tracking-[-0.01em] text-text-primary lg:text-[44px] lg:leading-[52px]">
            <span className="lg:hidden">Quick Access &amp; Destinations</span>
            <span className="hidden lg:inline">Explore the Platform</span>
          </h2>
          <p className="mt-1 max-w-2xl text-[13px] leading-5 text-text-secondary lg:text-[15px] lg:leading-6">
            Jump to subscription options, supported-device guides, setup
            resources and dedicated help.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:hidden">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <Link
                key={destination.href}
                href={destination.href}
                className="group flex min-h-40 flex-col rounded-2xl border border-white/10 bg-[var(--surface-base)] p-4 transition-[border-color,background-color] hover:border-[color:var(--border-focus)] hover:bg-[var(--surface-elevated)]"
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full ${destination.surface} ${destination.accent}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-auto flex items-start justify-between gap-2 pt-4">
                  <span>
                    <span className="block font-heading text-[16px] font-semibold leading-5 text-text-primary">
                      {destination.title}
                    </span>
                    <span className="mt-1 block text-[11px] leading-4 text-text-secondary">
                      {destination.mobileDescription}
                    </span>
                  </span>
                  <ArrowRight
                    className={`mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${destination.accent}`}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden grid-cols-4 gap-6 lg:grid">
          {destinations.map((destination) => (
            <Link
              key={destination.href}
              href={destination.href}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-base)] shadow-lg transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color:var(--border-focus)] hover:shadow-[0_12px_32px_rgba(139,61,255,0.2)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative aspect-video overflow-hidden bg-[var(--surface-elevated)]">
                <Image
                  fill
                  src={destination.image}
                  alt=""
                  sizes="(min-width: 1024px) 22vw, 0px"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-base)] via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-md bg-[rgba(5,7,17,0.82)] px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {destination.label}
                </span>
              </div>
              <div className="p-4">
                <p className={`font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] ${destination.accent}`}>
                  Destination
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-text-primary transition-colors group-hover:text-white">
                  {destination.title}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-text-secondary">
                  {destination.description}
                </p>
                <span className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${destination.accent}`}>
                  Open destination
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
