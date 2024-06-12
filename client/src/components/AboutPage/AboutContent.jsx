const AboutContent = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-3 max-w-4xl mx-auto'>
        <h1 className='font-semibold text-xl md:text-3xl text-center'>
          I am{' '}
          <span className='bg-gradient-to-r from-[#432371] via-[#9F6976] to-[#FAAE7B] rounded-md p-2 text-white dark:text-black'>
            Rodel C. Gabriel
          </span>
        </h1>
        <p className='text-md md:text-2xl text-center mt-5 text-gray-400'>
          I hold a Bachelor of Science degree in Computer Science, with a
          specialization in frontend development utilizing React.js. My
          expertise extends to crafting full-stack web applications, leveraging
          the MERN stack alongside Socket.IO and Tailwind CSS. Passion fuels my
          commitment to crafting seamless digital experiences.
        </p>
      </div>

      <div className='p-4'>
        <h3 className='text-md md:text-xl mb-10'>
          Things I always try to implement when developing web apps:{' '}
        </h3>
        <ul className='list-disc flex flex-col gap-4'>
          <li>
            <p className='md:text-xl'>
              Readable and clean/organized codebase for easy scalability.
            </p>
          </li>
          <li>
            <p className='md:text-xl'>
              Error Handling on both frontend and backend to provide informative
              error messages to users and developers.
            </p>
            <span className='text-lg text-gray-400'>
              eg. I always implement a middleware for error handling.
            </span>
          </li>
          <li>
            <p className='md:text-xl'>
              Responsive Design - I always make sure my web apps works well on
              various devices and screen sizes.
            </p>
            <span className='text-lg text-gray-400'>
              eg. I use Tailwind CSS
            </span>
          </li>
          <li>
            <p className='md:text-xl'>
              Authentication and Authorization especially on the backend to
              protect sensitive data and control access to different parts of
              the application.
            </p>{' '}
            <span className='text-lg text-gray-400'>
              eg. form validation, JSON webtoken (JWT) for user auth.
            </span>
          </li>
          <li className='md:text-xl'>
            <p>RESTful API Design</p>
          </li>
          <li className='md:text-xl'>
            <p>Commit to GitHub after completing a feature or fix.</p>
          </li>
          <li className='md:text-xl'>
            <p>State Management efficient management.</p>
            <span className='text-lg text-gray-400'>
              eg. I use mainly use Redux and Redux toolkit especially for
              complex applications.
            </span>
          </li>
          <li className='md:text-xl'>
            <p>Database Security</p>
            <span className='text-lg text-gray-400'>
              eg. Enable authentication, setting up appropriate user roles and
              permissions.
            </span>
          </li>
          <li className='md:text-xl'>
            <p>Performance Optimization</p>
            <span className='text-lg text-gray-400'>
              eg. Minimizing network requests. React router DOM for a fast SPA.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutContent;
