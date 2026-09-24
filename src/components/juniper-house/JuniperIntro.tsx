import Image from "next/image";
import { juniperAssets } from "@/data/juniper-house/content";
import {
  jhContent,
  jhFigtree,
  jhH2,
  jhPage,
  jhPx48,
  jhSectionPy80,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function JuniperIntro() {
  return (
    <section id="intro" className={`bg-[#f3ede3] ${jhSectionPy80}`}>
      <div className={`${jhPage} ${jhPx48}`}>
        <div className={`${jhContent} flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[105px]`}>
          <RevealOnScroll className="relative aspect-[698/432] w-full max-w-[698px] shrink-0 overflow-hidden rounded-[12px] lg:max-w-[621px]">
            <Image
              src={juniperAssets.introInterior}
              alt="Warm Mediterranean interior with natural light"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 621px"
            />
          </RevealOnScroll>

          <RevealOnScroll className="w-full max-w-[698px] lg:max-w-[621px]" delay={120}>
            <p className="juniper-label">A different kind of veterinary care</p>
            <h2 className={`${jhH2} pt-4 sm:pt-6 ${jhWandpis}`}>
              <span className={jhFigtree}>The</span>
              <span> difference</span>
              <span className={jhFigtree}> is time.</span>
            </h2>
            <p className="jh-body-lg pt-5 text-[#23372f] sm:pt-7 lg:pt-[28px]">
              At Juniper House, appointments are never rushed. Your pet has their own doctor,
              and you can reach your care team directly by text, by phone, whenever you
              need reassurance.
            </p>
            <p className="jh-body-md max-w-[588px] pt-4 text-[#23372f] lg:max-w-[523px] lg:pt-5">
              We practice from a restored 1920s Mediterranean Revival home because care
              should feel like being welcomed somewhere beautiful — not processed
              somewhere clinical.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
