"use client";

import Image from "next/image";

type ServiceRowProps = {
  index: number;
  title: string;
  description: string;
  image?: string;
};

export function ServiceRow({ index, title, description, image }: ServiceRowProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative border-t border-sand py-8 transition-colors duration-500 hover:bg-linen-warm/40 md:py-10">
      <div className="grid items-start gap-6 md:grid-cols-[4rem_1fr_12rem] md:gap-10 lg:grid-cols-[5rem_1fr_14rem]">
        <span className="font-juniper-display text-jh-display-md text-sage/50 transition-all duration-500 group-hover:text-terracotta/70 group-hover:translate-x-1">
          {num}
        </span>
        <div className="transition-transform duration-500 group-hover:translate-x-1">
          <h3 className="font-juniper-display text-jh-heading-lg text-juniper">{title}</h3>
          <p className="mt-2 max-w-xl font-juniper-body text-jh-body-md text-juniper/60">
            {description}
          </p>
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--jh-radius-md)] bg-sand/30">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 220px"
            />
          </div>
        )}
      </div>
      <span
        className="absolute left-0 top-0 h-0 w-px bg-terracotta transition-all duration-500 group-hover:h-full"
        aria-hidden="true"
      />
    </article>
  );
}
