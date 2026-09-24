import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

export type HalcyonButtonVariant =
  | "cta-orange"
  | "cta-hero-primary"
  | "cta-hero-ghost"
  | "footer-primary"
  | "footer-secondary"
  | "icon-circle";

const variantStyles: Record<HalcyonButtonVariant, string> = {
  "cta-orange":
    "inline-flex items-center justify-center gap-[10px] bg-sunset-orange px-6 py-3.5 rounded-[8px] font-body text-[13px] font-bold uppercase leading-[16.5px] tracking-[1.54px] text-yacht-white sm:px-[36px] sm:py-[16px] sm:text-[14px]",
  "cta-hero-primary":
    "inline-flex shrink-0 items-center justify-center gap-[10px] whitespace-nowrap bg-yacht-white px-6 py-3.5 rounded-[8px] font-body text-[13px] font-medium uppercase leading-[16.5px] tracking-[1.54px] text-harbor-navy sm:px-[44px] sm:py-[16px] sm:text-[14px]",
  "cta-hero-ghost":
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-yacht-white bg-transparent px-6 py-3.5 rounded-[8px] font-body text-[13px] font-medium uppercase leading-[16.5px] tracking-[1.54px] text-yacht-white sm:px-[44px] sm:py-[16px] sm:text-[14px]",
  "footer-primary":
    "inline-flex items-center justify-center bg-sunset-orange px-[24px] py-[12px] rounded-[12px] font-body text-[14px] font-medium leading-[21.7px] text-yacht-white",
  "footer-secondary":
    "inline-flex items-center justify-center border border-[#e5e7eb] bg-transparent px-[24px] py-[12px] rounded-[12px] font-body text-[14px] font-medium leading-[21.7px] text-yacht-white",
  "icon-circle":
    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-light font-body text-[16px] font-normal leading-[26.4px] text-harbor-navy",
};

const focusRing = "halcyon-focus-ring";

type SharedProps = {
  variant: HalcyonButtonVariant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  arrowSrc?: string;
};

type AsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function CtaArrow({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" width={13.988} height={13.988} aria-hidden className="shrink-0" />
  );
}

export function HalcyonButton({
  variant,
  children,
  className = "",
  showArrow = false,
  arrowSrc = "/halcyon/evenings-arrow.svg",
  href,
  style,
  ...props
}: AsButton | AsLink) {
  const borderWidthStyle =
    variant === "cta-hero-ghost"
      ? { borderWidth: "1.08px", ...style }
      : variant === "footer-secondary" || variant === "icon-circle"
        ? { borderWidth: "0.667px", ...style }
        : style;

  const shadowStyle =
    variant === "footer-primary"
      ? { boxShadow: "0px 4px 12px rgba(27, 47, 91, 0.06)", ...borderWidthStyle }
      : borderWidthStyle;

  const classes = `${variantStyles[variant]} ${focusRing} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <CtaArrow src={arrowSrc} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} style={shadowStyle} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} style={shadowStyle} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export const connectPillStyles = {
  base: "flex h-[51px] cursor-pointer items-center rounded-[12px] border border-stone-light px-[16px] py-[8px] font-body text-[14px] font-normal leading-[21.7px] text-yacht-white has-[:checked]:border-sunset-orange has-[:checked]:bg-sunset-orange/15",
  borderWidth: "0.667px" as const,
};
