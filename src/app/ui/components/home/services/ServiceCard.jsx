import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

export default function ServiceCard(service) {
  const { title, image, price, details } = service.service;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node) => {
        return (<p className="mb-2">{node.content[0].value}</p>)
      }
    }
  };

  return (
    <div>
      <h4 className="font-semibold text-2xl text-center pb-4">{title}</h4>
      <Image 
        src={`http:${image.fields.file.url}`}
        alt="Service image"
        width={500}
        height={500}
        className="w-full aspect-5/6 object-cover pb-4"
      />
      <h2 className="font-semibold text-xl text-center pb-4">{price}</h2>
      <div className="styled-list">{documentToReactComponents(details, options)}</div>
    </div>
  );
}