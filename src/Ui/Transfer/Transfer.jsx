import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Transfer_from from "./Transfer_from";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { PiVirtualReality } from "react-icons/pi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Footer from '../../components/Footer/Footer'
const contacts = [
  { id: 1, name: "Abe Reeves", phone: "120987654322" },
  { id: 2, name: "Audrey Murphy", phone: "120987654323" },
  { id: 3, name: "Bob Johnson", phone: "120987654324" },
  { id: 4, name: "Cho Wan Kim", phone: "120987654327" },
  { id: 5, name: "Cynthia Watson", phone: "120987654328" },
  { id: 6, name: "Edna Cornors", phone: "120987654321" },
  { id: 7, name: "Jade Brown", phone: "120987654325" },
  { id: 8, name: "Miles Sanders", phone: "120987654326" },
  { id: 9, name: "Alice Green", phone: "120987654329" },
  { id: 10, name: "David Carter", phone: "120987654330" },
  { id: 11, name: "Emily Stone", phone: "120987654331" },
  { id: 12, name: "Franklin Wells", phone: "120987654332" },
  { id: 13, name: "Grace Lee", phone: "120987654333" },
  { id: 14, name: "Henry Adams", phone: "120987654334" },
  { id: 15, name: "Isabella Clark", phone: "120987654335" },
  { id: 16, name: "Jack Thompson", phone: "120987654336" },
  { id: 17, name: "Karen Lewis", phone: "120987654337" },
  { id: 18, name: "Liam Walker", phone: "120987654338" },
  { id: 19, name: "Mia Martinez", phone: "120987654339" },
  { id: 20, name: "Nathan Scott", phone: "120987654340" },
  { id: 21, name: "Olivia Brown", phone: "120987654341" },
  { id: 22, name: "Patrick Harris", phone: "120987654342" },
  { id: 23, name: "Quinn Foster", phone: "120987654343" },
  { id: 24, name: "Rachel Moore", phone: "120987654344" },
  { id: 25, name: "Samuel Parker", phone: "120987654345" },
  { id: 26, name: "Tina Roberts", phone: "120987654346" },
  { id: 27, name: "Ulysses Grant", phone: "120987654347" },
  { id: 28, name: "Victoria Simmons", phone: "120987654348" },
  { id: 29, name: "William Turner", phone: "120987654349" },
  { id: 30, name: "Xander Knight", phone: "120987654350" },
  { id: 31, name: "Yvonne Adams", phone: "120987654351" },
  { id: 32, name: "Zachary Bell", phone: "120987654352" },
];




const Transfer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return (
    <>
      <Header title="Transfer" />
      <Sidebar />

      <div className="p-2 lg:p-6 lg:ml-20 md:ml-10 mt-12 min-h-screen relative flex flex-col lg:flex-row lg:justify-between">
        
        {/* Left Section - Transfer Form */}
        <div className="w-full lg:w-1/2">
          {/* Transfer Buttons */}
          <div className="w-full max-w-md mx-auto bg-gray-200 h-20 p-2 rounded-md shadow-md flex justify-around items-center mt-6">
            <button className="flex flex-col items-center px-2 py-3 text-gray-800 hover:text-green-600 transition">
              <AiOutlineDollar className="text-2xl mb-1" />
              <span className="text-sm font-medium">Transfer</span>
            </button>

            <div className="h-10 w-px bg-gray-400"></div>

            <button className="flex flex-col items-center px-2 py-3 text-gray-800 hover:text-green-600 transition">
              <MdOutlinePayment className="text-2xl mb-1" />
              <span className="text-sm font-medium">Payment</span>
            </button>

            <div className="h-10 w-px bg-gray-400"></div>

            <button className="flex flex-col items-center px-2 py-3 text-gray-800 hover:text-green-600 transition">
              <PiVirtualReality className="text-2xl mb-1" />
              <span className="text-sm font-medium">Virtual Acc</span>
            </button>

            <div className="h-10 w-px bg-gray-400"></div>

            <button className="flex flex-col items-center px-2 py-3 text-gray-800 hover:text-green-600 transition">
              <FaRegPlusSquare className="text-2xl mb-1" />
              <span className="text-sm font-medium">Top Up</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-4 w-full max-w-md mx-auto flex items-center bg-gray-100 rounded-full shadow-md px-4 py-2">
            <FiSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search account..."
              className="w-full px-2 py-1 outline-none text-gray-800 bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Contact List */}
          <div className="mt-6 w-full max-w-md mx-auto h-174 overflow-y-auto bg-white shadow-lg rounded-lg p-2">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <div key={contact.id} className="flex items-center bg-white p-3 rounded-lg shadow-sm mb-2">
                  <div className="w-10 h-10 bg-green-300 rounded-full flex justify-center items-center text-white font-bold text-lg">
                    {contact.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h2 className="font-semibold text-gray-800">{contact.name}</h2>
                    <p className="text-gray-600 text-sm">{contact.phone}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">No contacts found</p>
            )}
          </div>
        </div>

        {/* Right Section - Transfer_from */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <Transfer_from />
        </div>
      </div>
  <div className="md:ml-12">
  <Footer/>
  </div>
    </>
  );
};

export default Transfer;
