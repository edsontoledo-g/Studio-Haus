import { Playfair } from "next/font/google";
import "@/app/ui/globals.css";
import Navbar from "@/app/ui/components/Navbar";
import Footer from "./ui/components/Footer";

const playfair = Playfair({ subsets: ["latin"], display: "swap", adjustFontFallback: false });

export const metadata = {
  metadataBase: new URL("https://www.studiohaus.com.mx"),
  title: "Studio Haus",
  description: "Studio Haus es un estudio de arquitectura con sede en Querétaro, México. Desarrollamos cualquier proyecto arquitectónico, desde el anteproyecto, renders hasta la construcción.",
  keywords: ["arquitectura", "arquitectos", "querétaro", "méxico", "diseño", "construcción", "constructora", "archdaily", "diseño arquitectónico", "arquitectos cercanos"],
  authors: [{name: "Edson Toledo"}],
  creator: "Edson Toledo",
  publisher: "Edson Toledo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
