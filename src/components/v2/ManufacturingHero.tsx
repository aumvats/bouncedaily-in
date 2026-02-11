"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "@/components/ui/NeonButton";
import { manufacturingData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          subRef.current,
          { opacity: 0, y: 30, duration: 0.8 },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,var(--color-neon-glow)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="absolute inset-0 noise-texture opacity-[0.015] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-24 pb-12">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-neon mb-6">
            Manufacturing
          </span>

          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            {manufacturingData.hero.headline}
          </h1>

          <p
            ref={subRef}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            {manufacturingData.hero.subheadline}
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <NeonButton href="#design" variant="solid">
              Our design philosophy
            </NeonButton>
            <NeonButton href="/v2/gig-rentals" variant="ghost">
              See them in action
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
