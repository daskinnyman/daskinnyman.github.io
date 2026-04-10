"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="section-full relative overflow-hidden bg-black flex items-center justify-center text-center px-6"
    >
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="hero-glow absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(10,114,239,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-3xl"
      >
        <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 mb-6 font-mono">
          Front-end Engineer
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mb-6">
          Alex Chen
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed tracking-[-0.01em]">
          Building polished web experiences with code and design. Currently at XREX.
        </p>
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      <div
        aria-hidden="true"
        className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-white/30"
      >
        Scroll to explore ↓
      </div>
    </section>
  );
}
