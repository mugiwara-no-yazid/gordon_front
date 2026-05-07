// ─────────────────────────────────────────────────────────────────────────────
// useSendMail.ts — Hook partagé Contact + Devis
//
// CONFIGURATION :
//   → Modifier MAIL_ENDPOINT selon où tu déposes send-mail.php
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";

// ── URL du script PHP ────────────────────────────────────────────────────────
// En développement : utilise un proxy Vite (voir vite.config.ts) ou l'URL directe
// En production    : remplacer par l'URL absolue, ex: "https://gordon-services.com/send-mail.php"
const MAIL_ENDPOINT = "http://localhost:8000/send-mail.php"

type Status = "idle" | "loading" | "success" | "error";

interface SendResult {
  success: boolean;
  message: string;
}

export function useSendMail() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function send(payload: Record<string, string>): Promise<boolean> {
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(MAIL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: SendResult = await res.json();

      if (data.success) {
        setStatus("success");
        return true;
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Une erreur est survenue.");
        return false;
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de contacter le serveur. Vérifiez votre connexion.");
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMsg("");
  }

  return { send, status, errorMsg, reset };
}
