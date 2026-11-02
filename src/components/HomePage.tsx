import Image from "next/image";
import MobileNav from "./MobileNav";
import WeeklySchedule from "./WeeklySchedule";
import LatestVideo from "./LatestVideo";
import Testimonios from "./Testimonios";
import { textos, type Idioma } from "../content/textos";
import { tarifas, DURACION_SESION_MINUTOS } from "../content/tarifas";
import { proximoEvento } from "../content/evento";
import { enlaceWhatsapp } from "../content/whatsapp";
import { RUTAS } from "../content/seo";

// Los nombres de los centros no se traducen.
const centros = [
  {
    nombre: "Serotonin Studio - Muntaner",
    barrio: "Sant Gervasi",
    direccion: "Carrer de Muntaner, 519 · 08022",
    modalidad: "Pilates Mat",
  },
  {
    nombre: "Serotonin Studio - Tarradellas",
    barrio: "Les Corts",
    direccion: "Av. de Josep Tarradellas, 91 · 08029",
    modalidad: "Pilates Mat",
  },
  {
    nombre: "MOU Pilates - Santaló",
    barrio: "Sarrià-Sant Gervasi",
    direccion: "Carrer de Santaló, 15 · 08021",
    modalidad: "Pilates Reformer",
  },
  {
    nombre: "Temple BCN",
    barrio: "Poblenou",
    direccion: "Carrer del Taulat, 46 · 08005",
    modalidad: "Pilates Reformer",
  },
  {
    nombre: "Hotcore Studios",
    barrio: "Sant Gervasi",
    direccion: "Carrer de Balmes, 256 · 08006",
    modalidad: "Pilates Mat · 34º",
  },
];

// Estilos de botones (los mismos que ya usaba la web)
const btnClaro =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-6 py-3 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors";
const btnOscuro =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#1f1b18] bg-[#1f1b18] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3a332d] transition-colors";
const btnTarjeta =
  "mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-4 py-2.5 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors";

/** 65 → "65 €" en castellano y "€65" en inglés */
function precio(euros: number, idioma: Idioma) {
  return idioma === "es" ? `${euros} €` : `€${euros}`;
}

