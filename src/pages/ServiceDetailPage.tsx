import { useParams, Navigate, Link } from "react-router-dom";
import { SERVICES_MAP, SERVICES_DATA } from "../data/mock";

// ─── Icônes SVG (une par slug) ────────────────────────────────────────
// Pour ajouter un service : ajouter l'icône ici avec le même slug comme clé
const ICONS: Record<string, React.ReactNode> = {
  immobilier: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  vehicules: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  logistique: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  securite: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  personnel: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  technologie: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  ),
  hotellerie: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M2 20V8l8-6 8 6v12" />
      <path d="M9 20v-5h6v5" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="13" y="9" width="2" height="2" />
    </svg>
  ),
  "espaces-verts": (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7z" />
      <path d="M12 17c0 0-4-2-4-5" />
      <path d="M12 17c0 0 4-2 4-5" />
      <path d="M5 22h14" />
    </svg>
  ),
  plantation: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22h20" />
      <path d="M12 22V11" />
      <path d="M12 11C10 9 6 7 6 4c0-1.7 1.3-3 3-3 1.4 0 2.6.8 3 2 .4-1.2 1.6-2 3-2 1.7 0 3 1.3 3 3 0 3-4 5-6 7z" />
      <path d="M7 22c0-4 2-7 5-8" />
    </svg>
  ),
};

// ─── Page Détail Service ──────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES_MAP[slug] : null;

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const prev = SERVICES_DATA[(currentIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const next = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];
  const icon = ICONS[service.slug];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: service.color, minHeight: "380px", display: "flex", alignItems: "flex-end" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.08)" }} />
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "280px", height: "280px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,0,0,0.15) 0%, transparent 70%)" }} />
          <span className="absolute bottom-0 right-10 font-bold select-none leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "200px", color: "rgba(255,255,255,0.05)", lineHeight: 0.85 }}>
            {service.numero}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-14 mt-15">
          

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 hidden sm:flex items-center justify-center"
              style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
             <img src={service.logo} alt={service.titre}/>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
                  Pôle {service.numero}
                </span>
              </div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "10px" }}>
                {service.titre}
              </h1>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.65)" }}>
                {service.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>

      {/* ══════════════════════════════════════════════
          BANNIÈRE IMAGE
      ══════════════════════════════════════════════ */}
      {service.image && (
        <div
          style={{
            width: "100%",
            height: "clamp(220px, 30vw, 420px)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={service.image}
            alt={service.titre}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          {/* Fondu bas vers le fond de la page */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: "80px", background: "linear-gradient(to bottom, transparent, #F7F8FA)" }}
          />
        </div>
      )}

      {/* ══════════════════════════════════════════════
          CORPS
      ══════════════════════════════════════════════ */}
      <main style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Contenu principal (2/3) ── */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "#3A4A5C", lineHeight: 1.85, marginBottom: "20px", fontWeight: 500 }}>
                  {service.accroche}
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14.5px", color: "#5A6472", lineHeight: 1.8 }}>
                  {service.pourquoi}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span style={{ width: "28px", height: "1.5px", background: "#C8A75E", display: "block" }} />
                  <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    Nos prestations
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.prestations.map(({ titre, desc }) => (
                    <div key={titre} className="flex flex-col gap-3 p-6 transition-all duration-200"
                      style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.12)", borderTop: `3px solid ${service.color}` }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(15,47,68,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C8A75E", flexShrink: 0, display: "block" }} />
                        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 700, color: "#0F2F44" }}>{titre}</h3>
                      </div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#5A6472", lineHeight: 1.7 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar (1/3) ── */}
            <div className="flex flex-col gap-6">
              {/* Pourquoi Gordon */}
              <div style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.12)" }}>
                <div className="px-6 py-4" style={{ background: service.color, borderBottom: "2px solid #C8A75E" }}>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Pourquoi Gordon Services ?
                  </h3>
                </div>
                <ul className="flex flex-col px-6 py-5 gap-3">
                  {service.avantages.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#3A4A5C", lineHeight: 1.5 }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clients types */}
              <div style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.12)" }}>
                <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(200,167,94,0.12)" }}>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#0F2F44", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Clients types
                  </h3>
                </div>
                <ul className="flex flex-col px-6 py-5 gap-3">
                  {service.clients.map((c) => (
                    <li key={c} className="flex items-center gap-3">
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A75E", flexShrink: 0, display: "block" }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#5A6472" }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-4 p-6" style={{ background: "#0F2F44", border: "1px solid rgba(200,167,94,0.2)" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
                  Vous avez un besoin dans ce domaine ? Parlons-en directement.
                </p>
                <Link to="/devis" className="flex items-center justify-center gap-2 py-3 font-semibold text-white transition-all duration-200 hover:brightness-110"
                  style={{ background: "#C8A75E", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none" }}>
                  Demander un devis
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="https://wa.me/242061331010" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 font-semibold text-white transition-all duration-200 hover:brightness-110"
                  style={{ background: "#25D366", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L.057 23.215a.75.75 0 00.918.899l5.56-1.451A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.67-.522-5.188-1.432l-.37-.224-3.844 1.002 1.03-3.74-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation prev / next */}
        <div style={{ borderTop: "1px solid rgba(200,167,94,0.15)", background: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
            <div className="grid grid-cols-2 gap-4">
              <Link to={`/services/${prev.slug}`} className="flex items-center gap-4 p-5 transition-all duration-200"
                style={{ border: "1px solid rgba(200,167,94,0.12)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8A75E")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,167,94,0.12)")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <div>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#8A9BB0", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>Précédent</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0F2F44" }}>{prev.titre}</span>
                </div>
              </Link>

              <Link to={`/services/${next.slug}`} className="flex items-center justify-end gap-4 p-5 transition-all duration-200"
                style={{ border: "1px solid rgba(200,167,94,0.12)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8A75E")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,167,94,0.12)")}>
                <div className="text-right">
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#8A9BB0", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>Suivant</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0F2F44" }}>{next.titre}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}