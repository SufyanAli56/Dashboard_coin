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
      id: 1, sender: "Bank Alerts", subject: "Account Security Update", date: "Feb 18", time: "9:15 AM", 
      content: `Dear Customer,
  
      We take your security seriously, and as part of our commitment to protecting your account, we have recently updated our security policies. 
      Your account security is our top priority, and we have implemented a series of new measures to prevent unauthorized access, detect fraud, and ensure that your personal data remains safe. 
      To keep your account secure, we highly recommend that you:
      
      - Enable two-factor authentication (2FA) for an added layer of security.
      - Update your password regularly and avoid using easily guessable passwords.
      - Be cautious when clicking links in emails or messages that appear suspicious.
      - Review your recent login activity in your account settings.
      
      If you notice any suspicious activity, please contact our support team immediately. 
  
      Thank you for banking with us.
  
      Best regards,  
      The Security Team`
    },
    { 
      id: 2, sender: "Finance Team", subject: "Successful Transfer Completed", date: "Feb 18", time: "10:30 AM",
      content: `Hello,
  
      We are pleased to inform you that your recent transfer has been successfully processed. Below are the details of your transaction:
      
      - **Amount Transferred:** $5,000  
      - **Recipient Name:** John Doe  
      - **Account Number:** **** **** 1234  
      - **Transaction ID:** TRX987654321  
      - **Date:** February 18, 2025  
      - **Time:** 10:30 AM  
  
      If you did not authorize this transaction or notice any discrepancies, please reach out to our support team immediately. Our fraud detection system is constantly monitoring for unusual activities to ensure your account remains safe.  
  
      Thank you for choosing our services.
  
      Best,  
      The Finance Team`
    },
    { 
      id: 3, sender: "Support", subject: "Scheduled Maintenance Reminder", date: "Feb 17", time: "3:00 PM", 
      content: `Dear Valued Customer,
  
      We would like to inform you about a scheduled maintenance update to improve our systems and ensure a better experience for you.  
  
      **Maintenance Details:**  
      - **Date:** February 20, 2025  
      - **Time:** 2:00 AM – 6:00 AM (UTC)  
      - **Services Affected:** Online banking, mobile app transactions, and account statements  
  
      During this time, access to certain services may be temporarily unavailable. We apologize for any inconvenience and appreciate your patience while we work to enhance our system’s reliability and performance.  
  
      If you have any urgent transactions to complete, we encourage you to do so before the maintenance period.  
  
      Thank you for your understanding.  
  
      Best Regards,  
      Customer Support Team`
    },
    { 
      id: 4, sender: "The Career Team", subject: "New Feature: Advanced Budgeting Tools", date: "Feb 16", time: "12:45 PM",
      content: `Hello,
  
      We’re excited to announce the launch of our new Advanced Budgeting Tools! Designed to give you greater control over your finances, this feature helps you track your income, categorize expenses, and set financial goals with ease.
  
      **Key Features Include:**
      
      - **Smart Budget Categories:** Your spending is now automatically sorted into categories such as Rent, Groceries, Transportation, and Entertainment, helping you analyze where your money goes.
      - **Spending Limits:** Set monthly or weekly spending limits for each category, ensuring you never overspend.
      - **Finance Score:** Get a real-time finance score based on your spending habits, allowing you to make informed financial decisions.
  
      Our new tool also provides **visual analytics**, including **pie charts** and **bar graphs**, so you can easily see your spending distribution.  
      Start using the **Advanced Budgeting Tools** today and take control of your financial future!
  
      Best,  
      The Career Team`
    },
    { 
      id: 5, sender: "Investment Insights", subject: "Market Trends Report", date: "Feb 15", time: "4:30 PM", 
      content: `Dear Investor,
  
      Staying ahead of the market is crucial, and we are pleased to provide you with our latest investment trends and insights.
  
      **Key Market Highlights:**
      
      - **Technology Sector Boom:** AI and cloud computing stocks have seen a 15% increase over the last quarter.
      - **Cryptocurrency Developments:** Bitcoin has reached a new high of $60,000, while Ethereum continues its upward trajectory.
      - **Renewable Energy Investments:** Governments worldwide are allocating more funds towards green energy, making solar and wind stocks a lucrative opportunity.
  
      **Expert Recommendations:**  
      - Diversify your portfolio to mitigate risks.  
      - Keep an eye on inflation trends that might affect long-term investments.  
      - Consider investing in ETFs for a balanced and diversified approach.  
  
      For a **detailed analysis**, please refer to our full report attached.  
  
      Regards,  
      Investment Insights Team`
    },
    { 
      id: 6, sender: "E-commerce", subject: "Order Shipped: Tracking Available", date: "Feb 9", time: "8:00 AM", 
      content: `Hello,
  
      Your order **#12345** has been shipped! You can now track your package in real time.
  
      **Shipping Details:**  
      - **Carrier:** FedEx  
      - **Tracking Number:** 987654321  
      - **Estimated Delivery:** February 12, 2025  
  
      **What to Expect:**  
      - You will receive another email when your package is out for delivery.  
      - If you are unavailable during delivery, you can schedule a re-delivery.  
  
      Thank you for shopping with us!
  
      Regards,  
      E-commerce Team`
    },
    { 
      id: 7, sender: "Customer Service", subject: "Feedback Request", date: "Feb 7", time: "12:00 PM",
      content: `Hello,
  
      We hope you had a great experience with our service! We’d love to hear your thoughts.
  
      **How was your experience?**  
      - [ ] Excellent  
      - [ ] Good  
      - [ ] Needs Improvement  
  
      Your feedback helps us improve and provide better service in the future.  
  
      Click below to take a quick 2-minute survey:  
      [Give Feedback]  
  
      Thank you for your time!
  
      Best,  
      Customer Service Team`
    }
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
  const COLORS = ["#4CAF50", "#2196F3", "#FF9800", "#E91E63"];

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
                        <Bar dataKey="value" fill="#4CAF50" />
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
