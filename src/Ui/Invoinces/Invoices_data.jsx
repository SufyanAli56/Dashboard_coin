import React, { useState } from "react";
import {
  FaFileInvoice,
  FaCar,
  FaHome,
  FaBolt,
  FaTint,
  FaWifi,
  FaPhone,
  FaMoneyBill,
} from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const invoiceIcons = {
  "Car Rent": <FaCar className="text-green-600" />,
  "House Rent": <FaHome className="text-blue-600" />,
  "Electricity Bill": <FaBolt className="text-yellow-600" />,
  "Water Bill": <FaTint className="text-blue-400" />,
  "Internet Subscription": <FaWifi className="text-purple-600" />,
  "Phone Bill": <FaPhone className="text-red-600" />,
  "Loan EMI": <FaMoneyBill className="text-gray-600" />,
};

const InvoicesData = ({ searchQuery, filterStatus, invoices }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 15;
  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.invoiceId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusClass = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <div className="mt-4 w-full overflow-x-auto border border-stone-300 rounded-lg shadow-lg p-6 bg-white">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
            <tr className="border-b border-gray-300">
              <th className="p-4 text-center">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-4 text-left">Invoice Name</th>
              <th className="p-4 text-left">Invoice ID</th>
              <th className="p-4 text-left">Date & Time</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
              >
                <td className="p-4 text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>

                <td className="p-4 flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-xl">
                    {invoiceIcons[invoice.name] || (
                      <FaFileInvoice className="text-gray-500" />
                    )}
                  </span>
                  <p className="font-medium text-gray-800">{invoice.name}</p>
                </td>

                <td className="p-4 text-gray-700">{invoice.invoiceId}</td>
                <td className="p-4 text-gray-700">
                  <span className="block">{invoice.date}</span>
                  <span className="block text-xs text-gray-500">
                    {invoice.time}
                  </span>
                </td>
                <td className="p-4 font-semibold text-gray-900">
                  {invoice.amount}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                      invoice.status
                    )}`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          {Array.from(
            { length: Math.ceil(filteredInvoices.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-4 py-2 border rounded-lg transition duration-200 ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
      <div className="lg:-ml-52">
        <Footer />
      </div>
    </>
  );
};

export default InvoicesData;