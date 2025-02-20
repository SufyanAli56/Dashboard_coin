import React, { useState } from 'react';
import { FaFileInvoice, FaCar, FaHome, FaBolt, FaTint, FaWifi, FaPhone, FaMoneyBill } from 'react-icons/fa';

const invoiceIcons = {
  "Car Rent": <FaCar className="text-green-600 bg-green-200 p-1 rounded-full" />, 
  "House Rent": <FaHome className="text-blue-600 bg-blue-200 p-1 rounded-full" />, 
  "Electricity Bill": <FaBolt className="text-yellow-600 bg-yellow-200 p-1 rounded-full" />, 
  "Water Bill": <FaTint className="text-blue-400 bg-blue-100 p-1 rounded-full" />, 
  "Internet Subscription": <FaWifi className="text-purple-600 bg-purple-200 p-1 rounded-full" />, 
  "Phone Bill": <FaPhone className="text-red-600 bg-red-200 p-1 rounded-full" />, 
  "Loan EMI": <FaMoneyBill className="text-gray-600 bg-gray-200 p-1 rounded-full" />, 
};

const invoiceNames = ["Car Rent", "House Rent", "Electricity Bill", "Water Bill", "Internet Subscription", "Phone Bill", "Loan EMI"];

const generateInvoices = (count) => 
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: invoiceNames[i % invoiceNames.length],
    invoiceId: `INV-281005-${(i + 1).toString().padStart(3, '0')}`,
    amount: `$${(Math.random() * 2000 + 10).toFixed(2)}`,
    date: `2025-02-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')} ${Math.floor(Math.random() * 12) + 1}:$${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    status: ["Paid", "Pending", "Overdue"][Math.floor(Math.random() * 3)]
  }));

const InvoicesData = () => {
  const [invoices] = useState(generateInvoices(50));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = invoices.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const getStatusClass = (status) => {
    switch (status) {
      case "Paid": return "bg-green-600 text-white";
      case "Pending": return "bg-yellow-500 text-black";
      case "Overdue": return "bg-red-500 text-white";
      default: return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="mt-4 w-full overflow-x-auto border rounded-lg shadow-lg p-4 bg-white">
      <div className="min-w-max w-full h-12 bg-gray-200 rounded-lg flex items-center px-4 font-medium text-gray-800 shadow-sm">
        <span className="w-1/6">Select</span>
        <span className="w-1/4">Invoice Name</span>
        <span className="w-1/5">Invoice ID</span>
        <span className="w-1/5">Total Amount</span>
        <span className="w-1/5">Date & Time</span>
        <span className="w-1/5">Status</span>
      </div>

      {currentInvoices.map((invoice) => (
        <div 
          key={invoice.id} 
          className="min-w-max w-full h-14 flex items-center px-4 border-b font-light hover:bg-gray-100 transition duration-200"
        >
          <input type="checkbox" className="mr-4" />
          <span className="w-1/4 flex items-center gap-3 font-medium">{invoiceIcons[invoice.name] || <FaFileInvoice className="text-gray-500 bg-green-200 p-2 rounded-full" />} {invoice.name}</span>
          <span className="w-1/5 text-gray-700 font-medium">{invoice.invoiceId}</span>
          <span className="w-1/5 text-gray-800 font-semibold">{invoice.amount}</span>
          <span className="w-1/5 text-gray-600">{invoice.date}</span>
          <button className={`py-1 px-4 rounded-full text-sm font-semibold ${getStatusClass(invoice.status)}`}>{invoice.status}</button>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(invoices.length / itemsPerPage) }, (_, i) => (
          <button 
            key={i + 1} 
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 border rounded-lg ${currentPage === i + 1 ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InvoicesData;