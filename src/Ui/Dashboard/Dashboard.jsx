import React, { useState } from "react";
import Ft_Logo from "../../assets/symbol (1).png";
import Union from "../../assets/Union.png";
import { HiCurrencyDollar } from "react-icons/hi";
import { CiFolderOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaArrowTrendDown } from "react-icons/fa6";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatCard = ({ icon: Icon, value, label, change, changeType }) => {
  return (
    <div className="bg-white border border-gray-200 p-2 w-40 rounded-xl shadow-md flex flex-col items-start text-center  transition-transform transform hover:scale-105 duration-300">
      <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
        <BsThreeDotsVertical className="text-lg" />
      </button>
      <div className="bg-gray-100 p-3 rounded-full mb-3">
        <Icon className="text-black text-2xl" />
      </div>
      {change !== undefined && (
        <button className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 mb-2 shadow-md ${changeType === "increase" ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}`}>
          <FaArrowTrendDown className="text-sm" />
          {changeType === "increase" ? "+" : "-"}{change}%
        </button>
      )}
      <h2 className="text-2xl text-black font-bold">${value}</h2>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
    </div>
  );
};

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("This Month");
  const totalExpense = 3500;
  const expenses = [
    { label: "Rent & Living", value: 2100, percentage: 60, color: "#000000" },
    { label: "Investment", value: 525, percentage: 15, color: "#A6CE39" },
    { label: "Education", value: 420, percentage: 12, color: "#D3D3D3" },
    { label: "Food & Drink", value: 280, percentage: 8, color: "#808080" },
    { label: "Entertainment", value: 175, percentage: 5, color: "#E5E5E5" },
  ];

  const doughnutData = {
    labels: expenses.map((e) => e.label),
    datasets: [
      {
        data: expenses.map((e) => e.value),
        backgroundColor: expenses.map((e) => e.color),
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "75%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            return `${expenses[index].percentage}% ${expenses[index].label} ($${expenses[index].value})`;
          },
        },
      },
    },
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="mt-14 flex flex-col items-center lg:flex-row lg:justify-center gap-2 p-4">
        <div className="relative bg-[#0D0F10] w-full max-w-xs p-6 rounded-2xl shadow-lg text-white">
          <div className="flex justify-between items-center">
            <img src={Ft_Logo} alt="Ft Logo" className="w-6 h-6" />
            <img src={Union} alt="Union" className="w-6 h-6 opacity-70" />
          </div>
          <h2 className="text-xl font-semibold mt-4">Andrew Forbist</h2>
          <p className="text-gray-400 text-sm mt-2">Balance Amount</p>
          <h3 className="font-bold text-3xl mt-1">$562,000</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-4xl">
          <StatCard icon={HiCurrencyDollar} value={"78,000"} label="Total Income" change={1.78} changeType="increase" />
          <StatCard icon={HiCurrencyDollar} value={"43,000"} label="Total Expense" change={1.78} changeType="decrease" />
          <StatCard icon={CiFolderOn} value={"56,000"} label="Total Savings" change={1.24} changeType="increase" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-4 w-full max-w-lg mx-auto">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold text-gray-700">Stataic</h2>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm cursor-pointer text-gray-700"
          >
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-md w-full flex flex-col items-center relative">
          <Doughnut data={doughnutData} options={doughnutOptions} className="w-full max-w-xs" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm">Total Expense</p>
            <p className="text-black font-bold text-2xl">${totalExpense}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
