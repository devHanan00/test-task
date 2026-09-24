"use client";

import { type ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
};

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  const hoverClass = hover
    ? "group transition-all duration-500 ease-editorial hover:-translate-y-1.5 hover:shadow-card"
    : "";

  return (
    <RevealOnScroll delay={delay} className={`${hoverClass} ${className}`.trim()}>
      {children}
    </RevealOnScroll>
  );
}

/** Apply to images inside AnimatedCard for zoom-on-hover */
export const animatedCardImageClass =
  "object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]";
