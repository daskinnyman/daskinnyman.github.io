"use client";

import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

export function About() {
  return (
    <section
      id="about"
      className="section-full relative bg-[#0a0a0a] px-6 md:px-12 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
          <ScrollReveal direction="left" className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image
                src="/avatar.jpeg"
                alt="Alex Chen"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="flex-1 text-center md:text-left">
            <ScrollReveal>
              <SectionLabel>About me</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.15] mb-6">
                Full-stack engineer.
                <br />
                AI systems builder.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
                6+ years of cross-domain experience across frontend, backend, and AI. Currently a Senior Software Engineer at Mammoth Cyber (US), where I lead large-scale migrations, design microservices architecture, and build AI browser automation systems. I embrace AI-native development workflows and care deeply about performance, type safety, and maintainability.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
