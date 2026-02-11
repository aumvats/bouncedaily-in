"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function ClosingCTA() {
  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-[#1d1d1f] to-[#2c2c2e] text-white overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] noise-texture" />

      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(245,59,59,0.08)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Your next ride
            <br />
            costs zero petrol.
          </h2>
          <p className="mt-8 text-lg text-white/50 max-w-md mx-auto leading-relaxed">
            Download the app, complete your KYC, and pick up a scooter from your
            nearest hub. It takes less than a day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-foreground px-8 py-3.5 text-base font-medium transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              Download for Android
            </a>
            <a
              href={siteConfig.stationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-base font-medium transition-colors hover:bg-white/10"
            >
              Find a Hub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
