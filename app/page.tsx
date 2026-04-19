"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const roles = ["Frontend Developer", "React Developer", "UI Developer"];

  // 🔥 typing effect
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

  // 🔥 cursor glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e: any) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* 🔥 CURSOR GLOW */}
      <div
        id="cursor-glow"
        className="fixed w-[200px] h-[200px] bg-purple-500 opacity-20 blur-[100px] pointer-events-none z-0"
      />

      {/* 🎯 BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute w-[600px] h-[600px] bg-purple-700 blur-[150px] opacity-40 top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-pink-600 blur-[150px] opacity-30 bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🎯 PARTICLES */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* NAV */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-2 rounded-full flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 flex items-center justify-center min-h-screen px-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full">

          {/* TEXT */}
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-2">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              MG HERNANDEZ
            </h1>

            <h2 className="text-lg text-purple-400 mb-4 h-6">{text}</h2>

            <p className="text-gray-400 text-sm max-w-md mb-6">
              Even if my vision isn’t always clear, my goals are. I push myself
              to learn, improve, and build impactful web applications.
            </p>

            <button className="px-6 py-2 bg-purple-600 rounded-lg hover:scale-105 transition shadow-[0_0_20px_rgba(168,85,247,0.7)]">
              View Work
            </button>
          </div>

          {/* IMAGE */}
          <motion.img
            src="/profile.png"
            alt="profile"
            className="w-[260px] md:w-[320px] rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

      {/* 💼 PROJECTS */}
      <section
        id="projects"
        className="relative z-10 py-20 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {["Portfolio", "Auth System", "E-commerce"].map((proj) => (
            <motion.div
              key={proj}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition"
            >
              <h3 className="text-xl mb-2">{proj}</h3>
              <p className="text-sm text-gray-400">
                Modern web application built using React & Tailwind.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 📩 CONTACT */}
      <section
        id="contact"
        className="relative z-10 py-20 px-6 max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-white/5 border border-white/10 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 bg-white/5 border border-white/10 rounded"
          />

          <textarea
            placeholder="Message"
            className="p-3 bg-white/5 border border-white/10 rounded"
          />

          <button className="bg-purple-600 py-3 rounded hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}