import React from "react";
import Ft_Logo from "../../assets/symbol (2).png";
import Union from "../../assets/Union.png";
import { HiCurrencyDollar } from "react-icons/hi";

import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="mt-14 flex flex-col lg:flex-row justify-center gap-6">
      {/* Main Card */}
      <div className="relative bg-[#0D0F10] w-96 p-6 rounded-2xl shadow-lg text-white">
        {/* Top Section (Logos) */}
        <div className="flex justify-between items-center">
          <img src={Ft_Logo} alt="Ft Logo" className="w-6 h-6" />
          <img src={Union} alt="Union" className="w-6 h-6 opacity-70" />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold mt-4">Andrew Forbist</h2>

        {/* Balance Section */}
        <p className="text-gray-400 text-sm mt-4">Balance Amount</p>
        <h3 className="font-bold text-4xl mt-1">$562,000</h3>

        {/* EXP & CVV Section */}
        <div className="absolute bottom-6 right-6 text-right grid grid-cols-2 gap-x-4 items-center">
          <p className="font-medium text-lg">11/29</p>
          <p className="text-gray-400 text-xs text-left">EXP</p>

          <p className="font-medium text-lg bg-[#1E2A30] px-3 py-1 rounded-md">
            323
          </p>
          <p className="text-gray-400 text-xs text-left">CVV</p>
        </div>
      </div>

      {/* Total Income Section */}

      <div className="bg-white border border-gray-200 w-60 p-6 rounded-2xl shadow-xl flex flex-col items-start text-center relative">
        {/* Three Dots Menu */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <BsThreeDotsVertical className="text-xl" />
        </button>

        {/* Icon */}
        <div className="bg-gray-100 p-3 rounded-md mb-3">
          <HiCurrencyDollar className="text-black text-2xl" />
        </div>

        {/* Growth Indicator */}
        <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 mb-2 transition-all duration-300 hover:bg-green-600 shadow-md">
          +1.78%
        </button>

        {/* Total Income */}
        <h2 className="text-3xl text-black font-bold">$43,000</h2>
        <p className="text-gray-500 text-sm font-medium">Total Income</p>
      </div>
      <div className="bg-white border border-gray-200 w-60 p-6 rounded-2xl shadow-xl flex flex-col items-start text-center relative">
        {/* Three Dots Menu */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <BsThreeDotsVertical className="text-xl" />
        </button>

        {/* Icon */}
        <div className="bg-gray-100 p-3 rounded-md mb-3">
          <HiCurrencyDollar className="text-black text-2xl" />
        </div>

        {/* Growth Indicator */}
        <button className="bg-red-200 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 mb-2 transition-all duration-300 hover:bg-green-600 shadow-md">
          -1.78%
        </button>

        {/* Total Income */}
        <h2 className="text-3xl text-black font-bold">$78,000</h2>
        <p className="text-gray-500 text-sm font-medium">Total Expense</p>
      </div>
    </div>
    
    </>
  );
};

export default Dashboard;
