"use client";

import { trustedByPlatforms } from "@/lib/data";

export default function TrustedByMarquee() {
  // Duplicate for infinite scroll effect
  const items = [...trustedByPlatforms, ...trustedByPlatforms];

  return (
    <section className="relative py-12 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-6">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
          Our riders deliver for
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 md:gap-16 px-6">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg md:text-xl font-medium text-dim hover:text-foreground transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-12 md:gap-16 px-6" aria-hidden="true">
          {items.map((name, i) => (
            <span
              key={`${name}-dup-${i}`}
              className="text-lg md:text-xl font-medium text-dim hover:text-foreground transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
