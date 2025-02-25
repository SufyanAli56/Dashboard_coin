import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Inbox = () => {
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [starred, setStarred] = useState({});
  const emails = [
    {
      id: 1,
      sender: "Bank Alerts",
      subject: "Account Security Update",
      date: "Feb 18",
      time: "9:15 AM",
      content: `Dear Customer,
  
      We take your security seriously, and as part of our commitment to protecting your account, we have recently updated our security policies.
      Your account security is our top priority, and we have implemented a series of new measures to prevent unauthorized access, detect fraud, and ensure that your personal data remains safe.
  
      - Enable two-factor authentication (2FA) for an added layer of security.
      - Update your password regularly and avoid using easily guessable passwords.
      - Be cautious when clicking links in emails or messages that appear suspicious.
      - Review your recent login activity in your account settings.
  
      If you notice any suspicious activity, please contact our support team immediately.
  
      Thank you for banking with us.
  
      Best regards,
      The Security Team`,
    },
    {
      id: 2,
      sender: "Finance Team",
      subject: "Successful Transfer Completed",
      date: "Feb 18",
      time: "10:30 AM",
      content: `Hello,
  
      Your recent transfer has been successfully processed. Below are the details of your transaction:
      
      - Amount Transferred: $5,000  
      - Recipient Name: John Doe  
      - Account Number: **** **** 1234  
      - Transaction ID: TRX987654321  
      - Date: February 18, 2025  
      - Time: 10:30 AM`,
    },
    {
      id: 3,
      sender: "Support",
      subject: "Scheduled Maintenance Reminder",
      date: "Feb 17",
      time: "3:00 PM",
      content: `Dear Valued Customer,
  
      We would like to inform you about a scheduled maintenance update to improve our systems.
  
      - Date: February 20, 2025  
      - Time: 2:00 AM – 6:00 AM (UTC)  
      - Services Affected: Online banking, mobile app transactions, and account statements
  
      Thank you for your patience.
  
      Best Regards,  
      Customer Support Team`,
    },
    {
      id: 4,
      sender: "HR Department",
      subject: "Job Interview Scheduled",
      date: "Feb 16",
      time: "1:00 PM",
      content: `Dear Candidate,
  
      We are pleased to inform you that your interview has been scheduled.
  
      - Date: February 22, 2025  
      - Time: 10:00 AM  
      - Location: Virtual Meeting
  
      Please confirm your availability.
  
      Best,  
      HR Team`,
    },
    {
      id: 5,
      sender: "E-commerce",
      subject: "Order Shipped: Tracking Available",
      date: "Feb 15",
      time: "4:00 PM",
      content: `Hello,
  
      Your order #45678 has been shipped! You can track it using:
  
      - Carrier: FedEx  
      - Tracking Number: 123456789  
      - Estimated Delivery: February 20, 2025
  
      Thank you for shopping with us!`,
    },
    {
      id: 6,
      sender: "Customer Service",
      subject: "Feedback Request",
      date: "Feb 14",
      time: "12:00 PM",
      content: `Hello,
  
      We would love to hear your feedback about our service.
  
      - How was your experience?
        - [ ] Excellent  
        - [ ] Good  
        - [ ] Needs Improvement  
  
      Click below to take a quick 2-minute survey.
  
      Thank you for your time!`,
    },
    {
      id: 7,
      sender: "Investment Insights",
      subject: "Market Trends Report",
      date: "Feb 13",
      time: "10:00 AM",
      content: `Dear Investor,
  
      Stay ahead of the market with our latest investment insights:
  
      - AI and cloud computing stocks have risen by 15%.  
      - Bitcoin has hit a new high of $60,000.  
      - Renewable energy stocks are surging.
  
      Read our full report for details.
  
      Regards,  
      Investment Insights Team`,
    },
    {
      id: 8,
      sender: "IT Department",
      subject: "Password Expiration Notice",
      date: "Feb 12",
      time: "9:30 AM",
      content: `Your company email password is set to expire in 3 days. Please update your password to avoid login issues.`,
    },
    {
      id: 9,
      sender: "Finance Team",
      subject: "Salary Credited Successfully",
      date: "Feb 11",
      time: "8:00 AM",
      content: `Hello,
  
      Your salary for February 2025 has been successfully credited to your bank account.
  
      - Amount: $4,500  
      - Transaction ID: SAL987654321  
  
      Thank you.`,
    },
    {
      id: 10,
      sender: "Subscription Services",
      subject: "Renewal Reminder",
      date: "Feb 10",
      time: "6:00 PM",
      content: `Your subscription is set to renew on February 25, 2025. If you wish to make changes, please update your payment method before the renewal date.`,
    },
    {
      id: 11,
      sender: "Travel Agency",
      subject: "Flight Booking Confirmation",
      date: "Feb 9",
      time: "3:45 PM",
      content: `Your flight to New York has been booked successfully.
  
      - Flight Number: NY123  
      - Date: March 5, 2025  
      - Departure: 8:00 AM  
  
      Safe travels!`,
    },
    {
      id: 12,
      sender: "Social Media",
      subject: "Password Reset Request",
      date: "Feb 8",
      time: "2:00 PM",
      content: `We received a request to reset your password. If this was not you, please secure your account immediately.`,
    },
    {
      id: 13,
      sender: "Marketing Team",
      subject: "Exclusive Offer for You!",
      date: "Feb 7",
      time: "5:30 PM",
      content: `Hello,
  
      As a valued customer, we're giving you an exclusive 20% discount on your next purchase. Use code **EXCLUSIVE20** at checkout.
  
      Offer valid until March 1, 2025.`,
    },
    {
      id: 14,
      sender: "Security Team",
      subject: "Unusual Login Attempt Detected",
      date: "Feb 6",
      time: "7:00 AM",
      content: `We've noticed a login attempt from an unknown device. If this was not you, change your password immediately.`,
    },
    {
      id: 15,
      sender: "Newsletter",
      subject: "Monthly Updates & Insights",
      date: "Feb 5",
      time: "10:00 AM",
      content: `Check out the latest news, updates, and insights from our team.
  
      - New Features Released
      - Tips for Better Security
      - Upcoming Events
  
      Stay informed with our monthly newsletter!`,
    },
  ];
  
  
  
 

  const toggleStar = (id) => {
    setStarred((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const pieData = [
    { name: "Rent & Living", value: 2300 },
    { name: "Healthcare", value: 850 },
    { name: "Transport", value: 655 },
    { name: "Groceries", value: 450 },
  ];
  
  const COLORS = ["#537671", "#a8f27d", "#E8E9E9", "#CBCCCC"]; // Fixed colors

  const barData = [
    { name: "Limit", value: 4500 },
    { name: "Spent", value: 3600 },
  ];

  return (
    <>
      <Header title="Transactions" />
      <Sidebar />

      <div className="p-4 lg:p-6 lg:ml-44 mt-12 min-h-screen text-sm flex flex-col lg:flex-row">
        {/* Left Sidebar for Email List */}
        <div className="lg:w-1/3 bg-white p-4 border-r w-full">
          <div className="relative mb-4">
            <CiSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search Inbox..."
              className="pl-10 pr-3 py-2 w-full border rounded-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {emails.map((email) => (
            <div
              key={email.id}
              className={`p-3 rounded-md flex justify-between items-center cursor-pointer ${
                selectedMessage?.id === email.id
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedMessage(email)}
            >
              <div>
                <h4 className="font-semibold">{email.sender}</h4>
                <p className="text-sm text-gray-600">{email.subject}</p>
                <p className="text-xs text-gray-400">{email.time}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStar(email.id);
                }}
              >
                {starred[email.id] ? (
                  <AiFillStar className="text-yellow-500" />
                ) : (
                  <AiOutlineStar className="text-gray-400" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Email Content Message Box */}
        <div className="lg:w-2/3 p-6 w-full">
          {selectedMessage ? (
            <>
              <button
                className="flex items-center text-gray-600 mb-4"
                onClick={() => setSelectedMessage(null)}
              >
                <IoMdArrowBack className="mr-2" /> Back
              </button>

              <h2 className="text-xl font-bold">{selectedMessage.subject}</h2>
              <p className="text-gray-500 text-sm">
                {selectedMessage.sender} • {selectedMessage.date}
              </p>
              <div className="mt-4 border-t pt-4 text-gray-700">
                {selectedMessage.content || "Email details go here..."}
              </div>

              {/* Budget Analytics */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Budget Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pie Chart */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-center font-semibold mb-2">
                      Budget Categories
                    </h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {pieData.map((entry, index) => (
                            <Cell
                              key={index}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Bar Chart */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-center font-semibold mb-2">
                      Spending Limits
                    </h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={barData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#a8f27d" />
                      </BarChart>
                    </ResponsiveContainer>
                    <p className="text-center mt-2 text-sm text-gray-500">
                      92% of your budget used
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-sm text-center mt-10">
              Select a message to view details
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inbox;
