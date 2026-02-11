"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function RiderStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate total scroll distance
      const totalWidth = track.scrollWidth - window.innerWidth;

      if (totalWidth > 0) {
        gsap.to(track, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stories"
      className="relative overflow-hidden"
    >
      <div className="min-h-screen flex flex-col justify-center">
        <div className="px-6 lg:px-12 mb-12">
          <SectionLabel>Voices From The Road</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            Real riders. Real impact.
          </h2>
        </div>

        <div ref={trackRef} className="flex gap-6 px-6 lg:px-12 will-change-transform">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] rounded-2xl border border-border bg-surface p-8 md:p-12 flex flex-col justify-between"
              style={{ borderLeft: "3px solid var(--color-neon)" }}
            >
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-semibold leading-[1.3] tracking-[-0.01em] text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <div className="text-base font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-sm text-muted mt-0.5">{t.role}</div>
                </div>
                <div className="font-mono text-lg font-bold text-electric">
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
