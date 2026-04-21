export default function WhyUs() {
  const pillars = [
    {
      title: "Ship fast, stay stable",
      desc: "Weekly demos, clear milestones. MVP typically 6–10 weeks me live, production-grade code ke saath.",
      metric: "Weekly demos",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    },
    {
      title: "100% code ownership",
      desc: "NDA-first. Repo, cloud, aur credentials day-1 se tumhare naam. No vendor lock-in.",
      metric: "IP transfer included",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      title: "AI-native workflow",
      desc: "Design se deployment tak AI tools use karte hain for faster code reviews, QA, aur documentation.",
      metric: "AI-assisted",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="10"/><path d="M9 9h6v6H9z"/>
        </svg>
      )
    },
    {
      title: "Post-launch, not ghost",
      desc: "30-day hypercare, monitoring, aur roadmap support. Slack pe direct founders.",
      metric: "30-day support",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4z"/>
        </svg>
      )
    },
  ];

  const tags = [
    "RESULT-DRIVEN",
    "SCALABLE FULL-STACK",
    "CLOUD & SECURITY",
    "PREMIUM UI/UX",
    "ROI-FOCUSED",
    "React • Next.js • Node",
    "AWS • Vercel",
    "TRUSTED BY STARTUPS"
  ];

  return (
    <section id="whyus" className="relative overflow-hidden bg-[#0A0A0B] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#E11D48]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-[#38BDF8]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Why founders pick us
          </div>
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            WHY CHOOSE <span className="text-zinc-500">US</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Buzzwords nahi, process. Ye 4 cheezein har project me same rehti hain — speed, ownership, AI leverage, aur support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-[1px] backdrop-blur-sm transition-all hover:bg-white/[0.04]"
            >
              <div className="relative h-full rounded-2xl bg-[#0A0A0B]/80 p-6">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] transition-all group-hover:scale-105 group-hover:bg-[#E11D48]/15">
                  {p.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#38BDF8]/10 px-2.5 py-1 text-[11px] font-medium text-[#7DD3FC] ring-1 ring-inset ring-[#38BDF8]/20">
                  {p.metric}
                </div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#E11D48]/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600"/>NDA-first</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600"/>Full IP Transfer</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600"/>Delhi • Remote Worldwide</span>
          </div>
          <a href="#work" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
            See our approach →
          </a>
        </div>
      </div>

      <div className="relative border-y border-white/5 bg-white/[0.01] py-3 backdrop-blur">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-8 whitespace-nowrap">
          {[...tags, ...tags].map((tag, i) => (
            <span key={i} className="text-xs uppercase tracking-widest text-zinc-600">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
