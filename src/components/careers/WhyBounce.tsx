"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import { differentiators } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, string> = {
  factory: "\uD83C\uDFED",
  zap: "\u26A1",
  chart: "\uD83D\uDCCA",
  riders: "\uD83D\uDEF5",
  battery: "\uD83D\uDD0B",
  globe: "\uD83C\uDF0D",
};

export default function WhyBounce() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll(".diff-card");

      gsap.set(cards, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>Why Bounce Daily</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-3xl">
          The Only Vertically Integrated EV Rental Operator in India
        </h2>

        <p className="mt-4 text-muted text-lg max-w-2xl">
          Backed by Accel, B Capital, Qualcomm and others. We don&apos;t just
          rent scooters — we design, manufacture, deploy, and service them.
        </p>

        <div
          ref={cardsRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((d) => (
            <GlowCard key={d.title} className="diff-card">
              <div className="text-3xl mb-4">{iconMap[d.icon]}</div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {d.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
