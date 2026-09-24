export const halcyonColors = {
  harborNavy: { hex: "#1B2F5B", name: "Harbor Navy", usage: "Primary brand — dark sections, navigation, footer, headings" },
  yachtWhite: { hex: "#FFFFFF", name: "Yacht White", usage: "Light backgrounds, cards, negative space, type on navy" },
  sunsetOrange: { hex: "#F4622A", name: "Sunset Orange", usage: "Accent — CTAs, highlights, active states, micro-interactions" },
  rivieraBlue: { hex: "#1F4FBF", name: "Riviera Blue", usage: "Secondary accent — links, selected states, graphic details" },
  stoneWarm: { hex: "#F5F0EA", name: "Warm Stone", usage: "Soft section backgrounds, editorial warmth" },
  stoneLight: { hex: "#EBE4DB", name: "Light Stone", usage: "Dividers, subtle borders" },
  skySoft: { hex: "#E8EEF7", name: "Sky Soft", usage: "Light blue tint for variety" },
  goldSoft: { hex: "#C9A962", name: "Soft Gold", usage: "Occasional warm metallic accent" },
} as const;

export const halcyonTypography = {
  display: { family: "Josefin Sans", sizes: ["display-xl", "display-lg", "display-md"], weight: "300–400" },
  heading: { family: "Josefin Sans", sizes: ["heading-lg", "heading-md", "heading-sm"], weight: "400–500" },
  body: { family: "Figtree", sizes: ["body-lg", "body-md", "body-sm"], weight: "400" },
  metadata: { family: "Figtree", sizes: ["eyebrow", "metadata"], weight: "500" },
  /** Hero watermark only — K-Type Club Regular in Figma; rendered via /halcyon/hero-watermark.svg */
  watermark: { family: "Club Regular", weight: "400", usage: "Hero HALCYON background wordmark" },
} as const;

/** Pixel-accurate type styles used on the live /halcyon route (Figma frame 1440) */
export const halcyonFigmaType = {
  eyebrow: {
    label: "Section Eyebrow",
    className:
      "font-display text-[11px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-riviera-blue",
    specs: "11px · lh 15.4px · ls 1.98px · Josefin Sans 500 · uppercase · #1F4FBF",
  },
  sectionLabel: {
    label: "Section Label",
    className:
      "font-display text-[14px] font-normal uppercase leading-[17.4px] tracking-[1.44px] text-harbor-navy",
    specs: "14px · lh 17.4px · ls 1.44px · Josefin Sans 400 · uppercase",
  },
  heading2: {
    label: "Section H2",
    className:
      "font-display text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.08] tracking-[-0.864px] text-harbor-navy md:leading-[62.208px]",
    specs: "57.6px @ 1440 · lh 62.208px · ls -0.864px · Josefin Sans 300/500 mix",
  },
  eveningsTitle: {
    label: "Evenings Title",
    className:
      "font-display text-[clamp(2rem,3.89vw,3.5rem)] font-medium capitalize leading-[1.15] tracking-[-2px] text-harbor-navy md:leading-[64.4px]",
    specs: "56px · lh 64.4px · ls -2px · Josefin Sans 500 · capitalize",
  },
  bodyMd: {
    label: "Body / Intro",
    className: "font-body text-[16px] leading-[26.4px] text-harbor-navy",
    specs: "16px · lh 26.4px · Figtree 400",
  },
  bodyLg: {
    label: "Body Large",
    className: "font-body text-[18px] leading-[30.6px] text-harbor-navy",
    specs: "18px · lh 30.6px · Figtree 400",
  },
  cardTitle: {
    label: "Card / Event Title",
    className: "font-display text-[18px] font-normal leading-[24.3px] text-harbor-navy",
    specs: "18px · lh 24.3px · Josefin Sans 400",
  },
  bodySm: {
    label: "Body Small / Caption",
    className: "font-body text-[14px] leading-[21.7px] text-harbor-navy",
    specs: "14px · lh 21.7px · Figtree 400",
  },
  dateMeta: {
    label: "Date / Table Meta",
    className:
      "font-display text-[12px] uppercase leading-[17.4px] tracking-[1.44px] text-harbor-navy",
    specs: "12px · lh 17.4px · ls 1.44px · Josefin Sans 400 · uppercase",
  },
  statValue: {
    label: "Stat Value",
    className:
      "font-display text-[clamp(3.5rem,6.94vw,6.25rem)] font-light leading-none tracking-[-8px] text-harbor-navy",
    specs: "100px @ 1440 · ls -8px · Josefin Sans 300 · CountUp animated",
  },
  formLabel: {
    label: "Form Label",
    className:
      "font-display text-[18px] font-medium leading-[21.7px] tracking-[-0.5px] text-yacht-white",
    specs: "18px · lh 21.7px · ls -0.5px · Josefin Sans 500",
  },
  formInput: {
    label: "Form Input",
    className: "font-body text-[16px] leading-normal text-yacht-white placeholder:text-[#9ca3af]",
    specs: "16px · Figtree 400 · bottom border · #9CA3AF placeholder",
  },
  heroH1: {
    label: "Hero H1",
    className:
      "font-display text-[clamp(1.75rem,6vw,4rem)] uppercase tracking-[-2px] text-yacht-white md:tracking-[-4px]",
    specs: "64px @ desktop · ls -2px / -4px · Josefin Sans · uppercase",
  },
  heroWatermark: {
    label: "Hero Watermark",
    className: "aspect-[1448/265] w-full max-w-[1448px] object-contain",
    specs: "Club Regular · 259.297px · ls 68px · lh 200px · 1448×265 · SVG /halcyon/hero-watermark.svg · gradient white/20 → gray/0",
  },
  testimonialQuote: {
    label: "Testimonial Quote",
    className:
      "font-display text-[clamp(1.25rem,4vw,1.625rem)] font-normal leading-[1.55] tracking-[-0.5px] text-yacht-white",
    specs: "26px · lh 1.55 · ls -0.5px · Josefin Sans 400",
  },
  footerNav: {
    label: "Footer Nav Link",
    className:
      "font-display text-[11px] font-normal uppercase leading-[15.4px] tracking-[1.32px] text-yacht-white",
    specs: "11px · lh 15.4px · ls 1.32px · Josefin Sans 400 · uppercase",
  },
  ctaButton: {
    label: "CTA Button",
    className:
      "font-body text-[14px] font-bold uppercase leading-[16.5px] tracking-[1.54px] text-yacht-white",
    specs: "14px · lh 16.5px · ls 1.54px · Figtree 700 · uppercase",
  },
} as const;

