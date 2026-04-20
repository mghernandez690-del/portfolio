"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#07152d] to-[#0b1120] text-white">

      {/* NAV */}
      <nav className="flex justify-center pt-6">
        <div className="flex gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm">
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Projects</a>
          <a href="#" className="hover:text-yellow-400">Certificates</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-gray-400 mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
              MG HERNANDEZ
            </span>
          </h1>

          <h2 className="text-yellow-400 text-xl mb-4">
            Frontend Developer
          </h2>

          <p className="text-gray-400 mb-6">
            Even if my vision isn’t always clear, my goals are. I push myself to learn,
            improve, and build impactful web applications.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
              View Work
            </button>

            <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg font-semibold hover:scale-105 transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-yellow-400/20 blur-2xl rounded-2xl"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-2xl shadow-xl">
            <Image
              src="/profile.png"
              alt="profile"
              width={320}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

      </section>
    </main>
  );
}