import ProjectCard from "./ProjectCard";

const Project = ({ project }) => {
  return (
    <div className="border-b-4 shadow-lg border-teal-600">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20  max-w-6xl mx-auto mt-20">
        <ul className="flex flex-col justify-center items-start">
          <li className="md:text-2xl">
            <div className="flex items-center gap-4">
              <h2>{project?.title} - </h2>
              <span className="text-gray-500  sm:text-xl">
                {project?.description}
              </span>
            </div>
            <h2 className="text-lg mt-2">Technologies Used:</h2>
            <ul className="text-sm list-disc md:text-lg text-gray-500 px-7 mt-2">
              {project?.technologies.map((tech) => {
                return <li key={project?._id}>{tech}</li>;
              })}
            </ul>
          </li>
        </ul>

        {/* Card */}
        <ProjectCard
          cardImg={project?.cardImg}
          cardTitle={project?.title}
          cardDesc={project?.description}
          link={project?.link}
        />
      </div>
      <h2 className="text-center text-xl mt-10">Highlight Features:</h2>
      <div>
        <ul className="flex flex-wrap gap-7 text-gray-500 md:text-lg my-10 justify-center list-disc">
          {project?.features.map((feature) => {
            return <li key={project?._id}>{feature}</li>;
          })}
        </ul>
        <div>
          <div className="flex flex-col gap-4">
            <img
              src={project?.featureImg}
              alt="Features"
              className="md:w-[80%] mx-auto rounded-md"
            />
            <div className="border border-teal-500 rounded-tr-2xl rounded-bl-2xl max-w-[80%] my-6 mb-16 md:text-xl mx-auto p-5">
              <p className="  dark:text-gray-400">
                {project?.featureDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
