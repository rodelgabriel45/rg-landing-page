import { Link } from "react-router-dom";

const ProjectCard = ({ cardImg, cardTitle, cardDesc, link }) => {
  return (
    <div className="group relative w-[360px] mt-10 md:mt-0 h-full border overflow-hidden rounded-md sm:w-[320px] border-teal-500">
      <img
        className="h-[320px] md:h-[200px] w-full object-cover hover:scale-105 transition transform duration-300 ease-in-out"
        src={cardImg}
        alt={cardTitle}
      />

      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{cardTitle}</p>
        <span className="italic text-sm">{cardDesc}</span>
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 bottom-[-200px] left-0 right-0 border border-teal-500 hover:bg-teal-500 hover:text-white text-500 group-hover:bottom-20 absolute my-5 w-[50%] mx-auto rounded-md p-2 text-center transition tranform ease-in-out duration-300"
        >
          Go to website
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
