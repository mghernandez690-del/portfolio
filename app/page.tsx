"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("about");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#07152d] to-[#0b1120] text-white">

      {/* NAV */}
      <nav className="flex justify-center pt-6">
        <div className="flex gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm">
          {["about", "projects", "certs", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative capitalize transition ${
                active === item
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 min-h-[80vh]">

        <AnimatePresence mode="wait">

          {/* ABOUT */}
          {active === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-between gap-10"
            >
              <div className="max-w-xl">
                <p className="text-gray-400 mb-2">Hello, I'm</p>

                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
                    MG HERNANDEZ
                  </span>
                </h1>

                <h2 className="text-yellow-400 text-xl mb-4">
                  Frontend Developer
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Even if my vision isn’t always clear, my goals are. I push myself to learn,
                  improve, and build impactful web applications.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActive("projects")}
                    className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10"
                  >
                    View Work
                  </button>

                  <button
                    onClick={() => setActive("contact")}
                    className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg font-semibold"
                  >
                    Contact Me
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-yellow-400/20 blur-2xl rounded-2xl"></div>

                <div className="relative bg-white/5 border border-white/10 backdrop-blur-md p-3 rounded-2xl">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    width={320}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* PROJECTS */}
          {active === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Projects</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {["Portfolio Website", "Gowns & Golds", "UI Landing Page"].map((p) => (
                  <motion.div
                    key={p}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl"
                  >
                    <h3 className="font-semibold mb-2">{p}</h3>
                    <p className="text-gray-400 text-sm">
                      Clean and modern responsive project built with Next.js.
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CERTS */}
          {active === "certs" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Certificates</h2>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  Web Development Certificate
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  Frontend Certification
                </div>
              </div>
            </motion.div>
          )}

          {/* CONTACT */}
          {active === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="max-w-md"
            >
              <h2 className="text-3xl font-bold mb-6">Contact</h2>

              <input
                placeholder="Your Email"
                className="w-full mb-4 p-3 bg-white/5 border border-white/10 rounded-lg"
              />

              <textarea
                placeholder="Message"
                className="w-full mb-4 p-3 bg-white/5 border border-white/10 rounded-lg"
              />

              <button className="w-full py-3 bg-yellow-400 text-black rounded-lg font-semibold">
                Send Message
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </section>
    </main>
  );
}