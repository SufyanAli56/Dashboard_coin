import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { FaCcVisa } from "react-icons/fa";
import { RiMastercardLine } from "react-icons/ri";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const cardData = [
  {
    title: "Income",
    amount: "$8500",
    change: "+$355",
    percentage: "1.78%",
    isPositive: true,
  },
  {
    title: "Expenses",
    amount: "$4200",
    change: "-$200",
    percentage: "-0.85%",
    isPositive: false,
  },
  {
    title: "Savings",
    amount: "$5300",
    change: "+$500",
    percentage: "2.10%",
    isPositive: true,
  },
  {
    title: "Investments",
    amount: "$3200",
    change: "+$150",
    percentage: "0.95%",
    isPositive: true,
  },
];

// Sample cash flow data
const cashFlowData = [
  { month: "Jan", income: 8000, expenses: 4000 },
  { month: "Feb", income: 8500, expenses: 4200 },
  { month: "Mar", income: 9000, expenses: 4500 },
  { month: "Apr", income: 8200, expenses: 4300 },
  { month: "May", income: 8700, expenses: 4100 },
  { month: "Jun", income: 8800, expenses: 4400 },
];

// Sample expense breakdown data for the pie chart
const expenseBreakdownData = [
  { name: "Food", value: 1200 },
  { name: "Transport", value: 800 },
  { name: "Entertainment", value: 600 },
  { name: "Utilities", value: 1000 },
  { name: "Others", value: 600 },
];

// Colors for the pie chart segments
const COLORS = ["black", "#D8E8DC", "#DAF5B5", "#DBF6E4", "#B3B3B5"];

const BalanceOverview = () => {
  // Calculate total expenses for percentage calculation
  const totalExpenses = expenseBreakdownData.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row">
  {/* Cards Section */}
  <div className="flex flex-col gap-4 p-2 w-full lg:w-2/3">
    {[0, 2].map((rowIndex) => (
      <div key={rowIndex} className="flex flex-col sm:flex-row gap-4">
        {cardData.slice(rowIndex, rowIndex + 2).map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 border border-gray-200 p-3 rounded-md shadow-sm bg-white"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-100 rounded-md">
                <HiCurrencyDollar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-lg font-semibold">{item.amount}</h2>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-gray-500 text-xs">
                {item.change}{" "}
                <span className="text-gray-400">than last week</span>
              </p>
              <button
                className={`px-2 py-1 text-xs rounded flex items-center gap-1 ${item.isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {item.isPositive ? (
                  <HiArrowUp className="w-4 h-4" />
                ) : (
                  <HiArrowDown className="w-4 h-4" />
                )}
                {item.percentage}
              </button>
            </div>
          </div>
        ))}
      </div>
    ))}

    {/* Cash Flow Graph Section */}
    <div className="mt-2 w-full">
      <div className="w-full lg:h-100 bg-white p-4 rounded-md shadow-sm border border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold">
          Cash Flow Overview
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>

  {/* Expense Breakdown Card */}
  <div className="w-full lg:w-1/3 lg:h-102 mt-4 lg:mt-0 lg:ml-4">
    <div className="w-full h-auto lg:h-160 border-1 border-gray-300 rounded-md bg-white shadow-sm">
      <div className="p-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold">Expense Breakdown</h2>
          <div className="flex items-center gap-1 text-gray-500">
            <p>Today</p>
            <RiArrowDropDownLine className="w-4 h-5" />
          </div>
        </div>
        {/* Pie Chart */}
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseBreakdownData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value"
                label
              >
                {expenseBreakdownData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Expense Breakdown List */}
        <div className="mt-4">
          {expenseBreakdownData.map((item, index) => {
            const percentage = ((item.value / totalExpenses) * 100).toFixed(2);
            return (
              <div
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: COLORS[index % COLORS.length],
                    }}
                  ></div>
                  <p className="text-sm text-gray-700">{item.name}</p>
                </div>
                <p className="text-sm text-gray-700">{percentage}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>

  {/* Finance Score Card and Balance Section */}
  <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-4">
    <div className="w-full h-56 bg-gradient-to-br from-gray-100 to-white border border-gray-300 shadow-md rounded-lg p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-700 text-lg">Finance Score</h2>
        <BsThreeDots className="text-gray-500 cursor-pointer" />
      </div>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm mt-2">Finance Quality</p>

      {/* Score Section */}
      <div className="flex justify-between items-center mt-4">
        <h2 className="font-bold text-green-600 text-lg">Excellent</h2>
        <p className="text-gray-600 text-sm">92%</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-green-300 h-2 rounded-full mt-4 relative">
        <div
          className="h-2 bg-gray-600 rounded-full transition-all duration-500"
          style={{ width: "80%" }}
        ></div>
      </div>
    </div>

    {/* Balance Section */}
    <div className="w-full h-auto mt-4 p-4 border-1 border-gray-300 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-700 text-lg">Balance</h2>
        <BsThreeDots className="text-gray-500 cursor-pointer" />
      </div>
      <p className="text-gray-500 text-sm mt-2">Finance Quality</p>
      <h2 className="font-semibold text-gray-700 text-lg">$1,377,000</h2>

      {/* Visa Card */}
      <div className="w-full h-34 bg-gray-100 text-white border border-gray-700 shadow-lg rounded-lg p-4 relative mt-4">
        <FaCcVisa className="text-green-300 text-3xl absolute top-3 left-4" />
        <p className="text-gray-700 text-xs font-light mt-8">Platinum Plus Visa</p>
        <h2 className="text-xl font-semibold mt-1 text-black">$415,000</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-500 text-xs tracking-wider">4532 8723 0045 9967</p>
          <IoCopyOutline className="text-gray-400 cursor-pointer hover:text-white transition duration-200" />
        </div>
      </div>

      {/* Mastercard */}
      <div className="w-full h-34 bg-gray-100 text-white border border-gray-700 shadow-lg rounded-lg p-4 relative mt-4">
        <RiMastercardLine className="text-green-300 text-3xl absolute top-3 left-4" />
        <p className="text-gray-700 text-xs font-light mt-6">Freedom Unlimited Mastercard</p>
        <h2 className="text-xl font-semibold mt-1 text-black">$532,000</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-500 text-xs tracking-wider">5582 5574 8376 5487</p>
          <IoCopyOutline className="text-gray-400 cursor-pointer hover:text-white transition duration-200" />
        </div>
      </div>
    </div>
  </div>
</div>
      
  );
};

export default BalanceOverview;
