import type { MetadataRoute } from "next";
import { SITE_URL } from "../content/seo";

// Mapa del sitio para Google, con las dos versiones de idioma.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: `${SITE_URL}/`, en: `${SITE_URL}/en` };
  return [
    { url: `${SITE_URL}/`, alternates: { languages } },
    { url: `${SITE_URL}/en`, alternates: { languages } },
  ];
}
