import React, { useState } from "react";
import { FaFilter, FaPlus } from "react-icons/fa";
import Invoices_data from "./Invoices_data";

const InvoicesTable = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter button click
  const handleFilterClick = (status) => {
    setFilterStatus(status);
  };

  // Handle add invoice button click
  const handleAddInvoiceClick = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="mt-14 overflow-x-auto p-4">
      {/* Button Group and Actions Container */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Button Group */}
        <div className="flex flex-wrap w-full md:w-auto justify-center md:justify-start border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => handleFilterClick("Paid")}
            className={`px-4 py-2 ${
              filterStatus === "Paid"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white"
            } font-light transition`}
          >
            Paid
          </button>
          <button
            onClick={() => handleFilterClick("Unpaid")}
            className={`px-4 py-2 ${
              filterStatus === "Unpaid"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white"
            } font-light transition border-l border-gray-300`}
          >
            Unpaid
          </button>
          <button
            onClick={() => handleFilterClick("Overdue")}
            className={`px-4 py-2 ${
              filterStatus === "Overdue"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white"
            } font-light transition border-l border-gray-300`}
          >
            Overdue
          </button>
          <button
            onClick={() => handleFilterClick("All")}
            className={`px-4 py-2 ${
              filterStatus === "All"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white"
            } font-light transition border-l border-gray-300`}
          >
            All
          </button>
        </div>

        {/* Search, Filter, and Add Invoice Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-60"
          />

          {/* Filter Button */}
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg flex items-center justify-center gap-2 transition">
            <FaFilter />
            <span className="hidden sm:inline">Filter</span>
          </button>

          {/* Add Invoice Button */}
          <button
            onClick={handleAddInvoiceClick}
            className="px-5 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaPlus />
            <span className="hidden sm:inline">Add Invoice</span>
          </button>
        </div>
      </div>

      {/* Add Invoice Form */}
      {showAddForm && (
        <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold mb-4">Add New Invoice</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Invoice
            </button>
          </form>
        </div>
      )}

      {/* Invoice Data Component */}
      <Invoices_data searchQuery={searchQuery} filterStatus={filterStatus} />
    </div>
  );
};

export default InvoicesTable;