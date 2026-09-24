import { HalcyonNavbar } from "@/components/halcyon/HalcyonNavbar";
import { HalcyonHero } from "@/components/halcyon/HalcyonHero";
import { halcyonHero, halcyonHeroPx, halcyonPage } from "@/components/halcyon/ui/halcyonLayout";
import { HalcyonEvenings } from "@/components/halcyon/HalcyonEvenings";
import { HalcyonWaveDivider } from "@/components/halcyon/HalcyonWaveDivider";
import { HalcyonIntro } from "@/components/halcyon/HalcyonIntro";
import { HalcyonExperiences } from "@/components/halcyon/HalcyonExperiences";
import { HalcyonGatherings } from "@/components/halcyon/HalcyonGatherings";
import { HalcyonTestimonials } from "@/components/halcyon/HalcyonTestimonials";
import { HalcyonMembership } from "@/components/halcyon/HalcyonMembership";
import { HalcyonIntroductionForm } from "@/components/halcyon/HalcyonIntroductionForm";
import { HalcyonFooter } from "@/components/halcyon/HalcyonFooter";

export default function HalcyonPage() {
  return (
    <>
      <div className={`${halcyonPage} ${halcyonHeroPx}`}>
        <div className="flex flex-col gap-5">
          <HalcyonNavbar />
          <div className={halcyonHero}>
            <HalcyonHero />
          </div>
        </div>
      </div>

      <main>
        <HalcyonEvenings />
        <HalcyonWaveDivider />
        <HalcyonIntro />
        <HalcyonExperiences />
        <HalcyonGatherings />
        <HalcyonTestimonials />
        <HalcyonMembership />
        <HalcyonIntroductionForm />
      </main>

      <HalcyonFooter />
    </>
  );
}
