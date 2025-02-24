import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";

const Inbox = () => {
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [starred, setStarred] = useState({});
  const [selectedMessages, setSelectedMessages] = useState([]);

  const messages = [
    { 
      id: 1, 
      sender: "Account Security Update", 
      subject: "Your password was successfully updated.", 
      content: "We've successfully updated your password. Please ensure that your credentials are secure. If you didn't request this change, contact support immediately.", 
      time: "10:30 AM", 
      date: "Feb 20, 2025" 
    },
    { 
      id: 2, 
      sender: "New Feature: Advanced Budgeting Tools", 
      subject: "New Feature: Advanced Budgeting Tools", 
      content: "We're excited to announce the launch of our new Advanced Budgeting Tools! Designed to give you greater control over your finances, these tools come packed with features that allow for more detailed budgeting, customized spending alerts, and interactive financial health assessments.", 
      time: "12:45 PM", 
      date: "Feb 18, 2025" 
    },
    { 
      id: 3, 
      sender: "Investment Alert: Tech Stocks Surge", 
      subject: "Check out the latest surge in tech stocks today!", 
      content: "Hello Andrew! The market is buzzing with excitement as tech stocks experience a remarkable surge. Analysts suggest this could be the beginning of a longer trend. Read our detailed report for more insights.", 
      time: "12:45 PM", 
      date: "Feb 18, 2025" 
    },
  ];

  const filteredMessages = messages.filter(
    (msg) =>
      msg.sender.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase()) ||
      msg.content.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStar = (id) => {
    setStarred((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelection = (id) => {
    setSelectedMessages((prev) =>
      prev.includes(id) ? prev.filter((msgId) => msgId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Header title="Inbox" />
      <Sidebar />

      <div className="p-4 lg:p-6 lg:ml-44 mt-12 min-h-screen flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        
        {/* Left Side: Search & Messages List */}
        <div className="w-full lg:w-1/3">
          
          {/* Search Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-grow">
              <CiSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search Inbox..."
                className="px-10 py-2 border rounded-full border-gray-300 bg-gray-200 w-full text-sm focus:ring-2 focus:ring-green-300 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <HiOutlineAdjustmentsVertical className="text-gray-600 text-lg" />
            </button>
          </div>

          {/* Messages List */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[70vh] overflow-y-auto">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-center justify-between border-b last:border-none py-3 px-2 cursor-pointer hover:bg-gray-100 rounded-lg ${
                    selectedMessage?.id === msg.id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedMessage(msg)}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedMessages.includes(msg.id)}
                    onChange={(e) => { e.stopPropagation(); toggleSelection(msg.id); }}
                  />

                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm lg:text-base">{msg.sender}</h3>
                    <p className="text-gray-600 text-xs lg:text-sm">{msg.subject}</p>
                    <p className="text-gray-400 text-xs">{msg.time}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 text-xs">{msg.date}</p>
                    <button onClick={(e) => { e.stopPropagation(); toggleStar(msg.id); }}>
                      {starred[msg.id] ? (
                        <AiFillStar className="text-yellow-500 text-lg" />
                      ) : (
                        <AiOutlineStar className="text-gray-400 text-lg hover:text-yellow-500 transition" />
                      )}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No messages found.</p>
            )}
          </div>
        </div>

        {/* Right Side: Message Details */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md h-[70vh] overflow-y-auto">
          {selectedMessage ? (
            <>
              <h2 className="text-xl font-semibold">{selectedMessage.subject}</h2>
              <p className="text-gray-500 text-sm mb-2">From: {selectedMessage.sender}</p>
              <div className="border-t pt-4">
                <p className="text-gray-700 text-justify leading-relaxed">
                  {selectedMessage.content}
                </p>
              </div>
              <p className="text-gray-400 text-xs mt-4">Received at {selectedMessage.time}</p>
              <p className="text-gray-400 text-xs">Date: {selectedMessage.date}</p>
            </>
          ) : (
            <p className="text-gray-500 text-sm text-center mt-10">
              Select a message to view details
            </p>
          )}
        </div>
    
      </div>

      {/* Footer */}
      <div className="p-4 lg:ml-44">
        <Footer />
      </div>
    </>
  );
};

export default Inbox;
