'use client'
import { useState } from 'react';

const services = [
  {
    title: "End-to-End Product Delivery",
    desc: "Idea se launch tak — discovery, UX, engineering, QA aur DevOps. Hum 0 se 1 product banate hain, fast aur scalable."
  },
  {
    title: "Creative Design Solutions",
    desc: "Brand identity, UI/UX, design systems. Aise designs jo sirf sundar nahi, conversion bhi badhate hain."
  },
  {
    title: "Mobile App Development",
    desc: "iOS, Android aur cross-platform apps with native performance. React Native / Flutter se market-ready apps."
  },
  {
    title: "Web App Development",
    desc: "Next.js, React aur headless architectures. SEO-ready, blazing fast aur secure web platforms."
  },
  {
    title: "Custom AI + ML Solutions",
    desc: "Chatbots, recommendation engines, computer vision, aur automation — tumhare data pe trained, tumhare workflow me fit."
  },
  {
    title: "Data Engineering & Governance",
    desc: "Pipelines, warehouses, analytics dashboards aur compliance. Data ko clean, safe aur decision-ready banate hain."
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <section id="services" className="bg-black text-white px-8 md:px-16 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            We offer a range of services to design, build and scale your products.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">
          {services.map((service, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className="group border-b border-gray-800 py-6 cursor-pointer"
                onMouseEnter={() => setOpen(index)}
                onMouseLeave={() => setOpen(null)}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <div className="flex items-center gap-6">
                  {/* Number */}
                  <span className="text-red-500 text-sm font-medium w-6 transition-all group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-medium transition-colors group-hover:text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Hidden Paragraph - expands on hover */}
                <div
                  className={`pl-12 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-gray-400 text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}