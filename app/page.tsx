"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("");
  const [text, setText] = useState("");

  const fullText = "Frontend Developer";

  // typing effect
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
    <main className="h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold">&lt;Mg/&gt;</h1>

        <div className="space-x-6 hidden md:flex items-center">
          {["about", "skills", "projects", "certs"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`capitalize transition ${
                active === item ? "text-blue-400" : "hover:text-blue-300"
              }`}
            >
              {item}
            </button>
          ))}

          <button className="border px-4 py-1 rounded hover:bg-white/10 transition">
            Contact
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">

        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Mg Hernandez</span>
          </h1>

          <h2 className="text-xl text-blue-300 h-6 mb-4">
            {text}
          </h2>

          <p className="text-gray-400 mb-6">
            I build modern, responsive, and user-friendly web applications using
            React and Tailwind CSS.
          </p>

          <div className="space-x-4">
            <button
              onClick={() => setActive("projects")}
              className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-500 hover:shadow-lg transition"
            >
              View Projects
            </button>

            <button className="px-6 py-2 bg-blue-500 rounded hover:shadow-lg transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-10 md:mt-0">
          <div className="w-72 h-72 bg-[#112240] rounded-xl flex items-center justify-center shadow-lg">
            Your Image
          </div>
        </div>
      </section>

      {/* TABS CONTENT (CENTERED DASHBOARD STYLE) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="w-full max-w-3xl px-6 pointer-events-auto">

          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-[#112240] p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/10"
              >

                {active === "about" && (
                  <>
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300">
                      I'm an aspiring frontend developer passionate about building
                      clean, modern, and responsive websites using React and Tailwind.
                    </p>
                  </>
                )}

                {active === "skills" && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map((skill) => (
                        <div
                          key={skill}
                          className="bg-[#0f172a] p-4 rounded text-center hover:bg-blue-500/20 transition"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {active === "projects" && (
                  <>
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <p className="text-gray-300">
                      Your portfolio projects will be displayed here.
                    </p>
                  </>
                )}

                {active === "certs" && (
                  <>
                    <h2 className="text-3xl font-bold mb-4">Certificates</h2>
                    <p className="text-gray-300">
                      Your certifications and achievements here.
                    </p>
                  </>
                )}

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </main>
  );
}