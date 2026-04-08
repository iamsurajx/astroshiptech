export default function Hero() {
  return (
    <section id="hero" className="bg-black text-white py-28 px-6 text-center">
      
      {/* Top Icon */}
      <div className="flex justify-center mb-10">
        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
          <div className="grid grid-cols-3 gap-[3px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-red-500 rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
        Stop Worrying About Tech <br />
        <span className="text-red-500">Start Focusing on Growth.</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        Expert full-stack development and reliable cloud pipelines. We build, ship, and scale your digital products flawlessly
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        
        {/* Primary */}
        <button id="hero" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
          Let's Talk Tech
        </button>

        {/* Secondary */}
        <button className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-full text-sm text-gray-300 hover:bg-gray-900 transition">
          See our plans
          <span className="text-red-500">→</span>
        </button>
      </div>

      {/* Trusted */}
      <div className="mt-20">
        <p className="text-gray-500 text-sm mb-6">
          Trusted by design teams at
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-lg font-medium">
          <span className="hover:text-white transition">Uber</span>
          <span className="hover:text-white transition">Headspace</span>
          <span className="hover:text-white transition">Meta</span>
          <span className="hover:text-white transition">Airbnb</span>
          <span className="hover:text-white transition">Revolut</span>
          <span className="hover:text-white transition">Metalab</span>
          <span className="hover:text-white transition">Pinterest</span>
        </div>
      </div>

    </section>
  );
}