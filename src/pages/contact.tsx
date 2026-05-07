import { useState } from "react";
import { useSendMail } from "../hooks/useSendMail";

// ─── Infos de contact ─────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresse",
    value: "Avenue de l'Indépendance, Brazzaville",
    sub: "République du Congo",
    href: undefined,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
    label: "Téléphone",
    value: "+242 06 133 1010",
    sub: "Lun–Ven, 8h–18h",
    href: "tel:+242061331010",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "contact@gordonservices.cg",
    sub: "Réponse sous 24h",
    href: "mailto:contact@gordonservices.cg",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Horaires",
    value: "Lundi – Vendredi : 8h00 – 18h00",
    sub: "Samedi : 9h00 – 13h00",
    href: undefined,
  },
];

// ─── Services pour le select ──────────────────────────────────────────
const SERVICES_OPTIONS = [
  "Gestion Immobilière",
  "Location de Véhicules",
  "Logistique",
  "Sécurité",
  "Mise à Disposition de Personnel",
  "Technologie & Solutions Industrielles",
  "Hôtellerie & Hébergement",
  "Entretien & Espaces Verts",
  "Gordon Plantation – Cacao & Café",
  "Plusieurs services",
  "Autre",
];

// ─── Champ formulaire ─────────────────────────────────────────────────
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: "#0F2F44", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "#C8A75E", marginLeft: "3px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "14px",
  color: "#0F2F44",
  background: "#F7F8FA",
  border: "1px solid rgba(15,47,68,0.15)",
  padding: "12px 16px",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

