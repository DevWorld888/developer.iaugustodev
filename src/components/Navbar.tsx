export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e30] bg-[#08080f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-wide text-white hover:text-indigo-400 transition"
        >
          iaugustodev.com
        </a>
        <nav className="hidden gap-8 text-sm text-[#94a3b8] sm:flex">
          <a href="#tech" className="transition hover:text-white">Stack</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
