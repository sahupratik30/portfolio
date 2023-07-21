import { getTechnologies } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Fragment } from "react";

const Skills = async () => {
  const technologies = await getTechnologies();

  return (
    <section className="mt-32 sm:mt-44">
      <h2 className="section-heading">Tech Stack</h2>

      <div className="skills-container">
        {technologies?.length
          ? technologies?.map((technology) => (
              <div key={technology?._id} className="skill">
                <Image
                  src={technology?.image}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                  alt={technology?.alt}
                />
                <p className="skill-title">{technology?.name}</p>
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default Skills;
