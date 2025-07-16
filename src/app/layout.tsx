import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Asegúrate de tener este archivo con las directivas de Tailwind

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aereovista: Drones para Construcción", // ¡Cambiado aquí!
  description: "Optimiza tus proyectos de construcción con soluciones de drones y datos aéreos precisos.", // ¡También actualicé la descripción para que coincida!
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}