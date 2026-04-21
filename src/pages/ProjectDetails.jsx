import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projects = {
    "ai-dashboard": {
      title: "AI Dashboard Case Study",
      intro: "How we built a scalable AI-powered dashboard for real-time insights.",
      preview: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      client: "SaaS Analytics Startup",
      timeline: "8 weeks",
      stack: ["React", "Node.js", "Python", "AWS"],
      challenge: "Client needed a dashboard to process large datasets in real-time without lag, with role-based access for 3 user types.",
      approach: [
        "React.js for fast, interactive charts with virtualization",
        "Node.js APIs for real-time data streaming via WebSockets",
        "Integration with ML models for predictions",
        "Redis caching for sub-100ms queries",
      ],
      features: [
        "Dynamic chart rendering",
        "Role-based access control",
        "Real-time notifications",
        "Export to PDF/CSV",
      ],
      results: [
        { label: "Data processing", value: "3x faster" },
        { label: "User engagement", value: "+62%" },
        { label: "Operational cost", value: "-40%" },
      ],
      testimonial: "Suraj’s team delivered an AI dashboard that transformed our decision-making. Real-time insights gave us a competitive edge.",
      author: "CTO, Analytics SaaS",
      conclusion: "This project proved how React + Node.js can power AI-driven analytics at scale.",
    },
    "web-development": {
      title: "Modern Web Platform Rebuild",
      intro: "Legacy site ko fast, scalable Next.js platform me rebuild kiya.",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      client: "Tech Agency",
      timeline: "6 weeks",
      stack: ["Next.js", "Headless CMS", "Vercel"],
      challenge: "They had a legacy website that was slow, non-responsive, and difficult to update.",
      approach: [
        "React.js for fast, reusable UI components",
        "Node.js + Express APIs for dynamic content",
        "CMS integration for easy updates",
        "SEO optimization for visibility",
      ],
      features: ["Responsive React UI", "Dynamic CMS", "Secure APIs", "SEO structure", "Scalable architecture"],
      results: [
        { label: "Page load", value: "3.8s → 1.0s" },
        { label: "Mobile bounce", value: "-55%" },
        { label: "Leads", value: "+72%" },
        { label: "Revenue", value: "₹12L → ₹29L" },
      ],
      testimonial: "Suraj’s team gave us a modern, scalable website that our marketing team can manage without developers.",
      author: "Founder",
      conclusion: "Modern web development isn’t just about design — it’s about business growth.",
    },
    "mobile-app-ui": {
      title: "Mobile App UI Redesign",
      intro: "Lifestyle app ka retention 68% badhaya with new UX.",
      preview: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      client: "Lifestyle App",
      timeline: "7 weeks",
      stack: ["React Native", "Node.js", "Figma"],
      challenge: "Outdated interface and poor user retention.",
      approach: ["React Native for modern UI", "Node.js APIs for faster sync", "Simplified onboarding", "Reusable design system"],
      features: ["Clean UI", "One-click onboarding", "Personalized dashboards", "Push notifications", "Dark mode"],
      results: [
        { label: "Load time", value: "3.5s → 1.2s" },
        { label: "Retention", value: "+68%" },
        { label: "Rating", value: "3.2 → 4.6★" },
        { label: "MAU", value: "25k → 62k" },
      ],
      testimonial: "The new UI feels premium, and our users are finally sticking around.",
      author: "Product Head",
      conclusion: "UI/UX design directly impacts business growth.",
    },
    "data-analytics": {
      title: "Scalable Data Analytics Platform",
      intro: "Manual reporting ko 15-second automated dashboards me badla.",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      client: "Enterprise",
      timeline: "9 weeks",
      stack: ["React", "Node.js", "MongoDB", "Airflow"],
      challenge: "Manual reporting and slow data processing.",
      approach: ["React dashboards", "Node.js aggregation", "MongoDB pipelines", "Role-based access"],
      features: ["Real-time dashboards", "Automated reporting", "Secure access", "API integrations", "Export"],
      results: [
        { label: "Report time", value: "2h → 15s" },
        { label: "Decision speed", value: "+80%" },
        { label: "Accuracy", value: "+95%" },
        { label: "Savings", value: "₹10L/mo" },
      ],
      testimonial: "Reports that used to take hours are now ready in seconds.",
      author: "Head of Ops",
      conclusion: "Data analytics is the backbone of smart decisions.",
    },
    "cyber-security": {
      title: "Cyber Security for FinTech",
      intro: "Breaches zero kiye, ISO 27001 achieve kiya.",
      preview: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      client: "FinTech Platform",
      timeline: "5 weeks",
      stack: ["React", "Node.js", "AWS WAF"],
      challenge: "Frequent breaches and compliance issues.",
      approach: ["Secure login flows", "Node middleware", "AES-256 encryption", "Real-time monitoring"],
      features: ["2FA", "E2E encryption", "RBAC", "Intrusion detection", "Audit logs"],
      results: [
        { label: "Breaches", value: "100% ↓" },
        { label: "Login success", value: "+45%" },
        { label: "Compliance", value: "ISO 27001" },
        { label: "Retention", value: "+62%" },
      ],
      testimonial: "We went from constant breaches to full compliance.",
      author: "CISO",
      conclusion: "Security is the foundation of digital trust.",
    },
    "cloud-system": {
      title: "Cloud Migration & Scale",
      intro: "On-premise se AWS pe 95% downtime kam kiya.",
      preview: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      client: "FinTech",
      timeline: "6 weeks",
      stack: ["AWS", "Node.js", "Docker"],
      challenge: "Expensive on-prem servers with downtime.",
      approach: ["Microservices", "React monitoring", "Auto-scaling", "Disaster recovery"],
      features: ["Auto-scaling", "Monitoring", "Backups", "RBAC", "Cost opt"],
      results: [
        { label: "Downtime", value: "-95%" },
        { label: "Scale", value: "3x traffic" },
        { label: "Costs", value: "-42%" },
        { label: "Compliance", value: "Achieved" },
      ],
      testimonial: "Systems are faster, reliable, and costs dropped.",
      author: "VP Engineering",
      conclusion: "Cloud = resilience + growth.",
    },
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0B] text-white">
        <p className="text-zinc-500">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0B] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-16">
          <button onClick={() => navigate(-1)} className="text-sm text-zinc-400 hover:text-white transition">
            ← Back to work
          </button>
          <div className="text-xs text-zinc-500">{project.client} • {project.timeline}</div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="max-w-3xl text-lg text-zinc-400 md:text-xl">{project.intro}</p>
          
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map(s => (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{s}</span>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="relative mb-20 overflow-hidden rounded-2xl border border-white/10">
          <img src={project.preview} alt="" className="h-[420px] w-full object-cover md:h-[520px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
        </div>

        {/* Results Grid */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {project.results.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="text-2xl font-semibold text-white md:text-3xl">{r.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div>
            <section className="mb-12">
              <h2 className="mb-3 text-xl font-semibold text-white">The Challenge</h2>
              <p className="leading-relaxed text-zinc-300">{project.challenge}</p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-white">Our Approach</h2>
              <ul className="space-y-3">
                {project.approach.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E11D48]" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">Key Features</h2>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f, i) => (
                  <span key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">{f}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-[#E11D48]/20 bg-[#E11D48]/5 p-6 backdrop-blur">
              <div className="mb-3 text-[11px] uppercase tracking-widest text-[#FDA4AF]">Client testimonial</div>
              <blockquote className="text-lg leading-relaxed text-zinc-200">“{project.testimonial}”</blockquote>
              <div className="mt-4 text-sm text-zinc-400">— {project.author}</div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="mb-2 font-medium text-white">Conclusion</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{project.conclusion}</p>
              <button onClick={() => navigate('/#contact')} className="mt-5 w-full rounded-lg bg-[#E11D48] py-2.5 text-sm font-semibold text-white transition hover:bg-[#BE123C]">
                Start similar project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
