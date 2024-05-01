import { createClient } from "contentful";
import ProjectCard from "@/app/ui/components/projects/ProjectCard";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="pt-48 px-8 pb-8 max-w-7xl mx-auto">
      <h2 className="font-medium text-5xl sm:text-7xl">Nuestros proyectos</h2>
      <div className="grid gap-32 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
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
  );
}

async function getProjects() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const res = await client.getEntries({ content_type: "outstandingProject" });
  return res.items;
}