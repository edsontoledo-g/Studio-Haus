import Link from "next/link";

export default function Footer() {
  return(
    <footer className="w-full border-t-2 border-black hidden grid-cols-3 p-8 text-xl font-semibold bg-black text-white text-center md:grid">
      <div className="flex items-center flex-col gap-4">
        <Link href="https://bit.ly/3TdzuDO">
          WhatsApp
        </Link>
        <Link href="https://www.instagram.com/sh.arquitect?igsh=M21ybTN3OWkzOWdh">
          Instagram
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61557040624788&mibextid=kFxxJD">
          Facebook
        </Link>
      </div>
      <div className="flex items-center flex-col gap-4">
        <div>Lunes a viernes 9:00am 6:00pm</div>
        <div>edson.toledo@studiohaus.com.mx</div>
        <div>Tel. +52 4426544862</div>
      </div>
      <div className="flex items-center flex-col gap-4">
        <Link href="/about">
          Sobre nosotros
        </Link>
        <Link href="/faq">
          FAQs
        </Link>
      </div>
    </footer>
  );
}