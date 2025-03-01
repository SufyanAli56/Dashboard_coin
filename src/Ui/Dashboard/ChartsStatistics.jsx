import React from "react";
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
import { HiCurrencyDollar } from "react-icons/hi";
import { IoMdNotificationsOff } from "react-icons/io";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegSquarePlus, FaAngleDown } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

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

const totalExpense = data.reduce((sum, item) => sum + item.value, 0);

const ChartsStatistics = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 mt-4">
      {/* Top Action Bar */}
      <div className="bg-gray-200 w-full lg:w-80 h-20 rounded-md flex items-center justify-around p-2 shadow-md">
        {[
          { icon: <FaRegSquarePlus className="w-5 h-5" />, label: "Top Up" },
          { icon: <HiCurrencyDollar className="w-5 h-5" />, label: "Transfer" },
          { icon: <HiCurrencyDollar className="w-5 h-5" />, label: "Request" },
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
        <p className="text-sm font-extralight text-gray-500">Total Balance</p>
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
          <h3 className="text-lg font-semibold text-gray-700">Statistics</h3>
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

        {/* Legend */}
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
  );
};

export default ChartsStatistics;
