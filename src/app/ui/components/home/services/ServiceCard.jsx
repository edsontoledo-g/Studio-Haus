import Image from "next/image"

export default function ServiceCard({ title, image, price, details }) {
  return (
    <div>
      <h4 className="font-semibold text-2xl text-center pb-4">{title}</h4>
      <Image 
        src={image}
        alt="Service image"
        width={500}
        height={500}
        className="w-full aspect-5/6 object-cover pb-4"
      />
      <h2 className="font-semibold text-xl text-center pb-4">{price}</h2>
      <ul className="list-disc">
        {details.map((detail) => {
          return (
            <li key={detail} className="text-lg">{detail}</li>
          );
        })}
      </ul>
    </div>
  );
}