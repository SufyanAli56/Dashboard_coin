import React from "react";
import { FaFilter, FaPlus } from "react-icons/fa";
import Invoices_data from "./Invoices_data";

const InvoicesTable = () => {
  return (
    <div className="mt-14 overflow-x-auto p-4">
      {/* Button Group and Actions Container */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        {/* Button Group */}
        <div className="flex flex-wrap w-full md:w-auto justify-center md:justify-start   border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <button className="px-4 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition">
            Paid
          </button>
          <button className="px-4 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition border-l border-gray-300">
            Unpaid
          </button>
          <button className="px-4 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition border-l border-gray-300">
            Overdue
          </button>
          <button className="px-4 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition border-l border-gray-300">
            All
          </button>
        </div>

        {/* Search, Filter, and Add Invoice Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search invoices..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-60"
          />

          {/* Filter Button */}
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg flex items-center justify-center gap-2 transition">
            <FaFilter />
            <span className="hidden sm:inline">Filter</span>
          </button>

          {/* Add Invoice Button */}
          <button className="px-5 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 transition">
            <FaPlus />
            <span className="hidden sm:inline">Add Invoice</span>
          </button>
        </div>
      </div>

      {/* Invoice Data Component */}
      <Invoices_data />
    </div>
  );
};

export default InvoicesTable;
