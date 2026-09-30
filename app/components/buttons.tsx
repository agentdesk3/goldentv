import Link from "next/link";
import type {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  disabled?: boolean;
  size?: "default" | "compact";
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const baseStyles =
  "ui-button inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold transition-[transform,background-color,border-color,box-shadow,filter,color] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-45 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0";

const sizeStyles = {
  default: "min-h-12 px-6 text-sm",
  compact: "min-h-10 px-4 text-[13px]",
};

function ButtonLink({
  href,
  children,
  className = "",
  target,
  rel,
  disabled = false,
  size = "default",
  ariaLabel,
  onClick,
  variantClassName,
}: ButtonProps & { variantClassName: string }) {
  const styles = `${baseStyles} ${sizeStyles[size]} ${variantClassName} ${className}`;

  if (disabled) {
    return (
      <span className={styles} aria-disabled="true" aria-label={ariaLabel}>
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={styles}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export function PrimaryButton(props: ButtonProps) {
  return (
    <ButtonLink
      {...props}
      variantClassName="[background:var(--gradient-cta)] text-white shadow-[0_12px_28px_-14px_rgba(139,61,255,0.78)] hover:brightness-110 hover:shadow-[var(--shadow-primary-hover)]"
    />
  );
}

export function SecondaryButton(props: ButtonProps) {
  return (
    <ButtonLink
      {...props}
      variantClassName="border border-[color:var(--border-elevated)] bg-[var(--surface-elevated)] text-text-primary shadow-[var(--shadow-card)] backdrop-blur-[var(--glass-blur)] hover:border-[color:var(--border-focus)] hover:bg-[var(--surface-higher)]"
    />
  );
}

export function GhostButton(props: ButtonProps) {
  return (
    <ButtonLink
      {...props}
      variantClassName="border border-transparent bg-[var(--glass-surface)] text-text-primary backdrop-blur-[var(--glass-blur)] hover:border-[color:var(--border-elevated)] hover:bg-[var(--surface-elevated)] hover:text-white"
    />
  );
}
