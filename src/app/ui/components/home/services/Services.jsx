import ServiceCard from "@/app/ui/components/home/services/ServiceCard";

export default function Services({ services }) {
  return(
    <section id="projects">
      <div className="min-h-screen px-8 pt-36">
        <div className="grid grid-flow-row gap-8 pb-16 items-center md:grid md:grid-cols-3">
          <h2 className="font-medium text-5xl sm:text-7xl">Nuestros servicios</h2>
          <span></span>
          <div className="text-center md:text-left">Conoce los servicios que oferta Studio Haus y elige el que más se adapte a tus necesidades.</div>
        </div>
        <div className="grid gap-32 grid-cols-1 md:grid-cols-3">
          {services.map((service) => {
            return (
              <ServiceCard 
                key={service.fields.title}
                service={service.fields}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}