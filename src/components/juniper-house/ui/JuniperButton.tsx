"use client";

import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "text";

type BaseProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-linen-warm hover:bg-[#a05840] active:bg-[#8f4d38]",
  secondary:
    "border border-[0.667px] border-border-light bg-transparent text-juniper hover:border-juniper/30 hover:bg-sand/20",
  ghost:
    "border border-[0.667px] border-border-light bg-transparent text-linen hover:border-linen/60 hover:bg-linen/5",
  text: "bg-transparent text-juniper p-0 juniper-link-underline",
};

const base =
  "group inline-flex items-center justify-center gap-2.5 jh-btn-text transition-all duration-300 juniper-focus-ring disabled:pointer-events-none disabled:opacity-50";

function Arrow() {
  return (
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
      →
    </span>
  );
}

export function JuniperButton({
  variant = "primary",
  children,
  className = "",
  showArrow = true,
  href,
  ...props
}: ButtonProps | LinkProps) {
  const size =
    variant === "text" ? "px-0 py-0" : "rounded-[4px] px-[28px] py-[14px]";
  const styles = `${base} ${variants[variant]} ${size} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && variant !== "text" && <Arrow />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
