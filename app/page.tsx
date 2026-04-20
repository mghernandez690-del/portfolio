"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const [active, setActive] = useState("about me");
  const [animate, setAnimate] = useState(false);

  /* ================= TYPEWRITER FIX ================= */
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

  /* ================= SKILLS ================= */
  useEffect(() => {
    if (active === "skills") {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }
  }, [active]);

  const tabs = ["about me", "skills", "projects", "certs", "contact"];

  return (
    <main style={mainStyle}>
      <div style={logoStyle}>Magnesium</div>

      {/* NAV */}
      <div style={navWrapper}>
        <div style={navStyle}>
          {tabs.map((t) => (
            <span
              key={t}
              onClick={() => setActive(t)}
              style={{
                ...navItem,
                color: active === t ? "#facc15" : "#ccc",
                borderBottom:
                  active === t ? "2px solid #facc15" : "none",
              }}
            >
              {t.replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      {active === "about me" && (
        <div style={heroSection}>
          <div>
            <p>Hello, I'm</p>
            <h1 style={heroName}>MG HERNANDEZ</h1>

            <h2 style={heroRole}>
              {text} <span style={cursor}>|</span>
            </h2>

            <p style={heroDesc}>
              Even if my vision isn’t always clear, my goals are.
            </p>

            <div style={{ marginTop: 20, display: "flex", gap: 15 }}>
              <button style={btnOutline}>View Work</button>
              <button style={btnPrimary}>Contact Me</button>
            </div>
          </div>

          <div style={imageCard}>
            <img src="/profile.jpg" style={heroImage} />
          </div>
        </div>
      )}

      {/* SKILLS */}
      {active === "skills" && (
        <div>
          <div style={gridStyle}>
            {[
              { name: "HTML", icon: <FaHtml5 />, level: 90 },
              { name: "CSS", icon: <FaCss3Alt />, level: 90 },
              { name: "JavaScript", icon: <FaJs />, level: 85 },
              { name: "React", icon: <FaReact />, level: 75 },
              { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
              { name: "Tailwind", icon: <SiTailwindcss />, level: 65 },
            ].map((skill) => (
              <div key={skill.name} style={{ textAlign: "center" }}>
                <div
                  style={circleIcon}
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

                <div style={barContainer}>
                  <div
                    style={{
                      ...barFill,
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div style={{ marginTop: 80 }}>
            <h2 style={{ textAlign: "center" }}>Experience</h2>

            <div style={{ maxWidth: 700, margin: "auto" }}>
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
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ================= STYLES ================= */

const mainStyle: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#020617,#07152d,#0b1120)",
  color: "white",
  padding: 40,
};

const logoStyle: CSSProperties = {
  position: "absolute",
  top: 30,
  left: 30,
};

const navWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const navStyle: CSSProperties = {
  display: "flex",
  gap: 25,
};

const navItem: CSSProperties = {
  cursor: "pointer",
};

/* HERO */

const heroSection: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 80,
};

const heroName: CSSProperties = {
  fontSize: 48,
};

const heroRole: CSSProperties = {
  color: "#facc15",
};

const cursor: CSSProperties = {
  animation: "blink 1s infinite",
};

const heroDesc: CSSProperties = {
  color: "#ccc",
};

const btnPrimary: CSSProperties = {
  background: "#facc15",
  padding: 10,
};

const btnOutline: CSSProperties = {
  border: "1px solid white",
  padding: 10,
};

const imageCard: CSSProperties = {
  boxShadow: "0 0 30px #facc15",
};

const heroImage: CSSProperties = {
  width: 250,
};

/* SKILLS */

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 40,
};

const circleIcon: CSSProperties = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
};

const barContainer: CSSProperties = {
  height: 6,
  background: "#222",
};

const barFill: CSSProperties = {
  height: "100%",
  background: "gold",
};

/* EXPERIENCE */

const expCard: CSSProperties = {
  background: "#111",
  padding: 20,
  marginTop: 20,
};