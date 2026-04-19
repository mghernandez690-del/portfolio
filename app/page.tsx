"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const roles = ["UI Developer", "Frontend Developer", "React Developer"];

  useEffect(() => {
    let index = 0;

    const loop = setInterval(() => {
      let current = roles[index];
      let i = 0;

      const typing = setInterval(() => {
        setText(current.slice(0, i));
        i++;
        if (i > current.length) clearInterval(typing);
      }, 50);

      index = (index + 1) % roles.length;
    }, 2500);

    return () => clearInterval(loop);
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-[#020617]">

      {/* 🔥 BACKGROUND (NAVY + WARM LIGHT) */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-900 blur-[140px] opacity-40 top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-yellow-600 blur-[120px] opacity-20 bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAVBAR */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 px-6 py-2 rounded-full flex gap-6 text-sm">
          <button className="hover:text-yellow-400 transition">About</button>
          <button className="hover:text-yellow-400 transition">Projects</button>
          <button className="hover:text-yellow-400 transition">Certificates</button>
          <button className="hover:text-yellow-400 transition">Contact</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="flex flex-col md:flex-row items-center gap-14 max-w-5xl w-full">

          {/* TEXT */}
          <div className="flex-1">

            <p className="text-sm text-gray-400 mb-2">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              MG HERNANDEZ
            </h1>

            <h2 className="text-lg text-yellow-400 mb-4 h-6">
              {text}
            </h2>

            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
              Even if my vision isn’t always clear, my goals are. I push myself
              to learn, improve, and build modern, impactful web applications.
            </p>

            <button className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:scale-105 transition shadow-lg">
              View Work
            </button>

          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <motion.img
                src="/profile.png"
                alt="profile"
                whileHover={{ scale: 1.05 }}
                className="w-[260px] md:w-[300px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}