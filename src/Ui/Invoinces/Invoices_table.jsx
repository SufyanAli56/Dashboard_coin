import React, { useState, useEffect } from "react";
import { FaFilter, FaPlus } from "react-icons/fa";
import Invoices_data from "./Invoices_data";

const generateInvoices = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: [
      "Car Rent",
      "House Rent",
      "Electricity Bill",
      "Water Bill",
      "Internet Subscription",
      "Phone Bill",
      "Loan EMI",
    ][i % 7],
    invoiceId: `INV-281005-${(i + 1).toString().padStart(3, "0")}`,
    amount: `$${(Math.random() * 2000 + 10).toFixed(2)}`,
    date: `2025-02-${(Math.floor(Math.random() * 28) + 1)
      .toString()
      .padStart(2, "0")}`,
    time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`,
    status: ["Paid", "Pending", "Overdue"][Math.floor(Math.random() * 3)],
  }));

const InvoicesTable = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    const defaultInvoices = generateInvoices(50);
    setInvoices(defaultInvoices);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterClick = (status) => {
    setFilterStatus(status);
  };

  const handleAddInvoiceClick = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddInvoiceSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newInvoice = {
      id: invoices.length + 1,
      name: formData.get("invoiceName"),
      invoiceId: `INV-${Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0")}`,
      amount: `$${(Math.random() * 2000 + 10).toFixed(2)}`,
      date: formData.get("invoiceDate"),
      time: new Date().toLocaleTimeString(),
      status: formData.get("invoiceStatus"),
    };

    setInvoices((prevInvoices) => [newInvoice, ...prevInvoices]);

    setShowAddForm(false);
  };

  return (
    <div className="mt-14 overflow-x-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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

        <div className="flex flex-col sm:flex-row  items-stretch sm:items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-60"
          />
          
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg flex items-center justify-center gap-2 transition">
            <FaFilter />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button
            onClick={handleAddInvoiceClick}
            className="px-5 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaPlus />
            <span className="hidden sm:inline">Add Invoice</span>
          </button>
        </div>
      </div>
      {showAddForm && (
        <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold mb-4">Add New Invoice</h3>
          <form className="space-y-4" onSubmit={handleAddInvoiceSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice Name
              </label>
              <input
                type="text"
                name="invoiceName"
                placeholder="Enter Invoice Name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="invoiceDate"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="invoiceStatus"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
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
      <Invoices_data
        searchQuery={searchQuery}
        filterStatus={filterStatus}
        invoices={invoices}
      />
    </div>
  );
};

export default InvoicesTable;