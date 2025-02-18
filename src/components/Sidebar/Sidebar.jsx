import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/symbol.png";
import Ft_Logo from "../../assets/symbol (1).png";
import { FaChevronDown, FaUnlockAlt } from "react-icons/fa";
import { PiCirclesFour } from "react-icons/pi";
import { LiaIdCardSolid } from "react-icons/lia";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { LuArrowLeftRight } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { BsFillSuitDiamondFill, BsCardHeading } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);

  const menuItems = [
    { icon: <PiCirclesFour />, label: "Dashboard", path: "/" },
    { icon: <LuArrowLeftRight />, label: "Transaction", path: "/Transaction" },
    { icon: <IoFileTrayFullOutline />, label: "Invoices", path: "/invoices" },
    { icon: <BsCardHeading />, label: "Cards", path: "/cards" },
    { icon: <BsFillSuitDiamondFill />, label: "Investments", path: "/investments" },
    { icon: <LiaIdCardSolid />, label: "Insights", path: "/insights" },
    { icon: <VscSettingsGear />, label: "Promos", path: "/promos" },
  ];

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-[100] md:hidden"
      >
        <img src={Logo} alt="Toggle Sidebar" className="h-8 w-8" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[90] h-screen bg-[#ECF4E9] shadow-lg border-r border-gray-200 font-outfit transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-16 lg:w-48`}
      >
        <div className="h-full flex flex-col p-4 text-gray-900">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-6 w-6" />
              <h2 className="text-lg font-semibold sm:block hidden lg:block">
                Coinest
              </h2>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
              ✕
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col space-y-1 text-sm">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 p-2 hover:bg-green-200 rounded-full transition-all duration-300 ease-in-out"
              >
                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                <span className="sm:inline-block md:hidden lg:inline-block">
                  {item.label}
                </span>
              </Link>
            ))}

            {/* Payments Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsTransferOpen(!isTransferOpen)}
                className="flex items-center gap-2 p-2 hover:bg-green-200 rounded-full w-full transition-all duration-300 ease-in-out"
              >
                <CiCreditCard1 className="w-5 h-5" />
                <span className="sm:inline-block md:hidden lg:inline-block">
                  Payments
                </span>
                <FaChevronDown
                  className={`ml-auto sm:block md:hidden lg:block ${
                    isTransferOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isTransferOpen && (
                <div className="ml-6 flex flex-col text-xs">
                  <Link
                    to="/transfer"
                    className="p-1 hover:bg-green-200 rounded-md transition-all duration-300 ease-in-out"
                  >
                    Transfer
                  </Link>
                  <Link
                    to="/payment"
                    className="p-1 hover:bg-green-200 rounded-md transition-all duration-300 ease-in-out"
                  >
                    Payment
                  </Link>
                </div>
              )}
            </div>

            {/* Inbox with Notification */}
            <Link
              to="/inbox"
              className="flex items-center justify-between p-2 hover:bg-green-200 rounded-full transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-2">
                <MdOutlineMail className="w-5 h-5" />
                <span className="sm:inline-block md:hidden lg:inline-block">
                  Inbox
                </span>
              </div>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                99+
              </span>
            </Link>
          </nav>

          {/* Sidebar Footer (Cards) */}
          <div className="mt-auto flex flex-col items-center p-3 bg-[#194942] text-white rounded-md text-center text-xs shadow-md sm:flex md:hidden lg:flex">
            <div className="flex justify-between w-full mb-2">
              <div className="bg-white p-2 rounded-md">
                <FaUnlockAlt className="text-black" />
              </div>
              <img src={Ft_Logo} alt="Logo" className="w-8 h-8" />
            </div>
            <p className="mb-2">
              Full access to finances with detailed analytics.
            </p>
            <button className="bg-green-300 text-black px-4 py-1 rounded-md shadow transition-all duration-300 ease-in-out hover:bg-green-400">
              Get Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
