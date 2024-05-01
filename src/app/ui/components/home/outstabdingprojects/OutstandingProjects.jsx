import ProjectCard from "@/app/ui/components/projects/ProjectCard";
import Link from "next/link";
import styles from "@/app/ui/styles.module.css";

export default function OutstandingProjects({ outstandingProjects }) {
  return(
    <section id="projects">
      <div className="min-h-screen px-8 pt-36">
        <div className="grid grid-flow-row gap-8 pb-16 items-center md:grid md:grid-cols-3">
          <h2 className="font-medium text-5xl sm:text-7xl">Nuestros proyectos</h2>
          <div className="flex items-center justify-center">
            <Link href="/projects" className={styles.primaryButton}>Ver todos</Link>
          </div>
          <div className="text-center md:text-left">Conoce algunos de los proyectos mas recientes de Studio Haus y convierte ese sueño en realidad con nosotros.</div>
        </div>
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {outstandingProjects.map((project, index) => {
            return (
              <ProjectCard
                key={project.fields.slug} 
                outstandingProject={project.fields} 
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}