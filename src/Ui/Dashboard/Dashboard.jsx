import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from "../../assets/symbol (2).png";
import Union from "../../assets/Union.png";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaRegFolderClosed, FaArrowTrendUp } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTrendingDown } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Pie Chart Data
const data = [
  { name: "Rent & Living", value: 2100, color: "#1A1A1A", percentage: "60%" },
  { name: "Investment", value: 525, color: "#A8F27D", percentage: "15%" },
  { name: "Education", value: 420, color: "#E8E9E9", percentage: "12%" },
  { name: "Food & Drink", value: 280, color: "#CBCCCC", percentage: "8%" },
  { name: "Entertainment", value: 175, color: "#B3B3B3", percentage: "5%" },
];

const totalExpense = data.reduce((sum, entry) => sum + entry.value, 0);

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Sidebar />
      <div className="p-4 lg:p-6 lg:ml-44 mt-12 min-h-screen text-sm flex flex-col lg:flex-row gap-6">
        {/* Left Side - Balance Card */}
        <div className="bg-[#194942]  sm:w-80 w-70  h-44 rounded-xl p-4 shadow-lg text-white relative">
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

        {/* Right Side - Cards in Row for Large Screens */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 w-full">
          {/* Income Card */}
          <div className="bg-white flex-1 min-w-[160px] h-34 rounded-xl p-4 shadow-lg flex flex-col">
            <div className="flex justify-between items-center">
              <HiCurrencyDollar className="w-6 h-6 bg-gray-100 p-2 rounded-full" />
              <span className="bg-green-200 px-3 py-1 rounded-full flex items-center gap-1">
                <FaArrowTrendUp />
                +1.78%
              </span>
            </div>
            <h3 className="text-2xl font-bold">$78,000</h3>
            <p className="text-gray-500 text-sm">Total Income</p>
          </div>

          {/* Expense Card */}
          <div className="bg-white flex-1 h-34 min-w-[200px] rounded-xl p-4 shadow-lg flex flex-col">
            <div className="flex justify-between items-center">
              <HiCurrencyDollar className="w-6 h-6 bg-gray-100 p-2 rounded-full" />
              <span className="bg-red-300 px-3 py-1 rounded-full flex items-center gap-1">
                <IoTrendingDown />
                -1.78%
              </span>
            </div>
            <h3 className="text-2xl font-bold">$43,000</h3>
            <p className="text-gray-500 text-sm">Total Expense</p>
          </div>

          {/* Savings Card */}
          <div className="bg-white h-34 flex-1 min-w-[200px] rounded-xl p-4 shadow-lg flex flex-col">
            <div className="flex justify-between items-center">
              <FaRegFolderClosed className="w-6 h-6 bg-gray-100 p-2 rounded-full" />
              <span className="bg-green-300 px-3 py-1 rounded-full flex items-center gap-1">
                <FaArrowTrendUp />
                +1.28%
              </span>
            </div>
            <h3 className="text-2xl font-bold">$56,000</h3>
            <p className="text-gray-500 text-sm">Total Savings</p>
          </div>
        </div>

        {/* Statistics Section with Pie Chart */}
        <div className="border border-gray-300 w-full h-140 sm:w-96 rounded-xl p-4 shadow-sm bg-white">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Statistic</h3>
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer">
              <span className="text-gray-600 text-sm">This Month</span>
              <FaAngleDown />
            </div>
          </div>

          {/* Income & Expense Summary */}
          <div className="flex mt-8 justify-between text-gray-600 text-sm">
            <span>Income <strong>($4,800)</strong></span>
            <span className="text-green-600">Expense <strong>($3,500)</strong></span>
          </div>
          <div className="border-b mt-2"></div>

          {/* Pie Chart */}
          <div className="flex flex-col items-center mt-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute mt-20 text-center">
              <p className="text-gray-500 text-sm">Total Expense</p>
              <p className="text-2xl font-bold">${totalExpense}</p>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="mt-4 space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white px-2 py-1 rounded-lg" style={{ backgroundColor: item.color }}>
                    {item.percentage}
                  </span>
                  <span className="text-gray-700 text-sm">{item.name}</span>
                </span>
                <span className="text-gray-600 text-sm">${item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
