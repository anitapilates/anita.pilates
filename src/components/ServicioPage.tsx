// Plantilla de las páginas de servicio (sesiones privadas, empresas y
// grupos, eventos). Los textos están en src/content/paginas.ts.
import Image from "next/image";
import Testimonios from "./Testimonios";
import DatosEstructurados from "./DatosEstructurados";
import {
  btnClaro,
  btnOscuro,
  IconoWhatsapp,
  WhatsappFlotante,
  Cabecera,
  EncabezadoSeccion,
  TarjetasPrecio,
  CajaProximoEvento,
  botonEvento,
  ListaFaq,
  OtraPregunta,
  Contacto,
} from "./comun";
import { textos, type Idioma } from "../content/textos";
import { paginas, type PaginaServicio } from "../content/paginas";
import { enlaceWhatsapp } from "../content/whatsapp";
import { RUTAS } from "../content/seo";

const EMAIL = "anita.pilatess@gmail.com";

const panel =
  "sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 lg:p-10 sm:shadow-[0_12px_36px_rgba(0,0,0,0.05)]";

const ListaPuntos = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-neutral-700 leading-relaxed">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7b8a0]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function ServicioPage({
  idioma,
  pagina,
}: {
  idioma: Idioma;
  pagina: PaginaServicio;
}) {
  const t = textos[idioma];
  const config = paginas[pagina];
  const p = config[idioma];

  // Botón principal de WhatsApp y botón secundario de cada página
  const evento = botonEvento(idioma);
  const principal = {
    sesiones: {
      texto: t.portada.botonPrincipal,
      href: enlaceWhatsapp(t.portada.mensajePrincipal),
    },
    empresas: {
      texto: t.grupos.botonWhatsapp,
      href: enlaceWhatsapp(t.grupos.mensajeWhatsapp),
    },
    eventos: evento,
  }[pagina];
  const mailtoGrupos = `mailto:${EMAIL}?subject=${encodeURIComponent(t.grupos.asuntoEmail)}`;
  const idPrecio = { sesiones: "tarifas", empresas: "propuesta", eventos: "proximo-evento" }[
    pagina
  ];
  const secundario =
    pagina === "empresas" ? mailtoGrupos : `#${idPrecio}`;

  const intro =
    p.intro ||
    (pagina === "empresas" ? t.grupos.texto : pagina === "eventos" ? t.eventos.texto : "");

  const preguntas = [
    ...config.faqPortada.map((id) => {
      const item = t.faq.preguntas.find((q) => q.id === id);
      if (!item) throw new Error(`Falta la pregunta frecuente "${id}"`);
      return item;
    }),
    ...p.faqExtra,
  ];

  const otras = (["sesiones", "eventos", "empresas"] as const).filter((x) => x !== pagina);

  return (
    <div className="min-h-screen text-[#1f1b18]">
      <DatosEstructurados idioma={idioma} pagina={pagina} />
      <Cabecera idioma={idioma} pagina={pagina} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-28 space-y-16 sm:space-y-24">
        {/* ── CABECERA DE LA PÁGINA ── */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-600">
              {p.antetitulo}
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif leading-tight tracking-tight text-[#1f1b18]">
              {p.h1}
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">{intro}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href={principal.href} target="_blank" rel="noreferrer" className={btnOscuro}>
                <IconoWhatsapp className="h-4 w-4" />
                {principal.texto}
              </a>
              <a href={secundario} className={btnClaro}>
                {p.botonSecundario}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-600">
              {p.datos.map((dato) => (
                <span
                  key={dato}
                  className="rounded-full border border-[#d8d0c6] bg-white/70 px-2.5 py-1.5 sm:px-3 sm:py-2"
                >
                  {dato}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_30%_20%,#e6dfd4,transparent_55%)]" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_15px_40px_rgba(53,45,38,0.08)] aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={config.foto.src}
                alt={config.foto.alt[idioma]}
                width={900}
                height={1125}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── QUÉ INCLUYE · PARA QUIÉN ES ── */}
        <section className="grid lg:grid-cols-2 gap-12 sm:gap-6">
          <div className={`${panel} space-y-5`}>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              {p.incluyeTitulo}
            </h2>
            <ListaPuntos items={p.incluye} />
          </div>
          <div className={`${panel} space-y-5`}>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              {p.paraQuienTitulo}
            </h2>
            <ListaPuntos items={p.paraQuien} />
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="space-y-6">
          <EncabezadoSeccion antetitulo={p.nombre} titulo={p.comoTitulo} />
          <ol className="grid md:grid-cols-3 gap-6">
            {p.pasos.map((paso, i) => (
              <li
                key={paso.titulo}
                className="rounded-2xl border border-[#e2d8cb] bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-3"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d0c6] bg-[#e6dfd4] font-serif text-lg text-[#1f1b18]"
                >
                  {i + 1}
                </span>
                <h3 className="text-xl font-serif tracking-tight text-[#1f1b18]">
                  {paso.titulo}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── TARIFAS / PRÓXIMO EVENTO / PROPUESTA ── */}
        <section
          id={idPrecio}
          className="scroll-mt-6 sm:rounded-3xl sm:border sm:border-[#e2d8cb] sm:bg-white/70 sm:p-8 lg:p-12 sm:shadow-[0_15px_45px_rgba(53,45,38,0.08)] space-y-6"
        >
          <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
            {p.precioTitulo}
          </h2>

          {pagina === "sesiones" && (
            <>
              <TarjetasPrecio idioma={idioma} />
              <ListaPuntos items={p.precioNotas} />
            </>
          )}

          {pagina === "eventos" && (
            <div className="space-y-4 max-w-2xl">
              <CajaProximoEvento idioma={idioma} />
              <p className="text-sm text-neutral-600">{t.eventos.plazas}</p>
              <a href={evento.href} target="_blank" rel="noreferrer" className={btnClaro}>
                {evento.texto}
                <span aria-hidden>→</span>
              </a>
            </div>
          )}

          {pagina === "empresas" && (
            <div className="space-y-5 max-w-2xl">
              <p className="text-neutral-700 leading-relaxed">{p.precioTexto}</p>
              <div className="flex flex-wrap gap-3">
                <a href={principal.href} target="_blank" rel="noreferrer" className={btnClaro}>
                  {t.grupos.botonWhatsapp}
                  <span aria-hidden>→</span>
                </a>
                <a href={mailtoGrupos} className={btnClaro}>
                  {t.grupos.botonEmail}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          )}
        </section>

        {/* ── TESTIMONIOS ── */}
        {config.testimonios === "todos" ? (
          <Testimonios idioma={idioma} />
        ) : config.testimonios.length > 0 ? (
          <Testimonios idioma={idioma} nombres={config.testimonios} />
        ) : null}

        {/* ── PREGUNTAS FRECUENTES ── */}
        <section id="faq" className="scroll-mt-6 space-y-6">
          <EncabezadoSeccion antetitulo={t.faq.antetitulo} titulo={t.faq.titulo} />
          <ListaFaq preguntas={preguntas} />
          <OtraPregunta idioma={idioma} />
        </section>

        {/* ── TAMBIÉN TE PUEDE INTERESAR ── */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            {t.nav.relacionadas}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otras.map((otra) => {
              const o = paginas[otra][idioma];
              return (
                <a
                  key={otra}
                  href={RUTAS[otra][idioma]}
                  className="group rounded-2xl border border-[#e2d8cb] bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-3 transition-colors hover:bg-white"
                >
                  <h3 className="text-2xl font-serif tracking-tight text-[#1f1b18]">
                    {o.nombre}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{o.resumen}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1f1b18] underline-offset-4 group-hover:underline">
                    {t.nav.verMas}
                    <span aria-hidden>→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <Contacto idioma={idioma} />
      </main>
      <WhatsappFlotante idioma={idioma} />
    </div>
  );
}
