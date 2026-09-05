import { useState, useEffect, useRef } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";

// ─── Icônes SVG dorées ────────────────────────────────────────────────
function IconTrend() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function IconAward() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── Données stats ────────────────────────────────────────────────────
const STATS = [
  { end: 50, prefix: "+", suffix: "", label: "Projets réalisés", Icon: IconTrend },
  { end: 9, prefix: "+", suffix: "", label: "Secteurs d'activité", Icon: IconAward },
  { end: 5, prefix: "", suffix: "", label: "Pays d'intervention", Icon: IconPin },
];

// ─── Composant stat animé ─────────────────────────────────────────────
function StatItem({
  end, prefix, suffix, label, Icon, started,
}: {
  end: number; prefix: string; suffix: string;
  label: string; Icon: () => ReactElement; started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Icône */}
      <Icon />

      {/* Nombre animé */}
      <span
        className="tabular-nums leading-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(40px, 5vw, 58px)",
          fontWeight: 700,
          color: "#C8A75E",
        }}
      >
        {prefix}{count}{suffix}
      </span>

      {/* Label */}
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────
export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: "#0B2A40" }}
      >
        {/* ── Déco arrière-plan ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ top: "-80px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.12)" }} />
          <div className="absolute" style={{ top: "-40px", right: "-40px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(200,167,94,0.08)" }} />
          <div className="absolute right-0 top-0 h-full w-[45%] hidden lg:block" style={{ background: "linear-gradient(135deg, rgba(27,79,107,0.5) 0%, rgba(15,47,68,0.2) 60%, transparent 100%)", clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
          <svg className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block" width="320" height="320" viewBox="0 0 100 100" fill="none" opacity="0.06">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8A75E" />
                <stop offset="100%" stopColor="#4AADE0" />
              </linearGradient>
            </defs>
            <polygon points="50,5 5,95 95,95" fill="url(#heroGrad)" />
            {[0.25, 0.45, 0.65, 0.82].map((t, i) => {
              const y = 5 + t * 90;
              const halfW = t * 45;
              return <line key={i} x1={50 - halfW} y1={y} x2={50 + halfW} y2={y} stroke="white" strokeWidth="1.5" />;
            })}
          </svg>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{ width: "3px", height: "3px", background: "#C8A75E", opacity: 0.25, top: `${20 + i * 12}%`, right: `${8 + (i % 3) * 4}%` }} />
          ))}
          <div className="absolute left-0 top-0 h-full" style={{ width: "3px", background: "linear-gradient(180deg, transparent, #C8A75E 30%, #C8A75E 70%, transparent)", opacity: 0.18 }} />
        </div>

        {/* ── CONTENU PRINCIPAL ── */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-10 w-full py-32">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block" style={{ width: "40px", height: "1.5px", background: "#C8A75E" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
                République du Congo
              </span>
            </div>

            {/* Slogan */}
            <h1
              className="text-white leading-[1.15] mb-6 italic text-center"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 700 }}
            >
              Des solutions multiples.
              <br />
              Un engagement unique.
            </h1>

            {/* Liseré doré */}
            <div className="mb-8" style={{ width: "64px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px" }} />

            {/* Sous-titre */}
            <p className="mb-10 leading-relaxed max-w-lg" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.8vw, 16px)", color: "rgba(255,255,255,0.65)", fontWeight: 400 }}>
              Gordon - Services SARLU accompagne les entreprises et institutions
              de la République du Congo avec des solutions professionnelles adaptées à
              vos défis opérationnels.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 px-7 py-4 font-semibold text-white rounded-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: "#C8A75E", fontFamily: "'Montserrat', sans-serif", fontSize: "14px", letterSpacing: "0.04em", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(200,167,94,0.35)" }}
              >
                <Link
                  to="/devis"
                  className="flex items-center "
                  style={{ background: "#C8A75E", fontFamily: "'Montserrat', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none" }}
                >
                  Demander un devis
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </button>

              <a
                href="https://wa.me/242061331010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-7 py-4 font-semibold text-white rounded-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: "#25D366", fontFamily: "'Montserrat', sans-serif", fontSize: "14px", letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L.057 23.215a.75.75 0 00.918.899l5.56-1.451A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.67-.522-5.188-1.432l-.37-.224-3.844 1.002 1.03-3.74-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── BANDE STATS ── */}
        <div
          ref={statsRef}
          className="relative z-10 w-full"
          style={{
            background: "#0D2438",
            borderTop: "1px solid rgba(200,167,94,0.15)",
          }}
        >
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="grid grid-cols-3">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-stretch">

                  {/* Stat centrée */}
                  <div className="flex-1 flex justify-center">
                    <StatItem {...stat} started={started} />
                  </div>

                  {/* Séparateur vertical */}
                  {i < STATS.length - 1 && (
                    <div
                      className="hidden sm:block flex-shrink-0 self-center"
                      style={{
                        width: "1px",
                        height: "72px",
                        background: "linear-gradient(180deg, transparent, rgba(200,167,94,0.28) 30%, rgba(200,167,94,0.28) 70%, transparent)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Liseré doré bas */}
        <div
          className="h-[2px] w-full"
          style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }}
        />
      </section>
    </>
  );
}
