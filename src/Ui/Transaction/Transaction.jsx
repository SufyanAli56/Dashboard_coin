import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaDownload, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaCcVisa, 
  FaCcMastercard 
} from "react-icons/fa";

const transactions = [
  { id: 1, name: "Bonus Payment", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890135", date: "2024-09-25 11:00 AM", amount: "+$500.00", note: "Annual performance bonus", status: "Completed" },
  { id: 2, name: "Stock Dividends", category: "Investments", account: "Freedom Unlimited Mastercard", transactionId: "4567890132", date: "2024-09-24 09:00 AM", amount: "+$300.00", note: "Quarterly stock dividend", status: "Completed" },
];

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedAccount, setSelectedAccount] = useState("All Accounts");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectTransaction = (id) => {
    setSelectedTransactions((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  const getTransactionIcon = (category) => {
    switch (category) {
      case "Income":
        return <FaMoneyBillWave className="text-black text-xl rounded-full p-1 bg-green-300" />;
      case "Investments":
        return <FaChartLine className="text-black text-xl rounded-full p-1 bg-green-300" />;
      default:
        return null;
    }
  };

  const getAccountIcon = (account) => {
    if (account.includes("Visa")) return <FaCcVisa className="text-xl text-black" />;
    if (account.includes("Mastercard")) return <FaCcMastercard className="text-xl text-black" />;
    return null;
  };

  return (
    <>
      <Header title="Transactions" />
      <Sidebar />
      <div className="p-4 lg:p-6 lg:ml-44 mt-12 min-h-screen text-sm">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
          {/* Search, Dropdowns & Download Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search transaction..."
                className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Category Dropdown */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All Categories</option>
                <option>Income</option>
                <option>Investments</option>
                <option>Utilities</option>
                <option>Food & Dining</option>
              </select>

              {/* Account Dropdown */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option>All Accounts</option>
                <option>Platinum Plus Visa</option>
                <option>Freedom Unlimited Mastercard</option>
              </select>
            </div>

            <div className="flex gap-2">
              {/* Calendar Button */}
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="hidden"
                />
                <button
                  onClick={() => document.querySelector(".react-datepicker__input-container input").click()}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FaCalendarAlt />
                  {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
                </button>
              </div>

              {/* Download Button */}
              <button className="px-3 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 flex items-center gap-2 text-sm">
                <FaDownload />
                Download
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="w-full min-w-[600px] bg-white">
              <thead>
                <tr className="bg-gray-200 text-black font-light text-left">
                  <th className="py-3 px-4"> </th>
                  <th className="py-3 px-4">Transaction Name</th>
                  <th className="py-3 px-4">Account</th>
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4 text-center">Amount</th>
                  <th className="py-3 px-4">Note</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr
                    key={transaction.id}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-all`}
                  >
                    {/* Checkbox */}
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedTransactions.includes(transaction.id)}
                        onChange={() => handleSelectTransaction(transaction.id)}
                      />
                    </td>

                    {/* Name + Category Icon */}
                    <td className="py-3 px-4 flex items-center gap-2">
                      {getTransactionIcon(transaction.category)}
                      <span className="text-blue-500 font-medium">{transaction.name}</span>
                    </td>

                    {/* Account + Logo */}
                    <td className="py-3 px-4 flex items-center gap-2">
                      {getAccountIcon(transaction.account)}
                      <span>{transaction.account}</span>
                    </td>

                    {/* Transaction ID */}
                    <td className="py-3 px-4">{transaction.transactionId}</td>

                    {/* Date & Time */}
                    <td className="py-3 px-4">{transaction.date}</td>

                    {/* Amount */}
                    <td className={`py-3 px-4 font-medium text-center ${transaction.amount.startsWith("-") ? "text-red-500" : "text-green-600"}`}>
                      {transaction.amount}
                    </td>

                    {/* Note */}
                    <td className="py-3 px-4 text-gray-600">{transaction.note}</td>

                    {/* Status Label */}
                    <td className="py-3 px-4">
                      <span className="bg-green-800 text-white text-xs px-3 py-1 rounded-full">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
