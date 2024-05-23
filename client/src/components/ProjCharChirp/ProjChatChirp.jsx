import charChirpSignin from "../../assets/chat-chirp/zoomedSignin.png";
import editProfile from "../../assets/chat-chirp/edit-profile.png";
import ProjectCard from "../ProjectCard";

const ProjChatChirp = () => {
  return (
    <div className="border-b-4 shadow-lg border-teal-600">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20  max-w-6xl mx-auto mt-20">
        <ul className="flex flex-col justify-center items-start">
          <li className="md:text-2xl">
            <div className="flex items-center gap-4">
              <h2>1. Chat Chirp - </h2>
              <span className="text-gray-500  sm:text-xl">
                An online realtime messaging web app.
              </span>
            </div>
            <h2 className="text-lg mt-2">Technologies Used:</h2>
            <ul className="text-sm list-disc md:text-lg text-gray-500 px-7 mt-2">
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Socket.io</li>
              <li>Firebase Storage</li>
            </ul>
          </li>
        </ul>

        {/* Card */}
        <ProjectCard
          cardImg={charChirpSignin}
          cardTitle="Chat Chirp"
          cardDesc="Realtime messaging app"
          link="https://chat-chirp-webapp.onrender.com"
        />
      </div>
      <h2 className="text-center text-xl mt-10">Highlight Features:</h2>
      <div>
        <ul className="flex flex-wrap gap-7 text-gray-500 md:text-lg my-10 justify-center list-disc">
          <li>Real time chat</li>
          <li>User Authentication</li>
          <li>View online users</li>
          <li>Update user info e.g profile pic, email, password</li>
          <li>Message Notifications</li>
          <li>Message sound</li>
        </ul>
        <div>
          <div className="flex flex-col gap-4">
            <img
              src={editProfile}
              alt="Features"
              className="md:w-[80%] mx-auto rounded-md"
            />
            <div className="border border-teal-500 rounded-tr-2xl rounded-bl-2xl max-w-[80%] my-6 mb-16 md:text-xl mx-auto p-5">
              <p className="  dark:text-gray-400">
                This is the <span className="font-bold">edit user profile</span>{" "}
                page. It allows users to change their profile picture and update
                user info such as username, email and password.
              </p>
              <p className=" dark:text-gray-400">
                The form also has an authentication both on the frontend and
                backend side to protect from unauthorized changes and invalid
                inputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjChatChirp;
