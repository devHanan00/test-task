import Image from "next/image";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function JuniperAbout() {
  return (
    <section id="about" className="border-t border-sand bg-linen-warm py-20 md:py-28">
      <div className="juniper-container">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <RevealOnScroll className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--jh-radius-lg)]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Garden entrance with Mediterranean architecture and greenery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-6 lg:row-start-1">
            <p className="juniper-label mb-6">About</p>
            <h2 className="font-juniper-display text-jh-display-md text-juniper text-balance">
              A house built for healing.
            </h2>
            <p className="juniper-prose mt-7 font-juniper-body text-jh-body-lg text-juniper/70">
              Founded in 2021 by Dr. Elena Alvarez, Juniper House operates from a restored
              1920s Mediterranean Revival home near Southside Village — a place where
              veterinary medicine feels less like a clinic and more like being welcomed
              into someone&apos;s beautiful home.
            </p>
            <p className="mt-5 font-juniper-body text-jh-body-md text-juniper/55">
              Garden entrance, natural light, private rooms, and a team small enough to
              remember every name. That is intentional. It is how care should feel.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
