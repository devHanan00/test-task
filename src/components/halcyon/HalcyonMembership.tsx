import { membershipSteps } from "@/data/halcyon/content";
import { AnimatedCard } from "./ui/AnimatedCard";
import {
  halcyonHeading2,
  halcyonPage,
  halcyonPx120,
  halcyonSectionPy,
  halcyonWide1201,
} from "./ui/halcyonLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function HalcyonMembership() {
  return (
    <section id="membership" className={`bg-yacht-white ${halcyonSectionPy}`}>
      <div className={`${halcyonPage} ${halcyonPx120}`}>
        <div className={halcyonWide1201}>
          <RevealOnScroll className="max-w-[672px]">
            <p className="font-display text-[11px] font-medium uppercase leading-[15.4px] tracking-[1.98px] text-riviera-blue">
              Membership
            </p>
            <h2 className={`pt-4 text-harbor-navy ${halcyonHeading2}`}>
              By <span className="font-medium">invitation</span>, not{" "}
              <span className="font-medium">application</span>.
            </h2>
            <p className="pt-4 font-body text-[16px] leading-[26.4px] text-harbor-navy md:text-[18px] md:leading-[30.6px]">
              Halcyon membership is by invitation. If a friend has told you about us, or
              you&apos;d like to learn more, request an introduction and we&apos;ll invite
              you aboard as our guest.
            </p>
          </RevealOnScroll>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-[48px]">
            {membershipSteps.map((step, index) => (
              <AnimatedCard
                key={step.number}
                delay={index * 120}
                className="flex flex-col gap-4 rounded-xl border-l-[0.667px] border-stone-light bg-stone-cream/30 p-6 pl-6 transition-colors duration-300 hover:bg-stone-cream/60 md:pl-8"
              >
                <span className="font-display text-[clamp(2rem,5vw,2.4rem)] font-light leading-[43.008px] tracking-[-0.384px] text-harbor-navy">
                  {step.number}
                </span>
                <h3 className="font-display text-[clamp(1.375rem,3vw,1.6rem)] font-normal leading-8 text-harbor-navy">
                  {step.title}
                </h3>
                <p className="max-w-[336px] font-body text-[16px] leading-[26.4px] text-harbor-navy">
                  {step.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
