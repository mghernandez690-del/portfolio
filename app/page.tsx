"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("home");
  const [text, setText] = useState("");

  const roles = ["Frontend Developer", "UI Designer", "React Developer"];
  const [index, setIndex] = useState(0);

  // CHANGE ROLE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
      setText("");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // TYPING EFFECT
  useEffect(() => {
    let i = 0;
    const current = roles[index];

    const typing = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) clearInterval(typing);
    }, 70);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold">&lt;Mg/&gt;</h1>

        <div className="space-x-6 hidden md:block">
          <button onClick={() => setActive("home")}>Home</button>
          <button onClick={() => setActive("about")}>About</button>
          <button onClick={() => setActive("skills")}>Skills</button>
          <button onClick={() => setActive("projects")}>Projects</button>
          <button onClick={() => setActive("certs")}>Certs</button>
          <button className="border px-4 py-1 rounded-lg">Contact</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="h-[calc(100vh-80px)] flex items-center justify-center px-10">

        <AnimatePresence mode="wait">

          {/* ================= HOME ================= */}
          {active === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col md:flex-row items-center justify-between"
            >

              {/* LEFT */}
              <div className="max-w-xl">

                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
                    Mg Hernandez
                  </span>
                </h1>

                <h2 className="text-xl text-blue-300 h-6 mb-4 tracking-wide">
                  {text}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  I am a frontend developer focused on building modern, scalable, and user-friendly web applications.
                  Despite challenges, I continuously push myself to improve, learn new technologies, and deliver
                  clean and efficient solutions. My goal is to create meaningful and impactful digital experiences.
                </p>

                <div className="space-x-4">
                  <button
                    onClick={() => setActive("projects")}
                    className="px-6 py-2 border border-blue-400 rounded-lg 
                    hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
                    transition duration-300"
                  >
                    View Projects
                  </button>

                  <button
                    className="px-6 py-2 bg-blue-500 rounded-lg 
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                    transition duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE (PRO STYLE) */}
              <div className="mt-10 md:mt-0">
                <div className="relative w-[300px] h-[380px] rounded-2xl overflow-hidden
                bg-[#0f172a]
                border border-white/10
                shadow-[0_0_60px_rgba(59,130,246,0.25)]
                hover:shadow-[0_0_80px_rgba(59,130,246,0.5)]
                transition duration-500 group">

                  <img
                    src="/profile.png"
                    alt="profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* GLOW BORDER */}
                  <div className="absolute inset-0 border border-blue-400/20 rounded-2xl animate-pulse" />

                </div>
              </div>

            </motion.div>
          )}

          {/* ================= ABOUT ================= */}
          {active === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-xl"
            >
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400">
                I am continuously improving as a developer, focusing on writing clean code,
                learning modern frameworks, and building real-world projects that solve problems.
              </p>
            </motion.div>
          )}

          {/* ================= SKILLS ================= */}
          {active === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Skills</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= PROJECTS ================= */}
          {active === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Projects</h2>
              <p className="text-gray-400">Your projects here...</p>
            </motion.div>
          )}

          {/* ================= CERTS ================= */}
          {active === "certs" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Certificates</h2>
              <p className="text-gray-400">Your certificates here...</p>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </main>
  );
}