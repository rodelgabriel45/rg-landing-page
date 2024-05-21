import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <header>
      <Navbar fluid rounded className="bg-transparent p-4 md:px-40 shadow-lg">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center md:text-3xl whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={"div"} active={path === "/"}>
            <Link to="/" className="md:text-xl">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} active={path === "/portfolio"}>
            <Link to="/portfolio" className="md:text-xl">
              Portfolio
            </Link>
          </Navbar.Link>
          <Navbar.Link
            as={"div"}
            active={path === "/about"}
            className="hover:bg-cyan-700"
          >
            <Link to="/about" className="md:text-xl">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} active={path === "/contact"}>
            <Link to="/contact" className="md:text-xl">
              Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
