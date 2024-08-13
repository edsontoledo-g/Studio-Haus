"use client";
import styles from "@/app/ui/styles.module.css";

export default function ContactForm() {
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };
    const subject = `${data.name}: ${data.phone}`;
    const mailtoLink = `mailto:edson.toledo@studiohaus.com.mx?subject=${subject}&body=${data.message}`;
    window.location.href = mailtoLink;
    document.getElementById("contact-form").reset();
  }

  return (
    <div className="flex items-center border-black border-2 p-8 md:border-r-0 xl:border-r-2">
      <form id="contact-form" className="w-full" onSubmit={onSubmitHandler}>
        <div className="form-text-input mb-4">
          <input type="text" name="name" placeholder="Nombre completo"/>
          <div className="line"></div>
        </div>
        <div className="form-text-input mb-4">
          <input type="text" name="email" placeholder="Email"/>
          <div className="line"></div>
        </div>
        <div className="form-text-input mb-4">
          <input type="text" name="phone" placeholder="Telefono"/>
          <div className="line"></div>
        </div>
        <div className="form-text-input mb-4">
          <input type="text" name="message" placeholder="Mensaje"/>
          <div className="line"></div>
        </div>
        <button className={`${styles.primaryButton} mt-8`}>Contáctanos</button>
      </form>
    </div>
  );
}