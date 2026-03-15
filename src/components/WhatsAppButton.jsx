
import { useState, useEffect } from "react";

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="https://wa.me/919202642796"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 1000,
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease",
        transform: visible ? "scale(1)" : "scale(0)",
        opacity: visible ? 1 : 0,
        cursor: "pointer",
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.6)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      {/* Pulse ring */}
      <span style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        background: "rgba(37,211,102,0.4)",
        animation: "waPulse 2s ease-out infinite",
      }} />

      {/* WhatsApp SVG icon */}
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", zIndex: 1 }}>
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.802A11.934 11.934 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="white"/>
        <path d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="#25D366"/>
      </svg>

      {/* Tooltip */}
      {showTooltip && (
        <div style={{
          position: "absolute",
          right: "70px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#222c35",
          color: "white",
          fontSize: "12px",
          fontFamily: "'DM Sans', sans-serif",
          padding: "6px 12px",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          pointerEvents: "none",
        }}>
          Chat with us on WhatsApp
          {/* Arrow */}
          <span style={{
            position: "absolute",
            right: "-6px",
            top: "50%",
            transform: "translateY(-50%)",
            width: 0, height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "6px solid #222c35",
          }} />
        </div>
      )}

      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </a>
  );
}

export default WhatsAppButton;