const FOOTER_LINKS = {
  Services: [
    { label: "Gestion Immobilière", href: "/services/immobilier" },
    { label: "Location de Véhicules", href: "/services/vehicules" },
    { label: "Logistique", href: "/services/logistique" },
    { label: "Sécurité", href: "/services/securite" },
    { label: "Mise à disposition", href: "/services/personnel" },
    { label: "Technologie Industrielle", href: "/services/technologie" },
  ],
  Navigation: [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Projets réalisés", href: "/projets" },
    { label: "Demander un devis", href: "/devis" },
    { label: "Contact", href: "/contact" },
  ],
};

function GordonLogoFooter() {
  return (
    <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="fCircle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A75E" />
          <stop offset="100%" stopColor="#9AA3AD" />
        </linearGradient>
        <linearGradient id="fLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4AADE0" />
          <stop offset="100%" stopColor="#1B4F6B" />
        </linearGradient>
        <linearGradient id="fRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E8BB8" />
          <stop offset="100%" stopColor="#0F2F44" />
        </linearGradient>
      </defs>
      <path d="M10 70 A45 45 0 1 1 90 70" stroke="url(#fCircle)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polygon points="50,15 20,72 50,72" fill="url(#fLeft)" />
      <polygon points="50,15 80,72 50,72" fill="url(#fRight)" />
      {[0.28, 0.42, 0.56, 0.70, 0.84].map((t, i) => {
        const y = 15 + t * 57; const hw = t * 30;
        return <line key={i} x1={50 - hw} y1={y} x2={50 + hw} y2={y} stroke="white" strokeWidth="1.6" strokeOpacity="0.5" />;
      })}
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#071E2E", fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── Corps du footer ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Identité */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start gap-2 mb-6">
              <GordonLogoFooter />
              <span className="font-bold text-white uppercase tracking-widest" style={{ fontSize: "13px", letterSpacing: "0.18em" }}>
                Gordon - Services
              </span>
              <span style={{ height: "1.5px", width: "100%", background: "linear-gradient(90deg, #C8A75E, transparent)", display: "block" }} />
            </div>

            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: "20px" }}>
              Votre partenaire multiservices stratégique en République du Congo. Expertise, fiabilité et standards internationaux.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61554545106689", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(200,167,94,0.1)",
                    border: "1px solid rgba(200,167,94,0.2)",
                    color: "#C8A75E",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,167,94,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,167,94,0.1)"; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="mb-5 uppercase tracking-wider" style={{ fontSize: "11px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.18em" }}>
              Nos Services
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.Services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A75E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    <span style={{ width: "12px", height: "1px", background: "#C8A75E", display: "inline-block", flexShrink: 0 }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h4 className="mb-5 uppercase tracking-wider" style={{ fontSize: "11px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.18em" }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.Navigation.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A75E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    <span style={{ width: "12px", height: "1px", background: "#C8A75E", display: "inline-block", flexShrink: 0 }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="mb-5 uppercase tracking-wider" style={{ fontSize: "11px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.18em" }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              {[
                {
                  icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />,
                  text: "Brazzaville, République du Congo",
                },
                {
                  icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />,
                  text: "+242 06 133 1010",
                  href: "tel:+242061331010",
                },
                {
                  icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
                  text: "gordonservices.cg@gmail.com",
                  href: "mailto:gordonservices.cg@gmail.com",
                },
              ].map(({ icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-[2px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                  {href ? (
                    <a href={href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A75E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Liseré doré séparateur ── */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,167,94,0.25) 20%, rgba(200,167,94,0.25) 80%, transparent)" }} />

      {/* ── Bas du footer ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col items-center justify-center gap-3 text-center">
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
          © {year} Gordon - Services SARLU. Tous droits réservés.
        </span>
        <div className="flex gap-6">
          {["Mentions légales", "Politique de confidentialité"].map((label) => (
            <a
              key={label}
              href="#"
              style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A75E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}