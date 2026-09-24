import { testimonials } from "@/data/juniper-house/content";
import {
  jhFigtree,
  jhH2,
  jhPage,
  jhPx100,
  jhPx120,
  jhSans,
  jhSectionPy80,
  jhShell,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

function parseAttribution(attribution: string) {
  const commaIndex = attribution.indexOf(", ");
  if (commaIndex === -1) {
    return { name: attribution, location: "" };
  }
  return {
    name: attribution.slice(0, commaIndex),
    location: attribution.slice(commaIndex + 2),
  };
}

function TestimonialQuote({
  quote,
  attribution,
  staggered = false,
}: {
  quote: string;
  attribution: string;
  staggered?: boolean;
}) {
  const { name, location } = parseAttribution(attribution);

  const content = (
    <>
      <span
        className={`font-juniper-display text-[#23372f] ${
          staggered
            ? "text-[56px] leading-[56px] sm:text-[80px] sm:leading-[74px] lg:text-[112px]"
            : "text-[56px] leading-[56px] sm:text-[80px] sm:leading-[80px] lg:text-[112px] lg:leading-[112px]"
        }`}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p
        className={`jh-testimonial-quote max-w-[896px] ${
          staggered ? "-mt-1 sm:-mt-2" : "-mt-6 sm:-mt-10 lg:-mt-12"
        }`}
      >
        {quote}
      </p>
      <footer className="pt-5 text-[14px] leading-[22.68px] text-[#23372f] sm:pt-8">
        <span className="font-medium">{name}</span>
        {location ? (
          <span className="font-normal">{` · ${location}`}</span>
        ) : null}
      </footer>
    </>
  );

  if (staggered) {
    return (
      <div className="w-full lg:mt-[128px] lg:max-w-[577px] lg:pt-[128px]">
        {content}
      </div>
    );
  }

  return <div className="min-w-0 w-full flex-1 lg:mr-[-110px]">{content}</div>;
}

export function JuniperTestimonials() {
  const [first, second] = testimonials;

  return (
    <section className={`bg-[#faf6f0] ${jhSectionPy80}`}>
      <div className={`${jhPage} flex flex-col gap-10 sm:gap-[60px]`}>
        <RevealOnScroll className={`${jhPx120} max-w-[672px]`}>
          <p className="juniper-label">Our people</p>
          <h2 className={`${jhH2} pt-4 text-[#23372f] sm:pt-6 ${jhFigtree}`}>
            <span className={jhSans}>Hear from </span>
            <span className={`${jhWandpis} capitalize`}>pet</span>
            <span className={jhSans}> </span>
            <span className={jhWandpis}>parents</span>
            <span className={jhSans}> who trust us with their care</span>
          </h2>
        </RevealOnScroll>

        <div className={`${jhShell} ${jhPx100}`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
            <RevealOnScroll className="w-full">
              <TestimonialQuote quote={first.quote} attribution={first.attribution} />
            </RevealOnScroll>
            <RevealOnScroll delay={100} className="w-full">
              <TestimonialQuote
                quote={second.quote}
                attribution={second.attribution}
                staggered
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
