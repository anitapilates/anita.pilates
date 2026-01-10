import Image from "next/image";
import MobileNav from "../components/MobileNav";
import WeeklySchedule from "../components/WeeklySchedule";
import LatestVideo from "../components/LatestVideo";

const navLinks = [
  { label: "Clases", href: "#clases" },
  { label: "Eventos", href: "#eventos" },
  { label: "Centros BCN", href: "#centros" },
  { label: "Mi horario", href: "#horario" },
  { label: "Contacto", href: "#contacto" },
];

const servicios = [
  {
    title: "Eventos grupales",
    desc: "Pilates mat cada dos meses para entrenar en comunidad, retar al core y reforzar la constancia.",
    badge: "BCN · Cada 2 meses",
    cta: "https://wa.me/34698288873",
    ctaLabel: "Reservar plaza",
  },
  {
    title: "Sesiones 1:1 y 1:2",
    desc: "Pilates personalizado (individual o en pareja) en función de tus objetivos, con seguimiento directo.",
    badge: "BCN · Online / Presencial",
    cta: "https://wa.me/34698288873",
    ctaLabel: "Coordinar 1:1",
  },
  {
    title: "Reto 21 días en YouTube",
    desc: "Serie gratuita para crear hábito: control, fuerza y postura en 21 sesiones guiadas. Sin impacto, con progresión clara.",
    badge: "Empieza hoy",
    cta: "https://www.youtube.com/@Anita.pilates",
    ctaLabel: "Ver canal",
  },
];

const centros = [
  {
    nombre: "Serotonin Studio",
    barrio: "Sant Gervasi",
    direccion: "Carrer de Muntaner, 519 · 08022",
    modalidad: "Pilates mat",
  },
  {
    nombre: "VIBRA Studio",
    barrio: "Eixample",
    direccion: "C/ Provenza, 199 · 08036",
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
    barrio: "Eixample",
    direccion: "Carrer de Balmes, 256 · 08006",
    modalidad: "Pilates mat · 34º",
  },
  {
    nombre: "YOGA 108",
    barrio: "Dreta de l'Eixample",
    direccion: "Carrer de Roger de Llúria, 115 · 08037",
    modalidad: "Pilates mat",
  },
];

const diferenciales = [
  "El método: Pilates clásico basado en control, respiración y precisión, con atención real al movimiento.",
  "Mat & Reformer: Pilates Mat y Pilates Reformer combinados para fortalecer el cuerpo con técnica y sin impacto.",
  "Progresión consciente: Clases con progresión cuidada para ganar fuerza, estabilidad y movilidad de forma natural.",
  "Formación certificada: Instructora de Mat y Reformer por Balanced Body.",
];

const WhatsappFloat = () => (
  <a
    href="https://wa.me/34698288873"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 sm:bottom-6 sm:right-6"
    aria-label="Escríbeme por WhatsApp"
  >
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M20.5 3.5A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.54 4.1 1.57 5.9L0 24l6.28-1.64A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.5Zm-8.5 19a9.97 9.97 0 0 1-5.07-1.38l-.36-.21-3.73.98.99-3.64-.24-.37A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.08-7.4c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.19.27-.73.91-.9 1.1-.17.18-.35.2-.63.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.66-1.56-1.94-.16-.27-.02-.42.12-.56.12-.12.27-.3.4-.45.13-.15.17-.26.26-.44.09-.18.05-.34-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.47-.63-.48l-.54-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.02.65.27 1.16.43 1.56.55.66.21 1.27.18 1.75.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.06-.12-.25-.2-.53-.34Z" />
    </svg>
  </a>
);

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

