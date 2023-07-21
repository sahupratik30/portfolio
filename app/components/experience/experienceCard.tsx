import { Experience } from "@/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <div className="relative">
      <div aria-hidden="true" className="timeline-circle">
        <Image
          src="/images/suitcase.svg"
          width={32}
          height={32}
          alt="gradient colored suitcase"
        />
      </div>
      <div
        className={`timeline-container ${
          index % 2 !== 0 ? "timeline-container-left" : ""
        }`}
      >
        <div className="timeline-card">
          <p className="font-medium text-gray-700 dark:text-white">
            {experience?.role}
          </p>
          <p className="text-sm italic font-light dark:text-gray-200">
            {experience?.company}
          </p>
          <p className="mb-4 text-sm italic font-light dark:text-gray-200">
            {experience?.duration}
          </p>
          <div className="text-justify">
            <PortableText value={experience?.responsibility} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
