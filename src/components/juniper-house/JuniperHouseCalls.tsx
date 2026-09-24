import Image from "next/image";
import { juniperAssets } from "@/data/juniper-house/content";
import { jhH2, jhPage, jhPx48, jhSans, jhSectionPy176, jhWandpis } from "./ui/juniperLayout";
import { JuniperButton } from "./ui/JuniperButton";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function JuniperHouseCalls() {
  return (
    <section
      id="house-calls"
      className="relative overflow-hidden bg-[#1a2a24] min-h-[max(420px,calc(100vw*650/1280))]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#1a2a24]" />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={juniperAssets.houseCallsBg}
            alt=""
            fill
            className="max-w-none object-cover object-[50%_72%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className={`relative z-10 ${jhPage} ${jhPx48} ${jhSectionPy176}`}>
        <RevealOnScroll className="max-w-[544px] lg:max-w-[484px]">
          <p className="juniper-label !text-white">House calls</p>
          <h2 className={`${jhH2} pt-4 text-[#f3ede3] sm:pt-6`}>
            <span className={jhWandpis}>Care</span>
            <span className={jhSans}>, wherever home is.</span>
          </h2>
          <p className="jh-body-lg max-w-[530px] pt-5 text-white sm:pt-7 lg:max-w-[471px] lg:pt-[28px]">
            For the ones who don&apos;t love the car. We&apos;ll come to you, from Bird Key
            to Lakewood Ranch — the same doctor, the same calm attention, in the place
            where your pet feels safest.
          </p>
          <JuniperButton variant="primary" href="#booking" className="mt-8 w-full sm:mt-10 sm:w-auto lg:mt-[40px]">
            Request a House Call
          </JuniperButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
