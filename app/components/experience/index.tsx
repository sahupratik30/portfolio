import { getAllExperiences } from "@/sanity/sanity-utils";
import ExperienceCard from "./experienceCard";

const Experience = async () => {
  const experiences = await getAllExperiences();

  return (
    <section className="mt-32 sm:mt-44">
      <h2 className="section-heading">Work Experience</h2>

      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences?.map((experience, index: number) => (
          <ExperienceCard
            key={experience?._id}
            index={index}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
