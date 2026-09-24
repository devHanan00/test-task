import { approachPrinciples } from "@/data/juniper-house/content";
import {
  jhFigtree,
  jhH2,
  jhH3,
  jhNarrow,
  jhNum,
  jhPage,
  jhPx48,
  jhSectionPy141,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const jhApproachHeader = "max-w-[1008px]";
const jhApproachRow = "max-w-[1050px]";

const rowHeights = [
  "min-h-0 lg:min-h-[182px]",
  "min-h-0 lg:min-h-[182px]",
  "min-h-0 lg:min-h-[155px]",
  "min-h-0 lg:min-h-[155px]",
  "min-h-0 lg:min-h-[155px]",
  "min-h-0 lg:min-h-[182px]",
];

export function JuniperApproach() {
  return (
    <section id="approach" className={`bg-[#faf6f0] ${jhSectionPy141}`}>
      <div className={`${jhPage} ${jhPx48}`}>
        <div className={`${jhNarrow} mx-auto`}>
          <RevealOnScroll className={jhApproachHeader}>
            <p className="juniper-label">Why Juniper House</p>
            <h2 className={`${jhH2} pt-4 text-[#23372f] sm:pt-6 ${jhFigtree}`}>
              More <span className={`${jhWandpis} capitalize`}>time</span>. Less{" "}
              <span className={`${jhWandpis} capitalize`}>waiting</span>. Someone who knows your{" "}
              <span className={`${jhWandpis} capitalize`}>pet</span>.
            </h2>
          </RevealOnScroll>

          <div className="group/approach pt-10 sm:pt-16 lg:pt-20">
            {approachPrinciples.map((item, i) => {
              const isFirst = i === 0;

              return (
                <RevealOnScroll key={item.number} delay={i * 60}>
                  <article
                    className={[
                      "grid grid-cols-[3.5rem_1fr] gap-x-5 border-t border-[#e8dfd0] px-3 py-7 transition-colors duration-300 sm:grid-cols-[80px_1fr] sm:gap-x-12 sm:px-5 sm:py-11",
                      rowHeights[i],
                      jhApproachRow,
                      isFirst
                        ? "bg-[#ffd5c7] group-has-[.approach-row-hover:hover]/approach:bg-[#faf6f0]"
                        : "approach-row-hover hover:bg-[#ffd5c7]",
                    ].join(" ")}
                  >
                    <span className={jhNum}>{item.number}</span>
                    <div className="min-w-0">
                      <h3 className={`${jhH3} text-[#23372f] ${isFirst ? "font-medium" : "font-normal"}`}>
                        {item.title}
                      </h3>
                      <p className="jh-body-md pt-2 text-[#23372f]">{item.description}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
