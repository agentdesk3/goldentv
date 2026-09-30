import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  heading: ReactNode;
  supportingCopy?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  supportingCopy,
  align = "left",
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <p className="font-heading text-[11px] font-extrabold uppercase leading-4 tracking-[0.14em] text-brand-violet">
          {eyebrow}
        </p>
      )}
      <Heading className="mt-4 font-heading text-[30px] font-bold leading-[38px] tracking-[-0.015em] text-text-primary md:text-[44px] md:leading-[52px]">
        {heading}
      </Heading>
      {supportingCopy && (
        <p className="mt-4 text-lg leading-7 text-text-secondary">
          {supportingCopy}
        </p>
      )}
    </div>
  );
}
