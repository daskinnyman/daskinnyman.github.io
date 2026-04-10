"use client";

import { projectsByOrder } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-full relative bg-[#0a0a0a] px-6 md:px-12 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <SectionLabel>Selected Work</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-12">
            Projects
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsByOrder.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={0.15 + idx * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
