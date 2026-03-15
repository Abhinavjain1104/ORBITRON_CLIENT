import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/certificates", label: "Certificates" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed w-full top-0 z-50"
      style={{
        background: scrolled
          ? "rgba(22,30,38,0.96)"
          : "rgba(34,44,53,0.0)",
        backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.18)" : "none",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease, border-bottom 0.4s ease",
        padding: scrolled ? "10px 0" : "16px 0",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Orbitron Global LLP"
            className="w-12 h-12 object-contain"
            style={{ mixBlendMode: "lighten", filter: "drop-shadow(0 0 4px rgba(200,169,110,0.3))" }}
          />
          <div className="text-white leading-tight">
            <div className="font-display font-bold text-lg tracking-wide">Orbitron Global</div>
            <div className="text-xs tracking-widest uppercase" style={{ color: "var(--wheat-light)", opacity: 0.8 }}>
              LLP
            </div>
          </div>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}


        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4" style={{ background: "rgba(34,44,53,0.98)" }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className="text-white text-base font-medium border-b border-white/10 pb-2"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;