import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from "../../assets/symbol (2).png";
import Union from "../../assets/Union.png";
import { HiCurrencyDollar } from "react-icons/hi";
import {
  FaRegFolderClosed,
  FaArrowTrendUp,
  FaRegSquarePlus,
} from "react-icons/fa6";
import { IoTrendingDown } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

// Pie Chart Data
const data = [
  { name: "Rent & Living", value: 2100, color: "#1A1A1A", percentage: "60%" },
  { name: "Investment", value: 525, color: "#A8F27D", percentage: "15%" },
  { name: "Education", value: 420, color: "#E8E9E9", percentage: "12%" },
  { name: "Food & Drink", value: 280, color: "#CBCCCC", percentage: "8%" },
  { name: "Entertainment", value: 175, color: "#B3B3B3", percentage: "5%" },
];

const data2 = [
  { name: "Mar", income: 5000, expense: 3000 },
  { name: "Apr", income: 5500, expense: 3500 },
  { name: "May", income: 8000, expense: 6000 },
  { name: "Jun", income: 6000, expense: 4000 },
  { name: "Jul", income: 7000, expense: 5000 },
  { name: "Aug", income: 6500, expense: 4500 },
];

const totalExpense = data.reduce((sum, entry) => sum + entry.value, 0);

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Sidebar />

      <div className="p-6 lg:ml-44 mt-12 min-h-screen text-sm flex flex-col gap-6">
        {/* Top Section: Balance & Overview Cards */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          {/* Balance Card */}
          <div className="bg-[#194942] w-full sm:w-80 h-44 rounded-xl p-4 shadow-lg text-white">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Income Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col">
              <div className="flex justify-between items-center">
                <HiCurrencyDollar className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
                <span className="bg-green-200 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaArrowTrendUp /> +1.78%
                </span>
              </div>
              <h3 className="text-2xl font-bold">$78,000</h3>
              <p className="text-gray-500 text-sm">Total Income</p>
            </div>

            {/* Expense Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col">
              <div className="flex justify-between items-center">
                <HiCurrencyDollar className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
                <span className="bg-red-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <IoTrendingDown /> -1.78%
                </span>
              </div>
              <h3 className="text-2xl font-bold">$43,000</h3>
              <p className="text-gray-500 text-sm">Total Expense</p>
            </div>

            {/* Savings Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col">
              <div className="flex justify-between items-center">
                <FaRegFolderClosed className="w-10 h-10 bg-gray-100 p-2 rounded-full" />
                <span className="bg-green-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaArrowTrendUp /> +1.28%
                </span>
              </div>
              <h3 className="text-2xl font-bold">$56,000</h3>
              <p className="text-gray-500 text-sm">Total Savings</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Statistics & Actions */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="bg-gray-200 w-full lg:w-80 h-20 rounded-md flex items-center justify-around p-2 shadow-md">
            {[
              {
                icon: <FaRegSquarePlus className="w-5 h-5" />,
                label: "Top Up",
              },
              {
                icon: <HiCurrencyDollar className="w-5 h-5" />,
                label: "Transfer",
              },
              {
                icon: <HiCurrencyDollar className="w-5 h-5" />,
                label: "Request",
              },
              { icon: <MdAccessTime className="w-5 h-5" />, label: "History" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-gray-700 hover:text-black"
              >
                {item.icon}
                <p className="text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Income & Expense Bar Chart */}
          <div className="bg-white p-4 rounded-lg h-90 shadow-md w-full lg:w-[500px]">
            <h1 className="text-sm font-semibold mb-3">Cashflow</h1>
            <p className="text-sm font-extralight text-gray-500">
              Total Balance
            </p>
            <h3 className="text-3xl font-bold">$562,000</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="income"
                  fill="#000000"
                  barSize={30}
                  radius={[4, 4, 0, 0]}
                  name="Income"
                />
                <Bar
                  dataKey="expense"
                  fill="#6fcf97"
                  barSize={30}
                  radius={[4, 4, 0, 0]}
                  name="Expense"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Statistics Card */}
          <div className="border border-gray-300 w-80 rounded-xl p-4 shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Statistics
              </h3>
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer">
                <span className="text-gray-600 text-sm">This Month</span>
                <FaAngleDown />
              </div>
            </div>

            {/* Income & Expense Summary */}
            <div className="flex mt-8 justify-between text-gray-600 text-sm">
              <span>
                Income <strong>($4,800)</strong>
              </span>
              <span className="text-green-600">
                Expense <strong>($3,500)</strong>
              </span>
            </div>
            <div className="border-b mt-2"></div>

            {/* Pie Chart */}
            <div className="flex flex-col items-center mt-6">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                  >
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
            <div className="mt-4 space-y-3">
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold text-white px-2 py-1 rounded-lg"
                      style={{ backgroundColor: item.color }}
                    >
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
        <div className="w-80 border lg:-mt-114 border-gray-300 rounded-xl p-4 flex flex-col gap-3 shadow-md bg-white">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Daily Limit</h2>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-semibold">$2,500.00</h4>
              <p className="text-xs text-gray-500">spent of $20,000.00</p>
            </div>
            <span className="text-sm font-medium text-gray-600">12.5%</span>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>

          {/* Dual Color Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
              style={{ width: "70%" }}
            ></div>
            <div
              className="absolute top-0 left-[70%] h-full bg-black rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>

          {/* Amount Info */}
          <div className="flex justify-between text-xs text-gray-600">
            <span className="font-medium">$2,500 spent</span>
            <span className="font-medium">$20,000 limit</span>
          </div>
        </div>
        <div className="w-80 border h-120 border-gray-300 rounded-xl p-4 flex flex-col gap-3 shadow-md bg-white">
        <div className="mt-2  flex flex-row gap-18 ">
          <h1 className="text-lg font-bold">Saving Plans</h1>
          <p className="text-lg font-extralight text-gray-400">+ Add Plan</p>
        </div >
        <h2 className="mt-2 text-gray-400 ">Total Savings</h2>
        <h1 className="text-xl font-bold ">$84,500</h1>
        
        </div>
      </div>
    </>
  );
};

export default Dashboard;
