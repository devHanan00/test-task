"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/juniper-house/content";
import { jhPage, jhPx100 } from "./ui/juniperLayout";
import { JuniperButton } from "./ui/JuniperButton";

export function JuniperNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const heroScrollThreshold = 625;

    const onScroll = () => setScrolled(window.scrollY > heroScrollThreshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navState = menuOpen
    ? "juniper-nav-bar juniper-nav-bar--solid"
    : scrolled
      ? "juniper-nav-bar juniper-nav-bar--scrolled"
      : "juniper-nav-bar juniper-nav-bar--hero";

  return (
    <>
      <div
        className={`juniper-mobile-menu flex flex-col transition-all duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-full flex-col px-8 pb-28 pt-24">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`border-b border-sand pb-6 transition-all duration-500 last:border-b-0 ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  className="font-juniper-display text-jh-heading-lg text-juniper juniper-focus-ring"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-12">
            <JuniperButton variant="primary" href="#booking" onClick={() => setMenuOpen(false)}>
              Book a Visit
            </JuniperButton>
            <JuniperButton variant="secondary" href="#house-calls" onClick={() => setMenuOpen(false)}>
              Request a House Call
            </JuniperButton>
          </div>
        </div>
      </div>

      <header className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${navState}`}>
        <nav className={`${jhPage} ${jhPx100} flex h-[4.25rem] items-center justify-between md:h-[5rem]`}>
          <a
            href="#"
            className="font-juniper-display text-[22px] tracking-tight text-[#23372f] juniper-focus-ring"
            onClick={() => setMenuOpen(false)}
          >
            Juniper House
          </a>

          <ul className="hidden items-center gap-9 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="juniper-link-underline jh-body-md text-[#23372f]/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 xl:flex">
            <JuniperButton variant="text" href="#" showArrow={false}>
              Client Portal
            </JuniperButton>
            <JuniperButton variant="primary" href="#booking">
              Book a Visit
            </JuniperButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center xl:hidden juniper-focus-ring"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-juniper transition-all duration-300 ${
                  menuOpen ? "top-[6px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-juniper transition-all duration-300 ${
                  menuOpen ? "top-[6px] -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>
    </>
  );
}
