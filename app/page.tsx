"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">&lt;Mg/&gt;</h1>

        <div className="space-x-6 hidden md:block">
          <button onClick={() => setActiveSection("about")}>About</button>
          <button onClick={() => setActiveSection("skills")}>Skills</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("certs")}>Certificates</button>
          <button className="border px-4 py-1 rounded">Contact</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Mg Hernandez</span>
          </h1>

          <h2 className="text-xl text-blue-300 h-6 mb-4">
            {text}
          </h2>

          <p className="text-gray-400 mb-6">
            I build modern, responsive, and user-friendly web applications using
            React and Tailwind CSS. I focus on clean design, performance, and
            smooth user experience.
          </p>

          <div className="space-x-4">
            <button
              onClick={() => setActiveSection("projects")}
              className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition"
            >
              View Projects
            </button>

            <button
              className="px-6 py-2 bg-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/50 transition"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0">
          <div className="w-72 h-72 bg-[#112240] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-gray-400">Your Image</span>
          </div>
        </div>
      </section>

      {/* DYNAMIC SECTION */}
      <section className="px-10 pb-20">
        {activeSection === "about" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl">
              I'm an aspiring frontend developer passionate about creating clean,
              responsive, and modern websites using React and Tailwind CSS.
            </p>
          </motion.div>
        )}

        {activeSection === "skills" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-[#112240] p-4 rounded text-center hover:scale-105 transition"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}

        {activeSection === "projects" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#112240] p-4 rounded">
                <h3 className="font-bold">Portfolio Website</h3>
                <p className="text-sm text-gray-400">
                  Personal portfolio built with Next.js
                </p>
              </div>

              <div className="bg-[#112240] p-4 rounded">
                <h3 className="font-bold">E-commerce App</h3>
                <p className="text-sm text-gray-400">
                  Online shopping system with React
                </p>
              </div>

              <div className="bg-[#112240] p-4 rounded">
                <h3 className="font-bold">Landing Page</h3>
                <p className="text-sm text-gray-400">
                  Responsive modern UI design
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === "certs" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-6">Certificates</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#112240] p-4 rounded">
                Certificate 1
              </div>
              <div className="bg-[#112240] p-4 rounded">
                Certificate 2
              </div>
              <div className="bg-[#112240] p-4 rounded">
                Certificate 3
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}