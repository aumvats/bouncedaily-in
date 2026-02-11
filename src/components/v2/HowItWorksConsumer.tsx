"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { consumerData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorksConsumer() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = stepsRef.current?.children;
      if (items) {
        gsap.from(items, {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
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
      className="relative py-[15vh] md:py-[20vh]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>How It Works</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-3xl">
          On the road in minutes.
        </h2>

        <div
          ref={stepsRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {consumerData.steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="font-mono text-5xl md:text-6xl font-bold text-surface-3 leading-none">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
