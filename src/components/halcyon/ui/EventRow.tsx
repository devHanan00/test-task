"use client";

type EventRowProps = {
  index: number;
  date: string;
  title: string;
  description: string;
};

export function EventRow({ index, date, title, description }: EventRowProps) {
  return (
    <article className="group relative border-t border-stone-light py-6 transition-colors duration-300 first:border-t-0 hover:bg-stone-warm/50 md:py-8">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-[4rem_8rem_1fr] md:items-baseline md:gap-8 lg:grid-cols-[5rem_9rem_1fr]">
        <span className="font-display text-metadata text-stone-mist transition-colors duration-300 group-hover:text-sunset-orange">
          {String(index + 1).padStart(2, "0")}
        </span>
        <time className="font-display text-metadata uppercase tracking-[0.12em] text-harbor-navy/70">
          {date}
        </time>
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
          <h3 className="font-display text-heading-sm font-normal text-harbor-navy transition-transform duration-300 group-hover:translate-x-1">
            {title}
          </h3>
          <p className="max-w-md font-body text-body-sm text-harbor-navy/60 md:text-right">
            {description}
          </p>
        </div>
      </div>
      <span
        className="absolute left-0 top-0 h-0 w-0.5 bg-sunset-orange transition-all duration-500 group-hover:h-full"
        aria-hidden="true"
      />
    </article>
  );
}
