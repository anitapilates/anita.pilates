import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anita Pilates | Instructora de Pilates en Barcelona",
  description: "Pilates Mat y Pilates Reformer en Barcelona",
  icons: {
  icon: [
    { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",

};

export default function RootLayout({
  children,
}: Readonly<{
 react.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
