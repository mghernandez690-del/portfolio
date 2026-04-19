"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [active, setActive] = useState("home");
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
    <main className="bg-gradient-to-br from-[#020617] via-[#0a1f44] to-[#020617] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 fixed w-full bg-[#020617]/80 backdrop-blur z-50">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => setActive("home")}>
          &lt;Mg/&gt;
        </h1>
        <div className="space-x-6">
          <button onClick={() => setActive("about")}>About</button>
          <button onClick={() => setActive("skills")}>Skills</button>
          <button onClick={() => setActive("projects")}>Projects</button>
          <button onClick={() => setActive("certs")}>Certificates</button>
          <button
            onClick={() => setActive("contact")}
            className="border px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* HOME / HERO */}
      {active === "home" && (
        <section className="h-screen flex items-center justify-between px-10">
          <div>
            <h1 className="text-5xl font-bold">
              Hi, I'm <span className="text-blue-400">Mg Hernandez</span>
            </h1>

            <h2 className="mt-4 text-xl text-blue-300">{text}</h2>

            <p className="mt-4 max-w-xl text-gray-300">
              I build modern, responsive, and user-friendly web applications.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setActive("projects")}
                className="px-6 py-3 border border-blue-400 rounded-lg hover:bg-blue-500 transition"
              >
                View Projects
              </button>
              <button
                onClick={() => setActive("contact")}
                className="px-6 py-3 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/50 hover:scale-105 transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-64 h-64 rounded-xl border border-blue-500 flex items-center justify-center">
            Your Image
          </div>
        </section>
      )}

      {/* ABOUT */}
      {active === "about" && (
        <section className="h-screen flex flex-col justify-center items-center text-center px-10">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl text-gray-300">
            I'm an aspiring frontend developer passionate about building modern websites.
          </p>
        </section>
      )}

      {/* SKILLS */}
      {active === "skills" && (
        <section className="h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map((skill) => (
              <div key={skill} className="bg-[#0f172a] p-6 rounded-xl">
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {active === "projects" && (
        <section className="h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((p) => (
              <div key={p} className="bg-[#0f172a] p-6 rounded-xl">
                Project {p}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CERTS */}
      {active === "certs" && (
        <section className="h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-6">Certificates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((c) => (
              <div key={c} className="bg-[#0f172a] p-6 rounded-xl">
                Certificate {c}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}
      {active === "contact" && (
        <section className="h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Email: mghernandez690@gmail.com</p>
        </section>
      )}

    </main>
  );
}