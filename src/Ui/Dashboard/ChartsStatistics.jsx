import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { MdFlight, MdHome } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const ChartsStatistics = () => {
  const activities = [
    {
      day: "Today",
      events: [
        {
          name: "Jamie Smith",
          action: "updated account settings",
          time: "16:05",
        },
        { name: "Alex Johnson", action: "logged in", time: "13:05" },
        {
          name: "Morgan Lee",
          action: "added a new savings goal for vacation",
          time: "02:05",
        },
      ],
    },
    {
      day: "Yesterday",
      events: [
        {
          name: "Taylor Green",
          action: "reviewed recent transactions",
          time: "21:05",
        },
        {
          name: "Wilson Baptista",
          action: "transferred funds to emergency fund",
          time: "09:05",
        },
      ],
    },
  ];

  const savingsPlans = [
    {
      name: "Emergency Fund",
      target: "$20,000",
      color: "bg-green-500",
      icon: <CiWarning />,
      progress: 60, // Progress percentage
    },
    {
      name: "Vacation Fund",
      target: "$10,000",
      color: "bg-blue-500",
      icon: <MdFlight />,
      progress: 30, // Progress percentage
    },
    {
      name: "Home Down Payment",
      target: "$50,000",
      color: "bg-purple-500",
      icon: <MdHome />,
      progress: 45, // Progress percentage
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
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Recent Transactions Card */}
        <div className="lg:w-2/3 w-full border border-gray-300 rounded-xl shadow-md bg-white p-6 overflow-y-auto h-160">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Transactions</h2>
            <div className="flex items-center border px-3 py-1 rounded-md text-gray-700 cursor-pointer">
              <span>This Month</span> <FaChevronDown className="ml-2" />
            </div>
          </div>

          {/* Transactions Table */}
          <div className="">
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
                    <td className="py-3 px-3 font-bold">
                      {transaction.amount}
                    </td>
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

        {/* Right Column */}
        <div className="lg:w-1/3 w-full flex flex-col md:flex-row lg:flex-col gap-4">
          {/* Savings Plans Card */}
          <div className="md:w-1/2 lg:w-full border border-gray-200 rounded-md bg-white p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Savings Plans</h2>
              <p className="font-light text-xl text-gray-400">+ Add Plans</p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3">
              {savingsPlans.map((plan, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-2 rounded-full ${plan.color} text-white`}
                      >
                        {plan.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{plan.name}</p>
                        <p className="text-xs text-gray-500">
                          Target: {plan.target}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">{plan.progress}%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${plan.color} h-2 rounded-full`}
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Card */}
          <div className="md:w-1/2 lg:w-full border border-gray-200 rounded-md bg-white p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Activities</h2>
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </div>

            {/* Activities List */}
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    {activity.day}
                  </p>
                  <div className="space-y-3">
                    {activity.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                        <div>
                          <p className="text-sm font-semibold">{event.name}</p>
                          <p className="text-xs text-gray-500">
                            {event.action} · {event.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    <div className="lg:-ml-44">
    <Footer />
    </div>
    </>
  );
};

export default ChartsStatistics;
