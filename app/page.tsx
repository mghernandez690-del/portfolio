"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("home");

  return (
    <main className="h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[100px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-center pt-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full flex gap-8 text-sm">

          {["home", "projects", "certs", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="relative text-gray-300 hover:text-white transition"
            >
              {item}

              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"></span>
              )}
            </button>
          ))}

        </div>
      </nav>

      {/* CONTENT */}
      <div className="h-[calc(100vh-80px)] flex items-center justify-center px-6">

        <AnimatePresence mode="wait">

          {active === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full"
            >

              {/* TEXT */}
              <div>
                <p className="text-gray-400 mb-2">Hello, I'm</p>

                <h1 className="text-6xl font-bold mb-4">
                  MG{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
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
                  className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10"
                >
                  View Work
                </button>
              </div>

              {/* PROFILE */}
              <div className="relative group">

                <div className="absolute w-[320px] h-[420px] bg-gradient-to-br from-blue-500/20 to-yellow-400/20 blur-3xl"></div>

                <div className="relative animate-float">

                  <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 scale-105"></div>

                  <div className="relative rounded-3xl overflow-hidden border border-white/10">

                    <img
                      src="/profile.png"
                      className="w-[300px] h-[400px] object-cover transition group-hover:scale-105"
                    />

                  </div>

                </div>

              </div>

            </motion.div>
          )}

          {active === "projects" && (
            <motion.div key="p" className="text-center">
              <h1 className="text-4xl">Projects</h1>
            </motion.div>
          )}

          {active === "certs" && (
            <motion.div key="c" className="text-center">
              <h1 className="text-4xl">Certificates</h1>
            </motion.div>
          )}

          {active === "contact" && (
            <motion.div key="x" className="text-center">
              <h1 className="text-4xl">Contact</h1>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </main>
  );
}