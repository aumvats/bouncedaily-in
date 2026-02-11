"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import { manufacturingData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function DesignPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="design"
      className="relative py-[15vh] md:py-[20vh]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>Design Philosophy</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-3xl">
          Engineered for the real world.
        </h2>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {manufacturingData.designPrinciples.map((principle, i) => (
            <GlowCard
              key={principle.title}
              glowColor={i % 2 === 0 ? "neon" : "electric"}
            >
              <div className="font-mono text-sm text-dim mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {principle.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
