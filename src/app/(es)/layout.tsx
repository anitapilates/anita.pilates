import { Analytics } from "@vercel/analytics/next";
import { sans, serif } from "../fonts";
import "../globals.css";

// Estructura base de la versión en castellano (anitapilates.com)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
