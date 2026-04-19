"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const roles = ["Frontend Developer", "React Developer", "UI Developer"];

  // ✅ FIXED typing loop
  useEffect(() => {
    let roleIndex = 0;

    const loop = setInterval(() => {
      let current = roles[roleIndex];
      let i = 0;

      const typing = setInterval(() => {
        setText(current.slice(0, i));
        i++;
        if (i > current.length) clearInterval(typing);
      }, 50);

      roleIndex = (roleIndex + 1) % roles.length;
    }, 2500);

    return () => clearInterval(loop);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white scroll-smooth">

      {/* 🌌 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-900 blur-[140px] opacity-40 top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-yellow-600 blur-[120px] opacity-20 bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 px-6 py-2 rounded-full flex gap-6 text-sm">

          {[
            { name: "About", id: "#about" },
            { name: "Projects", id: "#projects" },
            { name: "Certificates", id: "#certs" },
            { name: "Contact", id: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.id}
              className="relative hover:text-yellow-400 transition after:w-0 after:h-[2px] after:bg-yellow-400 after:absolute after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              {item.name}
            </a>
          ))}

        </div>
      </nav>

      {/* 🧠 HERO */}
      <section className="flex items-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">

          {/* TEXT */}
          <div className="flex-1">

            <p className="text-sm text-gray-400 mb-2">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              MG HERNANDEZ
            </h1>

            <h2 className="text-lg text-yellow-400 mb-4 h-6">
              {text}
            </h2>

            <p className="text-gray-400 max-w-md text-sm mb-6 leading-relaxed">
              I am a frontend developer focused on building clean, responsive,
              and user-friendly web applications. I continuously learn new
              technologies and aim to create meaningful digital experiences.
            </p>

            <a
              href="#projects"
              className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:scale-105 transition shadow-lg inline-block"
            >
              View Work
            </a>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <motion.img
              src="/profile.png"
              alt="profile"
              whileHover={{ scale: 1.05 }}
              className="w-[260px] md:w-[320px] rounded-xl shadow-[0_0_60px_rgba(255,215,0,0.15)] object-cover"
            />
          </div>

        </div>
      </section>

      {/* 👤 ABOUT */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I am an aspiring frontend developer passionate about creating modern,
          responsive, and user-friendly interfaces. I focus on clean design,
          performance, and continuous improvement in every project I build.
        </p>
      </section>

      {/* 💼 PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Portfolio Website",
            "Authentication System",
            "E-commerce UI",
          ].map((proj) => (
            <motion.div
              key={proj}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition"
            >
              <h3 className="text-lg font-semibold mb-2">{proj}</h3>
              <p className="text-sm text-gray-400">
                Built using React, Tailwind, and modern UI practices.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🎓 CERTIFICATES */}
      <section id="certs" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Certificates</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["HTML Certificate", "CSS Certificate", "React Certificate"].map(
            (cert) => (
              <div
                key={cert}
                className="bg-white/5 border border-white/10 p-6 rounded-xl"
              >
                {cert}
              </div>
            )
          )}
        </div>
      </section>

      {/* 📩 CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

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

          <button className="bg-yellow-500 text-black py-3 rounded hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}