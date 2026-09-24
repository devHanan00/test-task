import Image from "next/image";
import { HalcyonButton } from "./ui/HalcyonButton";

export function HalcyonHero() {
  return (
    <section className="relative min-h-[clamp(520px,92svh,758px)]">
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl md:rounded-[20px]">
        <Image
          src="/halcyon/hero-background.png"
          alt="Luxury yacht deck at sunset on Sarasota Bay"
          fill
          priority
          className="rounded-xl object-cover object-center md:rounded-[20px]"
          sizes="(max-width: 1440px) 100vw, 1405px"
        />
        <div
          className="absolute inset-0 rounded-xl md:rounded-[20px]"
          style={{
            backgroundImage:
              "linear-gradient(179.97deg, rgba(102, 102, 102, 0) 32.756%, rgba(0, 0, 0, 0.32) 44.804%, rgba(0, 0, 0, 0.8) 99.945%)",
          }}
        />
      </div>

      <div className="relative flex min-h-[clamp(520px,92svh,758px)] flex-col justify-between overflow-visible">
        {/* Figma: Club Regular 259px · tracking 68px · 1448×265 — exported as SVG for accurate rendering */}
        <div className="relative z-10 w-full shrink-0 px-4 pt-2 sm:px-6 sm:pt-0 md:px-8">
          <div className="mx-auto aspect-[1448/265] w-full max-w-[1448px] origin-top scale-[0.9] sm:scale-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/halcyon/hero-watermark.svg"
              alt=""
              className="block size-full object-contain object-center"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="w-full max-w-[820px] px-[clamp(1.25rem,5vw,6.25rem)] pb-[clamp(2rem,6.67vw,6rem)]">
          <p className="font-body text-[10px] uppercase leading-[15.4px] tracking-[2px] text-yacht-white sm:text-[11px] sm:tracking-[3.3px]">
            Sarasota Bay · Florida · Private Members&apos; Club
          </p>

          <h1 className="pt-4 font-display text-[clamp(1.75rem,6vw,4rem)] uppercase tracking-[-2px] text-yacht-white sm:pt-[28px] md:tracking-[-4px]">
            <span className="block leading-[1.2] md:leading-[86.4px]">
              <span className="font-normal">Good</span>{" "}
              <span className="font-light">company</span>
              <span className="font-medium">,</span>
            </span>
            <span className="block leading-[1.2] md:leading-[86.4px]">
              <span className="font-light">on the</span>{" "}
              <span className="font-normal">water</span>
              <span className="font-medium">.</span>
            </span>
          </h1>

          <div className="flex flex-col gap-3 pt-8 sm:gap-[14px] sm:pt-[48px] lg:flex-row lg:flex-nowrap lg:items-center">
            <HalcyonButton
              variant="cta-hero-primary"
              href="#introduction"
              showArrow
              arrowSrc="/halcyon/hero-arrow.svg"
              className="w-full justify-center sm:w-auto"
            >
              Request an Introduction
            </HalcyonButton>
            <HalcyonButton
              variant="cta-hero-ghost"
              href="#about"
              className="w-full justify-center sm:w-auto"
            >
              Discover More
            </HalcyonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
