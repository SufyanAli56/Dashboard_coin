import React from 'react';
import { FaFilter, FaPlus } from "react-icons/fa";

import Invoices_data from './Invoices_data';

const InvoicesTable = () => {
  return (
    <div className="mt-10 overflow-x-auto ">
      <div className="flex flex-wrap justify-between items-center min-w-max md:min-w-full gap-4">
        {/* Button Group */}
        <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <button className="px-6 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition">
            Paid
          </button>
          <button className="px-6 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition border-l border-gray-300">
            Unpaid
          </button>
          <button className="px-6 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition border-l border-gray-300">
            Overdue
          </button>
          <button className="px-6 py-2 text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-900 font-light transition border-l border-gray-300">
            All
          </button>
        </div>

        {/* Right Side: Search + Filter + Add Invoice */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search invoices..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-40 sm:w-60"
          />

          {/* Filter Button */}
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg flex items-center gap-2 transition">
            <FaFilter />
            <span className="hidden sm:inline">Filter</span>
          </button>

          {/* Add Invoice Button */}
          <button className="px-5 py-2 bg-gray-900  text-white rounded-lg flex items-center gap-2 transition">
            <FaPlus />
            <span className="hidden sm:inline">Add Invoice</span>
          </button>
        </div>
      </div>
    <Invoices_data/>
    </div>
  );
};

export default InvoicesTable;
