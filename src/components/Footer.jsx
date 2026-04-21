import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0B] text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#E11D48] flex items-center justify-center font-bold text-white">W</div>
              <span className="text-lg font-semibold text-white">WebNirmit</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Design, build, and scale digital products. Remote-first team based in Delhi, India.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p>Operated by <span className="text-zinc-300">[Your Full Name]</span></p>
              <p>Delhi, India</p>
              <p><a href="mailto:hello@webnirmit.com" className="hover:text-white transition-colors">hello@webnirmit.com</a></p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="/#whyus" className="hover:text-white transition-colors">Why Us</a></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="mailto:hello@webnirmit.com" className="hover:text-white transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-zinc-600 md:flex-row">
          <p>© {year} WebNirmit. All rights reserved.</p>
          <p className="text-center">
            Made in India • 
            <span className="ml-1">No cookies tracking • NDA-first process</span>
          </p>
        </div>

        <div className="mt-4 text-center text-[11px] text-zinc-700">
          WebNirmit is currently operated as a sole proprietorship. GST registration in process.
        </div>
      </div>
    </footer>
  );
}
