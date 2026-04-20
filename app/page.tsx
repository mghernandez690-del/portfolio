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

  /* ================= TYPEWRITER ================= */
  const roles = ["Frontend Developer", "UI Designer", "Web Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  /* ================= SKILL ANIMATION ================= */
  useEffect(() => {
    if (active === "skills") {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }
  }, [active]);

  const tabs = ["about me", "skills", "projects", "certs", "contact"];

  return (
    <main style={mainStyle}>
      {/* LOGO */}
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

      {/* ================= HERO ================= */}
      <div style={heroSection}>
        <div>
          <p>Hello, I'm</p>

          <h1 style={heroName}>MG HERNANDEZ</h1>

          <h2 style={heroRole}>
            {text} <span style={cursor}>|</span>
          </h2>

          <p style={heroDesc}>
            Even if my vision isn’t always clear, my goals are. I push myself to
            learn, improve, and build impactful web applications.
          </p>
        </div>

        <div style={imageWrapper}>
          <img src="/profile.jpg" alt="profile" style={heroImage} />
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      {active === "about me" && (
        <div style={aboutSection}>
          <h1 style={aboutTitle}>About Me</h1>

          <p style={aboutText}>
            I am a passionate Frontend Developer focused on building modern,
            responsive, and impactful web applications.
          </p>

          <p style={aboutText}>
            I specialize in React, Next.js, and clean UI/UX design.
          </p>
        </div>
      )}

      {/* ================= SKILLS ================= */}
      {active === "skills" && (
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
              <div style={circleIcon}>{skill.icon}</div>
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
      )}

      {/* ================= EXPERIENCE ================= */}
      {active === "skills" && (
        <div style={experienceSection}>
          <h2 style={expTitle}>Experience</h2>

          <div style={timeline}>
            {[
              {
                title: "THE MATRIX TODAY",
                roles: [
                  "Media Assistant Director (2024–2025)",
                  "Photojournalist (2023–2024)",
                ],
              },
              {
                title: "ICPEP.se",
                roles: ["Treasurer (2024–2026)"],
              },
              {
                title: "NSTP CWTS",
                roles: ["Head Documentation (2023–2024)"],
              },
              {
                title: "Student Volunteer",
                roles: ["Member (2023–2026)"],
              },
              {
                title: "DSWD Cash for Work",
                roles: ["Community Work Participant"],
              },
            ].map((exp, i) => (
              <div key={i} style={expCard}>
                <h3>{exp.title}</h3>
                <ul>
                  {exp.roles.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
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
  fontWeight: "bold",
};

const navWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 50,
};

const navStyle: CSSProperties = {
  display: "flex",
  gap: 25,
  padding: "12px 25px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.05)",
};

const navItem: CSSProperties = {
  cursor: "pointer",
};

/* HERO */

const heroSection: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 50,
};

const heroName: CSSProperties = {
  fontSize: 48,
  fontWeight: "bold",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const heroRole: CSSProperties = {
  color: "#facc15",
  marginTop: 10,
};

const cursor: CSSProperties = {
  marginLeft: 5,
  animation: "blink 1s infinite",
};

const heroDesc: CSSProperties = {
  color: "#ccc",
  marginTop: 10,
};

const imageWrapper: CSSProperties = {
  padding: 10,
  borderRadius: 20,
  background: "rgba(255,255,255,0.05)",
  boxShadow: "0 0 30px rgba(250,204,21,0.3)",
  animation: "float 4s ease-in-out infinite",
};

const heroImage: CSSProperties = {
  width: 250,
  borderRadius: 20,
};

/* ABOUT */

const aboutSection: CSSProperties = {
  maxWidth: 700,
  margin: "80px auto",
  textAlign: "center",
};

const aboutTitle: CSSProperties = {
  fontSize: 42,
};

const aboutText: CSSProperties = {
  color: "#ccc",
};

/* SKILLS */

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 40,
  marginTop: 50,
};

const circleIcon: CSSProperties = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 10px",
  background: "rgba(255,255,255,0.05)",
};

const barContainer: CSSProperties = {
  height: 6,
  background: "rgba(255,255,255,0.1)",
};

const barFill: CSSProperties = {
  height: "100%",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  transition: "width 1s",
};

/* EXPERIENCE */

const experienceSection: CSSProperties = {
  marginTop: 80,
};

const expTitle: CSSProperties = {
  textAlign: "center",
  fontSize: 32,
};

const timeline: CSSProperties = {
  maxWidth: 700,
  margin: "40px auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
};

const expCard: CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  padding: 20,
  borderRadius: 12,
};