export default async function Home() {
  return (
    <div className="min-h-screen text-[#1f1b18]">
      <header className="max-w-6xl mx-auto px-6 lg:px-10 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d8d0c6] shadow-sm bg-white">
            <Image
              src="/anita-pose.jpg"
              alt="Anita Pilates"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-serif text-xl tracking-tight">Anita Pilates</p>
            <p className="text-sm text-neutral-600">Pilates Reformer · BCN</p>
          </div>
        </div>
        <MobileNav links={navLinks} />
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-[0.18em] text-neutral-700">
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
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-10 pb-24 space-y-20 sm:space-y-24">
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center lg:min-h-[70vh]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-600">
              Barcelona · Pilates Reformer · Mat
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif leading-tight tracking-tight text-[#1f1b18]">
              Pilates para crear un hábito fuerte, consciente y en equilibrio
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Soy Anita, instructora de Pilates en Barcelona. Trabajo con
              Pilates Mat y Pilates Reformer en clases grupales y sesiones 1:1 y
              1:2, con un enfoque en el movimiento consciente que fortalece el
              cuerpo y acompaña a sentirse mejor, física y mentalmente.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700">
              {diferenciales.map((item) => {
                const [title, ...rest] = item.split(":");
                const body = rest.join(":").trim();
                return (
                  <span
                    key={item}
                    className="rounded-2xl border border-[#d8d0c6] bg-white/80 px-4 py-3 flex flex-col gap-1"
                  >
                    <span className="font-semibold">{title}</span>
                    <span className="leading-relaxed text-neutral-700">
                      {body}
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#clases"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-6 py-3 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors"
              >
                Clases grupales
              </a>
              <a
                href="#clases"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-6 py-3 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors"
              >
                Sesiones 1:1 y 1:2
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-neutral-600">
              <span className="rounded-full border border-[#d8d0c6] bg-white/70 px-3 py-2">
                Certificada Balanced Body
              </span>
              <span className="rounded-full border border-[#d8d0c6] bg-white/70 px-3 py-2">
                Pilates Reformer
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Series grupales cada 2 meses · plazas limitadas · sin reservas
              automáticas
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_30%_20%,#e6dfd4,transparent_55%)]" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_15px_40px_rgba(53,45,38,0.08)] bg-white/70 backdrop-blur">
              <Image
                src="/anita-profile.jpg"
                alt="Anita presentándose"
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f1b18]/70 via-[#1f1b18]/20 to-transparent text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em]">
                    Control · Fuerza · Precisión
                  </p>
                  <p className="text-lg font-semibold">
                    Pilates y Reformer con Anita
                  </p>
                </div>
                <span className="rounded-full border border-white/50 px-3 py-1 text-xs">
                  BCN · Online
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="space-y-4 rounded-3xl border border-[#e2d8cb] bg-white/70 p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            Sobre mí
          </p>
          <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
            Anita · Pilates Mat y Pilates Reformer
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Soy Anita, instructora de Pilates en Barcelona. Durante varios años
            trabajé en el mundo de la consultoría, en un entorno muy exigente,
            hasta que el pilates se convirtió primero en una herramienta para
            cuidarme y, con el tiempo, en mi verdadera pasión.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Hace más de dos años decidí dar un giro profesional y formarme como
            instructora certificada de Pilates Mat y Pilates Reformer en el
            Centro Oficial de Formación Balanced Body. Hoy trabajo desde los
            principios del método de Joseph Pilates —control, respiración y
            precisión— para ayudar a las personas a ganar fuerza, mejorar su
            postura y crear un hábito que las haga sentirse bien en su cuerpo.
          </p>
          <div className="flex flex-wrap gap-3">
            <InstaBadge className="w-full sm:w-auto border border-[#c9c0b5] bg-white text-[#1f1b18] hover:bg-[#e6dfd4]" />
            <a
              href="https://wa.me/34698288873"
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

        <section id="horario" className="space-y-4 rounded-3xl border border-[#e2d8cb] bg-white/70 p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            Mi horario semanal
          </p>
          <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
            Mi horario de esta semana
          </h2>
          <p className="text-neutral-700">
            Aquí tienes dónde doy clases esta semana en Barcelona.
          </p>
          <WeeklySchedule />
        </section>

        <section id="clases" className="space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#c9c0b5]" />
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              Clases conmigo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((servicio) => (
              <div
                key={servicio.title}
                className="rounded-2xl border border-[#e2d8cb] bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-3"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  {servicio.badge}
                </span>
                <h3 className="text-xl font-serif tracking-tight text-[#1f1b18]">
                  {servicio.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {servicio.desc}
                </p>
                {servicio.cta ? (
                  <a
                    href={servicio.cta}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-4 py-2 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors"
                  >
                    {servicio.ctaLabel ?? "Saber más"}
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <a
                    href="#contacto"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1f1b18]"
                  >
                    Escríbeme
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-3xl border border-[#e2d8cb] bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-3 flex flex-col">
              <h3 className="text-2xl font-serif tracking-tight text-[#1f1b18]">
                Clases en centros
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Pilates mat y reformer en los estudios donde colaboro. Revisa
                los centros y escríbeme para confirmar horarios.
              </p>
              <a
                href="#centros"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-4 py-2 text-sm font-semibold text-[#1f1b18] hover:bg-[#e6dfd4] transition-colors"
              >
                Ver centros
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_10px_30px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <Image
                src="/anita-class.jpg"
                alt="Clase grupal de pilates con Anita"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="eventos"
          className="rounded-3xl border border-[#e2d8cb] bg-white/70 p-8 lg:p-12 shadow-[0_15px_45px_rgba(53,45,38,0.08)] grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              Eventos grupales · cada dos meses
            </p>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              Encuentros para entrenar juntas y subir nivel en mat.
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Encuentros especiales para entrenar juntas y subir un nivel más en
              la práctica. Trabajamos Pilates Mat y Pilates Reformer con el
              mismo cuidado y precisión: control, respiración, core y fuerza
              global. Cada evento se abre cada dos meses como una experiencia
              puntual, pensada para profundizar en el método y compartir el
              movimiento.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { mes: "Febrero 2026", foco: "Core y control" },
                { mes: "Abril 2026", foco: "Glúteo y estabilidad" },
                { mes: "Junio 2026", foco: "Movilidad y potencia" },
              ].map((serie) => (
                <div
                  key={serie.mes}
                  className="rounded-2xl border border-[#e2d8cb] bg-[#f3f0eb] px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-700">
                    Próxima serie
                  </p>
                  <p className="font-semibold">{serie.mes}</p>
                  <p className="text-neutral-700">{serie.foco}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-neutral-600">
              Próximo evento: Febrero 2026. Consulta disponibilidad y precios
              directamente conmigo; te respondo antes de abrir plazas.
            </p>
            <a
              href="https://wa.me/34698288873"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-5 py-3 text-sm font-semibold text-[#1f1b18] transition-colors hover:bg-[#e6dfd4]"
            >
              Preguntar por plazas
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-[radial-gradient(circle_at_70%_40%,#e6dfd4,transparent_60%)]" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e2d8cb]">
              <Image
                src="/anita-session.jpg"
                alt="Grupo pequeño practicando pilates"
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="centros"
          className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch"
        >
          <div className="space-y-4 lg:space-y-6 self-stretch flex flex-col">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              Barcelona
            </p>
            <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
              Encuéntrame en los siguientes centros
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Colaboro como instructora en distintos estudios de pilates en
              Barcelona, espacios cuidados donde el movimiento se vive con
              calma, atención y buena energía. Trabajo en centros que priorizan
              la luz natural, el silencio y una práctica consciente.
              <br />
              <br />
              Los horarios varían según la temporada. Escríbeme y te confirmo
              disponibilidad, horarios y precios en cada estudio.
            </p>
            <div className="flex flex-col gap-3">
              {centros.map((centro) => (
                <div
                  key={centro.nombre}
                  className="flex items-center justify-between rounded-2xl border border-[#e2d8cb] bg-white/80 px-4 py-3"
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
            <div className="mt-auto hidden lg:block" />
          </div>
          <div className="space-y-4 lg:space-y-6 self-stretch flex flex-col">
            <div className="rounded-3xl overflow-hidden border border-[#e2d8cb] shadow-[0_12px_36px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <Image
                src="/anita-extra.jpg"
                alt="Práctica de pilates con Anita"
                width={1000}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-3xl border border-[#e2d8cb] bg-white/70 p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)] space-y-4">
              <h3 className="text-xl font-serif tracking-tight text-[#1f1b18]">
                Qué puedes esperar
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                <li>· Bloques de fuerza y control inspirados en Joseph Pilates.</li>
                <li>· Ajuste de resortes y props para escalar intensidad sin impacto.</li>
                <li>· Corrección constante de alineación, respiración y precisión.</li>
                <li>· Final atlético con estabilidad de core y movilidad de columna.</li>
              </ul>
              <p className="text-sm text-neutral-600">
                Si tienes lesión o embarazo, adaptamos la práctica con antelación.
                Escríbeme para valorar juntas.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#e2d8cb] bg-white/70 p-8 lg:p-12 shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="space-y-3 lg:w-1/3">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                Último vídeo
              </p>
              <h3 className="text-2xl font-serif tracking-tight text-[#1f1b18]">
                Entrena conmigo en casa
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Clases de Pilates para entrenar desde casa con control, fuerza y
                buena técnica. Dale play o guárdalo para tu próxima práctica.
              </p>
              <p className="text-sm text-neutral-600">
                El canal de YouTube es una puerta de entrada al método. El trabajo
                más profundo lo hacemos en clases presenciales y sesiones 1:1.
              </p>
              <a
                href="https://www.youtube.com/@Anita.pilates"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c9c0b5] bg-white px-5 py-3 text-sm font-semibold text-[#1f1b18] transition-colors hover:bg-[#e6dfd4]"
              >
                Ver en YouTube
                <span aria-hidden>→</span>
              </a>
            </div>
            <LatestVideo />
          </div>
        </section>

        <section
          id="contacto"
          className="rounded-3xl border border-[#e2d8cb] bg-[#1f1b18] text-white px-8 py-10 lg:px-12 lg:py-12 flex flex-col gap-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Contacto
          </p>
          <h2 className="text-3xl font-serif tracking-tight">
            ¿Cómo quieres entrenar? Escríbeme y vemos qué opción encaja mejor
            contigo.
          </h2>
          <p className="text-white/80 leading-relaxed">
            Cuéntame si quieres clases grupales, un plan 1:1 o combinar ambos.
            Te respondo con disponibilidad y precios. Sin reservas automáticas:
            ajustamos la agenda juntas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/34698288873"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Escríbeme por WhatsApp
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
              { src: "/anita-pose.jpg", alt: "Anita en plancha sobre reformer" },
              { src: "/anita-detail.jpg", alt: "Detalle de alineación en reformer" },
              { src: "/anita-hero.jpg", alt: "Anita guiando a sus alumnas" },
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
      <WhatsappFloat />
    </div>
  );
}
