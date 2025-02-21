import React, { useState } from "react";
import { FaFilter, FaSortAmountDown, FaSearch } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

// Promos Data
const promosData = [
  {
    title: "Exclusive Credit Card Offer",
    description:
      "Apply for our new Platinum Rewards Card and enjoy a 0% introductory APR for the first 18 months.",
    valid: "Valid from: Oct 1, 2028",
  },
  {
    title: "Referral Bonus Boost",
    description:
      "Refer a friend to join Connect and both receive a $50 bonus when they sign up and make their first transaction.",
    valid: "Valid through: Nov 24, 2028",
  },
  {
    title: "Investment Account Bonus",
    description:
      "Open an investment account with us and get a $500 bonus when you deposit $5,000 within the first month.",
    valid: "Start Date: Oct 10, 2028",
  },
  {
    title: "Mortgage Refinancing Deal",
    description:
      "Refinance your mortgage with us and get $500 off closing costs plus an exclusive low rate.",
    valid: "Offer ends: Dec 14, 2028",
  },
  {
    title: "High-Yield Savings Account",
    description:
      "Open a high-yield savings account today and earn an APY of 2.5% on your deposits, one of the highest rates available.",
    valid: "Starting Oct 12, 2028",
  },
  {
    title: "Travel Rewards Special",
    description:
      "Book your next trip through our portal and earn triple points on all travel-related purchases.",
    valid: "Promotion period: May 1 - Nov 20, 2028",
  },
  {
    title: "Auto Loan Discount",
    description:
      "Get a 0.5% rate reduction on auto loans when you apply this month.",
    valid: "End Date: Oct 31, 2028",
  },
  {
    title: "Cash Back Shopping Event",
    description:
      "Earn 5% cash back on all purchases at select retailers this weekend only.",
    valid: "Event Date: Oct 9-7, 2028",
  },
  {
    title: "Retirement Planning Bonus",
    description:
      "Schedule a free consultation for retirement planning and receive a personalized investment plan.",
    valid: "Available Until: Dec 15, 2028",
  },
  {
    title: "Insurance Discount Offer",
    description:
      "Bundle home and auto insurance and save up to 20% on your premiums.",
    valid: "Valid from: Nov 15, 2028",
  },
  {
    title: "Tax Preparation Services",
    description:
      "Use our professional tax filing services and get 15% off your tax preparation fees.",
    valid: "Service Available: Jan 1 - Apr 15, 2029",
  },
  {
    title: "Fitness Membership Rebate",
    description:
      "Join a participating gym and get up to $300 back as part of our wellness incentive program.",
    valid: "Rebate Valid: Jan 1 - Mar 31, 2029",
  },
];

const Promos = () => {
  const [search, setSearch] = useState("");

  // Filter promos based on search input
  const filteredPromos = promosData.filter((promo) =>
    promo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-white min-h-screen overflow-auto">
        {/* Header */}
        <Header />

        {/* Search & Controls */}
        <div className="flex flex-col sm:flex-row mt-16 sm:ml-44 justify-between items-center mb-6 gap-4 sm:gap-0">
          {/* Left Side: Search Bar + Filter/Sort Buttons */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-2/3 gap-4 sm:gap-3">
            {/* Search Bar (Full Width on Mobile, Fixed Width on Desktop) */}
            <div className="relative w-full sm:w-1/3">
              <input
                type="text"
                placeholder="Search promo"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 pl-10 w-full"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Filter & Sort Buttons (Stacked on Mobile, Inline on Desktop) */}
            <div className="flex gap-2 sm:gap-3">
              <button className="flex items-center gap-2 border border-gray-300 p-2 rounded-lg">
                <FaFilter /> Filter
              </button>
              <button className="flex items-center gap-2 border border-gray-300 p-2 rounded-lg">
                <FaSortAmountDown /> Sort By
              </button>
            </div>
          </div>

          {/* Add Promo Button (Full Width on Mobile, Auto Width on Desktop) */}
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Add Promo
          </button>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid sm:ml-44 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromos.map((promo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-300 w-full"
            >
              {/* Placeholder Image */}
              <div className="bg-gray-200 h-40 w-full rounded-lg mb-6"></div>

              {/* Card Title */}
              <h2 className="font-semibold text-xl mb-3">{promo.title}</h2>

              {/* Card Description */}
              <p className="text-gray-600 text-base mb-4">
                {promo.description.length > 120
                  ? promo.description.substring(0, 120) + "..."
                  : promo.description}
              </p>

              {/* Valid Date */}
              <p className="text-gray-500 text-sm">
                <span className="font-semibold">{promo.valid.split(":")[0]}:</span>{" "}
                {promo.valid.split(":")[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promos;