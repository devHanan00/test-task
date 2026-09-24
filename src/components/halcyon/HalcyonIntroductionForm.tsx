"use client";

import { useState, type FormEvent } from "react";
import { connectOptions } from "@/data/halcyon/content";
import { HalcyonButton, connectPillStyles } from "./ui/HalcyonButton";
import { AnimatedCard } from "./ui/AnimatedCard";
import {
  halcyonContent,
  halcyonHeading2,
  halcyonPx40,
  halcyonSectionPy,
  halcyonShell1280,
} from "./ui/halcyonLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const formCardClassName =
  "w-full rounded-2xl bg-[rgba(27,47,91,0.3)] p-6 backdrop-blur-md backdrop-saturate-150 sm:p-8 md:rounded-[24px] md:p-10";

const inputClassName =
  "h-[51px] w-full border-b border-stone-light bg-transparent font-body text-[16px] leading-normal text-yacht-white outline-none placeholder:text-[#9ca3af]";

const labelClassName =
  "block pb-2 font-display text-[18px] font-medium leading-[21.7px] tracking-[-0.5px] text-yacht-white";

export function HalcyonIntroductionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="introduction"
      className={`relative flex flex-col items-center justify-center overflow-hidden ${halcyonSectionPy}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/halcyon/form-bg.png"
            alt=""
            className="absolute left-0 max-w-none object-cover"
            style={{ height: "137.07%", width: "124.11%", top: "-14.95%" }}
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(12, 26, 55, 0.6)" }} />
      </div>

      <div className={`relative ${halcyonShell1280} ${halcyonPx40}`}>
        <div className={`${halcyonContent} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20`}>
          <RevealOnScroll className="flex w-full max-w-[560px] flex-col justify-center">
            <p className="font-display text-[11px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-yacht-white">
              Begin here
            </p>
            <h2 className={`pt-4 text-yacht-white ${halcyonHeading2}`}>
              Request an <span className="font-medium">introduction</span>.
            </h2>
            <p className="pt-4 font-body text-[16px] leading-[26.4px] text-yacht-white">
              This isn&apos;t a lead form , it&apos;s the first step toward an evening aboard.
              Tell us a little about yourself, and we&apos;ll be in touch to extend a guest
              invitation.
            </p>
          </RevealOnScroll>

          <AnimatedCard
            className="w-full justify-self-stretch lg:max-w-[640px] lg:justify-self-end"
            delay={150}
            hover={false}
          >
            {submitted ? (
              <div className={formCardClassName}>
                <p className="font-display text-[25.6px] font-normal leading-8 text-yacht-white">
                  Thank you for reaching out.
                </p>
                <p className="mt-4 font-body text-[16px] leading-[26.4px] text-yacht-white">
                  We&apos;ll review your introduction and be in touch soon. In the meantime,
                  imagine a sunset over Sarasota Bay — that&apos;s where we&apos;ll meet you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={formCardClassName} noValidate>
                <div className="flex flex-col gap-[24px]">
                  <div>
                    <label htmlFor="name" className={labelClassName}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClassName}
                      style={{ borderBottomWidth: "0.667px" }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClassName}
                      style={{ borderBottomWidth: "0.667px" }}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="introduced" className={labelClassName}>
                      Who introduced you? (optional)
                    </label>
                    <input
                      type="text"
                      id="introduced"
                      name="introduced"
                      className={inputClassName}
                      style={{ borderBottomWidth: "0.667px" }}
                      placeholder="A member's name, if applicable"
                    />
                  </div>

                  <div>
                    <label htmlFor="about" className={labelClassName}>
                      A little about yourself
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      className="h-[104px] w-full resize-none border-b border-stone-light bg-transparent py-3 font-body text-[16px] leading-[26.4px] text-yacht-white outline-none placeholder:text-[#9ca3af]"
                      style={{ borderBottomWidth: "0.667px" }}
                      placeholder="What draws you to Halcyon?"
                    />
                  </div>

                  <fieldset className="w-full">
                    <legend className="font-display text-[18px] font-medium leading-[21.7px] tracking-[-0.5px] text-yacht-white">
                      Preferred way to connect
                    </legend>
                    <div className="flex min-h-[51px] flex-wrap items-start gap-[12px] pt-3">
                      {connectOptions.map((option) => (
                        <label
                          key={option}
                          className={connectPillStyles.base}
                          style={{ borderWidth: connectPillStyles.borderWidth }}
                        >
                          <input type="radio" name="connect" value={option} className="sr-only" />
                          <span className="font-body text-[14px] leading-[21.7px] text-yacht-white">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <HalcyonButton
                    type="submit"
                    variant="cta-orange"
                    showArrow
                    arrowSrc="/halcyon/form-arrow.svg"
                    className="w-full justify-center"
                  >
                    Request an Introduction
                  </HalcyonButton>
                </div>
              </form>
            )}
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
