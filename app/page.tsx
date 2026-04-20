"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
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
  const [active, setActive] = useState("skills");
  const [animate, setAnimate] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const tabs = ["about", "skills", "projects", "certs", "contact"];

  /* ================= CURSOR GLOW ================= */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ================= SKILL ANIMATION ================= */
  useEffect(() => {
    if (active === "skills") {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }
  }, [active]);

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform =
              "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, [active]);

  return (
    <main style={mainStyle}>
      {/* CURSOR GLOW */}
      <div
        style={{
          position: "fixed",
          top: cursor.y - 100,
          left: cursor.x - 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(250,204,21,0.15), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* LOGO */}
      <div style={logoStyle}>MG.</div>

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
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* ================= SKILLS ================= */}
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
            ].map((skill, i) => (
              <div
                key={skill.name}
                className="reveal"
                style={{
                  textAlign: "center",
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "all 0.6s ease",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
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

          {/* ================= EXPERIENCE ================= */}
          <div style={experienceSection}>
            <h2 style={expTitle}>Experience</h2>

            <div style={timeline}>
              <div style={line}></div>

              {[
                {
                  org: "THE MATRIX TODAY",
                  school: "Marinduque State University",
                  roles: [
                    "Media Assistant Director (2024–2025)",
                    "Photojournalist (2023–2024)",
                  ],
                },
                {
                  org: "ICPEP.se",
                  school: "Marinduque State University",
                  roles: ["Treasurer (2024–2026)"],
                },
                {
                  org: "NSTP CWTS",
                  school: "Marinduque State University",
                  roles: ["Head Documentation (2023–2024)"],
                },
                {
                  org: "Student Volunteer",
                  school: "Marinduque State University",
                  roles: ["Member (2023–2026)"],
                },
                {
                  org: "DSWD Cash for Work",
                  school: "Government Program",
                  roles: ["Community Work Participant"],
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    ...expCard,
                    opacity: 0,
                    transform: "translateY(40px)",
                    transition: "all 0.6s ease",
                    transitionDelay: `${i * 0.15}s`,
                  }}
                >
                  <div style={dot}></div>

                  <h3 style={company}>{exp.org}</h3>
                  <p style={school}>{exp.school}</p>

                  <ul style={roleList}>
                    {exp.roles.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 10px",
  background: "rgba(255,255,255,0.05)",
  fontSize: 30,
};

const barContainer: CSSProperties = {
  height: 6,
  background: "rgba(255,255,255,0.1)",
  borderRadius: 10,
};

const barFill: CSSProperties = {
  height: "100%",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  transition: "width 1.2s ease-in-out",
};

/* EXPERIENCE */

const experienceSection: CSSProperties = {
  marginTop: 100,
};

const expTitle: CSSProperties = {
  textAlign: "center",
  marginBottom: 40,
};

const timeline: CSSProperties = {
  position: "relative",
  paddingLeft: 40,
  maxWidth: 700,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: 30,
};

const line: CSSProperties = {
  position: "absolute",
  left: 15,
  top: 0,
  bottom: 0,
  width: 2,
  background: "linear-gradient(#60a5fa,#facc15)",
};

const dot: CSSProperties = {
  position: "absolute",
  left: -34,
  top: 20,
  width: 12,
  height: 12,
  borderRadius: "50%",
  background: "#facc15",
};

const expCard: CSSProperties = {
  position: "relative",
  background: "rgba(255,255,255,0.05)",
  padding: 25,
  borderRadius: 16,
};

const company: CSSProperties = {
  marginBottom: 5,
};

const school: CSSProperties = {
  color: "#aaa",
};

const roleList: CSSProperties = {
  paddingLeft: 20,
};