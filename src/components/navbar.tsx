import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Accueil",  to: "/"         },
  { label: "Services", to: "/services" },
  { label: "Projets",  to: "/projets"  },
  { label: "À Propos", to: "/a-propos" },
  { label: "Contact",  to: "/contact"  },
  { label: "Devis",  to: "/devis"  },
] as const;

// ─── Hamburger ────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      <span className="block h-[2px] w-[22px] bg-white rounded transition-all duration-300 origin-center"
        style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
      <span className="block h-[2px] w-[22px] bg-white rounded transition-all duration-300"
        style={{ opacity: open ? 0 : 1 }} />
      <span className="block h-[2px] w-[22px] bg-white rounded transition-all duration-300 origin-center"
        style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
        style={{
          background: "#0F2F44",
          boxShadow: scrolled ? "0 4px 24px rgba(15,47,68,0.5)" : "none",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[78px] gap-4">

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex flex-col flex-shrink-0 gap-[3px]"
              style={{ textDecoration: "none", minWidth: 0 }}
            >
              <div className="flex flex-row items-center gap-3">
                {/* Logo image */}
                <img
                  src="/logo.png"
                  alt="Logo Gordon"
                  className="flex-shrink-0"
                  style={{ width: "52px", height: "52px", objectFit: "contain" }}
                />

                {/* Titre — 2 lignes sur mobile, 1 ligne sur desktop */}
                <div className="flex flex-col leading-none min-w-0">
                  {/* Desktop */}
                  <span
                    className="text-white font-bold uppercase hidden md:block"
                    style={{ fontSize: "16px", letterSpacing: "0.16em", whiteSpace: "nowrap" }}
                  >
                    Gordon - Services
                  </span>
                  {/* Mobile : 2 lignes empilées */}
                  <span
                    className="text-white font-bold uppercase md:hidden"
                    style={{ fontSize: "11px", letterSpacing: "0.12em", lineHeight: 1.4 }}
                  >
                    GORDON
                  </span>
                  <span
                    className="font-bold uppercase md:hidden"
                    style={{ fontSize: "11px", letterSpacing: "0.12em", lineHeight: 1.4, color: "#C8A75E" }}
                  >
                    SERVICES
                  </span>
                </div>
              </div>

              {/* Liseré doré sous le logo */}
              <span
                className="block"
                style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C8A75E, transparent)" }}
              />
            </Link>

            {/* ── Nav desktop ── */}
            <nav className="hidden md:flex items-center gap-0 flex-shrink-0">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className="relative px-3 lg:px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 cursor-pointer group"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.68)",
                    background: "none",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
                        style={{
                          height: "2px",
                          width: isActive ? "65%" : "0%",
                          background: "linear-gradient(90deg, #C8A75E, #D6C28A)",
                          display: "block",
                        }}
                      />
                      {!isActive && (
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full w-0 group-hover:w-[55%] transition-all duration-300"
                          style={{
                            height: "1.5px",
                            background: "rgba(200,167,94,0.45)",
                            display: "block",
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ── Hamburger mobile ── */}
            <button
              className="md:hidden p-2 cursor-pointer flex-shrink-0"
              style={{ background: "none", border: "none" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Liseré doré */}
        <div
          className="h-[1.5px] w-full"
          style={{ background: "linear-gradient(90deg, transparent, #C8A75E 20%, #D6C28A 50%, #C8A75E 80%, transparent)" }}
        />

        {/* ── Menu mobile ── */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "420px" : "0", background: "#0F2F44" }}
        >
          <div className="px-6 py-3 flex flex-col">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                style={({ isActive }) => ({
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.68)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(200,167,94,0.12)",
                  padding: "14px 0",
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span style={{ width: "24px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px", display: "block" }} />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            
          </div>
        </div>
      </header>
    </>
  );
}