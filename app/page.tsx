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

  const tabs = ["about", "skills", "projects", "certs", "contact"];

  useEffect(() => {
    if (active === "skills") {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }
  }, [active]);

  return (
    <main style={mainStyle}>
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
            ].map((skill) => (
              <div key={skill.name} style={{ textAlign: "center" }}>
                <div
                  style={circleIcon}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "rotateX(10deg) rotateY(-10deg) scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(250,204,21,0.6), 0 0 50px rgba(59,130,246,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
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
                  style={expCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(250,204,21,0.4), 0 0 60px rgba(59,130,246,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3 style={company}>{exp.org}</h3>
                  <p style={school}>{exp.school}</p>

                  <ul style={roleList}>
                    {exp.roles.map((r, idx) => (
                      <li key={idx} style={roleItem}>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT ================= */}
      {active === "contact" && (
        <div style={contactWrapper}>
          <div style={contactCard}>
            <h3>Contact Info</h3>

            <p><FaEnvelope /> mghernandez690@gmail.com</p>
            <p><FaFacebook /> Mg Hernandez</p>
            <p><FaInstagram /> progra.mg</p>
          </div>

          <div style={form}>
            <h2>Get in touch</h2>
            <input placeholder="Name" style={input} />
            <input placeholder="Email" style={input} />
            <textarea placeholder="Message" style={textarea} />
            <button style={btnPrimary}>Send</button>
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
  transition: "all 0.3s ease",
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
  fontSize: 36,
  textAlign: "center",
  marginBottom: 40,
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
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

const expCard: CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  padding: 25,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "all 0.3s ease",
};

const company: CSSProperties = {
  marginBottom: 5,
};

const school: CSSProperties = {
  color: "#aaa",
  marginBottom: 10,
};

const roleList: CSSProperties = {
  paddingLeft: 20,
};

const roleItem: CSSProperties = {
  marginBottom: 5,
};

/* CONTACT */

const contactWrapper: CSSProperties = {
  display: "flex",
  gap: 40,
};

const contactCard: CSSProperties = {
  padding: 20,
  background: "rgba(255,255,255,0.05)",
  borderRadius: 15,
};

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const input: CSSProperties = {
  padding: 10,
  borderRadius: 8,
  border: "none",
};

const textarea: CSSProperties = {
  padding: 10,
  borderRadius: 8,
  height: 100,
};

const btnPrimary: CSSProperties = {
  padding: "10px 20px",
  background: "#facc15",
  borderRadius: 8,
};