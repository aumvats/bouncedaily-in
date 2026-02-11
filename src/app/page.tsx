import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ScooterReveal from "@/components/ScooterReveal";
import PlatformSection from "@/components/PlatformSection";
import TrustedByMarquee from "@/components/TrustedByMarquee";
import EarningsCalculator from "@/components/EarningsCalculator";
import RiderStories from "@/components/RiderStories";
import MetricsSection from "@/components/MetricsSection";
import PressSection from "@/components/PressSection";
import PartnerSection from "@/components/PartnerSection";
import VisionCTA from "@/components/VisionCTA";
import FooterDark from "@/components/FooterDark";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ScooterReveal />
      <PlatformSection />
      <TrustedByMarquee />
      <EarningsCalculator />
      <RiderStories />
      <MetricsSection />
      <PressSection />
      <PartnerSection />
      <VisionCTA />
      <FooterDark />
    </>
  );
}
