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
      className="relative py-[15vh] md:py-[20vh]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>In The Press</SectionLabel>

        {/* Pull quote */}
        <blockquote
          ref={quoteRef}
          className="mt-8"
          style={{ clipPath: "inset(0 0% 0 0)" }}
        >
          <p className="font-display text-[clamp(1.5rem,3vw,3rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground max-w-3xl">
            &ldquo;{pressPullQuote.quote}&rdquo;
          </p>
          <cite className="mt-6 block text-sm text-muted not-italic">
            — {pressPullQuote.source}
          </cite>
        </blockquote>

        {/* Press logos */}
        <div
          ref={logosRef}
          className="mt-16 flex flex-wrap items-center gap-8 md:gap-12"
        >
          {pressLogos.map((pub) => (
            <a
              key={pub.name}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-foreground transition-colors duration-300 text-sm md:text-base font-medium tracking-wide"
            >
              {pub.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
