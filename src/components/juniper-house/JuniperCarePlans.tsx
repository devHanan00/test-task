import { carePlanFeatures } from "@/data/juniper-house/content";
import {
  jhH2,
  jhPage,
  jhPx120,
  jhSans,
  jhSectionPy141,
  jhWandpis,
} from "./ui/juniperLayout";
import { JuniperButton } from "./ui/JuniperButton";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function JuniperCarePlans() {
  return (
    <section className={`bg-[#23372f] ${jhSectionPy141}`}>
      <div className={`${jhPage} ${jhPx120}`}>
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 sm:gap-16 lg:flex-row lg:items-center lg:justify-between">
          <RevealOnScroll className="w-full shrink-0 lg:w-[532px]">
            <p className="font-juniper-body text-[12px] font-medium uppercase leading-[17.4px] tracking-[1.92px] text-[#8a9b8e]">
              Juniper Care Plans
            </p>
            <h2 className={`${jhH2} pt-4 text-[#f3ede3] sm:pt-6 ${jhWandpis}`}>
              <span>A little </span>
              <span className={jhSans}>more continuity</span>
              <span>, built in.</span>
            </h2>
            <p className="jh-body-lg max-w-[448px] pt-4 text-[#f3ede3] sm:pt-6">
              An annual wellness membership for pets who deserve a relationship with
              their doctor not a rotating cast of strangers.
            </p>
          </RevealOnScroll>

          <div className="w-full shrink-0 border-0 outline-none lg:w-[532px]">
            <RevealOnScroll delay={100}>
              <ul className="m-0 w-full list-none border-0 p-0 outline-none">
                {carePlanFeatures.map((feature, i) => (
                  <li key={feature} className={i > 0 ? "pt-4 sm:pt-5" : undefined}>
                    <p className="pl-0 jh-body-md leading-[27.52px] text-[#f3ede3] sm:pl-10">
                      {feature}
                    </p>
                    {i < carePlanFeatures.length - 1 ? (
                      <div
                        className="mt-4 border-b border-[0.667px] border-[#e5e7eb] sm:mt-5"
                        aria-hidden="true"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
              <div className="pt-8 sm:pt-10">
                <JuniperButton variant="ghost" href="#booking" className="w-full sm:w-auto">
                  Ask About Care Plans
                </JuniperButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
