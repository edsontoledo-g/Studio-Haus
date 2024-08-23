import Link from "next/link";
import styles from "@/app/ui/styles.module.css";

export const metadata = {
  title: "Magnet Haus",
  description: "Magnet Haus es un provedor de materiales de construcción de alta calidad.",
 }

export default function MagnetHaus() {
  return (
    <div className="h-screen bg-magnethaus-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-8">
        <div className="inline-block">
          <h1 className="animated-text text-white text-3xl sm:text-6xl font-medium mb-4">Conoce Magnet Haus</h1>
        </div>
          <p className="text-xl sm:text-2xl mb-12 text-white">Proveedores de materiales de construcción de alta calidad</p>
          <Link href="#services" className={styles.primaryButtonInverted}>Ver catálogo</Link>
        </div>
      </div>
    </div>
  );
}