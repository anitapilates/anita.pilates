// ─────────────────────────────────────────────────────────────
// TARIFAS DE LAS SESIONES PRIVADAS
// Para cambiar un precio, cambia solo el número (en euros).
// Se actualiza a la vez en castellano y en inglés.
// Para ocultar un bono, pon null. Para mostrarlo, pon su precio.
// ─────────────────────────────────────────────────────────────

/** Duración de cada sesión, en minutos (también se usa en las FAQ). */
export const DURACION_SESION_MINUTOS = 50;

export const tarifas: {
  reformer1a1: { sesion: number; bono5: number | null };
  mat1a1: { sesion: number; bono5: number | null };
  duo: { reformer: number; mat: number };
} = {
  /** Sesión individual (1:1) en Reformer */
  reformer1a1: {
    sesion: 60,
    bono5: null, // bono de 5 sesiones (null = no se muestra)
  },
  /** Sesión individual (1:1) en Mat */
  mat1a1: {
    sesion: 40,
    bono5: null, // bono de 5 sesiones (null = no se muestra)
  },
  /** Sesión dúo (2 personas). Precio POR PERSONA. */
  duo: {
    reformer: 50, // 100 € en total
    mat: 35, // 70 € en total
  },
};
