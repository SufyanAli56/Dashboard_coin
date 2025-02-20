import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaChevronLeft, FaChevronRight, FaDownload , FaCcVisa  } from "react-icons/fa";

const transactions = [
  { id: 1, name: "Bonus Payment", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890135", date: "2024-09-25 11:00 AM", amount: "+$500.00", note: "Annual performance bonus", status: "Completed" },
  { id: 2, name: "Stock Dividends", category: "Investments", account: "Freedom Unlimited Mastercard", transactionId: "4567890132", date: "2024-09-24 09:00 AM", amount: "+$300.00", note: "Quarterly stock dividend", status: "Completed" },
  { id: 3, name: "Comcast Bill Payment", category: "Utilities", account: "Platinum Plus Visa", transactionId: "4567890123", date: "2024-09-24 10:30 AM", amount: "-$150.00", note: "Monthly internet and TV bill", status: "Completed" },
  { id: 4, name: "Freelance Project", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890137", date: "2024-09-23 01:30 PM", amount: "+$1,200.00", note: "Payment for freelance design work", status: "Completed" },
  { id: 5, name: "Amazon Purchase", category: "Food & Dining", account: "Freedom Unlimited Mastercard", transactionId: "4567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Purchased kitchen appliances", status: "Completed" },
  { id: 6, name: "Gym Membership", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly gym fee for health", status: "Pending" },
  { id: 7, name: "Rental Income", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed" },
  { id: 8, name: "State Farm Insurance", category: "Freedom Unlimited Mastercard", account: "Freedom Unlimited Mastercard", transactionId: "5567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Insurance premium", status: "Completed" },
  { id: 9, name: "Verizon Bill", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly phone bill", status: "Pending" },
  { id: 10, name: "Electricity Bill", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed", },
  { id: 11, name: "Bonus Payment", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890135", date: "2024-09-25 11:00 AM", amount: "+$500.00", note: "Annual performance bonus", status: "Completed" },
  { id: 12, name: "Stock Dividends", category: "Investments", account: "Freedom Unlimited Mastercard", transactionId: "4567890132", date: "2024-09-24 09:00 AM", amount: "+$300.00", note: "Quarterly stock dividend", status: "Completed" },
  { id: 13, name: "Comcast Bill Payment", category: "Utilities", account: "Platinum Plus Visa", transactionId: "4567890123", date: "2024-09-24 10:30 AM", amount: "-$150.00", note: "Monthly internet and TV bill", status: "Completed" },
  { id: 14, name: "Freelance Project", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890137", date: "2024-09-23 01:30 PM", amount: "+$1,200.00", note: "Payment for freelance design work", status: "Completed" },
  { id: 15, name: "Amazon Purchase", category: "Food & Dining", account: "Freedom Unlimited Mastercard", transactionId: "4567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Purchased kitchen appliances", status: "Completed" },
  { id: 16, name: "Gym Membership", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly gym fee for health", status: "Pending" },
  { id: 17, name: "Rental Income", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed" },
  { id: 18, name: "State Farm Insurance", category: "Freedom Unlimited Mastercard", account: "Freedom Unlimited Mastercard", transactionId: "5567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Insurance premium", status: "Completed" },
  { id: 19, name: "Verizon Bill", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly phone bill", status: "Pending" },
  { id: 20, name: "Electricity Bill", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed", },
  { id: 21, name: "Bonus Payment", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890135", date: "2024-09-25 11:00 AM", amount: "+$500.00", note: "Annual performance bonus", status: "Completed" },
  { id: 22, name: "Stock Dividends", category: "Investments", account: "Freedom Unlimited Mastercard", transactionId: "4567890132", date: "2024-09-24 09:00 AM", amount: "+$300.00", note: "Quarterly stock dividend", status: "Completed" },
  { id: 23, name: "Comcast Bill Payment", category: "Utilities", account: "Platinum Plus Visa", transactionId: "4567890123", date: "2024-09-24 10:30 AM", amount: "-$150.00", note: "Monthly internet and TV bill", status: "Completed" },
  { id: 24, name: "Freelance Project", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890137", date: "2024-09-23 01:30 PM", amount: "+$1,200.00", note: "Payment for freelance design work", status: "Completed" },
  { id: 25, name: "Amazon Purchase", category: "Food & Dining", account: "Freedom Unlimited Mastercard", transactionId: "4567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Purchased kitchen appliances", status: "Completed" },
  { id: 26, name: "Gym Membership", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly gym fee for health", status: "Pending" },
  { id: 27, name: "Rental Income", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed" },
  { id: 28, name: "State Farm Insurance", category: "Freedom Unlimited Mastercard", account: "Freedom Unlimited Mastercard", transactionId: "5567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Insurance premium", status: "Completed" },
  { id: 29, name: "Verizon Bill", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly phone bill", status: "Pending" },
  { id: 30, name: "Electricity Bill", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed", },
  { id: 31, name: "Bonus Payment", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890135", date: "2024-09-25 11:00 AM", amount: "+$500.00", note: "Annual performance bonus", status: "Completed" },
  { id: 32, name: "Stock Dividends", category: "Investments", account: "Freedom Unlimited Mastercard", transactionId: "4567890132", date: "2024-09-24 09:00 AM", amount: "+$300.00", note: "Quarterly stock dividend", status: "Completed" },
  { id: 33, name: "Comcast Bill Payment", category: "Utilities", account: "Platinum Plus Visa", transactionId: "4567890123", date: "2024-09-24 10:30 AM", amount: "-$150.00", note: "Monthly internet and TV bill", status: "Completed" },
  { id: 34, name: "Freelance Project", category: "Income", account: "Platinum Plus Visa", transactionId: "4567890137", date: "2024-09-23 01:30 PM", amount: "+$1,200.00", note: "Payment for freelance design work", status: "Completed" },
  { id: 35, name: "Amazon Purchase", category: "Food & Dining", account: "Freedom Unlimited Mastercard", transactionId: "4567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Purchased kitchen appliances", status: "Completed" },
  { id: 36, name: "Gym Membership", category: "Healthcare", account: "Platinum Plus Visa", transactionId: "5678901234", date: "2024-09-22 07:00 AM", amount: "-$45.00", note: "Monthly gym fee for health", status: "Pending" },
  { id: 37, name: "Rental Income", category: "Freedom Unlimited Mastercard", account: "Platinum Plus Visa", transactionId: "6678975757", date: "2024-09-22 07:00 AM", amount: "+$2500", note: "Monthly Rent From Property", status: "Completed" },
  { id: 38, name: "State Farm Insurance", category: "Freedom Unlimited Mastercard", account: "Freedom Unlimited Mastercard", transactionId: "5567890142", date: "2024-09-23 03:45 PM", amount: "-$80.95", note: "Insurance premium", status: "Completed" },
];

const itemsPerPage = 10;

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredTransactions.length);
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <Header />
    <Sidebar />
    <div className="p-4 lg:p-6 lg:ml-44 mt-12 bg-gray-100 min-h-screen text-sm">
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
        
        {/* Search & Download Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search transaction..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="w-full sm:w-auto flex justify-end mt-3 sm:mt-0">
            <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg cursor-pointer hover:from-green-700 hover:to-green-800 flex items-center gap-2">
              <FaDownload />
              Download
            </button>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full min-w-[600px] bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white text-left">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Account</th>
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4 text-center whitespace-nowrap">Date & Time</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Note</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-all`}
                >
                  <td className="py-3 px-4">{transaction.name}</td>
                  <td className="py-3 px-4">{transaction.account}</td>
                  <td className="py-3 px-4">{transaction.transactionId}</td>
                  <td className="py-3 px-4 text-center whitespace-nowrap text-sm md:text-base">
                    {transaction.date}
                  </td>
                  <td className={`py-3 px-4 font-medium ${
                    transaction.amount.startsWith("-") ? "text-red-500" : "text-green-600"
                  }`}>
                    {transaction.amount}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{transaction.note}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <span className="text-sm text-gray-700">
            Showing {startIndex + 1} to {endIndex} of {filteredTransactions.length} entries
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              <FaChevronLeft className="mr-2" />
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Next
              <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}