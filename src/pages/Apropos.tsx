import { useState } from "react";
import { Link } from "react-router-dom";

// ─── DONNÉES ──────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2013",
    title: "Fondation",
    text: "Création de Gordon - Services SARLU à Brazzaville avec une première activité centrée sur la gestion immobilière et la location de véhicules.",
  },
  {
    year: "2015",
    title: "Expansion logistique",
    text: "Lancement du pôle Logistique suite à la signature d'un premier contrat majeur avec une ONG internationale pour le transport de matériel humanitaire.",
  },
  {
    year: "2017",
    title: "Pôle Sécurité",
    text: "Ouverture du département Sécurité privée avec le recrutement des premiers agents certifiés et l'obtention des agréments nécessaires.",
  },
  {
    year: "2019",
    title: "Couverture régionale",
    text: "Extension des opérations à Pointe-Noire, Dolisie et vers les marchés camerounais et gabonais. Premiers contrats avec des groupes pétroliers.",
  },
  {
    year: "2021",
    title: "Mise à disposition & Technologie",
    text: "Création des pôles Personnel et Technologie Industrielle. Gordon - Services devient un opérateur multiservices à spectre complet.",
  },
  {
    year: "2023",
    title: "Consolidation",
    text: "Plus de 50 projets réalisés, 5 pays couverts, partenariats actifs avec des institutions onusiennes et des multinationales du secteur énergétique.",
  },
];

const VALEURS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    titre: "Intégrité",
    texte: "Chaque engagement est tenu. Nos clients savent que ce que nous promettons, nous le livrons — sans compromis sur la qualité ou les délais.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    titre: "Réactivité",
    texte: "En République du Congo, les défis surgissent vite. Notre organisation est conçue pour répondre rapidement, avec les bonnes ressources, au bon moment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    titre: "Transparence",
    texte: "Reporting clair, communication proactive, aucun coût caché. Nos clients ont une visibilité totale sur chaque aspect de la mission confiée.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    titre: "Excellence",
    texte: "Nous appliquons des standards internationaux à des contextes africains. Cette exigence est notre différence et la raison pour laquelle nos clients nous renouvellent.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    titre: "Partenariat",
    texte: "Nous ne sommes pas des prestataires ponctuels. Nous construisons des relations long terme fondées sur la confiance mutuelle et la création de valeur partagée.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    titre: "Ancrage local",
    texte: "Profondément enracinés en République du Congo, nous connaissons les réalités du terrain, les acteurs et les dynamiques locales qui font la différence.",
  },
];

const EQUIPE = [
  { nom: "Gordon Mouyabi", poste: "Directeur Général", dept: "Direction", initiales: "GM" },
  { nom: "Christelle Ngoma", poste: "Directrice Administrative", dept: "Administration", initiales: "CN" },
  { nom: "Patrick Loubelo", poste: "Responsable Logistique", dept: "Logistique", initiales: "PL" },
  { nom: "Marie-Claire Ossomba", poste: "Responsable Immobilier", dept: "Immobilier", initiales: "MO" },
  { nom: "Alain Bouanga", poste: "Responsable Sécurité", dept: "Sécurité", initiales: "AB" },
  { nom: "Stéphanie Mboungou", poste: "Responsable RH & Personnel", dept: "Personnel", initiales: "SM" },
];

const CERTIFICATIONS = [
  { label: "RCCM", desc: "Registre du Commerce et du Crédit Mobilier — République du Congo" },
  { label: "NIF", desc: "Numéro d'Identification Fiscale en règle, déclarations à jour" },
  { label: "Agrément Sécurité", desc: "Agrément délivré par le Ministère de l'Intérieur pour activités de sécurité privée" },
  { label: "Assurances RC Pro", desc: "Couverture responsabilité civile professionnelle tous secteurs d'activité" },
  { label: "Conformité OHADA", desc: "Comptabilité et gouvernance alignées aux standards OHADA" },
  { label: "Traçabilité ISO", desc: "Processus internes documentés selon les principes ISO 9001" },
];