/** Devuelve el próximo evento ya formateado, o null si no hay fecha o ya pasó. */
function eventoVigente(idioma: Idioma) {
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

const IconoWhatsapp = ({ className = "h-6 w-6" }: { className?: string }) => (
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

const WhatsappFlotante = ({ idioma }: { idioma: Idioma }) => {
  const t = textos[idioma].whatsappFlotante;
  return (
    <a
      href={enlaceWhatsapp(t.mensaje)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 sm:bottom-6 sm:right-6"
      aria-label={t.etiqueta}
      title={t.etiqueta}
    >
      <IconoWhatsapp />
    </a>
  );
};

const InstaBadge = ({
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

const SelectorIdioma = ({ idioma }: { idioma: Idioma }) => (
  <nav
    aria-label={textos[idioma].nav.idioma}
    className="flex items-center rounded-full border border-[#d8d0c6] bg-white p-0.5 text-xs font-semibold tracking-[0.12em]"
  >
    {(["es", "en"] as const).map((codigo) => {
      const activo = codigo === idioma;
      return (
        <a
          key={codigo}
          href={RUTAS[codigo]}
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

export default function HomePage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma];
  const evento = eventoVigente(idioma);

  const navLinks = [
    { label: t.nav.sesiones, href: "#sesiones" },
    { label: t.nav.eventos, href: "#eventos" },
    { label: t.nav.centros, href: "#centros" },
    { label: t.nav.horario, href: "#horario" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contacto, href: "#contacto" },
  ];

  // Líneas de precio de una sesión individual (el bono solo si tiene precio)
  const lineasIndividual = (tarifa: { sesion: number; bono5: number | null }) => [
    { precio: precio(tarifa.sesion, idioma), nota: t.sesiones.porSesion },
    ...(tarifa.bono5 !== null
      ? [{ precio: precio(tarifa.bono5, idioma), nota: t.sesiones.bono5 }]
      : []),
  ];

  const tarjetasPrecio = [
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
    <div className="min-h-screen text-[#1f1b18]">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
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
            <p className="font-serif text-xl tracking-tight">Anita Pilates</p>
            <p className="text-sm text-neutral-600">{t.cabecera.subtitulo}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-6 shrink-0">
          <nav className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-[0.18em] text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1f1b18] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SelectorIdioma idioma={idioma} />
          <MobileNav links={navLinks} ariaLabel={t.nav.abrirMenu} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-28 space-y-20 sm:space-y-24">
        {/* ── PORTADA ── */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center lg:min-h-[70vh]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-600">
              {t.portada.antetitulo}
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif leading-tight tracking-tight text-[#1f1b18]">
              {t.portada.titulo}
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t.portada.intro}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={enlaceWhatsapp(t.portada.mensajePrincipal)}
                target="_blank"
                rel="noreferrer"
                className={btnOscuro}
              >
                <IconoWhatsapp className="h-4 w-4" />
                {t.portada.botonPrincipal}
              </a>
              <a href="#sesiones" className={btnClaro}>
                {t.portada.botonTarifas}
              </a>
              <a href="#eventos" className={btnClaro}>
                {t.portada.botonEvento}
              </a>
            </div>
            <p className="text-sm text-neutral-600">{t.portada.nota}</p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700">
              {t.portada.diferenciales.map((item) => (
                <span
                  key={item.titulo}
                  className="rounded-2xl border border-[#d8d0c6] bg-white/80 px-4 py-3 flex flex-col gap-1"
                >
                  <span className="font-semibold">{item.titulo}</span>
                  <span className="leading-relaxed text-neutral-700">
                    {item.texto}
                  </span>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-neutral-600">
              {t.portada.etiquetas.map((etiqueta) => (
                <span
                  key={etiqueta}
                  className="rounded-full border border-[#d8d0c6] bg-white/70 px-3 py-2"
                >
                  {etiqueta}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_30%_20%,#e6dfd4,transparent_55%)]" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_15px_40px_rgba(53,45,38,0.08)] bg-white/70 backdrop-blur">
              <Image
                src="/anita-profile.jpg"
                alt={t.portada.fotoAlt}
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f1b18]/70 via-[#1f1b18]/20 to-transparent text-white px-6 py-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em]">
                    {t.portada.fotoLema}
                  </p>
                  <p className="text-lg font-semibold">{t.portada.fotoTitulo}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/50 px-3 py-1 text-xs">
                  {t.portada.fotoEtiqueta}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SESIONES PRIVADAS ── */}
        <section
          id="sesiones"
          className="scroll-mt-6 rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 sm:p-8 lg:p-12 shadow-[0_15px_45px_rgba(53,45,38,0.08)] space-y-8"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 lg:items-end">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                {t.sesiones.antetitulo}
              </p>
              <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
                {t.sesiones.titulo}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t.sesiones.intro}
              </p>
            </div>
            <p className="rounded-2xl border border-[#e2d8cb] bg-[#f3f0eb] px-4 py-3 text-sm text-neutral-700">
              {t.sesiones.detalle.replace(
                "{minutos}",
                String(DURACION_SESION_MINUTOS),
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tarjetasPrecio.map((tarjeta) => (
              <div
                key={tarjeta.titulo}
                className="rounded-2xl border border-[#e2d8cb] bg-white/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-4"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif tracking-tight text-[#1f1b18]">
                    {tarjeta.titulo}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {tarjeta.texto}
                  </p>
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <p className="text-sm text-neutral-700">{t.sesiones.dudas}</p>
            <a
              href={enlaceWhatsapp(t.sesiones.mensajeDudas)}
              target="_blank"
              rel="noreferrer"
              className={btnClaro}
            >
              {t.sesiones.botonDudas}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ── TESTIMONIOS (la lista está en src/content/testimonios.ts) ── */}
        <Testimonios idioma={idioma} />

        {/* ── EVENTOS ── */}
        <section
          id="eventos"
          className="scroll-mt-6 rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 sm:p-8 lg:p-12 shadow-[0_15px_45px_rgba(53,45,38,0.08)] grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              {t.eventos.antetitulo}
            </p>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              {t.eventos.titulo}
            </h2>
            <p className="text-neutral-700 leading-relaxed">{t.eventos.texto}</p>
            <div className="rounded-2xl border border-[#e2d8cb] bg-[#f3f0eb] px-5 py-4 space-y-1">
              {evento ? (
                <>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-700">
                    {t.eventos.proximo}
                  </p>
                  <p className="text-lg font-semibold">{evento.fecha}</p>
                  {evento.detalles && (
                    <p className="text-neutral-700">{evento.detalles}</p>
                  )}
                  {evento.tema && (
                    <p className="text-neutral-700">{evento.tema}</p>
                  )}
                </>
              ) : (
                <p className="font-semibold">{t.eventos.sinFecha}</p>
              )}
            </div>
            <p className="text-sm text-neutral-600">{t.eventos.plazas}</p>
            <a
              href={enlaceWhatsapp(
                evento ? t.eventos.mensajeConFecha : t.eventos.mensajeSinFecha,
              )}
              target="_blank"
              rel="noreferrer"
              className={btnClaro}
            >
              {evento ? t.eventos.botonConFecha : t.eventos.botonSinFecha}
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-[radial-gradient(circle_at_70%_40%,#e6dfd4,transparent_60%)]" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e2d8cb]">
              <Image
                src="/anita-session.jpg"
                alt={t.eventos.fotoAlt}
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section
          id="sobre-mi"
          className="scroll-mt-6 space-y-4 rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            {t.sobreMi.antetitulo}
          </p>
          <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
            {t.sobreMi.titulo}
          </h2>
          {t.sobreMi.parrafos.map((parrafo) => (
            <p key={parrafo} className="text-neutral-700 leading-relaxed">
              {parrafo}
            </p>
          ))}
          <div className="flex flex-wrap gap-3">
            <InstaBadge className="w-full sm:w-auto border border-[#c9c0b5] bg-white text-[#1f1b18] hover:bg-[#e6dfd4]" />
            <a
              href={enlaceWhatsapp(t.sobreMi.mensaje)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-5 py-3 text-sm font-semibold text-[#1f1b18] transition-colors hover:bg-[#e6dfd4]"
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:anita.pilatess@gmail.com"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-5 py-3 text-sm font-semibold text-[#1f1b18] transition-colors hover:bg-[#e6dfd4]"
            >
              anita.pilatess@gmail.com
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ── CLASES EN CENTROS ── */}
        <section
          id="centros"
          className="scroll-mt-6 grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch"
        >
          <div className="space-y-4 lg:space-y-6 self-stretch flex flex-col">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              {t.centros.antetitulo}
            </p>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              {t.centros.titulo}
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              {t.centros.texto1}
              <br />
              <br />
              {t.centros.texto2}
            </p>
            <div className="flex flex-col gap-3">
              {centros.map((centro) => (
                <div
                  key={centro.nombre}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#e2d8cb] bg-white/80 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-[#1f1b18]">
                      {centro.nombre}
                    </p>
                    <p className="text-sm text-neutral-700">
                      {centro.barrio} · {centro.direccion}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                      {centro.modalidad}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                    BCN
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 lg:space-y-6 self-stretch flex flex-col">
            <div className="rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_12px_36px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <Image
                src="/anita-extra.jpg"
                alt={t.centros.fotoAlt}
                width={1000}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)] space-y-4">
              <h3 className="text-xl font-serif tracking-tight text-[#1f1b18]">
                {t.centros.esperarTitulo}
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                {t.centros.esperar.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <p className="text-sm text-neutral-600">{t.centros.esperarNota}</p>
            </div>
          </div>
        </section>

        {/* ── HORARIO (se carga solo desde la hoja de Google) ── */}
        <section
          id="horario"
          className="scroll-mt-6 space-y-4 rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            {t.horario.antetitulo}
          </p>
          <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
            {t.horario.titulo}
          </h2>
          <p className="text-neutral-700">{t.horario.texto}</p>
          <WeeklySchedule idioma={idioma} />
        </section>

        {/* ── VÍDEO DE YOUTUBE (se carga solo) ── */}
        <section className="rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 sm:p-8 lg:p-12 shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="space-y-3 lg:w-1/3">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                {t.video.antetitulo}
              </p>
              <h3 className="text-2xl font-serif tracking-tight text-[#1f1b18]">
                {t.video.titulo}
              </h3>
              <p className="text-neutral-700 leading-relaxed">{t.video.texto}</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {t.video.reto}
              </p>
              <p className="text-sm text-neutral-600">{t.video.nota}</p>
              <a
                href="https://www.youtube.com/@Anita.pilates"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-5 py-3 text-sm font-semibold text-[#1f1b18] transition-colors hover:bg-[#e6dfd4]"
              >
                {t.video.boton}
                <span aria-hidden>→</span>
              </a>
            </div>
            <LatestVideo idioma={idioma} />
          </div>
        </section>

        {/* ── PREGUNTAS FRECUENTES ── */}
        <section id="faq" className="scroll-mt-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#c9c0b5]" />
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                {t.faq.antetitulo}
              </p>
            </div>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              {t.faq.titulo}
            </h2>
          </div>
          <div className="space-y-3">
            {t.faq.preguntas.map((item) => (
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
                  {item.respuesta.replace(
                    "{minutos}",
                    String(DURACION_SESION_MINUTOS),
                  )}
                </p>
              </details>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <p className="text-sm text-neutral-700">{t.faq.otraPregunta}</p>
            <a
              href={enlaceWhatsapp(t.faq.mensaje)}
              target="_blank"
              rel="noreferrer"
              className={btnClaro}
            >
              {t.faq.boton}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section
          id="contacto"
          className="scroll-mt-6 rounded-3xl border border-[#e2d8cb] bg-[#1f1b18] text-white px-6 py-10 sm:px-8 lg:px-12 lg:py-12 flex flex-col gap-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {t.contacto.antetitulo}
          </p>
          <h2 className="text-3xl font-serif tracking-tight">
            {t.contacto.titulo}
          </h2>
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
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {[
              { src: "/anita-pose.jpg", alt: t.contacto.fotos[0] },
              { src: "/anita-detail.jpg", alt: t.contacto.fotos[1] },
              { src: "/anita-hero.jpg", alt: t.contacto.fotos[2] },
            ].map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-2xl border border-white/20"
              >
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
      </main>
      <WhatsappFlotante idioma={idioma} />
    </div>
  );
}
