// Piezas compartidas por la portada y las páginas de servicio,
// para que todas se vean igual y se editen en un solo sitio.
import Image from "next/image";
import MobileNav from "./MobileNav";
import AparecerAlBajar from "./AparecerAlBajar";
import { textos, type Idioma } from "../content/textos";
import { tarifas, DURACION_SESION_MINUTOS } from "../content/tarifas";
import { proximoEvento } from "../content/evento";
import { enlaceWhatsapp } from "../content/whatsapp";
import { RUTAS, type Pagina } from "../content/seo";

// Estilos de botones (los mismos que ya usaba la web)
export const btnClaro =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-6 py-3 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors";
export const btnOscuro =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#1f1b18] bg-[#1f1b18] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3a332d] transition-colors";
export const btnTarjeta =
  "mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-4 py-2.5 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors";

/** 65 → "65 €" en castellano y "€65" en inglés */
export function precio(euros: number, idioma: Idioma) {
  return idioma === "es" ? `${euros} €` : `€${euros}`;
}

/** Devuelve el próximo evento ya formateado, o null si no hay fecha o ya pasó. */
export function eventoVigente(idioma: Idioma) {
  const { fecha, hora, lugar, modalidad, tema } = proximoEvento;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) return null;
  const hoy = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Madrid",
  }).format(new Date());
  if (fecha < hoy) return null;
  const [a, m, d] = fecha.split("-").map(Number);
  const fechaTexto = new Intl.DateTimeFormat(
    idioma === "es" ? "es-ES" : "en-GB",
    { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" },
  ).format(new Date(Date.UTC(a, m - 1, d)));
  return {
    fecha: fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1),
    detalles: [hora, lugar, modalidad[idioma]].filter(Boolean).join(" · "),
    tema: tema[idioma],
  };
}

export const IconoWhatsapp = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M20.5 3.5A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.54 4.1 1.57 5.9L0 24l6.28-1.64A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.5Zm-8.5 19a9.97 9.97 0 0 1-5.07-1.38l-.36-.21-3.73.98.99-3.64-.24-.37A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.08-7.4c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.19.27-.73.91-.9 1.1-.17.18-.35.2-.63.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.66-1.56-1.94-.16-.27-.02-.42.12-.56.12-.12.27-.3.4-.45.13-.15.17-.26.26-.44.09-.18.05-.34-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.47-.63-.48l-.54-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.02.65.27 1.16.43 1.56.55.66.21 1.27.18 1.75.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.06-.12-.25-.2-.53-.34Z" />
  </svg>
);

