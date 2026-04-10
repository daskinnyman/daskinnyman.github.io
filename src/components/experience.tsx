"use client";

import { experience } from "@/data/experience";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-full relative bg-[#080808] px-6 md:px-12 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <SectionLabel>Career</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-12">
            Experience
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {experience.map((entry, idx) => (
            <ScrollReveal
              key={`${entry.company}-${entry.period}`}
              delay={0.15 + idx * 0.1}
              direction={idx % 2 === 0 ? "left" : "right"}
            >
              <div className="flex gap-5 items-start">
                <div
                  className="w-[3px] rounded-full shrink-0 self-stretch"
                  style={{
                    background: entry.current
                      ? "linear-gradient(180deg, #0a72ef, rgba(10,114,239,0.1))"
                      : "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))",
                  }}
                />
                <div>
                  <div className="text-xs text-white/30 mb-1 font-mono uppercase tracking-wider">
                    {entry.period}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {entry.role}
                  </div>
                  <div className="text-sm text-white/40">
                    <span className="text-white/60">{entry.company}</span>
                    {" — "}
                    {entry.description}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
