import { NavLink } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCounter } from "../hooks/useCounter";

function StatCard({ value, suffix, label, isActive }) {
  const num = useCounter(value, 1500, isActive);
  return (
    <div className="stat-hover flex flex-col items-center px-10 py-6 cursor-default" style={{}}>
      <span className="font-display font-black text-3xl" style={{ color: "var(--wheat)" }}>
        {num}{suffix}
      </span>
      <span className="text-xs mt-1 font-medium text-gray-500">{label}</span>
    </div>
  );
}

function Home() {
  const [heroRef,     heroVisible]     = useScrollAnimation(0.1);
  const [statsRef,    statsVisible]    = useScrollAnimation(0.3);
  const [aboutRef,    aboutVisible]    = useScrollAnimation(0.2);
  const [productsRef, productsVisible] = useScrollAnimation(0.1);
  const [ctaRef,      ctaVisible]      = useScrollAnimation(0.2);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="diagonal-bottom relative flex flex-col justify-center items-center text-center text-white min-h-screen"
        style={{ paddingTop: "90px", position: "relative" }}
      >
        {/* Fixed parallax background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1581587583344-e79475da1ec6?auto=format&fit=crop&w=1800&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(145deg, rgba(22,30,40,0.92) 0%, rgba(34,44,53,0.88) 60%, rgba(54,66,79,0.82) 100%)",
          zIndex: 0,
        }} />
        <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "var(--wheat)", filter: "blur(60px)", zIndex: 0 }} />
        <div className="absolute left-0 bottom-1/4 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{ background: "var(--wheat)", filter: "blur(40px)", zIndex: 0 }} />

        <div ref={heroRef} style={{ position: "relative", zIndex: 1 }}>
          <div className="fade-up flex justify-center mb-6">
            <img src="/logo.png" alt="Orbitron Global LLP"
              className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl" />
          </div>
          <p className="fade-up text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--wheat-light)" }}>
            Indian Agricultural Exports
          </p>
          <h1 className="font-display fade-up-delay-1 text-5xl md:text-7xl font-black leading-tight mb-6"
            style={{ letterSpacing: "-1px" }}>
            Orbitron<br />
            <span style={{ color: "var(--wheat)" }}>Global</span> LLP
          </h1>
          <p className="fade-up-delay-2 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}>
            Connecting Indian farmers with international markets —<br />
            delivering premium rice, wheat, pulses &amp; grains worldwide.
          </p>
          <div className="fade-up-delay-3 flex gap-4 flex-wrap justify-center">
            <NavLink to="/contact"
              className="hover-shine px-8 py-3 rounded-full font-medium text-sm transition-all duration-200"
              style={{ background: "var(--wheat)", color: "var(--slate-dark)" }}>
              Contact Us
            </NavLink>
            <NavLink to="/products"
              className="px-8 py-3 rounded-full font-medium text-sm border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              View Products
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────── */}
      <section ref={statsRef} className="px-6 py-12" style={{ background: "var(--cream)" }}>
        <div className={`reveal flex flex-col sm:flex-row justify-center max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg ${statsVisible ? "visible" : ""}`}
          style={{ background: "white" }}>
          <StatCard value={35} suffix="+" label="Years of Experience in Indian Market" isActive={statsVisible} />
        </div>
      </section>

      {/* ── ABOUT PREVIEW ──────────────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={aboutRef} className={`reveal-left ${aboutVisible ? "visible" : ""}`}>
            <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--wheat)" }}>
              Who We Are
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gold-underline"
              style={{ color: "var(--slate-dark)" }}>
              Rooted in India,<br />Reaching the World
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Orbitron Global LLP is a trusted exporter of high-quality agricultural commodities from India.
              We bridge the gap between Indian farmers and global buyers — ensuring freshness, quality,
              and timely delivery across continents.
            </p>
            <NavLink to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--brown)" }}>
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </NavLink>

          </div>
          <div className={`reveal-right ${aboutVisible ? "visible" : ""} relative hidden md:block`}>
            <div className="w-full h-72 rounded-3xl"
              style={{ background: "linear-gradient(135deg, var(--wheat-light), var(--wheat))", opacity: 0.35 }} />
            <div className="absolute inset-6 rounded-2xl border-2"
              style={{ borderColor: "var(--wheat)", opacity: 0.5 }} />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ fontSize: "80px", opacity: 0.4 }}>🌾</div>
          </div>
        </div>
      </section>

      {/* ── OUR SPECIALTY ──────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--slate-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <div ref={productsRef}>
            <h2 className={`reveal font-display text-4xl font-bold text-center text-white mb-14 ${productsVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}>
              Our <span style={{ color: "var(--wheat)" }}>Specialty</span>
            </h2>
            <NavLink to="/products" className={`block ${productsVisible ? "reveal visible" : "reveal"}`}
              style={{ textDecoration: "none" }}>
              <div className="flex flex-col md:flex-row items-center gap-0 rounded-3xl overflow-hidden cursor-pointer hover-lift"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,169,110,0.2)", transition: "border-color 0.3s ease" }}
                onMouseOver={e => e.currentTarget.style.borderColor = "rgba(200,169,110,0.6)"}
                onMouseOut={e => e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"}>
                <div className="w-full md:w-1/2 h-64 md:h-80 overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
                    alt="Basmati Rice" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="flex-1 p-8 md:p-12">
                  <div className="text-5xl mb-4">🌾</div>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--wheat)" }}>Premium Export</p>
                  <h3 className="font-display text-3xl font-black text-white mb-4">Basmati Rice</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Long-grain aromatic rice from the Himalayan foothills — prized in over 25 countries for its
                    delicate fragrance, fluffy texture and unmatched quality. FSSAI &amp; APEDA certified for safe export.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Basmati 1121", "Parboiled", "IR64 / IR36", "Sona Masoori"].map(v => (
                      <span key={v} className="text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.3)", color: "var(--wheat)" }}>
                        {v}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--wheat)" }}>
                    View All Products
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section ref={ctaRef}
        className={`reveal py-24 px-6 text-center ${ctaVisible ? "visible" : ""}`}
        style={{ background: "linear-gradient(135deg, var(--wheat-light) 0%, var(--cream) 100%)" }}>
        <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--brown)" }}>
          Ready to Source?
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--slate-dark)" }}>
          Let us Build Something<br />Together
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Get in touch for bulk pricing, product specifications, and shipping information.
        </p>
        <NavLink to="/contact"
          className="hover-shine inline-block px-10 py-4 rounded-full font-semibold transition-all"
          style={{ background: "var(--slate-dark)", color: "white" }}>
          Contact Us Today
        </NavLink>
      </section>
    </div>
  );
}

export default Home;  