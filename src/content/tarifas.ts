// ─────────────────────────────────────────────────────────────
// TARIFAS DE LAS SESIONES PRIVADAS
// Para cambiar un precio, cambia solo el número (en euros).
// Se actualiza a la vez en castellano y en inglés.
// ─────────────────────────────────────────────────────────────

/** Duración de cada sesión, en minutos. */
export const DURACION_SESION_MINUTOS = 45;

export const tarifas = {
  /** Sesión individual (1:1) en Reformer */
  reformer1a1: {
    sesion: 65,
    bono5: 300, // bono de 5 sesiones
  },
  /** Sesión individual (1:1) en Mat */
  mat1a1: {
    sesion: 55,
    bono5: 250, // bono de 5 sesiones
  },
  /** Sesión dúo (2 personas). Precio POR PERSONA. */
  duo: {
    reformer: 40,
    mat: 35,
  },
};
