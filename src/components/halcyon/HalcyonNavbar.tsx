"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/halcyon/content";
import { HalcyonLogo } from "./ui/HalcyonLogo";

export function HalcyonNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] bg-black/20 transition-opacity duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[100] flex w-full max-w-[400px] flex-col bg-[#f8f6fb] transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-end border-b border-[#c9b8d8] px-5 py-2.5">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center halcyon-focus-ring"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Image src="/halcyon/nav-close.svg" alt="" width={18} height={18} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-5 pb-[30px] pt-5" aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-[#c9b8d8]">
                <a
                  href={link.href}
                  className="block py-2.5 pr-10 font-body text-[16px] leading-normal text-[#1a1a2e] halcyon-focus-ring"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <header className="sticky top-0 z-[70] h-16 bg-white/30 px-[clamp(1rem,4vw,4.375rem)] py-3 backdrop-blur-[10px] md:h-20 md:py-5">
        <nav className="relative flex h-full items-center justify-between" aria-label="Main navigation">
          <button
            type="button"
            className={`flex h-[28px] w-[60px] shrink-0 flex-col justify-center gap-[4px] rounded-[70px] bg-[#f8f6fb] px-5 py-[7px] halcyon-focus-ring [&>span]:shrink-0 ${
              menuOpen ? "invisible" : ""
            }`}
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
            tabIndex={menuOpen ? -1 : 0}
          >
            <span className="h-[2px] w-5 bg-[#1a1a2e]" />
            <span className="h-[2px] w-5 bg-[#1a1a2e]" />
            <span className="h-[2px] w-5 bg-[#1a1a2e]" />
          </button>

          <a
            href="#"
            aria-label="Halcyon"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 halcyon-focus-ring"
            onClick={() => setMenuOpen(false)}
          >
            <HalcyonLogo variant="navy" className="h-[26px] w-[108px] md:h-[33px] md:w-[136px]" />
          </a>

          <div className="flex shrink-0 items-center gap-[10px]">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-[#f8f6fb] halcyon-focus-ring"
              aria-label="Search"
            >
              <Image src="/halcyon/nav-search.svg" alt="" width={20} height={20} />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-[#f8f6fb] halcyon-focus-ring"
              aria-label="Profile"
            >
              <Image src="/halcyon/nav-profile.svg" alt="" width={13} height={16} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
