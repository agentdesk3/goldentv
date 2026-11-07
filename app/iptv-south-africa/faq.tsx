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
          className="group min-w-0 border-b border-white/20 bg-[#151111] open:border-[#CE1212]"
        >
          <summary className="flex min-h-16 cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left font-heading text-base font-semibold text-[#EEEBDD] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#EEEBDD] focus-visible:shadow-none sm:px-6 sm:text-lg">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center text-[#EEEBDD] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="mx-5 border-t border-white/15 pb-5 pt-4 text-sm leading-7 text-[#BDBDC5] [overflow-wrap:anywhere] sm:mx-6 sm:pb-6">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
