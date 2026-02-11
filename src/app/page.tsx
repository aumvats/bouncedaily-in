import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Mission from "@/components/Mission";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Press from "@/components/Press";
import Franchise from "@/components/Franchise";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Mission />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <Press />
      <Franchise />
      <ClosingCTA />
      <Footer />
    </>
  );
}
