import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const basmatiItems = [
  {
    name: "1121 Sella Rice",
    img: "/rice/1121_sella.png",
    desc: "Premium parboiled long-grain basmati with golden hue — top export variety.",
    grain: "Extra Long Grain (8.35mm+)",
    type: "Parboiled (Sella)",
    aroma: "Mild to Medium",
    moisture: "≤ 13%",
    brokenGrain: "≤ 1%",
    color: "Golden Yellow",
    markets: "Middle East, Europe, USA",
    uses: "Biryani, Pilaf, Special occasion rice dishes",
    detail:
      "1121 Sella Rice is one of the most exported Indian basmati varieties. After harvesting, it undergoes a parboiling process that gives it a characteristic golden hue and enhances its nutritional profile. The grain stays firm, non-sticky, and elongates beautifully upon cooking — making it ideal for authentic biryani and pilaf recipes.",
  },
  {
    name: "1121 Steam Rice",
    img: "/rice/1121_steam.png",
    desc: "Steam-processed 1121 basmati, white & fluffy with extra-long grain.",
    grain: "Extra Long Grain (8.35mm+)",
    type: "Steam (Raw)",
    aroma: "Strong",
    moisture: "≤ 13%",
    brokenGrain: "≤ 1%",
    color: "Creamy White",
    markets: "Middle East, UK, North America",
    uses: "Everyday cooking, restaurant-grade rice",
    detail:
      "1121 Steam Rice retains the natural white colour of the basmati grain by skipping the parboiling step. Steam processing preserves its strong aroma and results in a fluffy, separate-grain texture after cooking. Widely preferred in restaurants and hotels globally for its premium look and taste.",
  },
  {
    name: "1121 Golden Sella",
    img: "/rice/1121_golden_sella.png",
    desc: "Golden parboiled 1121 basmati — rich colour, firm texture, high demand.",
    grain: "Extra Long Grain (8.35mm+)",
    type: "Parboiled (Golden Sella)",
    aroma: "Mild",
    moisture: "≤ 13%",
    brokenGrain: "≤ 1%",
    color: "Rich Golden",
    markets: "Middle East, Africa",
    uses: "Biryani, large-scale catering, bulk cooking",
    detail:
      "1121 Golden Sella is a double-parboiled variant that develops an intense golden colour and an exceptionally firm texture. It has an excellent shelf life and is ideal for institutional catering, hotels, and large-scale food service operations where consistency is critical.",
  },
  {
    name: "1509 Sella Rice",
    img: "/rice/1509_sella.png",
    desc: "Aromatic parboiled 1509 basmati, popular in Middle East & Europe.",
    grain: "Long Grain (7.90mm+)",
    type: "Parboiled (Sella)",
    aroma: "Medium to Strong",
    moisture: "≤ 13%",
    brokenGrain: "≤ 2%",
    color: "Light Golden",
    markets: "Middle East, Europe, Australia",
    uses: "Biryani, fried rice, pulao",
    detail:
      "1509 Sella is a newer basmati variety rapidly gaining popularity. It is comparable to 1121 in aroma but matures faster, making it more available and cost-competitive. Its parboiled form ensures nutritional retention and a consistent golden tint loved by importers worldwide.",
  },
  {
    name: "1509 Steam Rice",
    img: "/rice/1509_steam.png",
    desc: "Steam-processed 1509 basmati, bright white grain with mild aroma.",
    grain: "Long Grain (7.90mm+)",
    type: "Steam (Raw)",
    aroma: "Mild to Medium",
    moisture: "≤ 13%",
    brokenGrain: "≤ 2%",
    color: "Bright White",
    markets: "Europe, Middle East, South Asia",
    uses: "Daily cooking, restaurants, retail packs",
    detail:
      "1509 Steam Rice offers the bright white appearance of raw basmati with the mild aroma characteristic of the 1509 variety. After cooking, the grain elongates significantly and remains non-sticky — perfect for retail packaging and home cooking segments.",
  },
  {
    name: "1509 Golden Sella",
    img: "/rice/1509_golden_sella.png",
    desc: "Golden parboiled 1509 variety — excellent cooking quality & shelf life.",
    grain: "Long Grain (7.90mm+)",
    type: "Parboiled (Golden Sella)",
    aroma: "Mild",
    moisture: "≤ 13%",
    brokenGrain: "≤ 2%",
    color: "Rich Golden",
    markets: "Africa, Middle East",
    uses: "Large-scale cooking, export bulk packs",
    detail:
      "1509 Golden Sella bridges affordability and quality. The double-parboiling process locks in nutrients and gives it a rich golden appearance. It is highly durable during transport, making it a top choice for bulk export to African and Gulf markets.",
  },
  {
    name: "Sugandha Sella Rice",
    img: "/rice/sugandha_sella.png",
    desc: "Medium-grain aromatic sella basmati — cost-effective export choice.",
    grain: "Medium-Long Grain",
    type: "Parboiled (Sella)",
    aroma: "Strong (Distinctive Fragrance)",
    moisture: "≤ 13%",
    brokenGrain: "≤ 2%",
    color: "Light Golden",
    markets: "Middle East, Africa, South Asia",
    uses: "Biryani, pilaf, festive rice dishes",
    detail:
      "Sugandha rice is known for its distinctive strong fragrance — the name literally means 'pleasant smell' in Hindi. Though medium-grain compared to 1121, it is highly aromatic and is a popular budget-friendly alternative to premium basmati, especially in the Middle East and African export markets.",
  },
  {
    name: "IR64 Raw Rice",
    img: "/rice/ir64_raw.png",
    desc: "Non-basmati long-grain raw rice — widely exported to Africa & Asia.",
    grain: "Long Grain",
    type: "Raw (Non-Basmati)",
    aroma: "Mild",
    moisture: "≤ 14%",
    brokenGrain: "≤ 5%",
    color: "White",
    markets: "Africa, Asia, Middle East",
    uses: "Everyday staple cooking",
    detail:
      "IR64 is a high-yielding non-basmati variety that forms the backbone of India's rice exports to Africa and Southeast Asia. Its raw white form is clean, long-grained, and cooks into soft, slightly sticky rice — a preferred texture in many African and Asian cuisines.",
  },
  {
    name: "IR64 Sella Rice",
    img: "/rice/ir64_sella.png",
    desc: "Parboiled IR64, nutrient-rich with firm texture after cooking.",
    grain: "Long Grain",
    type: "Parboiled (Sella)",
    aroma: "Mild",
    moisture: "≤ 14%",
    brokenGrain: "≤ 5%",
    color: "Light Golden",
    markets: "Africa, Middle East",
    uses: "Bulk institutional cooking, staple food supply",
    detail:
      "IR64 Sella adds nutritional value to the IR64 variety through the parboiling process. The resulting grain is firmer, less sticky, and has a longer shelf life — important for long-distance export. A staple in many African national food supply programs.",
  },
  {
    name: "Kranti Raw Rounded Rice",
    img: "/rice/kranti_rounded.png",
    desc: "Short rounded grain variety — popular in South Asian local markets.",
    grain: "Short / Rounded Grain",
    type: "Raw",
    aroma: "Mild",
    moisture: "≤ 14%",
    brokenGrain: "≤ 5%",
    color: "White",
    markets: "South Asia, domestic markets",
    uses: "Idli, dosa batter, kheer, local rice dishes",
    detail:
      "Kranti is a short-grain rounded rice variety popular in South India and certain export markets that prefer a stickier texture. Its shape and starch content make it ideal for traditional dishes like idli and kheer. Also known for its affordability and consistent yield.",
  },
  {
    name: "Raw Broken Rice",
    img: "/rice/raw_broken.png",
    desc: "Economical broken raw rice — used in brewing, food processing & feed.",
    grain: "Broken Grain (< 3/4 of full grain)",
    type: "Raw Broken",
    aroma: "None",
    moisture: "≤ 14%",
    brokenGrain: "100% broken",
    color: "White",
    markets: "Africa, Brewing Industry, Animal Feed",
    uses: "Beer brewing, rice flour, animal feed, food processing",
    detail:
      "Raw Broken Rice is a by-product of the milling process where grains are broken during husking. While not suitable for table rice, it is in high demand for rice flour production, beer and rice wine brewing, as animal feed, and in processed food manufacturing — making it a commercially valuable commodity.",
  },
  {
    name: "Sella Broken Rice",
    img: "/rice/sella_broken.png",
    desc: "Parboiled broken rice — high in demand for budget-conscious markets.",
    grain: "Broken Grain (parboiled)",
    type: "Parboiled Broken",
    aroma: "None",
    moisture: "≤ 14%",
    brokenGrain: "100% broken",
    color: "Golden / Creamy",
    markets: "Africa, Food Processing Industry",
    uses: "Budget rice meals, food processing, industrial starch",
    detail:
      "Sella Broken Rice combines the nutritional benefits of parboiling with the affordability of broken-grain rice. It is widely used in budget food programs, school meal schemes across Africa, and also in food processing for starch extraction. Its longer shelf life post-parboiling gives it an edge over raw broken rice.",
  },
];

