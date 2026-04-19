"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("");

  const fullText = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white flex flex-col">

      {/* NAVBAR */}
      <div className="flex justify-center mt-6">
        <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-full flex gap-6 text-sm border border-white/10">
          <button className="hover:text-blue-400">About</button>
          <button className="hover:text-blue-400">Projects</button>
          <button className="hover:text-blue-400">Certificates</button>
          <button className="hover:text-blue-400">Contact</button>
        </div>
      </div>

      {/* HERO */}
      <section className="flex flex-1 items-center justify-center px-6 md:px-20">

        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">

          {/* TEXT */}
          <div>
            <p className="text-gray-400 mb-2">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-blue-400">MG</span> HERNANDEZ
            </h1>

            <h2 className="text-blue-300 mb-4 h-6">{text}</h2>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Even if my vision isn’t always clear, my goals are. I push myself 
              to learn, improve, and build modern, impactful web applications.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-500 transition">
                View Work
              </button>

              <button className="px-6 py-2 bg-blue-500 rounded hover:opacity-80 transition">
                Contact Me
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-[#112240] p-4 rounded-xl shadow-lg">
              <Image
                src="/profile.png"
                alt="profile"
                width={260}
                height={320}
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}