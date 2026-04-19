"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("");
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
    <main className="h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => setActive("")}>
          &lt;Mg/&gt;
        </h1>

        <div className="space-x-6 hidden md:flex items-center">
          {["about", "skills", "projects", "certs"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="capitalize hover:text-blue-400 transition"
            >
              {item}
            </button>
          ))}

          <button className="border px-4 py-1 rounded">Contact</button>
        </div>
      </nav>

      {/* SCREEN SWITCH */}
      <AnimatePresence mode="wait">

        {/* HERO (default) */}
        {active === "" && (
          <motion.section
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col md:flex-row items-center justify-between px-10 py-20 h-[calc(100vh-80px)]"
          >
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Mg Hernandez</span>
              </h1>

              <h2 className="text-xl text-blue-300 h-6 mb-4">{text}</h2>

              <p className="text-gray-400 mb-6">
                I build modern, responsive, and user-friendly web applications using React and Tailwind CSS.
              </p>

              <div className="space-x-4">
                <button
                  onClick={() => setActive("projects")}
                  className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-500 transition"
                >
                  View Projects
                </button>

                <button className="px-6 py-2 bg-blue-500 rounded">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <div className="w-72 h-72 bg-[#112240] rounded-xl flex items-center justify-center">
                Your Image
              </div>
            </div>
          </motion.section>
        )}

        {/* ABOUT */}
        {active === "about" && (
          <motion.section
            key="about"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="h-[calc(100vh-80px)] flex items-center justify-center"
          >
            <div className="max-w-xl text-center">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400">
                I'm an aspiring frontend developer passionate about building clean and modern websites.
              </p>
            </div>
          </motion.section>
        )}

        {/* SKILLS */}
        {active === "skills" && (
          <motion.section
            key="skills"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="h-[calc(100vh-80px)] flex items-center justify-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["HTML", "CSS", "JS", "React", "Tailwind", "Git"].map((s) => (
                  <div key={s} className="bg-[#112240] p-4 rounded text-center">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* PROJECTS */}
        {active === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="h-[calc(100vh-80px)] flex items-center justify-center"
          >
            <h2 className="text-4xl">Projects Section</h2>
          </motion.section>
        )}

        {/* CERTS */}
        {active === "certs" && (
          <motion.section
            key="certs"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="h-[calc(100vh-80px)] flex items-center justify-center"
          >
            <h2 className="text-4xl">Certificates Section</h2>
          </motion.section>
        )}

      </AnimatePresence>

    </main>
  );
}