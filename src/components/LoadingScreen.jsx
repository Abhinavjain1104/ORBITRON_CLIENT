import { useEffect, useState } from "react";

// This component shows a loading screen the first time the user visits.
// It uses sessionStorage so it only shows once per browser session.
function LoadingScreen() {

  // Check if user already saw the loading screen this session
  const alreadySeen = sessionStorage.getItem("loadingSeen");

  // phase: "visible" → "fadeout" → "gone"
  const [phase, setPhase] = useState(alreadySeen ? "gone" : "visible");

  // progress: 0 to 100, used for the loading bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If already seen, skip everything
    if (alreadySeen) return;

    // Mark as seen so it won't show again this session
    sessionStorage.setItem("loadingSeen", "true");

    // Animate the progress bar from 0 to 100
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 4 + 1; // increase by a random amount each tick
      if (current >= 100) {
        current = 100;
        clearInterval(interval); // stop once we reach 100
      }
      setProgress(Math.floor(current));
    }, 40);

    // After 3 seconds, start fading out
    const t1 = setTimeout(() => setPhase("fadeout"), 3000);

    // After 3.8 seconds, fully hide the screen
    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setPhase("gone");
    }, 3800);

    // Cleanup timers if the component unmounts early
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  // Don't render anything if screen is done
  if (phase === "gone") return null;

  const isFading = phase === "fadeout";

  // Shared style for "Orbitron" and "Global LLP" text
  const companyNameStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(20px, 3.5vw, 30px)",
    fontWeight: 700,
    letterSpacing: "8px",
    textTransform: "uppercase",
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(160deg, #0d1519 0%, #1a262f 50%, #222c35 100%)",
      opacity: isFading ? 0 : 1,
      pointerEvents: isFading ? "none" : "all",
      transition: "opacity 0.8s ease",
    }}>

      {/* Faint gold grid in the background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Soft glow in top-left corner */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "250px", height: "250px",
        background: "radial-gradient(circle at top left, rgba(200,169,110,0.07), transparent 70%)",
      }} />

      {/* Soft glow in bottom-right corner */}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: "250px", height: "250px",
        background: "radial-gradient(circle at bottom right, rgba(200,169,110,0.07), transparent 70%)",
      }} />

      {/* Centre content: logo, name, tagline, progress bar */}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
      }}>

        {/* Logo with a pop-in animation */}
        <div style={{ animation: "logoReveal 0.8s ease forwards" }}>
          <img
            src="/logo.png"
            alt="Orbitron Global LLP"
            style={{
              width: "160px",
              height: "160px",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 24px rgba(200,169,110,0.3))",
            }}
          />
        </div>

        {/* Thin vertical gold line */}
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.5), transparent)",
          animation: "fadeIn 0.6s 0.5s ease both",
        }} />

        {/* Company name */}
        <div style={{ textAlign: "center", animation: "fadeIn 0.6s 0.4s ease both" }}>
          <div style={{ ...companyNameStyle, color: "white" }}>Orbitron</div>
          <div style={{ ...companyNameStyle, color: "#c8a96e", marginTop: "2px" }}>Global LLP</div>

          {/* Thin horizontal gold line under the name */}
          <div style={{
            width: "100%",
            height: "1px",
            marginTop: "16px",
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

        {/* Loading bar */}
        <div style={{ width: "200px", animation: "fadeIn 0.6s 0.9s ease both" }}>

          {/* Bar track (the grey background) */}
          <div style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "1px",
            overflow: "hidden",
          }}>
            {/* Bar fill, width driven by progress state */}
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #8b6b4c, #c8a96e, #e8d5b0)",
              transition: "width 0.1s ease",
              boxShadow: "0 0 6px rgba(200,169,110,0.5)",
            }} />
          </div>

          {/* Percentage label */}
          <div style={{
            textAlign: "right",
            marginTop: "6px",
            fontSize: "10px",
            color: "rgba(200,169,110,0.5)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "2px",
          }}>
            {progress}%
          </div>
        </div>
      </div>

      {/* Certifications at the bottom */}
      <div style={{
        position: "absolute",
        bottom: "28px",
        fontSize: "9px",
        color: "rgba(255,255,255,0.15)",
        letterSpacing: "4px",
        textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif",
        animation: "fadeIn 0.6s 1s ease both",
      }}>
        FSSAI · APEDA · ISO 22000:2018
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes logoReveal {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
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