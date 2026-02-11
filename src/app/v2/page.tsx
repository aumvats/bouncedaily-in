import HomeHero from "@/components/v2/HomeHero";
import VerticalsSection from "@/components/v2/VerticalsSection";
import CommuteTypesSection from "@/components/v2/CommuteTypesSection";
import MetricsSection from "@/components/MetricsSection";
import PressSection from "@/components/PressSection";
import VisionCTA from "@/components/VisionCTA";

export default function V2Home() {
  return (
    <>
      <HomeHero />
      <VerticalsSection />
      <CommuteTypesSection />
      <MetricsSection />
      <PressSection />
      <VisionCTA />
    </>
  );
}
