import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  const inputClass = "w-full p-4 rounded-xl border text-sm outline-none transition-all duration-200 bg-white";
  const inputStyle = { border: "1.5px solid #e0d9cf", fontFamily: "DM Sans, sans-serif" };

  return (
    <div>
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #222c35 0%, #36424f 100%)" }}
      >
        <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--wheat)" }}>
          Get In Touch
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
          Contact <span style={{ color: "var(--wheat)" }}>Us</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
          Reach out for bulk inquiries, product catalogues, or partnership opportunities.
        </p>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--slate-dark)" }}>
              Connect With Us
            </h2>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed">
              Whether you are looking to place a bulk order, discuss pricing, or explore a long-term partnership,
              our team typically responds within 24 hours.
            </p>

            {[
              { icon: "📞", label: "Phone", value: "+91 91317 87501", href: "tel:+919131787501" },
              { icon: "📞", label: "Phone", value: "+91 92026 42796", href: "tel:+919202642796" },
              { icon: "✉️", label: "Email", value: "contact@orbitronglobal.com", href: "mailto:contact@orbitronglobal.com" },
              { icon: "🌐", label: "Website", value: "orbitronglobal.com", href: "https://www.orbitronglobal.com" },
            ].map((c, i) => (
              <a key={i} href={c.href} className="flex items-center gap-4 mb-5 group"
                target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "var(--wheat-light)" }}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{c.label}</div>
                  <div className="text-sm font-medium group-hover:underline" style={{ color: "var(--slate-dark)" }}>
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="mt-10 p-6 rounded-2xl" style={{ background: "var(--wheat-light)" }}>
              <p className="text-sm font-medium mb-3" style={{ color: "var(--slate-dark)" }}>Certifications</p>
              <div className="flex gap-3 flex-wrap">
                {["FSSAI", "APEDA", "ISO"].map(cert => (
                  <span key={cert} className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "var(--wheat)", color: "var(--slate-dark)" }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-3xl"
                style={{ background: "var(--wheat-light)" }}>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--slate-dark)" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <input name="name" placeholder="Your Name *" value={form.name} onChange={handle}
                  required className={inputClass} style={inputStyle} />
                <input name="email" type="email" placeholder="Email Address *" value={form.email}
                  onChange={handle} required className={inputClass} style={inputStyle} />
                <input name="company" placeholder="Company / Country (optional)" value={form.company}
                  onChange={handle} className={inputClass} style={inputStyle} />
                <textarea name="message" placeholder="Your Message or Inquiry *" value={form.message}
                  onChange={handle} required rows={5} className={inputClass}
                  style={{ ...inputStyle, resize: "vertical" }} />
                <button type="submit"
                  className="w-full py-4 rounded-full font-semibold text-sm transition-all duration-200 mt-2"
                  style={{ background: "var(--slate-dark)", color: "white" }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-lg" style={{ border: "1.5px solid #e0d9cf" }}>
          <div className="px-6 py-4 flex items-center gap-3" style={{ background: "var(--slate-dark)" }}>
            <span className="text-lg">📍</span>
            <div>
              <div className="font-semibold text-sm text-white">Our Location</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                Thakur Baba Road, Dabra, Gwalior, Madhya Pradesh 475110
              </div>
            </div>
          </div>
          <iframe
            title="Orbitron Global Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123456789!2d78.3317!3d25.8894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5a9e3e1e1e1%3A0x1234567890abcdef!2sThakur%20Baba%20Rd%2C%20Dabra%2C%20Madhya%20Pradesh%20475110!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;