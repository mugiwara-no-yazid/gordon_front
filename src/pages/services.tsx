import { Link } from "react-router-dom";
import { SERVICES_DATA } from "../data/mock";

// ─── Icônes SVG (une par slug) ────────────────────────────────────────
/* Pour ajouter un service : ajouter l'icône ici avec le même slug comme clé
const ICONS: Record<string, React.ReactNode> = {
  immobilier: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  vehicules: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  logistique: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  securite: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  personnel: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  technologie: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  ),
  hotellerie: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M2 20V8l8-6 8 6v12" />
      <path d="M9 20v-5h6v5" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="13" y="9" width="2" height="2" />
    </svg>
  ),
  "espaces-verts": (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7z" />
      <path d="M12 17c0 0-4-2-4-5" />
      <path d="M12 17c0 0 4-2 4-5" />
      <path d="M5 22h14" />
    </svg>
  ),
  plantation: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22h20" />
      <path d="M12 22V11" />
      <path d="M12 11C10 9 6 7 6 4c0-1.7 1.3-3 3-3 1.4 0 2.6.8 3 2 .4-1.2 1.6-2 3-2 1.7 0 3 1.3 3 3 0 3-4 5-6 7z" />
      <path d="M7 22c0-4 2-7 5-8" />
    </svg>
  ),
};
*/
// ─── Carte service ────────────────────────────────────────────────────
function ServiceCard({
  slug, numero, titre, tagline, descriptionCourte, prestations, reverse,logo
}: {
  slug: string;
  numero: string;
  titre: string;
  tagline: string;
  descriptionCourte: string;
  prestations: { titre: string }[];
  reverse: boolean;
  logo:string;
}) {
  const prestationTitles = prestations.map((p) => p.titre);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 transition-all duration-300"
      style={{ border: "1px solid rgba(200,167,94,0.12)", background: "#FFFFFF" }}
    >
      {/* ── Panneau visuel ── */}
      <div
        className={`relative flex flex-col justify-between p-10 min-h-[300px] ${reverse ? "lg:order-2" : "lg:order-1"}`}
        style={{ background: "#0F2F44" }}
      >
        <span className="absolute top-6 right-8 font-bold select-none"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "72px", color: "rgba(200,167,94,0.08)", lineHeight: 1 }}>
          {numero}
        </span>

        <div className="flex items-center justify-center mb-6"
          style={{ width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255, 255, 255, 1)", border: "1px solid rgba(200,167,94,0.3)", color: "#C8A75E" }}>
          <img src={logo} alt={titre}/>
        </div>

        <div>
          <h3 className="mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
            {titre}
          </h3>
          <p className="italic mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
            {tagline}
          </p>
          <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px" }} />
        </div>
      </div>

      {/* ── Panneau contenu ── */}
      <div className={`flex flex-col justify-between p-10 ${reverse ? "lg:order-1" : "lg:order-2"}`} style={{ background: "#FFFFFF" }}>
        <p className="mb-8 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14.5px", color: "#5A6472", lineHeight: 1.75 }}>
          {descriptionCourte}
        </p>

        <div className="mb-8">
          <span className="block mb-4 uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.18em" }}>
            Nos prestations
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {prestationTitles.slice(0, 6).map((p) => (
              <li key={p} className="flex items-center gap-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#3A4A5C" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A75E", flexShrink: 0 }} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white self-start transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{ background: "#0F2F44", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.05em", textDecoration: "none", border: "1px solid rgba(200,167,94,0.2)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8A75E")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,167,94,0.2)")}
        >
          En savoir plus
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── Page Services ────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      {/* ── HERO ── */}
      <section className="relative w-full flex items-end overflow-hidden" style={{ background: "#0B2A40", minHeight: "340px" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "340px", height: "340px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.1)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(200,167,94,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 30%, #0B2A40 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-16 mt-15">
          <div className="flex items-center gap-3 mb-5">
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
              Ce que nous faisons
            </span>
          </div>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "16px" }}>
            Nos Pôles de Services
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", maxWidth: "540px", lineHeight: 1.75 }}>
            {SERVICES_DATA.length} domaines d'expertise complémentaires pour couvrir l'ensemble
            de vos besoins opérationnels en République du Congo.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>

      {/* ── Navigation rapide ── */}
      <nav className="sticky top-[78px] z-40 w-full overflow-x-auto" style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(200,167,94,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-0 whitespace-nowrap">
            {SERVICES_DATA.map(({ slug, numero, titre }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="flex items-center gap-2 px-4 py-4 transition-colors duration-200"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#5A6472", textDecoration: "none", borderBottom: "2px solid transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0F2F44"; e.currentTarget.style.borderBottomColor = "#C8A75E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#5A6472"; e.currentTarget.style.borderBottomColor = "transparent"; }}
              >
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#C8A75E" }}>{numero}</span>
                {titre}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Liste des services ── */}
      <main style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col gap-8">
          {SERVICES_DATA.map((service, i) => (
            <div key={service.slug} id={service.slug}>
              <ServiceCard {...service} reverse={i % 2 !== 0} />
            </div>
          ))}
        </div>

        {/* ── CTA bas ── */}
        <div className="w-full py-16 flex flex-col items-center text-center" style={{ background: "#0F2F44" }}>
          <p className="mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", maxWidth: "480px", lineHeight: 1.7 }}>
            Vous avez un besoin spécifique ou souhaitez combiner plusieurs services ?
            Parlons-en directement.
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ background: "#C8A75E", fontFamily: "'Montserrat', sans-serif", fontSize: "14px", letterSpacing: "0.06em", textDecoration: "none", boxShadow: "0 4px 20px rgba(200,167,94,0.3)" }}
          >
            Demander un devis personnalisé
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </>
  );
}
