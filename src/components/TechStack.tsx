const stack = [
  { label: "Next.js", category: "framework" },
  { label: "React", category: "framework" },
  { label: "TypeScript", category: "language" },
  { label: "Node.js", category: "runtime" },
  { label: "PostgreSQL", category: "database" },
  { label: "Drizzle ORM", category: "database" },
  { label: "Tailwind CSS", category: "styling" },
  { label: "REST APIs", category: "api" },
  { label: "SEO", category: "other" },
  { label: "Automation", category: "other" },
  { label: "Git", category: "tooling" },
  { label: "Vercel", category: "tooling" },
];

export default function TechStack() {
  return (
    <section id="tech" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
          What I build with
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Tech Stack
        </h2>
        <p className="mb-12 text-center text-[#64748b]">
          Tools and technologies I use to build production-ready applications
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span
              key={tech.label}
              className="rounded-full border border-[#1e1e30] bg-[#0f0f1a] px-5 py-2 text-sm font-medium text-[#a5b4fc] transition hover:border-indigo-500/50 hover:bg-[#13131f] hover:text-white"
            >
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
