"use client";

import { useState } from "react";
import Image from "next/image";
import { brutalistNavLinks, brutalistSiteConfig } from "@/lib/data";

/**
 * Industrial fixed header with thick borders and instant state changes
 * No smooth animations - pure function
 */
export default function BrutalistNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] border-b-8 border-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/brutalist" className="flex-shrink-0">
            <span className="font-bebas text-4xl tracking-widest text-[#FFD600]">
              {brutalistSiteConfig.name}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {brutalistNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-2 font-bebas text-xl text-[#F5F5F5] hover:bg-[#FFD600] hover:text-[#1A1A1A] border-l-4 border-black transition-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={brutalistSiteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center border-8 border-black bg-[#FFD600] px-8 py-3 font-bebas text-xl text-[#1A1A1A] hover:bg-[#B85C38] hover:text-[#F5F5F5] transition-none"
          >
            DOWNLOAD
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-2 p-2"
            aria-label="Toggle menu"
          >
            <span className="block h-1 w-8 bg-[#F5F5F5]" />
            <span className="block h-1 w-8 bg-[#F5F5F5]" />
            <span className="block h-1 w-8 bg-[#F5F5F5]" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t-4 border-black">
          <div className="px-6 py-6 flex flex-col gap-0">
            {brutalistNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 font-bebas text-2xl text-[#F5F5F5] hover:text-[#FFD600] border-b-2 border-[#525252] transition-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href={brutalistSiteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center border-8 border-black bg-[#FFD600] px-8 py-4 font-bebas text-xl text-[#1A1A1A]"
            >
              DOWNLOAD
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
