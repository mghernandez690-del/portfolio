"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const fullText = "Frontend Developer";

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

  const tabs = ["about", "projects", "certs", "contact"];

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
            fontSize: "16px",
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
                  paddingBottom: "4px",
                  color: active === item ? "#facc15" : "#ccc",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  if (active !== item) {
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== item) {
                    e.currentTarget.style.color = "#ccc";
                  }
                }}
              >
                {label}

                {/* UNDERLINE (hover + active) */}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: active === item ? "100%" : "0%",
                    background: "#facc15",
                    transition: "0.3s",
                  }}
                  className="underline"
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
          transform: show ? "translateY(0px)" : "translateY(20px)",
          transition: "all 0.4s ease",
        }}
      >
        {/* ABOUT */}
        {active === "about" && (
          <div style={{ display: "flex", gap: "50px", alignItems: "center", justifyContent: "space-between" }}>
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
                {text}
                <span style={{ marginLeft: "5px" }}>|</span>
              </h2>

              <p style={{ color: "#aaa", marginTop: "15px", lineHeight: "1.7" }}>
                Even if my vision isn’t always clear, my goals are. I push myself to learn,
                improve, and build impactful web applications.
              </p>

              <div style={{ marginTop: "25px", display: "flex", gap: "12px" }}>
                <button
                  onClick={() => setActive("projects")}
                  style={btnOutline}
                >
                  View Work
                </button>

                <button
                  onClick={() => setActive("contact")}
                  style={btnPrimary}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div style={cardStyle}>
              <img src="/profile.png" style={{ width: "320px", borderRadius: "18px" }} />
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {active === "projects" && (
          <div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Projects</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              {["Portfolio Website", "Gowns & Golds", "UI Landing"].map((p) => (
                <div key={p} style={cardStyle}>
                  <h3>{p}</h3>
                  <p style={{ color: "#aaa", fontSize: "14px" }}>
                    Clean modern project built with Next.js.
                  </p>
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
              <div style={cardStyle}>Web Development Certificate</div>
              <div style={cardStyle}>Frontend Certification</div>
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
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white",
};

const btnPrimary = {
  padding: "12px 24px",
  background: "linear-gradient(to right, #facc15, #fb923c)",
  color: "black",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
};

const btnOutline = {
  padding: "12px 24px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white",
  borderRadius: "10px",
};