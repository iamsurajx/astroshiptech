import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (window.location.pathname !== "/") {
      // Agar Career page par ho, pehle Home par navigate karo
      navigate("/");

      // Thoda delay taaki Home load ho jaye, phir scroll karo
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      // Agar already Home par ho, direct scroll karo
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="bg-black text-white px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo → Hero section */}
      <h1
        onClick={() => handleNavClick("hero")}
        className="text-lg md:text-xl font-bold cursor-pointer"
      >
        <span className="text-white">Astro</span>
        <span className="text-red-500">ship</span>
        <span className="text-white">Tech</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-gray-400 font-semibold">
        <button onClick={() => handleNavClick("services")}>Services</button>
        <button onClick={() => handleNavClick("whyus")}>Why Us</button>
        <button onClick={() => handleNavClick("work")}>Our Work</button>
        <button onClick={() => navigate("/career")}>Career</button>
      </div>

      {/* CTA */}
      <button
        onClick={() => handleNavClick("contact")}
        className="hidden md:block bg-red-600 px-4 py-2 rounded-md font-semibold"
      >
        Let's talk
      </button>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden font-semibold">
          <button onClick={() => handleNavClick("work")}>Our Work</button>
          <button onClick={() => handleNavClick("services")}>Services</button>
          <button onClick={() => handleNavClick("whyus")}>Why Us</button>
          <button onClick={() => navigate("/career")}>Career</button>
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-red-600 px-4 py-2 rounded-md"
          >
            Let's talk
          </button>
        </div>
      )}
    </nav>
  );
}
