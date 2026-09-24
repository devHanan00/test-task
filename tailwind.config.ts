import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        harbor: {
          navy: "var(--color-harbor-navy)",
          "navy-deep": "var(--color-harbor-navy-deep)",
        },
        yacht: {
          white: "var(--color-yacht-white)",
        },
        sunset: {
          orange: "var(--color-sunset-orange)",
          "orange-soft": "var(--color-sunset-orange-soft)",
        },
        riviera: {
          blue: "var(--color-riviera-blue)",
          "blue-soft": "var(--color-riviera-blue-soft)",
        },
        stone: {
          warm: "var(--color-stone-warm)",
          cream: "var(--color-stone-cream)",
          light: "var(--color-stone-light)",
          mist: "var(--color-stone-mist)",
        },
        sky: {
          soft: "var(--color-sky-soft)",
        },
        gold: {
          soft: "var(--color-gold-soft)",
        },
        juniper: {
          DEFAULT: "var(--color-juniper)",
          deep: "var(--color-juniper-deep)",
        },
        linen: {
          DEFAULT: "var(--color-linen)",
          warm: "var(--color-linen-warm)",
        },
        terracotta: {
          DEFAULT: "var(--color-terracotta)",
          soft: "var(--color-terracotta-soft)",
        },
        sage: {
          DEFAULT: "var(--color-sage)",
          soft: "var(--color-sage-soft)",
        },
        sand: {
          DEFAULT: "var(--color-sand)",
        },
        clay: {
          DEFAULT: "var(--color-clay)",
        },
        peach: {
          DEFAULT: "var(--color-peach)",
        },
        "border-light": {
          DEFAULT: "var(--color-border-light)",
        },
      },
      fontFamily: {
        display: ["var(--font-josefin)", "sans-serif"],
        body: ["var(--font-figtree)", "sans-serif"],
        "juniper-display": ["var(--font-cormorant)", "serif"],
        "juniper-wandpis": ["var(--font-wandpis)", "sans-serif"],
        "juniper-accent": ["var(--font-figtree-jh)", "sans-serif"],
        "juniper-body": ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "heading-lg": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-md": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.25" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        eyebrow: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        metadata: ["0.75rem", { lineHeight: "1.45", letterSpacing: "0.08em" }],
        "jh-display-xl": ["clamp(2.625rem, 4.5vw, 5.5rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "jh-display-lg": ["clamp(2.25rem, 3.5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "jh-display-md": ["clamp(1.75rem, 2.5vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "jh-heading-lg": ["clamp(1.5rem, 2vw, 2.25rem)", { lineHeight: "1.2" }],
        "jh-heading-md": ["clamp(1.25rem, 1.75vw, 1.625rem)", { lineHeight: "1.28" }],
        "jh-heading-sm": ["1.125rem", { lineHeight: "1.4" }],
        "jh-body-lg": ["clamp(1.0625rem, 1.1vw, 1.1875rem)", { lineHeight: "1.75" }],
        "jh-body-md": ["clamp(1rem, 1vw, 1.0625rem)", { lineHeight: "1.72" }],
        "jh-body-sm": ["0.875rem", { lineHeight: "1.62" }],
        "jh-label": ["0.75rem", { lineHeight: "1.45", letterSpacing: "0.16em" }],
      },
      spacing: {
        "section-sm": "var(--section-spacing-sm)",
        "section-md": "var(--section-spacing-md)",
        "section-lg": "var(--section-spacing-lg)",
      },
      maxWidth: {
        container: "var(--container-max)",
        prose: "var(--prose-max)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        nav: "var(--shadow-nav)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "600ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s var(--ease-editorial) forwards",
        "wave-drift": "waveDrift 12s ease-in-out infinite",
        "coordinate-pulse": "coordinatePulse 4s ease-in-out infinite",
        "line-draw": "lineDraw 1.2s var(--ease-editorial) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        waveDrift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-2%)" },
        },
        coordinatePulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        lineDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
