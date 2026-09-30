// Native details/summary keeps the landing-page FAQ keyboard and
// assistive-technology friendly without another client dependency.

export type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-2xl border border-[color:var(--glass-border)] bg-[var(--glass-surface)] shadow-[var(--shadow-card)] backdrop-blur-[var(--glass-blur)] open:border-[color:var(--border-elevated)] open:bg-[var(--glass-surface-elevated)]"
        >
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-text-primary marker:content-none sm:px-6 sm:text-lg">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--surface-higher)] text-[#d4bbff] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="mx-5 border-t border-border pb-5 pt-4 text-sm leading-7 text-text-secondary sm:mx-6 sm:pb-6">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
