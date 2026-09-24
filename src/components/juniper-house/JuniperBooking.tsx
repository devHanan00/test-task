"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  jhPage,
  jhPx120,
  jhSans,
  jhSectionPy80,
  jhShell,
  jhWandpis,
} from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

function TerracottaField({
  id,
  label,
  required,
  type = "text",
  placeholder,
  multiline = false,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder: string;
  multiline?: boolean;
}) {
  const inputClassName =
    "w-full rounded-[2px] border border-[#c9a96e] bg-[#b5654a] px-4 py-3 font-juniper-body text-[16px] font-light text-white outline-none placeholder:text-white/50 focus:border-white/40";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-juniper-body text-[13.6px] font-medium leading-[20.4px] text-[#f5ede0]/80">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={2}
          placeholder={placeholder}
          className={`${inputClassName} min-h-[84px] resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`${inputClassName} h-[50px]`}
        />
      )}
    </div>
  );
}

export function JuniperBooking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className={`bg-[#faf6f0] ${jhSectionPy80}`}>
      <div className={`${jhPage} ${jhPx120}`}>
        <div className={`${jhShell} flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16`}>
          <RevealOnScroll className="w-full max-w-[553px] lg:max-w-[471px]">
            <p className="font-juniper-body text-[12px] font-medium uppercase leading-4 tracking-[2.64px] text-[#23372f]">
              Ready when you are
            </p>
            <h2 className="jh-booking-h2 pt-4 sm:pt-5">
              <span className={jhSans}>A</span>
              <span className={jhWandpis}> calmer </span>
              <span className={jhSans}>kind of</span>
              <span className={jhWandpis}> veterinary care </span>
              <span className={jhSans}>starts with one visit.</span>
            </h2>
            <p className="jh-body-lg max-w-[471px] pt-5 text-[17.6px] leading-[29.92px] text-[#23372f] sm:pt-8 lg:pb-12">
              Share a few details and our care team will reach out personally —
              usually within one business day.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="w-full max-w-[569px] shrink-0">
            <div className="overflow-hidden rounded-[12px] border border-[rgba(201,169,110,0.12)] bg-[#b5654a] backdrop-blur-[8px]">
              {submitted ? (
                <div className="px-6 py-10 text-white sm:px-10 sm:py-12">
                  <p className="font-juniper-body text-[12px] font-medium uppercase tracking-[2.64px] text-white/90">
                    Request received
                  </p>
                  <h3 className="jh-booking-h2 pt-4">
                    Thank you — we&apos;ll be in touch soon.
                  </h3>
                  <p className="pt-4 font-juniper-body text-[15.2px] leading-[22.8px] text-[rgba(245,237,224,0.65)]">
                    A member of our care team will confirm your appointment personally.
                  </p>
                </div>
              ) : (
                <>
                  <div className="border-b border-[rgba(201,169,110,0.12)] px-6 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-8">
                    <p className="font-juniper-body text-[12px] font-medium uppercase leading-4 tracking-[2.64px] text-white">
                      Request an appointment
                    </p>
                    <p className="pt-2 font-juniper-body text-[15.2px] leading-[22.8px] text-[rgba(245,237,224,0.65)]">
                      We&apos;ll ask for more details later. For now, just the essentials.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 sm:gap-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                      <TerracottaField
                        id="owner-name"
                        label="Your name"
                        required
                        placeholder="John"
                      />
                      <TerracottaField
                        id="email"
                        label="Your Email"
                        type="email"
                        required
                        placeholder="John12@gmail.com"
                      />
                    </div>
                    <TerracottaField
                      id="pet-name"
                      label="Pet's name"
                      required
                      placeholder="Winston"
                    />
                    <TerracottaField
                      id="notes"
                      label="How can we help? (Optional)"
                      placeholder="Just a wellness exam, seeking a second opinion, etc."
                      multiline
                    />

                    <div className="border-t border-[#c9a96e] pt-5 sm:pt-6">
                      <button
                        type="submit"
                        className="flex h-[48px] w-full items-center justify-center gap-3 rounded-[2px] border border-white py-3 font-juniper-body text-[14.4px] font-medium tracking-[0.864px] text-white transition-colors hover:bg-white/10"
                      >
                        Request Appointment
                        <Image
                          src="/juniper-house/booking-arrow.svg"
                          alt=""
                          width={14}
                          height={10}
                          aria-hidden
                        />
                      </button>
                      <p className="pt-3 text-center font-juniper-body text-[13.6px] leading-[20.4px] text-[#f5ede0]">
                        We typically respond within one business day.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
