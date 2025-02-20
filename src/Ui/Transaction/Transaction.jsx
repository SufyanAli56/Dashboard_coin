import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaBolt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
     <Header title="Transactions" />

      <Sidebar />
      <div className="p-6 ml-44 mt-12 bg-gray-100 min-h-screen">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search transaction"
              className="px-4 py-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Download
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border">Transaction Name</th>
                  <th className="py-2 px-4 border">Account</th>
                  <th className="py-2 px-4 border">Transaction ID</th>
                  <th className="py-2 px-4 border">Date & Time</th>
                  <th className="py-2 px-4 border">Amount</th>
                  <th className="py-2 px-4 border">Note</th>
                  <th className="py-2 px-4 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="text-center border-b">
                    <td className="py-2 px-4 border">{transaction.name}</td>
                    <td className="py-2 px-4 border">{transaction.account}</td>
                    <td className="py-2 px-4 border">{transaction.transactionId}</td>
                    <td className="py-2 px-4 border">{transaction.date}</td>
                    <td className={`py-2 px-4 border ${transaction.amount.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                      {transaction.amount}
                    </td>
                    <td className="py-2 px-4 border">{transaction.note}</td>
                    <td className="py-2 px-4 border">
                      <span className={`px-3 py-1 rounded-full text-white text-xs ${transaction.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Improved Pagination Controls */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-700">
              Showing {startIndex + 1} to {endIndex} of {filteredTransactions.length} entries
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
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
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
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