import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halcyon — Good Company, On the Water",
  description:
    "A private members' club aboard a superyacht on Sarasota Bay. Where interesting people come together for sunsets, long dinners, and unforgettable conversations.",
};

export default function HalcyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="scroll-pt-16 md:scroll-pt-20">{children}</div>;
}
