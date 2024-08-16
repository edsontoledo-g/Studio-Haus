import ServiceCard from "@/app/ui/components/home/services/ServiceCard";

// TODO: Move this content to contentful

export default function Services() {
  return(
    <section id="projects">
      <div className="min-h-screen px-8 pt-36">
        <div className="grid grid-flow-row gap-8 pb-16 items-center md:grid md:grid-cols-3">
          <h2 className="font-medium text-5xl sm:text-7xl">Nuestros servicios</h2>
          <span></span>
          <div className="text-center md:text-left">Conoce los servicios que oferta Studio Haus y elige el que más se adapte a tus necesidades.</div>
        </div>
        <div className="grid gap-32 grid-cols-1 md:grid-cols-3">
          <ServiceCard 
            title="Pack de 5 renders" 
            image="/assets/service-1.jpg"
            price="$3979 MXN"
            details={[
              "Perspectivas múltiples",
              "Versatilidad de uso", 
              "Ideal para marketing y presentaciones"
            ]}
          />
          <ServiceCard 
            title="Proyecto ejecutivo" 
            image="/assets/service-2.jpg"
            price="$380 MXN x m2"
            details={[
              "+15 planos aruitectónicos detallados", 
              "Renders en perspectiva", 
              "Cunplimiento normativo",
              "Optimización de recursos",
              "Plan y presupuesto de obra detallado"
            ]}
          />
          <ServiceCard 
            title="Gestión de obra" 
            image="/assets/service-3.jpg" 
            price="18% del costo total de la obra"
            details={[
              "Supervisión de cada etapa del proyecto",
              "Coordinación completa de la construcción", 
              "Control de calidad",
              "Optimización de tiempo y costos"
            ]}
          />
        </div>
      </div>
    </section>
  );
}