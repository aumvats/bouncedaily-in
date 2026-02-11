"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ChallengeCardProps {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  tags: string[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChallengeCard({
  id,
  title,
  description,
  subtitle,
  tags,
  isOpen,
  onToggle,
}: ChallengeCardProps) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      className="rounded-2xl border border-border bg-surface p-6 cursor-pointer transition-colors duration-300 hover:border-border-hover hover:shadow-[0_0_40px_var(--color-neon-glow)]"
    >
      <motion.div layout="position">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="font-mono text-xs text-neon tracking-wider">
              CHALLENGE {String(id).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-lg md:text-xl font-semibold text-foreground leading-tight">
              {title}
            </h3>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="7" y1="1" x2="7" y2="13" />
              <line x1="1" y1="7" x2="13" y2="7" />
            </svg>
          </motion.div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-neon/10 border border-neon/20 px-3 py-0.5 text-xs font-medium text-neon"
            >
              {tag}
            </span>
          ))}
          <span className="inline-block rounded-full bg-surface-2 px-3 py-0.5 text-xs text-muted">
            {subtitle}
          </span>
        </div>
      </motion.div>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-sm text-muted leading-relaxed">
                {description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <span>Perfect for:</span>
                {tags.map((tag) => (
                  <span key={tag} className="font-medium text-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:careers@bounceshare.com?subject=Challenge ${String(id).padStart(2, "0")}: ${title}`}
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neon hover:underline"
              >
                I want to solve this
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="1" y1="7" x2="12" y2="7" />
                  <polyline points="8,3 12,7 8,11" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
