"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  calculateEarnings,
  platformOptions,
  cityOptions,
  type Platform,
  type City,
} from "@/lib/earnings";

gsap.registerPlugin(ScrollTrigger);

export default function EarningsCalculator() {
  const [platform, setPlatform] = useState<Platform>("swiggy");
  const [city, setCity] = useState<City>("bengaluru");
  const [hours, setHours] = useState(8);

  const sectionRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(0);

  const result = useMemo(
    () => calculateEarnings({ platform, city, hoursPerDay: hours }),
    [platform, city, hours]
  );

  // Animate the earnings number on change
  useEffect(() => {
    if (!displayRef.current) return;
    const obj = { val: prevValue.current };
    gsap.to(obj, {
      val: result.bounceNetMonthly,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        if (displayRef.current) {
          displayRef.current.textContent = `₹${Math.round(obj.val).toLocaleString("en-IN")}`;
        }
      },
    });
    prevValue.current = result.bounceNetMonthly;
  }, [result.bounceNetMonthly]);

  // Section reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll(".calc-reveal") || [], {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const barMax = Math.max(result.bounceNetMonthly, result.petrolNetMonthly, 1);

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative py-12 md:py-20 bg-surface"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="calc-reveal">
          <SectionLabel>Earnings Calculator</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            See what you could earn.
          </h2>
          <p className="mt-4 text-muted max-w-lg">
            Personalized projection based on real rider data across 5 cities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Inputs */}
          <div className="calc-reveal flex flex-col gap-8">
            {/* Platform selector */}
            <div>
              <label className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-3 block">
                Platform
              </label>
              <div className="flex flex-wrap gap-2">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPlatform(opt.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
                      platform === opt.value
                        ? "bg-neon text-white border-neon shadow-[0_0_15px_var(--color-neon-glow)]"
                        : "bg-surface-2 text-muted border-border hover:border-border-hover hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* City selector */}
            <div>
              <label className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-3 block">
                City
              </label>
              <div className="flex flex-wrap gap-2">
                {cityOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setCity(opt.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-void ${
                      city === opt.value
                        ? "bg-neon text-white border-neon shadow-[0_0_15px_var(--color-neon-glow)]"
                        : "bg-surface-2 text-muted border-border hover:border-border-hover hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hours slider */}
            <div>
              <label className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-3 block">
                Hours per day
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={4}
                  max={14}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="flex-1 accent-neon h-1 bg-surface-3 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neon [&::-webkit-slider-thumb]:shadow-[0_0_10px_var(--color-neon-glow)] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-neon [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-[0_0_10px_var(--color-neon-glow)]"
                />
                <span className="font-mono text-lg font-bold text-foreground w-10 text-right">
                  {hours}h
                </span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div ref={resultRef} className="calc-reveal">
            {/* Big number */}
            <div>
              <span
                ref={displayRef}
                className="font-mono text-[clamp(3rem,6vw,5rem)] font-bold text-electric leading-none"
              >
                ₹{result.bounceNetMonthly.toLocaleString("en-IN")}
              </span>
              <p className="mt-2 text-muted">projected monthly earnings with Bounce Daily</p>
            </div>

            {/* Comparison bars */}
            <div className="mt-10 flex flex-col gap-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">Bounce Daily</span>
                  <span className="font-mono text-electric">
                    ₹{result.bounceNetMonthly.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="h-3 rounded-full bg-surface-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-electric transition-all duration-500"
                    style={{
                      width: `${(result.bounceNetMonthly / barMax) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted">Petrol Vehicle</span>
                  <span className="font-mono text-muted">
                    ₹{result.petrolNetMonthly.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="h-3 rounded-full bg-surface-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-dim transition-all duration-500"
                    style={{
                      width: `${(result.petrolNetMonthly / barMax) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Advantage callout */}
            <div className="mt-8 rounded-xl border border-electric/20 bg-electric/5 px-5 py-4">
              <span className="font-mono text-2xl font-bold text-electric">
                +₹{result.monthlyAdvantage.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-muted ml-2">
                more per month with Bounce Daily
              </span>
            </div>

            {/* Supporting stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-lg font-bold text-foreground">₹0</div>
                <div className="text-xs text-muted mt-0.5">fuel cost</div>
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-foreground">₹0</div>
                <div className="text-xs text-muted mt-0.5">maintenance</div>
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-foreground">
                  {result.ordersPerDay}+
                </div>
                <div className="text-xs text-muted mt-0.5">orders/day</div>
              </div>
            </div>

            <p className="mt-8 text-xs text-dim leading-relaxed">
              Projections based on average data from active riders. Actual
              earnings may vary based on location, hours, and platform
              incentives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
