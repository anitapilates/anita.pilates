/** @jsxImportSource react */
"use client";

import { useEffect, useState } from "react";
import { textos, type Idioma } from "../content/textos";

type ClassEntry = {
  DIA: string;
  INICIO: string;
  FIN: string;
  CENTRO: string;
  TIPO: string;
};

type DaySchedule = {
  day: string;
  classes: ClassEntry[];
};

// Traduce el nombre del día (que viene en castellano desde la hoja)
// al idioma de la página. Si no lo reconoce, lo deja tal cual.
function nombreDia(dia: string, idioma: Idioma) {
  const clave = dia
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return textos[idioma].dias[clave] ?? dia;
}

export default function WeeklySchedule({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos[idioma].horario;
  const [days, setDays] = useState<DaySchedule[] | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/horario", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setDays((data?.days as DaySchedule[]) ?? []);
      })
      .catch(() => {
        if (!mounted) return;
        setDays([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (days === null) {
    return (
      <div className="rounded-2xl border border-[#e2d8cb] bg-white/70 px-4 py-5 text-sm text-neutral-700">
        {t.cargando}
      </div>
    );
  }

  if (!days.length) {
    return (
      <div className="rounded-2xl border border-[#e2d8cb] bg-white/70 px-4 py-5 text-sm text-neutral-700">
        {t.noDisponible}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {days.map((day) => (
        <div
          key={day.day}
          className="rounded-2xl border border-[#e2d8cb] bg-white/80 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-600">
              {nombreDia(day.day, idioma)}
            </p>
            <span className="h-px flex-1 mx-3 bg-[#e2d8cb]" />
            <span className="text-xs text-neutral-500">
              {day.classes.length}{" "}
              {day.classes.length > 1 ? t.clases : t.clase}
            </span>
          </div>
          <div className="space-y-3">
            {day.classes.map((clase, idx) => (
              <div
                key={`${clase.DIA}-${clase.INICIO}-${idx}`}
                className="rounded-xl border border-[#e9dfd2] bg-white px-3 py-3"
              >
                <p className="text-sm font-semibold text-[#1f1b18]">
                  {clase.INICIO} – {clase.FIN}
                </p>
                <p className="text-sm text-neutral-700">{clase.CENTRO}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                  {clase.TIPO}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
