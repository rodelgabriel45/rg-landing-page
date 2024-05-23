import mongoDBIcon from "../../assets/tech-icons/mongodb-icon.png";
import reactIcon from "../../assets/tech-icons/react-icon.png";
import nodeIcon from "../../assets/tech-icons/node-icon.png";
import htmlIcon from "../../assets/tech-icons/html-icon.png";
import tailwindIcon from "../../assets/tech-icons/tailwind-icon.png";
import socketIcon from "../../assets/tech-icons/socket-icon.png";
import gitIcon from "../../assets/tech-icons/git-icon.png";

const Skills = () => {
  return (
    <div className="border-t border-b  border-teal-500 mt-10">
      <h1 className="text-center mt-11 text-xl md:text-3xl font-semibold">
        Technologies I use:
      </h1>
      <ul className="flex flex-wrap justify-center gap-10 md:gap-24 items-center mt-10 md:mt-24 max-w-4xl mx-auto mb-16">
        <li className="flex flex-col items-center gap-3">
          <img
            src={reactIcon}
            alt="React"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h3 className="text-lg md:text-2xl">React</h3>
        </li>
        <li className="flex flex-col items-center gap-3">
          <img
            src={nodeIcon}
            alt="Node"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h3 className="text-lg md:text-2xl">NodeJS</h3>
        </li>
        <li className="flex flex-col items-center gap-3">
          <img
            src={mongoDBIcon}
            alt="MongoDB"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h3 className="text-lg md:text-2xl">MongoDB</h3>
        </li>
        <li className="flex flex-col items-center gap-3">
          <img
            src={htmlIcon}
            alt="HTML5"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h3 className="text-lg md:text-2xl">HTML5</h3>
        </li>
        <li className="flex flex-col items-center gap-3">
          <img
            src={tailwindIcon}
            alt="Tailwind"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h3 className="text-lg md:text-2xl">Tailwind CSS</h3>
        </li>
        <li className="flex flex-col items-center gap-3">
          <img
            src={socketIcon}
            alt="Socket.io"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h3 className="text-lg md:text-2xl">Socket.io</h3>
        </li>
        <li className="flex flex-col items-center gap-3">
          <img src={gitIcon} alt="Git" className="w-12 h-12 md:w-24 md:h-24" />
          <h3 className="text-lg md:text-2xl">Git</h3>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
