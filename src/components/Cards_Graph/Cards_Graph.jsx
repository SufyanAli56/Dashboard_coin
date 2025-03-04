import { useState } from "react";
import { FaArrowUp, FaExchangeAlt, FaCreditCard } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaMoneyBillWave, FaTv, FaBriefcase, FaShoppingCart, FaHeartbeat, FaBolt } from "react-icons/fa";

const data = [
    { name: "Mar", income: 4000, expense: 3000 },
    { name: "Apr", income: 5000, expense: 4000 },
    { name: "May", income: 8000, expense: 6000 },
    { name: "Jun", income: 4500, expense: 3500 },
    { name: "Jul", income: 5500, expense: 4200 },
    { name: "Aug", income: 6000, expense: 5000 },
];

const transactions = [
    {
        name: "Book Royalties",
        category: "Income",
        id: "4567890139",
        date: "2028-09-25",
        time: "11:00 AM",
        amount: "+$400.00",
        note: "Royalties from published book",
        status: "Completed",
        icon: <FaMoneyBillWave className="text-zinc-800" />,
        bgColor: "bg-green-200",
    },
    {
        name: "Comcast Payment",
        category: "Utilities",
        id: "4567890123",
        date: "2028-09-24",
        time: "10:30 AM",
        amount: "-$150.00",
        note: "Monthly internet and TV bill",
        status: "Completed",
        icon: <FaTv className="text-zinc-800" />,
        bgColor: "bg-blue-200",
    },
    {
        name: "Consulting Fee",
        category: "Services",
        id: "4567890140",
        date: "2028-09-24",
        time: "02:00 PM",
        amount: "+$1,500.00",
        note: "Payment for consulting services",
        status: "Completed",
        icon: <FaBriefcase className="text-zinc-800" />,
        bgColor: "bg-gray-300",
    },
    {
        name: "Amazon Purchase",
        category: "Food & Dining",
        id: "4567890124",
        date: "2028-09-23",
        time: "03:45 PM",
        amount: "-$80.95",
        note: "Purchased kitchen appliances",
        status: "Completed",
        icon: <FaShoppingCart className="text-zinc-800" />,
        bgColor: "bg-yellow-200",
    },
    {
        name: "Gym Membership",
        category: "Healthcare",
        id: "4567890125",
        date: "2028-09-22",
        time: "07:00 AM",
        amount: "-$45.00",
        note: "Monthly gym fee for health",
        status: "Completed",
        icon: <FaHeartbeat className="text-zinc-800" />,
        bgColor: "bg-red-200",
    },
    {
        name: "Electricity Bill",
        category: "Utilities",
        id: "4567890128",
        date: "2028-09-19",
        time: "08:20 AM",
        amount: "-$70.00",
        note: "Home electricity bill",
        status: "Pending",
        icon: <FaBolt className="text-zinc-800" />,
        bgColor: "bg-orange-200",
    },
];
export default function Cards_Graph() {
    const [selectedPeriod, setSelectedPeriod] = useState("Last 6 Months");

    return (
        <div className="mt-20 ml-2 w-full md:w-[61%] mx-auto px-4 sm:px-6 lg:px-2">
            <div className="flex flex-col md:flex-row gap-4 md:gap-2">
                {/* Card Details */}
                <div className="flex flex-col w-full md:w-auto">
                    <div className="bg-white p-4 rounded-xl border border-gray-300">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <button className="flex flex-col items-center justify-center p-2 bg-green-100 rounded-lg">
                                <FaArrowUp className="text-green-600 text-xl" />
                                <span className="text-xs font-medium mt-1">Top Up</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-2 bg-green-100 rounded-lg">
                                <FaExchangeAlt className="text-green-600 text-xl" />
                                <span className="text-xs font-medium mt-1">Transfer</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-2 bg-green-100 rounded-lg">
                                <FaCreditCard className="text-green-600 text-xl" />
                                <span className="text-xs font-medium mt-1">Payment</span>
                            </button>
                        </div>
                        <div className="text-gray-600 text-sm">
                            <p>Card Number</p>
                            <p className="font-semibold text-sm text-black">5582 5574 8376 5487</p>
                        </div>
                        <div className="flex justify-between text-gray-600 text-sm mt-2">
                            <div className="flex flex-col gap-1">
                                <p>Expiry Date</p>
                                <p className="font-semibold text-black">05/25</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>CVV</p>
                                <p className="font-semibold text-black">411</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>Status</p>
                                <span className="px-2 py-1 bg-teal-900 text-white cursor-pointer rounded-md text-xs">
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl mt-2 shadow-md border border-gray-200 w-full md:w-[267px]">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-lg font-semibold text-gray-800">Spending Limits</p>
                            <button className="text-gray-500">
                                <span className="text-lg">⋮</span>
                            </button>
                        </div>
                        <div className="relative w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-[#1E3A3A] rounded-l-full" style={{ width: "30%" }}></div>
                            <div className="absolute top-0 left-[30%] h-full bg-[#B5E6A4] rounded-r-full" style={{ width: "45%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-700 mt-2">
                            <span>
                                <span className="font-bold text-black">$4,500.00</span> spent of $10,000.00
                            </span>
                            <span className="font-bold text-black">45%</span>
                        </div>
                    </div>
                </div>

                {/* Cashflow Graph */}
                <div className="w-full border border-gray-300 p-4 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-14">
                        <h2 className="text-lg font-semibold text-gray-700">Cashflow</h2>
                        <Menu as="div" className="relative">
                            <Menu.Button className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
                                {selectedPeriod} <ChevronDownIcon className="h-4 w-4 ml-1" />
                            </Menu.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg text-sm">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? "bg-gray-100" : ""} block px-4 py-2 w-full text-left`}
                                                onClick={() => setSelectedPeriod("Last 6 Months")}
                                            >
                                                Last 6 Months
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? "bg-gray-100" : ""} block px-4 py-2 w-full text-left`}
                                                onClick={() => setSelectedPeriod("This Year")}
                                            >
                                                This Year
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#A0AEC0" />
                            <YAxis stroke="#A0AEC0" />
                            <Tooltip />
                            <Bar dataKey="income" fill="#B5E6A4" />
                            <Bar dataKey="expense" fill="#1E3A8A" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full max-w-5xl mt-6">
                {/* Header */}
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Transactions</h2>
                    <button className="bg-gray-100 px-4 py-2 rounded-md text-sm flex items-center gap-2">
                        This Month <span className="text-gray-500">▼</span>
                    </button>
                </div>

                {/* Table */}

              <div className="overflow-x-auto scrollbar-hidden">
                    <table className="w-full border-collapse text-sm">
                        {/* Table Head */}
                        <thead className="bg-stone-100 text-gray-600">
                            <tr>
                                <th className="p-3 text-center"><input type="checkbox" /></th>
                                <th className="p-3 min-w-[200px]">Transaction Name</th>
                                <th className="p-3 min-w-[120px]">ID</th>
                                <th className="p-3 min-w-[150px]">Date & Time</th>
                                <th className="p-3 min-w-[100px]">Amount</th>
                                <th className="p-3 min-w-[200px]">Note</th>
                                <th className="p-3 min-w-[120px]">Status</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index} className="border-b border-stone-300 hover:bg-gray-50">
                                    <td className="p-3 text-center"><input type="checkbox" /></td>

                                    {/* Transaction Name with Icon */}
                                    <td className="p-3 flex items-center gap-3">
                                        <span className={`w-10 h-10 flex items-center justify-center rounded-full bg-lime-200`}>
                                            {transaction.icon}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-gray-900">{transaction.name}</p>
                                            <p className="text-xs text-gray-500">{transaction.category}</p>
                                        </div>
                                    </td>

                                    {/* Other Columns */}
                                    <td className="p-3 text-gray-700">{transaction.id}</td>
                                    <td className="p-3 text-gray-700">
                                        <span className="block">{transaction.date}</span>
                                        <span className="block text-xs text-gray-500">{transaction.time}</span>
                                    </td>
                                    <td className={`p-3 font-semibold ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                                        {transaction.amount}
                                    </td>
                                    <td className="p-3 text-gray-700">{transaction.note}</td>

                                    {/* Status Badge */}
                                    <td className="p-3">
                                        <span className={`px-3 py-1 text-xs rounded-full ${transaction.status === "Completed" ? "bg-teal-900 text-white" : "bg-lime-200 text-gray-900"}`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}