"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-neon" : "text-dim"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AvatarInitial({ name }: { name: string }) {
  return (
    <div className="h-11 w-11 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center shrink-0">
      <span className="font-display text-sm font-bold text-neon">
        {name.charAt(0)}
      </span>
    </div>
  );
}

export default function RiderStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Only enable horizontal scroll pinning on md+ screens
    const mql = window.matchMedia("(min-width: 768px)");
    if (!mql.matches) return;

    const ctx = gsap.context(() => {
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
      <div className="md:min-h-screen flex flex-col justify-center py-16 md:py-0">
        {/* Header */}
        <div className="px-6 lg:px-12 mb-12">
          <SectionLabel>Voices From The Road</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
              Real riders. Real impact.
            </h2>
            <div className="flex items-center gap-3 pb-1">
              <span className="font-display text-3xl font-bold text-foreground">4.8</span>
              <div>
                <StarRating rating={5} />
                <p className="text-xs text-muted mt-0.5">from 15,000+ riders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal scroll track — swipeable on mobile, GSAP-pinned on md+ */}
        <div ref={trackRef} className="flex gap-6 px-6 lg:px-12 will-change-transform max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scrollbar-none max-md:-mx-6 max-md:px-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group shrink-0 w-[85vw] md:w-[55vw] lg:w-[42vw] rounded-2xl border border-border bg-surface relative overflow-hidden transition-all duration-500 hover:border-border-hover hover:shadow-[0_0_40px_var(--color-neon-glow)] max-md:snap-center"
            >
              {/* Accent top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-neon/80 via-neon/40 to-transparent" />

              <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                {/* Top: platform badge + stars */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 border border-border px-3 py-1 text-xs font-medium text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                      {t.platform}
                    </span>
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Large decorative quote mark */}
                  <svg
                    className="h-8 w-8 text-neon/20 mb-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>

                  {/* Quote */}
                  <blockquote className="font-display text-xl md:text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-foreground">
                    {t.quote}
                  </blockquote>
                </div>

                {/* Bottom: rider info + metric */}
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AvatarInitial name={t.name} />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted mt-0.5">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-lg font-bold text-electric">
                      {t.metric}
                    </div>
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
