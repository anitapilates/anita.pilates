import type { MetadataRoute } from "next";
import { RUTAS, urlCompleta, enlacesIdioma, type Pagina } from "../content/seo";

// Mapa del sitio para Google: todas las páginas en los dos idiomas,
// cada una enlazada con su versión en el otro idioma.
export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = Object.keys(RUTAS) as Pagina[];
  return paginas.flatMap((pagina) =>
    (["es", "en"] as const).map((idioma) => ({
      url: urlCompleta(pagina, idioma),
      changeFrequency: "monthly" as const,
      priority: pagina === "inicio" ? 1 : 0.8,
      alternates: { languages: enlacesIdioma(pagina) },
    })),
  );
}
