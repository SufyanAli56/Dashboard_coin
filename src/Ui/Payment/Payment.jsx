import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  FaPlusCircle,
  FaShoppingCart,
  FaTv,
  FaShieldAlt,
  FaHospital,
  FaTooth,
  FaEye,
  FaPills,
  FaAmazon,
  FaShopify,
  FaEbay,
  FaShoppingBag,
  FaCar,
  FaHome,
  FaPlane,
  FaHeartbeat,
  FaWifi,
  FaBroadcastTower,
  FaSignal,
  FaNetworkWired,
  FaSatellite,
  FaSatelliteDish,
  FaExchangeAlt,
  FaCreditCard,
  FaWallet,
  FaPlus,
  FaUmbrella,
  FaGraduationCap,
} from "react-icons/fa";

import { FiSettings } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const PaymentS = () => {
  const [openSection, setOpenSection] = useState("Internet & Cable TV");
  const [selectedItem, setSelectedItem] = useState("Comcast Xfinity");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
    setSelectedItem(""); // Reset selected item when changing section
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const payments = [
    {
      icon: <FaUmbrella className="text-lg text-green-700" />,
      name: "Geico",
      amount: "$450",
      id: "12477582",
      status: "Successful",
    },
    {
      icon: <FaTv className="text-lg text-green-700" />,
      name: "DISH",
      amount: "$890",
      id: "88002134",
      status: "Successful",
    },
    {
      icon: <FaGraduationCap className="text-lg text-green-700" />,
      name: "Coursera",
      amount: "$299",
      id: "229938095",
      status: "Successful",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="flex flex-col md:flex-row md:ml-10 gap-2 p-4 lg:ml-44 mt-16 ">
          {/* Left Sidebar */}
          <div className="bg-white p-4 h-fit border border-gray-300 rounded-lg shadow-lg w-full md:w-[280px] lg:w-72">
            <div className="bg-green-50 p-3 rounded-lg flex justify-between items-center">
              {[
                { name: "Transfer", icon: <FaExchangeAlt /> },
                { name: "Payment", icon: <FaCreditCard /> },
                { name: "Virtual Acc", icon: <FaWallet /> },
                { name: "Top Up", icon: <FaPlus /> },
              ].map((action) => (
                <div key={action.name} className="flex flex-col items-center text-green-900 text-xs">
                  <span className="text-lg">{action.icon}</span>
                  <span>{action.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center mt-3 gap-2">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full">
                <input
                  type="text"
                  placeholder="Search providers"
                  className="w-full bg-transparent text-sm outline-none text-gray-600 placeholder-gray-400"
                />
                <FiSearch className="text-gray-500" />
              </div>
              <div className="bg-green-100 p-2 rounded-full cursor-pointer">
                <FiSettings className="text-green-700" />
              </div>
            </div>

            {/* Categories */}
            <div className="mt-3 space-y-2">
              {/* Healthcare */}
              <button
                className={`flex items-center w-full p-2 rounded-md ${openSection === "Healthcare" ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => toggleSection("Healthcare")}
              >
                <FaPlusCircle className="text-green-600 mr-2" /> Healthcare
              </button>
              {openSection === "Healthcare" && (
                <ul className="ml-6 mt-2 space-y-1 border-l pl-3 border-green-300 text-sm">
                  {[
                    { name: "General Hospitals", icon: <FaHospital /> },
                    { name: "Dental Clinics", icon: <FaTooth /> },
                    { name: "Eye Care Centers", icon: <FaEye /> },
                    { name: "Pharmacies", icon: <FaPills /> },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${selectedItem === item.name ? "bg-green-200" : "text-gray-700 hover:bg-gray-200"
                        }`}
                      onClick={() => handleItemClick(item.name)}
                    >
                      <span className="text-green-600">{item.icon}</span> {item.name}
                    </li>
                  ))}
                </ul>
              )}

              {/* E-commerce */}
              <button
                className={`flex items-center w-full p-2 rounded-md ${openSection === "E-commerce" ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => toggleSection("E-commerce")}
              >
                <FaShoppingCart className="text-green-600 mr-2" /> E-commerce
              </button>
              {openSection === "E-commerce" && (
                <ul className="ml-6 mt-2 space-y-1 border-l pl-3 border-green-300 text-sm">
                  {[
                    { name: "Amazon", icon: <FaAmazon /> },
                    { name: "eBay", icon: <FaEbay /> },
                    { name: "Alibaba", icon: <FaShoppingBag /> },
                    { name: "Shopify", icon: <FaShopify /> },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${selectedItem === item.name ? "bg-green-200" : "text-gray-700 hover:bg-gray-200"
                        }`}
                      onClick={() => handleItemClick(item.name)}
                    >
                      <span className="text-green-600">{item.icon}</span> {item.name}
                    </li>
                  ))}
                </ul>
              )}

              {/* Internet & Cable TV */}
              <button
                className={`flex items-center w-full p-2 rounded-md ${openSection === "Internet & Cable TV" ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => toggleSection("Internet & Cable TV")}
              >
                <FaTv className="text-green-600 mr-2" /> Internet & Cable TV
              </button>
              {openSection === "Internet & Cable TV" && (
                <ul className="ml-6 mt-2 space-y-1 border-l pl-3 border-green-300 text-sm">
                  {[
                    { name: "Comcast Xfinity", icon: <FaTv /> },
                    { name: "AT&T Internet and Cable", icon: <FaWifi /> },
                    { name: "Spectrum Cable Services", icon: <FaBroadcastTower /> },
                    { name: "Verizon Fios", icon: <FaSignal /> },
                    { name: "Cox Communications", icon: <FaNetworkWired /> },
                    { name: "DirecTV", icon: <FaSatellite /> },
                    { name: "DISH Network", icon: <FaSatelliteDish /> },
                    { name: "Frontier Communications", icon: <FaBroadcastTower /> },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${selectedItem === item.name ? "bg-green-200" : "text-gray-700 hover:bg-gray-200"
                        }`}
                      onClick={() => handleItemClick(item.name)}
                    >
                      <span className="text-green-600">{item.icon}</span> {item.name}
                    </li>
                  ))}
                </ul>
              )}

              {/* Insurance */}
              <button
                className={`flex items-center w-full p-2 rounded-md ${openSection === "Insurance" ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => toggleSection("Insurance")}
              >
                <FaShieldAlt className="text-green-600 mr-2" /> Insurance
              </button>
              {openSection === "Insurance" && (
                <ul className="ml-6 mt-2 space-y-1 border-l pl-3 border-green-300 text-sm">
                  {[
                    { name: "Health Insurance", icon: <FaHeartbeat /> },
                    { name: "Car Insurance", icon: <FaCar /> },
                    { name: "Home Insurance", icon: <FaHome /> },
                    { name: "Travel Insurance", icon: <FaPlane /> },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${selectedItem === item.name ? "bg-green-200" : "text-gray-700 hover:bg-gray-200"
                        }`}
                      onClick={() => handleItemClick(item.name)}
                    >
                      <span className="text-green-600">{item.icon}</span> {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex border border-gray-300 p-3  rounded-lg  flex-col gap-3">
            {/* Recent Payments */}
            <div className="p-3 border border-gray-300 md:w-[370px] lg:w-full rounded-lg">
              <div className="flex justify-between  items-center mb-4">
                <h2 className="text-lg font-semibold">Recent Payments</h2>
                <button className="text-green-600 text-sm">Show More</button>
              </div>

              <div className="flex gap-6 overflow-x-auto md:flex-col  lg:flex-row">
                {payments.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-gray-300 p-4 rounded-lg shadow-sm  w-full "
                  >
                    <div className="bg-lime-200 rounded-full p-3">{payment.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{payment.name}</div>
                      <div className="text-sm text-gray-500">{payment.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{payment.amount}</div>
                      <div className="text-xs text-green-600">{payment.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Make a Payment */}
            <div className="w-full border border-gray-300 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Make a Payment</h2>
                <IoIosMore className="text-gray-500 text-xl cursor-pointer" />
              </div>

              <div className="bg-stone-100 rounded-2xl">
                <div className="p-4 rounded-lg">
                  <h3 className="text-gray-700 font-bold mb-3">Payment Account</h3>
                  <div className="flex flex-col md:flex-col md:w-fit lg:flex-row lg:w-full gap-4">
                    <div className="flex-1 bg-white p-4 rounded-lg shadow flex items-center">
                      <div className="bg-green-900 text-white p-3 rounded-full">
                        <FaCreditCard size={20} />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-600 text-sm">Freedom Unlimited Mastercard</p>
                        <p className="text-xl font-semibold">$539,000</p>
                        <p className="text-gray-500 text-sm">5582 5574 8376 5487</p>
                      </div>
                    </div>

                    <div className="flex-1 bg-white p-4 rounded-lg shadow flex items-center">
                      <div className="bg-green-100 text-green-900 px-3 py-1 rounded">
                        VISA
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-600 text-sm">Platinum Plus Visa</p>
                        <p className="text-xl font-semibold">$415,000</p>
                        <p className="text-gray-500 text-sm">4532 8723 0045 9947</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg mt-4">
                  <h3 className="text-gray-700 mb-3">Service Provider</h3>
                  <div className="flex flex-col md:flex-col md:w-[305px] lg:w-full lg:flex-row  gap-4">
                    <div className="flex-1 flex items-center bg-white p-3 rounded-lg shadow">
                      <div className="bg-green-200 p-2 rounded-full">
                        <FaTv className="text-green-700" />
                      </div>
                      <select className="ml-3 flex-1 bg-transparent focus:outline-none text-gray-700">
                        <option>Internet & TV</option>
                      </select>
                    </div>

                    <div className="flex-1 flex items-center bg-white p-3 rounded-lg shadow">
                      <div className="bg-gray-300 p-2 rounded-full">
                        <FaTv className="text-green-700" />
                      </div>
                      <select className="w-full bg-transparent focus:outline-none text-gray-700">
                        <option>Comcast Xfinity</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 flex flex-col">
                  <label className="text-gray-600">Virtual Account</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 md:w-[305px] lg:w-full  bg-white outline-lime-200 rounded-lg"
                    value="9876543210"
                    readOnly
                  />
                </div>

                <div className="mt-4 p-4 flex flex-col">
                  <label className="text-gray-600">Amount</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 md:w-[305px] lg:w-full bg-white outline-lime-200 rounded-lg"
                    value="$150.00"
                    readOnly
                  />
                </div>

                <div className="flex p-3 justify-end gap-6 mt-6">
                  <button className="text-gray-600 cursor-pointer">Cancel</button>
                  <button className="bg-green-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow text-sm sm:text-base">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div> 
            </div> 
        </div>
      </div>
    </div>
  );
};

export default PaymentS;