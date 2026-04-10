"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] rounded-xl overflow-hidden transition-colors"
      >
        <div
          className="h-48 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.thumbGradient[0]}, ${project.thumbGradient[1]})`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumb}
            alt={project.name}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="p-5">
          <h3 className="text-[17px] font-semibold text-white mb-3 tracking-[-0.01em]">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-[#0a72ef]/10 text-[#0a72ef]/80 text-[11px] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
