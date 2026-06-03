type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Business OS",
    description:
      "SaaS dashboard for managing clients, quotes, CRM workflows and business operations. Built for scalability and ease of use.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    highlights: [
      "Client management system",
      "Quote and invoice management",
      "Business analytics dashboard",
      "Scalable SaaS architecture",
    ],
    link: "https://bussines-os.vercel.app/dashboard",
  },
  {
    title: "Mana Fade Studio",
    description:
      "Local business website and booking-focused platform for a barbershop in Hobart, Tasmania. Mobile-first and SEO optimised.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Booking integration"],
    highlights: [
      "Service and pricing pages",
      "Local SEO optimisation",
      "Booking CTA and integration",
      "Mobile-first responsive design",
    ],
    link: "https://barbershop-5fxac6zvv-israel-augustos-projects.vercel.app/",
  },
  {
    title: "Prisma Coatings",
    description:
      "SEO-focused business website for a painting and coatings company in Sydney. Built to generate leads and rank locally.",
    stack: ["Next.js", "Tailwind CSS", "SEO", "Forms", "Vercel"],
    highlights: [
      "Lead generation structure",
      "Responsive design",
      "On-page SEO implementation",
      "Contact form with validation",
    ],
    link: "https://www.prismacoatings.com.au/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-[#1e1e30] bg-[#0f0f1a] p-6 transition hover:border-indigo-500/40 hover:bg-[#111120]">
      <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-[#94a3b8]">
        {project.description}
      </p>
      <ul className="mb-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2.5 text-sm text-[#cbd5e1]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-[#1a1a2e] px-2.5 py-1 text-xs font-medium text-indigo-300"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a
          href={project.link}
          target={project.link !== "#" ? "_blank" : undefined}
          rel={project.link !== "#" ? "noopener noreferrer" : undefined}
          className="text-sm font-medium text-indigo-400 transition group-hover:text-indigo-300"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
          Work
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Featured Projects
        </h2>
        <p className="mb-12 text-center text-[#64748b]">
          Real-world applications built for clients and businesses
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
