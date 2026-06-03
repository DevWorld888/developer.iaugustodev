type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-employed · Remote",
    period: "2023 — Present",
    description:
      "Building web applications, business systems and SEO-driven digital products for clients across Australia and internationally.",
    highlights: [
      "Developed SaaS dashboards with client and quote management",
      "Built and launched local business websites with SEO and booking integrations",
      "Implemented automation workflows to streamline business operations",
      "Delivered production-ready applications using Next.js, TypeScript and PostgreSQL",
    ],
  },
  {
    role: "Web Developer — Mana Fade Studio",
    company: "Client Project · Hobart, TAS",
    period: "2026",
    description:
      "Built a mobile-first website for a local barbershop with service pages, booking CTAs and local SEO to drive foot traffic and online bookings.",
    highlights: [
      "Mobile-first responsive layout",
      "Local SEO and Google Business integration",
      "Service pages and pricing structure",
      "Booking CTA and third-party booking integration",
    ],
  },
  {
    role: "Web Developer — Prisma Coatings",
    company: "Client Project · Sydney, NSW",
    period: "2026",
    description:
      "Designed and built an SEO-focused business website for a painting and coatings company, with a focus on lead generation and local search visibility.",
    highlights: [
      "On-page SEO structure and optimisation",
      "Fully responsive design with Tailwind CSS",
      "Contact form and lead capture integration",
      "Deployed and managed on Vercel",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Whitesoft · Australia",
    period: "Sep 2021 — Jan 2023",
    description:
      "Developed full stack web applications and RESTful APIs, integrating real-time Firebase services and building scalable database solutions.",
    highlights: [
      "Built interactive responsive web apps using React.js, Material-UI and Bootstrap",
      "Implemented client-side logic with JavaScript for smooth interactions and real-time updates",
      "Built RESTful APIs with Node.js to handle HTTP requests and responses efficiently",
      "Integrated Firebase services — Firestore, Authentication and Cloud Functions",
      "Designed and optimised Firestore database schemas for scalability and security",
    ],
  },
  {
    role: "Developer",
    company: "Intevo · Colombia",
    period: "Mar 2020 — Jun 2021",
    description:
      "Developed and maintained dynamic web applications, designed MySQL databases and collaborated with cross-functional teams to deliver quality software.",
    highlights: [
      "Developed dynamic web applications using PHP, HTML, CSS and JavaScript",
      "Designed and implemented MySQL databases for efficient data management",
      "Created and optimised SQL queries for data extraction, manipulation and updates",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
          Background
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Experience
        </h2>
        <p className="mb-12 text-center text-[#64748b]">
          Professional projects and client work
        </p>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="rounded-2xl border border-[#1e1e30] bg-[#0f0f1a] p-6"
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-indigo-400">{exp.company}</p>
                </div>
                <span className="mt-1 shrink-0 text-sm text-[#64748b] sm:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[#94a3b8]">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2.5 text-sm text-[#cbd5e1]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
