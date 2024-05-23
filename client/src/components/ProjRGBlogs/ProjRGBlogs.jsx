import { Link } from "react-router-dom";
import adminDashImg from "../../assets/rg-blogs/admin-dash.png";
import rgblogsImg from "../../assets/rg-blogs/rgblogs.png";

const ProjRGBlogs = () => {
  return (
    <div className="border-b-4 shadow-lg border-teal-600">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20  max-w-6xl mx-auto mt-20">
        <ul className="flex flex-col justify-center items-start">
          <li className="md:text-2xl">
            <div className="flex items-center gap-4">
              <h2>2. RG Blogs - </h2>
              <span className="text-gray-500  sm:text-xl">
                A blog post app with comments and reactions.
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
        <div className="group relative w-[360px] mt-10 md:mt-0 h-full border overflow-hidden rounded-md sm:w-[320px] border-teal-500 hover:border-2 transform transition ease-in-out">
          <img
            className="h-[320px] md:h-[200px] w-full object-cover hover:scale-105 transition transform duration-300 ease-in-out"
            src={rgblogsImg}
            alt="Website Photo"
          />

          <div className="p-3 flex flex-col gap-2">
            <p className="text-lg font-semibold line-clamp-2">RG-Blogs</p>
            <span className="italic text-sm">Blog App</span>
            <Link
              to="https://rg-blogs.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" z-10 bottom-[-200px] left-0 right-0 border border-teal-500 hover:bg-teal-500 hover:text-white text-500 group-hover:bottom-20 absolute my-5 w-[50%] mx-auto rounded-md p-2 text-center transition tranform ease-in-out duration-300"
            >
              Go to website
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-center text-xl mt-10">Highlight Features:</h2>
      <div>
        <ul className="flex flex-wrap gap-7 text-gray-500 my-10 md:text-lg justify-center list-disc">
          <li>Admin can add new post</li>
          <li>User Authentication</li>
          <li>Admin Dashboard</li>
          <li>Users can view post, add comment, and like posts</li>
          <li>Dark mode toggle</li>
          <li>Update posts, view latest posts, users, comments</li>
          <li>Search functionality</li>
        </ul>
        <div>
          <div className="flex flex-col gap-4">
            <img
              src={adminDashImg}
              alt="Features"
              className="md:w-[80%] mx-auto rounded-md"
            />
            <div className="border border-teal-500 rounded-tr-2xl rounded-bl-2xl max-w-[70%] my-6 mb-16 md:text-xl mx-auto p-5">
              <p className=" text-gray-500">
                This is the <span className="font-bold">admin dashboard</span>{" "}
                page. It allows admin to view the total posts, comments, and
                users. It also allows admin additional features such as add,
                delete and update posts.
              </p>
              <p className=" text-gray-500">
                The sidebar also provides a tab for all posts, users, and
                comments. Additionally, the admins can delete post and comments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjRGBlogs;
