import ProjectCard from "@/app/components/projectCard";
import { getAllProjects } from "@/sanity/sanity-utils";
const ProjectsPage = async () => {
  const projects = await getAllProjects();
  console.log(projects);

  return (
    <>
      <h1 className="section-heading">Projects</h1>

      {/* projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <ProjectCard key={project?._id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
