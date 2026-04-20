"use client";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617, #07152d, #0b1120)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "60px"
      }}>
        <div style={{
          display: "flex",
          gap: "20px",
          padding: "10px 20px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <span>About</span>
          <span>Projects</span>
          <span>Certificates</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1100px",
        margin: "0 auto",
        gap: "40px"
      }}>

        {/* LEFT */}
        <div style={{ maxWidth: "500px" }}>
          <p style={{ color: "#aaa" }}>Hello, I'm</p>

          <h1 style={{
            fontSize: "60px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #60a5fa, #facc15)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}>
            MG HERNANDEZ
          </h1>

          <h2 style={{ color: "#facc15", marginTop: "10px" }}>
            Frontend Developer
          </h2>

          <p style={{ color: "#aaa", marginTop: "15px" }}>
            Even if my vision isn’t always clear, my goals are. I push myself to learn,
            improve, and build impactful web applications.
          </p>

          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button style={{
              padding: "10px 20px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "white",
              borderRadius: "8px"
            }}>
              View Work
            </button>

            <button style={{
              padding: "10px 20px",
              background: "linear-gradient(to right, #facc15, #fb923c)",
              color: "black",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold"
            }}>
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div style={{
          padding: "10px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <img
            src="/profile.png"
            style={{
              width: "300px",
              borderRadius: "15px"
            }}
          />
        </div>

      </div>
    </main>
  );
}