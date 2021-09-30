import React, { useState } from "react";
import Navbar from "../../../Components/Header/Navbar/Navbar";
import Orders from "../Menu/Orders/Orders";
import Review from "../Menu/Review/Review";
import Settings from "../Menu/Settings/Settings";
import Wishlist from "../Menu/Wishlist/Wishlist";
import Sidebar from "../SideBar/Sidebar";
import UserProfile from "../UserProfile/UserProfile";
import DashboardCart from "./DashboardCart";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const [openTab, setOpenTab] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar />
      <body class="h-screen overflow-hidden flex items-center justify-center bg-gray-200">
        <div class="h-screen flex">
          <div>
            <Sidebar
              openTab={openTab}
              setOpenTab={setOpenTab}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>

          <main class="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition duration-500 ease-in-out">
            <div class="px-24 py-12 text-gray-700 dark:text-gray-500 transition duration-500 ease-in-out">
              {/* Header: Left side */}
              <div className="flex">
                {/* Hamburger button */}
                <button
                  className="text-gray-500 hover:text-gray-600 lg:hidden"
                  aria-controls="sidebar"
                  aria-expanded={sidebarOpen}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="5" width="16" height="2" />
                    <rect x="4" y="11" width="16" height="2" />
                    <rect x="4" y="17" width="16" height="2" />
                  </svg>
                </button>
              </div>
              <h2 class="text-4xl font-medium capitalize">expenses</h2>
              <DashboardHeader />
              <div class="border border-gray-700 transition duration-500 ease-in-out"></div>

              <div className={openTab === 1 ? "block" : "hidden"}>
                <DashboardCart />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <Review />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <Orders />
              </div>
              <div className={openTab === 4 ? "block" : "hidden"}>
                <Wishlist />
              </div>
              <div className={openTab === 5 ? "block" : "hidden"}>
                <Settings />
              </div>
              <div className={openTab === 6 ? "block" : "hidden"}>
                <UserProfile />
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};

export default Dashboard;
