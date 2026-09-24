import { JuniperNavbar } from "@/components/juniper-house/JuniperNavbar";
import { JuniperHero } from "@/components/juniper-house/JuniperHero";
import { JuniperIntro } from "@/components/juniper-house/JuniperIntro";
import { JuniperApproach } from "@/components/juniper-house/JuniperApproach";
import { JuniperServices } from "@/components/juniper-house/JuniperServices";
import { JuniperHouseCalls } from "@/components/juniper-house/JuniperHouseCalls";
import { JuniperVisitExperience } from "@/components/juniper-house/JuniperVisitExperience";
import { JuniperCareTeam } from "@/components/juniper-house/JuniperCareTeam";
import { JuniperTestimonials } from "@/components/juniper-house/JuniperTestimonials";
import { JuniperCarePlans } from "@/components/juniper-house/JuniperCarePlans";
import { JuniperBooking } from "@/components/juniper-house/JuniperBooking";
import { JuniperFooter } from "@/components/juniper-house/JuniperFooter";
import { MobileStickyCTA } from "@/components/juniper-house/ui/MobileStickyCTA";

export default function JuniperHousePage() {
  return (
    <>
      <JuniperNavbar />
      <main className="overflow-x-hidden pb-16 lg:pb-0">
        <JuniperHero />
        <JuniperIntro />
        <JuniperApproach />
        <JuniperServices />
        <JuniperHouseCalls />
        <JuniperVisitExperience />
        <JuniperCareTeam />
        <JuniperTestimonials />
        <JuniperCarePlans />
        <JuniperBooking />
      </main>
      <JuniperFooter />
      <MobileStickyCTA />
    </>
  );
}
