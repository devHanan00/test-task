import { type ReactNode } from "react";
import { credentials, practicalInfo } from "@/data/juniper-house/content";
import { jhContent, jhPage, jhPx48 } from "./ui/juniperLayout";
import { RevealOnScroll } from "./ui/RevealOnScroll";

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-[288px] lg:max-w-[256px]">
      <h3 className="juniper-label !text-[#23372f]">{label}</h3>
      <div className="jh-body-md pt-4 text-[#23372f]">{children}</div>
    </div>
  );
}

export function JuniperPracticalInfo() {
  return (
    <section className="bg-[#f3ede3] py-[112.67px]">
      <div className={`${jhPage} ${jhPx48}`}>
        <RevealOnScroll className={jhContent}>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <InfoBlock label="Visit">
              <p>{practicalInfo.address}</p>
              <p className="pt-2">{practicalInfo.area}</p>
              <p className="pt-2">{practicalInfo.city}</p>
            </InfoBlock>

            <InfoBlock label="Hours">
              <p>
                {practicalInfo.hours.weekday.days} · {practicalInfo.hours.weekday.time}
              </p>
              <p className="pt-2">
                {practicalInfo.hours.saturday.days} · {practicalInfo.hours.saturday.time}
              </p>
              <p className="pt-2">
                {practicalInfo.hours.houseCalls.days} · {practicalInfo.hours.houseCalls.time}
              </p>
            </InfoBlock>

            <InfoBlock label="Contact">
              <a href={`tel:${practicalInfo.phone.replace(/\D/g, "")}`} className="juniper-link-underline block">
                {practicalInfo.phone}
              </a>
              <a href={`mailto:${practicalInfo.email}`} className="juniper-link-underline mt-2 block">
                {practicalInfo.email}
              </a>
            </InfoBlock>

            <InfoBlock label="After hours">
              <p>
                Juniper House is not a 24-hour ER. After hours, call our line to be
                connected to our partner emergency hospital.
              </p>
              <a
                href={`tel:${practicalInfo.phone.replace(/\D/g, "")}`}
                className="juniper-link-underline mt-4 inline-block"
              >
                {practicalInfo.phone}
              </a>
            </InfoBlock>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 border-t border-[#e8dfd0] pt-14">
            {credentials.map((c) => (
              <span key={c} className="jh-body-md text-[#23372f]">
                {c}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
