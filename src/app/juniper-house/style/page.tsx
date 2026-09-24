import Link from "next/link";
import type { ReactNode } from "react";
import { carePlanFeatures, team, testimonials, visitSteps } from "@/data/juniper-house/content";
import {
  juniperColors,
  juniperDeprecated,
  juniperLiveSections,
  juniperShapes,
  juniperSpacing,
  juniperTypography,
} from "@/lib/juniper-house/tokens";
import { JuniperButton } from "@/components/juniper-house/ui/JuniperButton";
import {
  jhFigtree,
  jhH2,
  jhH3,
  jhHeroH1,
  jhHeroSans,
  jhHeroWandpis,
  jhNum,
  jhSans,
  jhWandpis,
} from "@/components/juniper-house/ui/juniperLayout";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 border-b border-sand pb-6">
      <p className="juniper-label mb-2">{eyebrow}</p>
      <h2 className={`${jhH2} text-juniper ${jhWandpis}`}>{title}</h2>
    </div>
  );
}

function Swatch({ hex, name, usage }: { hex: string; name: string; usage: string }) {
  const light = ["#F3EDE3", "#FAF6F0", "#E8DFD0", "#FFD5C7"].includes(hex);
  return (
    <div>
      <div
        className={`aspect-[4/3] rounded-[var(--jh-radius-md)] ${light ? "border border-sand" : ""}`}
        style={{ backgroundColor: hex }}
      />
      <p className="mt-4 font-juniper-body text-[16px] font-medium text-juniper">{name}</p>
      <p className="font-juniper-body text-jh-body-sm text-juniper/45">{hex}</p>
      <p className="mt-1 font-juniper-body text-jh-body-sm text-juniper/60">{usage}</p>
    </div>
  );
}

function TypeRow({
  label,
  className,
  sample,
  specs,
}: {
  label: string;
  className: string;
  sample: ReactNode;
  specs: string;
}) {
  return (
    <div className="border-b border-sand py-6">
      <div className="mb-3 flex flex-col gap-1 md:flex-row md:justify-between">
        <span className="font-juniper-body text-jh-body-sm text-juniper/45">{label}</span>
        <span className="font-juniper-body text-jh-body-sm text-juniper/35">{specs}</span>
      </div>
      <div className={className}>{sample}</div>
    </div>
  );
}

