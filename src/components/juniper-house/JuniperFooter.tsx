import { type ReactNode } from "react";
import { credentials, footerStatement, practicalInfo } from "@/data/juniper-house/content";
import { jhPage, jhPx100, jhShell, jhWandpis } from "./ui/juniperLayout";
import { JuniperButton } from "./ui/JuniperButton";

function FooterInfoColumn({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="font-juniper-body text-[12px] font-medium uppercase leading-[17.4px] tracking-[1.92px] text-[#e8dfd0]">
        {label}
      </h3>
      <div className="jh-body-md pt-3 text-[#e8dfd0] sm:pt-4">{children}</div>
    </div>
  );
}

export function JuniperFooter() {
  return (
    <footer className="bg-[#23372f] text-[#f3ede3]">
      <div className={`${jhPage} ${jhPx100} pb-5 pt-16 sm:pt-24 lg:pt-[112px]`}>
        <div className={`${jhShell} flex flex-col gap-12 sm:gap-20 lg:gap-[100px]`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-none lg:max-w-[296px]">
              <p className={`font-juniper-display text-[clamp(2rem,5vw,44.8px)] leading-tight tracking-[-0.02em] text-[#f3ede3] ${jhWandpis}`}>
                Juniper House
              </p>
              <p className="pt-2 font-juniper-body text-[14px] uppercase leading-[22.68px] tracking-[1.96px] text-[#8a9b8e]">
                Veterinary · Sarasota
              </p>
              <p className="jh-body-lg max-w-none pt-4 text-[17px] leading-[29.75px] text-[#f3ede3] sm:pt-6 lg:max-w-[296px]">
                {footerStatement}
              </p>
            </div>

            <div className="flex w-full max-w-none flex-col gap-3 lg:max-w-[338px]">
              <JuniperButton variant="primary" href="#booking" className="w-full">
                Book a Visit
              </JuniperButton>
              <JuniperButton variant="ghost" href="#house-calls" className="w-full">
                Request a House Call
              </JuniperButton>
              <JuniperButton variant="ghost" href="#" showArrow={false} className="w-full">
                Client Portal
              </JuniperButton>
            </div>

            <div className="jh-body-md text-[#f3ede3]">
              <p>{practicalInfo.address}</p>
              <p>{practicalInfo.city}</p>
              <a
                href={`tel:${practicalInfo.phone.replace(/\D/g, "")}`}
                className="mt-4 block hover:text-white"
              >
                {practicalInfo.phone}
              </a>
              <a href={`mailto:${practicalInfo.email}`} className="mt-1 block hover:text-white">
                {practicalInfo.email}
              </a>
              <p className="mt-4">
                {practicalInfo.hours.weekday.days} · {practicalInfo.hours.weekday.time}
              </p>
            </div>
          </div>

          <div className="border-t border-white/50 py-6 sm:py-[30px]">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-[60px]">
              <FooterInfoColumn label="Visit">
                <p>{practicalInfo.address}</p>
                <p className="pt-2">{practicalInfo.area}</p>
                <p className="pt-2">{practicalInfo.city}</p>
              </FooterInfoColumn>

              <FooterInfoColumn label="Hours">
                <p>
                  {practicalInfo.hours.weekday.days} · {practicalInfo.hours.weekday.time}
                </p>
                <p className="pt-2">
                  {practicalInfo.hours.saturday.days} · {practicalInfo.hours.saturday.time}
                </p>
                <p className="pt-2">
                  {practicalInfo.hours.houseCalls.days} · {practicalInfo.hours.houseCalls.time}
                </p>
              </FooterInfoColumn>

              <FooterInfoColumn label="Contact">
                <a
                  href={`tel:${practicalInfo.phone.replace(/\D/g, "")}`}
                  className="block hover:text-white"
                >
                  {practicalInfo.phone}
                </a>
                <a href={`mailto:${practicalInfo.email}`} className="mt-2 block hover:text-white">
                  {practicalInfo.email}
                </a>
              </FooterInfoColumn>

              <FooterInfoColumn label="After hours">
                <p>
                  Juniper House is not a 24-hour ER. After hours, call our line to be
                  connected to our partner emergency hospital.
                </p>
                <a
                  href={`tel:${practicalInfo.phone.replace(/\D/g, "")}`}
                  className="mt-4 inline-block font-medium hover:text-white"
                >
                  {practicalInfo.phone}
                </a>
              </FooterInfoColumn>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#e5e7eb] pt-2.5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {credentials.map((c) => (
                <span key={c} className="jh-body-md text-[#f3ede3]">
                  {c}
                </span>
              ))}
            </div>
            <p className="jh-body-md text-[#f3ede3]">
              © {new Date().getFullYear()} Juniper House Veterinary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
