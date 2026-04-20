"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  const [active, setActive] = useState("about");
  const [text, setText] = useState("");

  const roles = ["Frontend Developer", "UI Designer", "Web Developer"];
  const tabs = ["about", "skills", "projects", "certs", "contact"];

  // ✅ FIXED TYPEWRITER (LOOPING)
  useEffect(() => {
    let i = 0;
    let current = 0;
    let deleting = false;

    const interval = setInterval(() => {
      const full = roles[current];

      if (!deleting) {
        setText(full.slice(0, i++));
        if (i > full.length) deleting = true;
      } else {
        setText(full.slice(0, i--));
        if (i === 0) {
          deleting = false;
          current = (current + 1) % roles.length;
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

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

      {/* HERO */}
      {active === "about" && (
        <div style={heroWrapper}>
          <div>
            <p style={{ color: "#aaa" }}>Hello, I'm</p>

            <h1 style={title}>MG HERNANDEZ</h1>

            <h2 style={role}>
              {text}
              <span style={{ marginLeft: 5 }}>|</span>
            </h2>

            <p style={desc}>
              I build clean, modern, and impactful web applications with a
              passion for design and performance.
            </p>

            <div style={{ marginTop: 20 }}>
              <button style={btnOutline}>View Work</button>
              <button style={btnPrimary}>Contact Me</button>
            </div>
          </div>

          {/* IMAGE WITH HOVER */}
          <div
            style={imgCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "rotateY(10deg) rotateX(5deg) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(250,204,21,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src="/profile.png"
              style={{ width: 300, borderRadius: 15 }}
            />
          </div>
        </div>
      )}

      {/* CONTACT */}
      {active === "contact" && (
        <div style={contactWrapper}>
          {/* LEFT CARD */}
          <div style={contactCard}>
            <h3>Contact Information</h3>

            <p style={{ marginTop: 20 }}>
              <FaMapMarkerAlt /> Philippines
            </p>
            <p>
              <FaEnvelope /> mghernandez690@gmail.com
            </p>

            <div style={socials}>
              <FaFacebook /> Mg Hernandez
            </div>
            <div style={socials}>
              <FaInstagram /> progra.mg
            </div>
          </div>

          {/* FORM */}
          <div style={form}>
            <h2>Get in touch</h2>

            <input placeholder="Name" style={input} />
            <input placeholder="Email" style={input} />
            <textarea placeholder="Message" style={textarea} />

            <button style={btnPrimary}>Send Message</button>
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
  left: 40,
  top: 40,
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
  fontWeight: "bold",
  background: "linear-gradient(to right,#60a5fa,#facc15)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const role: CSSProperties = {
  color: "#facc15",
};

const desc: CSSProperties = {
  color: "#aaa",
  marginTop: 10,
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
  transition: "0.4s",
};

/* CONTACT */

const contactWrapper: CSSProperties = {
  display: "flex",
  gap: 50,
};

const contactCard: CSSProperties = {
  padding: 30,
  borderRadius: 20,
  background: "rgba(255,255,255,0.05)",
  width: 300,
};

const socials: CSSProperties = {
  marginTop: 10,
};

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 15,
  width: 400,
};

const input: CSSProperties = {
  padding: 10,
  borderRadius: 8,
  border: "none",
};

const textarea: CSSProperties = {
  padding: 10,
  height: 100,
  borderRadius: 8,
};