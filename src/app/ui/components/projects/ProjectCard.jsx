import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ outstandingProject, index }) {
  const { title, slug, thumbnail, description } = outstandingProject;
  const isOdd = index % 2 != 0;
  return (
    <Link 
      href={`/projects/${slug}`}
      className={`flex gap-4 items-center max-w-xs border-black hover:border-2 hover:p-4 transition-all mx-auto ${isOdd ? "flex-col-reverse justify-end" : "flex-col justify-start"}`}
    >
      <div className="transition-transform overflow-hidden">
        <Image 
          alt={`${title} thumbnail`} 
          src={`http:${thumbnail.fields.file.url}`}
          width={500}
          height={500}
          className="w-full aspect-5/6 object-cover transition-transform hover:[transform:scale(1.1)]"
        />
      </div>
      <div>
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p className="my-2">{description.content[0].content[0].value}</p>
      </div>
    </Link>
  );
}