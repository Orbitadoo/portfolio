import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title:
    "Portafolio de Leonardo Valdez | Desarrollador de Software y Programador Web.",
  description:
    "Portafolio de Leonardo Juan Pablo Valdez, desarrollador de software y programador web en Argentina, Tucumán. Descubre mis proyectos, habilidades y cómo puedo ayudarte a construir soluciones tecnológicas innovadoras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <main className="container mx-auto xl:max-w-7xl">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
