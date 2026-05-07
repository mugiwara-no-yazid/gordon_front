// ─── Icônes SVG par service ───────────────────────────────────────────
function IconImmo() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function IconVehicle() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function IconLogistique() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
function IconSecurite() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconPersonnel() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconTech() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  );
}

function IconHotel() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M2 20V8l8-6 8 6v12" />
      <path d="M9 20v-5h6v5" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="13" y="9" width="2" height="2" />
    </svg>
  );
}
function IconEspaceVert() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7z" />
      <path d="M12 17c0 0-4-2-4-5" />
      <path d="M12 17c0 0 4-2 4-5" />
      <path d="M5 22h14" />
    </svg>
  );
}

// ─── Données services ─────────────────────────────────────────────────
const SERVICES = [
  {
    Icon: IconImmo,
    title: "Gestion Immobilière",
    description:
      "Gestion locative, vente & acquisition, gestion de patrimoine, maintenance et suivi administratif de vos biens.",
    slug: "/services/immobilier",
  },
  {
    Icon: IconVehicle,
    title: "Location de Véhicules",
    description:
      "Flotte premium disponible en courte et longue durée. Chauffeurs professionnels et service corporate sur mesure.",
    slug: "/services/vehicules",
  },
  {
    Icon: IconLogistique,
    title: "Logistique",
    description:
      "Transport, supply chain locale, gestion de projets logistiques et solutions personnalisées pour vos opérations.",
    slug: "/services/logistique",
  },
  {
    Icon: IconSecurite,
    title: "Sécurité",
    description:
      "Sécurité privée, surveillance, agents formés et gestion des risques pour vos sites et événements.",
    slug: "/services/securite",
  },
  {
    Icon: IconPersonnel,
    title: "Mise à Disposition de Personnel",
    description:
      "Personnel qualifié, gestion RH externalisée, recrutement et formation adaptés à vos besoins opérationnels.",
    slug: "/services/personnel",
  },
  {
    Icon: IconTech,
    title: "Technologie & Solutions Industrielles",
    description:
      "Traçabilité des produits, solutions numériques sur mesure et hébergement sécurisé des données pour gouvernements et industries.",
    slug: "/services/technologie",
  },
  {
    Icon: IconHotel,
    title: "Hôtellerie & Hébergement",
    description:
      "Hébergement corporate, résidences pour expatriés, accueil de délégations et gestion hôtelière externalisée.",
    slug: "/services/hotellerie",
  },
  {
    Icon: IconEspaceVert,
    title: "Entretien & Espaces Verts",
    description:
      "Tonte, taille, aménagement paysager, nettoyage extérieur et entretien de piscines pour vos sites.",
    slug: "/services/espaces-verts",
  },
];

// ─── Carte service ────────────────────────────────────────────────────
function ServiceCard({
  Icon,
  title,
  description,
  slug,
  index,
}: {
  Icon: () => JSX.Element;
  title: string;
  description: string;
  slug: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col p-8 transition-all duration-300 cursor-pointer"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(200,167,94,0.15)",
        borderTop: "3px solid transparent",
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderTop = "3px solid #C8A75E";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(15,47,68,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderTop = "3px solid transparent";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Icône dans cercle */}
      <div
        className="flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "rgba(15,47,68,0.06)",
          color: "#0F2F44",
        }}
      >
        <Icon />
      </div>

      {/* Titre */}
      <h3
        className="mb-3 leading-tight"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "16px",
          fontWeight: 700,
          color: "#0F2F44",
        }}
      >
        {title}
      </h3>

      {/* Liseré doré sous le titre */}
      <div
        className="mb-4"
        style={{
          width: "32px",
          height: "2px",
          background: "linear-gradient(90deg, #C8A75E, #D6C28A)",
          borderRadius: "2px",
          transition: "width 0.3s ease",
        }}
      />

      {/* Description */}
      <p
        className="flex-1 leading-relaxed mb-6"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13.5px",
          color: "#5A6472",
          fontWeight: 400,
        }}
      >
        {description}
      </p>

      {/* Lien En savoir plus */}
      <a
        href={slug}
        className="flex items-center gap-2 font-semibold transition-all duration-200 group-hover:gap-3"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13px",
          color: "#0F2F44",
          textDecoration: "none",
          letterSpacing: "0.03em",
        }}
      >
        En savoir plus
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#C8A75E" }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

// ─── Section Services ─────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      <section
        className="w-full py-24"
        style={{ background: "#F7F8FA" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* ── En-tête de section ── */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
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
                Ce que nous faisons
              </span>
              <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            </div>

            {/* Titre */}
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 700,
                color: "#0F2F44",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Nos Pôles de Services
            </h2>

            {/* Liseré doré centré */}
            <div
              style={{
                width: "56px",
                height: "2px",
                background: "linear-gradient(90deg, #C8A75E, #D6C28A)",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            />

            {/* Sous-titre */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "15px",
                color: "#5A6472",
                maxWidth: "560px",
                lineHeight: 1.7,
              }}
            >
              Une offre intégrée et complémentaire pour répondre à l'ensemble
              de vos besoins opérationnels en Afrique centrale.
            </p>
          </div>

          {/* ── Grille 6 cartes ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(200,167,94,0.12)" }}>
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          {/* ── CTA bas de section ── */}
          <div className="flex justify-center mt-14">
            <a
              href="/services"
              className="flex items-center gap-3 px-8 py-4 font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "#0F2F44",
                color: "#FFFFFF",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                textDecoration: "none",
                border: "none",
                boxShadow: "0 4px 20px rgba(15,47,68,0.2)",
              }}
            >
              Voir tous nos services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}