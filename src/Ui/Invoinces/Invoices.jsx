import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { MdOutlinePaid, MdPendingActions } from "react-icons/md"; 
import Invoices_table from './Invoices_table';

const Invoices = () => {
  const invoiceData = [
    {
      title: "Total Invoices",
      total: "$138,500",
      lastMonth: "$128,000",
      growth: "8.20%",
      icon: <LiaFileInvoiceSolid className="text-2xl text-gray-600" />,
      buttonIcon: <FaArrowUp className="text-xs" />,
      buttonColor: "bg-green-100 text-green-700 hover:bg-green-200",
      iconBg: "bg-gray-200"
    },
    {
      title: "Paid Invoices",
      total: "$92,300",
      lastMonth: "$85,000",
      growth: "6.50%",
      icon: <MdOutlinePaid className="text-2xl text-blue-600" />,
      buttonIcon: <FaArrowUp className="text-xs" />,
      buttonColor: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      iconBg: "bg-blue-200"
    },
    {
      title: "Unpaid Invoices",
      total: "$76,800",
      lastMonth: "$72,500",
      growth: "-3.10%",
      icon: <MdPendingActions className="text-2xl text-red-600" />,
      buttonIcon: <FaArrowDown className="text-xs" />,
      buttonColor: "bg-red-100 text-red-700 hover:bg-red-200",
      iconBg: "bg-red-200"
    },
  ];

  return (
    <>
      <Header title="Invoices" />
      <Sidebar />
      <div className="mt-14 lg:ml-48 ">
        {/* Responsive Invoice Cards */}
        <div className="overflow-x-auto">
          <div className="flex md:grid md:grid-cols-3 gap-4 min-w-max md:min-w-full">
            {invoiceData.map((invoice, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md hover:shadow-lg rounded-xl p-5 min-w-[280px] md:w-96 transition-all duration-300"
              >
                {/* Growth and Comparison (Moved to Top) */}
                <div className="flex justify-between items-center mb-3">
                  <button className={`${invoice.buttonColor} flex items-center gap-2 px-3 py-1 rounded-full font-medium text-sm shadow-md transition`}>
                    {invoice.buttonIcon}
                    {invoice.growth}
                  </button>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">vs last month</p>
                    <h4 className="text-lg font-semibold text-gray-700">{invoice.lastMonth}</h4>
                  </div>
                </div>

                {/* Invoice Info */}
                <div className="flex items-center gap-4">
                  <div className={`${invoice.iconBg} p-3 rounded-full flex items-center justify-center`}>
                    {invoice.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500 text-sm">{invoice.title}</p>
                    <h2 className="text-2xl font-bold">{invoice.total}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Invoices_table />
      </div>
    </>
  );
};

export default Invoices;
