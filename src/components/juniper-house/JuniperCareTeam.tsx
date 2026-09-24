import Image from "next/image";
import type { ReactNode } from "react";
import { team } from "@/data/juniper-house/content";
import {
  jhFigtree,
  jhH2,
  jhWandpisDemo,
  jhPage,
  jhPx100,
  jhSans,
  jhSectionPy80,
  jhShell,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

function TeamRole({ children }: { children: ReactNode }) {
  return (
    <p className="pt-1 font-juniper-body text-[14px] font-normal uppercase leading-[22.68px] tracking-[1.4px] text-[#23372f]">
      {children}
    </p>
  );
}

export function JuniperCareTeam() {
  const [founder, ...rest] = team;

  return (
    <section id="team" className={`bg-[#f3ede3] ${jhSectionPy80}`}>
      <div className={`${jhPage} flex flex-col gap-10 sm:gap-[60px]`}>
        <div className={`${jhShell} ${jhPx100} flex flex-col gap-10 sm:gap-[60px]`}>
          <RevealOnScroll className="max-w-[672px]">
            <p className="juniper-label">Our people</p>
            <h2 className={`${jhH2} pt-4 text-[#23372f] sm:pt-6 ${jhFigtree}`}>
              <span className={jhSans}>The </span>
              <span className={jhWandpis}>team</span>
              <span className={jhSans}> who will know your </span>
              <span className={`${jhWandpis} capitalize`}>pet</span>
              <span className={jhSans}>.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <article className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
              <div className="relative mx-auto aspect-[439/520] w-full max-w-[355px] shrink-0 overflow-hidden rounded-[12px] lg:mx-0 lg:max-w-[439px]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 439px"
                  priority
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="max-w-[537px] pb-6 font-juniper-body text-[24px] font-normal leading-snug text-[#b5654a] sm:pb-8 sm:text-[28px] lg:text-[34px] lg:leading-normal">
                  {"bioHighlight" in founder && (
                    <span className={jhWandpisDemo}>{founder.bioHighlight}</span>
                  )}
                  <span>{founder.bio}</span>
                </p>
                <h3 className="font-juniper-body text-[24px] font-normal leading-tight tracking-[-0.48px] text-[#23372f] sm:text-[28px] lg:text-[32px] lg:leading-[35.84px]">
                  {founder.name}
                </h3>
                <p className="pt-2 font-juniper-body text-[14px] font-medium uppercase leading-[22.68px] tracking-[1.68px] text-[#23372f]">
                  {founder.role}
                </p>
              </div>
            </article>
          </RevealOnScroll>
        </div>

        <div className={`${jhPx100} grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:flex lg:items-start lg:justify-center lg:gap-6`}>
          {rest.map((member, i) => (
            <RevealOnScroll
              key={member.name}
              delay={i * 80}
              className="w-full lg:max-w-[330px] lg:flex-1"
            >
              <article>
                <div className="relative aspect-[330/443] w-full overflow-hidden rounded-[8px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    className={
                      member.name === "Claire Whitfield"
                        ? "object-cover object-[50%_15%]"
                        : "object-cover object-center"
                    }
                    sizes="(max-width: 640px) 100vw, 330px"
                  />
                </div>
                <h3 className="pt-5 font-juniper-body text-[20px] font-normal leading-snug text-[#23372f] sm:pt-6 sm:text-[22.4px] sm:leading-[28.672px]">
                  {member.name}
                </h3>
                <TeamRole>{member.role}</TeamRole>
                <p className="pt-3 font-juniper-body text-[14px] leading-[22.68px] text-[#23372f] sm:pt-4">
                  {member.bio}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
