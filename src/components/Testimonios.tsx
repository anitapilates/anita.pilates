/** @jsxImportSource react */
"use client";

import { useEffect, useRef } from "react";
import { testimonios } from "../content/testimonios";
import { textos, type Idioma } from "../content/textos";

/** Segundos que espera el carrusel antes de pasar solo a la siguiente tarjeta. */
const SEGUNDOS_PASO_AUTOMATICO = 5;

const Flecha = ({ direccion }: { direccion: "izq" | "der" }) => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {direccion === "izq" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

const btnFlecha =
  "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#c9c0b5] bg-white text-[#1f1b18] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#e6dfd4] md:flex";

/** Desplaza el carrusel una tarjeta; al llegar al final vuelve al principio. */
function moverPista(el: HTMLDivElement | null, sentido: 1 | -1) {
  if (!el) return;
  const paso =
    el.children.length < 2
      ? el.clientWidth
      : (el.children[1] as HTMLElement).offsetLeft -
        (el.children[0] as HTMLElement).offsetLeft;
  const alFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
  const alPrincipio = el.scrollLeft <= 4;
  if (sentido === 1 && alFinal) {
    el.scrollTo({ left: 0, behavior: "smooth" });
  } else if (sentido === -1 && alPrincipio) {
    el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  } else {
    el.scrollBy({ left: sentido * paso, behavior: "smooth" });
  }
}

export default function Testimonios({ idioma }: { idioma: Idioma }) {
  const t = textos[idioma].testimonios;
  const pista = useRef<HTMLDivElement>(null);
  const ultimaInteraccion = useRef(0);
  const ultimoPaso = useRef(0);
  const encima = useRef(false);

  const mover = (sentido: 1 | -1) => moverPista(pista.current, sentido);

  const marcarInteraccion = () => {
    ultimaInteraccion.current = Date.now();
  };

  // Paso automático: avanza cada 5 s, salvo si la persona está usando
  // el carrusel, tiene el ratón encima o prefiere evitar animaciones.
  useEffect(() => {
    const sinAnimaciones = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (sinAnimaciones) return;
    ultimoPaso.current = Date.now();
    const espera = SEGUNDOS_PASO_AUTOMATICO * 1000;
    const id = window.setInterval(() => {
      const ahora = Date.now();
      if (document.hidden || encima.current) {
        ultimoPaso.current = ahora;
        return;
      }
      if (ahora - ultimaInteraccion.current < espera) return;
      if (ahora - ultimoPaso.current < espera) return;
      ultimoPaso.current = ahora;
      moverPista(pista.current, 1);
    }, 500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="testimonios"
      aria-roledescription="carousel"
      aria-label={t.carrusel}
      className="scroll-mt-6 space-y-6"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-[#c9c0b5]" />
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            {t.antetitulo}
          </p>
        </div>
        <h2 className="text-3xl font-serif tracking-tight text-[#1f1b18]">
          {t.titulo}
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => (encima.current = true)}
        onMouseLeave={() => (encima.current = false)}
      >
        <button
          type="button"
          aria-label={t.anterior}
          onClick={() => {
            marcarInteraccion();
            mover(-1);
          }}
          className={`${btnFlecha} -left-5`}
        >
          <Flecha direccion="izq" />
        </button>

        <div
          ref={pista}
          onPointerDown={marcarInteraccion}
          onTouchStart={marcarInteraccion}
          onWheel={marcarInteraccion}
          onFocus={marcarInteraccion}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-6"
        >
          {testimonios.map((item, i) => (
            <figure
              key={`${item.nombre}-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${testimonios.length}`}
              className="flex w-[85%] shrink-0 snap-start flex-col gap-5 rounded-2xl border border-[#e2d8cb] bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:w-[60%] md:w-[45%] lg:w-[30%]"
            >
              <span
                aria-hidden
                className="font-serif text-4xl leading-none text-[#c7b8a0]"
              >
                “
              </span>
              <blockquote className="-mt-3 text-neutral-700 leading-relaxed">
                {item.texto[idioma]}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8d0c6] bg-[#e6dfd4] font-serif text-lg text-[#1f1b18]"
                >
                  {item.nombre.charAt(0).toUpperCase()}
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold text-[#1f1b18]">
                    {item.nombre}
                  </span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-neutral-600">
                    {item.tipo === "habitual" ? t.habitual : t.primera}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label={t.siguiente}
          onClick={() => {
            marcarInteraccion();
            mover(1);
          }}
          className={`${btnFlecha} -right-5`}
        >
          <Flecha direccion="der" />
        </button>
      </div>
    </section>
  );
}
