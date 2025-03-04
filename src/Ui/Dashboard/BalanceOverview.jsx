import React from 'react';
import { HiCurrencyDollar } from "react-icons/hi";
import { FaRegFolderClosed, FaArrowTrendUp, FaChartLine } from "react-icons/fa6";
import { IoTrendingDown } from "react-icons/io5";
import Logo from "../../assets/symbol (2).png";
import Union from "../../assets/Union.png";

const BalanceOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Balance Card */}
      <div className="bg-[#194942] w-full lg:w-1/4 h-44 rounded-xl p-4 shadow-lg text-white flex-shrink-0">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <img src={Union} alt="Union" className="w-8 h-8" />
        </div>
        <h2 className="text-lg font-semibold mt-3">Andrew Forbist</h2>
        <div className="mt-3">
          <p className="text-gray-300 text-sm">Balance Amount</p>
          <h3 className="text-2xl font-bold">$562,000</h3>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        {/* Income Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <HiCurrencyDollar className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
            <span className="bg-green-200 px-3 py-1 rounded-full flex items-center gap-1">
              <FaArrowTrendUp /> +1.78%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-2">$78,000</h3>
          <p className="text-gray-500 text-sm">Total Income</p>
        </div>

        {/* Expense Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <HiCurrencyDollar className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
            <span className="bg-red-300 px-3 py-1 rounded-full flex items-center gap-1">
              <IoTrendingDown /> -1.78%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-2">$43,000</h3>
          <p className="text-gray-500 text-sm">Total Expense</p>
        </div>

        {/* Savings Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <FaRegFolderClosed className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
            <span className="bg-green-300 px-3 py-1 rounded-full flex items-center gap-1">
              <FaArrowTrendUp /> +1.28%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-2">$56,000</h3>
          <p className="text-gray-500 text-sm">Total Savings</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceOverview;