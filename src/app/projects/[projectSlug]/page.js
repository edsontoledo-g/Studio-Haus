import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import ProjectImageGallery from "@/app/ui/components/projects/ProjectImageGallery";

export default async function ProjectDetail({ params }) {
  const project = await getProject(params.projectSlug);
  const { title, description, specs, renders, plans } = project.fields;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node) => {
        return (<p className="mb-4">{node.content[0].value}</p>)
      }
    }
  };

  return (
    <div className="pt-48 px-8 pb-8 max-w-7xl mx-auto">
      <h2 className="font-medium text-7xl">{title}</h2>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3/2">
        <ProjectImageGallery images={renders}/>
        <div className="lg:pl-8">
          <h3 className="font-medium text-3xl mb-2">Descripción</h3>
          <div className="styled-list">{documentToReactComponents(description, options)}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-16 lg:grid-cols-2/3">
        <div className="lg:pr-8">
          <h3 className="font-medium text-3xl mb-2">Especificaciones</h3>
          <div className="styled-list">{documentToReactComponents(specs, options)}</div>
        </div>
        <ProjectImageGallery images={plans} reverse={true}/>
      </div>
    </div>
  );
}

async function getProject(slug) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const res = await client.getEntries({ 
    content_type: "outstandingProject",
    "fields.slug": slug
  });
  return res.items[0];
}