import Image from "next/image";

const networkMarks = [
  { name: "CNN", logo: "/brands/channels/cnn.svg" },
  { name: "Sky", logo: "/brands/channels/sky.svg" },
  { name: "HBO", logo: "/brands/channels/hbo.svg" },
  { name: "CBC", logo: "/brands/channels/cbc.svg" },
  { name: "Animal Planet", logo: "/brands/channels/animal-planet.svg" },
  { name: "Netflix", logo: "/brands/channels/netflix.svg" },
  { name: "Paramount+", logo: "/brands/channels/paramount-plus.svg" },
  { name: "DAZN", logo: "/brands/channels/dazn.svg" },
  { name: "Viaplay", logo: "/brands/channels/viaplay.svg" },
  { name: "RTL", logo: "/brands/channels/rtl.svg" },
] as const;

function NetworkMark({ mark }: { mark: (typeof networkMarks)[number] }) {
  return (
    <li className="group flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#12182a]/70 px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl transition-[border-color,background-color,filter] duration-200 hover:border-white/[0.14] hover:bg-[#181f33]/90 hover:brightness-110 sm:h-[4.5rem] sm:w-48">
      <span className="relative h-8 w-full sm:h-9">
        <Image
          src={mark.logo}
          alt={mark.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 120px, 152px"
          className="object-contain opacity-45 [filter:grayscale(1)_brightness(0)_invert(1)] transition-opacity duration-200 group-hover:opacity-90"
        />
      </span>
    </li>
  );
}

function MarkGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="channel-marquee-group" aria-hidden={duplicate || undefined}>
      {networkMarks.map((mark) => (
        <NetworkMark key={mark.name} mark={mark} />
      ))}
    </ul>
  );
}

export default function ChannelMarquee() {
  return (
    <section
      aria-labelledby="worldwide-entertainment-title"
      className="border-y border-white/[0.06] bg-[#0b0e19] py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#c1c1ff]">
            Worldwide entertainment
          </p>
          <h2
            id="worldwide-entertainment-title"
            className="mt-2 font-heading text-[28px] font-bold leading-tight tracking-[-0.015em] sm:text-[36px]"
          >
            Entertainment From Around the World.
          </h2>
          <p className="mt-3 text-[14px] leading-6 text-text-secondary sm:text-[15px]">
            Explore international entertainment and content categories across
            regions, languages and interests.
          </p>
        </div>
      </div>
      <div
        className="channel-marquee-viewport mt-8"
        aria-label="International entertainment brands. No affiliation or endorsement is implied."
      >
        <div className="channel-marquee-track">
          <MarkGroup />
          <MarkGroup duplicate />
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-3xl px-5 text-center text-[10px] leading-4 text-text-muted sm:px-8">
        Brand marks are shown for identification only; no partnership,
        affiliation or endorsement is implied.
      </p>
    </section>
  );
}
