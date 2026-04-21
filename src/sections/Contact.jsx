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
      await fetch("https://formsubmit.co/ajax/work.webnirmit+site@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Contact from WebNirmit.com",
          _template: "table",
        })
      });
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      alert("Kuch gadbad ho gayi, dobara try karo");
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A0A0B] text-white">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E11D48]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#38BDF8]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          
          {/* Left Info */}
          <div className="lg:col-span-2">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-zinc-400 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Get in touch
            </p>
            
            <h2 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              Let's <span className="bg-gradient-to-r from-[#E11D48] to-[#F43F5E] bg-clip-text text-transparent">Talk</span> Tech
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-zinc-400">
              Tell us about your idea. We’ll reply within 4 hours with a clear plan, timeline, and cost estimate.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">Email us</p>
                <a href="mailto:work.webnirmit+site@gmail.com" className="text-lg text-zinc-200 transition-colors hover:text-[#E11D48]">work.webnirmit@gmail.com</a>
                {/* <p className="mt-1 text-xs text-zinc-500">Previously: work.webnirmit@gmail.com
 — upgraded for professionalism</p> */}
              </div>
              
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">Based in</p>
                <p className="text-zinc-200">Delhi, India — Remote Worldwide</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["NDA available", "4h response", "100% IP yours"].map(b => (
                  <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { label: "First Name", name: "firstName", type: "text" },
                { label: "Last Name", name: "lastName", type: "text" },
              ].map((f) => (
                <div key={f.label} className="group">
                  <label className="text-xs text-zinc-500 transition-colors group-focus-within:text-[#E11D48]">{f.label}</label>
                  <input name={f.name} required type={f.type} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0B]/60 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#E11D48]/50 focus:ring-2 focus:ring-[#E11D48]/20" />
                </div>
              ))}

              <div className="group md:col-span-2">
                <label className="text-xs text-zinc-500 transition-colors group-focus-within:text-[#E11D48]">Work Email</label>
                <input name="email" required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0B]/60 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#E11D48]/50 focus:ring-2 focus:ring-[#E11D48]/20" />
              </div>

              {[
                { label: "Company", name: "company" },
                { label: "Budget", name: "budget", placeholder: "₹2L–5L or $5k–$10k" },
                { label: "Location", name: "location", placeholder: "Delhi / Remote" },
                { label: "How did you hear about us?", name: "source" },
              ].map((f) => (
                <div key={f.label} className="group">
                  <label className="text-xs text-zinc-500 transition-colors group-focus-within:text-[#E11D48]">{f.label}</label>
                  <input name={f.name} placeholder={f.placeholder || ""} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0B]/60 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#E11D48]/50 focus:ring-2 focus:ring-[#E11D48]/20" />
                </div>
              ))}

              <div className="group md:col-span-2">
                <label className="text-xs text-zinc-500 transition-colors group-focus-within:text-[#E11D48]">Project details</label>
                <textarea name="message" required rows="4" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0A0A0B]/60 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#E11D48]/50 focus:ring-2 focus:ring-[#E11D48]/20" placeholder="What are you building? Timeline? Tech preferences?" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-3 text-sm text-zinc-400">
                <input name="newsletter" type="checkbox" className="h-4 w-4 rounded border-white/20 bg-[#0A0A0B]/60 text-[#E11D48] focus:ring-[#E11D48]/50" />
                Get monthly product tips (no spam)
              </label>
            </div>

            <button type="submit" disabled={loading} className="group relative mt-8 w-full overflow-hidden rounded-xl bg-[#E11D48] py-4 font-semibold text-white shadow-[0_0_30px_rgba(225,29,72,0.25)] transition-all hover:bg-[#BE123C] hover:shadow-[0_0_40px_rgba(225,29,72,0.35)] disabled:opacity-60">
              <span className="relative z-10 tracking-wide">{loading ? "SENDING..." : sent ? "SENT ✓" : "SEND MESSAGE →"}</span>
              <div className="absolute inset-0 -skew-x-12 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
            </button>
            
            {sent && (
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center text-sm text-emerald-300">
                Thanks! We’ll reply within 4 hours on business days.
              </div>
            )}

            <p className="mt-4 text-center text-xs text-zinc-500">
              By submitting, you agree to our NDA-first process. We never share your idea.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
