import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <footer className="bg-[#0a0a0a] border-t border-white/[0.06] py-10 text-center">
        <div className="text-[11px] text-white/15 tracking-wider">
          © 2026 Alex Chen
        </div>
      </footer>
    </main>
  );
}
