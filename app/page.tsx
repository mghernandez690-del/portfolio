"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const roles = ["React Developer", "UI Engineer", "Frontend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-800/30 blur-[150px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 🔹 NAVBAR */}
      <nav className="flex justify-center pt-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 px-6 py-2 rounded-full space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certs">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* 🔥 HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* TEXT */}
        <div className="max-w-xl">
          <p className="text-gray-400 mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
              MG HERNANDEZ
            </span>
          </h1>

          <h2 className="text-yellow-400 text-xl mb-4 h-6">
            {text}
          </h2>

          <p className="text-gray-400 mb-6">
            Even if my vision isn’t always clear, my goals are. I push myself to learn,
            improve, and build impactful web applications.
          </p>

          <div className="space-x-4">
            <a
              href="#projects"
              className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg hover:scale-105 transition shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile.png"
            alt="profile"
            className="w-[320px] h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </section>

      {/* 💼 PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Portfolio Website",
              desc: "Modern personal portfolio built with Next.js",
              img: "/profile.png",
              link: "#",
            },
            {
              title: "Gown Rental System",
              desc: "Full-stack system with authentication & dashboard",
              img: "/profile.png",
              link: "#",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur"
            >
              <img src={p.img} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>

                <a
                  href={p.link}
                  className="inline-block mt-3 text-yellow-400"
                >
                  Live Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📜 CERTIFICATES */}
      <section id="certs" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>
        <p className="text-gray-400">Add your certificates here...</p>
      </section>

      {/* 📩 CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <form className="space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />
          <input
            placeholder="Email"
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />

          <button className="px-6 py-2 bg-yellow-400 text-black rounded hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}