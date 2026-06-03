export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
          Who I am
        </p>
        <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>
        <p className="mb-6 text-base leading-8 text-[#94a3b8]">
          I&apos;m a Full Stack Developer based in Australia with experience building web
          applications, business systems, automation workflows and SEO-driven digital
          products. I enjoy creating scalable, maintainable and high-performance
          solutions that solve real business problems.
        </p>
        <p className="text-base leading-8 text-[#94a3b8]">
          Currently available for remote full-time, part-time, and contract roles. I
          work well with product teams, founders and businesses looking to build or
          scale their digital infrastructure.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#64748b]">
          <span>📍 Australia</span>
          <span>🌐 Open to Remote</span>
          <span>⚡ Next.js · TypeScript · PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
