"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import ChallengeCard from "./ChallengeCard";
import { challenges, allChallengeTags } from "@/lib/careers-data";

gsap.registerPlugin(ScrollTrigger);

export default function ChallengesSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "All"
      ? challenges
      : challenges.filter((c) => c.tags.includes(activeFilter));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="challenges"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div ref={headerRef}>
          <SectionLabel>Problems Worth Solving</SectionLabel>

          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
            No Playbooks. Real Impact.
          </h2>

          <p className="mt-4 text-muted text-lg max-w-2xl">
            These aren&apos;t job descriptions — they&apos;re the hardest, most
            interesting problems at the intersection of mobility, technology, and
            operations. Pick the one that keeps you up at night.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {allChallengeTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveFilter(tag);
                setOpenCardId(null);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === tag
                  ? "bg-neon text-white shadow-[0_0_20px_var(--color-neon-glow)]"
                  : "border border-border text-muted hover:border-border-hover hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Challenge grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((challenge) => (
                <motion.div
                  key={challenge.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChallengeCard
                    {...challenge}
                    isOpen={openCardId === challenge.id}
                    onToggle={() =>
                      setOpenCardId(
                        openCardId === challenge.id ? null : challenge.id
                      )
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
