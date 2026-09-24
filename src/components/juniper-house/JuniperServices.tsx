import { services } from "@/data/juniper-house/content";
import {
  jhH2,
  jhH3,
  jhNum,
  jhPage,
  jhPx100,
  jhSans,
  jhSectionPy80,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

function ServiceCell({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description: string;
}) {
  return (
    <article className="w-full border-t border-[#e8dfd0] py-8 sm:py-10 lg:w-auto">
      <span className={`${jhNum} block text-[#ffffff]`}>{num}</span>
      <div className="pt-6 sm:pt-10">
        <h3 className={`${jhH3} text-white`}>{title}</h3>
        <p className="jh-body-md pt-2 text-white">{description}</p>
      </div>
    </article>
  );
}

export function JuniperServices() {
  const rows = [services.slice(0, 3), services.slice(3, 6)];

  return (
    <section id="services" className={`bg-[#b5654a] ${jhSectionPy80}`}>
      <div className={jhPage}>
        <RevealOnScroll className={jhPx100}>
          <p className="juniper-label !text-white">Our care</p>
          <h2 className={`${jhH2} max-w-[756px] pt-4 text-white sm:pt-6`}>
            <span className={jhWandpis}>Everything </span>
            <span className={jhSans}>your </span>
            <span className={`${jhWandpis} capitalize`}>pet </span>
            <span className={jhSans}>needs without the hurry.</span>
          </h2>
        </RevealOnScroll>

        <div className={`${jhPx100} pt-10 sm:pt-16 lg:pt-20`}>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:gap-0"
            >
              {row.map((service, i) => {
                const num = String(rowIndex * 3 + i + 1).padStart(2, "0");
                return (
                  <RevealOnScroll key={service.id} delay={(rowIndex * 3 + i) * 40} className="w-full lg:max-w-[33%]">
                    <ServiceCell
                      num={num}
                      title={service.title}
                      description={service.description}
                    />
                  </RevealOnScroll>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
