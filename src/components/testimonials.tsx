import { useState, useEffect } from "react";

// ─── Données ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "Gordon - Services a géré l'ensemble de notre flotte véhicules et la logistique de notre mission sur le terrain. Réactivité exemplaire, équipes professionnelles. Nous recommandons sans hésitation.",
    author: "Directeur des Opérations",
    company: "Organisation Internationale",
    sector: "ONG & Humanitaire",
    initials: "DO",
  },
  {
    quote:
      "Nous faisons appel à Gordon - Services pour la mise à disposition de personnel qualifié depuis 2 ans. Leur processus de recrutement est rigoureux et les profils fournis correspondent parfaitement à nos exigences.",
    author: "DRH République du Congo",
    company: "Multinationale Pétrolière",
    sector: "Énergie & Mines",
    initials: "DH",
  },
  {
    quote:
      "La gestion de notre patrimoine immobilier à Brazzaville est assurée par Gordon - Services avec un niveau de transparence et de suivi que nous n'avions pas trouvé ailleurs. Un partenaire de confiance.",
    author: "Responsable Patrimoine",
    company: "Groupe Industriel",
    sector: "Industrie",
    initials: "RP",
  },
  {
    quote:
      "Intervention rapide, agents formés et bien équipés. La sécurisation de nos sites par Gordon - Services nous donne une réelle sérénité opérationnelle. Leur protocole de gestion des risques est sérieux.",
    author: "Directeur Sécurité",
    company: "Société Minière",
    sector: "Mines & Extraction",
    initials: "DS",
  },
];

// ─── Icône guillemet ──────────────────────────────────────────────────
function QuoteIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="#C8A75E" opacity="0.18">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

// ─── Section Témoignages ──────────────────────────────────────────────
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  // Auto-rotation toutes les 6s
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index: number) {
    if (index === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 350);
  }

  const t = TESTIMONIALS[current];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .testimonial-fade {
          animation: fadeIn 0.45s ease forwards;
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#0F2F44" }}
      >
        {/* Déco fond */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ top: "-80px", right: "-80px", width: "380px", height: "380px", borderRadius: "50%", border: "1px solid rgba(200,167,94,0.07)" }} />
          <div className="absolute" style={{ bottom: "-60px", left: "-60px", width: "260px", height: "260px", borderRadius: "50%", border: "1px solid rgba(200,167,94,0.06)" }} />
          {/* Ligne verticale séparatrice déco */}
          <div
            className="absolute hidden lg:block"
            style={{
              left: "38%",
              top: 0,
              width: "1px",
              height: "100%",
              background: "linear-gradient(180deg, transparent, rgba(200,167,94,0.2) 20%, rgba(200,167,94,0.2) 80%, transparent)",
            }}
          />
        </div>

        {/* ── En-tête ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
                Ce qu'ils disent de nous
              </span>
              <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            </div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
              Témoignages Clients
            </h2>
            <div style={{ width: "56px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px" }} />
          </div>
        </div>

        {/* ── Contenu principal : gauche + droite ── */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.35s ease" }}
        >
          <div
            key={current}
            className="testimonial-fade grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[280px]"
          >
            {/* ── GAUCHE : Auteur ── */}
            <div
              className="lg:col-span-2 flex flex-col justify-center px-0 lg:pr-14 py-8 lg:py-0"
              style={{
                borderBottom: "1px solid rgba(200,167,94,0.12)",
              }}
            >
              {/* Avatar */}
              <div
                className="flex items-center justify-center mb-6"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(200,167,94,0.1)",
                  border: "2px solid rgba(200,167,94,0.35)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#C8A75E",
                  }}
                >
                  {t.initials}
                </span>
              </div>

              {/* Nom */}
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "6px",
                  lineHeight: 1.3,
                }}
              >
                {t.author}
              </h3>

              {/* Entreprise */}
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "10px",
                }}
              >
                {t.company}
              </span>

              {/* Badge secteur */}
              <span
                className="inline-flex items-center px-3 py-1 self-start"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#C8A75E",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "rgba(200,167,94,0.1)",
                  border: "1px solid rgba(200,167,94,0.25)",
                  borderRadius: "2px",
                }}
              >
                {t.sector}
              </span>
            </div>

            {/* ── DROITE : Citation ── */}
            <div
              className="lg:col-span-3 flex flex-col justify-center lg:pl-14 py-8 lg:py-0 relative"
            >
              {/* Grand guillemet déco */}
              <div className="absolute top-4 right-0 opacity-60">
                <QuoteIcon />
              </div>

              {/* Liseré doré vertical gauche */}
              <div
                className="absolute left-0 top-8 bottom-8 hidden lg:block"
                style={{
                  width: "3px",
                  background: "linear-gradient(180deg, transparent, #C8A75E 20%, #C8A75E 80%, transparent)",
                  borderRadius: "2px",
                }}
              />

              {/* Texte */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                "{t.quote}"
              </p>

              {/* Liseré doré bas */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "linear-gradient(90deg, #C8A75E, #D6C28A)",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Navigation bas ── */}
        <div
          className="relative z-10 flex items-center justify-center gap-6 pb-12"
        >
          {/* Bouton précédent */}
          <button
            onClick={() => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="flex items-center justify-center transition-all duration-200 hover:brightness-125"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(200,167,94,0.1)",
              border: "1px solid rgba(200,167,94,0.3)",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: current === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: current === i
                    ? "linear-gradient(90deg, #C8A75E, #D6C28A)"
                    : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Bouton suivant */}
          <button
            onClick={() => goTo((current + 1) % TESTIMONIALS.length)}
            className="flex items-center justify-center transition-all duration-200 hover:brightness-125"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(200,167,94,0.1)",
              border: "1px solid rgba(200,167,94,0.3)",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Barre de progression */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "rgba(200,167,94,0.1)" }}>
          <div
            key={current}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #C8A75E, #D6C28A)",
              animation: "progress 6s linear forwards",
            }}
          />
        </div>
        <style>{`
          @keyframes progress {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </section>
    </>
  );
}