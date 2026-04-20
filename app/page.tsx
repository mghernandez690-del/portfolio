"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const [active, setActive] = useState("about");
  const [animate, setAnimate] = useState(false);

  // ✅ FIXED TYPEWRITER
  const roles = ["Frontend Developer", "Web Developer", "UI Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(roles[index].substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);

        if (subIndex === roles[index].length) {
          setDeleting(true);
        }
      } else {
        setText(roles[index].substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    if (active === "skills") {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }
  }, [active]);

  return (
    <main style={mainStyle}>
      {/* NAV */}
      <div style={nav}>
        <h2>Magnesium</h2>
        <div style={navLinks}>
          <span onClick={() => setActive("about")}>About Me</span>
          <span onClick={() => setActive("skills")}>Skills</span>
          <span onClick={() => setActive("experience")}>Certs</span>
          <span onClick={() => setActive("contact")}>Contact</span>
        </div>
      </div>

      {/* ABOUT / HERO */}
      {active === "about" && (
        <section style={hero}>
          <div>
            <p>Hello, I'm</p>
            <h1 style={name}>MG HERNANDEZ</h1>

            <h2 style={role}>
              {text}
              <span style={cursor}>|</span>
            </h2>

            <p style={desc}>
              Even if my vision isn’t always clear, my goals are.
            </p>

            <div style={btnWrap}>
              <button onClick={() => setActive("skills")} style={btnOutline}>
                View Work
              </button>
              <button onClick={() => setActive("contact")} style={btnPrimary}>
                Contact Me
              </button>
            </div>
          </div>

          {/* IMAGE FIX */}
          <div style={imageCard}>
            <Image
              src="/profile.png"
              alt="profile"
              width={280}
              height={380}
              style={heroImage}
            />
          </div>
        </section>
      )}

      {/* SKILLS */}
      {active === "skills" && (
        <section style={section}>
          <h2 style={title}>Skills</h2>

          <div style={grid}>
            {[
              { name: "HTML", icon: <FaHtml5 />, level: 90 },
              { name: "CSS", icon: <FaCss3Alt />, level: 90 },
              { name: "JS", icon: <FaJs />, level: 85 },
              { name: "React", icon: <FaReact />, level: 75 },
              { name: "Next", icon: <SiNextdotjs />, level: 70 },
              { name: "Tailwind", icon: <SiTailwindcss />, level: 65 },
            ].map((skill) => (
              <div key={skill.name} style={card}>
                <div
                  style={circle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 25px #facc15";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {skill.icon}
                </div>

                <p>{skill.name}</p>

                <div style={bar}>
                  <div
                    style={{
                      ...progress,
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE */}
      {active === "experience" && (
        <section style={section}>
          <h2 style={title}>Experience</h2>

          <div style={expWrap}>
            <div style={expCard}>
              <h3>THE MATRIX TODAY</h3>
              <ul>
                <li>Media Assistant Director (2024–2025)</li>
                <li>Photojournalist (2023–2024)</li>
              </ul>
            </div>

            <div style={expCard}>
              <h3>ICPEP.se</h3>
              <ul>
                <li>Treasurer (2024–2026)</li>
              </ul>
            </div>

            <div style={expCard}>
              <h3>NSTP CWTS</h3>
              <ul>
                <li>Head Documentation (2023–2024)</li>
              </ul>
            </div>

            <div style={expCard}>
              <h3>Other</h3>
              <ul>
                <li>Student Volunteer (2023–2026)</li>
                <li>DSWD Cash for Work</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {active === "contact" && (
        <section style={section}>
          <h2 style={title}>Contact</h2>

          <div style={contactBox}>
            <p><FaEnvelope /> mghernandez690@gmail.com</p>
            <p><FaInstagram /> progra.mg</p>
            <p><FaFacebook /> Mg Hernandez</p>
          </div>
        </section>
      )}
    </main>
  );
}

/* ================= STYLES ================= */

const mainStyle: CSSProperties = {
  background: "linear-gradient(135deg,#020617,#07152d,#0b1120)",
  minHeight: "100vh",
  color: "white",
  padding: 40,
};

const nav: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 50,
};

const navLinks: CSSProperties = {
  display: "flex",
  gap: 20,
  cursor: "pointer",
};

const hero: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const name: CSSProperties = {
  fontSize: 50,
};

const role: CSSProperties = {
  color: "#facc15",
};

const cursor: CSSProperties = {
  animation: "blink 1s infinite",
};

const desc: CSSProperties = {
  marginTop: 10,
};

const btnWrap: CSSProperties = {
  marginTop: 20,
  display: "flex",
  gap: 10,
};

const btnPrimary: CSSProperties = {
  background: "#facc15",
  padding: "10px 20px",
};

const btnOutline: CSSProperties = {
  border: "1px solid white",
  padding: "10px 20px",
};

const imageCard: CSSProperties = {
  boxShadow: "0 0 40px rgba(250,204,21,0.3)",
  borderRadius: 20,
};

const heroImage: CSSProperties = {
  borderRadius: 20,
};

const section: CSSProperties = {
  padding: 40,
};

const title: CSSProperties = {
  textAlign: "center",
  marginBottom: 30,
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 30,
};

const card: CSSProperties = {
  textAlign: "center",
};

const circle: CSSProperties = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  margin: "auto",
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
};

const bar: CSSProperties = {
  height: 6,
  background: "#333",
  marginTop: 10,
};

const progress: CSSProperties = {
  height: "100%",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
};

const expWrap: CSSProperties = {
  maxWidth: 700,
  margin: "auto",
};

const expCard: CSSProperties = {
  background: "#111",
  padding: 20,
  marginBottom: 20,
  borderRadius: 10,
};

const contactBox: CSSProperties = {
  textAlign: "center",
};