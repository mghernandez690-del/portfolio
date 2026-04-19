"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">&lt;Mg/&gt;</h1>

        <div className="space-x-6 hidden md:block">
          <button onClick={() => setActive("about")}>About</button>
          <button onClick={() => setActive("skills")}>Skills</button>
          <button onClick={() => setActive("projects")}>Projects</button>
          <button onClick={() => setActive("certs")}>Certificates</button>
          <button className="border px-4 py-1 rounded">Contact</button>
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
          <div className="w-72 h-72 bg-[#112240] rounded-xl flex items-center justify-center">
            Your Image
          </div>
        </div>
      </section>

      {/* DYNAMIC CONTENT ONLY */}
      <div className="px-10 pb-20">

        {active === "about" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 max-w-xl">
              I'm an aspiring frontend developer passionate about building modern websites.
            </p>
          </motion.div>
        )}

        {active === "skills" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map((skill) => (
                <div key={skill} className="bg-[#112240] p-4 rounded text-center">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {active === "projects" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <p className="text-gray-400">Your projects here...</p>
          </motion.div>
        )}

        {active === "certs" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold mb-6">Certificates</h2>
            <p className="text-gray-400">Your certificates here...</p>
          </motion.div>
        )}

      </div>

    </main>
  );
}