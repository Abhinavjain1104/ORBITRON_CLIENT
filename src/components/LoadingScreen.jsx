import { useEffect, useState } from "react";

function LoadingScreen() {
  const alreadySeen = sessionStorage.getItem("loadingSeen");
  const [phase, setPhase] = useState(alreadySeen ? "gone" : "visible");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (alreadySeen) return;

    sessionStorage.setItem("loadingSeen", "true");

    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 4 + 1;
      if (current >= 100) { current = 100; clearInterval(interval); }
      setProgress(Math.floor(current));
    }, 40);

    const t1 = setTimeout(() => setPhase("fadeout"), 3000);
    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setPhase("gone");
    }, 3800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval); };
  }, []);

  if (phase === "gone") return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "linear-gradient(160deg, #0d1519 0%, #1a262f 50%, #222c35 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
      opacity: phase === "fadeout" ? 0 : 1,
      pointerEvents: phase === "fadeout" ? "none" : "all",
      overflow: "hidden",
    }}>

      {/* Subtle grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Corner glows */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "250px", height: "250px",
        background: "radial-gradient(circle at top left, rgba(200,169,110,0.07), transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "250px", height: "250px",
        background: "radial-gradient(circle at bottom right, rgba(200,169,110,0.07), transparent 70%)" }} />

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", position: "relative" }}>

        {/* Logo — clean, no rings */}
        <div style={{ animation: "logoReveal 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
          <img
            src="/logo.png"
            alt="Orbitron Global LLP"
            style={{
              width: "160px", height: "160px",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 24px rgba(200,169,110,0.3))",
            }}
          />
        </div>

        {/* Divider line */}
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.5), transparent)",
          animation: "fadeIn 0.6s 0.5s ease both",
        }} />

        {/* Company name */}
        <div style={{ textAlign: "center", animation: "fadeIn 0.6s 0.4s ease both" }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(20px, 3.5vw, 30px)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "8px",
            textTransform: "uppercase",
          }}>
            Orbitron
          </div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(20px, 3.5vw, 30px)",
            fontWeight: 700,
            color: "#c8a96e",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginTop: "2px",
          }}>
            Global LLP
          </div>

          {/* Horizontal gold line under name */}
          <div style={{
            width: "100%", height: "1px", marginTop: "16px",
            background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.6), transparent)",
          }} />
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "4px",
          textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
          animation: "fadeIn 0.6s 0.7s ease both",
        }}>
          From India · To The World
        </div>

        {/* Progress bar */}
        <div style={{ width: "200px", animation: "fadeIn 0.6s 0.9s ease both" }}>
          <div style={{
            width: "100%", height: "1px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "1px", overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #8b6b4c, #c8a96e, #e8d5b0)",
              transition: "width 0.1s ease",
              boxShadow: "0 0 6px rgba(200,169,110,0.5)",
            }} />
          </div>
          <div style={{
            textAlign: "right", marginTop: "6px",
            fontSize: "10px", color: "rgba(200,169,110,0.5)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "2px",
          }}>
            {progress}%
          </div>
        </div>
      </div>

      {/* Bottom certifications */}
      <div style={{
        position: "absolute", bottom: "28px",
        fontSize: "9px", color: "rgba(255,255,255,0.15)",
        letterSpacing: "4px", textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif",
        animation: "fadeIn 0.6s 1s ease both",
      }}>
        FSSAI · APEDA · ISO 22000:2018
      </div>

      <style>{`
        @keyframes logoReveal {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;