"use client";

import { useEffect, useState } from "react";

const phrases = [
  "You're always welcome aboard.",
  "The second drink is when the real conversations start.",
  "Sarasota's happiest place is afloat.",
  "Bring a friend. Leave with ten.",
];

export function RotatingWelcome() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="border-y border-stone-light bg-yacht-white py-6 md:py-8"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="halcyon-container text-center">
        <p
          className={`font-display text-heading-sm font-light italic text-harbor-navy/70 transition-all duration-400 md:text-heading-md ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          {phrases[index]}
        </p>
      </div>
    </div>
  );
}
