'use client'
import { useState } from "react";

const jobData = {
  "job_postings": [
    {
      "title": "Backend Developer (Node.js)",
      "location": "Remote • India",
      "type": "Full-time",
      "summary": "Server-side logic, APIs, aur scale ka ownership lo. Hum clean architecture aur real-time systems banate hain.",
      "requirements": [
        "2+ years Node.js + Express/NestJS",
        "PostgreSQL/MongoDB, Redis",
        "REST & GraphQL, JWT/OAuth",
        "AWS basics, Docker",
        "Async programming expert"
      ]
    },
    {
      "title": "UI/UX Designer",
      "location": "Remote • India",
      "type": "Full-time",
      "summary": "Product thinking + pixel perfection. Figma se leke user testing tak tum lead karoge.",
      "requirements": [
        "Strong portfolio (SaaS/mobile)",
        "Figma, Auto-layout, Variants",
        "Wireframes → prototypes",
        "Design systems experience",
        "Basic HTML/CSS understanding"
      ]
    },
    {
      "title": "Fullstack Developer (MERN)",
      "location": "Remote • India",
      "type": "Full-time",
      "summary": "0→1 product delivery. Frontend polish aur backend reliability dono tumhare haath me.",
      "requirements": [
        "MongoDB, Express, React, Node.js",
        "Next.js, TypeScript preferred",
        "State management (Redux/Zustand)",
        "Vercel/AWS deployment",
        "Product mindset"
      ]
    },
    {
      "title": "HR Manager / Recruiter",
      "location": "Remote • India",
      "type": "Part-time",
      "summary": "Tech talent pipeline banao. Culture aur hiring process ko scale karo.",
      "requirements": [
        "Technical recruitment 2+ yrs",
        "Remote hiring experience",
        "LinkedIn sourcing expert",
        "ATS + Notion",
        "Excellent English/Hindi"
      ]
    }
  ]
};

export default function Career() {
  const [openIndex, setOpenIndex] = useState(null);
  const [applied, setApplied] = useState({});
  const toggleOpen = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative min-h-screen bg-[#0A0A0B] text-white">
      {/* bg glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#E11D48]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400 backdrop-blur">
            We're hiring
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Join Our <span className="bg-gradient-to-r from-[#E11D48] to-[#F43F5E] bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Small team, big ownership. Remote-first, async culture, aur har project me real impact.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Remote-first", "Flexible hours", "Learn AI tools", "Direct client exposure"].map(b => (
              <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">{b}</span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {jobData.job_postings.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.04]">
                <button onClick={() => toggleOpen(index)} className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-7">
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{job.title}</h3>
                    <div className="mt-2 flex items-center gap-3 text-sm">
                      <span className="text-zinc-400">{job.location}</span>
                      <span className="h-1 w-1 rounded-full bg-zinc-600" />
                      <span className="rounded-full bg-[#38BDF8]/10 px-2 py-0.5 text-xs font-medium text-[#7DD3FC] ring-1 ring-inset ring-[#38BDF8]/20">{job.type}</span>
                    </div>
                  </div>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all ${isOpen ? 'rotate-45 border-[#E11D48]/50 bg-[#E11D48]/10 text-[#E11D48]' : 'border-white/10 bg-white/5 text-zinc-400 group-hover:border-white/20 group-hover:text-white'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                </button>

                <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 pb-8 pt-6 md:px-7">
                      <p className="mb-6 max-w-3xl text-zinc-300">{job.summary}</p>
                      
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500">What you'll need</h4>
                      <ul className="mb-8 grid gap-2 sm:grid-cols-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E11D48]" />
                            {req}
                          </li>
                        ))}
                      </ul>

                      {/* APPLICATION FORM */}
                      <form
                        action="https://formsubmit.co/career.webnirmit@gmail.com"
                        method="POST"
                        encType="multipart/form-data"
                        target="_blank"
                        onSubmit={() => setApplied({...applied, [index]: true})}
                        className="rounded-2xl border border-white/10 bg-[#0A0A0B]/60 p-6 backdrop-blur-xl md:p-8"
                      >
                        <input type="hidden" name="_subject" value={`${job.title} - New Application`} />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="Position" value={job.title} />
                        <input type="hidden" name="_next" value="https://webnirmit.com/career?applied=true" />

                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            {label: "Full Name *", name: "name", type: "text"},
                            {label: "Email *", name: "email", type: "email"},
                            {label: "Phone", name: "phone", type: "tel"},
                            {label: "LinkedIn / Portfolio", name: "portfolio", type: "url", placeholder: "https://"},
                          ].map(f => (
                            <div key={f.name}>
                              <label className="text-xs text-zinc-500">{f.label}</label>
                              <input name={f.name} required={f.label.includes('*')} type={f.type} placeholder={f.placeholder||''} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-zinc-600 outline-none transition focus:border-[#E11D48]/50 focus:ring-2 focus:ring-[#E11D48]/20" />
                            </div>
                          ))}
                        </div>

                        <div className="mt-4">
                          <label className="text-xs text-zinc-500">Why you? (2-3 lines)</label>
                          <textarea name="cover_letter" rows="3" placeholder="Your superpower..." className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-zinc-600 outline-none transition focus:border-[#E11D48]/50 focus:ring-2 focus:ring-[#E11D48]/20" />
                        </div>

                        <div className="mt-4">
                          <label className="text-xs text-zinc-500">Resume (PDF) *</label>
                          <input name="attachment" required type="file" accept=".pdf,.doc,.docx" className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-zinc-300 file:mr-4 file:rounded-lg file:border-0 file:bg-[#E11D48] file:px-4 file:py-2 file:text-white file:transition hover:file:bg-[#BE123C]" />
                        </div>

                        <button type="submit" className="mt-6 w-full rounded-xl bg-[#E11D48] py-3.5 font-semibold text-white shadow-[0_0_20px_rgba(225,29,72,0.2)] transition hover:bg-[#BE123C] hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                          Submit Application
                        </button>

                        {applied[index] && (
                          <p className="mt-3 text-center text-sm text-emerald-400">✓ Application sent! We'll reply within 24 hours.</p>
                        )}
                        <p className="mt-3 text-center text-xs text-zinc-500">We respect your privacy. Data sirf hiring ke liye use hoga.</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Don't see your role?</h3>
          <p className="mx-auto mt-2 max-w-xl text-zinc-400">We're always open for exceptional people. Send your portfolio to <a href="mailto:careers@webnirmit.com" className="text-[#E11D48] hover:underline">career.webnirmit@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}
