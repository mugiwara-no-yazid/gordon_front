import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────
type Secteur = "Tous" | "Immobilier" | "Véhicules" | "Logistique" | "Sécurité" | "Personnel" | "Technologie";

interface Projet {
  id: number;
  titre: string;
  secteur: Exclude<Secteur, "Tous">;
  client: string;
  lieu: string;
  annee: string;
  duree: string;
  description: string;
  mission: string;
  resultat: string;
  tags: string[];
  color: string;
}

// ─── Données fictives ─────────────────────────────────────────────────
const PROJETS: Projet[] = [
  {
    id: 1,
    titre: "Gestion d'un portefeuille de 40 logements",
    secteur: "Immobilier",
    client: "Groupe Industriel Privé",
    lieu: "Brazzaville",
    annee: "2023",
    duree: "12 mois",
    description: "Prise en charge complète de la gestion locative d'un portefeuille de 40 logements de standing destinés aux cadres expatriés d'un groupe industriel.",
    mission: "Gestion locative, maintenance préventive, suivi administratif et comptable, gestion des relations locataires.",
    resultat: "Taux d'occupation maintenu à 96%, réduction des délais d'intervention maintenance de 40%, zéro impayé sur la période.",
    tags: ["Gestion locative", "Expatriés", "Maintenance"],
    color: "#1B4F6B",
  },
  {
    id: 2,
    titre: "Flotte de 25 véhicules pour mission ONU",
    secteur: "Véhicules",
    client: "Organisation des Nations Unies",
    lieu: "Brazzaville & Pointe-Noire",
    annee: "2023",
    duree: "6 mois",
    description: "Mise à disposition d'une flotte de 25 véhicules 4x4 avec chauffeurs formés pour une mission humanitaire déployée sur deux villes.",
    mission: "Sélection et préparation de la flotte, recrutement et formation des chauffeurs, coordination logistique quotidienne, reporting hebdomadaire.",
    resultat: "100% de disponibilité opérationnelle, zéro incident de sécurité, satisfaction client 9.2/10.",
    tags: ["Flotte 4x4", "Chauffeurs", "Mission humanitaire"],
    color: "#2E8BB8",
  },
  {
    id: 3,
    titre: "Supply chain matériaux de construction",
    secteur: "Logistique",
    client: "Société Minière Internationale",
    lieu: "Nord Congo",
    annee: "2022",
    duree: "8 mois",
    description: "Organisation complète de la chaîne logistique pour l'acheminement de matériaux de construction vers un site minier en zone enclavée.",
    mission: "Planification des flux, coordination transporteurs, gestion des stocks, suivi en temps réel des livraisons, gestion douanière.",
    resultat: "Livraison de 1 200 tonnes de matériaux, réduction des coûts logistiques de 22% par rapport aux devis initiaux.",
    tags: ["Supply chain", "Zone enclavée", "Mines"],
    color: "#C8A75E",
  },
  {
    id: 4,
    titre: "Sécurisation d'un site industriel",
    secteur: "Sécurité",
    client: "Groupe Pétrolier",
    lieu: "Pointe-Noire",
    annee: "2023",
    duree: "Contrat annuel",
    description: "Déploiement d'un dispositif de sécurité complet pour un site de stockage et traitement d'hydrocarbures à Pointe-Noire.",
    mission: "Analyse des risques, déploiement de 18 agents formés, mise en place des protocoles d'accès, surveillance 24h/24, rapports d'incident.",
    resultat: "Zéro intrusion sur 12 mois, certification ISO sécurité obtenue, contrat renouvelé pour 2 ans.",
    tags: ["Industrie pétrolière", "24h/24", "ISO Sécurité"],
    color: "#C40010",
  },
  {
    id: 5,
    titre: "Recrutement & formation 60 agents terrain",
    secteur: "Personnel",
    client: "ONG Internationale",
    lieu: "Brazzaville",
    annee: "2022",
    duree: "3 mois",
    description: "Recrutement, vetting et formation de 60 agents de terrain pour le déploiement d'un programme humanitaire d'urgence.",
    mission: "Définition des profils, campagne de recrutement, vérification des antécédents, formation aux protocoles de l'ONG, gestion administrative.",
    resultat: "60 agents déployés en 10 semaines, taux de rétention à 6 mois de 92%, programme déployé dans les délais.",
    tags: ["Recrutement", "Formation", "Humanitaire"],
    color: "#0F2F44",
  },
  {
    id: 6,
    titre: "Maintenance industrielle centrale électrique",
    secteur: "Technologie",
    client: "Opérateur Énergétique National",
    lieu: "Brazzaville",
    annee: "2023",
    duree: "4 mois",
    description: "Contrat de maintenance préventive et curative sur les équipements d'une centrale électrique de 40 MW.",
    mission: "Audit technique, plan de maintenance préventive, interventions curatives d'urgence, fourniture de pièces certifiées, formation équipe interne.",
    resultat: "Disponibilité des équipements portée à 98.5%, réduction des pannes imprévues de 65%, économies estimées à 18M FCFA.",
    tags: ["Énergie", "Maintenance préventive", "Formation"],
    color: "#1B4F6B",
  },
  {
    id: 7,
    titre: "Gestion immobilière résidence diplomatique",
    secteur: "Immobilier",
    client: "Ambassade Européenne",
    lieu: "Brazzaville",
    annee: "2022",
    duree: "24 mois",
    description: "Gestion complète d'une résidence diplomatique de 12 villas incluant espaces verts, piscines et infrastructures communes.",
    mission: "Gestion locative, entretien espaces verts, maintenance infrastructure, coordination prestataires, sécurité du périmètre.",
    resultat: "Renouvellement automatique du contrat, satisfaction ambassade évaluée à excellent, zéro défaillance infrastructure.",
    tags: ["Diplomatique", "Résidence", "Entretien"],
    color: "#2E8BB8",
  },
  {
    id: 8,
    titre: "Transport humanitaire d'urgence",
    secteur: "Logistique",
    client: "MSF — Médecins Sans Frontières",
    lieu: "Nord & Sud Congo",
    annee: "2023",
    duree: "2 mois",
    description: "Acheminement d'urgence de matériel médical et vivres vers des zones sinistrées suite à des inondations.",
    mission: "Mobilisation de 12 camions en 48h, coordination avec autorités locales, acheminement dans zones d'accès difficile, rapport journalier.",
    resultat: "180 tonnes de matériel livré, couverture de 14 localités, aucune rupture de stock sur toute la durée de la mission.",
    tags: ["Urgence", "Médical", "Humanitaire"],
    color: "#C8A75E",
  },
];

