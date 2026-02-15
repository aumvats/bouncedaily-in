import type { Metadata } from "next";
import BrutalistGrid from "@/components/brutalist/ui/BrutalistGrid";
import BrutalistNavbar from "@/components/brutalist/BrutalistNavbar";
import BrutalistHero from "@/components/brutalist/BrutalistHero";
import BrutalistStats from "@/components/brutalist/BrutalistStats";
import BrutalistSpecs from "@/components/brutalist/BrutalistSpecs";
import BrutalistCalculator from "@/components/brutalist/BrutalistCalculator";
import BrutalistQuotes from "@/components/brutalist/BrutalistQuotes";
import BrutalistPlatform from "@/components/brutalist/BrutalistPlatform";
import BrutalistPartners from "@/components/brutalist/BrutalistPartners";
import BrutalistPress from "@/components/brutalist/BrutalistPress";
import BrutalistCTA from "@/components/brutalist/BrutalistCTA";
import BrutalistFooter from "@/components/brutalist/BrutalistFooter";

export const metadata: Metadata = {
  title: "BOUNCE DAILY — RAW ELECTRIC POWER",
  description: "Zero fuel. Maximum grind. 15,000+ delivery riders electrified.",
};

/* Brutalist theme CSS variable overrides */
const brutalistThemeVars = {
  "--color-background": "#1A1A1A",
  "--color-foreground": "#F5F5F5",
  "--color-surface": "#D4D4D4",
  "--color-surface-2": "#525252",
  "--color-surface-3": "#3A3A3A",
  "--color-border": "#000000",
  "--color-border-hover": "#FFD600",
  "--color-muted": "#9CA3AF",
  "--color-dim": "#6B7280",
  "--color-neon": "#FFD600",
  "--color-neon-glow": "#FFD60033",
  "--color-accent": "#FFD600",
  "--color-accent-hover": "#B85C38",
  "--font-display": "var(--font-bebas)",
  "--font-body": "var(--font-ibm-mono)",
  "--font-accent": "var(--font-oswald)",
} as React.CSSProperties;

export default function BrutalistPage() {
  return (
    <div style={brutalistThemeVars} className="relative bg-[#1A1A1A] min-h-screen">
      {/* Visible grid overlay */}
      <BrutalistGrid />

      {/* Concrete texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <BrutalistNavbar />
        <main id="main-content">
          <BrutalistHero />
          <BrutalistStats />
          <BrutalistSpecs />
          <BrutalistCalculator />
          <BrutalistQuotes />
          <BrutalistPlatform />
          <BrutalistPartners />
          <BrutalistPress />
          <BrutalistCTA />
        </main>
        <BrutalistFooter />
      </div>
    </div>
  );
}
