import { gatherings } from "@/data/halcyon/content";
import { AnimatedCard } from "./ui/AnimatedCard";
import { halcyonContent, halcyonHeading2, halcyonPx40, halcyonSectionPy, halcyonShell1280 } from "./ui/halcyonLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function HalcyonGatherings() {
  return (
    <section id="gatherings" className={`bg-stone-warm ${halcyonSectionPy}`}>
      <div className={`${halcyonShell1280} ${halcyonPx40}`}>
        <div className={`${halcyonContent} grid gap-10 lg:grid-cols-[357px_1fr] lg:gap-16`}>
          <RevealOnScroll className="max-w-[357px]">
            <p className="font-display text-[11px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-riviera-blue">
              Upcoming gatherings
            </p>
            <h2 className={`pt-4 text-harbor-navy ${halcyonHeading2}`}>
              Your <span className="font-medium">invitation</span> calendar.
            </h2>
            <p className="pt-4 font-body text-[16px] leading-[26.4px] text-harbor-navy">
              A glimpse of what&apos;s ahead. Full details are shared privately with members
              and invited guests.
            </p>
          </RevealOnScroll>

          <AnimatedCard
            className="rounded-xl bg-yacht-white px-5 py-2 shadow-soft sm:px-8 md:rounded-2xl md:px-10"
            delay={150}
          >
            {gatherings.map((event, index) => (
              <article
                key={event.date}
                className={`grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 py-6 sm:gap-x-6 lg:grid-cols-[3rem_7.5rem_minmax(0,9.5rem)_minmax(0,1fr)] lg:items-start lg:gap-x-8 lg:py-8 ${
                  index > 0 ? "border-t border-stone-light" : ""
                }`}
                style={index > 0 ? { borderTopWidth: "0.667px" } : undefined}
              >
                <span className="font-display text-[12px] leading-[17.4px] tracking-[0.96px] text-stone-mist lg:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time className="font-display text-[12px] uppercase leading-[17.4px] tracking-[1.44px] text-harbor-navy lg:pt-1">
                  {event.date}
                </time>
                <h3 className="col-span-2 font-display text-[16px] font-normal leading-[21.7px] text-harbor-navy lg:col-span-1 lg:max-w-[152px] lg:pr-2">
                  {event.title}
                </h3>
                <p className="col-span-2 font-body text-[14px] leading-[21.7px] text-harbor-navy lg:col-span-1 lg:text-right">
                  {event.description}
                </p>
              </article>
            ))}
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
