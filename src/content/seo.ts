import type { Metadata } from "next";
import { textos, type Idioma } from "./textos";
import { paginas } from "./paginas";

/** Dirección principal de la web (con www y sin barra final). */
export const SITE_URL = "https://www.anitapilates.com";

/** Páginas de la web. */
export type Pagina = "inicio" | "sesiones" | "empresas" | "eventos";

/** Dirección de cada página en cada idioma. */
export const RUTAS: Record<Pagina, Record<Idioma, string>> = {
  inicio: { es: "/", en: "/en" },
  sesiones: { es: "/sesiones-privadas", en: "/en/private-sessions" },
  empresas: { es: "/empresas-y-grupos", en: "/en/companies-and-groups" },
  eventos: { es: "/eventos", en: "/en/events" },
};

/** Dirección completa (con https://www...) de una página. */
export function urlCompleta(pagina: Pagina, idioma: Idioma) {
  const ruta = RUTAS[pagina][idioma];
  return ruta === "/" ? `${SITE_URL}/` : `${SITE_URL}${ruta}`;
}

/** Enlaces de idioma (hreflang) de una página, con x-default en castellano. */
export function enlacesIdioma(pagina: Pagina) {
  return {
    es: urlCompleta(pagina, "es"),
    en: urlCompleta(pagina, "en"),
    "x-default": urlCompleta(pagina, "es"),
  };
}

/** Título y descripción para buscadores, con los enlaces entre idiomas. */
export function metadatos(idioma: Idioma, pagina: Pagina = "inicio"): Metadata {
  const t = pagina === "inicio" ? textos[idioma].seo : paginas[pagina][idioma].seo;
  const url = urlCompleta(pagina, idioma);
  return {
    metadataBase: new URL(SITE_URL),
    title: t.titulo,
    description: t.descripcion,
    alternates: {
      canonical: url,
      languages: enlacesIdioma(pagina),
    },
    openGraph: {
      title: t.titulo,
      description: t.descripcion,
      url,
      siteName: "Anita Pilates",
      locale: idioma === "es" ? "es_ES" : "en_GB",
      alternateLocale: idioma === "es" ? ["en_GB"] : ["es_ES"],
      type: "website",
      images: [{ url: "/anita-profile.jpg", alt: "Anita Pilates" }],
    },
  };
}
