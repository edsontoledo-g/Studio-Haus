import ContactForm from "@/app/ui/components/home/contact/ContactForm";

export default function ContactUs() {
  return (
    <section id="contact-us" className="h-screen md:h-[calc(100vh-180px)] pt-36">
      <div className="grid grid-cols-1 gap-16 px-8 md:grid-cols-2 md:pr-0">
        <div>
          <h2 className="font-medium text-5xl sm:text-7xl">Contáctanos</h2>
          <p className="pt-8">
            Contáctate con nosotros para cotizar tu proyecto o resolver cualquier duda que tengas por medio de nuestras redes sociales o directamente desde el siguiente formulario y empieza a hacer realidad tu próximo sueño de la mano de Studio Haus.
          </p>
        </div>
        <ContactForm/>
      </div>
    </section>
  );
}