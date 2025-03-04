import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Investments_card from "./Investments_card";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Footer from '../../components/Footer/Footer'
const portfolioData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 18000 },
  { month: "Apr", value: 17000 },
  { month: "May", value: 25000 },
  { month: "Jun", value: 31576 },
  { month: "Jul", value: 28000 },
  { month: "Aug", value: 30000 },
  { month: "Sep", value: 34000 },
  { month: "Oct", value: 39000 },
];

const profitsData = [
  { year: "2021", stocks: 2000, bonds: 1500, realEstate: 1800, mutualFunds: 800 },
  { year: "2022", stocks: 2200, bonds: 1600, realEstate: 1900, mutualFunds: 1100 },
  { year: "2023", stocks: 2500, bonds: 1700, realEstate: 2000, mutualFunds: 1200 },
  { year: "2024", stocks: 2800, bonds: 1800, realEstate: 2200, mutualFunds: 1300 },
  { year: "2025", stocks: 3100, bonds: 1900, realEstate: 2500, mutualFunds: 1500 },
  { year: "2026", stocks: 3300, bonds: 2000, realEstate: 2700, mutualFunds: 1600 },
  { year: "2027", stocks: 3500, bonds: 2100, realEstate: 2800, mutualFunds: 1700 },
  { year: "2028", stocks: 3700, bonds: 2200, realEstate: 3000, mutualFunds: 1800 },
];

const Investments = () => {
  return (
    <>
      <Header title="Investments" />
      <Sidebar />
      <div className="p-6 grid grid-cols-1 md:ml-8  md:grid-cols-1 lg:grid-cols-2 gap-6 lg:p-6 lg:ml-44 mt-12 text-sm">
        {/* Portfolio Value Chart */}
        <div className="bg-white h-100 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Portfolio Value</h2>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Last 10 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4caf50" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-gray-500 text-sm mt-2">Total Value: <span className="font-bold">$349,256.45</span> (+5.64%)</p>
        </div>

        {/* Profits Chart */}
        <div className="bg-white p-4 h-100 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Profits</h2>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Last 8 Years</option>
              <option>Last 5 Years</option>
              <option>All Time</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={profitsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stocks" stackId="a" fill="#000000" />
              <Bar dataKey="bonds" stackId="a" fill="#ffb74d" />
              <Bar dataKey="realEstate" stackId="a" fill="#8bc34a" />
              <Bar dataKey="mutualFunds" stackId="a" fill="#b0bec5" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-gray-500 text-sm mt-2">Total Profits: <span className="font-bold">$68,315.00</span> (+1.78%)</p>
        </div>
      </div>
      <Investments_card/>
      <div className="md:ml-4">
        <Footer/>
      </div>
    </>
  );
};

export default Investments;
