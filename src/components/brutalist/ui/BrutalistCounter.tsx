"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BrutalistCounterProps {
  value: string | number;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

/**
 * Mechanical odometer-style counter animation
 * Hard, industrial number counting
 */
export default function BrutalistCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
  delay = 0,
}: BrutalistCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const numValue = typeof value === "string" ? parseInt(value) : value;

  useEffect(() => {
    if (!counterRef.current || isNaN(numValue)) return;

    const ctx = gsap.context(() => {
      gsap.from(counterRef.current, {
        textContent: 0,
        duration: 1.5,
        delay,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [numValue, delay]);

  if (isNaN(numValue)) {
    return (
      <span className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span className={className}>
      {prefix}
      <span ref={counterRef}>{numValue}</span>
      {suffix}
    </span>
  );
}
