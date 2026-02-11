"use client";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "neon" | "electric";
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "neon",
}: GlowCardProps) {
  const glowMap = {
    neon: "hover:shadow-[0_0_40px_var(--color-neon-glow)]",
    electric: "hover:shadow-[0_0_40px_var(--color-electric-glow)]",
  };

  return (
    <div
      className={`
        rounded-2xl border border-border bg-surface p-6
        transition-all duration-500
        hover:border-border-hover
        ${glowMap[glowColor]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
