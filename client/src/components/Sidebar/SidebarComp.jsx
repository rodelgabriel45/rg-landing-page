import { Button, Sidebar, Toast } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useEffect, useState } from "react";

import { clearCurrentUser } from "../../redux/user/userSlice";

const SidebarComp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  const handleLogout = async () => {
    const proceed = window.confirm("Are you sure you want to logout now?");

    if (proceed) {
      try {
        const res = await fetch("/api/auth/logout");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        dispatch(clearCurrentUser());
      } catch (error) {
        toast.error(error.message || error);
      }
    }
  };

  return (
    <Sidebar aria-label="Default sidebar example" className="!bg-gray-500">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/admin-dash?tab=dash">
            <Sidebar.Item active={tab === "dash"} icon={HiChartPie} as="div">
              Dashboard
            </Sidebar.Item>
          </Link>

          <Link to="/admin-dash?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiViewBoards}
              label={currentUser?.isAdmin ? "Admin" : "User"}
              labelColor="dark"
              as="div"
            >
              {currentUser.username}
            </Sidebar.Item>
          </Link>

          <Link to="/admin-dash?tab=inbox">
            <Sidebar.Item active={tab === "inbox"} icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
          </Link>

          <Sidebar.Item
            icon={HiArrowSmLeft}
            className="hover:bg-red-500 hover:text-white cursor-pointer"
            onClick={handleLogout}
          >
            Signout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarComp;
