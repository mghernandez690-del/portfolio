"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const roles = ["Frontend Developer"];
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const word = roles[0];

    const typing = setInterval(() => {
      setText(word.slice(0, i));
      i++;
      if (i > word.length) clearInterval(typing);
    }, 90);

    return () => clearInterval(typing);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#07152d] to-[#0b1120] text-white overflow-hidden">
      {/* NAV */}
      <nav className="w-full flex justify-center pt-6">
        <div className="px-3 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex gap-2 md:gap-3">
          {["About", "Projects", "Certificates", "Contact"].map((item, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto min-h-[90vh] px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-white/60 text-lg">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-300 bg-clip-text text-transparent">
              MG HERNANDEZ
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 min-h-[40px]">
            {text}
          </h2>

          <p className="text-white/65 text-lg leading-relaxed max-w-xl">
            Even if my vision isn’t always clear, my goals are. I push myself to
            learn, improve, and build modern, impactful web applications while
            continuously growing my skills.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              View Work
            </button>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:scale-105 transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-yellow-400/30 blur-2xl rounded-3xl"></div>

            <div className="relative p-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group-hover:-translate-y-2 group-hover:rotate-1 transition duration-500">
              <Image
                src="/profile.png"
                alt="Profile"
                width={360}
                height={460}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}