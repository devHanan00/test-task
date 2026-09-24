import { RevealOnScroll } from "./ui/RevealOnScroll";

export function HalcyonDetails() {
  return (
    <section className="border-t border-stone-light bg-yacht-white py-12 md:py-16">
      <div className="halcyon-container">
        <RevealOnScroll>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-heading-sm text-harbor-navy">Sarasota Bay, Florida</p>
              <p className="mt-1 font-body text-body-sm text-harbor-navy/55">
                Arrival details are shared privately with members and guests.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="font-display text-metadata uppercase tracking-[0.12em] text-harbor-navy/45">
                21+
              </span>
              <a href="mailto:hello@halcyon.club" className="halcyon-link font-body text-body-sm">
                hello@halcyon.club
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
