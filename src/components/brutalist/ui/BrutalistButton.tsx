"use client";

interface BrutalistButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * Square brutalist button with instant feedback
 * No rounded corners, no animations, pure function
 */
export default function BrutalistButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: BrutalistButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    border-8 border-black
    px-12 py-6
    font-bebas text-2xl tracking-wider uppercase
    transition-none
    active:scale-95
  `;

  const variantClasses = {
    primary: "bg-[#FFD600] text-[#1A1A1A] hover:bg-[#B85C38] hover:text-[#F5F5F5]",
    secondary: "bg-[#1A1A1A] text-[#F5F5F5] hover:bg-[#FFD600] hover:text-[#1A1A1A]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
