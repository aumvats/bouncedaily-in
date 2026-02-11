"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "@/components/ui/NeonButton";
import { careersCTA } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

export default function CareersCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,var(--color-neon-glow)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            {careersCTA.heading}
          </h2>

          <p className="mt-6 text-lg text-muted leading-relaxed">
            {careersCTA.body}
          </p>

          <div className="mt-10">
            <NeonButton
              href={`mailto:${careersCTA.email}`}
              variant="solid"
              className="text-base px-10 py-4"
            >
              Mail us at {careersCTA.email}
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
