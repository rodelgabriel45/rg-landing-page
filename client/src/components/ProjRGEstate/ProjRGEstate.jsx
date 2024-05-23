import rgEstateImg from "../../assets/rg-estate/rgestate.png";
import searchRgEstateImg from "../../assets/rg-estate/searchRgEstate.png";
import ProjectCard from "../ProjectCard";

const ProjRGEstate = () => {
  return (
    <div className="border-b-4 shadow-lg border-teal-600">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20  max-w-6xl mx-auto mt-20">
        <ul className="flex flex-col justify-center items-start">
          <li className="md:text-2xl">
            <div className="flex items-center gap-4">
              <h2>3. RG Estate - </h2>
              <span className="text-gray-500  sm:text-xl">
                A complete real estate app.
              </span>
            </div>
            <h2 className="text-lg mt-2">Technologies Used:</h2>
            <ul className="text-sm list-disc md:text-lg text-gray-500 px-7 mt-2">
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>Firebase Storage</li>
              <li>Google OAuth</li>
            </ul>
          </li>
        </ul>

        {/* Card */}
        <ProjectCard
          cardImg={rgEstateImg}
          cardTitle="RG Estate"
          cardDesc="Real Estate App"
          link="https://rg-estate.onrender.com/"
        />
      </div>
      <h2 className="text-center text-xl mt-10">Highlight Features:</h2>
      <div>
        <ul className="flex flex-wrap gap-7 text-gray-500 my-10 md:text-lg justify-center list-disc">
          <li>Users can post, update, and delete listings</li>
          <li>User Authentication</li>
          <li>Contact Listing Agent</li>
          <li>
            Complete search functionality via type, sort, name, and description
          </li>

          <li>Update posts, view latest posts, users, comments</li>
        </ul>
        <div>
          <div className="flex flex-col gap-4">
            <img
              src={searchRgEstateImg}
              alt="Features"
              className="md:w-[80%] mx-auto rounded-md"
            />
            <div className="border border-teal-500 rounded-tr-2xl rounded-bl-2xl max-w-[70%] my-6 mb-16 md:text-xl mx-auto p-5">
              <p className=" text-gray-500">
                This is the <span className="font-bold">search listing</span>{" "}
                page. It allows users to view the listings. It also provides a
                user friendly search methods. users. Users can select a listing
                and contact the listing agent/poster.
              </p>
              <p className=" text-gray-500">
                The sidebar provides all the tools for searching listings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjRGEstate;
