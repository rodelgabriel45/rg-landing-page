import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarComp from "../components/Sidebar/SidebarComp";
import Inbox from "../components/Sidebar/Inbox";

const AdminDashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  // set tab state everytime the tab url changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-7">
      <div className="md:w-56">
        <SidebarComp />
      </div>
      {tab === "inbox" && <Inbox />}
      {/* {tab === "posts" && <DashPosts />}
  {tab === "users" && <DashUsers />}
  {tab === "comments" && <DashComments />}
  {tab === "dashboard" && <DashboardComponent />} */}
    </div>
  );
};

export default AdminDashboard;
