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

const invoiceNames = [
  "Car Rent",
  "House Rent",
  "Electricity Bill",
  "Water Bill",
  "Internet Subscription",
  "Phone Bill",
  "Loan EMI",
];

const generateInvoices = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: invoiceNames[i % invoiceNames.length],
    invoiceId: `INV-281005-${(i + 1).toString().padStart(3, "0")}`,
    amount: `$${(Math.random() * 2000 + 10).toFixed(2)}`,
    date: `2025-02-${(Math.floor(Math.random() * 28) + 1)
      .toString()
      .padStart(2, "0")}`,
    time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
      Math.random() * 60
    )
      .toString()
      .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`,
    status: ["Paid", "Pending", "Overdue"][Math.floor(Math.random() * 3)],
  }));

const InvoicesData = ({ searchQuery, filterStatus }) => {
  const [invoices, setInvoices] = useState(generateInvoices(50));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Filter invoices based on search query and status
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
          {/* Table Head */}
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

          {/* Table Body */}
          <tbody>
            {currentInvoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
              >
                {/* Checkbox */}
                <td className="p-4 text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>

                {/* Invoice Name with Icon */}
                <td className="p-4 flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-xl">
                    {invoiceIcons[invoice.name] || (
                      <FaFileInvoice className="text-gray-500" />
                    )}
                  </span>
                  <p className="font-medium text-gray-800">{invoice.name}</p>
                </td>

                {/* Invoice ID */}
                <td className="p-4 text-gray-700">{invoice.invoiceId}</td>

                {/* Date & Time */}
                <td className="p-4 text-gray-700">
                  <span className="block">{invoice.date}</span>
                  <span className="block text-xs text-gray-500">
                    {invoice.time}
                  </span>
                </td>

                {/* Amount */}
                <td className="p-4 font-semibold text-gray-900">
                  {invoice.amount}
                </td>

                {/* Status Badge */}
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

        {/* Pagination */}
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

      {/* Footer */}
      <div className="lg:-ml-52">
        <Footer />
      </div>
    </>
  );
};

export default InvoicesData;