import React, { useState } from "react";
import { FaCcVisa, FaMoneyBillWave, FaNetworkWired } from "react-icons/fa";
import { MdOutlinePayment, MdBusiness } from "react-icons/md";

const recentPayments = [
  { id: 1, name: "Geico Insurance", amount: "$450", status: "Successful", number: "13479256" },
  { id: 2, name: "DISH Network", amount: "$890", status: "Successful", number: "8900134" },
  { id: 3, name: "Coursera", amount: "$990", status: "Successful", number: "23982055" },
];

const PaymentForm = () => {
  const [provider, setProvider] = useState("Internet & Cable TV");
  const [company, setCompany] = useState("Comcast Xfinity");
  const [amount, setAmount] = useState("");

  return (
    <div className="p-4 lg:w-180 sm:p-6 w-full max-w-3xl mx-auto">
      {/* Recent Payments Section */}
      <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg">Recent Payments</h2>
          <button className="text-blue-500 text-sm">Show More</button>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="mt-3 flex space-x-4 overflow-x-auto scrollbar-hide p-2">
          {recentPayments.map((payment) => (
            <div
              key={payment.id}
              className="min-w-[250px] sm:min-w-[300px] bg-green-100 p-4 rounded-xl shadow-md flex flex-col"
            >
              <div className="flex items-center space-x-2">
                <FaMoneyBillWave className="text-green-600 text-xl" />
                <p className="text-sm font-semibold">{payment.name}</p>
              </div>
              <p className="text-gray-700 text-lg font-bold mt-1">{payment.amount}</p>
              <p className="text-green-500 text-xs mt-1">{payment.status}</p>
              <p className="text-gray-500 text-xs">Ref: {payment.number}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Form Section */}
      <div className="bg-gray-100 mt-6 p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="font-bold text-lg mb-4 text-gray-800">Make a Payment</h2>

        {/* Payment Account */}
        <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Card 1 */}
            <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-4">
              <div className="bg-black p-3 rounded-full">
                <MdOutlinePayment className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Freedom Unlimited Mastercard</p>
                <p className="text-2xl font-bold text-gray-800">$539,000</p>
                <p className="text-sm text-gray-500">**** 6789</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-4">
              <div className="bg-black p-3 rounded-full">
                <FaCcVisa className="text-blue-500 text-2xl" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Platinum Plus Visa</p>
                <p className="text-2xl font-bold text-gray-800">$415,000</p>
                <p className="text-sm text-gray-500">**** 9907</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Provider */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-800">Service Provider</label>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {/* Service Provider Select Box */}
            <div className="flex-1 flex items-center bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-green-200 p-2 rounded-full">
                <FaNetworkWired className="text-green-600 text-lg" />
              </div>
              <select
                className="w-full p-2 bg-transparent outline-none text-gray-800"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
              >
                <option>Internet & Cable TV</option>
                <option>Electricity</option>
                <option>Gas</option>
              </select>
            </div>

            {/* Company Select Box */}
            <div className="flex-1 flex items-center bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
              <div className="bg-green-200 p-2 rounded-full">
                <MdBusiness className="text-green-600 text-lg" />
              </div>
              <select
                className="w-full p-2 bg-transparent outline-none text-gray-800"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option>Comcast Xfinity</option>
                <option>AT&T</option>
                <option>Verizon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Virtual Account */}
        <div className="mt-4">
          <label className="block font-semibold text-gray-800">Virtual Account</label>
          <input
            type="text"
            value="9676345210"
            className="w-full p-2 border rounded-lg bg-white shadow-sm mt-2 text-gray-700"
            disabled
          />
        </div>

        {/* Amount Input */}
        <div className="mt-4">
          <label className="block font-semibold text-gray-800">Amount</label>
          <input
            type="number"
            placeholder="$100.00"
            className="w-full p-2 border rounded-lg bg-white shadow-sm mt-2 text-gray-800"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3">
          <button className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Cancel
          </button>
          <button className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
