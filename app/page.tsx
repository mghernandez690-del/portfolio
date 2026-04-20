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
  const [active, setActive] = useState("about");
  const [text, setText] = useState("");
  const [animate, setAnimate] = useState(false);

  const roles = ["Frontend Developer", "UI Designer", "Web Developer"];
  const tabs = ["about", "skills", "projects", "certs", "contact"];

  // 🔥 TYPEWRITER (FIXED LOOP)
  useEffect(() => {
    let i = 0;
    let current = 0;
    let deleting = false;

    const interval = setInterval(() => {
      const full = roles[current];

      if (!deleting) {
        setText(full.slice(0, i + 1));
        i++;
        if (i === full.length) deleting = true;
      } else {
        setText(full.slice(0, i - 1));
        i--;
        if (i === 0) {
          deleting = false;
          current = (current + 1) % roles.length;
        }
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // 🔥 SKILLS ANIMATION TRIGGER
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

      {/* ================= ABOUT ================= */}
      {active === "about" && (
        <div style={heroWrapper}>
          <div>
            <p style={{ color: "#aaa" }}>Hello, I'm</p>

            <h1 style={title}>MG HERNANDEZ</h1>

            <h2 style={role}>
              {text}
              <span>|</span>
            </h2>

            <p style={desc}>
              I build modern, clean, and impactful web applications.
            </p>

            <div style={{ marginTop: 20 }}>
              <button style={btnOutline}>View Work</button>
              <button style={btnPrimary}>Contact Me</button>
            </div>
          </div>

          <div style={imgCard}>
            <img src="/profile.png" style={{ width: 300, borderRadius: 15 }} />
          </div>
        </div>
      )}

      {/* ================= SKILLS ================= */}
      {active === "skills" && (
        <div>
          <h2 style={skillsTitle}>Skills</h2>

          <div style={gridStyle}>
            {[
              { name: "HTML", icon: <FaHtml5 />, level: 90 },
              { name: "CSS", icon: <FaCss3Alt />, level: 90 },
              { name: "JavaScript", icon: <FaJs />, level: 80 },
              { name: "React", icon: <FaReact />, level: 75 },
              { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
              { name: "Tailwind", icon: <SiTailwindcss />, level: 65 },
            ].map((skill) => (
              <div key={skill.name} style={{ textAlign: "center" }}>
                {/* ICON WITH GLOW + 3D */}
                <div
                  style={circleIcon}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "rotateX(10deg) rotateY(-10deg) scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(250,204,21,0.9), 0 0 40px rgba(59,130,246,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {skill.icon}
                </div>

                <p>{skill.name}</p>

                {/* ANIMATED BAR */}
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
        </div>
      )}

      {/* ================= CONTACT ================= */}
      {active === "contact" && (
        <div style={contactWrapper}>
          <div style={contactCard}>
            <h3>Contact Info</h3>

            <p>
              <FaEnvelope /> mghernandez690@gmail.com
            </p>
            <p>
              <FaFacebook /> Mg Hernandez
            </p>
            <p>
              <FaInstagram /> progra.mg
            </p>
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

const heroWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const title: CSSProperties = {
  fontSize: 60,
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const role: CSSProperties = {
  color: "#facc15",
};

const desc: CSSProperties = {
  color: "#aaa",
};

const btnPrimary: CSSProperties = {
  marginLeft: 10,
  padding: "10px 20px",
  background: "#facc15",
  borderRadius: 8,
};

const btnOutline: CSSProperties = {
  padding: "10px 20px",
  border: "1px solid #fff",
  borderRadius: 8,
};

const imgCard: CSSProperties = {
  padding: 20,
  borderRadius: 20,
  background: "rgba(255,255,255,0.05)",
};

/* SKILLS */

const skillsTitle: CSSProperties = {
  textAlign: "center",
  fontSize: 36,
  marginBottom: 40,
};

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