"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("about");

  // 🔥 background subtle movement
  useEffect(() => {
    const move = () => {
      const el = document.getElementById("bg-glow");
      if (!el) return;
      el.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };
    window.addEventListener("scroll", move);
    return () => window.removeEventListener("scroll", move);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND (SUBTLE ANIMATION) */}
      <div
        id="bg-glow"
        className="absolute inset-0 -z-10 transition-transform duration-300"
      >
        <div className="absolute w-[600px] h-[600px] bg-blue-700/20 blur-[150px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🔹 NAVBAR */}
      <nav className="flex justify-center pt-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 px-6 py-2 rounded-full flex gap-8 text-sm">

          {["about", "projects", "certs", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative capitalize text-gray-300 hover:text-white transition"
            >
              {item}

              {/* ACTIVE LINE */}
              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 rounded" />
              )}
            </button>
          ))}

        </div>
      </nav>

      {/* 🔥 HERO */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* TEXT */}
        <div className="max-w-xl">
          <p className="text-gray-400 mb-2">Hello, I'm</p>

          <h1 className="text-6xl font-bold mb-4 leading-tight">
            MG{" "}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
              HERNANDEZ
            </span>
          </h1>

          <h2 className="text-yellow-400 text-xl mb-4">
            Frontend Developer
          </h2>

          <p className="text-gray-400 mb-6">
            I focus on building clean, responsive, and modern web applications.
            I continuously improve my skills to create meaningful digital experiences.
          </p>

          <div className="space-x-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              View Work
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg hover:scale-105 transition"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* 💎 3D GLASS IMAGE */}
        <motion.div
          className="relative"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * 8;

            e.currentTarget.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
          }}
          style={{ transition: "transform 0.2s ease" }}
        >

          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-yellow-400/20 blur-3xl rounded-3xl"></div>

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-xl">

            <img
              src="/profile.png"
              className="w-[300px] h-[380px] object-cover rounded-2xl"
            />

            <div className="mt-4 text-center">
              <h3 className="text-sm font-semibold">Mg Hernandez</h3>
              <p className="text-xs text-gray-400">Frontend Developer</p>
            </div>

          </div>
        </motion.div>

      </section>

      {/* 💼 PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {["Portfolio Website", "Gown Rental System"].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{proj}</h3>
              <p className="text-gray-400 text-sm">
                Modern responsive web application built using React and Tailwind.
              </p>

              <span className="text-yellow-400 text-sm mt-3 inline-block">
                Live Demo →
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎓 CERTS */}
      <section id="certs" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>
        <p className="text-gray-400">Add your certificates here.</p>
      </section>

      {/* 📩 CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <form className="space-y-4">
          <input className="w-full p-3 bg-white/5 border border-white/10 rounded" placeholder="Name" />
          <input className="w-full p-3 bg-white/5 border border-white/10 rounded" placeholder="Email" />
          <textarea className="w-full p-3 bg-white/5 border border-white/10 rounded" placeholder="Message" />
          <button className="px-6 py-2 bg-yellow-400 text-black rounded hover:scale-105 transition">
            Send
          </button>
        </form>
      </section>

    </main>
  );
}