export default function JuniperStylePage() {
  const founder = team[0];

  return (
    <div className="min-h-screen bg-linen pb-20">
      <header className="border-b border-linen/10 bg-juniper py-12 md:py-16">
        <div className="juniper-container">
          <Link
            href="/juniper-house"
            className="font-juniper-body text-jh-body-sm text-linen/50 transition-colors hover:text-linen"
          >
            ← Back to Juniper House
          </Link>
          <h1 className={`mt-6 ${jhH2} text-linen ${jhWandpis}`}>Juniper House Design System</h1>
          <p className="mt-3 max-w-xl jh-body-lg text-linen/60">
            Visual language for the live /juniper-house route — Figma frame 30:6634 on the 1680px
            canvas.
          </p>
        </div>
      </header>

      <div className="juniper-container py-16 md:py-24">
        <section className="mb-20">
          <SectionHeading eyebrow="Live route" title="Page structure" />
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {juniperLiveSections.map((section) => (
              <li key={section} className="jh-body-md text-juniper/70">
                {section}
              </li>
            ))}
          </ul>
          <p className="mt-6 jh-body-md text-juniper/50">
            Removed from the live page: {juniperDeprecated.join(" · ")}
          </p>
        </section>

        <section className="mb-20">
          <SectionHeading eyebrow="Foundation" title="Colors" />
          <p className="mb-8 max-w-2xl jh-body-md text-juniper/60">
            Target balance: 60–70% Linen / Warm Cream · 20–30% Juniper · 5–10% Terracotta accent
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Object.values(juniperColors).map((c) => (
              <Swatch key={c.hex} hex={c.hex} name={c.name} usage={c.usage} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <SectionHeading eyebrow="Foundation" title="Typography" />
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: juniperTypography.wandpis.family, role: juniperTypography.wandpis.role, className: "font-juniper-wandpis" },
              { name: juniperTypography.display.family, role: juniperTypography.display.role, className: "font-juniper-display" },
              { name: juniperTypography.accent.family, role: juniperTypography.accent.role, className: "font-juniper-accent" },
              { name: juniperTypography.body.family, role: juniperTypography.body.role, className: "font-juniper-body" },
            ].map((font) => (
              <div key={font.name} className="border border-sand bg-linen-warm p-5">
                <p className={`text-[28px] leading-tight text-juniper ${font.className}`}>Aa Bb Cc</p>
                <p className="mt-3 font-juniper-body text-[16px] font-medium text-juniper">{font.name}</p>
                <p className="mt-1 font-juniper-body text-jh-body-sm text-juniper/55">{font.role}</p>
              </div>
            ))}
          </div>
          <TypeRow
            label={`Hero H1 — ${juniperTypography.figma.heroH1.wandpisFamily} + DM Sans`}
            className={jhHeroH1}
            specs={`${juniperTypography.figma.heroH1.wandpis} · ${juniperTypography.figma.heroH1.sans} · ${juniperTypography.figma.heroH1.responsive} · Figma ${juniperTypography.figma.heroH1.figmaNode}`}
            sample={
              <>
                <span className={jhHeroWandpis}>Veterinary care</span>
                <span className={jhHeroSans}>, </span>
                <span className={jhHeroSans}>the way you&apos;d want it for family.</span>
              </>
            }
          />
          <TypeRow
            label="Section H2 — mixed fonts"
            className={`${jhH2} text-juniper ${jhFigtree}`}
            specs={`${juniperTypography.figma.h2.size} max · Cormorant + Figtree + DM Sans`}
            sample={
              <>
                <span className={jhSans}>The </span>
                <span className={jhWandpis}>difference</span>
                <span className={jhFigtree}> is time.</span>
              </>
            }
          />
          <TypeRow
            label="Booking H2"
            className="jh-booking-h2"
            specs={`${juniperTypography.figma.bookingH2.size} · mixed Wandpis + DM Sans`}
            sample={
              <>
                <span className={jhSans}>A</span>
                <span className={jhWandpis}> calmer </span>
                <span className={jhSans}>kind of veterinary care starts with one visit.</span>
              </>
            }
          />
          <TypeRow
            label="H3 / service title"
            className={`${jhH3} text-juniper`}
            specs={`DM Sans · ${juniperTypography.figma.h3.size} max`}
            sample="Wellness & Preventive Care"
          />
          <TypeRow
            label="Founder quote"
            className="font-juniper-body text-[34px] leading-normal text-terracotta"
            specs={`${juniperTypography.figma.founderQuote.wandpisFamily} + DM Sans · ${juniperTypography.figma.founderQuote.size} · Figma ${juniperTypography.figma.founderQuote.figmaNode}`}
            sample={
              <>
                <span className={jhHeroWandpis}>Twenty years</span>
                <span> in practice. Lives with two rescue greyhounds.</span>
              </>
            }
          />
          <TypeRow
            label="Testimonial quote"
            className="jh-testimonial-quote"
            specs={`${juniperTypography.figma.testimonialQuote.family} ${juniperTypography.figma.testimonialQuote.style} · up to ${juniperTypography.figma.testimonialQuote.size}`}
            sample={testimonials[0].quote}
          />
          <TypeRow
            label="Body LG"
            className="jh-body-lg text-juniper/75"
            specs={`${juniperTypography.figma.bodyLg.size} · lh ${juniperTypography.figma.bodyLg.lineHeight}`}
            sample="Unhurried appointments, a doctor who knows your pet."
          />
          <TypeRow
            label="Body MD"
            className="jh-body-md text-juniper/75"
            specs={`${juniperTypography.figma.bodyMd.size} · lh ${juniperTypography.figma.bodyMd.lineHeight}`}
            sample="Direct communication with your care team."
          />
          <TypeRow
            label="Label"
            className="juniper-label"
            specs={`${juniperTypography.figma.label.size} · uppercase · tracking ${juniperTypography.figma.label.letterSpacing}`}
            sample="Juniper Care Plans"
          />
          <TypeRow
            label="Number"
            className={`${jhNum} text-juniper`}
            specs={`Cormorant · ${juniperTypography.figma.number.size} max`}
            sample="01"
          />
        </section>

        <section className="mb-20">
          <SectionHeading eyebrow="Components" title="Buttons" />
          <div className="flex flex-wrap gap-3 border border-sand bg-linen-warm p-8">
            <JuniperButton variant="primary">Book a Visit</JuniperButton>
            <JuniperButton variant="secondary">Request a House Call</JuniperButton>
            <JuniperButton variant="text" href="#" showArrow={false}>
              Text Link
            </JuniperButton>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 bg-juniper p-8">
            <JuniperButton variant="primary">Book a Visit</JuniperButton>
            <JuniperButton variant="ghost">Ask About Care Plans</JuniperButton>
            <JuniperButton variant="ghost" href="#" showArrow={false}>
              Client Portal
            </JuniperButton>
          </div>
        </section>

        <section className="mb-20">
          <SectionHeading eyebrow="Components" title="Live patterns" />

          <div className="mb-12">
            <h3 className={`mb-4 ${jhH3} text-juniper`}>Services cell</h3>
            <article className="max-w-sm border-t border-sand bg-terracotta py-8">
              <span className={`${jhNum} block text-white`}>01</span>
              <div className="pt-6">
                <h4 className={`${jhH3} text-white`}>Wellness & Preventive Care</h4>
                <p className="jh-body-md pt-2 text-white">
                  Exams, vaccines, nutrition guidance and parasite prevention.
                </p>
              </div>
            </article>
          </div>

          <div className="mb-12">
            <h3 className={`mb-4 ${jhH3} text-juniper`}>Visit step</h3>
            <article className="max-w-xs">
              <div className="flex items-center justify-between pb-6">
                <span className={`${jhNum} text-juniper`}>{visitSteps[0].number}</span>
                <div className="flex size-12 items-center justify-center rounded-full border border-juniper" />
              </div>
              <h4 className="pb-2 font-juniper-body text-[24px] leading-snug text-juniper">
                {visitSteps[0].phase}
              </h4>
              <p className="jh-body-md text-juniper">{visitSteps[0].title}</p>
            </article>
          </div>

          <div className="mb-12">
            <h3 className={`mb-4 ${jhH3} text-juniper`}>Care plan list row</h3>
            <div className="max-w-md bg-juniper p-6">
              <p className="jh-body-md text-linen">{carePlanFeatures[0]}</p>
              <div className="mt-4 border-b border-border-light" aria-hidden="true" />
            </div>
          </div>

          <div className="mb-12">
            <h3 className={`mb-4 ${jhH3} text-juniper`}>Founder spotlight</h3>
            <div className="max-w-md">
              <p className="pb-6 font-juniper-body text-[34px] leading-normal text-terracotta">
                {"bioHighlight" in founder && (
                  <span className={jhHeroWandpis}>{founder.bioHighlight}</span>
                )}
                <span>{founder.bio}</span>
              </p>
              <h4 className="font-juniper-body text-[32px] leading-tight text-juniper">{founder.name}</h4>
              <p className="pt-2 text-[14px] font-medium uppercase tracking-[1.68px] text-juniper">
                {founder.role}
              </p>
            </div>
          </div>

          <div>
            <h3 className={`mb-4 ${jhH3} text-juniper`}>Testimonial</h3>
            <blockquote className="max-w-2xl">
              <span className="font-juniper-display text-[80px] leading-none text-juniper/20" aria-hidden="true">
                &ldquo;
              </span>
              <p className="-mt-8 jh-testimonial-quote">{testimonials[0].quote}</p>
              <footer className="pt-6 text-[14px] text-juniper">
                <span className="font-medium">Margaret L.</span>
                <span className="font-normal"> · Bird Key</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="mb-20">
          <SectionHeading eyebrow="Layout" title="Spacing & grid" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-sand p-6">
              <p className={`${jhH3} text-juniper`}>Page frame</p>
              <ul className="mt-3 space-y-1 jh-body-md text-juniper/60">
                <li>Page max: {juniperSpacing.pageMax}</li>
                <li>Shell max: {juniperSpacing.shellMax}</li>
                <li>Content max: {juniperSpacing.contentMax}</li>
                <li>Care plans max: {juniperSpacing.carePlansMax}</li>
              </ul>
            </div>
            <div className="border border-sand p-6">
              <p className={`${jhH3} text-juniper`}>Horizontal padding</p>
              <ul className="mt-3 space-y-1 jh-body-md text-juniper/60">
                <li>jhPx48: {juniperSpacing.containerPadding48}</li>
                <li>jhPx100: {juniperSpacing.containerPadding100}</li>
                <li>jhPx120: {juniperSpacing.containerPadding120}</li>
              </ul>
            </div>
            <div className="border border-sand p-6">
              <p className={`${jhH3} text-juniper`}>Section padding</p>
              <ul className="mt-3 space-y-1 jh-body-md text-juniper/60">
                <li>jhSectionPy80: {juniperSpacing.sectionPy80}</li>
                <li>jhSectionPy141: {juniperSpacing.sectionPy141}</li>
                <li>jhSectionPy176: {juniperSpacing.sectionPy176}</li>
              </ul>
            </div>
            <div className="border border-sand p-6">
              <p className={`${jhH3} text-juniper`}>Hero</p>
              <ul className="mt-3 space-y-1 jh-body-md text-juniper/60">
                <li>Height: {juniperSpacing.heroHeight}</li>
                <li>Padding top: {juniperSpacing.heroPaddingTop}</li>
                <li>Background: {juniperColors.peach.hex}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Visual" title="Shape language" />
          <div className="grid gap-6 md:grid-cols-3">
            {[juniperShapes.radiusSm, juniperShapes.radiusMd, juniperShapes.radiusLg].map((r) => (
              <div key={r} className="text-center">
                <div className="mx-auto h-14 w-full max-w-[100px] bg-juniper" style={{ borderRadius: r }} />
                <p className="mt-3 jh-body-md text-juniper/50">{r}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 jh-body-md text-juniper/60">Button padding: {juniperShapes.buttonPadding}</p>
        </section>
      </div>
    </div>
  );
}