export const WhatsappFlotante = ({ idioma }: { idioma: Idioma }) => {
  const t = textos[idioma].whatsappFlotante;
  return (
    <AparecerAlBajar>
      <a
        href={enlaceWhatsapp(t.mensaje)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-30 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 sm:bottom-6 sm:right-6"
        aria-label={t.etiqueta}
        title={t.etiqueta}
      >
        <IconoWhatsapp />
      </a>
    </AparecerAlBajar>
  );
};

export const InstaBadge = ({
  label = "anita.pilates",
  className = "",
  variant = "light",
}: {
  label?: string;
  className?: string;
  variant?: "light" | "dark";
}) => {
  const styles =
    variant === "dark"
      ? "border-white/85 bg-transparent text-white hover:bg-white/12"
      : "border-[#c9c0b5] bg-white text-[#1f1b18] hover:bg-[#e6dfd4]";
  return (
    <a
      href="https://www.instagram.com/anita.pilates"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
      {label}
    </a>
  );
};

const SelectorIdioma = ({
  idioma,
  pagina,
}: {
  idioma: Idioma;
  pagina: Pagina;
}) => (
  <nav
    aria-label={textos[idioma].nav.idioma}
    className="flex items-center rounded-full border border-[#d8d0c6] bg-white p-0.5 text-xs font-semibold tracking-[0.12em]"
  >
    {(["es", "en"] as const).map((codigo) => {
      const activo = codigo === idioma;
      return (
        <a
          key={codigo}
          href={RUTAS[pagina][codigo]}
          hrefLang={codigo}
          lang={codigo}
          aria-current={activo ? "page" : undefined}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${
            activo
              ? "bg-[#1f1b18] text-white"
              : "text-neutral-600 hover:text-[#1f1b18]"
          }`}
        >
          {codigo.toUpperCase()}
        </a>
      );
    })}
  </nav>
);

/** Enlaces del menú, iguales en todas las páginas. */
export function enlacesMenu(idioma: Idioma) {
  const t = textos[idioma].nav;
  const inicio = RUTAS.inicio[idioma];
  const ancla = (id: string) => (inicio === "/" ? `/#${id}` : `${inicio}#${id}`);
  return [
    { label: t.sesiones, href: RUTAS.sesiones[idioma] },
    { label: t.eventos, href: RUTAS.eventos[idioma] },
    { label: t.empresas, href: RUTAS.empresas[idioma] },
    { label: t.centros, href: ancla("centros") },
    { label: t.horario, href: ancla("horario") },
    { label: t.contacto, href: "#contacto" },
  ];
}

/** Cabecera con logo, menú y selector de idioma. */
export function Cabecera({ idioma, pagina }: { idioma: Idioma; pagina: Pagina }) {
  const t = textos[idioma];
  const navLinks = enlacesMenu(idioma);
  return (
    // En ordenador grande, la cabecera (con el menú en una línea) se queda fija
    // arriba al bajar. En portátil, tablet y móvil, los apartados se ven en una
    // fila de texto bajo el logo; al bajar aparece la bolita del menú.
    <div className="xl:sticky xl:top-0 xl:z-40 xl:border-b xl:border-[#e2d8cb]/70 xl:bg-[#f8f6f3]/90 xl:backdrop-blur-md">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a href={RUTAS.inicio[idioma]} className="flex items-center gap-3 min-w-0">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d8d0c6] shadow-sm bg-white">
            <Image
              src="/anita-pose.jpg"
              alt="Anita Pilates"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="leading-tight min-w-0">
            <p className="font-serif text-xl tracking-tight whitespace-nowrap">Anita Pilates</p>
            <p className="text-sm text-neutral-600">{t.cabecera.subtitulo}</p>
          </div>
        </a>
        <div className="flex items-center gap-3 xl:gap-6 shrink-0">
          <nav className="hidden xl:flex items-center gap-4 text-sm uppercase tracking-[0.12em] text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.href === RUTAS[pagina][idioma] ? "page" : undefined}
                className="hover:text-[#1f1b18] transition-colors aria-[current=page]:text-[#1f1b18]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SelectorIdioma idioma={idioma} pagina={pagina} />
          <MobileNav links={navLinks} ariaLabel={t.nav.abrirMenu} />
        </div>
      </header>

      {/* Apartados en una fila bajo el logo (portátil, tablet y móvil) */}
      <nav
        aria-label={t.nav.secciones}
        className="xl:hidden relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="-mx-4 flex gap-5 overflow-x-auto border-y border-[#e2d8cb] px-4 [scrollbar-width:none] sm:mx-0 sm:gap-7 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === RUTAS[pagina][idioma] ? "page" : undefined}
              className="shrink-0 whitespace-nowrap py-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-neutral-700 underline-offset-[6px] transition-colors hover:text-[#1f1b18] aria-[current=page]:text-[#1f1b18] aria-[current=page]:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Degradado a la derecha: indica que la fila se puede deslizar */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#f8f6f3] to-transparent lg:hidden"
        />
      </nav>
    </div>
  );
}

/** Antetítulo con raya + título de sección (estilo de testimonios y FAQ). */
export function EncabezadoSeccion({
  antetitulo,
  titulo,
}: {
  antetitulo: string;
  titulo: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-[#c9c0b5]" />
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
          {antetitulo}
        </p>
      </div>
      <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">{titulo}</h2>
    </div>
  );
}

/** Enlace discreto "Ver más →" hacia una página de servicio. */
export function VerMas({
  idioma,
  pagina,
  nombre,
}: {
  idioma: Idioma;
  pagina: Pagina;
  nombre: string;
}) {
  const etiqueta = textos[idioma].nav.verMas;
  return (
    <a
      href={RUTAS[pagina][idioma]}
      aria-label={`${etiqueta}: ${nombre}`}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f1b18] underline-offset-4 hover:underline"
    >
      {etiqueta}
      <span aria-hidden>→</span>
    </a>
  );
}

/** Las tres tarjetas de precios de las sesiones privadas. */
export function TarjetasPrecio({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma];
  const lineasIndividual = (tarifa: { sesion: number; bono5: number | null }) => [
    { precio: precio(tarifa.sesion, idioma), nota: t.sesiones.porSesion },
    ...(tarifa.bono5 !== null
      ? [{ precio: precio(tarifa.bono5, idioma), nota: t.sesiones.bono5 }]
      : []),
  ];
  const tarjetas = [
    { ...t.sesiones.tarjetas.reformer, lineas: lineasIndividual(tarifas.reformer1a1) },
    { ...t.sesiones.tarjetas.mat, lineas: lineasIndividual(tarifas.mat1a1) },
    {
      ...t.sesiones.tarjetas.duo,
      lineas: [
        {
          precio: `${precio(tarifas.duo.reformer, idioma)}${t.sesiones.porPersona}`,
          nota: "Reformer",
        },
        {
          precio: `${precio(tarifas.duo.mat, idioma)}${t.sesiones.porPersona}`,
          nota: "Mat",
        },
      ],
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tarjetas.map((tarjeta) => (
        <div
          key={tarjeta.titulo}
          className="rounded-2xl border border-[#e2d8cb] bg-white/90 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-4"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-serif tracking-tight text-[#1f1b18]">
              {tarjeta.titulo}
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">{tarjeta.texto}</p>
          </div>
          <div className="divide-y divide-[#e9dfd2] rounded-xl border border-[#e9dfd2] bg-[#f8f6f3]">
            {tarjeta.lineas.map((linea) => (
              <div
                key={linea.nota}
                className="flex items-baseline justify-between gap-3 px-4 py-3"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                  {linea.nota}
                </span>
                <span className="text-lg font-semibold text-[#1f1b18] whitespace-nowrap">
                  {linea.precio}
                </span>
              </div>
            ))}
          </div>
          <a
            href={enlaceWhatsapp(tarjeta.mensaje)}
            target="_blank"
            rel="noreferrer"
            className={btnTarjeta}
          >
            {t.sesiones.meInteresa}
            <span aria-hidden>→</span>
          </a>
        </div>
      ))}
    </div>
  );
}

/** Caja "Próximo evento" (o el mensaje por defecto si no hay fecha). */
export function CajaProximoEvento({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].eventos;
  const evento = eventoVigente(idioma);
  return (
    <div className="rounded-2xl border border-[#e2d8cb] bg-[#f3f0eb] px-5 py-4 space-y-1">
      {evento ? (
        <>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-700">
            {t.proximo}
          </p>
          <p className="text-lg font-semibold">{evento.fecha}</p>
          {evento.detalles && <p className="text-neutral-700">{evento.detalles}</p>}
          {evento.tema && <p className="text-neutral-700">{evento.tema}</p>}
        </>
      ) : (
        <p className="font-semibold">{t.sinFecha}</p>
      )}
    </div>
  );
}

/** Botón de WhatsApp del próximo evento (cambia si hay fecha o no). */
export function botonEvento(idioma: Idioma) {
  const t = textos[idioma].eventos;
  const evento = eventoVigente(idioma);
  return {
    texto: evento ? t.botonConFecha : t.botonSinFecha,
    href: enlaceWhatsapp(evento ? t.mensajeConFecha : t.mensajeSinFecha),
  };
}

/** Lista de preguntas frecuentes desplegables. */
export function ListaFaq({
  preguntas,
}: {
  preguntas: { pregunta: string; respuesta: string }[];
}) {
  return (
    <div className="space-y-3">
      {preguntas.map((item) => (
        <details
          key={item.pregunta}
          className="group rounded-2xl border border-[#e2d8cb] bg-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-[#1f1b18] [&::-webkit-details-marker]:hidden">
            {item.pregunta}
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8d0c6] text-lg leading-none text-neutral-600 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-neutral-700 leading-relaxed">
            {item.respuesta.replace("{minutos}", String(DURACION_SESION_MINUTOS))}
          </p>
        </details>
      ))}
    </div>
  );
}

/** Bloque "¿Tienes otra pregunta? Escríbeme" bajo las FAQ. */
export function OtraPregunta({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].faq;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
      <p className="text-sm text-neutral-700">{t.otraPregunta}</p>
      <a
        href={enlaceWhatsapp(t.mensaje)}
        target="_blank"
        rel="noreferrer"
        className={btnClaro}
      >
        {t.boton}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

/** Sección oscura de contacto (al final de cada página). */
export function Contacto({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma];
  return (
    <section
      id="contacto"
      className="scroll-mt-6 rounded-3xl border border-[#e2d8cb] bg-[#1f1b18] text-white px-6 py-10 sm:px-8 lg:px-12 lg:py-12 flex flex-col gap-4"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
        {t.contacto.antetitulo}
      </p>
      <h2 className="text-3xl font-serif tracking-tight">{t.contacto.titulo}</h2>
      <p className="text-white/80 leading-relaxed">{t.contacto.texto}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={enlaceWhatsapp(t.contacto.mensaje)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          {t.contacto.boton}
          <span aria-hidden>→</span>
        </a>
        <InstaBadge
          variant="dark"
          className="w-full sm:w-auto border border-white/85 bg-transparent text-white hover:bg-white/12"
        />
        <a
          href="mailto:anita.pilatess@gmail.com"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          anita.pilatess@gmail.com
          <span aria-hidden>→</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
        {[
          { src: "/anita-pose.jpg", alt: t.contacto.fotos[0] },
          { src: "/anita-detail.jpg", alt: t.contacto.fotos[1] },
          { src: "/anita-hero.jpg", alt: t.contacto.fotos[2] },
        ].map((item) => (
          <div key={item.src} className="aspect-square sm:aspect-auto overflow-hidden rounded-xl sm:rounded-2xl border border-white/20">
            <Image
              src={item.src}
              alt={item.alt}
              width={700}
              height={700}
              className="h-full w-full object-cover opacity-95"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
