import ProjectCard from "../ProjectCard";
import chatChirpImg from "../../assets/chat-chirp/zoomedSignin.png";
import rgBlogsImg from "../../assets/rg-blogs/rgblogs.png";
import rgEstateImg from "../../assets/rg-estate/rgestate.png";
import { Link } from "react-router-dom";

const ProjectHighlights = () => {
  return (
    <div className="border-t border-teal-500 mt-10">
      <h1 className="text-center mt-11 text-xl md:text-3xl font-semibold">
        Project Highlights:
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mt-20 mb-10 transition-all transform ease-in-out">
        <ProjectCard
          cardImg={chatChirpImg}
          cardTitle="Chat Chirp"
          cardDesc="A realtime messaging app"
        />
        <ProjectCard
          cardImg={rgBlogsImg}
          cardTitle="RG Blogs"
          cardDesc="A blog app"
        />
        <ProjectCard
          cardImg={rgEstateImg}
          cardTitle="RG Estate"
          cardDesc="A real estate app"
        />
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
