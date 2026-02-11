"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { missionStatement } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

export default function MissionStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(quoteRef.current, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(quoteRef.current, {
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
    <section
      ref={sectionRef}
      id="vision"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="accent-line mb-12" />

        <blockquote
          ref={quoteRef}
          className="max-w-4xl mx-auto text-center font-display text-xl md:text-2xl lg:text-3xl font-semibold leading-[1.4] tracking-[-0.01em] text-foreground italic"
        >
          &ldquo;{missionStatement}&rdquo;
        </blockquote>

        <div className="accent-line mt-12" />
      </div>
    </section>
  );
}
