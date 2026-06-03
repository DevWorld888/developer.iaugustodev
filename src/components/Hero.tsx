export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18), transparent)",
        }}
      />

      <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
        Full Stack Developer &nbsp;·&nbsp; Remote &nbsp;·&nbsp; Australia
      </p>

      <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
        Building scalable web{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
          applications
        </span>{" "}
        and business systems
      </h1>

      <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#94a3b8] sm:text-lg">
        I&apos;m Israel Augusto — a Full Stack Developer specialising in Next.js, React,
        TypeScript, Node.js and PostgreSQL. I build SaaS dashboards, automation
        systems and business solutions for remote teams worldwide.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[#2a2a3a] px-7 py-3 text-sm font-semibold text-[#f1f5f9] transition hover:border-indigo-500/60 hover:text-white"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/DevWorld888"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#2a2a3a] px-7 py-3 text-sm font-semibold text-[#94a3b8] transition hover:border-[#3a3a4a] hover:text-white"
        >
          GitHub
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#3a3a5a] text-xs tracking-widest uppercase">
        scroll
      </div>
    </section>
  );
}
