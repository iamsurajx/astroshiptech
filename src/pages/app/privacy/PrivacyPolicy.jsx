export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-300">
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-16">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
          <p className="text-zinc-500">Last updated: April 21, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Who we are</h2>
            <p className="leading-relaxed">
              WebNirmit ("we", "us") is operated by [Your Full Name], based in Delhi, India. 
              We build websites, apps, and AI solutions for clients worldwide. 
              Contact: hello@webnirmit.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. What data we collect</h2>
            <p>When you use our contact form or apply for jobs, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Name, email, phone (if provided)</li>
              <li>Company name, project details</li>
              <li>Resume/CV (for job applications)</li>
              <li>Technical data: IP address, browser type (via Vercel Analytics)</li>
            </ul>
            <p className="mt-3">We do NOT use cookies for tracking or advertising.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How we use your data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide quotes</li>
              <li>To evaluate job applications</li>
              <li>To improve our website performance</li>
              <li>To comply with Indian IT Act, 2000</li>
            </ul>
            <p className="mt-3">We use FormSubmit.co to process forms. Your data is emailed to us and not stored on third-party servers beyond email delivery.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data sharing</h2>
            <p>We do NOT sell, rent, or trade your personal data. We share data only when:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Required by Indian law or court order</li>
              <li>With your explicit consent</li>
              <li>With service providers (Vercel for hosting, Zoho for email) under confidentiality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data retention</h2>
            <p>
              Contact inquiries: 2 years. Job applications: 1 year unless hired. 
              You can request deletion anytime by emailing hello@webnirmit.com with subject "Delete My Data".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your rights (India)</h2>
            <p>Under Indian IT Rules, 2011, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Security</h2>
            <p>
              We use HTTPS, NDA-first process for client work, and restrict access to your data. 
              However, no internet transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Children's privacy</h2>
            <p>Our services are not directed to children under 18. We do not knowingly collect data from minors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes</h2>
            <p>We may update this policy. Changes will be posted here with updated date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact</h2>
            <p>
              For privacy questions: hello@webnirmit.com<br/>
              Postal: Delhi, India (full address available on request)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
