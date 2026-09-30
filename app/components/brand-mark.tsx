type BrandMarkProps = {
  className?: string;
  showTagline?: boolean;
};

export default function BrandMark({
  className = "",
  showTagline = false,
}: BrandMarkProps) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-[var(--background-secondary)] shadow-[0_0_18px_rgba(139,61,255,0.28)]">
        <span
          aria-hidden="true"
          className="absolute inset-1 rounded-full bg-[linear-gradient(135deg,var(--brand-violet),var(--brand-blue))] opacity-90"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 28 28"
          className="relative h-5 w-5 text-white"
          fill="none"
        >
          <path
            d="M20.75 8.5A8.25 8.25 0 1 0 21.9 17h-7.4v-4h10.2v2c0 6.08-4.63 10.5-10.7 10.5A11.5 11.5 0 1 1 22.8 6.6l-2.05 1.9Z"
            fill="currentColor"
          />
          <path d="m13 9.25 6.25 4.75L13 18.75v-9.5Z" fill="#080b16" />
        </svg>
      </span>

      <span className="min-w-0">
        <span className="block whitespace-nowrap font-heading text-[20px] font-bold leading-7 tracking-[-0.02em] text-text-primary">
          Golden{" "}
          <span className="text-[#d4bbff]">IPTV</span>
        </span>
        {showTagline && (
          <span className="hidden whitespace-nowrap font-heading text-[9px] font-extrabold uppercase leading-3 tracking-[0.14em] text-text-muted sm:block">
            IPTV South Africa
          </span>
        )}
      </span>
    </span>
  );
}