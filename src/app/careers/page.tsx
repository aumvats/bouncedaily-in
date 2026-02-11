import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CareersHero from "@/components/careers/CareersHero";
import MissionStatement from "@/components/careers/MissionStatement";
import WhyBounce from "@/components/careers/WhyBounce";
import CultureSection from "@/components/careers/CultureSection";
import AlumniTestimonials from "@/components/careers/AlumniTestimonials";
import RoadmapSection from "@/components/careers/RoadmapSection";
import ChallengesSection from "@/components/careers/ChallengesSection";
import CareersCTA from "@/components/careers/CareersCTA";
import FooterDark from "@/components/FooterDark";
import { careersNavLinks } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers — Bounce Daily",
  description:
    "Join India's only full-stack EV rental company. Solve problems that don't have playbooks yet. We're hiring across Product, Design, Engineering, and more.",
  openGraph: {
    title: "Careers — Bounce Daily",
    description:
      "Join India's only full-stack EV rental company. Solve problems that don't have playbooks yet.",
    url: "https://bouncedaily.in/careers",
    siteName: "Bounce Daily",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar
        links={careersNavLinks}
        ctaLabel="Join Us"
        ctaHref="#challenges"
        ctaExternal={false}
      />
      <CareersHero />
      <MissionStatement />
      <WhyBounce />
      <CultureSection />
      <AlumniTestimonials />
      <RoadmapSection />
      <ChallengesSection />
      <CareersCTA />
      <FooterDark />
    </>
  );
}
