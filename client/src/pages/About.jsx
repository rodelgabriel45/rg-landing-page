import AboutContent from '../components/AboutPage/AboutContent';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center gap-16 p-4 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900 to-[#071330]'>
      <div className='flex flex-col gap-10 my-10'>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
