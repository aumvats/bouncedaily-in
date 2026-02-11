"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { vehicle } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const ScooterScene = dynamic(() => import("@/components/three/ScooterScene"), {
  ssr: false,
  loading: () => null,
});

export default function ScooterReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  useEffect(() => {
    // Give the 3D scene a moment to hydrate
    const timer = setTimeout(() => setSceneLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.85,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Specs stagger
      const specItems = specsRef.current?.children;
      if (specItems) {
        gsap.from(specItems, {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: specsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-[10vh] md:py-[15vh]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionLabel>The Vehicle</SectionLabel>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Scooter visual */}
          <div ref={imageRef} className="relative aspect-square max-h-[600px] w-full">
            {/* Neon glow backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,var(--color-neon-glow)_0%,transparent_70%)] opacity-40" />
            </div>

            {/* 3D scene (overlays the image when loaded) */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-700 ${
                sceneLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <ScooterScene />
            </div>

            {/* Static image fallback (always visible underneath) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Image
                src="/images/scooter-red.png"
                alt="Bounce Daily Electric Scooter"
                width={500}
                height={420}
                className="drop-shadow-[0_0_60px_rgba(255,45,45,0.25)] w-3/4 h-auto object-contain"
              />
            </div>

            {/* Ground reflection */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-3 rounded-full bg-neon/15 blur-2xl z-10" />
          </div>

          {/* Specs */}
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
              Built for the road.
              <br />
              <span className="text-muted">Not the showroom.</span>
            </h2>
            <p className="mt-4 text-muted max-w-md leading-relaxed">
              {vehicle.description}
            </p>

            <div ref={specsRef} className="mt-10 grid grid-cols-2 gap-4">
              {vehicle.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-border bg-surface p-5 hover:border-border-hover hover:shadow-[0_0_20px_var(--color-neon-subtle)] transition-all duration-300"
                >
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {spec.value}
                  </div>
                  <div className="text-xs text-muted mt-1 tracking-wide uppercase">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
