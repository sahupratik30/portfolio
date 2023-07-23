import { Project } from "@/types";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="overflow-hidden transition rounded-lg cursor-pointer bg-gray-50 dark:bg-[#212121] lg:hover:shadow-md lg:hover:scale-[1.03]">
      <Image
        src={project?.image}
        alt={project?.alt}
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="px-2 pt-3 pb-4">
        <p className="mb-1 text-base font-medium">{project?.name}</p>

        <p className="flex items-center gap-2 mb-4 text-[12px]">
          {project?.tags?.map((tag, index: number) => (
            <span
              key={index}
              className="px-2 py-[2px] font-medium text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-white"
            >
              {tag}
            </span>
          ))}
        </p>

        <p className="text-justify lg:line-clamp-3">{project?.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
