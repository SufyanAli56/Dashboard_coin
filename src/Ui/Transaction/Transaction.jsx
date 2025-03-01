import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaMoneyBillWave, FaChartLine, FaCcVisa, FaCcMastercard } from "react-icons/fa";


const generateTransactions = (num) => {
  const categories = ["Income", "Investments", "Utilities", "Food & Dining", "Healthcare"];
  const accounts = ["Platinum Plus Visa", "Freedom Unlimited Mastercard"];
  const names = ["Bonus Payment", "Stock Dividends", "Bill Payment", "Freelance Work", "Amazon Purchase", "Gym Membership"];
  const statuses = ["Completed", "Pending"];

  return Array.from({ length: num }, (_, index) => {
    const amount = (Math.random() * 2000 - 500).toFixed(2);
    return {
      id: index + 1,
      name: names[Math.floor(Math.random() * names.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      account: accounts[Math.floor(Math.random() * accounts.length)],
      transactionId: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
      date: `2024-09-${Math.floor(Math.random() * 30 + 1)} ${Math.floor(Math.random() * 12 + 1)}:00 AM`,
      amount: amount,
      note: "Generated Transaction",
      status: statuses[Math.floor(Math.random() * statuses.length)],
    };
  });
};

const transactions = generateTransactions(100);
const ITEMS_PER_PAGE = 15;

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSelectTransaction = (id) => {
    setSelectedTransactions((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  const getTransactionIcon = (category) => {
    switch (category) {
      case "Income":
        return <FaMoneyBillWave className="text-black text-xl bg-green-300 rounded-full p-1" />;
      case "Investments":
        return <FaChartLine className="text-black text-xl bg-green-300 rounded-full p-1" />;
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
        <div className="flex justify-between items-center mb-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Download</button>
          <input type="date" className="border px-3 py-2 rounded" />
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Search transaction..."
            className="px-3 py-2 border rounded-full border-gray-300 bg-gray-200 w-full sm:w-1/3 text-sm focus:ring-2 focus:ring-green-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="overflow-x-auto rounded-lg shadow-sm mt-4">
            <table className="w-full min-w-[600px] bg-white">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="py-3 px-4">Select</th>
                  <th className="py-3 px-4">Transaction Name</th>
                  <th className="py-3 px-4">Account</th>
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction, index) => (
                  <tr key={transaction.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedTransactions.includes(transaction.id)}
                        onChange={() => handleSelectTransaction(transaction.id)}
                      />
                    </td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      {getTransactionIcon(transaction.category)}
                      <span className="text-blue-500 font-medium">{transaction.name}</span>
                    </td>
                    <td className="py-3 px-4">{getAccountIcon(transaction.account)} {transaction.account}</td>
                    <td className="py-3 px-4">{transaction.transactionId}</td>
                    <td className="py-3 px-4">{transaction.date}</td>
                    <td className={`py-3 px-4 font-medium text-center ${parseFloat(transaction.amount) >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {parseFloat(transaction.amount) >= 0 ? "+" : "-"}${Math.abs(transaction.amount)}
                    </td>
                    <td className={`py-3 px-4 font-medium ${transaction.status === "Completed" ? "text-green-600" : "text-red-600"}`}>{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-green-500 text-white" : "bg-gray-300"}`}>{i + 1}</button>
            ))}
          </div>
        </div>
        
      </div>

    </>
  );
}