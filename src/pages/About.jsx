import { useScrollAnimation } from "../hooks/useScrollAnimation";

const values = [
  { icon: "🌱", title: "Farm-to-Port Quality",  desc: "We source directly from trusted Indian farms, ensuring freshness and traceability at every step." },
  { icon: "🤝", title: "Reliable Partnerships", desc: "Long-term relationships with importers, distributors, and food brands across 25+ countries." },
  { icon: "📋", title: "Certified Operations",  desc: "FSSAI, APEDA, and ISO certified — meeting the highest international food safety standards." },
];

function About() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [storyRef,  storyVisible]  = useScrollAnimation(0.2);
  const [valuesRef, valuesVisible] = useScrollAnimation(0.1);

  return (
    <div>
      <section className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #222c35 0%, #36424f 100%)" }}>
        <div ref={headerRef} style={{ position: "relative", zIndex: 1 }}>
          <p className={`reveal text-xs tracking-widest uppercase font-medium mb-3 ${headerVisible ? "visible" : ""}`}
            style={{ color: "var(--wheat)" }}>Our Story</p>
          <h1 className={`reveal font-display text-5xl md:text-6xl font-black text-white mb-6 ${headerVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}>
            About Orbitron<br /><span style={{ color: "var(--wheat)" }}>Global LLP</span>
          </h1>
          <p className={`reveal text-lg max-w-2xl mx-auto leading-relaxed ${headerVisible ? "visible" : ""}`}
            style={{ color: "rgba(255,255,255,0.65)", transitionDelay: "0.3s" }}>
            A dedicated team of agricultural trade professionals, committed to bringing India's finest grains to global tables.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start" ref={storyRef}>
          <div className={`reveal-left ${storyVisible ? "visible" : ""}`}>
            <h2 className="font-display text-3xl font-bold mb-5" style={{ color: "var(--slate-dark)" }}>Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Orbitron Global LLP is an Indian agricultural export company specializing in high-quality rice,
              wheat, pulses, and grains. We operate at the intersection of Indian agriculture and global demand —
              connecting farmers to international buyers with integrity and efficiency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team handles everything from sourcing and quality checks to documentation, packaging,
              and international shipping — offering a seamless, end-to-end export experience.
            </p>
          </div>
          <div className={`reveal-right ${storyVisible ? "visible" : ""}`}>
            <h2 className="font-display text-3xl font-bold mb-5" style={{ color: "var(--slate-dark)" }}>Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To be the most reliable agricultural export partner for global buyers, while empowering
              Indian farmers with fair, consistent market access.
            </p>
            <div className="mt-6 p-6 rounded-2xl"
              style={{ background: "var(--wheat-light)", borderLeft: "4px solid var(--wheat)" }}>
              <p className="font-display text-lg italic font-semibold" style={{ color: "var(--slate-dark)" }}>
                "Quality products, reliable service, great partners."
              </p>
              <p className="text-sm mt-2 text-gray-500">— Our Commitment to Every Client</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto" ref={valuesRef}>
          <p className={`reveal text-xs tracking-widest uppercase font-medium mb-2 text-center ${valuesVisible ? "visible" : ""}`}
            style={{ color: "var(--wheat)" }}>What Drives Us</p>
          <h2 className={`reveal font-display text-4xl font-bold text-center mb-14 ${valuesVisible ? "visible" : ""}`}
            style={{ color: "var(--slate-dark)", transitionDelay: "0.15s" }}>
            Our Core Values
          </h2>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger ${valuesVisible ? "reveal visible" : "reveal"}`}>
            {values.map((v, i) => (
              <div key={i} className="product-card hover-lift hover-glow hover-icon p-8 rounded-2xl bg-white"
                style={{ boxShadow: "0 4px 20px rgba(54,66,79,0.07)" }}>
                <div className="icon text-4xl mb-4 inline-block">{v.icon}</div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--slate-dark)" }}>{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;