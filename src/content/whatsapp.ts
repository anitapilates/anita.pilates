// ─────────────────────────────────────────────────────────────
// WHATSAPP
// Número de Anita (con prefijo de país, sin "+" ni espacios).
// Los mensajes ya escritos de cada botón están en textos.ts.
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMERO = "34698288873";

/** Crea el enlace que abre WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsapp(mensaje?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
