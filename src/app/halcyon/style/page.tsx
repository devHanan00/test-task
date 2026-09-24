import Link from "next/link";
import {
  halcyonColors,
  halcyonFigmaType,
  halcyonLayoutTokens,
  halcyonMotion,
  halcyonShapes,
  halcyonSpacing,
  halcyonTypography,
} from "@/lib/halcyon/tokens";
import { AnimatedCard, animatedCardImageClass } from "@/components/halcyon/ui/AnimatedCard";
import { CountUp } from "@/components/halcyon/ui/CountUp";
import { EventRow } from "@/components/halcyon/ui/EventRow";
import { HalcyonButton, connectPillStyles } from "@/components/halcyon/ui/HalcyonButton";
import { HalcyonLogo } from "@/components/halcyon/ui/HalcyonLogo";
import { MembershipStep } from "@/components/halcyon/ui/MembershipStep";
import { NauticalCoordinates } from "@/components/halcyon/ui/NauticalCoordinates";
import { WaveDivider } from "@/components/halcyon/ui/WaveDivider";
import { HalcyonWaveDivider } from "@/components/halcyon/HalcyonWaveDivider";
import { gatherings, testimonials } from "@/data/halcyon/content";
import {
  halcyonContent,
  halcyonHeading2,
  halcyonHero,
  halcyonPage,
  halcyonPx120,
  halcyonSectionPy,
  halcyonShell1280,
  halcyonWide1201,
} from "@/components/halcyon/ui/halcyonLayout";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 border-b border-stone-light pb-6">
      <p className={`${halcyonFigmaType.eyebrow.className} mb-2`}>
        {eyebrow}
      </p>
      <h2 className={`text-harbor-navy ${halcyonHeading2}`}>{title}</h2>
    </div>
  );
}

function Swatch({ hex, name, usage }: { hex: string; name: string; usage: string }) {
  const isLight = hex === "#FFFFFF" || hex === "#F5F0EA" || hex === "#E8EEF7" || hex === "#EBE4DB";
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`aspect-[3/2] rounded-lg border ${isLight ? "border-stone-light" : "border-transparent"}`}
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">{name}</p>
        <p className="font-body text-[14px] leading-[21.7px] text-harbor-navy/50">{hex}</p>
        <p className="mt-1 font-body text-[14px] leading-[21.7px] text-harbor-navy/65">{usage}</p>
      </div>
    </div>
  );
}

function TypeSample({
  label,
  className,
  sample,
  specs,
}: {
  label: string;
  className: string;
  sample: string;
  specs: string;
}) {
  return (
    <div className="border-b border-stone-light py-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <span className="font-body text-[14px] font-medium leading-[21.7px] text-harbor-navy/50">{label}</span>
        <span className="font-body text-[14px] leading-[21.7px] text-harbor-navy/40">{specs}</span>
      </div>
      <p className={`mt-3 ${className}`}>{sample}</p>
    </div>
  );
}

