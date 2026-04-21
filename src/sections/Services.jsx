'use client'
import { useState } from 'react';

const services = [
  {
    title: "End-to-End Product Delivery",
    desc: "Idea se launch tak — discovery, UX, engineering, QA aur DevOps. Hum 0 se 1 product banate hain, fast aur scalable.",
    meta: "MVP in 6–10 weeks",
    tags: ["Discovery", "Next.js", "AWS"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 3v18M3 12h18" />
      </svg>
    )
  },
  {
    title: "Creative Design Solutions",
    desc: "Brand identity, UI/UX, design systems. Aise designs jo sirf sundar nahi, conversion bhi badhate hain.",
    meta: "Design in 2–3 weeks",
    tags: ["Figma", "Design System", "UX Research"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
      </svg>
    )
  },
  {
    title: "Mobile App Development",
    desc: "iOS, Android aur cross-platform apps with native performance. React Native / Flutter se market-ready apps.",
    meta: "Ship in 8 weeks",
    tags: ["React Native", "Flutter", "Store Launch"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>
      </svg>
    )
  },
  {
    title: "Web App Development",
    desc: "Next.js, React aur headless architectures. SEO-ready, blazing fast aur secure web platforms.",
    meta: "Launch in 4–6 weeks",
    tags: ["Next.js", "React", "Headless CMS"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 12h18M12 3v18"/>
      </svg>
    )
  },
  {
    title: "Custom AI + ML Solutions",
    desc: "Chatbots, RAG, recommendation engines, computer vision, aur automation — tumhare data pe trained, tumhare workflow me fit.",
    meta: "PoC in 3 weeks",
    tags: ["LangChain", "OpenAI", "Vector DB"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2a10 10 0 0 0-9.9 11 10 10 0 0 0 19.8 0A10 10 0 0 0 12 2Z"/><path d="M9 9h6v6H9z"/>
      </svg>
    )
  },
  {
    title: "Data Engineering & Governance",
    desc: "Pipelines, warehouses, analytics dashboards aur compliance. Data ko clean, safe aur decision-ready banate hain.",
    meta: "Pipeline in 4 weeks",
    tags: ["Airflow", "Snowflake", "dbt"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 3v18h18"/><path d="M7 16V9M12 16V5M17 16v-3"/>
      </svg>
    )
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative bg-[#0A0A0B] text-white">
      {/* subtle top fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1.4fr] lg:gap-24">
          
          {/* LEFT */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              What we do best
            </div>
            <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-[68px] leading-[0.95]">
              OUR
              <br />
              <span className="text-zinc-500">SERVICES</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
              Design, build, and scale — ek team, pura product lifecycle. Har service ke saath clear timeline aur tech stack.
            </p>
            
            <div className="mt-10 hidden items-center gap-6 lg:flex">
              <div>
                <div className="text-3xl font-semibold text-white">10+</div>
                <div className="text-sm text-zinc-500">Products shipped</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-semibold text-white">4 – 8</div>
                <div className="text-sm text-zinc-500">Weeks to MVP</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[28px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent md:block" />
            
            <div className="flex flex-col">
              {services.map((service, index) => {
                const isOpen = open === index;
                return (
                  <button
                    key={index}
                    onMouseEnter={() => setOpen(index)}
                    onFocus={() => setOpen(index)}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="group relative text-left border-b border-white/10 py-7 transition-colors hover:bg-white/[0.02]"
                  >
                    {/* accent dot */}
                    <div className={`absolute left-[22px] top-9 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#0A0A0B] transition-all ${isOpen ? 'bg-[#E11D48] scale-110 shadow-[0_0_12px_rgba(225,29,72,0.6)]' : 'bg-zinc-700 group-hover:bg-zinc-500'}`} />
                    
                    <div className="flex items-start gap-6 pl-12 md:pl-16">
                      <div className={`mt-1 hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${isOpen ? 'border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48]' : 'border-white/10 bg-white/5 text-zinc-400 group-hover:text-zinc-200'}`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-sm text-[#E11D48]">{String(index + 1).padStart(2, '0')}</span>
                          <h3 className="text-xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white md:text-2xl">
                            {service.title}
                          </h3>
                        </div>
                        
                        <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-70 md:opacity-100 md:grid-rows-[1fr] md:mt-3'}`}>
                          <div className="overflow-hidden">
                            <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                              {service.desc}
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-[#38BDF8]/10 px-2.5 py-1 text-xs font-medium text-[#7DD3FC] ring-1 ring-inset ring-[#38BDF8]/20">
                                {service.meta}
                              </span>
                              {service.tags.map(tag => (
                                <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-400 ring-1 ring-inset ring-white/10">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* bottom CTA */}
            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
              <p className="text-sm text-zinc-500">Need something custom?</p>
              <a href="#contact" className="text-sm font-medium text-[#E11D48] hover:text-[#F43F5E] transition-colors">
                Tell us your idea →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
