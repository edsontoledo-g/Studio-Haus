"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectImageGallery({ images, reverse=false }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const onMouseEnterHandler = (image) => {
    setSelectedImage(image);
  };
  return(
    <div className={`gap-4 flex flex-col sm:flex-row ${ reverse ? "flex-col-reverse sm:flex-row-reverse" : ""}`}>
      <Image 
        alt="Project image"
        src={`http:${selectedImage.fields.file.url}`}
        width={1000}
        height={1000}
        className="w-full sm:w-[70%] aspect-square object-cover border-black border-2"
      />
      <div className="grid grid-cols-2 gap-4 grid-flow-row">
        {images.map((image) => {
          return (
            <Image 
              key={image.sys.id}
              alt="Project image"
              src={`http:${image.fields.file.url}`}
              width={500}
              height={500}
              className="w-full h-full aspect-square object-cover border-black border-2 transition-transform hover:[transform:scale(1.075)]"
              onMouseEnter={() => { onMouseEnterHandler(image); }}
            />
          );
        })}
      </div>
    </div>
  );
}