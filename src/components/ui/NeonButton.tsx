"use client";

import { motion } from "framer-motion";

type Variant = "solid" | "ghost";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function NeonButton({
  children,
  variant = "solid",
  href,
  external,
  onClick,
  className = "",
}: NeonButtonProps) {
  const isExternal = external ?? (href ? /^https?:\/\//.test(href) || href.startsWith("mailto:") : false);
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-void";

  const variants: Record<Variant, string> = {
    solid:
      "bg-neon text-white hover:shadow-[0_0_30px_var(--color-neon-glow)] active:scale-[0.97]",
    ghost:
      "border border-border-hover text-foreground hover:border-foreground/30 hover:bg-surface-2 active:scale-[0.97]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
