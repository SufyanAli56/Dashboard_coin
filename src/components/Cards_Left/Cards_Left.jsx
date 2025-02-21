import React from "react";
import { FaPlus, FaExchangeAlt, FaCreditCard } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Mar", income: 5000, expense: 3000 },
  { name: "Apr", income: 5500, expense: 3500 },
  { name: "May", income: 8000, expense: 6000 },
  { name: "Jun", income: 6000, expense: 4000 },
  { name: "Jul", income: 7000, expense: 5000 },
  { name: "Aug", income: 6500, expense: 4500 },
];

const cardsData = [
  {
    title: "Platinum Plus Visa",
    type: "Debit",
    amount: "$415,000",
    cardNumber: "**** **** **** 9967",
    exp: "12/29",
    cvv: "313",
    brand: "VISA",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    isCredit: false,
  },
  {
    title: "Freedom Unlimited Mastercard",
    type: "Credit",
    amount: "$532,000",
    cardNumber: "**** **** **** 5487",
    exp: "05/25",
    cvv: "411",
    brand: "Mastercard",
    bgColor: "bg-green-800",
    textColor: "text-white",
    isCredit: true,
  },
  {
    title: "Elite Traveler Mastercard",
    type: "Credit",
    amount: "$430,000",
    cardNumber: "**** **** **** 3321",
    exp: "08/29",
    cvv: "672",
    brand: "Mastercard",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    isCredit: true,
  },
];

const Dashboard = () => {
  return (
    <div className="p-4 mt-20 rounded-lg bg-gray-100 min-h-screen">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="flex flex-col lg:col-span-1 space-y-4">
          {/* Card Details */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold">Card Details</h2>
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </div>
            <div className="mt-3 flex justify-between">
              <button className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs">
                <FaPlus /> Top Up
              </button>
              <button className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs">
                <FaExchangeAlt /> Transfer
              </button>
              <button className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs">
                <FaCreditCard /> Payment
              </button>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">Card Number</p>
              <p className="font-medium text-sm">5582 5574 8376 5487</p>
              <div className="flex justify-between mt-3 text-xs">
                <div>
                  <p className="text-gray-500">Expiry Date</p>
                  <p className="font-medium">05/25</p>
                </div>
                <div>
                  <p className="text-gray-500">CVC</p>
                  <p className="font-medium">411</p>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spending Limits */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold">Spending Limits</h2>
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </div>
            <div className="mt-3">
              <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div className="absolute top-0 left-0 h-2 bg-green-500 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                $4,500.00 spent of $10,000.00 <span className="font-medium">45%</span>
              </p>
            </div>
          </div>

          {/* My Cards Section */}
          <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">My Cards</h2>
              <button className="text-green-500 font-medium text-sm">+ Add</button>
            </div>

            {/* Cards in Column Layout */}
            <div className="space-y-4">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl shadow-md ${card.bgColor} ${card.textColor}`}
                >
                  {/* Card Title & Brand */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">{card.title}</h3>
                    <span className="text-xs font-bold">{card.brand}</span>
                  </div>

                  {/* Amount & Type */}
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">{card.amount}</p>
                    <p className="text-sm font-medium">{card.type}</p>
                  </div>

                  {/* Card Details */}
                  <div className="mt-3 text-sm">
                    <p className="text-gray-500">Card Number</p>
                    <p className="font-medium">{card.cardNumber}</p>
                    <div className="flex justify-between mt-2">
                      <div>
                        <p className="text-gray-500">EXP</p>
                        <p className="font-medium">{card.exp}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">CVV</p>
                        <p className="font-medium">{card.cvv}</p>
                      </div>
                    </div>
                  </div>

                  {/* Credit Card Toggle */}
                  {card.isCredit && (
                    <div className="mt-3 flex justify-end">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500"></div>
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:left-6"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Cashflow */}
        <div className="lg:col-span-2 h-fit bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-semibold">Cashflow</h2>
            <select className="border rounded-md px-2 py-1 text-xs text-gray-600">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>

          <div className="flex space-x-4 mb-3 text-xs">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Income
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
              Expense
            </div>
          </div>

          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} barSize={30}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip />
              <Bar dataKey="income" fill="#4ade80" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expense" fill="#1e293b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;