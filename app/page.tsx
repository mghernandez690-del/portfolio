"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#0f172a,#020617_55%,#000)] text-white px-6 py-6 md:px-16">
      {/* NAVBAR */}
      <nav className="flex justify-center">
        <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 flex gap-6 text-sm md:text-base">
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
          <a href="#certs" className="hover:text-yellow-300 transition">Certificates</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        className="grid md:grid-cols-2 gap-12 items-center pt-20 md:pt-28 max-w-7xl mx-auto"
      >
        {/* LEFT */}
        <div>
          <p className="text-gray-300 text-xl">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
            MG HERNANDEZ
          </h1>

          <h2 className="text-yellow-400 text-2xl md:text-4xl font-semibold mt-4">
            Frontend Developer
          </h2>

          <p className="text-gray-300 mt-6 max-w-xl text-lg leading-8">
            Even if my vision isn’t always clear, my goals are. I push myself to
            learn, improve, and build modern, impactful web applications while
            continuously growing my skills.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/30 to-yellow-400/30 blur-2xl"></div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-[320px] md:w-[380px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto pt-28">
        <h3 className="text-4xl font-bold mb-8">Projects</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Portfolio Website",
            "Gowns & Golds System",
            "UI Landing Page",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 hover:border-yellow-300/50 transition"
            >
              <h4 className="text-xl font-semibold">{item}</h4>
              <p className="text-gray-300 mt-3 text-sm">
                Clean and modern responsive project built with Next.js and Tailwind CSS.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certs" className="max-w-7xl mx-auto pt-28">
        <h3 className="text-4xl font-bold mb-8">Certificates</h3>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          Add your certificates here.
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto pt-28 pb-20">
        <h3 className="text-4xl font-bold mb-8">Contact</h3>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 max-w-xl">
          <p className="text-lg">your@email.com</p>
        </div>
      </section>
    </main>
  );
}