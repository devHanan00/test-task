"use client";

import { coordinates } from "@/data/halcyon/content";

export function NauticalCoordinates({ className = "" }: { className?: string }) {
  return (
    <div
      className={`font-display text-metadata uppercase tracking-[0.2em] text-yacht-white/70 animate-coordinate-pulse ${className}`}
      aria-label={`Location: ${coordinates.label}, ${coordinates.lat} ${coordinates.lng}`}
    >
      <span className="inline-block">{coordinates.lat}</span>
      <span className="mx-2 text-sunset-orange" aria-hidden="true">
        ·
      </span>
      <span className="inline-block">{coordinates.lng}</span>
      <span className="mx-3 hidden sm:inline text-yacht-white/40" aria-hidden="true">
        |
      </span>
      <span className="hidden sm:inline text-yacht-white/50">{coordinates.label}</span>
    </div>
  );
}
