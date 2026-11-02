import { Analytics } from "@vercel/analytics/next";
import { sans, serif } from "../fonts";
import "../globals.css";

// Estructura base de la versión en inglés (anitapilates.com/en)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
