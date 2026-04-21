'use client'
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Fintech Mobile App",
    category: "Mobile • Sample",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    description: "Sample project demonstrating neobank UX flow and security patterns",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    metric: "Demo: 40% faster onboarding (illustrative)",
    isSample: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web • Sample",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    description: "Sample D2C store with headless commerce architecture",
    tech: ["Next.js", "Stripe", "AWS"],
    metric: "Demo: 3x conversion lift (illustrative)",
    isSample: true,
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "SaaS • Sample",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    description: "Sample HIPAA-style dashboard for patient data visualization",
    tech: ["React", "Python", "Snowflake"],
    metric: "Demo: Real-time analytics (illustrative)",
    isSample: true,
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "AI • Sample",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    description: "Sample RAG-based content tool with brand voice training",
    tech: ["OpenAI", "LangChain", "Vector DB"],
    metric: "Demo: 10x content speed (illustrative)",
    isSample: true,
  },
  {
    id: 5,
    title: "Logistics Tracker",
    category: "Mobile • Sample",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    description: "Sample real-time fleet tracking with route optimization",
    tech: ["Flutter", "Firebase", "Maps API"],
    metric: "Demo: Live tracking UI (illustrative)",
    isSample: true,
  },
  {
    id: 6,
    title: "EdTech Platform",
    category: "Web • Sample",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    description: "Sample learning platform with video and assessments",
    tech: ["Next.js", "WebRTC", "MongoDB"],
    metric: "Demo: Interactive learning (illustrative)",
    isSample: true,
  },
];

export default function Work() {
  const navigate = useNavigate();

  return (
    <section id="work" className="relative bg-[#0A0A0B] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Sample Work
            </div>
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              OUR <span className="text-zinc-600">WORK</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-400">
              Ye sample projects hain — hamara process aur quality dikhane ke liye. 
              Real client work NDA ke under hai, demo call pe dikha sakte hain.
            </p>
          </div>
          <div className="text-sm text-zinc-500">
            6 sample case studies
          </div>
        </div>

        {/* Sample notice */}
        <div className="mb-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 backdrop-blur">
          <p className="text-sm text-amber-200/80">
            <strong className="text-amber-200">Note:</strong> All metrics and results shown are illustrative samples, not real client data. 
            We follow strict confidentiality for actual projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Sample badge */}
                <div className="absolute right-3 top-3 rounded-lg bg-amber-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-black backdrop-blur">
                  SAMPLE
                </div>

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Metric */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-[#E11D48]/90 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    <span className="text-xs font-medium text-white">{project.metric}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#E11D48]">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-500 ring-1 ring-inset ring-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="mb-4 text-zinc-500">Want to see real client work?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
          >
            Request private portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
