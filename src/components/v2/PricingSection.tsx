"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import NeonButton from "@/components/ui/NeonButton";
import { consumerData, v2SiteConfig } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.7,
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
      id="pricing"
      className="relative py-[15vh] md:py-[20vh]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>Pricing</SectionLabel>

        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-w-3xl">
          Simple plans. No surprises.
        </h2>

        <p className="mt-4 text-lg text-muted max-w-2xl">
          Pick a plan that fits your commute. All plans include unlimited
          kilometres and battery swaps.
        </p>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {consumerData.plans.map((plan) => (
            <GlowCard
              key={plan.name}
              glowColor={plan.popular ? "electric" : "neon"}
              className={`flex flex-col ${
                plan.popular ? "border-electric/30 relative" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-electric text-void text-xs font-medium px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-foreground">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl md:text-5xl font-bold text-foreground">
                  ₹{plan.price}
                </span>
                <span className="text-sm text-muted">{plan.period}</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-shrink-0 text-neon"
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <NeonButton
                  href={v2SiteConfig.playStoreUrl}
                  variant={plan.popular ? "solid" : "ghost"}
                  className="w-full"
                >
                  Get started
                </NeonButton>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
