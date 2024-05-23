import React from "react";
import { TypeAnimation } from "react-type-animation";

const WelcomeHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-10 mt-10 max-w-6xl mx-auto gap-10">
      <div className="flex flex-col p-4 items-center gap-3 md:gap-10 max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-bold">
          Hi! I'm{" "}
          <span className="bg-gradient-to-r from-[#432371] via-[#9F6976] to-[#FAAE7B] rounded-md px-4 text-gray-900 font-semibold">
            Rod
          </span>
        </h1>
        {/* <h1 className="text-3xl md:text-6xl font-bold">
          A{" "}
          <span className="bg-gradient-to-r from-[#FAAE7B] via-[#9F6976] to-[#432371] rounded-md px-4 text-gray-900 font-semibold">
            web
          </span>{" "}
          developer.
        </h1> */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "A frontend developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "A backend developer",
            1000,
            "A fullstack web developer",
            1000,
            "A web developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "3em", display: "inline-block" }}
        />
        <p className="text-md md:text-xl text-center mt-2 text-gray-500">
          I hold a Bachelor of Science degree in Computer Science, with a
          specialization in frontend development utilizing React.js. My
          expertise extends to crafting full-stack web applications, leveraging
          the MERN stack alongside Socket.IO and Tailwind CSS. Passion fuels my
          commitment to crafting seamless digital experiences.
        </p>
      </div>

      <div>
        <img
          src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg"
          alt="Photo"
          className="w-40 h-40 md:w-full md:h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default WelcomeHeader;
