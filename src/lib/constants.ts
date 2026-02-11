/* ── Animation Presets ── */

export const EASE = {
  enter: "power3.out",
  exit: "power2.in",
  counter: "power2.out",
  elastic: "elastic.out(1, 0.5)",
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  counter: 1.6,
} as const;

export const STAGGER = {
  tight: 0.06,
  normal: 0.12,
  wide: 0.2,
} as const;

/* ── ScrollTrigger defaults ── */

export const SCROLL_TRIGGER = {
  /** Standard section reveal — plays once when 80% visible */
  reveal: {
    start: "top 80%",
    toggleActions: "play none none none" as const,
  },
  /** Pinned scrub section — scrubs through while pinned */
  pinned: (scrollLength = "+=300%") => ({
    start: "top top",
    end: scrollLength,
    pin: true,
    scrub: 1,
  }),
} as const;
