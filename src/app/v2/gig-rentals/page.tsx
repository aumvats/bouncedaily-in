import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Gig Rentals — Bounce Daily",
  description:
    "Electric scooter rentals for delivery riders. 15,000+ riders on Swiggy, Zomato, Blinkit ride electric with Bounce Daily. Zero fuel cost, zero maintenance.",
};

export default function GigRentalsPage() {
  return (
    <>
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
    </>
  );
}