const ACCENT = "#c8b89a";

function DetailPanel({ item, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [item]);

  if (!item) return null;

  const specs = [
    { label: "Grain Length", value: item.grain },
    { label: "Processing Type", value: item.type },
    { label: "Aroma", value: item.aroma },
    { label: "Moisture", value: item.moisture },
    { label: "Broken Grain", value: item.brokenGrain },
    { label: "Colour", value: item.color },
  ];

  return (
    <div
      ref={panelRef}
      className="mt-6 rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #222c35 0%, #2d3a45 100%)",
        boxShadow: "0 8px 40px rgba(54,66,79,0.18)",
        animation: "fadeSlideIn 0.35s ease",
      }}
    >
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-start justify-between px-8 pt-8 pb-4">
        <div>
          <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: ACCENT }}>
            Basmati Rice
          </p>
          <h2 className="font-display text-3xl font-black text-white">{item.name}</h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-6 mt-1 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div className="px-8 pb-8 grid md:grid-cols-2 gap-8">
        {/* About */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
            About
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            {item.detail}
          </p>
          <div className="mt-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
              Key Markets
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{item.markets}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
              Common Uses
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{item.uses}</p>
          </div>
        </div>

        {/* Specs */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
            Specifications
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {specs.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.label}
                </span>
                <span className="text-sm font-semibold text-white">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [selected, setSelected] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);

  const handleSelect = (item) => {
    setSelected((prev) => (prev?.name === item.name ? null : item));
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #222c35 0%, #36424f 100%)" }}
      >
        <div ref={headerRef}>
          <p
            className={`reveal text-xs tracking-widest uppercase font-medium mb-3 ${headerVisible ? "visible" : ""}`}
            style={{ color: "var(--wheat)" }}
          >
            What We Offer
          </p>
          <h1
            className={`reveal font-display text-5xl md:text-6xl font-black text-white mb-4 ${headerVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            Our <span style={{ color: "var(--wheat)" }}>Products</span>
          </h1>
          <p
            className={`reveal text-lg max-w-xl mx-auto ${headerVisible ? "visible" : ""}`}
            style={{ color: "rgba(255,255,255,0.6)", transitionDelay: "0.3s" }}
          >
            Premium Indian agricultural commodities — sourced, quality-checked, and shipped worldwide.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-3xl">🌾</span>
          <h2 className="font-display text-3xl font-bold" style={{ color: "var(--slate-dark)" }}>
            Basmati Rice
          </h2>
          <div className="flex-1 h-px ml-4" style={{ background: "rgba(54,66,79,0.1)" }} />
        </div>

        <p className="text-sm mb-8 -mt-4" style={{ color: "rgba(54,66,79,0.5)" }}>
          Click on any variety to view detailed specifications.
        </p>

        {/* Cards */}
        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger ${gridVisible ? "reveal visible" : "reveal"}`}
        >
          {basmatiItems.map((item, i) => {
            const isActive = selected?.name === item.name;
            return (
              <div
                key={i}
                onClick={() => handleSelect(item)}
                className="product-card hover-lift hover-glow rounded-2xl cursor-pointer select-none transition-all overflow-hidden"
                style={{
                  background: isActive ? "#222c35" : "white",
                  boxShadow: isActive
                    ? "0 8px 32px rgba(54,66,79,0.22)"
                    : "0 2px 16px rgba(54,66,79,0.07)",
                  borderTop: `3px solid ${ACCENT}`,
                  transform: isActive ? "scale(1.02)" : undefined,
                }}
              >
                {/* Product Image */}
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                {/* Card Content */}
                <div className="p-5">
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: isActive ? "white" : "var(--slate-dark)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isActive ? "rgba(255,255,255,0.6)" : "#6b7280" }}
                  >
                    {item.desc}
                  </p>
                  <p
                    className="text-xs mt-3 font-medium"
                    style={{ color: ACCENT }}
                  >
                    {isActive ? "▲ Hide details" : "▼ View details"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Panel */}
        <DetailPanel item={selected} onClose={() => setSelected(null)} />
      </section>

      {/* Contact CTA */}
      <section
        ref={ctaRef}
        className={`reveal py-20 px-6 ${ctaVisible ? "visible" : ""}`}
        style={{ background: "var(--slate-dark)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--wheat)" }}>
            Get In Touch
          </p>
          <h2 className="font-display text-4xl font-black text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-lg mb-12" style={{ color: "rgba(255,255,255,0.6)" }}>
            Contact us for pricing, specifications, samples, or any bulk enquiry.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {/* Phone */}
            <div className="rounded-2xl p-6 text-left" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-2xl mb-3">📞</div>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: "var(--wheat)" }}>Phone</p>
              <p className="text-white font-semibold text-sm">+91 91317 87501</p>
              <p className="text-white font-semibold text-sm">+91 92026 42796</p>
            </div>
            {/* Email */}
            <div className="rounded-2xl p-6 text-left" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-2xl mb-3">✉️</div>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: "var(--wheat)" }}>Email</p>
              <p className="text-white font-semibold text-sm">contact@orbitronglobal.com</p>
            </div>
            {/* WhatsApp */}
            <div className="rounded-2xl p-6 text-left" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-2xl mb-3">💬</div>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: "var(--wheat)" }}>WhatsApp</p>
              <p className="text-white font-semibold text-sm">Available for quick queries</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>+91 92026 42796</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:contact@orbitronglobal.com"
              className="hover-shine inline-block px-10 py-4 rounded-full font-semibold transition-all"
              style={{ background: "var(--wheat)", color: "var(--slate-dark)" }}
            >
              Send Us an Email
            </a>
            <a
              href="https://wa.me/919202642796"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold transition-all"
              style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;