export default function HalcyonStylePage() {
  const figmaSamples = Object.values(halcyonFigmaType);

  return (
    <div className="min-h-screen bg-yacht-white">
      <header className="border-b border-stone-light bg-harbor-navy py-12 md:py-16">
        <div className={`${halcyonPage} ${halcyonPx120}`}>
          <Link
            href="/halcyon"
            className="font-body text-[14px] leading-[21.7px] text-yacht-white/60 transition-colors hover:text-sunset-orange"
          >
            ← Back to Halcyon
          </Link>
          <h1 className="mt-6 font-display text-display-lg font-light text-yacht-white">
            Halcyon Design System
          </h1>
          <p className="mt-3 max-w-xl font-body text-[16px] leading-[26.4px] text-yacht-white/65">
            Visual language, Figma-accurate typography, layout tokens, and components for the live
            /halcyon route.
          </p>
        </div>
      </header>

      <div className={`${halcyonPage} ${halcyonPx120} py-section-md`}>
        <div className={halcyonContent}>
          {/* Colors */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Foundation" title="Colors" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {Object.values(halcyonColors).map((color) => (
                <Swatch key={color.hex} hex={color.hex} name={color.name} usage={color.usage} />
              ))}
            </div>
          </section>

          {/* Typography — Figma production scale */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Foundation" title="Typography — Production" />
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-stone-warm p-6">
                <p className="font-body text-[14px] leading-[21.7px] text-harbor-navy/50">Display & Headings</p>
                <p className="mt-1 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                  {halcyonTypography.display.family}
                </p>
                <p className="mt-1 font-body text-[14px] leading-[21.7px] text-harbor-navy/60">
                  Weight: {halcyonTypography.display.weight}
                </p>
              </div>
              <div className="rounded-lg bg-stone-warm p-6">
                <p className="font-body text-[14px] leading-[21.7px] text-harbor-navy/50">Body</p>
                <p className="mt-1 font-body text-[18px] leading-[30.6px] text-harbor-navy">
                  {halcyonTypography.body.family}
                </p>
                <p className="mt-1 font-body text-[14px] leading-[21.7px] text-harbor-navy/60">
                  Weight: {halcyonTypography.body.weight}
                </p>
              </div>
            </div>

            <p className="mb-6 font-body text-[14px] leading-[21.7px] text-harbor-navy/65">
              These styles match the live page (Figma 1440 frame). Tailwind utility tokens below remain
              available for editorial flexibility.
            </p>

            {figmaSamples
              .filter((type) => type.label !== "Hero Watermark")
              .map((type) => (
              <TypeSample
                key={type.label}
                label={type.label}
                className={type.className}
                sample={
                  type.label === "Stat Value"
                      ? "150"
                      : type.label === "CTA Button"
                        ? "Request an Introduction"
                        : type.label.includes("Form")
                          ? type.label.includes("Label")
                            ? "Full name"
                            : "Jane Smith"
                          : "Good company, on the water."
                }
                specs={type.specs}
              />
            ))}

            <div className="border-b border-stone-light py-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <span className="font-body text-[14px] font-medium leading-[21.7px] text-harbor-navy/50">
                  {halcyonFigmaType.heroWatermark.label}
                </span>
                <span className="font-body text-[14px] leading-[21.7px] text-harbor-navy/40">
                  {halcyonFigmaType.heroWatermark.specs}
                </span>
              </div>
              <div className="mt-3 overflow-hidden rounded-lg bg-harbor-navy p-4">
                <div className={`mx-auto ${halcyonFigmaType.heroWatermark.className}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/halcyon/hero-watermark.svg"
                    alt=""
                    width={1448}
                    height={265}
                    className="block h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Typography — Tailwind scale */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Foundation" title="Typography — Tailwind Scale" />
            <TypeSample
              label="Display XL"
              className="font-display text-display-xl font-light text-harbor-navy"
              sample="Good company, on the water."
              specs="clamp(2.75rem → 5.5rem) · lh 1.05 · Josefin Sans 300"
            />
            <TypeSample
              label="Display LG / H1"
              className="font-display text-display-lg font-light text-harbor-navy"
              sample="Interesting people meeting interesting people."
              specs="clamp(2.25rem → 4rem) · lh 1.08 · Josefin Sans 300"
            />
            <TypeSample
              label="Display MD / H2"
              className="font-display text-display-md font-light text-harbor-navy"
              sample="The yacht is beautiful. The people are why you stay."
              specs="clamp(1.75rem → 2.75rem) · lh 1.12 · Josefin Sans 300"
            />
            <TypeSample
              label="Eyebrow utility"
              className="halcyon-eyebrow"
              sample="Upcoming Gatherings"
              specs="0.6875rem · ls 0.18em · Josefin Sans 500 · .halcyon-eyebrow"
            />
          </section>

          {/* Logo */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Brand" title="Logo" />
            <div className="flex flex-wrap items-center gap-8 rounded-lg bg-stone-warm p-8">
              <div className="flex flex-col items-start gap-2">
                <HalcyonLogo variant="navy" />
                <p className="font-body text-[14px] leading-[21.7px] text-harbor-navy/60">Navy — 136×33 SVG</p>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg bg-harbor-navy p-6">
                <HalcyonLogo variant="white" />
                <p className="font-body text-[14px] leading-[21.7px] text-yacht-white/60">White — navbar & footer</p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Components" title="Buttons" />
            <div className="flex flex-wrap items-center gap-4 rounded-lg bg-stone-warm p-8">
              <HalcyonButton variant="cta-orange" showArrow>
                Request an Introduction
              </HalcyonButton>
              <HalcyonButton variant="icon-circle">←</HalcyonButton>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 rounded-lg bg-harbor-navy p-8">
              <HalcyonButton variant="cta-hero-primary" showArrow arrowSrc="/halcyon/hero-arrow.svg">
                Request an Introduction
              </HalcyonButton>
              <HalcyonButton variant="cta-hero-ghost">Discover More</HalcyonButton>
              <HalcyonButton variant="footer-primary">Request an Introduction</HalcyonButton>
              <HalcyonButton variant="footer-secondary">Member Sign In</HalcyonButton>
            </div>
            <div className="mt-4 rounded-lg bg-harbor-navy p-8">
              <p className="mb-4 font-body text-[14px] leading-[21.7px] text-yacht-white/60">Connect pills (form)</p>
              <div className="flex flex-wrap gap-3">
                {["Member referral", "Self introduction", "Event inquiry"].map((label) => (
                  <label
                    key={label}
                    className={connectPillStyles.base}
                    style={{ borderWidth: connectPillStyles.borderWidth }}
                  >
                    <input type="radio" name="connect-demo" className="sr-only" />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <p className="mt-4 font-body text-[14px] leading-[21.7px] text-harbor-navy/50">
              CTA: 8px radius, 36×16 padding, bold uppercase 14px / ls 1.54px. Hero ghost: 1.08px white
              border, whitespace-nowrap. Footer: 12px radius, 24×12 padding, title case 14px.
            </p>
          </section>

          {/* Motion */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Motion" title="Animation & Interaction" />
            <ul className="space-y-3 font-body text-[16px] leading-[26.4px] text-harbor-navy/75">
              {Object.entries(halcyonMotion).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium text-harbor-navy">{key}:</span> {value}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-stone-warm p-8 text-center">
                <p className="mb-4 font-body text-[14px] leading-[21.7px] text-harbor-navy/50">CountUp stat</p>
                <CountUp
                  end={150}
                  className="font-display text-[clamp(3.5rem,6.94vw,6.25rem)] font-light leading-none tracking-[-8px] text-harbor-navy"
                />
                <p className="pt-2 font-body text-[14px] font-light leading-[22.4px] text-harbor-navy">
                  feet of yacht
                </p>
              </div>
              <div className="rounded-lg bg-harbor-navy p-8 text-center">
                <p className="mb-4 font-body text-[14px] leading-[21.7px] text-yacht-white/50">Nautical coordinates</p>
                <NauticalCoordinates />
              </div>
            </div>
          </section>

          {/* Components */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Components" title="Live Components" />

            <div className="mb-12">
              <h3 className="mb-4 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                Animated Card
              </h3>
              <AnimatedCard className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-harbor-navy">
                <div className="relative aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/halcyon/exp-featured-1.png"
                    alt=""
                    className={`h-full w-full ${animatedCardImageClass}`}
                  />
                </div>
              </AnimatedCard>
              <p className="mt-3 font-body text-[14px] leading-[21.7px] text-harbor-navy/50">
                Scroll reveal + hover lift + image zoom (duration-700 ease-editorial)
              </p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">Event Row</h3>
              <div className="rounded-lg bg-stone-warm px-6 md:px-10">
                <EventRow
                  index={0}
                  date={gatherings[0].date}
                  title={gatherings[0].title}
                  description={gatherings[0].description}
                />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                Membership Step
              </h3>
              <div className="max-w-md rounded-lg bg-stone-warm p-8">
                <MembershipStep
                  number="01"
                  title="An introduction"
                  description="A member introduces a friend, or a prospective member requests an introduction."
                />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">Testimonial</h3>
              <div className="rounded-lg bg-harbor-navy p-8 md:p-12">
                <blockquote className="relative">
                  <span
                    className="absolute -left-2 -top-4 font-display text-[5rem] leading-none text-sunset-orange/20"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className={`relative italic ${halcyonFigmaType.testimonialQuote.className}`}>
                    {testimonials[0].quote}
                  </p>
                  <footer className="mt-4 font-body text-[12px] uppercase leading-[15px] tracking-[2px] text-yacht-white/50 sm:text-[14px] sm:tracking-[3px]">
                    — {testimonials[0].attribution}
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                  Wave Divider (animated)
                </h3>
                <div className="overflow-hidden rounded-lg border border-stone-light">
                  <div className="bg-stone-warm py-6 text-center font-body text-[14px] leading-[21.7px] text-harbor-navy/50">
                    Section above
                  </div>
                  <WaveDivider variant="light" animated />
                  <div className="bg-yacht-white py-6 text-center font-body text-[14px] leading-[21.7px] text-harbor-navy/50">
                    Section below
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                  Section Wave (SVG)
                </h3>
                <div className="overflow-hidden rounded-lg border border-stone-light">
                  <div className="bg-stone-warm py-6 text-center font-body text-[14px] leading-[21.7px] text-harbor-navy/50">
                    Evenings section
                  </div>
                  <HalcyonWaveDivider />
                  <div className="bg-yacht-white py-6 text-center font-body text-[14px] leading-[21.7px] text-harbor-navy/50">
                    Community section
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Layout */}
          <section className="mb-section-lg">
            <SectionHeading eyebrow="Layout" title="Spacing & Grid" />
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              {Object.entries(halcyonLayoutTokens).map(([key, token]) => (
                <div key={key} className="rounded-lg border border-stone-light p-6">
                  <p className="font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                    {"max" in token ? token.max : token.value}
                  </p>
                  {"class" in token && token.class && (
                    <p className="mt-1 font-body text-[14px] text-riviera-blue">
                      <code>{token.class}</code>
                    </p>
                  )}
                  <p className="mt-2 font-body text-[14px] leading-[21.7px] text-harbor-navy/65">{token.usage}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-stone-light p-6">
                <p className="font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                  Style guide container
                </p>
                <ul className="mt-3 space-y-2 font-body text-[14px] leading-[21.7px] text-harbor-navy/65">
                  <li>Max width: {halcyonSpacing.containerMax}</li>
                  <li>Padding: {halcyonSpacing.containerPadding}</li>
                  <li>Class: <code className="text-riviera-blue">.halcyon-container</code></li>
                </ul>
              </div>
              <div className="rounded-lg border border-stone-light p-6">
                <p className="font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                  Section spacing utilities
                </p>
                <ul className="mt-3 space-y-2 font-body text-[14px] leading-[21.7px] text-harbor-navy/65">
                  <li>Small: {halcyonSpacing.sectionSm}</li>
                  <li>Medium: {halcyonSpacing.sectionMd}</li>
                  <li>Large: {halcyonSpacing.sectionLg}</li>
                  <li>Production py: {halcyonSectionPy}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-stone-warm p-6">
              <p className="font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                Layout shell preview
              </p>
              <div className="mt-4 space-y-2">
                <div className={`${halcyonPage} border border-riviera-blue/30 bg-riviera-blue/5 py-2 text-center font-body text-[12px] text-harbor-navy`}>
                  halcyonPage — 1440px
                </div>
                <div className={`${halcyonHero} mx-auto border border-sunset-orange/30 bg-sunset-orange/5 py-2 text-center font-body text-[12px] text-harbor-navy`}>
                  halcyonHero — 1405px
                </div>
                <div className={`${halcyonContent} border border-harbor-navy/20 bg-harbor-navy/5 py-2 text-center font-body text-[12px] text-harbor-navy`}>
                  halcyonContent — 1200px
                </div>
                <div className={`${halcyonShell1280} border border-stone-mist/50 bg-stone-warm py-2 text-center font-body text-[12px] text-harbor-navy`}>
                  halcyonShell1280 — 1280px
                </div>
                <div className={`${halcyonWide1201} border border-gold-soft/50 bg-gold-soft/10 py-2 text-center font-body text-[12px] text-harbor-navy`}>
                  halcyonWide1201 — 1201px
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-stone-warm p-6">
              <p className="font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy">
                12-Column Editorial Grid
              </p>
              <div className="mt-4 editorial-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="col-span-1 flex h-8 items-center justify-center rounded-sm bg-harbor-navy/10 font-body text-[10px] text-harbor-navy/40"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Shape Language */}
          <section>
            <SectionHeading eyebrow="Visual" title="Shape Language" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                { label: "Small", value: halcyonShapes.radiusSm },
                { label: "Medium", value: halcyonShapes.radiusMd },
                { label: "Large", value: halcyonShapes.radiusLg },
                { label: "XL", value: halcyonShapes.radiusXl },
                { label: "Pill", value: halcyonShapes.radiusPill },
              ].map((r) => (
                <div key={r.label} className="flex flex-col items-center gap-3">
                  <div className="h-20 w-full bg-harbor-navy" style={{ borderRadius: r.value }} />
                  <p className="font-body text-[14px] leading-[21.7px] text-harbor-navy/60">
                    {r.label}: {r.value}
                  </p>
                </div>
              ))}
            </div>
            <ul className="mt-8 space-y-2 font-body text-[16px] leading-[26.4px] text-harbor-navy/65">
              <li>{halcyonShapes.waveMotif}</li>
              <li>{halcyonShapes.lineTreatment}</li>
              <li>{halcyonShapes.imageTreatment}</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="border-t border-stone-light bg-harbor-navy py-8">
        <div className={`${halcyonPage} ${halcyonPx120}`}>
          <p className="font-display text-[11px] font-normal uppercase leading-[15.4px] tracking-[1.32px] text-yacht-white/50">
            Halcyon Design System · Brand 01 · Updated for Figma 1440
          </p>
        </div>
      </footer>
    </div>
  );
}
