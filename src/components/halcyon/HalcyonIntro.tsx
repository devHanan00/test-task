import Image from "next/image";
import { AnimatedCard, animatedCardImageClass } from "./ui/AnimatedCard";
import { halcyonContent, halcyonHeading2, halcyonPx40, halcyonSectionPy, halcyonShell1280 } from "./ui/halcyonLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const memberTags = ["Founders", "Pilots", "Creatives", "Athletes", "Writers", "Travelers"] as const;

export function HalcyonIntro() {
  return (
    <section id="about" className={`bg-stone-warm ${halcyonSectionPy}`}>
      <div className={`${halcyonShell1280} ${halcyonPx40}`}>
        <div className={halcyonContent}>
          <RevealOnScroll>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="w-full max-w-[672px]">
                <p className="font-display text-[12px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-riviera-blue">
                  The community
                </p>
                <h2 className={`pt-4 text-harbor-navy ${halcyonHeading2}`}>
                  Interesting <span className="font-medium">people</span>{" "}
                  <span className="font-medium">meeting interesting</span> people.
                </h2>
              </div>
              <p className="w-full max-w-[384px] font-body text-[16px] leading-[26.4px] text-harbor-navy lg:text-right">
                Founders, pilots, writers, athletes, travelers — members who have already
                experienced luxury and come for something richer: genuine connection.
              </p>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-4 pt-10 md:flex-row md:gap-5 md:pt-16">
            <AnimatedCard
              className="relative h-[280px] overflow-hidden rounded-xl md:h-auto md:min-h-[460px] md:flex-[7] md:rounded-2xl"
              delay={0}
            >
              <Image
                src="/halcyon/community-friends.png"
                alt="Friends laughing on deck at golden hour"
                fill
                className={animatedCardImageClass}
                sizes="(max-width: 768px) 100vw, 692px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-harbor-navy/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </AnimatedCard>

            <div className="flex flex-col gap-4 md:flex-[5] md:gap-5">
              <AnimatedCard
                className="relative h-[200px] overflow-hidden rounded-xl sm:h-[220px] md:rounded-2xl"
                delay={120}
              >
                <Image
                  src="/halcyon/community-dinner.png"
                  alt="Elegant dinner table aboard the yacht"
                  fill
                  className={animatedCardImageClass}
                  sizes="(max-width: 768px) 100vw, 488px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-harbor-navy/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </AnimatedCard>

              <AnimatedCard
                className="relative h-[200px] overflow-hidden rounded-xl sm:h-[220px] md:rounded-2xl"
                delay={240}
              >
                <Image
                  src="/halcyon/community-sunset.png"
                  alt="Members watching sunset over the water"
                  fill
                  className={animatedCardImageClass}
                  sizes="(max-width: 768px) 100vw, 488px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-harbor-navy/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </AnimatedCard>
            </div>
          </div>

          <RevealOnScroll className="mt-10 md:mt-16" delay={300}>
            <div
              className="flex min-h-[50.667px] flex-wrap items-center gap-4 border-t border-stone-light pt-6 sm:gap-8 md:pt-8"
              style={{ borderTopWidth: "0.667px" }}
            >
              {memberTags.map((tag) => (
                <span
                  key={tag}
                  className="font-display text-[12px] font-normal uppercase leading-[17.4px] tracking-[1.44px] text-harbor-navy transition-colors duration-300 hover:text-sunset-orange"
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
