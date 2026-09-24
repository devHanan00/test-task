import Image from "next/image";
import { juniperAssets } from "@/data/juniper-house/content";
import { jhHeroH1, jhHeroSans, jhHeroWandpis, jhPage, jhPx100 } from "./ui/juniperLayout";
import { JuniperButton } from "./ui/JuniperButton";

export function JuniperHero() {
  return (
    <section className="bg-[#ffd5c7]">
      <div
        className={`${jhPage} ${jhPx100} flex flex-col items-center gap-10 pb-12 pt-24 sm:pt-28 lg:h-[705px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:pb-0 lg:pt-[96px]`}
      >
        <div className="w-full max-w-[575px] shrink-0 lg:max-w-[510px]">
          <div className="pt-2 lg:pt-[24px]">
            <h1 className={jhHeroH1}>
              <span className={jhHeroWandpis}>Veterinary care</span>
              <span className={jhHeroSans}>, </span>
              <span className={jhHeroSans}>the way you&apos;d want it for family.</span>
            </h1>
          </div>
          <p className="jh-body-lg max-w-[575px] pt-5 text-[#23372f] sm:pt-7 lg:max-w-[511px] lg:pt-[28px]">
            Unhurried appointments, a doctor who knows your pet, and a direct line to
            their care team.
          </p>
          <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center lg:pt-[40px]">
            <JuniperButton variant="primary" href="#booking" className="w-full sm:w-auto">
              Book a Visit
            </JuniperButton>
            <JuniperButton variant="secondary" href="#house-calls" className="w-full sm:w-auto">
              Request a House Call
            </JuniperButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[562px] shrink-0 lg:mx-0">
          <div className="relative aspect-[562/599] w-full overflow-hidden rounded-[12px] bg-[#ffd5c7]">
            <Image
              src={juniperAssets.heroDog}
              alt="Relaxed dog in a warm veterinary setting"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 562px"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
