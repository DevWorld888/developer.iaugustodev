export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
          Get in touch
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Let&apos;s Work Together
        </h2>
        <p className="mb-12 text-base leading-relaxed text-[#94a3b8]">
          I&apos;m available for remote full-time, part-time and contract roles. If you&apos;re
          looking for a Full Stack Developer who can build and ship fast — let&apos;s talk.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:augustocsuarez1985@gmail.com"
            className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/augustocs/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#2a2a3a] px-7 py-3 text-sm font-semibold text-[#f1f5f9] transition hover:border-indigo-500/60 hover:text-white"
          >
            LinkedIn
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

        <p className="mt-14 text-sm text-[#3a3a5a]">
          Israel Augusto Cáceres Suárez &nbsp;·&nbsp; Based in Australia &nbsp;·&nbsp;{" "}
          <a href="https://iaugustodev.com" className="hover:text-[#64748b] transition">
            iaugustodev.com
          </a>
        </p>
      </div>
    </section>
  );
}
