"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Skip on repeat visits
    if (sessionStorage.getItem("bd-visited")) {
      setShow(false);
      return;
    }

    sessionStorage.setItem("bd-visited", "1");

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 500);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-1 overflow-hidden">
        {"BOUNCE DAILY".split("").map((char, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl font-bold tracking-[0.15em] text-neon"
            style={{
              animation: `typeIn 0.05s ease forwards`,
              animationDelay: `${i * 0.08}s`,
              opacity: 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Expanding line */}
      <div
        className="mt-6 h-px bg-neon"
        style={{
          animation: "expandLine 0.8s ease-out forwards",
          animationDelay: "1s",
          width: 0,
        }}
      />

      <style jsx>{`
        @keyframes typeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes expandLine {
          to {
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
}
