import { NextResponse } from "next/server";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSBNdcHyMCQkqGw3YOw2VTcUaszt617jiyvi_IhAoEiz97-Kw-MAvA6pi2P5V315adp8OOQ7vkv2wav/pub?gid=0&single=true&output=csv";

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

const DAYS_ORDER = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export const revalidate = 1800; // 30 min

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(CSV_URL, {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");

    const csv = await res.text();
    const lines = csv
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);

    // Encontrar la línea que contiene la cabecera real (DIA,INICIO,...)
    const headerIndex = lines.findIndex((line) =>
      /^DIA\s*,\s*INICIO/i.test(line)
    );
    if (headerIndex === -1) throw new Error("Header not found");

    const rows = lines.slice(headerIndex);
    const headers = rows.shift()?.split(",").map((h) => h.trim().toUpperCase());
    if (!headers || headers.length < 5) throw new Error("Bad headers");

    const entries: ClassEntry[] = rows
      .map((row) => {
        const cols = row.split(",").map((c) => c.trim());
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => {
          obj[h] = cols[i] ?? "";
        });
        return {
          DIA: obj["DIA"] || "",
          INICIO: obj["INICIO"] || "",
          FIN: obj["FIN"] || "",
          CENTRO: obj["CENTRO"] || "",
          TIPO: obj["TIPO"] || "",
        };
      })
      .filter((e) => e.DIA && e.INICIO && e.FIN && e.CENTRO && e.TIPO);

    const grouped: Record<string, ClassEntry[]> = {};
    for (const entry of entries) {
      if (!grouped[entry.DIA]) grouped[entry.DIA] = [];
      grouped[entry.DIA].push(entry);
    }

    // 🔹 ÚNICO CAMBIO: ordenar por hora real (minutos)
    const toMinutes = (t: string) => {
      const [hRaw, mRaw] = t.trim().split(":");
      const h = Number(hRaw ?? 0);
      const m = Number(mRaw ?? 0);
      return h * 60 + m;
    };

    const days: DaySchedule[] = Object.entries(grouped)
      .map(([day, classes]) => ({
        day,
        classes: classes.sort(
          (a, b) => toMinutes(a.INICIO) - toMinutes(b.INICIO)
        ),
      }))
      .filter((d) => d.classes.length > 0)
      .sort(
        (a, b) =>
          DAYS_ORDER.indexOf(a.day) - DAYS_ORDER.indexOf(b.day)
      );

    return NextResponse.json({ days });
  } catch {
    return NextResponse.json({ days: [] }, { status: 200 });
  } finally {
    clearTimeout(timeout);
  }
}
