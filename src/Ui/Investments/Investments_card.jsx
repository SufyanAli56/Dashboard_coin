import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaAmazon, FaGoogle, FaTwitter, FaMicrosoft, FaApple, FaSpotify } from "react-icons/fa"; // Importing icons
import { PieChart, Pie, Cell } from "recharts";
// Stock Icons Mapping
const stockIcons = {
    AMZN: <FaAmazon className="text-yellow-500 bg-gray-200 w-8 h-8 rounded-full p-1" />, // Amazon yellow
    GOOGL: <FaGoogle className="text-blue-500 bg-gray-200 w-8 h-8 rounded-full p-1" />, // Google blue
    TWTR: <FaTwitter className="text-blue-400 bg-gray-200 w-8 h-8 rounded-full p-1" />, // Twitter light blue
    MSFT: <FaMicrosoft className="text-green-600 bg-gray-200 w-8 h-8 rounded-full p-1" />, // Microsoft green
    AAPL: <FaApple className="text-gray-700 bg-gray-200 w-8 h-8 rounded-full p-1" />, // Apple gray
    SPOT: <FaSpotify className="text-green-400 bg-gray-200 w-8 h-8 rounded-full p-1" />, // Spotify green
  };
  

// Watchlist Data
const watchlistData = [
  { symbol: "AMZN", name: "Amazon Inc.", price: 3204.5, change: "+4.56%" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2785.68, change: "+2.34%" },
  { symbol: "TWTR", name: "Twitter Inc.", price: 399.41, change: "+1.78%" },
  { symbol: "MSFT", name: "Microsoft Corp", price: 362.62, change: "+2.21%" },
  { symbol: "AAPL", name: "Apple Inc.", price: 145.3, change: "-1.22%" },
  { symbol: "SPOT", name: "Spotify", price: 182.5, change: "-3.09%" },
];
const assetData = [
    { name: "Stocks", value: 275000, color: "#000000" }, // Black
    { name: "Bonds", value: 100000, color: "#A6E17A" }, // Light Green
    { name: "Real Estate", value: 75000, color: "#D3D3D3" }, // Gray
    { name: "Mutual Funds", value: 50000, color: "#BEBEBE" }, // Lighter Gray
  ];
  const totalAssets = assetData.reduce((acc, asset) => acc + asset.value, 0);

const Investments_card = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:ml-44">
      {/* Watchlist Card */}
      <div className="bg-white p-4 border-gray-300 border-[0.5px] rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-black">Watchlist</h2>
          <button className="text-sm text-black">View All</button>
        </div>

        {watchlistData.map((stock, index) => {
          const isPositive = stock.change.includes("+");
          return (
            <div
              key={index}
              className="flex justify-between items-center mb-3 border-b pb-2"
            >
              <div className="flex items-center">
                {stockIcons[stock.symbol]}
                <div className="ml-2">
                  <h3 className="font-semibold text-black">{stock.symbol}</h3>
                  <p className="text-xs text-gray-500">{stock.name}</p>
                </div>
              </div>

              {/* Price Above the Change Button */}
              <div className="flex flex-col items-end">
                <span className="font-semibold text-black mb-1">
                  {stock.price.toLocaleString()}
                </span>
                <button
                  className={`px-2 py-1 rounded text-white flex items-center ${
                    isPositive ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                  {stock.change}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Assets</h2>
        <span className="text-sm text-gray-500">Today ▼</span>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center">
      <PieChart width={200} height={130}>
          <Pie
            data={assetData}
            cx={100}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={94}
            dataKey="value"
          >
            {assetData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Total Assets */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-black">${totalAssets.toLocaleString()}</h3>
        <p className="text-sm text-gray-500">+5% compared to last year</p>
      </div>

      {/* Asset Breakdown */}
      <div className="mt-4 border-t pt-3">
        {assetData.map((asset, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span
                className="w-3 h-8 rounded-full mr-2"
                style={{ backgroundColor: asset.color }}
              ></span>
              <p className="text-black">{asset.name}</p>
            </div>
            <div className="text-right">
              <p className="text-black font-semibold">
                {((asset.value / totalAssets) * 100).toFixed(0)}%
              </p>
              <p className="text-gray-500 text-sm">${asset.value.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Investments_card;