export const halcyonLayoutTokens = {
  page: { max: "1440px", class: "halcyonPage", usage: "Full page frame — navbar + hero shell" },
  hero: { max: "1405px", class: "halcyonHero", usage: "Hero card width inside page frame" },
  content: { max: "1200px", class: "halcyonContent", usage: "Standard content column" },
  shell1280: { max: "1280px", class: "halcyonShell1280", usage: "Community, gatherings, footer, form" },
  wide1201: { max: "1201px", class: "halcyonWide1201", usage: "Evenings image, membership block" },
  px120: { value: "clamp(1.25rem, 8.33vw, 7.5rem)", class: "halcyonPx120", usage: "120px horizontal padding @ 1440" },
  px40: { value: "clamp(1.25rem, 2.78vw, 2.5rem)", class: "halcyonPx40", usage: "40px shell padding @ 1440" },
  sectionPy: { value: "clamp(3rem, 8.33vw, 5rem)", class: "halcyonSectionPy", usage: "80px vertical section padding @ 1440" },
  scrollPt: { value: "scroll-pt-16 md:scroll-pt-20", usage: "Anchor offset for fixed navbar" },
} as const;

export const halcyonSpacing = {
  containerMax: "1280px",
  containerPadding: "clamp(1.25rem, 4vw, 2.5rem)",
  sectionSm: "clamp(4rem, 8vw, 6rem)",
  sectionMd: "clamp(5rem, 10vw, 8rem)",
  sectionLg: "clamp(6rem, 12vw, 10rem)",
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96],
} as const;

export const halcyonMotion = {
  reveal: "RevealOnScroll — fade-up 700ms ease-editorial, 15% threshold",
  cardHover: "AnimatedCard — translateY -6px, shadow-card, image scale 1.04",
  countUp: "CountUp — 2200ms easeOutCubic from 0, IntersectionObserver 40%",
  carousel: "Auto-advance 4000ms, pause on hover, infinite loop",
  wave: "WaveDivider — optional wave-drift 12s",
  coordinate: "NauticalCoordinates — coordinate-pulse 4s",
} as const;

export const halcyonShapes = {
  radiusSm: "4px",
  radiusMd: "8px",
  radiusLg: "16px",
  radiusXl: "24px",
  radiusPill: "9999px",
  waveMotif: "Curved SVG wave dividers between sections",
  lineTreatment: "1px rules, nautical coordinate typography",
  imageTreatment: "Editorial crops, subtle scale on hover, rounded-lg corners",
} as const;
