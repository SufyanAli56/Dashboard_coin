import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { MdFlight, MdHome } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Footer from '../../components/Footer/Footer'
const SavingsTransactions = () => {
    const activities = [
        {
          day: "Today",
          events: [
            { name: "Jamie Smith", action: "updated account settings", time: "16:05" },
            { name: "Alex Johnson", action: "logged in", time: "13:05" },
            { name: "Morgan Lee", action: "added a new savings goal for vacation", time: "02:05" },
          ],
        },
        {
          day: "Yesterday",
          events: [
            { name: "Taylor Green", action: "reviewed recent transactions", time: "21:05" },
            { name: "Wilson Baptista", action: "transferred funds to emergency fund", time: "09:05" },
          ],
        },
      ];
    
  const savingsPlans = [
    {
      name: "Emergency Fund",
      target: "$20,000",
      color: "bg-green-500",
      icon: <CiWarning />,
    },
    {
      name: "Vacation Fund",
      target: "$10,000",
      color: "bg-blue-500",
      icon: <MdFlight />,
    },
    {
      name: "Home Down Payment",
      target: "$50,000",
      color: "bg-purple-500",
      icon: <MdHome />,
    },
  ];

  const transactions = [
    {
      name: "Electricity Bill",
      category: "Payments",
      date: "2028-03-01",
      time: "04:28:48",
      amount: "$295.81",
      note: "Payment for monthly electricity bill",
      status: "Failed",
    },
    {
      name: "Weekly Groceries",
      category: "Shopping",
      date: "2028-03-04",
      time: "04:28:48",
      amount: "$204.07",
      note: "Groceries shopping at local supermarket",
      status: "Completed",
    },
    {
      name: "Movie Night",
      category: "Entertainment",
      date: "2028-02-27",
      time: "04:28:48",
      amount: "$97.84",
      note: "Tickets for movies and snacks",
      status: "Pending",
    },
    {
      name: "Medical Check-up",
      category: "Healthcare",
      date: "2028-02-07",
      time: "04:28:48",
      amount: "$323.33",
      note: "Routine health check-up and medications",
      status: "Pending",
    },
    {
      name: "Dinner at Italian Restaurant",
      category: "Dining Out",
      date: "2028-02-11",
      time: "04:28:48",
      amount: "$226.25",
      note: "Dining out with family at a local Italian restaurant",
      status: "Pending",
    },
  ];

  return (
    <>
      {/* Daily Limit Card */}
      <div className="w-80 border md:ml-90 md:-mt-170 lg:-ml-1 lg:-mt-144 border-gray-300 rounded-xl p-4 flex flex-col gap-3 shadow-md bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-700">Daily Limit</h2>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold">$2,500.00</h4>
            <p className="text-xs text-gray-500">spent of $20,000.00</p>
          </div>
          <span className="text-sm font-medium text-gray-600">12.5%</span>
          <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "70%" }}
          ></div>
          <div
            className="absolute top-0 left-[70%] h-full bg-black rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>

        <div className="flex justify-between text-xs text-gray-600">
          <span className="font-medium">$2,500 spent</span>
          <span className="font-medium">$20,000 limit</span>
        </div>
      </div>

      {/* Savings Plans Card */}
      <div className="w-80 border mt-4 md:ml-90 lg:-ml-1 border-gray-300 rounded-xl p-4 flex flex-col gap-3 shadow-md bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-black">Saving Plans</h2>
          <p className="text-gray-400 font-extralight text-xl cursor-pointer">
            + Add Plan
          </p>
        </div>

        <p className="text-gray-400 font-extralight text-md">Total Savings</p>
        <h2 className="text-xl font-bold">$84,500</h2>

        {/* Savings Progress Bars */}
        {savingsPlans.map((fund, index) => (
          <div
            key={index}
            className="w-full py-8 p-2 border-[0.5px] border-gray-400 rounded-md  shadow-md bg-white"
          >
            {/* Header with Icon */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 text-gray-700 text-xl h-6 w-6 rounded-md p-1 flex items-center justify-center">
                  {fund.icon}
                </div>
                <h3 className="text-md font-semibold text-gray-700">
                  {fund.name}
                </h3>
              </div>
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </div>

            {/* Progress Bar with Background Labels */}
            <div className="relative w-full rounded-ful h-6">
              {/* Background Labels */}
              <div className="absolute inset-0 flex justify-between px-2 mt-4 items-center text-xs text-gray-600 font-bold">
                <span>$56,000</span>
                <span>50%</span>
                <span className="text-gray-400 font-extralight">
                  {" "}
                  Target: {fund.target}
                </span>
              </div>

              {/* Progress Sections */}
              <div
                className="absolute top-0  left-0 h-2 bg-green-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
              <div
                className="absolute top-0 left-[70%] h-2 bg-black rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-120  lg:ml-84 lg:-mt-100 mt-4  border border-gray-300 rounded-xl shadow-md bg-white p-6 overflow-y-auto h-160">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Transactions</h2>
          <div className="flex items-center border px-3 py-1 rounded-md text-gray-700 cursor-pointer">
            <span>This Month</span> <FaChevronDown className="ml-2" />
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600">
                <th className="py-2 px-3">Transaction Name</th>
                <th className="py-2 px-3">Date & Time</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Note</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b text-sm">
                  <td className="py-3 px-3 font-semibold">
                    {transaction.name}
                    <p className="text-xs text-gray-500">
                      {transaction.category}
                    </p>
                  </td>
                  <td className="py-3 px-3">
                    {transaction.date}
                    <br />
                    <span className="text-xs text-gray-500">
                      {transaction.time}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold">{transaction.amount}</td>
                  <td className="py-3 px-3 text-gray-500">
                    {transaction.note}
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        transaction.status === "Failed"
                          ? "bg-red-100 text-red-600"
                          : transaction.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-80 border lg:ml-216 lg:-mt-80 mt-2 border-gray-300 rounded-xl p-4 shadow-md bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold text-gray-700">Recent Activity</h2>
        <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
      </div>

      {/* Activity List */}
      {activities.map((activity, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-sm font-semibold text-gray-600">{activity.day}</h3>
          <div className="mt-2 space-y-4">
            {activity.events.map((event, idx) => (
              <div key={idx} className="flex items-start gap-3 relative">
                {/* Green Circle */}
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 bg-green-400 rounded-full"></div>
                  {idx !== activity.events.length - 1 && <div className="h-full w-[2px] bg-green-300"></div>}
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">{event.name}</span> {event.action}
                  </p>
                  <p className="text-xs text-gray-500">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="lg:-ml-52">
    <Footer/>
    </div>

    </>
  );
};

export default SavingsTransactions;
