import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Lightbox({ cert, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
    >
      <div onClick={e => e.stopPropagation()}
        style={{ background: "white", borderRadius: "16px", overflow: "hidden", maxWidth: "700px", width: "100%" }}>
        <div className="flex justify-between items-center px-5 py-3"
          style={{ background: "var(--slate-dark)" }}>
          <span className="font-semibold text-white text-sm">{cert.name}</span>
          <button onClick={onClose} style={{ color: "white", fontSize: "20px", background: "none", border: "none", cursor: "pointer" }}>✕</button>
        </div>
        <img src={cert.image} alt={cert.name} style={{ width: "100%", display: "block" }} />
      </div>
    </div>
  );
}

const certs = [
  {
    name: "FSSAI License",
    image: "/certificates/fssai.jpg",
    full: "License No. 11425995000236",
    badge: "FSSAI",
    color: "#e8f4fd",
    details: [
      { label: "License No.", value: "11425995000236" },
      { label: "Issued", value: "06-05-2025" },
      { label: "Valid Until", value: "05-05-2026" },
      { label: "Authority", value: "FSSAI Mumbai" },
    ],
  },
  {
    name: "APEDA Registration",
    image: "/certificates/apeda.jpeg",
    full: "RCMC/APEDA/16620/2025-2026",
    badge: "APEDA",
    color: "#f0fdf4",
    details: [
      { label: "Reg. No.", value: "RCMC/APEDA/16620/2025-2026" },
      { label: "IEC", value: "AAJFO5236F" },
      { label: "Valid Until", value: "14/04/2030" },
      { label: "Authority", value: "APEDA" },
    ],
  },
  {
    name: "ISO 22000:2018",
    image: "/certificates/iso-1.jpg",
    full: "Cert No. SCC/2505OL/2788",
    badge: "ISO",
    color: "#fdf8f0",
    details: [
      { label: "Cert No.", value: "SCC/2505OL/2788" },
      { label: "Standard", value: "ISO 22000:2018" },
      { label: "Valid Until", value: "20-05-2028" },
      { label: "Body", value: "QFS Management Systems" },
    ],
  },
];

function Certificates() {
  const [lightbox, setLightbox] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [certsRef,  certsVisible]  = useScrollAnimation(0.1);

  return (
    <div>
      {lightbox && <Lightbox cert={lightbox} onClose={() => setLightbox(null)} />}

      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #222c35 0%, #36424f 100%)" }}
      >
        <div ref={headerRef}>
          <p className={`reveal text-xs tracking-widest uppercase font-medium mb-3 ${headerVisible ? "visible" : ""}`}
            style={{ color: "var(--wheat)" }}>
            Compliance and Trust
          </p>
          <h1 className={`reveal font-display text-5xl md:text-6xl font-black text-white mb-4 ${headerVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}>
            Our <span style={{ color: "var(--wheat)" }}>Certifications</span>
          </h1>
          <p className={`reveal text-lg max-w-xl mx-auto ${headerVisible ? "visible" : ""}`}
            style={{ color: "rgba(255,255,255,0.6)", transitionDelay: "0.3s" }}>
            Verified, government-issued certifications for safe and legal international grain exports from India.
          </p>
          <div className={`reveal flex flex-wrap justify-center gap-4 mt-10 ${headerVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.45s" }}>
            {["FSSAI Licensed", "APEDA Registered", "ISO 22000:2018 Certified", "SCC Accredited"].map(badge => (
              <span key={badge} className="text-xs font-bold px-4 py-2 rounded-full"
                style={{ background: "rgba(200,169,110,0.2)", border: "1px solid var(--wheat)", color: "var(--wheat)" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-10 stagger" ref={certsRef}>
          {certs.map((c, i) => (
            <div key={i}
              className={`reveal cert-hover rounded-3xl overflow-hidden ${certsVisible ? "visible" : ""}`}
              style={{ background: "white", boxShadow: "0 4px 24px rgba(54,66,79,0.08)" }}>
              <div className="flex flex-col md:flex-row">
                <div
                  className="relative md:w-64 flex-shrink-0 flex items-center justify-center p-6 cursor-pointer group"
                  style={{ background: c.color, minHeight: "180px" }}
                  onClick={() => setLightbox(c)}
                >
                  <img src={c.image} alt={c.name}
                    className="w-full max-h-40 object-contain rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-3xl"
                    style={{ background: "rgba(0,0,0,0.4)" }}>
                    <span className="text-white text-sm font-semibold">View Full</span>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "var(--wheat)", color: "var(--slate-dark)" }}>
                      {c.badge}
                    </span>
                    <span className="font-display text-xl font-black text-center" style={{ color: "var(--slate-dark)" }}>
                      {c.name}
                    </span>
                  </div>
                  <p className="font-semibold text-sm mb-4" style={{ color: "var(--slate-dark)" }}>{c.full}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {c.details.map((d, di) => (
                      <div key={di} className="rounded-xl p-3"
                        style={{ background: c.color }}>
                        <div className="text-xs text-gray-400 mb-1">{d.label}</div>
                        <div className="text-sm font-semibold" style={{ color: "var(--slate-dark)" }}>{d.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certificates;