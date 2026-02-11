"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import { problemStats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline counter animation
      const headlineEl = headlineRef.current;
      if (headlineEl) {
        gsap.from(headlineEl, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }

      // Cards stagger
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
      className="relative py-12 md:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>The Problem</SectionLabel>

        <div ref={headlineRef} className="mt-4">
          <span className="font-mono text-[clamp(2.5rem,10vw,9rem)] font-bold text-foreground leading-none tracking-tight">
            {problemStats.headline}
          </span>
          <p className="mt-4 text-xl md:text-2xl text-muted max-w-lg">
            {problemStats.headlineLabel}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {problemStats.cards.map((card) => (
            <GlowCard key={card.label}>
              <div className="font-mono text-3xl md:text-4xl font-bold text-neon">
                {card.value}
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {card.label}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
