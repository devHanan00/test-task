/**
 * Juniper House layout — Figma artboard 1280px scaled to 1680px canvas.
 * Scale factor: 1680 / 1280 = 1.3125
 */

/** Full page frame at wide desktop */
export const jhPage = "mx-auto w-full max-w-[1680px]";

/** Inner shell (Figma 1240 → 1620px) */
export const jhShell = "mx-auto w-full max-w-[1620px]";

/** Primary content column (Figma 1144 → 1500px) */
export const jhContent = "mx-auto w-full max-w-[1500px]";

/** Approach / narrow blocks (Figma 843 → 1105px) */
export const jhNarrow = "mx-auto w-full max-w-[1105px]";

/** Figma 48px gutter → 63px at 1680 */
export const jhPx48 = "px-[clamp(1.25rem,3.2vw,3.9375rem)]";

/** Figma 100px hero/services inset → 131px at 1680 */
export const jhPx100 = "px-[clamp(1.5rem,6.5vw,8.1875rem)]";

/** Figma 120px section inset → 157px at 1680 */
export const jhPx120 = "px-[clamp(1.5rem,7.8vw,9.84375rem)]";

/** Responsive section vertical padding — tighter on mobile */
export const jhSectionPy60 = "py-10 md:py-12 lg:py-[60px]";
export const jhSectionPy80 = "py-12 md:py-16 lg:py-[80px]";
export const jhSectionPy141 = "py-16 md:py-24 lg:py-[140.8px]";
export const jhSectionPy176 = "py-16 md:py-24 lg:py-[176px]";

/** Prevent horizontal overflow site-wide */
export const jhOverflow = "overflow-x-hidden";

/** Figma typography — fixed sizes at desktop */
export const jhH1 = "jh-h1";
export const jhHeroH1 = "jh-hero-h1";
/** Wandpis DEMO — Figma accent words (hero H1, founder quote, etc.) */
export const jhWandpisDemo = "jh-hero-wandpis";
export const jhHeroWandpis = jhWandpisDemo;
export const jhHeroSans = "jh-hero-sans";
export const jhH2 = "jh-h2";
export const jhBookingH2 = "jh-booking-h2";
export const jhH3 = "jh-h3";
export const jhNumber = "jh-num";
export const jhNum = jhNumber;
export const jhStepTitle = "jh-step-title";

/** Mixed-font helpers — Cormorant Garamond stand-in for Wandpis in section headings */
export const jhWandpis = "font-juniper-display not-italic";
export const jhFigtree = "font-juniper-accent font-normal";
export const jhSans = "font-juniper-body font-normal";