// ─── Composants utilitaires ───────────────────────────────────────────

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-14">
      <div className="flex items-center gap-3 mb-4">
        <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
          {badge}
        </span>
        <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
      </div>
      <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#0F2F44", marginBottom: "14px", lineHeight: 1.2 }}>
        {title}
      </h2>
      <div style={{ width: "56px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px", marginBottom: subtitle ? "16px" : "0" }} />
      {subtitle && (
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14.5px", color: "#5A6472", maxWidth: "520px", lineHeight: 1.75 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── PAGE À PROPOS ────────────────────────────────────────────────────
export default function AProposPage() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
        rel="stylesheet"
      />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#0B2A40", minHeight: "320px", display: "flex", alignItems: "flex-end" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "380px", height: "380px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.1)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(200,167,94,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 30%, #0B2A40 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-14 mt-15">


          <div className="flex items-center gap-3 mb-5">
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
              Qui sommes-nous
            </span>
          </div>

          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "16px" }}>
            À Propos de Gordon - Services
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", maxWidth: "560px", lineHeight: 1.75 }}>
            Depuis 2013, Gordon - Services SARLU construit une plateforme multiservices de référence en République du Congo, au service des entreprises, institutions et organisations internationales.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>


      {/* ══════════════════════════════════════════════
          1. HISTOIRE & TIMELINE
      ══════════════════════════════════════════════ */}
      <section className="w-full py-24" style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Notre parcours"
            title="Histoire & Positionnement"
            subtitle="De la gestion immobilière à la plateforme multiservices — dix ans de croissance en République du Congo."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Gauche — texte intro */}
            <div>
              <p className="leading-relaxed mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "#5A6472", lineHeight: 1.8 }}>
                Gordon - Services SARLU est née d'un constat simple : les entreprises opérant en  manquaient d'un partenaire local fiable, structuré et capable d'absorber une large gamme de besoins opérationnels sans sacrifier la qualité.
              </p>
              <p className="leading-relaxed mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "#5A6472", lineHeight: 1.8 }}>
                Fondée à Brazzaville, la société a progressivement élargi ses activités pour devenir aujourd'hui un opérateur multi-métiers reconnu, intervenant sur 5 pays avec des équipes formées, des processus documentés et une gouvernance alignée aux standards internationaux.
              </p>

              {/* Chiffres clés */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "2013", label: "Année de création" },
                  { val: "5", label: "Pays couverts" },
                  { val: "50+", label: "Projets réalisés" },
                ].map(({ val, label }) => (
                  <div key={label} className="flex flex-col items-center text-center p-4" style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.15)", borderTop: "3px solid #C8A75E" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "28px", fontWeight: 800, color: "#C8A75E", lineHeight: 1 }}>{val}</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10.5px", color: "#8A9BB0", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "6px" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Droite — Timeline interactive */}
            <div>
              {/* Sélecteur années */}
              <div className="flex flex-wrap gap-2 mb-8">
                {TIMELINE.map((item, i) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(i)}
                    className="transition-all duration-200"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      fontWeight: activeYear === i ? 700 : 500,
                      color: activeYear === i ? "#FFFFFF" : "#5A6472",
                      background: activeYear === i ? "#C8A75E" : "#FFFFFF",
                      border: `1px solid ${activeYear === i ? "#C8A75E" : "rgba(200,167,94,0.2)"}`,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    {item.year}
                  </button>
                ))}
              </div>

              {/* Carte étape active */}
              <div
                key={activeYear}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(200,167,94,0.15)",
                  borderLeft: "4px solid #C8A75E",
                  padding: "28px",
                  animation: "fadeSlideIn 0.3s ease",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "32px", fontWeight: 800, color: "#C8A75E", lineHeight: 1 }}>
                    {TIMELINE[activeYear].year}
                  </span>
                  <div style={{ width: "1px", height: "32px", background: "rgba(200,167,94,0.3)" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, color: "#0F2F44" }}>
                    {TIMELINE[activeYear].title}
                  </span>
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14.5px", color: "#5A6472", lineHeight: 1.75 }}>
                  {TIMELINE[activeYear].text}
                </p>
              </div>

              {/* Navigation prev/next */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => setActiveYear((activeYear - 1 + TIMELINE.length) % TIMELINE.length)}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(200,167,94,0.1)", border: "1px solid rgba(200,167,94,0.25)", cursor: "pointer" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#8A9BB0" }}>
                  {activeYear + 1} / {TIMELINE.length}
                </span>
                <button
                  onClick={() => setActiveYear((activeYear + 1) % TIMELINE.length)}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(200,167,94,0.1)", border: "1px solid rgba(200,167,94,0.25)", cursor: "pointer" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          2. VISION & VALEURS
      ══════════════════════════════════════════════ */}
      <section className="relative w-full py-24 overflow-hidden" style={{ background: "#0F2F44" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(200,167,94,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, #0F2F44 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader badge="Ce qui nous anime" title="Vision & Valeurs" />

          {/* Vision */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.7,
                borderLeft: "none",
                padding: 0,
              }}
            >
              "Devenir la plateforme multiservices de référence en République du Congo — reconnue pour sa fiabilité, ses standards internationaux et son ancrage profond dans les réalités locales."
            </blockquote>
            <div style={{ width: "56px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px", margin: "24px auto 0" }} />
          </div>

          {/* Grille valeurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALEURS.map(({ icon, titre, texte }) => (
              <div
                key={titre}
                className="flex flex-col gap-4 p-7 transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,167,94,0.1)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,167,94,0.28)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,167,94,0.1)";
                }}
              >
                <div style={{ color: "#C8A75E" }}>{icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>{titre}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          3. ÉQUIPE
      ══════════════════════════════════════════════ */}
      <section className="w-full py-24" style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Les visages de Gordon - Services"
            title="Notre Équipe"
            subtitle="Une équipe dirigeante expérimentée, ancrée localement et formée aux standards internationaux."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPE.map(({ nom, poste, dept, initiales }) => (
              <div
                key={nom}
                className="flex flex-col items-center text-center p-8 transition-all duration-300"
                style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.12)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(15,47,68,0.1)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Avatar */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0F2F44, #1B4F6B)",
                    border: "3px solid rgba(200,167,94,0.3)",
                  }}
                >
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 700, color: "#C8A75E" }}>
                    {initiales}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 700, color: "#0F2F44", marginBottom: "4px" }}>
                  {nom}
                </h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#5A6472", marginBottom: "12px" }}>
                  {poste}
                </p>

                {/* Badge département */}
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#C8A75E",
                  background: "rgba(200,167,94,0.08)",
                  border: "1px solid rgba(200,167,94,0.2)",
                  padding: "3px 10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {dept}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          4. GOUVERNANCE & CONFORMITÉ
      ══════════════════════════════════════════════ */}
      <section className="w-full py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Fiabilité & Standards"
            title="Gouvernance & Conformité"
            subtitle="Gordon - Services opère dans le respect total des cadres légaux, fiscaux et professionnels en vigueur — une exigence non négociable."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Gauche — texte */}
            <div>
              <p className="leading-relaxed mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "#5A6472", lineHeight: 1.8 }}>
                Notre structure juridique, nos assurances professionnelles et nos agréments sectoriels vous garantissent un partenaire en parfaite conformité — une condition indispensable pour collaborer avec des multinationales, institutions publiques et organisations internationales.
              </p>
              <p className="leading-relaxed mb-10" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "#5A6472", lineHeight: 1.8 }}>
                Tous nos documents administratifs sont disponibles sur demande pour les procédures de due diligence et de qualification fournisseur.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: "#0F2F44", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none", border: "1px solid rgba(200,167,94,0.25)", boxShadow: "0 4px 20px rgba(15,47,68,0.15)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8A75E")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,167,94,0.25)")}
              >
                Demander un dossier administratif
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Droite — grille certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map(({ label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 p-5"
                  style={{ background: "#F7F8FA", border: "1px solid rgba(200,167,94,0.12)", borderLeft: "3px solid #C8A75E" }}
                >
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#0F2F44" }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#8A9BB0", lineHeight: 1.5 }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA bas */}
      <div className="w-full py-14 flex flex-col items-center text-center" style={{ background: "#0B2A40" }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", maxWidth: "460px", lineHeight: 1.7, marginBottom: "24px" }}>
          Vous souhaitez en savoir plus ou démarrer une collaboration ?
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{ background: "#C8A75E", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none" }}>
            Nous contacter
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link to="/services" className="inline-flex items-center gap-3 px-7 py-4 font-semibold transition-all duration-200 hover:brightness-110"
            style={{ background: "transparent", border: "1px solid rgba(200,167,94,0.4)", color: "rgba(255,255,255,0.75)", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none" }}>
            Voir nos services
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}