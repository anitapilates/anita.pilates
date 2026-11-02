import type { Metadata } from "next";
import { textos, type Idioma } from "./textos";

/** Dirección principal de la web (sin barra final). */
export const SITE_URL = "https://anitapilates.com";

/** Dirección de cada idioma. */
export const RUTAS: Record<Idioma, string> = { es: "/", en: "/en" };

/** Título y descripción para buscadores, con los enlaces entre idiomas. */
export function metadatos(idioma: Idioma): Metadata {
  const t = textos[idioma].seo;
  return {
    metadataBase: new URL(SITE_URL),
    title: t.titulo,
    description: t.descripcion,
    alternates: {
      canonical: RUTAS[idioma],
      languages: {
        es: RUTAS.es,
        en: RUTAS.en,
        "x-default": RUTAS.es,
      },
    },
    openGraph: {
      title: t.titulo,
      description: t.descripcion,
      url: RUTAS[idioma],
      siteName: "Anita Pilates",
      locale: idioma === "es" ? "es_ES" : "en_GB",
      alternateLocale: idioma === "es" ? ["en_GB"] : ["es_ES"],
      type: "website",
      images: [{ url: "/anita-profile.jpg", alt: "Anita Pilates" }],
    },
  };
}
