"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0a192f] text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-700 sticky top-0 bg-[#0a192f] z-50">
        <h1 className="text-xl font-bold">&lt;Mg/&gt;</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#certificates" className="hover:text-blue-400">Certificates</a>
          <a href="#contact" className="border px-3 py-1 rounded hover:bg-blue-500 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-24 bg-gradient-to-r from-[#0a192f] to-[#112240]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-400">Mg Hernandez</span>
          </h1>

          <p className="text-lg text-gray-400 mb-4">
            Frontend Developer
          </p>

          <p className="text-gray-500 mb-6 max-w-lg">
            I build modern, responsive, and user-friendly web applications 
            using React and Tailwind CSS. I focus on clean design, performance, 
            and smooth user experience.
          </p>

          <div className="flex gap-4">
            <button className="border border-blue-400 px-5 py-2 rounded hover:bg-blue-500 transition">
              View Projects
            </button>

            <button className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 transition">
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-0 relative"
        >
          <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-xl"></div>

          <div className="w-64 h-80 bg-[#112240] rounded-xl overflow-hidden relative z-10">
            <img src="/profile.jpg" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I am a passionate frontend developer focused on creating clean, 
          responsive, and visually appealing websites. I enjoy turning ideas 
          into functional digital experiences using modern technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400 text-sm">
              Writing maintainable and scalable code using best practices.
            </p>
          </div>

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-400 text-sm">
              Designing intuitive and visually appealing interfaces.
            </p>
          </div>

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Responsive</h3>
            <p className="text-gray-400 text-sm">
              Optimized layouts for all screen sizes and devices.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-24 text-center">
        <h2 className="text-3xl font-bold mb-10">My Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(skill => (
            <div
              key={skill}
              className="bg-[#112240] p-6 rounded-lg hover:scale-105 hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-24">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
            <p className="text-gray-400 text-sm mb-4">
              A responsive online store with product browsing and cart system.
            </p>
            <button className="border px-3 py-1 rounded">View Project</button>
          </div>

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 text-sm mb-4">
              Personal website showcasing skills and projects.
            </p>
            <button className="border px-3 py-1 rounded">View Project</button>
          </div>

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
            <p className="text-gray-400 text-sm mb-4">
              Modern landing page optimized for user engagement.
            </p>
            <button className="border px-3 py-1 rounded">View Project</button>
          </div>

        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="px-10 py-24">
        <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold">Frontend Development</h3>
            <p className="text-gray-400 text-sm mb-4">
              HTML, CSS, JavaScript certification.
            </p>
            <button className="border px-3 py-1 rounded">View</button>
          </div>

          <div className="bg-[#112240] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-semibold">React Basics</h3>
            <p className="text-gray-400 text-sm mb-4">
              React components and state management.
            </p>
            <button className="border px-3 py-1 rounded">View</button>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-6">
          Open for opportunities and collaborations.
        </p>

        <button className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 transition">
          Send Email
        </button>
      </section>

    </main>
  );
}