"use client";

import { useState, useEffect } from "react";

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

  // SKILLS ANIMATION
  useEffect(() => {
    if (active === "skills") {
      setAnimateBars(false);
      setTimeout(() => setAnimateBars(true), 200);
    }
  }, [active]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #07152d, #0b1120)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          top: "40px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <span
          style={{
            background: "linear-gradient(to right, #60a5fa, #facc15)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MG.
        </span>
      </div>

      {/* NAV */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}>
        <div
          style={{
            display: "flex",
            gap: "30px",
            padding: "14px 30px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {tabs.map((item) => {
            const label = item.charAt(0).toUpperCase() + item.slice(1);

            return (
              <span
                key={item}
                onClick={() => setActive(item)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  color: active === item ? "#facc15" : "#ccc",
                }}
              >
                {label}

                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-4px",
                    height: "2px",
                    width: active === item ? "100%" : "0%",
                    background: "#facc15",
                    transition: "0.3s",
                  }}
                />
              </span>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(20px)",
          transition: "0.4s",
        }}
      >
        {/* ABOUT */}
        {active === "about" && (
          <div style={{ display: "flex", gap: "50px", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ maxWidth: "520px" }}>
              <p style={{ color: "#aaa" }}>Hello, I'm</p>

              <h1
                style={{
                  fontSize: "64px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #60a5fa, #facc15)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                MG HERNANDEZ
              </h1>

              <h2 style={{ color: "#facc15", height: "30px" }}>
                {text} |
              </h2>

              <p style={{ color: "#aaa", marginTop: "15px" }}>
                Even if my vision isn’t always clear, my goals are. I push myself to learn,
                improve, and build impactful web applications.
              </p>

              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button onClick={() => setActive("projects")} style={btnOutline}>
                  View Work
                </button>
                <button onClick={() => setActive("contact")} style={btnPrimary}>
                  Contact Me
                </button>
              </div>
            </div>

            <div style={cardStyle}>
              <img src="/profile.png" style={{ width: "320px", borderRadius: "18px" }} />
            </div>
          </div>
        )}

        {/* SKILLS */}
        {active === "skills" && (
          <div>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "25px",
                background: "linear-gradient(to right, #60a5fa, #facc15)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Skills
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              {[
                { name: "HTML", level: 90 },
                { name: "CSS", level: 90 },
                { name: "JavaScript", level: 70 },
                { name: "React", level: 70 },
                { name: "Next.js", level: 65 },
                { name: "Tailwind", level: 50 },
              ].map((skill) => (
                <div
                  key={skill.name}
                  style={cardStyle}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const rotateX = (y / rect.height - 0.5) * 10;
                    const rotateY = (x / rect.width - 0.5) * -10;

                    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateX(0) rotateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3>{skill.name}</h3>

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

        {/* PROJECTS */}
        {active === "projects" && (
          <div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Projects</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              {["Portfolio", "Gowns System", "UI Landing"].map((p) => (
                <div key={p} style={cardStyle}>
                  <h3>{p}</h3>
                  <p style={{ color: "#aaa" }}>Modern responsive project</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTS */}
        {active === "certs" && (
          <div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Certificates</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={cardStyle}>Web Dev Certificate</div>
              <div style={cardStyle}>Frontend Certificate</div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {active === "contact" && (
          <div style={{ maxWidth: "400px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Contact</h2>

            <input placeholder="Email" style={inputStyle} />
            <textarea placeholder="Message" style={inputStyle} />

            <button style={btnPrimary}>Send</button>
          </div>
        )}
      </div>
    </main>
  );
}

// STYLES
const cardStyle = {
  padding: "20px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  transition: "all 0.3s ease",
};

const barContainer = {
  marginTop: "10px",
  height: "6px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const barFill = {
  height: "100%",
  background: "linear-gradient(to right, #60a5fa, #facc15)",
  boxShadow: "0 0 10px rgba(250, 204, 21, 0.7)",
  transition: "1s ease",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white",
};

const btnPrimary = {
  padding: "10px 20px",
  background: "#facc15",
  color: "black",
  borderRadius: "8px",
};

const btnOutline = {
  padding: "10px 20px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white",
  borderRadius: "8px",
};