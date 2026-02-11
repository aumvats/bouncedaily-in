"use client";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-neon mb-6">
      {children}
    </span>
  );
}
