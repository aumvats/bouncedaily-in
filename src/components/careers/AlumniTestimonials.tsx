"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { alumniTestimonials } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function AlumniTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll(".alumni-card");

      gsap.set(cards, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--color-electric-glow)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>From Our Alumni</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-2xl">
          They built their careers here. Now they&apos;re building companies.
        </h2>

        <div
          ref={cardsRef}
          className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {alumniTestimonials.map((t, i) => (
            <div
              key={i}
              className="alumni-card group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-border-hover hover:shadow-[0_0_60px_var(--color-electric-glow)]"
            >
              {/* Top accent bar */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-electric to-transparent" />

              <div className="p-8 md:p-10">
                {/* Large decorative quote mark */}
                <div className="absolute top-6 right-8 font-display text-[8rem] leading-none text-border select-none pointer-events-none">
                  &ldquo;
                </div>

                {/* Quote */}
                <blockquote className="relative z-10 text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="mt-6 mb-6 h-px bg-border" />

                {/* Attribution */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Initials avatar */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-surface-3 border border-border flex items-center justify-center">
                    <span className="font-mono text-sm font-bold text-electric tracking-wider">
                      {getInitials(t.name)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-base font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-sm text-muted mt-0.5">{t.role}</div>
                  </div>

                  {/* Company badge */}
                  <div className="shrink-0 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5">
                    <span className="text-xs font-medium text-electric tracking-wide">
                      {t.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
