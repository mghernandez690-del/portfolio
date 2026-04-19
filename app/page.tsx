"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("home");
  const [text, setText] = useState("");

  const roles = ["Frontend Developer", "React Developer", "UI Developer"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      let current = roles[index];
      let i = 0;

      const typing = setInterval(() => {
        setText(current.slice(0, i));
        i++;
        if (i > current.length) clearInterval(typing);
      }, 60);

      index = (index + 1) % roles.length;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <h1 className="text-xl font-bold">&lt;Mg/&gt;</h1>

        <div className="space-x-6 hidden md:flex items-center">
          {["home", "about", "skills", "projects", "certs"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`capitalize ${
                active === item ? "text-blue-400" : "text-white/70"
              } hover:text-blue-400 transition`}
            >
              {item}
            </button>
          ))}

          <button className="border px-4 py-1 rounded hover:bg-blue-500 transition">
            Contact
          </button>
        </div>
      </nav>

      {/* CENTER CONTAINER (FIXED WIDTH) */}
      <div className="max-w-6xl mx-auto px-6">

        <AnimatePresence mode="wait">

          {/* HOME */}
          {active === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12"
            >

              {/* TEXT */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]">
                    Mg Hernandez
                  </span>
                </h1>

                <h2 className="text-xl text-blue-300 h-6 mb-4">
                  {text}
                </h2>

                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  Even if my vision isn’t always clear, my goals are. I’m a
                  passionate frontend developer who is always willing to learn,
                  improve, and push forward. I focus on building clean,
                  responsive, and modern web applications.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActive("projects")}
                    className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
                  >
                    View Projects
                  </button>

                  <button className="px-6 py-2 bg-blue-500 rounded hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition">
                    Contact Me
                  </button>
                </div>
              </div>

              {/* IMAGE (FIXED SIZE + CENTERED) */}
              <div className="flex-1 flex justify-center">
                <motion.img
                  src="/profile.png"
                  alt="profile"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[260px] md:w-[320px] rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] object-cover"
                />
              </div>

            </motion.section>
          )}

          {/* ABOUT */}
          {active === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80vh] flex items-center justify-center text-center"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-400 leading-relaxed">
                  I'm an aspiring frontend developer passionate about building
                  modern, responsive, and user-friendly applications. I
                  continuously learn and improve my skills to create impactful
                  digital experiences.
                </p>
              </div>
            </motion.section>
          )}

          {/* SKILLS */}
          {active === "skills" && (
            <motion.section
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80vh] flex items-center justify-center"
            >
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
                {[
                  "React",
                  "Next.js",
                  "Tailwind",
                  "JavaScript",
                  "Git",
                  "Supabase",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-[#112240] p-6 rounded-xl text-center hover:scale-105 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* PROJECTS */}
          {active === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80vh] flex items-center justify-center"
            >
              <p className="text-gray-400">Projects coming soon...</p>
            </motion.section>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}