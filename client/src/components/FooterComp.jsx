import rgLogo from "../assets/rg-logo.png";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <div>
      <Footer container className="!bg-black shadow-md md:px-40">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <div className="flex items-center md:mr-16 xl:mr-0 mb-5">
                <img
                  src={rgLogo}
                  alt="RG-Logo"
                  className="w-10 h-10 rounded-full object-cover mr-2"
                />
                <span className="self-center md:text-2xl whitespace-nowrap text-xl font-semibold dark:text-white">
                  Rodel Gabriel
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" className="md:text-xl" />
                <Footer.LinkGroup col className="md:text-lg">
                  <Footer.Link className="hover:text-[#09A9C8]" as={"div"}>
                    <Link to="/about">About Me</Link>
                  </Footer.Link>
                  <Footer.Link className="hover:text-[#09A9C8]" as={"div"}>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="follow me" className="md:text-xl" />
                <Footer.LinkGroup col className="md:text-lg">
                  <Footer.Link className="hover:text-[#09A9C8]" as={"div"}>
                    <Link
                      to="https://github.com/rodelgabriel45"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </Link>
                  </Footer.Link>
                  <Footer.Link className="hover:text-[#09A9C8]" as={"div"}>
                    <Link
                      to="https://www.facebook.com/rodelgabriel45/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </Link>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="contact" className="md:text-xl" />
                <Footer.LinkGroup col className="md:text-lg">
                  <Footer.Link
                    href="mailto:rodelgabriel45@gmail.com"
                    className="hover:text-[#09A9C8]"
                  >
                    rodelgabriel45@gmail.com
                  </Footer.Link>
                  <Footer.Link className="hover:text-[#09A9C8]" as={"div"}>
                    <Link to="/contact">Contact Page</Link>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Rodel Gabriel" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/rodelgabriel45/"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsFacebook}
                className="hover:text-[#09A9C8]"
              />
              <Footer.Icon
                href="#"
                icon={BsInstagram}
                className="hover:text-[#09A9C8]"
              />
              <Footer.Icon
                href="#"
                icon={BsTwitter}
                className="hover:text-[#09A9C8]"
              />
              <Footer.Icon
                href="#"
                icon={BsGithub}
                className="hover:text-[#09A9C8]"
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComp;
