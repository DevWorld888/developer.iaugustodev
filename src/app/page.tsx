import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08080f] text-[#f1f5f9] font-sans">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e30] to-transparent" />
      </div>
      <TechStack />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e30] to-transparent" />
      </div>
      <Projects />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e30] to-transparent" />
      </div>
      <Experience />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e30] to-transparent" />
      </div>
      <About />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e30] to-transparent" />
      </div>
      <Contact />
      <footer className="border-t border-[#1e1e30] py-6 text-center text-xs text-[#3a3a5a]">
        © {new Date().getFullYear()} Israel Augusto Cáceres Suárez · Full Stack Developer · Australia
      </footer>
    </div>
  );
}
