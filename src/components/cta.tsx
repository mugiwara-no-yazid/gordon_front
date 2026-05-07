// ─── CTA FINAL ────────────────────────────────────────────────────────
export function CTAFinal() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#0B2A40" }}
      >
        {/* Déco fond */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.08)" }} />
          <div className="absolute" style={{ bottom: "-80px", left: "-80px", width: "380px", height: "380px", borderRadius: "50%", border: "1px solid rgba(200,167,94,0.06)" }} />
          {/* Grille déco */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(200,167,94,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Dégradé masquant la grille sur les bords */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, #0B2A40 100%)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 py-24 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
              Parlons de votre projet
            </span>
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
          </div>

          {/* Titre */}
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Prêt à confier vos opérations à{" "}
            <span style={{ color: "#C8A75E" }}>Gordon - Services ?</span>
          </h2>

          {/* Liseré */}
          <div style={{ width: "56px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px", margin: "20px auto 24px" }} />

          {/* Sous-titre */}
          <p
            className="mb-12 leading-relaxed"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "560px",
            }}
          >
            Obtenez un devis personnalisé sous 24h. Notre équipe analyse votre
            besoin et vous propose une solution adaptée à vos contraintes
            opérationnelles et budgétaires.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Devis — principal */}
            <a
              href="/devis"
              className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "#C8A75E",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(200,167,94,0.35)",
              }}
            >
              Demander un devis gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* WhatsApp — secondaire */}
            <a
              href="https://wa.me/242061331010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "#25D366",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                letterSpacing: "0.06em",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L.057 23.215a.75.75 0 00.918.899l5.56-1.451A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.67-.522-5.188-1.432l-.37-.224-3.844 1.002 1.03-3.74-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Écrire sur WhatsApp
            </a>


          </div>
        </div>

        {/* Liseré doré bas */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>
    </>
  );
}


