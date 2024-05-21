import { Outlet } from "react-router-dom";
import FooterComp from "../components/FooterComp";

const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <FooterComp />
    </>
  );
};

export default FooterLayout;
