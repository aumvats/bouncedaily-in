"use client";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "concrete" | "charcoal";
}

/**
 * Brutalist card with thick borders, sharp corners, instant hover feedback
 * No rounded corners, no smooth transitions
 */
export default function BrutalistCard({
  children,
  className = "",
  variant = "concrete",
}: BrutalistCardProps) {
  const bgColors = {
    concrete: "bg-[#D4D4D4]",
    charcoal: "bg-[#1A1A1A]",
  };

  const textColors = {
    concrete: "text-[#1A1A1A]",
    charcoal: "text-[#F5F5F5]",
  };

  return (
    <div
      className={`
        ${bgColors[variant]}
        ${textColors[variant]}
        border-8 border-black
        p-8
        hover:bg-[#FFD600] hover:text-[#1A1A1A]
        transition-none
        ${className}
      `}
    >
      {children}
    </div>
  );
}
