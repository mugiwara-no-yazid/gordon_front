import { useState } from "react";
import { Link } from "react-router-dom";
import { useSendMail } from "../hooks/useSendMail";

// ─── Options ──────────────────────────────────────────────────────────
const SERVICES = [
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
  "Autre / Je ne sais pas encore",
];

const BUDGETS = [
  "Moins de 500 000 FCFA",
  "500 000 – 2 000 000 FCFA",
  "2 000 000 – 10 000 000 FCFA",
  "10 000 000 – 50 000 000 FCFA",
  "Plus de 50 000 000 FCFA",
  "Budget à définir",
];

const DELAIS = [
  "Urgent — sous 1 semaine",
  "Court terme — sous 1 mois",
  "Moyen terme — 1 à 3 mois",
  "Long terme — plus de 3 mois",
  "Délai flexible",
];

// ─── Composant champ ──────────────────────────────────────────────────
function Field({ label, required, hint, children }: {
  label: string; required?: boolean; hint?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11.5px", fontWeight: 700, color: "#0F2F44", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {label}{required && <span style={{ color: "#C8A75E", marginLeft: "3px" }}>*</span>}
        </label>
        {hint && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "#8A9BB0" }}>{hint}</span>}
      </div>
      {children}
    </div>
  );
}

function getInputStyle(focused: boolean): React.CSSProperties {
  return {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "14px",
    color: "#0F2F44",
    background: "#F7F8FA",
    border: `1px solid ${focused ? "#C8A75E" : "rgba(15,47,68,0.15)"}`,
    boxShadow: focused ? "0 0 0 3px rgba(200,167,94,0.1)" : "none",
    padding: "12px 16px",
    outline: "none",
    width: "100%",
    transition: "all 0.2s",
  };
}

// ─── Indicateur d'étapes ──────────────────────────────────────────────
function StepDot({ n, label, active, done }: { n: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-center transition-all duration-300"
        style={{ width: "36px", height: "36px", borderRadius: "50%", background: done ? "#C8A75E" : active ? "#0F2F44" : "#FFFFFF", border: `2px solid ${done || active ? "#C8A75E" : "rgba(15,47,68,0.15)"}` }}>
        {done ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
        ) : (
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: active ? "#C8A75E" : "#8A9BB0" }}>{n}</span>
        )}
      </div>
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: active ? 600 : 400, color: active ? "#0F2F44" : "#8A9BB0", whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}

