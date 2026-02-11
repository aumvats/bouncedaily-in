"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { platformStack } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function PlatformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stack cards slide in one at a time
      const cards = stackRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          x: -60,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 75%",
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
      id="platform"
      className="relative py-[15vh] md:py-[20vh]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>The Platform</SectionLabel>

        <div ref={headlineRef}>
          <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-2xl">
            Not a rental company.
            <br />
            <span className="text-neon">An infrastructure layer.</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl">
            Vehicles, batteries, swap stations, fleet software — built from the
            ground up for India&apos;s electric last mile.
          </p>
        </div>

        <div ref={stackRef} className="mt-16 flex flex-col gap-4">
          {platformStack.map((item, i) => (
            <div
              key={item.layer}
              className="group relative flex items-start gap-6 rounded-2xl border border-border bg-surface p-6 md:p-8 transition-all duration-500 hover:border-border-hover hover:bg-surface-2"
              style={{ marginLeft: `${i * 24}px` }}
            >
              {/* Layer badge */}
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-surface-2 border border-border group-hover:border-neon/30 transition-colors">
                <span className="font-mono text-xs font-bold text-neon uppercase tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted">
                    {item.layer}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl md:text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
