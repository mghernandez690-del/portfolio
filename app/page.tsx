"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("home");
  const [text, setText] = useState("");

  const roles = ["Frontend Developer", "UI Designer", "React Developer"];
  const [index, setIndex] = useState(0);

  // AUTO CHANGE ROLE
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
          <button className="border px-4 py-1 rounded">Contact</button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
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

              {/* TEXT */}
              <div className="max-w-xl">

                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                    Mg Hernandez
                  </span>
                </h1>

                <h2 className="text-xl text-blue-300 h-6 mb-4">
                  {text}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Even if my vision isn’t always clear, my goals are. I’m a passionate frontend developer
                  who is always willing to learn, improve, and push forward. I focus on building clean,
                  responsive, and modern web applications while continuously growing my skills.
                </p>

                <div className="space-x-4">
                  <button
                    onClick={() => setActive("projects")}
                    className="px-6 py-2 border border-blue-400 rounded 
                    hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                    transition"
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
                <div className="w-72 h-72 rounded-full overflow-hidden
                shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition">

                  <img
                    src="/profile.png"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />

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
                I am an aspiring frontend developer who is always willing to learn and grow.
                I believe that even if things are difficult, consistency and effort will always
                lead me to my goals.
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