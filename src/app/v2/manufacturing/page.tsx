import type { Metadata } from "next";
import ManufacturingHero from "@/components/v2/ManufacturingHero";
import DesignPhilosophy from "@/components/v2/DesignPhilosophy";
import ManufacturingMetrics from "@/components/v2/ManufacturingMetrics";

export const metadata: Metadata = {
  title: "Manufacturing — Bounce Daily",
  description:
    "Purpose-engineered electric vehicles designed for commercial durability and daily commuting. Built in India, for India.",
};

export default function ManufacturingPage() {
  return (
    <>
      <ManufacturingHero />
      <DesignPhilosophy />
      <ManufacturingMetrics />
    </>
  );
}
