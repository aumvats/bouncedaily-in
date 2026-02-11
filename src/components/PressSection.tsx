"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { pressLogos, pressPullQuote } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function PressSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote text reveal via clip-path
      if (quoteRef.current) {
        gsap.from(quoteRef.current, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Logos stagger
      const logos = logosRef.current?.children;
      if (logos) {
        gsap.from(logos, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 85%",
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
      id="press"
      className="relative py-12 md:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>In The Press</SectionLabel>

        {/* Pull quote */}
        <blockquote
          ref={quoteRef}
          className="mt-8 relative"
          style={{ clipPath: "inset(0 0% 0 0)" }}
        >
          {/* Decorative large quote mark */}
          <svg
            className="absolute -top-2 -left-2 h-16 w-16 text-neon/10"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <p className="font-display text-[clamp(1.5rem,3vw,3rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground max-w-3xl pl-6 border-l-2 border-neon/40">
            {pressPullQuote.quote}
          </p>
          <cite className="mt-6 block text-sm text-muted not-italic pl-6">
            — {pressPullQuote.source}
          </cite>
        </blockquote>

        {/* Divider */}
        <div className="mt-12 mb-8 accent-line" />

        {/* Press logos as styled pills */}
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-dim mb-6">
          Featured in
        </p>
        <div
          ref={logosRef}
          className="flex flex-wrap items-center gap-3 md:gap-4"
        >
          {pressLogos.map((pub) => (
            <a
              key={pub.name}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-muted transition-all duration-300 hover:border-neon/30 hover:text-foreground hover:bg-surface-3 hover:shadow-[0_0_20px_var(--color-neon-glow)]"
            >
              {pub.name}
              <svg
                className="ml-2 h-3 w-3 opacity-40"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2.5 9.5l7-7M4 2.5h5.5V8" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
