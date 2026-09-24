"use client";

import { CountUp } from "./ui/CountUp";

const statNumberClass =
  "font-display text-[clamp(3.5rem,6.94vw,6.25rem)] font-light leading-none tracking-[-8px]";

export function EveningsStats() {
  return (
    <div className="grid grid-cols-1 gap-8 pb-1 pt-6 sm:grid-cols-3 sm:gap-4 md:flex md:items-start md:justify-between md:pt-8">
      <div>
        <div className="flex items-end text-harbor-navy">
          <CountUp end={150} duration={2400} className={statNumberClass} />
          <span className="mb-1 ml-1 font-body text-[28px] font-light leading-[24.64px] tracking-[2.464px]">
            ft
          </span>
        </div>
        <p className="pt-1 font-display text-[14px] font-light leading-[22.4px] text-harbor-navy">
          Superyacht
        </p>
      </div>

      <div className="flex items-end text-harbor-navy">
        <CountUp end={21} suffix="+" duration={1800} className={statNumberClass} />
        <span className="mb-1 ml-2 font-body text-[28px] font-light leading-[22.4px] sm:ml-[-12px]">
          Members
        </span>
      </div>

      <div>
      <CountUp end={100} suffix="+" duration={1800} className={statNumberClass} />
        <p className="pt-1 font-body text-[14px] font-light leading-[22.4px] text-harbor-navy">
          By invitation
        </p>
      </div>
    </div>
  );
}
