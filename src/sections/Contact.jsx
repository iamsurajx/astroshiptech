'use client'
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await fetch("https://formsubmit.co/ajax/samnew01@protonmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Contact from Website!",
          _template: "table",
        })
      });
      setSent(true);
      e.target.reset();
    } catch (err) {
      alert("Kuch gadbad ho gayi, dobara try karo");
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="relative bg-black text-white px-6 md:px-16 py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-[#ff0033]/10 rounded-full blur-" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">

        {/* Left Info */}
        <div className="lg:col-span-2">
          <p className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs tracking-widest text-white/70 mb-6">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6">
            Let's <span className="text-[#ff0033]">Talk</span> Tech
          </h2>
          <p className="text-white/60 text-lg max-w-md">
            Tell us about your idea. We’ll reply within 24 hours with a clear plan, timeline, and cost.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <p className="text-white/40 mb-1">Email us</p>
              <a href="mailto:samnew01@protonmail.com" className="text-white hover:text-[#ff0033] transition">samnew01@protonmail.com</a>
            </div>
            <div>
              <p className="text-white/40 mb-1">Based in</p>
              <p className="text-white">Delhi, India — Remote Worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
            ].map((f) => (
              <div key={f.label} className="group">
                <label className="text-xs text-white/50 group-focus-within:text-[#ff0033] transition">{f.label}</label>
                <input name={f.name} required type={f.type} className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#ff0033]/50 focus:ring-2 focus:ring-[#ff0033]/20 transition" />
              </div>
            ))}

            <div className="md:col-span-2 group">
              <label className="text-xs text-white/50 group-focus-within:text-[#ff0033] transition">Email</label>
              <input name="email" required type="email" className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#ff0033]/50 focus:ring-2 focus:ring-[#ff0033]/20 transition" />
            </div>

            {[
              { label: "Company", name: "company", type: "text" },
              { label: "Budget (Optional)", name: "budget", type: "text", placeholder: "$5k - $10k" },
              { label: "Location (Optional)", name: "location", type: "text" },
              { label: "How did you hear about us?", name: "source", type: "text" },
            ].map((f) => (
              <div key={f.label} className="group">
                <label className="text-xs text-white/50 group-focus-within:text-[#ff0033] transition">{f.label}</label>
                <input name={f.name} type={f.type} placeholder={f.placeholder || ""} className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#ff0033]/50 focus:ring-2 focus:ring-[#ff0033]/20 transition" />
              </div>
            ))}

            <div className="md:col-span-2 group">
              <label className="text-xs text-white/50 group-focus-within:text-[#ff0033] transition">How can we help?</label>
              <textarea name="message" required rows="4" className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white resize-none outline-none focus:border-[#ff0033]/50 focus:ring-2 focus:ring-[#ff0033]/20 transition" placeholder="Tell us about your project..." />
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <label className="flex items-center gap-3 text-sm text-white/60 cursor-pointer">
              <input name="newsletter" type="checkbox" className="w-4 h-4 rounded bg-black/40 border-white/20 text-[#ff0033] focus:ring-[#ff0033]/50" />
              Subscribe to newsletter
            </label>
            <p className="text-xs text-white/30 hidden md:block">We respect your privacy</p>
          </div>

          <button type="submit" disabled={loading} className="mt-8 w-full relative overflow-hidden bg-[#ff0033] hover:bg-[#e6002e] text-white font-semibold py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(255,0,51,0.3)] hover:shadow-[0_0_40px_rgba(255,0,51,0.5)] group disabled:opacity-60">
            <span className="relative z-10 tracking-wide">{loading ? "SENDING..." : sent ? "SENT ✓" : "SEND MESSAGE →"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
          {sent && <p className="text-green-400 text-sm mt-3 text-center">Thanks! we'll reply within 24 hours.</p>}
        </form>
      </div>
    </section>
  );
}
