"use client";

import { trustedByPlatforms } from "@/lib/data";

export default function TrustedByMarquee() {
  // Duplicate for infinite scroll effect (visual only)
  const items = [...trustedByPlatforms, ...trustedByPlatforms];

  return (
    <section className="relative py-10 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-6">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
          Our riders deliver for
        </span>
      </div>

      {/* Screen-reader-only list of platforms (no duplicates) */}
      <ul className="sr-only">
        {trustedByPlatforms.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <div className="relative flex overflow-hidden" aria-hidden="true">
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
        <div className="flex shrink-0 animate-marquee gap-12 md:gap-16 px-6">
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
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
