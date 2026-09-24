import Image from "next/image";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const communityImages = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Friends laughing on deck at golden hour",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Elegant dinner table aboard the yacht",
    span: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
    alt: "Members watching sunset over the water",
    span: "md:col-span-5",
  },
];

export function HalcyonCommunity() {
  return (
    <section id="community" className="bg-stone-warm halcyon-section">
      <div className="halcyon-container">
        <RevealOnScroll>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="halcyon-eyebrow mb-4">The community</p>
              <h2 className="max-w-2xl font-display text-display-lg font-light text-harbor-navy text-balance">
                Interesting people meeting interesting people.
              </h2>
            </div>
            <p className="max-w-sm font-body text-body-md text-harbor-navy/65 md:text-right">
              Founders, pilots, writers, athletes, travelers — members who have already
              experienced luxury and come for something richer: genuine connection.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12 md:grid-rows-2 md:gap-5">
          {communityImages.map((img, i) => (
            <RevealOnScroll
              key={img.src}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-auto md:min-h-[220px] ${img.span}`}
              delay={i * 100}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-harbor-navy/30 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-12 md:mt-16" delay={200}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-stone-light pt-8">
            {["Founders", "Pilots", "Creatives", "Athletes", "Writers", "Travelers"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-display text-metadata uppercase tracking-[0.12em] text-harbor-navy/45 transition-colors duration-300 hover:text-sunset-orange"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
