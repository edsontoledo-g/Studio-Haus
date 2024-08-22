"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return { y: window.scrollY, lastY: prevState.y }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.y > scrollData.lastY && scrollData.y > 0) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [scrollData]);

  const pathname = usePathname();

  return (
    <nav className={`fixed top-0 w-full border-b-2 border-black h-32 flex backdrop-blur-md items-center bg-opacity-50 transition-transform bg-white z-50 ${showNavbar ? "" : " -translate-y-full"}`}>
      <div className="grid h-full text-center grid-cols-[2fr,1fr,1fr,1fr]">
        <Link href="/" className="flex items-center px-4 sm:px-8">
          <Image 
            src="/assets/logo.svg"
            alt="Studio Haus Logo" 
            width={200} 
            height={120}
          />
        </Link>
        <Link href="/about" className={`text-lg leading-5 font-bold flex items-center justify-center hover:bg-black hover:text-white px-2 sm:text-xl ${pathname == "/about" ? "bg-black text-white" : ""}`}>
          Sobre nosotros
        </Link>
        <Link href="/faq" className={`text-lg font-bold flex items-center justify-center hover:bg-black hover:text-white px-2 sm:text-xl ${pathname == "/faq" ? "bg-black text-white" : ""}`}>
          FAQs
        </Link>
        <Link href="/magnethaus"className={`text-lg leading-5 font-bold flex items-center justify-center hover:bg-black hover:text-white px-2 sm:text-xl ${pathname == "/magnethaus" ? "bg-black text-white" : ""}`}>
          Magnet Haus
        </Link>
      </div>
    </nav>
  );
}