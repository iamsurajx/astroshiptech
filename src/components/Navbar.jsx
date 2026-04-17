import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("hero")}>
          <div className="w-10 h-10 bg-[#ff0033] rounded-2xl flex items-center justify-center text-2xl font-black text-white">W</div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Web<span className="text-[#ff0033]">Nirmit</span>.com
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <button onClick={() => handleNavClick("services")} className="hover:text-[#ff0033] transition-colors">Services</button>
          <button onClick={() => handleNavClick("whyus")} className="hover:text-[#ff0033] transition-colors">Why Us</button>
          <button onClick={() => handleNavClick("work")} className="hover:text-[#ff0033] transition-colors">Our Work</button>
          <button onClick={() => navigate("/career")} className="hover:text-[#ff0033] transition-colors">Career</button>
        </div>

        <button onClick={() => handleNavClick("contact")} className="hidden md:block px-6 py-2.5 bg-[#ff0033] hover:bg-[#e6002e] rounded-full font-medium transition-all shadow-lg shadow-[#ff0033]/25 text-white">
          Let's talk
        </button>

        {/* Mobile */}
        <button className="md:hidden text-2xl text-white" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-white">
          <button onClick={() => handleNavClick("services")}>Services</button>
          <button onClick={() => handleNavClick("whyus")}>Why Us</button>
          <button onClick={() => handleNavClick("work")}>Our Work</button>
          <button onClick={() => navigate("/career")}>Career</button>
          <button onClick={() => handleNavClick("contact")} className="bg-[#ff0033] px-5 py-2 rounded-full mt-2">Let's talk</button>
        </div>
      )}
    </nav>
  );
}


