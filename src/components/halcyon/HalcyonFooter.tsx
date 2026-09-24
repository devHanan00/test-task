import { brandStatement, coordinates, navLinks } from "@/data/halcyon/content";
import { HalcyonButton } from "./ui/HalcyonButton";
import { HalcyonLogo } from "./ui/HalcyonLogo";
import { halcyonContent, halcyonPx40, halcyonShell1280 } from "./ui/halcyonLayout";

export function HalcyonFooter() {
  return (
    <footer className="relative bg-harbor-navy-deep text-yacht-white">
      <div className="h-11 w-full overflow-hidden rotate-180" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/halcyon/footer-wave.svg"
          alt=""
          className="block h-full w-full min-w-full object-cover"
        />
      </div>

      <div className={`${halcyonShell1280} ${halcyonPx40} pb-10 pt-12 md:pb-16 md:pt-20`}>
        <div className={`${halcyonContent} grid gap-10 lg:grid-cols-12 lg:gap-8`}>
          <div className="lg:col-span-5">
            <HalcyonLogo variant="white" className="h-[26px] w-[108px] md:h-[33px] md:w-[136px]" />
            <p className="pt-4 max-w-[384px] font-body text-[14px] leading-[21.7px] text-yacht-white">
              {brandStatement}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-[11px] font-normal uppercase leading-[15.4px] tracking-[1.32px] text-yacht-white transition-opacity hover:opacity-80 halcyon-focus-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:flex-col lg:items-end lg:gap-4">
            <HalcyonButton variant="footer-primary" href="#introduction" className="w-full justify-center sm:w-auto lg:w-fit">
              Request an Introduction
            </HalcyonButton>
            <HalcyonButton variant="footer-secondary" href="#" className="w-full justify-center sm:w-auto lg:w-fit">
              Member Sign In
            </HalcyonButton>
          </div>

          <div
            className="col-span-full mt-6 flex flex-col gap-4 border-t border-[#e5e7eb] pt-6 md:mt-12 md:flex-row md:items-center md:justify-between md:pt-8"
            style={{ borderTopWidth: "0.667px" }}
          >
            <p className="font-body text-[14px] leading-[21.7px] text-yacht-white">
              {coordinates.label}
            </p>
            <a
              href="mailto:hello@halcyon.club"
              className="font-body text-[14px] leading-[21.7px] text-yacht-white transition-opacity hover:opacity-80 halcyon-focus-ring"
            >
              hello@halcyon.club
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
