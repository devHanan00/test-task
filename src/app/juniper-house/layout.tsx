import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, DM_Sans, Figtree } from "next/font/google";

const wandpis = localFont({
  src: "../../fonts/juniper-house/WandpisDEMO-Regular.ttf",
  variable: "--font-wandpis",
  display: "swap",
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree-jh",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Juniper House Veterinary — A Calmer Kind of Vet",
  description:
    "Boutique veterinary care in Sarasota, Florida. Unhurried appointments, your own doctor, and direct text access to your care team.",
};

export default function JuniperHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`juniper-theme overflow-x-hidden ${wandpis.variable} ${cormorant.variable} ${dmSans.variable} ${figtree.variable}`}>
      {children}
    </div>
  );
}
