import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white/75 pt-16 pb-8" style={{ background: "#222c35" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Orbitron Global LLP"
                className="w-10 h-10 object-contain"
                style={{ mixBlendMode: "lighten" }} />
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Orbitron Global</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "#c8a96e" }}>LLP</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Connecting Indian farmers with international markets — exporting premium rice, wheat, pulses &amp; grains worldwide.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["FSSAI", "APEDA", "ISO"].map(c => (
                <span key={c} className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.3)", color: "#c8a96e" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase" style={{ color: "#c8a96e" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {["/", "/products", "/about", "/certificates", "/contact"].map((path, i) => {
                const labels = ["Home", "Products", "About", "Certificates", "Contact"];
                return (
                  <li key={path} className="flex items-center gap-2">
                    <span style={{ color: "#c8a96e", fontSize: "10px" }}>▸</span>
                    <NavLink to={path} className="hover:text-white transition-colors">{labels[i]}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase" style={{ color: "#c8a96e" }}>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <span style={{ color: "#c8a96e" }}>✆</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919131787501" className="hover:text-white transition-colors">+91 91317 87501</a>
                  <a href="tel:+919202642796" className="hover:text-white transition-colors">+91 92026 42796</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: "#c8a96e" }}>✉</span>
                <a href="mailto:contact@orbitronglobal.com" className="hover:text-white transition-colors">
                  contact@orbitronglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#c8a96e" }}>⊙</span>
                <span>Thakur Baba Road Dabra,<br />Gwalior, Madhya Pradesh — 475110</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-2 text-xs text-white/30">
          <p>© 2025 Orbitron Global LLP. All rights reserved.</p>
          <p>FSSAI · APEDA · ISO 22000:2018 Certified</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;