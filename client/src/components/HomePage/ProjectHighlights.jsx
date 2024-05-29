import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import useGetProjects from "../../hooks/useGetProjects";

const ProjectHighlights = () => {
  const { loading, projects } = useGetProjects();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner aria-label="Default status example" />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h1 className="text-center mt-11 text-xl md:text-3xl font-semibold">
        Project Highlights:
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mt-20 mb-10 transition-all transform ease-in-out">
        {projects?.slice(0, 3).map((project) => {
          return (
            <ProjectCard
              key={project._id}
              cardImg={project.cardImg}
              cardTitle={project.title}
              cardDesc={project.description}
              link={project.link}
            />
          );
        })}
      </div>
      <Link
        to="/portfolio"
        className="flex items-center justify-center hover:text-blue-500 hover:underline"
      >
        See all projects...
      </Link>
    </div>
  );
};

export default ProjectHighlights;
