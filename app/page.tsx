"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
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
      {/* NAV */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "10px 20px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {["about", "projects", "certs", "contact"].map((item) => (
            <span
              key={item}
              onClick={() => setActive(item)}
              style={{
                cursor: "pointer",
                color: active === item ? "#facc15" : "#ccc",
                borderBottom: active === item ? "2px solid #facc15" : "none",
                paddingBottom: "2px",
              }}
            >
              {item}
            </span>
          ))}
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
          <div style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ maxWidth: "500px" }}>
              <p style={{ color: "#aaa" }}>Hello, I'm</p>

              <h1
                style={{
                  fontSize: "60px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #60a5fa, #facc15)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                MG HERNANDEZ
              </h1>

              <h2 style={{ color: "#facc15", marginTop: "10px" }}>
                Frontend Developer
              </h2>

              <p style={{ color: "#aaa", marginTop: "15px", lineHeight: "1.6" }}>
                Even if my vision isn’t always clear, my goals are. I push myself to learn,
                improve, and build impactful web applications.
              </p>

              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button
                  onClick={() => setActive("projects")}
                  style={{
                    padding: "10px 20px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  View Work
                </button>

                <button
                  onClick={() => setActive("contact")}
                  style={{
                    padding: "10px 20px",
                    background: "linear-gradient(to right, #facc15, #fb923c)",
                    color: "black",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div
              style={{
                padding: "10px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="/profile.png"
                style={{
                  width: "300px",
                  borderRadius: "15px",
                }}
              />
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {active === "projects" && (
          <div>
            <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Projects</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              {["Portfolio Website", "Gowns & Golds", "UI Landing"].map((p) => (
                <div
                  key={p}
                  style={{
                    padding: "20px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    transition: "transform 0.3s",
                  }}
                >
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
            <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Certificates</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ padding: "15px", background: "rgba(255,255,255,0.05)", borderRadius: "10px" }}>
                Web Development Certificate
              </div>
              <div style={{ padding: "15px", background: "rgba(255,255,255,0.05)", borderRadius: "10px" }}>
                Frontend Certification
              </div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {active === "contact" && (
          <div style={{ maxWidth: "400px" }}>
            <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Contact</h2>

            <input
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "white",
              }}
            />

            <textarea
              placeholder="Message"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "white",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#facc15",
                color: "black",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </main>
  );
}