"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";

// ICONS
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaServer,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [animateBars, setAnimateBars] = useState(false);

  const fullText = "Frontend Developer";
  const tabs = ["about", "skills", "projects", "certs", "contact"];

  // TYPEWRITER
  useEffect(() => {
    let i = 0;
    setText("");
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [active]);

  // TRANSITION
  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, [active]);

  // SKILL ANIMATION
  useEffect(() => {
    if (active === "skills") {
      setAnimateBars(false);
      setTimeout(() => setAnimateBars(true), 200);
    }
  }, [active]);

  return (
    <main style={mainStyle}>
      {/* LOGO */}
      <div style={logoStyle}>MG.</div>

      {/* NAV */}
      <div style={navWrapper}>
        <div style={navStyle}>
          {tabs.map((item) => {
            const label = item.charAt(0).toUpperCase() + item.slice(1);
            return (
              <span
                key={item}
                onClick={() => setActive(item)}
                style={{
                  ...navItem,
                  color: active === item ? "#facc15" : "#ccc",
                }}
              >
                {label}
                <span
                  style={{
                    ...underline,
                    width: active === item ? "100%" : "0%",
                  }}
                />
              </span>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      <div style={contentStyle(show)}>
        {/* ABOUT */}
        {active === "about" && (
          <div style={aboutWrapper}>
            <div>
              <p style={{ color: "#aaa" }}>Hello, I'm</p>

              <h1 style={gradientTitle}>MG HERNANDEZ</h1>

              <h2 style={{ color: "#facc15" }}>{text} |</h2>

              <p style={desc}>
                Even if my vision isn’t always clear, my goals are. I push myself
                to learn, improve, and build impactful web applications.
              </p>

              <div style={{ marginTop: 20 }}>
                <button style={btnOutline}>View Work</button>
                <button style={btnPrimary}>Contact Me</button>
              </div>
            </div>

            <div style={cardStyle}>
              <img
                src="/profile.png"
                style={{ width: 320, borderRadius: 15 }}
              />
            </div>
          </div>
        )}

        {/* SKILLS */}
        {active === "skills" && (
          <div>
            <h2 style={skillsTitle}>Skills</h2>

            <div style={gridStyle}>
              {[
                { name: "HTML", icon: <FaHtml5 />, level: 90 },
                { name: "CSS", icon: <FaCss3Alt />, level: 90 },
                { name: "JavaScript", icon: <FaJs />, level: 75 },
                { name: "React", icon: <FaReact />, level: 70 },
                { name: "Next.js", icon: <SiNextdotjs />, level: 65 },
                { name: "Tailwind", icon: <SiTailwindcss />, level: 55 },
                { name: "XAMPP", icon: <FaServer />, level: 80 },
                { name: "Laragon", icon: <FaServer />, level: 80 },
              ].map((skill) => (
                <div key={skill.name} style={{ textAlign: "center" }}>
                  {/* ICON */}
                  <div
                    style={circleIcon}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(250,204,21,0.6)";
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
                        width: animateBars ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/* ================== STYLES ================== */

const mainStyle: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#020617,#07152d,#0b1120)",
  color: "white",
  padding: "40px",
};

const logoStyle: CSSProperties = {
  position: "absolute",
  left: 40,
  top: 40,
  fontWeight: "bold",
  fontSize: 18,
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const navWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 60,
};

const navStyle: CSSProperties = {
  display: "flex",
  gap: 30,
  padding: "14px 30px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.05)",
};

const navItem: CSSProperties = {
  cursor: "pointer",
  position: "relative",
};

const underline: CSSProperties = {
  position: "absolute",
  height: 2,
  bottom: -4,
  left: 0,
  background: "#facc15",
  transition: "0.3s",
};

const contentStyle = (show: boolean): CSSProperties => ({
  maxWidth: 1100,
  margin: "0 auto",
  opacity: show ? 1 : 0,
  transform: show ? "translateY(0)" : "translateY(20px)",
  transition: "0.4s",
});

const aboutWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const gradientTitle: CSSProperties = {
  fontSize: 60,
  fontWeight: "bold",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const desc: CSSProperties = {
  color: "#aaa",
  marginTop: 10,
};

const btnPrimary: CSSProperties = {
  marginLeft: 10,
  padding: "10px 20px",
  background: "#facc15",
  color: "black",
  borderRadius: 8,
};

const btnOutline: CSSProperties = {
  padding: "10px 20px",
  border: "1px solid #fff",
  borderRadius: 8,
};

const cardStyle: CSSProperties = {
  padding: 20,
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
};

const skillsTitle: CSSProperties = {
  textAlign: "center",
  fontSize: 36,
  marginBottom: 40,
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 40,
};

const circleIcon: CSSProperties = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 32,
  margin: "0 auto 10px",
  background: "rgba(255,255,255,0.05)",
  transition: "0.3s",
};

const barContainer: CSSProperties = {
  height: 6,
  background: "rgba(255,255,255,0.1)",
  borderRadius: 10,
  overflow: "hidden",
};

const barFill: CSSProperties = {
  height: "100%",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  transition: "1s",
};