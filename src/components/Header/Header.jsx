import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaGripLines } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  const [showElements, setShowElements] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full md:w-[1200px] rounded-tl-xl rounded-t-xl bg-[#EBF1E9] md:bg-white border-b md:ml-56 border-gray-200 shadow-md px-4 sm:px-6 md:px-8 md:right-0 md:left-auto">
      <div className="flex items-center justify-between py-3 relative">
        
        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden p-4 ml-72 rounded-full"
          onClick={() => setShowElements(!showElements)}
        >
          <FaGripLines />
        </button>

        {/* Dashboard Title - Centered on Mobile & Tablet, Left on Desktop */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-semibold text-gray-700 absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0"
        >
          Dashboard
        </a>

        <div className="flex items-center gap-4">
          {/* Search Input - Hide on Tablet (md) but show on Desktop (lg and up) */}
          <div className="relative hidden lg:block">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 rounded-full font-light pl-10 pr-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Icons & Profile */}
          <div className="hidden md:flex items-center gap-4 sm:gap-6">
            <button className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition duration-300">
              <FaRegCommentDots className="text-gray-700 text-lg" />
            </button>
            <div className="relative">
              <button className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition duration-300">
                <IoIosNotificationsOutline className="text-gray-700 text-2xl" />
              </button>
              <span className="absolute top-1 right-1 bg-red-500 h-3 w-3 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="hidden sm:block font-outfit text-lg">
                Andrew Forbist
              </h2>
              <div className="bg-green-300 h-10 w-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
