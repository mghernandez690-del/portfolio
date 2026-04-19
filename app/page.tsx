"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("home");

  return (
    <main className="h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-700/20 blur-[150px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-center pt-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 px-6 py-2 rounded-full flex gap-8 text-sm">

          {["home", "projects", "certs", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="relative capitalize text-gray-300 hover:text-white transition"
            >
              {item}

              {/* ACTIVE LINE */}
              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 rounded" />
              )}
            </button>
          ))}

        </div>
      </nav>

      {/* SCREEN SWITCH */}
      <div className="h-[calc(100vh-80px)] flex items-center justify-center px-6">

        <AnimatePresence mode="wait">

          {/* 🏠 HOME (WITH PROFILE) */}
          {active === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10"
            >

              <div className="max-w-xl">
                <p className="text-gray-400 mb-2">Hello, I'm</p>

                <h1 className="text-6xl font-bold mb-4">
                  MG{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
                    HERNANDEZ
                  </span>
                </h1>

                <h2 className="text-yellow-400 text-xl mb-4">
                  Frontend Developer
                </h2>

                <p className="text-gray-400 mb-6">
                  I build clean, responsive, and modern web applications.
                </p>

                <button
                  onClick={() => setActive("projects")}
                  className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
                >
                  View Work
                </button>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-yellow-400/20 blur-3xl rounded-3xl"></div>

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-xl">
                  <img
                    src="/profile.png"
                    className="w-[300px] h-[380px] object-cover rounded-2xl"
                  />
                </div>
              </div>

            </motion.div>
          )}

          {/* 💼 PROJECTS */}
          {active === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-4xl mb-6">Projects</h2>
              <p className="text-gray-400">Your projects here...</p>
            </motion.div>
          )}

          {/* 🎓 CERTS */}
          {active === "certs" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-4xl mb-6">Certificates</h2>
              <p className="text-gray-400">Your certificates here...</p>
            </motion.div>
          )}

          {/* 📩 CONTACT */}
          {active === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-4xl mb-6">Contact</h2>
              <p className="text-gray-400">Contact form here...</p>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </main>
  );
}