// ─── Page Devis ───────────────────────────────────────────────────────
export default function DevisPage() {
  const { send, status, errorMsg } = useSendMail();

  const [step, setStep] = useState(1);
  const [focused, setFocused] = useState<string | null>(null);

  const [form, setForm] = useState({
    nom: "", poste: "", societe: "", email: "", telephone: "", pays: "",
    service: "", description: "",
    budget: "", delai: "", precision: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function f(name: string) {
    return { onFocus: () => setFocused(name), onBlur: () => setFocused(null) };
  }

  const is = (name: string) => getInputStyle(focused === name);

  function isStep1Valid() { return form.nom.trim() && form.email.trim() && form.societe.trim(); }
  function isStep2Valid() { return form.service && form.description.trim().length >= 20; }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await send({
      type:        "devis",
      nom:         form.nom,
      email:       form.email,
      poste:       form.poste,
      societe:     form.societe,
      telephone:   form.telephone,
      pays:        form.pays,
      service:     form.service,
      description: form.description,
      budget:      form.budget,
      delai:       form.delai,
      precisions:  form.precision,
    });
  }

  const isLoading = status === "loading";

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden mt-15"
        style={{ background: "#0B2A40", minHeight: "260px", display: "flex", alignItems: "flex-end" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "340px", height: "340px", borderRadius: "50%", border: "1.5px solid rgba(200,167,94,0.1)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(200,167,94,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 30%, #0B2A40 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ width: "36px", height: "1.5px", background: "#C8A75E", display: "block" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", letterSpacing: "0.22em", color: "#C8A75E", fontWeight: 600, textTransform: "uppercase" }}>
              Réponse sous 24h
            </span>
          </div>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "12px" }}>
            Demandez votre devis
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", maxWidth: "480px", lineHeight: 1.75 }}>
            Décrivez votre besoin en 3 étapes. Nous analysons votre demande et vous revenons avec une proposition personnalisée.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C8A75E 30%, #D6C28A 50%, #C8A75E 70%, transparent)" }} />
      </section>

      {/* ══ FORMULAIRE ════════════════════════════════════════════════ */}
      <main style={{ background: "#F7F8FA" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">

          {/* ── Écran confirmation ── */}
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-16 px-8"
              style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.2)" }}>
              <div className="flex items-center justify-center mb-6"
                style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(200,167,94,0.1)", border: "2px solid rgba(200,167,94,0.4)" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "24px", fontWeight: 700, color: "#0F2F44", marginBottom: "12px" }}>
                Demande envoyée !
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "#5A6472", maxWidth: "420px", lineHeight: 1.75, marginBottom: "32px" }}>
                Merci <strong>{form.nom}</strong>. Votre demande de devis a bien été reçue. Notre équipe vous contacte sous <strong>24h ouvrées</strong> à l'adresse <strong>{form.email}</strong>.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#FFFFFF", background: "#0F2F44", padding: "12px 24px", textDecoration: "none", letterSpacing: "0.06em" }}>
                  Retour à l'accueil
                </Link>
                <a href="https://wa.me/242061331010" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#FFFFFF", background: "#25D366", padding: "12px 24px", textDecoration: "none", letterSpacing: "0.06em" }}>
                  Confirmer sur WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* ── Indicateur d'étapes ── */}
              <div className="flex items-center justify-center mb-10">
                <div className="flex items-center gap-0">
                  {[{ n: 1, label: "Contact" }, { n: 2, label: "Projet" }, { n: 3, label: "Budget & Délais" }].map(({ n, label }, i) => (
                    <div key={n} className="flex items-center">
                      <StepDot n={n} label={label} active={step === n} done={step > n} />
                      {i < 2 && (
                        <div className="mx-3 mb-5" style={{ width: "60px", height: "1.5px", background: step > n ? "#C8A75E" : "rgba(15,47,68,0.12)", transition: "background 0.3s" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Carte formulaire ── */}
              <div style={{ background: "#FFFFFF", border: "1px solid rgba(200,167,94,0.15)" }}>

                {/* En-tête étape */}
                <div className="px-8 py-5"
                  style={{ borderBottom: "1px solid rgba(200,167,94,0.12)", background: step === 1 ? "#0F2F44" : step === 2 ? "#1B4F6B" : "#C8A75E" }}>
                  <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>
                    {step === 1 && "Étape 1 — Vos informations de contact"}
                    {step === 2 && "Étape 2 — Votre projet"}
                    {step === 3 && "Étape 3 — Budget & délais souhaités"}
                  </h2>
                </div>

                <form onSubmit={step < 3
                  ? (e) => { e.preventDefault(); if (step === 1 && isStep1Valid()) setStep(2); if (step === 2 && isStep2Valid()) setStep(3); }
                  : handleSubmit
                }>
                  <div className="px-8 py-8 flex flex-col gap-6">

                    {/* ══ ÉTAPE 1 ══ */}
                    {step === 1 && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <Field label="Nom complet" required>
                            <input name="nom" type="text" required placeholder="Jean Dupont" value={form.nom} onChange={handleChange} {...f("nom")} style={is("nom")} />
                          </Field>
                          <Field label="Poste / Fonction">
                            <input name="poste" type="text" placeholder="Directeur des Opérations" value={form.poste} onChange={handleChange} {...f("poste")} style={is("poste")} />
                          </Field>
                        </div>
                        <Field label="Société / Organisation" required>
                          <input name="societe" type="text" required placeholder="Nom de votre organisation" value={form.societe} onChange={handleChange} {...f("societe")} style={is("societe")} />
                        </Field>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <Field label="Email professionnel" required>
                            <input name="email" type="email" required placeholder="vous@societe.com" value={form.email} onChange={handleChange} {...f("email")} style={is("email")} />
                          </Field>
                          <Field label="Téléphone / WhatsApp">
                            <input name="telephone" type="tel" placeholder="+242 06 000 0000" value={form.telephone} onChange={handleChange} {...f("telephone")} style={is("telephone")} />
                          </Field>
                        </div>
                        <Field label="Pays d'intervention">
                          <input name="pays" type="text" placeholder="Ex : Congo, Gabon, Cameroun…" value={form.pays} onChange={handleChange} {...f("pays")} style={is("pays")} />
                        </Field>
                      </>
                    )}

                    {/* ══ ÉTAPE 2 ══ */}
                    {step === 2 && (
                      <>
                        <Field label="Service(s) concerné(s)" required>
                          <select name="service" required value={form.service} onChange={handleChange} {...f("service")} style={{ ...is("service"), cursor: "pointer" }}>
                            <option value="">Sélectionnez un service…</option>
                            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </Field>
                        <Field label="Description du besoin" required hint="Min. 20 caractères">
                          <textarea name="description" required rows={7}
                            placeholder="Décrivez votre besoin avec le maximum de détails : contexte, périmètre géographique, volume, contraintes spécifiques, équipes concernées, objectifs attendus…"
                            value={form.description} onChange={handleChange} {...f("description")}
                            style={{ ...is("description"), resize: "vertical" }} />
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: form.description.length >= 20 ? "#C8A75E" : "#8A9BB0", textAlign: "right" }}>
                            {form.description.length} caractères
                          </span>
                        </Field>
                      </>
                    )}

                    {/* ══ ÉTAPE 3 ══ */}
                    {step === 3 && (
                      <>
                        <Field label="Budget estimatif">
                          <select name="budget" value={form.budget} onChange={handleChange} {...f("budget")} style={{ ...is("budget"), cursor: "pointer" }}>
                            <option value="">Sélectionnez une fourchette…</option>
                            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </Field>

                        <Field label="Délai souhaité">
                          <select name="delai" value={form.delai} onChange={handleChange} {...f("delai")} style={{ ...is("delai"), cursor: "pointer" }}>
                            <option value="">Sélectionnez un délai…</option>
                            {DELAIS.map((d) => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </Field>

                        <Field label="Précisions complémentaires" hint="Optionnel">
                          <textarea name="precision" rows={4}
                            placeholder="Contraintes particulières, documents joints à prévoir, interlocuteurs à impliquer, questions spécifiques…"
                            value={form.precision} onChange={handleChange} {...f("precision")}
                            style={{ ...is("precision"), resize: "vertical" }} />
                        </Field>

                        {/* Récapitulatif */}
                        <div style={{ background: "#F7F8FA", border: "1px solid rgba(200,167,94,0.15)", padding: "16px 20px" }}>
                          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, color: "#C8A75E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                            Récapitulatif
                          </p>
                          {[
                            { label: "Contact", value: `${form.nom} — ${form.societe}` },
                            { label: "Service", value: form.service },
                            { label: "Pays",    value: form.pays || "Non précisé" },
                          ].map(({ label, value }) => (
                            <div key={label} className="flex gap-3 mb-1">
                              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#8A9BB0", minWidth: "60px" }}>{label}</span>
                              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "#0F2F44", fontWeight: 500 }}>{value}</span>
                            </div>
                          ))}
                        </div>

                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11.5px", color: "#8A9BB0", lineHeight: 1.6 }}>
                          En soumettant ce formulaire, vous acceptez que Gordon Services utilise vos données pour traiter votre demande de devis. Aucune donnée n'est transmise à des tiers.
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
                      </>
                    )}
                  </div>

                  {/* ── Navigation étapes ── */}
                  <div className="px-8 pb-8 flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)}
                        className="flex items-center gap-2 transition-all duration-200"
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#5A6472", background: "none", border: "1px solid rgba(15,47,68,0.15)", padding: "12px 20px", cursor: "pointer" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Retour
                      </button>
                    ) : <div />}

                    <button type="submit"
                      disabled={(step === 1 && !isStep1Valid()) || (step === 2 && !isStep2Valid()) || isLoading}
                      className="flex items-center gap-3 transition-all duration-200"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        background: (step === 1 && !isStep1Valid()) || (step === 2 && !isStep2Valid()) ? "rgba(200,167,94,0.4)" : "#C8A75E",
                        border: "none",
                        padding: "13px 28px",
                        cursor: (step === 1 && !isStep1Valid()) || (step === 2 && !isStep2Valid()) || isLoading ? "not-allowed" : "pointer",
                        letterSpacing: "0.06em",
                        boxShadow: "0 4px 20px rgba(200,167,94,0.25)",
                        opacity: isLoading ? 0.7 : 1,
                      }}>
                      {isLoading ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            style={{ animation: "spin 1s linear infinite" }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Envoi en cours…
                        </>
                      ) : step < 3 ? (
                        <>
                          Continuer
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Besoin d'aide ? */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#8A9BB0" }}>
                  Vous préférez nous parler directement ?
                </span>
                <div className="flex gap-3">
                  <a href="tel:+242061331010"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0F2F44", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A75E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#0F2F44")}>
                    📞 +242 06 133 1010
                  </a>
                  <span style={{ color: "#C9CED6" }}>|</span>
                  <a href="https://wa.me/242061331010" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#25D366", textDecoration: "none" }}>
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}