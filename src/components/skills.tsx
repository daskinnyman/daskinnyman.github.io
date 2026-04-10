"use client";

import { skillCategories, type SkillCategory } from "@/data/skills";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

const accentColorMap: Record<SkillCategory["accentColor"], string> = {
  blue: "text-[#0a72ef]",
  pink: "text-[#de1d8d]",
  red: "text-[#ff5b4f]",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-full relative bg-[#080808] px-6 md:px-12 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <SectionLabel>Tech Stack</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-12">
            Tools I work with
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name} delay={0.15 + catIdx * 0.1}>
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${accentColorMap[category.accentColor]}`}
                >
                  {category.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-[13px] text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
