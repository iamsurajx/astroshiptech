import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (window.location.pathname!== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const links = [
    { label: "Services", id: "services" },
    { label: "Why Us", id: "whyus" },
    { label: "Our Work", id: "work" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">

        {/* Logo */}
        <h1 onClick={() => handleNavClick("hero")} className="cursor-pointer text-lg md:text-xl font-bold tracking-tight">
          <span className="text-[#F5F5F7]">Web</span>
          <span className="text-[#E11D48]">Nirmit</span>
          <span className="text-[#F5F5F7]">.com</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)}
              className="relative font-medium text-zinc-400 transition-colors hover:text-[#F5F5F7] group">
              {link.label}
              <span className="absolute -bottom-1 left-0 h- w-0 bg-[#38BDF8] transition-all group-hover:w-full" />
            </button>
          ))}
          <button onClick={() => navigate("/career")}
            className="relative font-medium text-zinc-400 transition-colors hover:text-[#F5F5F7] group">
            Career
            <span className="absolute -bottom-1 left-0 h- w-0 bg-[#38BDF8] transition-all group-hover:w-full" />
          </button>
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
          <button onClick={() => handleNavClick("contact")}
            className="rounded-lg bg-[#E11D48] px-5 py-2.5 font-semibold text-white shadow-[0_0_20px_rgba(225,29,72,0.25)] transition-all hover:bg-[#BE123C] hover:shadow-[0_0_30px_rgba(225,29,72,0.35)] active:scale-[0.98]">
            Let's talk
          </button>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl text-zinc-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden border-t border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl transition-all duration-300 ${open? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center gap-6 px-6 py-6 font-medium">
          {links.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-zinc-300 transition-colors hover:text-white">
              {link.label}
            </button>
          ))}
          <button onClick={() => navigate("/career")} className="text-zinc-300 transition-colors hover:text-white">Career</button>
          <button onClick={() => handleNavClick("contact")} className="w-full rounded-lg bg-[#E11D48] px-4 py-3 font-semibold text-white transition hover:bg-[#BE123C]">
            Let's talk
          </button>
          <p className="text-xs text-zinc-500">Delhi, India • Remote Worldwide</p>
        </div>
      </div>
    </nav>
  );
}