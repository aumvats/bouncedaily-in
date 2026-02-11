"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "@/components/ui/NeonButton";
import { siteConfig, heroStats } from "@/lib/data";
import StatCounter from "@/components/ui/StatCounter";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const scooterRef = useRef<HTMLDivElement>(null);

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
          scooterRef.current,
          { opacity: 0, x: 80, scale: 0.9, duration: 1.2, ease: "power3.out" },
          "-=0.8"
        )
        .from(
          tickerRef.current,
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.4"
        );

      // Parallax float on scroll
      if (scooterRef.current) {
        gsap.to(scooterRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="main-content"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text */}
          <div>
            <h1
              ref={headlineRef}
              className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] text-foreground"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              {siteConfig.tagline}
            </h1>

            <p
              ref={subRef}
              className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed"
            >
              15,000+ riders. 5 cities. 30M+ kilometres driven. Zero emissions.
              The full-stack electric mobility platform powering India&apos;s
              delivery economy.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <NeonButton href="#platform" variant="solid">
                Explore the platform
              </NeonButton>
              <NeonButton href="#calculator" variant="ghost">
                See your earnings
              </NeonButton>
            </div>
          </div>

          {/* Right — Scooter Image */}
          <div
            ref={scooterRef}
            className="relative hidden md:flex items-center justify-center"
          >
            {/* Neon glow behind scooter */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,var(--color-neon-glow)_0%,transparent_70%)] opacity-50" />
            </div>

            {/* Scooter */}
            <Image
              src="/images/scooter-red.png"
              alt="Bounce Daily Electric Scooter"
              width={600}
              height={500}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 drop-shadow-[0_0_40px_rgba(255,45,45,0.3)] w-full max-w-[500px] h-auto"
              priority
            />

            {/* Ground reflection */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full bg-neon/15 blur-2xl" />
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
            {heroStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
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
