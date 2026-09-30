import type { HTMLAttributes } from "react";

export default function PageContainer({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--content-max-width)] px-[var(--page-gutter)] ${className}`}
      {...props}
    />
  );
}
