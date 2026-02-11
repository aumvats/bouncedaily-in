import type { Metadata } from "next";
import ConsumerHero from "@/components/v2/ConsumerHero";
import PricingSection from "@/components/v2/PricingSection";
import HowItWorksConsumer from "@/components/v2/HowItWorksConsumer";

export const metadata: Metadata = {
  title: "Consumer Rentals — Bounce Daily",
  description:
    "Affordable EV subscriptions for everyday commuters. No EMIs, no parking headaches. Daily, weekly, and monthly plans starting at ₹149/day.",
};

export default function ConsumerRentalsPage() {
  return (
    <>
      <ConsumerHero />
      <PricingSection />
      <HowItWorksConsumer />
    </>
  );
}
