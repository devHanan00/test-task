import Image from "next/image";
import { juniperAssets, visitSteps } from "@/data/juniper-house/content";
import {
  jhContent,
  jhH2,
  jhPage,
  jhPx100,
  jhSans,
  jhSectionPy176,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const visitIconMap = {
  arrive: juniperAssets.visitIcons.arrive,
  doctor: juniperAssets.visitIcons.doctor,
  connect: juniperAssets.visitIcons.connect,
  home: juniperAssets.visitIcons.home,
} as const;

function VisitStepIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#23372f]">
      <Image src={src} alt={alt} width={24} height={24} className="size-6" />
    </div>
  );
}

export function JuniperVisitExperience() {
  return (
    <section className={`bg-[#faf6f0] ${jhSectionPy176}`}>
      <div className={`${jhPage} ${jhPx100}`}>
        <div className={`${jhContent} flex flex-col gap-10 sm:gap-[60px]`}>
          <RevealOnScroll className="max-w-[792px]">
            <p className="juniper-label">What a visit feels like</p>
            <h2 className={`${jhH2} pt-4 text-[#23372f] sm:pt-6 ${jhWandpis}`}>
              <span className={jhSans}>You&apos;ll </span>
              <span className={jhSans}>know exactly what to</span>
              <span> expect.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:flex xl:items-start xl:justify-between xl:gap-0">
            {visitSteps.map((step, i) => (
              <RevealOnScroll key={step.number} delay={i * 80} className="w-full xl:max-w-[220px]">
                <article>
                  <div className="flex items-center justify-between pb-6 sm:pb-10">
                    <span className="font-juniper-display text-[28px] leading-8 tracking-[-0.64px] text-[#23372f] not-italic sm:text-[32px]">
                      {step.number}
                    </span>
                    <VisitStepIcon src={visitIconMap[step.icon]} alt="" />
                  </div>
                  <h3 className="pb-2 font-juniper-body text-[20px] font-normal leading-snug tracking-[-0.48px] text-[#23372f] sm:pb-3 sm:text-[24px] sm:leading-[27.6px]">
                    {step.phase}
                  </h3>
                  <p className="font-juniper-body text-[15px] leading-relaxed text-[#23372f] sm:text-[16.8px] sm:leading-[24.36px]">
                    {step.title}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
