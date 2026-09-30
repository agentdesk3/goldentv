import type { HTMLAttributes } from "react";

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export default function SurfaceCard({
  elevated = false,
  className = "",
  ...props
}: SurfaceCardProps) {
  const surface = elevated
    ? "border-[color:var(--border-elevated)] bg-[var(--glass-surface-elevated)] shadow-[var(--shadow-elevated)] backdrop-blur-[var(--glass-blur-elevated)]"
    : "border-[color:var(--glass-border)] bg-[var(--glass-surface)] shadow-[var(--shadow-card)] backdrop-blur-[var(--glass-blur)]";

  return (
    <div
      className={`rounded-[var(--radius-card-large)] border ${surface} ${className}`}
      {...props}
    />
  );
}
