import { EveningsStats } from "./EveningsStats";
import { AnimatedCard } from "./ui/AnimatedCard";
import { HalcyonButton } from "./ui/HalcyonButton";
import { halcyonContent, halcyonPage, halcyonPx120, halcyonSectionPy, halcyonWide1201 } from "./ui/halcyonLayout";

export function HalcyonEvenings() {
  return (
    <section className="bg-stone-cream pb-[clamp(2.5rem,5vw,2.5rem)]">
      <div className={`${halcyonPage} ${halcyonPx120} ${halcyonSectionPy}`}>
        <div className={`${halcyonContent} flex flex-col gap-8 md:gap-[54px]`}>
          <div>
            <h2 className="pt-2 font-display text-[clamp(2rem,3.89vw,3.5rem)] font-medium capitalize leading-[1.15] tracking-[-2px] text-harbor-navy md:pt-5 md:leading-[64.4px]">
              <span className="block">Where interesting</span>
              <span className="block font-light">
                people spend their
                <span className="font-medium"> best evenings.</span>
              </span>
            </h2>
            <p className="max-w-[852px] pt-4 font-body text-[clamp(1.125rem,1.67vw,1.5rem)] font-light leading-[1.5] text-harbor-navy md:pt-5 md:leading-[32.4px]">
              Halcyon is invitation-only. Membership is capped so that members know each
              other , not a number in a database.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-[34px]">
            <div>
              <EveningsStats />
              <div className="h-px w-full bg-[rgba(27,47,91,0.1)]" />
            </div>

            <HalcyonButton
              variant="cta-orange"
              href="#introduction"
              showArrow
              arrowSrc="/halcyon/evenings-arrow.svg"
              className="w-full justify-center sm:w-fit"
            >
              Request an Introduction
            </HalcyonButton>
          </div>
        </div>
      </div>

      <div className={`${halcyonPage} ${halcyonPx120}`}>
        <AnimatedCard className={halcyonWide1201} delay={200}>
          <div className="relative h-[clamp(220px,56vw,694px)] overflow-hidden rounded-xl md:rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/halcyon/evenings-yacht.png"
              alt="M/Y Halcyon silhouetted at sunset"
              className="absolute max-w-none rounded-xl object-cover md:rounded-2xl"
              style={{
                height: "120.17%",
                width: "104.2%",
                left: "-2.12%",
                top: "0.01%",
              }}
            />
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
