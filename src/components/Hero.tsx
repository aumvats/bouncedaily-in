"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig, stats } from "@/lib/data";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Vivid radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(245,59,59,0.15)_0%,transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Centered copy */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm font-medium tracking-widest uppercase text-brand mb-6"
          >
            India&apos;s #1 Electric Fleet
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tighter leading-[0.95]"
          >
            Move electric.
            <br />
            <span className="text-white/40">Earn every kilometre.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-lg mx-auto"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Get Started
            </a>
            <a
              href={siteConfig.stationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Find a Hub
            </a>
          </motion.div>
        </div>

        {/* Product image — cinematic entrance */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-3xl lg:max-w-5xl">
            {/* Glow behind scooter */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,59,59,0.20)_0%,transparent_70%)] scale-150" />
            <Image
              src="/images/scooter-red.png"
              alt="Bounce Daily electric scooter"
              width={1200}
              height={960}
              className="relative w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(245,59,59,0.3)]"
              priority
            />
          </div>
        </motion.div>

        {/* Stats bar with animated counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 divide-x divide-white/10 border-y border-white/10">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center py-10 px-4 ${i >= 3 ? "hidden sm:block" : ""}`}>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight tabular-nums">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    delay={1.1 + i * 0.3}
                  />
                </p>
                <p className="mt-3 text-sm text-white/40 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gradient fade to white for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
