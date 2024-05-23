import { Fade } from "react-awesome-reveal";

import ProjChatChirp from "../components/ProjCharChirp/ProjChatChirp";
import ProjRGBlogs from "../components/ProjRGBlogs/ProjRGBlogs";
import ProjRGEstate from "../components/ProjRGEstate/ProjRGEstate";

const Portfolio = () => {
  return (
    <div className="min-h-screen p-4 px-7">
      <h1 className="text-center mt-10 text-xl md:text-3xl">My Projects</h1>
      <Fade duration={1000} direction="right" triggerOnce>
        <ProjChatChirp />

        <ProjRGBlogs />

        <ProjRGEstate />
      </Fade>
    </div>
  );
};

export default Portfolio;
