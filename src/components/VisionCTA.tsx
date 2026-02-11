"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "@/components/ui/NeonButton";
import { siteConfig } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function VisionCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const pitchRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(pitchRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Pulsing glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--color-neon) 0%, transparent 70%)",
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 noise-texture opacity-[0.015] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <h2
          ref={textRef}
          className="font-display text-[clamp(2rem,5vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-4xl mx-auto"
        >
          Every delivery in India will go electric. We&apos;re making it{" "}
          <span className="text-neon neon-glow-text">inevitable.</span>
        </h2>

        <p
          ref={pitchRef}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Bounce is building India&apos;s EV mobility infrastructure — from
          factory floor to last mile — for the 7 million gig workers who power
          the country&apos;s commerce. We manufacture the vehicles, manage the
          fleet, and create an ownership pathway for workers who&apos;ve never
          had access to formal credit.
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-wrap justify-center gap-4">
          <NeonButton href={siteConfig.playStoreUrl} variant="solid">
            Download App
          </NeonButton>
          <NeonButton href="#partner" variant="ghost">
            Partner with us
          </NeonButton>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  );
}
