import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/styles.module.css";

export default function Landing() {
  return(
    <section>
      <div className="min-h-screen pt-48 sm:h-screen">
        <div className="grid grid-cols-1 relative h-full lg:grid-cols-3/2">
          <div className="px-8">
            <h1 className="font-medium text-7xl sm:text-8xl">Pasión por la <span className="flex flex-col sm:flex-row sm:items-center">calidad<span className="font-normal text-base pl-8 text-center sm:text-left">Transformamos tus sueños en realidad con las soluciones arquitectónicas mas singulares.</span></span></h1>
            <div className="border-b-2 border-black my-8"></div>
            <div className="flex">
              <Link href="#projects" className={styles.primaryButton}>Explorar</Link>
              <Link href="https://bit.ly/49wC0eK">
                <Image
                  src="/icons/whatsapp-icon.svg"
                  alt=""
                  width={44} 
                  height={44}
                  className="ml-4 sm:ml-16"
                />
              </Link>
              <Link href="https://www.instagram.com/sh.arquitect?igsh=M21ybTN3OWkzOWdh">
                <Image 
                  src="/icons/instagram-icon.svg"
                  alt=""
                  width={44}
                  height={44}
                  className="ml-4"
                />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61557040624788&mibextid=kFxxJD">
                <Image
                  src="/icons/facebook-icon.svg"
                  alt=""
                  width={44} 
                  height={44}
                  className="ml-4"
                />
              </Link>
            </div>
            <div className="pt-16 grid grid-cols-2 gap-4 sm:gap-8">
              <div>
                <h6 className="text-xl font-bold mb-2">Calidad y diseño</h6>
                <p>Diseño creativo y funcional de proyectos residenciales y comerciales en la ciudad de Querétaro.</p>
              </div>
              <div>
                <h6 className="text-xl font-bold mb-2">Comunicando arte a través de la arquitectura</h6>
                <p>En Studio Haus usamos la arquitectura como una forma de expresión para transmitirle sentimientos a nuestros clientes, entregandoles mucho mas que un hogar.</p>
              </div>
            </div>
          </div>
          <Image 
            src="/assets/landing-1.jpg"
            alt="Landing page image"
            width={375}
            height={120}
            className="absolute right-0 border-y-2 border-l-2 border-black xl:border-r-2 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}