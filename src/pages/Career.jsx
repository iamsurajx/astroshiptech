'use client'
import { useState } from "react";

const jobData = {
  "job_postings": [
    {
      "title": "Backend Developer (Node.js)",
      "location": "Remote",
      "type": "Full-time",
      "summary": "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic.",
      "requirements": [
        "Proven experience with Node.js and Express or NestJS.",
        "Strong understanding of asynchronous programming.",
        "Experience with MongoDB, PostgreSQL, or MySQL.",
        "Knowledge of JWT, OAuth.",
        "Proficiency in RESTful and GraphQL APIs."
      ]
    },
    {
      "title": "UI/UX Designer",
      "location": "Remote",
      "type": "Full-time",
      "summary": "Join our creative team as a UI/UX Designer! You will be responsible for delivering the best online user experience.",
      "requirements": [
        "Strong portfolio demonstrating UI and UX principles.",
        "Proficiency in Figma, Adobe XD, or Sketch.",
        "Ability to create wireframes and prototypes.",
        "Deep understanding of responsive design.",
        "Strong aesthetic sense."
      ]
    },
    {
      "title": "Fullstack Developer (MERN)",
      "location": "Remote",
      "type": "Full-time",
      "summary": "We are seeking a Fullstack Developer to handle the entire web development life cycle.",
      "requirements": [
        "Proficiency in MongoDB, Express, React, Node.js.",
        "Experience in front-end and back-end systems.",
        "Familiarity with Redux/Context API.",
        "Understanding of AWS/Heroku/Vercel.",
        "Problem-solving mindset."
      ]
    },
    {
      "title": "HR Manager / Recruiter",
      "location": "Remote",
      "type": "Full-time",
      "summary": "Help us build a strong employer brand and attract the best talent.",
      "requirements": [
        "Experience in technical recruitment.",
        "Understanding of HR functions.",
        "Excellent communication skills.",
        "Ability to manage remote teams.",
        "Familiarity with ATS."
      ]
    }
  ]
};

export default function Career() {
  const [openIndex, setOpenIndex] = useState(null);
  const [applied, setApplied] = useState({});
  const toggleOpen = (index) => setOpenIndex(openIndex === index? null : index);

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-16 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Join Our <span className="text-[#ff0033]">Team</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">We’re always looking for talented people. Apply directly, upload your resume, we'll reply within 24 hours.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {jobData.job_postings.map((job, index) => (
          <div key={index} className="border border-gray-800 p-6 rounded-xl hover:bg-gray-900/50 transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{job.location} • {job.type}</p>
              </div>
              <button onClick={() => toggleOpen(index)} className="bg-[#ff0033] px-5 py-2.5 rounded-lg hover:bg-[#e6002e] transition font-medium">
                {openIndex === index? "Close" : "Apply Now"}
              </button>
            </div>

            {openIndex === index && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-gray-300">{job.summary}</p>
                <h4 className="text-lg font-semibold mt-6 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                </ul>

                {/* APPLICATION FORM */}
                <form
                  action="https://formsubmit.co/samnew01@protonmail.com"
                  method="POST"
                  encType="multipart/form-data"
                  target="_blank"
                  onSubmit={() => setApplied({...applied, [index]: true})}
                  className="mt-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
                >
                  {/* FormSubmit settings */}
                  <input type="hidden" name="_subject" value={`${job.title} - New Application`} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="Position" value={job.title} />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/50">Full Name *</label>
                      <input name="name" required type="text" className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff0033]/50" />
                    </div>
                    <div>
                      <label className="text-xs text-white/50">Email *</label>
                      <input name="email" required type="email" className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff0033]/50" />
                    </div>
                    <div>
                      <label className="text-xs text-white/50">Phone</label>
                      <input name="phone" type="tel" className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff0033]/50" />
                    </div>
                    <div>
                      <label className="text-xs text-white/50">LinkedIn / Portfolio</label>
                      <input name="portfolio" type="url" placeholder="https://" className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff0033]/50" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/50">Cover Letter</label>
                    <textarea name="cover_letter" rows="3" placeholder="Why are you a good fit?" className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#ff0033]/50 resize-none" />
                  </div>

                  <div>
                    <label className="text-xs text-white/50">Upload Resume (PDF, DOC) *</label>
                    <input name="attachment" required type="file" accept=".pdf,.doc,.docx" className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#ff0033] file:text-white hover:file:bg-[#e6002e] cursor-pointer" />
                  </div>

                  <button type="submit" className="w-full bg-[#ff0033] hover:bg-[#e6002e] text-white font-semibold py-3.5 rounded-xl transition shadow-[0_0_20px_rgba(255,0,51,0.2)]">
                    Submit Application
                  </button>

                  {applied[index] && (
                    <p className="text-green-400 text-sm text-center">✓ Application sent! Resume tere mail par aa jayega.</p>
                  )}
                  <p className="text- text-white/30 text-center">By applying, you agree to our privacy policy. We never share your data.</p>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
