"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { experiences } from "@/data/halcyon/content";
import { AnimatedCard, animatedCardImageClass } from "./ui/AnimatedCard";
import { HalcyonButton } from "./ui/HalcyonButton";
import { halcyonContent, halcyonHeading2, halcyonPage, halcyonPx120, halcyonSectionPy } from "./ui/halcyonLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const CARD_WIDTH = 320;
const GAP = 20;
const SCROLL_STEP = CARD_WIDTH + GAP;
const AUTO_INTERVAL = 4000;

const CAROUSEL_IMAGE_MAP: Record<string, string> = {
  "themed-evenings": "/halcyon/exp-themed-evenings.png",
  "chefs-table": "/halcyon/exp-chefs-table.png",
  "aqua-days": "/halcyon/exp-aqua-days.png",
  "grand-prix": "/halcyon/exp-grand-prix.png",
  salons: "/halcyon/exp-salons.png",
  tastings: "/halcyon/exp-tastings.png",
  "holiday-parade": "/halcyon/exp-holiday-parade.png",
};

const carouselItems = experiences.slice(1);

export function HalcyonExperiences() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const loopedItems = [...carouselItems, ...carouselItems];

  const scrollNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth / 2;
    if (el.scrollLeft >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
    } else {
      el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || isPaused) return;

    const timer = setInterval(scrollNext, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, scrollNext]);

  return (
    <section id="experiences" className={`overflow-hidden bg-white ${halcyonSectionPy}`}>
      <div className={`${halcyonPage} ${halcyonPx120}`}>
        <div className={halcyonContent}>
        <RevealOnScroll>
          <p className="font-display text-[11px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-riviera-blue">
            Experiences
          </p>
          <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className={`max-w-[576px] text-harbor-navy ${halcyonHeading2}`}>
            <span className="font-light">Every </span>
            <span className="font-medium">gathering </span>
            <span className="font-light">tells a </span>
            <span className="font-medium">different story.</span>
          </h2>
          <p className="max-w-[384px] font-body text-[16px] leading-[26.4px] text-harbor-navy">
            From sunset cruises to chef&apos;s tables, themed evenings to aqua days —
            there&apos;s always something worth showing up for.
          </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-4 pt-10 md:flex-row md:gap-5 md:pt-16">
          <AnimatedCard
            className="relative min-h-[260px] flex-1 overflow-hidden rounded-2xl bg-harbor-navy sm:min-h-[320px] md:min-h-[420px] md:rounded-[24px]"
            delay={0}
          >
            <Image
              src="/halcyon/exp-featured-1.png"
              alt="Elegant dinner table aboard the yacht"
              fill
              className={animatedCardImageClass}
              sizes="(max-width: 768px) 100vw, 590px"
            />
          </AnimatedCard>
          <AnimatedCard
            className="relative min-h-[260px] flex-1 overflow-hidden rounded-2xl bg-harbor-navy sm:min-h-[320px] md:min-h-[420px] md:rounded-[24px]"
            delay={120}
          >
            <Image
              src="/halcyon/exp-featured-2.png"
              alt="Members gathered on deck at sunset"
              fill
              className={animatedCardImageClass}
              sizes="(max-width: 768px) 100vw, 590px"
            />
          </AnimatedCard>
        </div>

        <div className="relative pt-10 md:pt-14">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-display text-[14px] font-normal uppercase leading-[17.4px] tracking-[1.44px] text-harbor-navy">
              More experiences
            </p>
            <div className="flex gap-[8px]">
              <HalcyonButton
                type="button"
                variant="icon-circle"
                onClick={() =>
                  scrollRef.current?.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" })
                }
                aria-label="Scroll experiences left"
              >
                ←
              </HalcyonButton>
              <HalcyonButton
                type="button"
                variant="icon-circle"
                onClick={() =>
                  scrollRef.current?.scrollBy({ left: SCROLL_STEP, behavior: "smooth" })
                }
                aria-label="Scroll experiences right"
              >
                →
              </HalcyonButton>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Experience carousel, auto-advancing"
          >
            {loopedItems.map((exp, i) => (
              <article
                key={`${exp.id}-${i}`}
                className="group relative flex h-[380px] w-[min(320px,78vw)] flex-shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl bg-stone-light transition-all duration-500 ease-editorial hover:-translate-y-2 hover:shadow-card sm:h-[443px] sm:w-[320px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={CAROUSEL_IMAGE_MAP[exp.id] ?? exp.image}
                    alt={exp.title}
                    fill
                    className={`${animatedCardImageClass} h-full w-full`}
                    sizes="320px"
                  />
                </div>
                <div className="relative z-10 w-full px-5 pb-10">
                  <h3 className="font-display text-[18px] font-normal leading-[24.3px] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                    {exp.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
