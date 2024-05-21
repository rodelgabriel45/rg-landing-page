import WelcomeHeader from "../components/HomePage/WelcomeHeader";

import Skills from "../components/HomePage/Skills";

const Home = () => {
  return (
    <div className="min-h-screen p-4 mb-10">
      <WelcomeHeader />
      <Skills />
    </div>
  );
};

export default Home;
