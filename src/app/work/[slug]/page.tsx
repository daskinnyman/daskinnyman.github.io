import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

// Static export: generate all slugs at build time
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} — Alex Chen`,
    description: project.intro.slice(0, 160),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
          {project.name}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-[#0a72ef]/10 text-[#0a72ef]/80 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        {project.linkUrl && (
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] rounded-lg text-sm font-medium transition-colors"
          >
            作品連結
            <span>↗</span>
          </a>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
          {project.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 tracking-tight">負責</h2>
          <ol className="list-decimal list-outside ml-5 space-y-3 text-white/60 leading-relaxed">
            {project.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 tracking-tight">使用技術</h2>
          <div className="space-y-4">
            {project.techUsed.map((tech) => (
              <div
                key={tech.name}
                className="border-l-2 border-white/[0.08] pl-4"
              >
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-white/50 text-sm leading-relaxed">
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6 tracking-tight">作品截圖</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-auto"
                />
                <figcaption className="px-4 py-3 text-xs text-white/40">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/[0.06] py-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>Back to portfolio</span>
        </Link>
      </footer>
    </main>
  );
}
