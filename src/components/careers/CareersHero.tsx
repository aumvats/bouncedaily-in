"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "@/components/ui/NeonButton";
import StatCounter from "@/components/ui/StatCounter";
import { careersHeroStats } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

export default function CareersHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

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
        )
        .from(
          tickerRef.current,
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,var(--color-neon-glow)_0%,transparent_70%)] opacity-40" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-texture opacity-[0.015] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-24 pb-12">
        <div className="max-w-4xl">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-neon mb-6">
            Full-Stack EV Rental Leader
          </span>

          <h1
            ref={headlineRef}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] text-foreground"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            We Build, We Deploy, We Scale
          </h1>

          <p
            ref={subRef}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            India&apos;s only full-stack EV rental company. We manufacture our
            own electric scooters, operate India&apos;s largest EV rental fleet,
            and we&apos;re just getting started. Come solve problems that
            don&apos;t have playbooks yet.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <NeonButton href="#challenges" variant="solid">
              See the Challenges
            </NeonButton>
            <NeonButton href="#vision" variant="ghost">
              Our Vision
            </NeonButton>
          </div>
        </div>
      </div>

      {/* Bottom stat ticker */}
      <div
        ref={tickerRef}
        className="relative z-10 mt-auto border-t border-border"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {careersHeroStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={2}
                className="min-w-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
