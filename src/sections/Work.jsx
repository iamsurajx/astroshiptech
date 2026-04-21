import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "AI Dashboard for Real-time Insights",
    slug: "ai-dashboard",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    client: "SaaS Analytics",
    result: "3x faster processing",
    metric: "+62% engagement",
    tags: ["React", "Node.js", "ML"],
  },
  {
    id: 2,
    title: "Mobile App UI Redesign",
    slug: "mobile-app-ui",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    client: "Lifestyle App",
    result: "1.2s load time",
    metric: "4.6★ rating",
    tags: ["React Native", "UX"],
  },
  {
    id: 3,
    title: "Web Platform Rebuild",
    slug: "web-development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    client: "Tech Agency",
    result: "1.0s page load",
    metric: "+72% leads",
    tags: ["Next.js", "Headless"],
  },
  {
    id: 4,
    title: "Cloud Migration & Scale",
    slug: "cloud-system",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    client: "FinTech",
    result: "95% less downtime",
    metric: "-42% costs",
    tags: ["AWS", "Microservices"],
  },
  {
    id: 5,
    title: "Data Analytics Platform",
    slug: "data-analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    client: "Enterprise",
    result: "15s reports",
    metric: "₹10L/mo saved",
    tags: ["MongoDB", "Node.js"],
  },
  {
    id: 6,
    title: "Cyber Security Hardening",
    slug: "cyber-security",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    client: "FinTech Platform",
    result: "Zero breaches",
    metric: "ISO 27001",
    tags: ["Security", "Auth"],
  },
];

export default function Work() {
  const navigate = useNavigate();

  return (
    <section id="work" className="relative bg-[#0A0A0B] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
              Selected work
            </div>
            <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
              OUR <span className="text-zinc-500">WORK</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-400">
              Real products, real metrics. Stock photos nahi — har card ke peeche ek case study hai.
            </p>
          </div>
          <div className="text-sm text-zinc-500">
            6 projects • 2023–2025
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/work/${item.slug}`)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`${item.img}?auto=format&fit=crop&w=1000&q=80`}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {/* gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent opacity-80" />
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-[#E11D48]/20 to-transparent" />
                
                {/* top tags */}
                <div className="absolute left-3 top-3 flex gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300 backdrop-blur-md ring-1 ring-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative p-5">
                <div className="mb-1 text-[11px] uppercase tracking-widest text-zinc-500">{item.client}</div>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-white group-hover:text-white">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 rounded-full bg-[#38BDF8]/10 px-2.5 py-1 ring-1 ring-inset ring-[#38BDF8]/20">
                    <span className="text-[11px] font-medium text-[#7DD3FC]">{item.result}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-[#E11D48]/10 px-2.5 py-1 ring-1 ring-inset ring-[#E11D48]/20">
                    <span className="text-[11px] font-medium text-[#FDA4AF]">{item.metric}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-400">View case study</span>
                  <span className="translate-x-0 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Note for you */}
        <div className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200/80">
          <strong className="text-amber-200">Notice :</strong> If you’re impressed by the work but not ready to reach out,{" "}
          <a href="/work" className="underline underline-offset-4 text-amber-400 transition-colors hover:text-amber-200">
            explore the case studies
          </a>{" "}
          to see the full story behind each project.
        </div>
      </div>
    </section>
  );
}
