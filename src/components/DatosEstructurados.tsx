// Datos estructurados (JSON-LD) para Google: describen a Anita como
// instructora de pilates en Barcelona y sus servicios. Los precios
// salen de tarifas.ts, así que se actualizan solos.
import { tarifas, DURACION_SESION_MINUTOS } from "../content/tarifas";
import { type Idioma } from "../content/textos";
import { paginas, type PaginaServicio } from "../content/paginas";
import { SITE_URL, urlCompleta, type Pagina } from "../content/seo";
import { WHATSAPP_NUMERO } from "../content/whatsapp";

const ID_ANITA = `${SITE_URL}/#anita`;

function persona(idioma: Idioma) {
  return {
    "@type": "Person",
    "@id": ID_ANITA,
    name: "Anita",
    alternateName: "Anita Pilates",
    jobTitle: idioma === "es" ? "Instructora de Pilates" : "Pilates instructor",
    description:
      idioma === "es"
        ? "Instructora de Pilates Mat y Pilates Reformer en Barcelona, certificada por Balanced Body. Sesiones privadas (1:1 y dúo), eventos y clases para empresas, residencias y grupos."
        : "Mat and Reformer Pilates instructor in Barcelona, certified by Balanced Body. Private sessions (1:1 and duo), events and classes for companies, student residences and groups.",
    url: urlCompleta("inicio", idioma),
    image: `${SITE_URL}/anita-profile.jpg`,
    email: "mailto:anita.pilatess@gmail.com",
    telephone: `+${WHATSAPP_NUMERO}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    knowsLanguage: ["es", "en"],
    knowsAbout: ["Pilates", "Pilates Reformer", "Pilates Mat"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name:
        idioma === "es"
          ? "Instructora certificada de Pilates Mat y Pilates Reformer"
          : "Certified Mat and Reformer Pilates instructor",
      recognizedBy: { "@type": "Organization", name: "Balanced Body" },
    },
    sameAs: [
      "https://www.instagram.com/anita.pilates",
      "https://www.youtube.com/@Anita.pilates",
    ],
  };
}

function oferta(nombre: string, euros: number) {
  return {
    "@type": "Offer",
    name: nombre,
    price: euros.toFixed(2),
    priceCurrency: "EUR",
  };
}

function servicio(pagina: PaginaServicio, idioma: Idioma) {
  const t = paginas[pagina][idioma];
  const es = idioma === "es";
  const base = {
    "@type": "Service",
    "@id": `${urlCompleta(pagina, idioma)}#servicio`,
    name: t.h1,
    description: t.seo.descripcion,
    serviceType: "Pilates",
    url: urlCompleta(pagina, idioma),
    provider: { "@id": ID_ANITA },
    areaServed: { "@type": "City", name: "Barcelona" },
    availableLanguage: ["es", "en"],
  };
  if (pagina !== "sesiones") return base;
  const min = DURACION_SESION_MINUTOS;
  return {
    ...base,
    offers: [
      oferta(es ? `Sesión 1:1 Reformer (${min} min)` : `1:1 Reformer session (${min} min)`, tarifas.reformer1a1.sesion),
      ...(tarifas.reformer1a1.bono5 !== null
        ? [oferta(es ? "Bono de 5 sesiones 1:1 Reformer" : "1:1 Reformer 5-session pack", tarifas.reformer1a1.bono5)]
        : []),
      oferta(es ? `Sesión 1:1 Mat (${min} min)` : `1:1 Mat session (${min} min)`, tarifas.mat1a1.sesion),
      ...(tarifas.mat1a1.bono5 !== null
        ? [oferta(es ? "Bono de 5 sesiones 1:1 Mat" : "1:1 Mat 5-session pack", tarifas.mat1a1.bono5)]
        : []),
      oferta(es ? "Sesión dúo Reformer (precio por persona)" : "Duo Reformer session (price per person)", tarifas.duo.reformer),
      oferta(es ? "Sesión dúo Mat (precio por persona)" : "Duo Mat session (price per person)", tarifas.duo.mat),
    ],
  };
}

export default function DatosEstructurados({
  idioma,
  pagina,
}: {
  idioma: Idioma;
  pagina: Pagina;
}) {
  const servicios: PaginaServicio[] =
    pagina === "inicio" ? ["sesiones", "empresas", "eventos"] : [pagina];
  const datos = {
    "@context": "https://schema.org",
    "@graph": [persona(idioma), ...servicios.map((p) => servicio(p, idioma))],
  };
  return (
    <script
      type="application/ld+json"
      // El "<" se escapa para que el texto no pueda cerrar la etiqueta.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(datos).replace(/</g, "\\u003c"),
      }}
    />
  );
}
