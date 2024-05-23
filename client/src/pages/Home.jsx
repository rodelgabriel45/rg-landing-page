import WelcomeHeader from "../components/HomePage/WelcomeHeader";

import Skills from "../components/HomePage/Skills";
import ProjectHighlights from "../components/HomePage/ProjectHighlights";

const Home = () => {
  return (
    <div className="min-h-screen p-4 mb-10">
      <WelcomeHeader />
      <Skills />
      <ProjectHighlights />
    </div>
  );
};

export default Home;
