"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState<"home" | "projects" | "certs" | "contact">("home");
  const [text, setText] = useState("");

  const fullText = "Frontend Developer";

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white px-6 md:px-16 py-10">

      {/* NAVBAR */}
      <div className="flex justify-center mb-14">
        <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-full flex gap-6 text-sm border border-white/10">
          {[
            { id: "home", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "certs", label: "Certificates" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id as any)}
              className={`relative px-2 transition ${
                active === item.id ? "text-blue-400" : "text-gray-400"
              }`}
            >
              {item.label}

              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">

        {/* HERO / ABOUT */}
        {active === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* TEXT */}
            <div className="max-w-xl">
              <p className="text-gray-400 mb-2">Hello, I'm</p>

              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-blue-400">MG</span> HERNANDEZ
              </h1>

              <h2 className="text-blue-300 mb-4 h-6">{text}</h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Even if my vision isn’t always clear, my goals are. I push myself
                to learn, improve, and build modern, impactful web applications
                while continuously growing my skills.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setActive("projects")}
                  className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-500 transition"
                >
                  View Work
                </button>

                <button
                  onClick={() => setActive("contact")}
                  className="px-6 py-2 bg-blue-500 rounded hover:opacity-80 transition"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex justify-center"
            >
              <div className="bg-[#112240] p-4 rounded-xl shadow-lg">
                <Image
                  src="/profile.png"
                  alt="profile"
                  width={260}
                  height={320}
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* PROJECTS */}
        {active === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((p) => (
                <div
                  key={p}
                  className="bg-[#112240] p-5 rounded-xl hover:scale-105 transition"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Project {p}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Clean and responsive web application.
                  </p>
                  <button className="text-blue-400 text-sm">
                    View Demo →
                  </button>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CERTS */}
        {active === "certs" && (
          <motion.section
            key="certs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Certificates</h2>
            <p className="text-gray-400">
              Add your certifications here (e.g., HTML, CSS, JS, React).
            </p>
          </motion.section>
        )}

        {/* CONTACT */}
        {active === "contact" && (
          <motion.section
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Contact</h2>

            <form className="flex flex-col gap-4">
              <input
                placeholder="Your Name"
                className="p-3 rounded bg-[#0f172a]"
              />
              <input
                placeholder="Email"
                className="p-3 rounded bg-[#0f172a]"
              />
              <textarea
                placeholder="Message"
                className="p-3 rounded bg-[#0f172a]"
              />
              <button className="bg-blue-500 py-2 rounded">
                Send Message
              </button>
            </form>
          </motion.section>
        )}

      </AnimatePresence>
    </main>
  );
}