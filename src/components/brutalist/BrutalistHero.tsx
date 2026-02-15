"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BrutalistButton from "./ui/BrutalistButton";
import { brutalistSiteConfig } from "@/lib/data";

/**
 * Giant vertical stacked typography hero
 * Viewport-dominating headlines with hard-cut reveals
 */
export default function BrutalistHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hard-cut reveals (no easing, instant appearance)
      const tl = gsap.timeline({ defaults: { ease: "none" } });

      tl.from([line1Ref.current, line2Ref.current, line3Ref.current], {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.15,
        stagger: 0.15,
        delay: 0.3,
      })
        .from(subRef.current, { opacity: 0, duration: 0.15 }, "-=0.05")
        .from(ctaRef.current, { opacity: 0, duration: 0.15 }, "-=0.05");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Stencil background numbers */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/4 -left-20 font-oswald text-[800px] font-bold text-[#FFD600] select-none">
          01
        </div>
      </div>

      {/* Diagonal safety stripes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            #FFD600,
            #FFD600 20px,
            #1A1A1A 20px,
            #1A1A1A 40px
          )`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12">
        <div className="max-w-5xl">
          {/* Giant vertical stacked headlines */}
          <div className="space-y-0">
            <div
              ref={line1Ref}
              className="font-bebas text-[clamp(4rem,15vw,18rem)] font-normal leading-[0.85] tracking-tighter text-[#F5F5F5]"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              ELECTRIC
            </div>
            <div
              ref={line2Ref}
              className="font-bebas text-[clamp(4rem,15vw,18rem)] font-normal leading-[0.85] tracking-tighter text-[#F5F5F5]"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              DELIVERY
            </div>
            <div
              ref={line3Ref}
              className="font-bebas text-[clamp(4rem,15vw,18rem)] font-normal leading-[0.85] tracking-tighter text-[#FFD600]"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              RIDERS
            </div>
          </div>

          <p
            ref={subRef}
            className="mt-12 font-ibm-mono text-base md:text-lg text-[#F5F5F5] uppercase max-w-2xl leading-relaxed"
          >
            {brutalistSiteConfig.description}
          </p>

          <div ref={ctaRef} className="mt-12 flex flex-wrap gap-6">
            <BrutalistButton href="#specs" variant="primary">
              VIEW SPECS
            </BrutalistButton>
            <BrutalistButton
              href={brutalistSiteConfig.playStoreUrl}
              variant="secondary"
            >
              DOWNLOAD
            </BrutalistButton>
          </div>
        </div>
      </div>
    </section>
  );
}
