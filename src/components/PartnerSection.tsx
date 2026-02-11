"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import NeonButton from "@/components/ui/NeonButton";
import { franchiseBenefits } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partner"
      className="relative py-[15vh] md:py-[20vh] bg-surface"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>Partner With Us</SectionLabel>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Fleet Franchise */}
          <div ref={leftRef}>
            <h2 className="font-display text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
              Own the fleet.
              <br />
              <span className="text-muted">We do the rest.</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {franchiseBenefits.map((benefit) => (
                <GlowCard key={benefit.title} className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* For Investors */}
          <div ref={rightRef} className="flex flex-col justify-center">
            <h2 className="font-display text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
              For investors.
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-md">
              We&apos;re building the electric infrastructure layer for India&apos;s gig
              economy. 15,000+ riders, 5 cities, and growing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <NeonButton variant="solid">
                Download Pitch Deck
              </NeonButton>
              <NeonButton variant="ghost">
                Schedule a Call
              </NeonButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  30M+
                </div>
                <div className="text-xs text-muted mt-1">km driven</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  15K+
                </div>
                <div className="text-xs text-muted mt-1">active riders</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  5
                </div>
                <div className="text-xs text-muted mt-1">cities live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
