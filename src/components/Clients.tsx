import { useEffect } from "react";
// ─── Données clients / partenaires ────────────────────────────────────
const CLIENTS = [
  { name: "Total Energies",      abbr: "TE"  },
  { name: "UNICEF",              abbr: "UN"  },
  { name: "ONU",                 abbr: "ONU" },
  { name: "Bolloré Logistics",   abbr: "BL"  },
  { name: "Perenco",             abbr: "PC"  },
  { name: "Ministère des Mines", abbr: "MM"  },
  { name: "WFP",                 abbr: "WFP" },
  { name: "UNDP",                abbr: "UDP" },
  { name: "Saris Congo",         abbr: "SC"  },
  { name: "MSF",                 abbr: "MSF" },
];

const TRACK = [...CLIENTS, ...CLIENTS];

// ─── Carte client ─────────────────────────────────────────────────────
function ClientCard({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 mx-6 transition-all duration-300 cursor-default"
      style={{
        width: "200px",
        height: "130px",
        background: "#FFFFFF",
        border: "1px solid rgba(200,167,94,0.15)",
        borderRadius: "2px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#C8A75E";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(200,167,94,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,167,94,0.15)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Placeholder logo — remplace par <img src={logo} alt={name} className="object-contain" style={{width:"100px",height:"60px"}} /> */}
      <div
        className="flex items-center justify-center"
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "rgba(15,47,68,0.06)",
          border: "1px solid rgba(15,47,68,0.1)",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#0F2F44",
            letterSpacing: "0.05em",
          }}
        >
          {abbr}
        </span>
      </div>

      {/* Nom */}
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11.5px",
          fontWeight: 500,
          color: "#5A6472",
          textAlign: "center",
          lineHeight: 1.35,
          padding: "0 12px",
        }}
      >
        {name}
      </span>
    </div>
  );
}

// ─── Section Clients & Partenaires ────────────────────────────────────
export default function Clients() {
  useEffect(() => {
    const styleId = "marquee-style";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track {
        animation: marquee 32s linear infinite;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById(styleId)?.remove(); };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="w-full py-20" style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* ── En-tête ── */}
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
                Ils nous font confiance
              </span>
              <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            </div>

            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#0F2F44", marginBottom: "14px", lineHeight: 1.2 }}>
              Nos Clients & Partenaires
            </h2>

            <div style={{ width: "56px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px", marginBottom: "16px" }} />

            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14.5px", color: "#5A6472", maxWidth: "500px", lineHeight: 1.7 }}>
              Entreprises, institutions internationales et organisations
              opérant en République du Congo nous font confiance pour leurs
              opérations stratégiques.
            </p>
          </div>
        </div>

        {/* ── Bandeau défilant pleine largeur ── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            borderTop: "1px solid rgba(200,167,94,0.15)",
            borderBottom: "1px solid rgba(200,167,94,0.15)",
            padding: "36px 0",
            background: "#FFFFFF",
          }}
        >
          {/* Fondu gauche */}
          <div
            className="absolute left-0 top-0 h-full z-10 pointer-events-none"
            style={{ width: "160px", background: "linear-gradient(90deg, #FFFFFF, transparent)" }}
          />

          {/* Track défilant */}
          <div
            className="marquee-track flex items-center"
            style={{ width: "max-content" }}
          >
            {TRACK.map((client, i) => (
              <ClientCard key={`${client.name}-${i}`} {...client} />
            ))}
          </div>

          {/* Fondu droite */}
          <div
            className="absolute right-0 top-0 h-full z-10 pointer-events-none"
            style={{ width: "160px", background: "linear-gradient(270deg, #FFFFFF, transparent)" }}
          />
        </div>
      </section>
    </>
  );
}
