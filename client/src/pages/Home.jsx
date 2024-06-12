import { Fade } from 'react-awesome-reveal';
import WelcomeHeader from '../components/HomePage/WelcomeHeader';

import Skills from '../components/HomePage/Skills';
import ProjectHighlights from '../components/HomePage/ProjectHighlights';

const Home = () => {
  return (
    <div className='min-h-screen p-4 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900 to-[#071330] '>
      <WelcomeHeader />

      <Skills />
      <Fade duration={2000} triggerOnce direction='right'>
        <ProjectHighlights />
      </Fade>
    </div>
  );
};

export default Home;
