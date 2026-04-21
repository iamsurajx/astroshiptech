export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-300">
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-16">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
          <p className="text-zinc-500">Last updated: April 21, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement</h2>
            <p>
              By using webnirmit.com, you agree to these Terms. WebNirmit is operated by [Your Full Name] 
              from Delhi, India. For business inquiries: hello@webnirmit.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
            <p>We provide web development, mobile apps, UI/UX design, and AI solutions. All work is done under a separate Statement of Work (SOW) and NDA.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Quotes and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quotes valid for 15 days</li>
              <li>50% advance to start, 50% on delivery (unless otherwise agreed)</li>
              <li>Payments via UPI, bank transfer, or Razorpay</li>
              <li>Late payment: 1.5% monthly interest after 15 days</li>
              <li>Prices in INR for India, USD for international clients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p>
              Upon full payment, you own the final code/design. We retain right to showcase work in portfolio 
              (unless NDA prohibits). We own our pre-existing tools, frameworks, and methodologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide timely feedback (within 3 business days)</li>
              <li>Provide content, images, API keys</li>
              <li>Ensure you have rights to materials you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Timelines</h2>
            <p>
              Timelines are estimates. Delays caused by client feedback, scope changes, or third-party services 
              will extend timelines. We are not liable for delays beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Warranty and Support</h2>
            <p>
              30-day bug-fix warranty post-launch for issues in original scope. Does not cover new features, 
              third-party changes, or misuse. Extended support available via AMC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <p>
              Our liability is limited to amount paid in last 3 months. We are not liable for indirect damages, 
              lost profits, or data loss. Services provided "as is" under Indian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
            <p>Either party can terminate with 15-day notice. You pay for work completed till date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
            <p>These terms governed by laws of India. Disputes subject to Delhi courts jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact</h2>
            <p>hello@webnirmit.com | Delhi, India</p>
          </section>
        </div>
      </div>
    </div>
  );
}
