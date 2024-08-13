import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import Image from "next/image";

export default async function About() {
  const about = await getAbout();
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node) => {
        return (<p className="mb-8">{node.content[0].value}</p>)
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center px-8 pb-8 max-w-7xl mx-auto">
        <h2 className="text-7xl z-10 sm:text-9xl md:text-superxl">Sobre<br/>Nosotros</h2>
        <h4 className="text-base max-w-96 z-10 sm:text-xl">Hola, somos Studio Haus. Una empresa arquitecntónica dedicada al diseño y la construcción.</h4>
        <div className="absolute right-0 bottom-0 z-0">
          <Image
            src={`http:${about.fields.teamPicture.fields.file.url}`}
            alt="Team picture"
            width={800}
            height={500}
          />
          <div className=" absolute h-4 w-96 bg-studiohaus-orange top-0 right-0"></div>
          <div className=" absolute h-4 w-96 bg-studiohaus-orange bottom-0 left-[-8rem]"></div>
        </div>
      </div>
      <div className="px-8 mt-16 max-w-7xl mx-auto text-xl">{documentToReactComponents(about.fields.description, options)}</div>
    </div>
  );
}

async function getAbout() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const res = await client.getEntries({ content_type: "about" });
  return res.items[0];
}