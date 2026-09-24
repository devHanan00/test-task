export const juniperColors = {
  juniper: { hex: "#23372F", name: "Juniper", usage: "Primary dark — footer, care plans, headings" },
  juniperDeep: { hex: "#1A2A24", name: "Juniper Deep", usage: "House calls overlay base" },
  linen: { hex: "#F3EDE3", name: "Linen", usage: "Intro, team, navbar background" },
  terracotta: { hex: "#B5654A", name: "Terracotta", usage: "CTAs, services section, booking form" },
  sage: { hex: "#8A9B8E", name: "Sage", usage: "Labels, care plan eyebrow" },
  sand: { hex: "#E8DFD0", name: "Sand", usage: "Borders, dividers, soft backgrounds" },
  clay: { hex: "#C4A98A", name: "Clay", usage: "Warm neutral accent" },
  linenWarm: { hex: "#FAF6F0", name: "Warm Cream", usage: "Approach, visit, testimonials, booking bg" },
  peach: { hex: "#FFD5C7", name: "Peach", usage: "Hero background, approach highlight row" },
  borderLight: { hex: "#E5E7EB", name: "Light Border", usage: "Secondary buttons, care plan dividers" },
} as const;

export const juniperTypography = {
  display: { family: "Cormorant Garamond", role: "Decorative display words in section headings" },
  wandpis: { family: "Wandpis DEMO", role: "Hero H1 accent — “Veterinary care” (Figma node 43:7569)" },
  accent: { family: "Figtree", role: "Mixed heading sans-serif words (team, intro)" },
  body: { family: "DM Sans", role: "Body, UI, hero sans-serif lines, testimonial quotes" },
  figma: {
    heroH1: {
      wandpisFamily: "Wandpis DEMO",
      wandpis: "Wandpis DEMO 60px / normal / -1.44px letter-spacing",
      sans: "DM Sans 60px / normal",
      responsive: "clamp(2.25rem, 4.69vw, 60px)",
      figmaNode: "43:7569",
    },
    h2: { size: "44.8px", lineHeight: "1.08", letterSpacing: "-0.02em" },
    bookingH2: { size: "38.4px", lineHeight: "1.15", letterSpacing: "-0.02em" },
    h3: { size: "25.6px", lineHeight: "1.2" },
    bodyLg: { size: "17px", lineHeight: "29.75px" },
    bodyMd: { size: "16px", lineHeight: "27.52px" },
    label: { size: "12px", lineHeight: "17.4px", letterSpacing: "1.92px" },
    button: { size: "14px", lineHeight: "22.68px" },
    number: { size: "32px", lineHeight: "1.12", letterSpacing: "-0.48px" },
    testimonialQuote: { size: "40px", style: "italic", family: "DM Sans" },
    founderQuote: {
      size: "34px",
      color: "#B5654A",
      wandpisFamily: "Wandpis DEMO",
      bodyFamily: "DM Sans",
      figmaNode: "83:8041",
    },
  },
} as const;

export const juniperSpacing = {
  pageMax: "1680px",
  shellMax: "1620px",
  contentMax: "1500px",
  narrowMax: "1105px",
  carePlansMax: "1240px",
  containerPadding48: "clamp(1.25rem, 3.2vw, 3.9375rem)",
  containerPadding100: "clamp(1.5rem, 6.5vw, 8.1875rem)",
  containerPadding120: "clamp(1.5rem, 7.8vw, 9.84375rem)",
  sectionPy80: "py-12 md:py-16 lg:py-[80px]",
  sectionPy141: "py-16 md:py-24 lg:py-[140.8px]",
  sectionPy176: "py-16 md:py-24 lg:py-[176px]",
  heroHeight: "705px",
  heroPaddingTop: "96px",
} as const;

export const juniperShapes = {
  radiusSm: "4px",
  radiusMd: "8px",
  radiusLg: "12px",
  buttonPadding: "14px 28px",
} as const;

/** Live page section order — for style guide reference */
export const juniperLiveSections = [
  "Navbar",
  "Hero",
  "Intro",
  "Approach",
  "Services",
  "House Calls",
  "Visit Experience",
  "Care Team",
  "Testimonials",
  "Care Plans",
  "Booking",
  "Footer (+ practical info grid)",
  "Mobile Sticky CTA",
] as const;

/** Removed from live page — do not use in new work */
export const juniperDeprecated = [
  "JuniperAbout section",
  "JuniperPracticalInfo standalone section (merged into footer)",
  "ServiceRow with images",
  "Multi-section booking form",
  "BotanicalDivider",
] as const;
