"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Home() {

  // 🔥 cursor glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* 🔥 CURSOR GLOW */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="fixed w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none z-0"
      />

      {/* 🌌 BACKGROUND DEPTH */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-700/20 blur-[150px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAV */}
      <nav className="flex justify-center pt-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 px-6 py-2 rounded-full space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certs">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="text-gray-400 mb-2">Hello, I'm</p>

          <h1 className="text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              MG HERNANDEZ
            </span>
          </h1>

          {/* ✅ CLEAN PROFESSIONAL ROLE */}
          <h2 className="text-yellow-400 text-xl mb-4">
            Frontend Developer
          </h2>

          <p className="text-gray-400 mb-6">
            Even if my vision isn’t always clear, my goals are. I push myself to
            learn, improve, and build impactful web applications. I focus on clean,
            responsive, and modern user interfaces.
          </p>

          <div className="space-x-4">
            <a
              href="#projects"
              className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 hover:scale-105 transition"
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
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile.png"
            alt="profile"
            className="w-[320px] h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Portfolio Website",
              desc: "Modern animated portfolio built with Next.js",
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
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              <img
                src={p.img}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
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

      {/* CERTIFICATES */}
      <section id="certs" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>
        <p className="text-gray-400">
          Add your certificates here (Google, Coursera, etc.)
        </p>
      </section>

      {/* CONTACT */}
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