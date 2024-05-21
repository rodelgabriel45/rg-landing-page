import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComp = () => {
  return (
    <div>
      <Footer container className="bg-black shadow-md md:px-40">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" className="md:text-xl" />
                <Footer.LinkGroup col className="md:text-lg">
                  <Footer.Link href="#" className="hover:text-[#09A9C8]">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link href="#" className="hover:text-[#09A9C8]">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" className="md:text-xl" />
                <Footer.LinkGroup col className="md:text-lg">
                  <Footer.Link href="#" className="hover:text-[#09A9C8]">
                    Github
                  </Footer.Link>
                  <Footer.Link href="#" className="hover:text-[#09A9C8]">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="md:text-xl" />
                <Footer.LinkGroup col className="md:text-lg">
                  <Footer.Link href="#" className="hover:text-[#09A9C8]">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#" className="hover:text-[#09A9C8]">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
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
              <Footer.Icon
                href="#"
                icon={BsDribbble}
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
