import { Fade } from 'react-awesome-reveal';
import { Spinner } from 'flowbite-react';

import Project from '../components/Project';
import useGetProjects from '../hooks/useGetProjects';

const Portfolio = () => {
  const { loading, projects } = useGetProjects();

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <Spinner aria-label='Default status example' />
      </div>
    );
  }

  return (
    <div className='min-h-screen p-4 px-7 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900 to-[#071330]'>
      <h1 className='text-center mt-10 text-xl md:text-3xl'>My Projects</h1>
      <Fade duration={1000} direction='right' triggerOnce>
        {projects?.map((project) => {
          return <Project key={project._id} project={project} />;
        })}
      </Fade>
    </div>
  );
};

export default Portfolio;
