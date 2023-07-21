import Image from "next/image";

type Props = {
  name: string;
  image: string;
  description: string;
  alt: string;
};

const ServiceCard = ({ name, image, description, alt }: Props) => {
  return (
    <div className="px-4 py-6 rounded-lg bg-gray-50 dark:bg-[#212121]">
      <Image
        src={image}
        width={54}
        height={54}
        alt={alt}
        className="mx-auto mb-2"
      />

      <p className="mb-4 font-medium text-center">{name}</p>

      <p className="text-justify md:line-clamp-4" title={description}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
