import Image from "next/image";
import WeeklySchedule from "./WeeklySchedule";
import LatestVideo from "./LatestVideo";
import Testimonios from "./Testimonios";
import DatosEstructurados from "./DatosEstructurados";
import { textos, type Idioma } from "../content/textos";
import { DURACION_SESION_MINUTOS } from "../content/tarifas";
import { enlaceWhatsapp } from "../content/whatsapp";
import {
  btnClaro,
  btnOscuro,
  IconoWhatsapp,
  WhatsappFlotante,
  InstaBadge,
  Cabecera,
  VerMas,
  TarjetasPrecio,
  CajaProximoEvento,
  botonEvento,
  ListaFaq,
  OtraPregunta,
  Contacto,
} from "./comun";

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


// Botón claro que en móvil va a medio ancho (dos por fila)
const btnClaroCompacto =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-3 sm:px-6 py-3 text-[13px] sm:text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors";

export default function HomePage({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma];
  const evento = botonEvento(idioma);

  return (
    <div className="min-h-screen text-[#1f1b18]">
      <DatosEstructurados idioma={idioma} pagina="inicio" />
      <Cabecera idioma={idioma} pagina="inicio" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-28 space-y-16 sm:space-y-24">
        {/* ── PORTADA ── */}
        {/* En móvil, el orden es: titular y texto → botones → foto → resto.
            En ordenador, texto a la izquierda y foto a la derecha. */}
        <section className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center lg:min-h-[70vh]">
          <div className="contents lg:block lg:space-y-6">
           <div className="order-1 space-y-5 lg:order-none lg:space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] sm:tracking-[0.28em] text-neutral-600">
              {t.portada.antetitulo}
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif leading-tight tracking-tight text-[#1f1b18]">
              {t.portada.titulo}
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t.portada.intro}
            </p>
           </div>
           <div className="order-2 space-y-4 lg:order-none lg:space-y-6">
            <div className="grid grid-cols-2 gap-3 pt-1 sm:flex sm:flex-wrap">
              <a
                href={enlaceWhatsapp(t.portada.mensajePrincipal)}
                target="_blank"
                rel="noreferrer"
                className={`col-span-2 ${btnOscuro}`}
              >
                <IconoWhatsapp className="h-4 w-4" />
                {t.portada.botonPrincipal}
              </a>
              <a href="#sesiones" className={btnClaroCompacto}>
                {t.portada.botonTarifas}
              </a>
              <a href="#eventos" className={btnClaroCompacto}>
                {t.portada.botonEvento}
              </a>
            </div>
            <p className="text-sm text-neutral-600">{t.portada.nota}</p>
           </div>
           <div className="order-4 space-y-6 lg:order-none">
            <div className="grid divide-y divide-[#e2d8cb] border-y border-[#e2d8cb] text-sm text-neutral-700 sm:grid-cols-2 sm:gap-3 sm:divide-y-0 sm:border-y-0">
              {t.portada.diferenciales.map((item) => (
                <span
                  key={item.titulo}
                  className="py-3 flex flex-col gap-1 sm:rounded-2xl sm:border sm:border-[#d8d0c6] sm:bg-white/80 sm:px-4"
                >
                  <span className="font-semibold">{item.titulo}</span>
                  <span className="leading-relaxed text-neutral-700">
                    {item.texto}
                  </span>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-600">
              {t.portada.etiquetas.map((etiqueta) => (
                <span
                  key={etiqueta}
                  className="rounded-full border border-[#d8d0c6] bg-white/70 px-2.5 py-1.5 sm:px-3 sm:py-2"
                >
                  {etiqueta}
                </span>
              ))}
            </div>
           </div>
          </div>

          <div className="relative order-3 lg:order-none">
            <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_30%_20%,#e6dfd4,transparent_55%)]" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_15px_40px_rgba(53,45,38,0.08)] bg-white/70 backdrop-blur aspect-[4/5] sm:aspect-auto">
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
          className="scroll-mt-6 sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 lg:p-12 sm:shadow-[0_15px_45px_rgba(53,45,38,0.08)] space-y-8"
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

          <TarjetasPrecio idioma={idioma} />

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
            <VerMas idioma={idioma} pagina="sesiones" nombre={t.nav.sesiones} />
          </div>
        </section>

        {/* ── TESTIMONIOS (la lista está en src/content/testimonios.ts) ── */}
        <Testimonios idioma={idioma} />

        {/* ── EVENTOS Y GRUPOS ── */}
        <section id="eventos" className="scroll-mt-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#c9c0b5]" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              {t.grupos.seccion}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 sm:gap-6 items-stretch">
            {/* Tarjeta: eventos */}
            <div className="sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 lg:p-10 sm:shadow-[0_15px_45px_rgba(53,45,38,0.08)] flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                {t.eventos.antetitulo}
              </p>
              <h3 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
                {t.eventos.titulo}
              </h3>
              <p className="text-neutral-700 leading-relaxed">{t.eventos.texto}</p>
              <CajaProximoEvento idioma={idioma} />
              <p className="text-sm text-neutral-600">{t.eventos.plazas}</p>
              <div className="mt-auto pt-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <a
                  href={evento.href}
                  target="_blank"
                  rel="noreferrer"
                  className={btnClaro}
                >
                  {evento.texto}
                  <span aria-hidden>→</span>
                </a>
                <VerMas idioma={idioma} pagina="eventos" nombre={t.nav.eventos} />
              </div>
            </div>

            {/* Tarjeta: empresas, residencias y grupos */}
            <div className="sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 lg:p-10 sm:shadow-[0_15px_45px_rgba(53,45,38,0.08)] flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#e2d8cb] aspect-[16/9]">
                <Image
                  src="/anita-session.jpg"
                  alt={t.eventos.fotoAlt}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                {t.grupos.antetitulo}
              </p>
              <h3 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
                {t.grupos.titulo}
              </h3>
              <p className="text-neutral-700 leading-relaxed">{t.grupos.texto}</p>
              <div className="mt-auto pt-1 flex flex-wrap gap-3">
                <a
                  href={enlaceWhatsapp(t.grupos.mensajeWhatsapp)}
                  target="_blank"
                  rel="noreferrer"
                  className={btnClaro}
                >
                  {t.grupos.botonWhatsapp}
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={`mailto:anita.pilatess@gmail.com?subject=${encodeURIComponent(t.grupos.asuntoEmail)}`}
                  className={btnClaro}
                >
                  {t.grupos.botonEmail}
                  <span aria-hidden>→</span>
                </a>
                <span className="self-center">
                  <VerMas idioma={idioma} pagina="empresas" nombre={t.nav.empresas} />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section
          id="sobre-mi"
          className="scroll-mt-6 space-y-4 sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 sm:shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
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
                  <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-neutral-600">
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
          className="scroll-mt-6 space-y-4 sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 sm:shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
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
        <section className="sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 lg:p-12 sm:shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
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
          <ListaFaq preguntas={t.faq.preguntas} />
          <OtraPregunta idioma={idioma} />
        </section>

        {/* ── CONTACTO ── */}
        <Contacto idioma={idioma} />
      </main>
      <WhatsappFlotante idioma={idioma} />
    </div>
  );
}
