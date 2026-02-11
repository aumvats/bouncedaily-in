"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import { roadmapHighlights, roadmapBuilding } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (highlightsRef.current) {
        const cards = highlightsRef.current.querySelectorAll(".roadmap-card");
        gsap.set(cards, { opacity: 0, y: 40 });

        ScrollTrigger.create({
          trigger: highlightsRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            });
          },
        });
      }

      if (buildingRef.current) {
        const cols = buildingRef.current.querySelectorAll(".building-col");
        gsap.set(cols, { opacity: 0, y: 30 });

        ScrollTrigger.create({
          trigger: buildingRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(cols, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>Where We&apos;re Headed</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-3xl">
          A clear vision backed by aggressive execution.
        </h2>

        {/* Highlight cards */}
        <div
          ref={highlightsRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {roadmapHighlights.map((item) => (
            <GlowCard key={item.title} className="roadmap-card">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </GlowCard>
          ))}
        </div>

        {/* What We're Building */}
        <div className="mt-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            What We&apos;re Building
          </h3>
          <p className="mt-2 text-muted">
            The systems and initiatives that will power the next chapter.
          </p>

          <div
            ref={buildingRef}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {roadmapBuilding.map((category) => (
              <div key={category.title} className="building-col">
                <h4 className="font-display text-lg font-semibold text-foreground border-b border-border pb-3 mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-neon shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mission callout */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            This Is Not a Job. It&apos;s a Mission.
          </h3>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            We&apos;re looking for people who want to build at the intersection
            of hardware, software, and real-world operations — at a scale that
            matters.
          </p>
        </div>
      </div>
    </section>
  );
}
