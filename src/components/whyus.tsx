// ─── Icônes SVG ───────────────────────────────────────────────────────
import type { ReactElement } from "react";
function IconExpertise() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconReactivite() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconTransparence() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconConformite() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function IconVision() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconMultiservice() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

// ─── Arguments ────────────────────────────────────────────────────────
const ARGUMENTS = [
  {
    Icon: IconMultiservice,
    title: "Expertise multisectorielle",
    description:
      "6 pôles complémentaires pilotés par une direction unifiée. Un seul interlocuteur pour l'ensemble de vos besoins opérationnels.",
  },
  {
    Icon: IconReactivite,
    title: "Réactivité opérationnelle",
    description:
      "Délais d'intervention rapides, disponibilité permanente et suivi en temps réel de chaque mission confiée.",
  },
  {
    Icon: IconTransparence,
    title: "Transparence totale",
    description:
      "Reporting clair, traçabilité des opérations et communication proactive à chaque étape de votre projet.",
  },
  {
    Icon: IconConformite,
    title: "Conformité & Standards",
    description:
      "Processus internes structurés, respect des normes locales et standards internationaux pour rassurer les grands comptes.",
  },
  {
    Icon: IconVision,
    title: "Vision long terme",
    description:
      "Une plateforme multiservices africaine construite pour durer, s'adapter et grandir avec les ambitions de ses clients.",
  },
  {
    Icon: IconExpertise,
    title: "Standards internationaux",
    description:
      "Méthodes de travail alignées aux exigences des institutions, ONG et multinationales opérant en République du Congo.",
  },
];

// ─── Carte argument ───────────────────────────────────────────────────
function ArgumentCard({
  Icon,
  title,
  description,
}: {
  Icon: () => ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex gap-5 p-6 transition-all duration-300 group cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(200,167,94,0.1)",
        borderRadius: "2px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,167,94,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,167,94,0.1)";
      }}
    >
      {/* Icône */}
      <div
        className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(200,167,94,0.1)",
          color: "#C8A75E",
          border: "1px solid rgba(200,167,94,0.2)",
        }}
      >
        <Icon />
      </div>

      {/* Texte */}
      <div className="flex flex-col gap-2">
        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "13.5px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── Section Pourquoi nous choisir ───────────────────────────────────
export default function WhyUs() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative w-full py-24 overflow-hidden"
        style={{ background: "#0F2F44" }}
      >
        {/* ── Déco arrière-plan ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grand cercle doré flou gauche */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "-180px",
              transform: "translateY(-50%)",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              border: "1px solid rgba(200,167,94,0.08)",
            }}
          />
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "-120px",
              transform: "translateY(-50%)",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: "1px solid rgba(200,167,94,0.06)",
            }}
          />
          {/* Points déco droite */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: "3px",
                height: "3px",
                background: "#C8A75E",
                opacity: 0.2,
                bottom: `${15 + i * 14}%`,
                right: `${4 + (i % 3) * 3}%`,
              }}
            />
          ))}
          {/* Ligne verticale droite */}
          <div
            className="absolute right-0 top-0 h-full"
            style={{
              width: "2px",
              background: "linear-gradient(180deg, transparent, #C8A75E 30%, #C8A75E 70%, transparent)",
              opacity: 0.12,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Colonne gauche : texte ── */}
            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-5">
                <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    color: "#C8A75E",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Notre différence
                </span>
              </div>

              {/* Titre */}
              <h2
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(26px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Pourquoi choisir{" "}
                <span style={{ color: "#C8A75E" }}>Gordon - Services ?</span>
              </h2>

              {/* Liseré */}
              <div
                className="mb-6"
                style={{
                  width: "56px",
                  height: "2px",
                  background: "linear-gradient(90deg, #C8A75E, #D6C28A)",
                  borderRadius: "2px",
                }}
              />

              {/* Paragraphe */}
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "480px",
                }}
              >
                Implantés en République du Congo, nous intervenons
                avec nos équipes formées sur le terrain et des processus alignés
                aux exigences des multinationales, institutions et organisations
                internationales.
              </p>
            </div>

            {/* ── Colonne droite : grille arguments ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARGUMENTS.map((arg, i) => (
                <ArgumentCard key={arg.title} {...arg} />
              ))}
            </div>
          </div>
        </div>

        {/* Liseré doré bas */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px]"
          style={{
            background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)",
          }}
        />
      </section>
    </>
  );
}