const SECTEURS: Secteur[] = ["Tous", "Immobilier", "Véhicules", "Logistique", "Sécurité", "Personnel", "Technologie"];

// ─── Modal ────────────────────────────────────────────────────────────
function ProjectModal({ projet, onClose }: { projet: Projet; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(7,30,46,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bandeau coloré */}
        <div
          className="relative flex items-end p-8 min-h-[160px]"
          style={{ background: projet.color }}
        >
          {/* Numéro déco */}
          <span
            className="absolute top-4 right-6 font-bold select-none"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "80px", color: "rgba(255,255,255,0.07)", lineHeight: 1 }}
          >
            {String(projet.id).padStart(2, "0")}
          </span>

          {/* Badge secteur */}
          <div className="flex flex-col gap-3">
            <span
              className="inline-flex items-center px-3 py-1 self-start"
              style={{
                background: "rgba(200,167,94,0.2)",
                border: "1px solid rgba(200,167,94,0.4)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                color: "#C8A75E",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {projet.secteur}
            </span>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.3,
              }}
            >
              {projet.titre}
            </h2>
          </div>

          {/* Fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center transition-all duration-200 hover:brightness-125"
            style={{
              width: "36px",
              height: "36px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              cursor: "pointer",
              color: "white",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Contenu */}
        <div className="p-8">
          {/* Infos clés */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Client", value: projet.client },
              { label: "Lieu", value: projet.lieu },
              { label: "Année", value: projet.annee },
              { label: "Durée", value: projet.duree },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {label}
                </span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#0F2F44", fontWeight: 600 }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Séparateur */}
          <div style={{ height: "1px", background: "rgba(200,167,94,0.15)", marginBottom: "24px" }} />

          {/* Sections */}
          {[
            { label: "Contexte", text: projet.description },
            { label: "Mission confiée", text: projet.mission },
            { label: "Résultats obtenus", text: projet.resultat },
          ].map(({ label, text }) => (
            <div key={label} className="mb-6">
              <span
                className="block mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                {label}
              </span>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "#5A6472", lineHeight: 1.75 }}>
                {text}
              </p>
            </div>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {projet.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#0F2F44",
                  background: "rgba(15,47,68,0.06)",
                  border: "1px solid rgba(15,47,68,0.1)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/devis"
            className="flex items-center justify-center gap-3 w-full py-4 font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{
              background: "#C8A75E",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            Discuter d'un projet similaire
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Carte projet ─────────────────────────────────────────────────────
function ProjetCard({ projet, onClick }: { projet: Projet; onClick: () => void }) {
  return (
    <div
      className="flex flex-col cursor-pointer transition-all duration-300 group"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(200,167,94,0.12)",
        borderTop: `3px solid ${projet.color}`,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(15,47,68,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Bandeau couleur */}
      <div
        className="relative flex items-center justify-between px-6 py-5"
        style={{ background: projet.color }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {projet.secteur}
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            color: "rgba(255,255,255,0.12)",
            lineHeight: 1,
          }}
        >
          {String(projet.id).padStart(2, "0")}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="mb-2 leading-tight"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#0F2F44",
          }}
        >
          {projet.titre}
        </h3>

        <div className="flex items-center gap-3 mb-4">
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#8A9BB0" }}>
            {projet.lieu} · {projet.annee}
          </span>
        </div>

        <p
          className="flex-1 leading-relaxed mb-5"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "13px",
            color: "#5A6472",
            lineHeight: 1.65,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } as React.CSSProperties}
        >
          {projet.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {projet.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10.5px",
                color: "#0F2F44",
                background: "rgba(15,47,68,0.06)",
                border: "1px solid rgba(15,47,68,0.08)",
                padding: "3px 8px",
                borderRadius: "2px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Voir le projet */}
        <div
          className="flex items-center gap-2 font-semibold transition-all duration-200 group-hover:gap-3"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "12.5px",
            color: "#0F2F44",
          }}
        >
          Voir le projet
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Page Projets ─────────────────────────────────────────────────────
export default function ProjetsPage() {
  const [filtre, setFiltre] = useState<Secteur>("Tous");
  const [selected, setSelected] = useState<Projet | null>(null);

  const filtered = filtre === "Tous" ? PROJETS : PROJETS.filter((p) => p.secteur === filtre);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      {/* ── HERO PAGE ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#0B2A40", minHeight: "300px", display: "flex", alignItems: "flex-end" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "340px", height: "340px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.1)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(200,167,94,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 30%, #0B2A40 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-14 mt-10">

          <div className="flex items-center gap-3 mb-5">
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
              Nos réalisations
            </span>
          </div>

          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "16px" }}>
            Projets & Réalisations
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", maxWidth: "520px", lineHeight: 1.75 }}>
            Des missions concrètes, des résultats mesurables. Découvrez comment Gordon - Services accompagne ses clients sur le terrain en République du Congo.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>

      {/* ── FILTRES ── */}
      <div
        className="sticky top-[78px] z-40 w-full overflow-x-auto"
        style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(200,167,94,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1 whitespace-nowrap py-1">
            {SECTEURS.map((s) => {
              const isActive = filtre === s;
              return (
                <button
                  key={s}
                  onClick={() => setFiltre(s)}
                  className="px-4 py-3 text-[13px] font-medium transition-all duration-200 border-b-2 cursor-pointer"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    background: "none",
                    border: "none",
                    borderBottom: isActive ? "2px solid #C8A75E" : "2px solid transparent",
                    color: isActive ? "#0F2F44" : "#8A9BB0",
                    fontWeight: isActive ? 700 : 400,
                    cursor: "pointer",
                  }}
                >
                  {s}
                  {s !== "Tous" && (
                    <span
                      className="ml-1.5"
                      style={{
                        fontSize: "10px",
                        color: isActive ? "#C8A75E" : "#C9CED6",
                        fontWeight: 600,
                      }}
                    >
                      ({PROJETS.filter((p) => p.secteur === s).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── GRILLE PROJETS ── */}
      <main style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

          {/* Compteur */}
          <p className="mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#8A9BB0" }}>
            <span style={{ color: "#0F2F44", fontWeight: 700 }}>{filtered.length}</span> projet{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}
            {filtre !== "Tous" && <span> · <button onClick={() => setFiltre("Tous")} style={{ color: "#C8A75E", background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}>Voir tous</button></span>}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((projet) => (
              <ProjetCard
                key={projet.id}
                projet={projet}
                onClick={() => setSelected(projet)}
              />
            ))}
          </div>
        </div>

        {/* CTA bas */}
        <div className="w-full py-14 flex flex-col items-center text-center" style={{ background: "#0F2F44" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", maxWidth: "460px", lineHeight: 1.7, marginBottom: "24px" }}>
            Vous avez un projet similaire à confier à Gordon - Services ?
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{ background: "#C8A75E", fontFamily: "'Montserrat', sans-serif", fontSize: "14px", letterSpacing: "0.06em", textDecoration: "none", boxShadow: "0 4px 20px rgba(200,167,94,0.3)" }}
          >
            Discuter de votre projet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      {/* ── MODAL ── */}
      {selected && (
        <ProjectModal projet={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}