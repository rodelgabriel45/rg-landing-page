import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <div className='border-t border-b  border-teal-500 mt-10'>
      <h1 className='text-center mt-11 text-xl md:text-3xl font-semibold'>
        Technologies I use:
      </h1>
      <ul className='flex flex-wrap justify-center gap-10 md:gap-24 items-center mt-10 md:mt-24 max-w-6xl mx-auto mb-16'>
        {SKILLS.map((skill) => (
          <li
            transition={{ duration: 2, type: 'spring' }}
            key={skill.title}
            className='flex flex-col items-center gap-3'
          >
            <img
              src={skill.image}
              alt='React'
              className='w-12 h-12 md:w-24 md:h-24'
            />
            <h3 className='text-lg md:text-2xl'>{skill.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
