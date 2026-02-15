"use client";

import BrutalistCounter from "./ui/BrutalistCounter";
import { brutalistStats } from "@/lib/data";

/**
 * Architectural-scale numbers section
 * Stats become structural, viewport-dominating elements
 */
export default function BrutalistStats() {
  return (
    <section id="numbers" className="relative py-24 bg-[#D4D4D4]">
      {/* Grid overlay stronger on light background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="border-8 border-black bg-[#1A1A1A] p-8 md:p-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {brutalistStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-8 border-black ${
                  i < brutalistStats.length - 1
                    ? "border-r-0 md:border-r-4"
                    : ""
                } ${i < 2 ? "lg:border-b-0 border-b-4 md:border-b-4" : ""}`}
              >
                {/* Viewport-sized number */}
                <div className="font-oswald text-[clamp(4rem,12vw,10rem)] font-bold leading-none text-[#FFD600] tabular-nums">
                  <BrutalistCounter
                    value={stat.value}
                    prefix={stat.unit}
                    delay={i * 0.2}
                  />
                </div>

                {/* Label */}
                <p className="mt-6 font-bebas text-xl md:text-2xl tracking-wider text-[#F5F5F5]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