// ─── Page Contact ─────────────────────────────────────────────────────
export default function ContactPage() {
  const { send, status, errorMsg } = useSendMail();

  const [form, setForm] = useState({
    nom: "", societe: "", email: "", telephone: "", service: "", message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await send({
      type:      "contact",
      nom:       form.nom,
      email:     form.email,
      telephone: form.telephone,
      societe:   form.societe,
      sujet:     form.service || "Contact général",
      message:   form.message,
    });
  }

  const s = (name: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === name ? "#C8A75E" : "rgba(15,47,68,0.15)",
    boxShadow:   focused === name ? "0 0 0 3px rgba(200,167,94,0.1)" : "none",
  });

  const fb = (name: string) => ({ onFocus: () => setFocused(name), onBlur: () => setFocused(null) });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden mt-15"
        style={{ background: "#0B2A40", minHeight: "280px", display: "flex", alignItems: "flex-end" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "340px", height: "340px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.1)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(200,167,94,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 30%, #0B2A40 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-14">
          <div className="flex items-center gap-3 mb-5">
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
              Parlons de votre projet
            </span>
          </div>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "16px" }}>
            Contactez-nous
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", lineHeight: 1.75 }}>
            Notre équipe vous répond sous 24h. Décrivez votre besoin et nous vous proposons une solution adaptée.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>

      {/* ══ CONTENU ═══════════════════════════════════════════════════ */}
      <main style={{ background: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Gauche : infos + WhatsApp ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {CONTACT_INFO.map(({ icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-4 p-5"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.12)", borderLeft: "3px solid #C8A75E" }}>
                  <div style={{ color: "#C8A75E", flexShrink: 0, marginTop: "2px" }}>{icon}</div>
                  <div className="flex flex-col gap-0.5">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      {label}
                    </span>
                    {href ? (
                      <a href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 600, color: "#0F2F44", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A75E")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#0F2F44")}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 600, color: "#0F2F44" }}>{value}</span>
                    )}
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#8A9BB0" }}>{sub}</span>
                  </div>
                </div>
              ))}

              <a href="https://wa.me/242061331010" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: "#25D366", fontFamily: "'Montserrat', sans-serif", fontSize: "14px", letterSpacing: "0.05em", textDecoration: "none", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L.057 23.215a.75.75 0 00.918.899l5.56-1.451A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.67-.522-5.188-1.432l-.37-.224-3.844 1.002 1.03-3.74-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Écrire sur WhatsApp
              </a>
            </div>

            {/* ── Droite : formulaire ── */}
            <div className="lg:col-span-3 p-8 sm:p-10"
              style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.12)" }}>

              <div className="mb-8">
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, color: "#0F2F44", marginBottom: "6px" }}>
                  Envoyez-nous un message
                </h2>
                <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #C8A75E, #D6C28A)", borderRadius: "2px" }} />
              </div>

              {/* ── Succès ── */}
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12 gap-4"
                  style={{ border: "1px solid rgba(200,167,94,0.2)", background: "rgba(200,167,94,0.04)" }}>
                  <div className="flex items-center justify-center"
                    style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(200,167,94,0.12)", border: "1px solid rgba(200,167,94,0.3)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "17px", fontWeight: 700, color: "#0F2F44" }}>
                    Message envoyé !
                  </h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "#5A6472", maxWidth: "340px", lineHeight: 1.7 }}>
                    Merci <strong>{form.nom}</strong>. Nous avons bien reçu votre message et vous répondrons sous 24h.
                  </p>
                  <button
                    onClick={() => { setForm({ nom: "", societe: "", email: "", telephone: "", service: "", message: "" }); window.location.reload(); }}
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#C8A75E", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Nom complet" required>
                      <input name="nom" type="text" required placeholder="Jean Dupont"
                        value={form.nom} onChange={handleChange} style={s("nom")} {...fb("nom")} />
                    </Field>
                    <Field label="Société / Organisation">
                      <input name="societe" type="text" placeholder="Nom de votre société"
                        value={form.societe} onChange={handleChange} style={s("societe")} {...fb("societe")} />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email" required>
                      <input name="email" type="email" required placeholder="vous@exemple.com"
                        value={form.email} onChange={handleChange} style={s("email")} {...fb("email")} />
                    </Field>
                    <Field label="Téléphone">
                      <input name="telephone" type="tel" placeholder="+242 06 000 0000"
                        value={form.telephone} onChange={handleChange} style={s("telephone")} {...fb("telephone")} />
                    </Field>
                  </div>

                  <Field label="Service concerné" required>
                    <select name="service" required value={form.service} onChange={handleChange}
                      style={{ ...s("service"), cursor: "pointer" }} {...fb("service")}>
                      <option value="">Sélectionnez un service…</option>
                      {SERVICES_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>

                  <Field label="Votre message" required>
                    <textarea name="message" required rows={5}
                      placeholder="Décrivez votre besoin, le contexte de votre projet, les délais souhaités…"
                      value={form.message} onChange={handleChange}
                      style={{ ...s("message"), resize: "vertical" }} {...fb("message")} />
                  </Field>

                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11.5px", color: "#8A9BB0", lineHeight: 1.6 }}>
                    En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande. Aucune donnée n'est transmise à des tiers.
                  </p>

                  {/* ── Erreur serveur ── */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4"
                      style={{ background: "#FFF5F5", border: "1px solid #C40010", borderLeft: "3px solid #C40010" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C40010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#C40010", lineHeight: 1.5 }}>
                        {errorMsg}
                      </span>
                    </div>
                  )}

                  {/* ── Bouton submit ── */}
                  <button type="submit" disabled={status === "loading"}
                    className="flex items-center justify-center gap-3 py-4 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95 mt-1"
                    style={{
                      background: status === "loading" ? "#A08040" : "#C8A75E",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      letterSpacing: "0.06em",
                      border: "none",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      boxShadow: "0 4px 20px rgba(200,167,94,0.3)",
                    }}>
                    {status === "loading" ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ══ GOOGLE MAPS ═══════════════════════════════════════════════ */}
        <div style={{ borderTop: "1px solid rgba(200,167,94,0.15)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ width: "28px", height: "1.5px", background: "#C8A75E", display: "block" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
                    Nous trouver
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, color: "#0F2F44" }}>
                  Notre localisation
                </h2>
              </div>
              <a href="https://maps.app.goo.gl/1XAXmhZXRoXN9g176" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 transition-all duration-200 hover:brightness-110"
                style={{ background: "#0F2F44", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textDecoration: "none", border: "1px solid rgba(200,167,94,0.2)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
          <div style={{ width: "100%", height: "420px" }}>
            <iframe
              title="Gordon Services — Brazzaville"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.843627970733!2d15.2708003!3d-4.2506647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33e50962be6b%3A0x551f72f892d74bf6!2sVLORA!5e0!3m2!1sfr!2sbj!4v1772103806183!5m2!1sfr!2sbj"
              width="100%" height="100%"
              style={{ border: "none", display: "block", filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}