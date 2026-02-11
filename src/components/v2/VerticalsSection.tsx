"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import { verticals } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function VerticalsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
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
      id="verticals"
      className="relative py-[15vh] md:py-[20vh]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>Our Verticals</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-3xl">
          From factory floor to your doorstep.
        </h2>

        <p className="mt-4 text-lg text-muted max-w-2xl">
          Three integrated business lines powering India&apos;s electric mobility
          transition.
        </p>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {verticals.map((vertical) => (
            <Link key={vertical.id} href={vertical.href} className="group">
              <GlowCard
                glowColor={vertical.accentColor}
                className="h-full flex flex-col justify-between min-h-[280px] group-hover:border-border-hover transition-all duration-500"
              >
                <div>
                  <span
                    className={`text-xs font-medium tracking-[0.15em] uppercase ${
                      vertical.accentColor === "electric"
                        ? "text-electric"
                        : "text-neon"
                    }`}
                  >
                    {vertical.tagline}
                  </span>

                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-foreground">
                    {vertical.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {vertical.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
