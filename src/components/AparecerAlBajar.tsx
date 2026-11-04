/** @jsxImportSource react */
"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * En móvil, muestra su contenido solo cuando ya se ha bajado un poco por la
 * página (para que el botón flotante no tape el botón principal de arriba).
 * En pantallas más grandes se ve siempre.
 */
export default function AparecerAlBajar({
  children,
  desde = 500,
}: {
  children: ReactNode;
  desde?: number;
}) {
  const [bajado, setBajado] = useState(false);
  useEffect(() => {
    const onScroll = () => setBajado(window.scrollY > desde);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [desde]);
  return (
    <div
      className={`transition-opacity duration-200 sm:opacity-100 sm:pointer-events-auto ${
        bajado ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
