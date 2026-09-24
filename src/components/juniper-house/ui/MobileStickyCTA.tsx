"use client";

import { useEffect, useState } from "react";
import { JuniperButton } from "./JuniperButton";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-sand bg-linen/95 px-4 py-3 backdrop-blur-md transition-transform duration-500 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <JuniperButton variant="primary" href="#booking" className="w-full">
        Book a Visit
      </JuniperButton>
    </div>
  );
}
