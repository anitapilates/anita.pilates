/** @jsxImportSource react */
"use client";

import { useEffect, useRef, useState } from "react";

type Link = { label: string; href: string };

/** A partir de cuántos píxeles bajados aparece la bolita flotante del menú. */
const MOSTRAR_BOLITA_DESDE = 120;
/** Cuántos píxeles hay que deslizar con el menú abierto para que se cierre solo. */
const CERRAR_AL_DESLIZAR = 12;

const IconoMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const estiloBolita =
  "flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d0c6] bg-white text-[#1f1b18]";

export default function MobileNav({
  links,
  ariaLabel = "Abrir menú",
}: {
  links: Link[];
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [bajado, setBajado] = useState(false);
  const scrollAlAbrir = useRef(0);

  // Muestra la bolita flotante cuando la cabecera ya no se ve
  useEffect(() => {
    const onScroll = () => setBajado(window.scrollY > MOSTRAR_BOLITA_DESDE);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto: se cierra al deslizar la página o con la tecla Escape
  useEffect(() => {
    if (!open) return;
    scrollAlAbrir.current = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - scrollAlAbrir.current) > CERRAR_AL_DESLIZAR) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      {/* Botón del menú dentro de la cabecera */}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className={`xl:hidden ${estiloBolita}`}
      >
        <IconoMenu />
      </button>

      {/* Bolita flotante: aparece al bajar, cuando la cabecera ya no se ve */}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        tabIndex={bajado ? 0 : -1}
        aria-hidden={!bajado}
        onClick={() => setOpen((v) => !v)}
        className={`xl:hidden fixed right-4 top-4 z-50 h-11 w-11 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 ${estiloBolita} ${
          bajado ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <IconoMenu />
      </button>

      {/* Fondo: tocarlo cierra el menú; deslizar sobre él mueve la página y también lo cierra */}
      {open && (
        <div
          className="xl:hidden fixed inset-0 z-40 bg-black/15"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="mobile-nav-panel"
        inert={!open}
        className={`fixed z-50 right-4 left-4 top-20 rounded-3xl border border-[#e2d8cb] bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-200 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        } xl:hidden`}
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-neutral-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
