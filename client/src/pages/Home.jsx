import { Fade } from "react-awesome-reveal";
import WelcomeHeader from "../components/HomePage/WelcomeHeader";

import Skills from "../components/HomePage/Skills";
import ProjectHighlights from "../components/HomePage/ProjectHighlights";

const Home = () => {
  return (
    <div className="min-h-screen p-4 mb-10">
      <WelcomeHeader />

      <Skills />
      <Fade duration={2000} triggerOnce direction="right">
        <ProjectHighlights />
      </Fade>
    </div>
  );
};

export default Home;
