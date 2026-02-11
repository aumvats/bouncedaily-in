import NavbarLight from "@/components/NavbarLight";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Mission from "@/components/Mission";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Press from "@/components/Press";
import Franchise from "@/components/Franchise";
import ClosingCTA from "@/components/ClosingCTA";
import FooterLight from "@/components/FooterLight";

export const metadata = {
  title: "Bounce Daily — India's Electric Mobility Revolution",
  description:
    "100% electric scooter rentals for gig workers. Zero emissions, maximum earnings. Ride clean, earn more.",
};

/* Override the dark-theme CSS custom properties with the original light values */
const lightThemeVars = {
  "--color-background": "#ffffff",
  "--color-foreground": "#1d1d1f",
  "--color-brand": "#f53b3b",
  "--color-brand-dark": "#d92d2d",
  "--color-muted": "#86868b",
  "--color-subtle": "#f5f5f7",
  "--color-border": "#e8e8ed",
  "--color-void": "#ffffff",
  "--color-surface": "#f9fafb",
  "--color-surface-2": "#f3f4f6",
  "--color-surface-3": "#e5e7eb",
  "--color-neon": "#f53b3b",
  "--color-neon-glow": "#f53b3b33",
  "--color-dim": "#c7c7cc",
} as React.CSSProperties;

export default function LightPage() {
  return (
    <div style={lightThemeVars} className="bg-white min-h-screen">
      <NavbarLight />
      <Hero />
      <TrustedBy />
      <Mission />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <Press />
      <Franchise />
      <ClosingCTA />
      <FooterLight />
    </div>
  );
}
