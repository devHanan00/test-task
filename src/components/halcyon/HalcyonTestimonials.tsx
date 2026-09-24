"use client";

import { useState } from "react";
import { testimonials } from "@/data/halcyon/content";
import { AnimatedCard } from "./ui/AnimatedCard";
import { halcyonContent, halcyonHeading2, halcyonPage, halcyonPx120 } from "./ui/halcyonLayout";

const PAGINATION_HEIGHTS = [38, 19, 20];

export function HalcyonTestimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden py-[clamp(4rem,10vw,7.5rem)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/halcyon/testimonials-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(12, 26, 55, 0.8)" }}
        aria-hidden="true"
      />

      <div className={`relative ${halcyonPage} ${halcyonPx120}`}>
        <div className={`${halcyonContent} flex flex-col items-center gap-10 md:gap-[60px]`}>
          <div className="w-full max-w-[672px] self-start">
            <p className="font-display text-[11px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-yacht-white">
              Testimonials
            </p>
            <h2 className={`pt-4 text-yacht-white ${halcyonHeading2}`}>
              Some <span className="font-medium">Precious</span> Words
            </h2>
            <p className="pt-4 font-body text-[16px] leading-[26.4px] text-yacht-white md:text-[18px] md:leading-[30.6px]">
              Hear Precious Words From the people who have already lived in the moment.
            </p>
          </div>

        <AnimatedCard
          className="flex w-full max-w-[640px] flex-col items-center gap-[14px] rounded-[14px] border border-white/20 bg-white/5 p-6 backdrop-blur-sm sm:p-8 md:p-10"
          delay={150}
        >
          <blockquote key={active} className="animate-fade-up text-center">
            <p className="font-display text-[clamp(1.25rem,4vw,1.625rem)] font-normal leading-[1.55] tracking-[-0.5px] text-yacht-white">
              &ldquo; {current.quote} &ldquo;
            </p>
            <footer className="flex items-center justify-center py-0.5 pt-3.5 font-body text-[12px] uppercase leading-[15px] tracking-[2px] text-yacht-white sm:text-[14px] sm:tracking-[3px]">
              — {current.attribution}
            </footer>
          </blockquote>
        </AnimatedCard>

          <div
            className="flex h-[97px] w-[97px] items-center justify-center"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            <div className="flex -rotate-90 flex-col items-center justify-center gap-2.5">
              {PAGINATION_HEIGHTS.map((height, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-label={`View testimonial ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`w-1.5 rounded-lg transition-all duration-300 halcyon-focus-ring ${
                    active === index ? "bg-yacht-white" : "bg-yacht-white/20"
                  }`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
