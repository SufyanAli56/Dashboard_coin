import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

import User from "../../assets/user01.png";
const Header = ({
  title = "Dashboard",
  showSearch = true,
  showIcons = true,
  toggleSidebar,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b shadow-md px-4 sm:px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
      {/* Left Section - Sidebar Toggle (Mobile) */}
      <div className="flex items-center md:hidden">
        <button
          className="p-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>
      </div>

      {/* Centered Title */}
      <div className="hidden md:flex items-center">
        <h1 className="text-lg sm:text-xl md:ml-50 font-semibold text-gray-700">
          {title}
        </h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-700">
          {title}
        </h1>
      </div>

      {/* Right Section - Search & Icons */}
      <div className="flex items-center gap-3 sm:gap-6 ml-auto">
        {/* Search Bar (Desktop) */}
        {showSearch && (
          <div className="hidden lg:flex items-center relative w-full max-w-md">
            <CiSearch className="absolute left-3 text-black text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        )}

        {/* Search Icon (Mobile) */}
        {showSearch && (
          <button className="lg:hidden bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <CiSearch className="text-gray-700 text-xl" />
          </button>
        )}

        {/* Icons */}
        {showIcons && (
          <>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition hidden md:flex">
              <FaRegCommentDots className="text-gray-700 text-lg" />
            </button>

            <div className="relative hidden md:flex lg:mr-2">
              <button className="bg-gray-100 p-1 rounded-full hover:bg-gray-200 transition">
                <IoIosNotificationsOutline className="text-gray-700 text-2xl" />
              </button>
              <span className="absolute top-1 right-1 bg-red-500 h-3 w-3 rounded-full"></span>
            </div>

            {/* User Profile */}
            <div className="flex items-center  gap-2 lg:mr-12">
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                Andrew Forbist
              </span>
              <img src={User} alt="" className="w-8 h-8 rounded-full" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
