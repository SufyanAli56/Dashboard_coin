import React, { useState } from "react";
import { FaEllipsisH, FaArrowRight, FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom";

const featuredArticles = [
  {
    title: "Navigating Market Volatility in 2028",
    category: "Investment Strategies",
    date: "Sep 25, 2028",
    author: "Emily Watson",
  },
  {
    title: "The Future of Cryptocurrency Investments",
    category: "Cryptocurrency",
    date: "Sep 20, 2028",
    author: "Valentine Roze",
  },
];

const recentArticles = [
  {
    title: "The Impact of Global Events on Stocks",
    category: "Stock Market",
    date: "Sep 22",
    author: "Jessica Green",
  },
  {
    title: "Green Investing: Eco-Friendly Stocks",
    category: "Sustainable Investing",
    date: "Sep 18",
    author: "Alex Reed",
  },
  {
    title: "Retirement Planning: How Much Is Enough?",
    category: "Retirement",
    date: "Sep 10",
    author: "Linda Fisher",
  },
];

const trendingTags = [
  { tag: "#StockMarket", category: "Stock Market", articles: "120 articles" },
  { tag: "#CryptoInvesting", category: "Cryptocurrency", articles: "80 articles" },
  { tag: "#TaxSavings", category: "Tax Planning", articles: "50 articles" },
  { tag: "#RealEstate", category: "Real Estate Investment", articles: "90 articles" },
  { tag: "#RetirementPlanning", category: "Retirement", articles: "60 articles" },
  { tag: "#GreenInvesting", category: "Sustainable Investing", articles: "40 articles" },
];

const insights = [
  {
    title: "Maximizing Returns from Real Estate",
    description: "Learn how to identify lucrative opportunities in the ever-evolving estate sector.",
    category: "Real Estate Investment",
    date: "Aug 15, 2028",
    author: "Sarah Lee",
  },
  {
    title: "Effective Tax Strategies for Investors",
    description: "Practical advice on optimizing your investment returns through tax planning.",
    category: "Tax Planning",
    date: "Aug 22, 2028",
    author: "Mark Thompson",
  },
];

const recommendations = [
  {
    category: "Mutual Funds",
    date: "Sep 23, 2028",
    title: "The Rise Of Index Funds",
    icon: <FaArrowRight />,
    link: "/The_Rise",
  },
  {
    category: "Personal Finance",
    date: "Sep 19, 2028",
    title: "Finance Management Tips",
    icon: <FaHome />,
    link: "/Finance",
  },
  {
    category: "Financial",
    date: "Sep 5, 2028",
    title: "Innovations in Banking ",
    icon: <FaUser />,
    link: "/Innovations",
  },
];

const authors = [
  {
    name: "Emily Watson",
    followers: "5K Followers",
  },
  {
    name: "Valentine Roze",
    followers: "4.5K Followers",
  },
  {
    name: "Sarah Lee",
    followers: "4K Followers",
  },
  {
    name: "Mark Thompson",
    followers: "3.5K Followers",
  },
  {
    name: "Jessica Green",
    followers: "3K Followers",
  },
  {
    name: "Elice Green",
    followers: "5K Followers",
  },
];

const Insights_Main = () => {
  const [showMoreTags, setShowMoreTags] = useState(false);
  const [showMoreAuthors, setShowMoreAuthors] = useState(false);

  const handleShowMoreTags = () => {
    setShowMoreTags(!showMoreTags);
  };

  const handleShowMoreAuthors = () => {
    setShowMoreAuthors(!showMoreAuthors);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-4 lg:ml-44 lg:mr-2 md:p-6 md:ml-10 mt-14">
          {/* Filter Buttons */}
          <div
            className="flex overflow-x-auto gap-2 pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                /* Hide scrollbar for Chrome, Safari, and Edge */
                ::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {[
              "All",
              "Stock Market",
              "Cryptocurrency",
              "Tax Planning",
              "Real Estate Investment",
              "Retirement",
              "Sustainable Investing",
              "Investment Strategies",
            ].map((filter, index) => (
              <button
                key={index}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition ${index === 0 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column (Featured Articles & Popular Insights) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Featured Articles Section */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Featured Articles</h2>
                  <FaEllipsisH className="text-gray-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {featuredArticles.map((article, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                      <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
                      <p className="text-xs text-green-600 font-medium">
                        {article.category} • {article.date}
                      </p>
                      <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
                      <div className="flex items-center mt-3">
                        <span className="h-6 w-6 bg-lime-300 rounded-full mr-2"></span>
                        <p className="text-sm font-medium text-gray-900">{article.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Insights Section */}
              <div>
                <div className="rounded-xl">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Insights</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    {insights.map((insight, index) => (
                      <div
                        key={index}
                        className="p-4 bg-stone-100 border border-gray-200 rounded-xl flex flex-col sm:flex-row gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-full sm:w-28 h-28 bg-gray-300 rounded-lg flex-shrink-0"></div>

                        <div className="flex-1 w-full">
                          <p className="text-xs text-green-900 font-medium">
                            {insight.category} • {insight.date}
                          </p>
                          <h3 className="text-lg font-bold text-gray-900 mt-1 truncate">
                            {insight.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {insight.description}
                          </p>

                          <div className="flex items-center mt-3">
                            <span className="h-5 w-5 bg-lime-300 rounded-full mr-2"></span>
                            <p className="text-sm font-medium text-gray-900">{insight.author}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Section */}
              <div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {recommendations.map((item, index) => (
                      <Link to={item.link} key={index} className="flex flex-col space-y-2 group">
                        <div className="w-full h-24 bg-gray-300 rounded-lg transition-transform group-hover:scale-105"></div>

                        <p className="text-xs text-gray-500 font-medium mt-1">
                          {item.category} • {item.date}
                        </p>

                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-600">
                          {item.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Recent Articles & Trending Tags & Top Authors) */}
            <div className="w-full lg:w-auto">
              {/* Recent Articles Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recent Articles</h2>
                  <FaEllipsisH className="text-gray-500" />
                </div>
                <div className="space-y-4">
                  {recentArticles.map((article, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-gray-300 rounded-lg"></div>
                      <div>
                        <p className="text-xs text-green-600 font-medium">{article.author}</p>
                        <h3 className="text-sm font-semibold">{article.title}</h3>
                        <p className="text-xs text-gray-500">{article.category} • {article.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              {/* Trending Tags Section */}
              <div className="flex flex-col gap-6 md:flex-row md:gap-3 lg:flex-col">
                {/* Trending Tags Section */}
                <div className="border border-gray-200 p-6 rounded-lg bg-white md:flex-1 md:min-w-[330px] ">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Trending Tags</h2>
                    <FaEllipsisH className="text-gray-500 text-base" />
                  </div>
                  <div className="space-y-3">
                    {trendingTags.slice(0, showMoreTags ? trendingTags.length : 5).map((tag, index) => (
                      <div key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
                        <p className="text-sm font-semibold text-gray-900">{tag.tag}</p>
                        <p className="text-xs text-gray-500">{tag.category} • {tag.articles}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-4 w-full text-sm font-medium text-gray-700 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
                    onClick={handleShowMoreTags}
                  >
                    {showMoreTags ? "Show Less" : "Show More"}
                  </button>
                </div>

                {/* Top Authors Section */}
                <div className="p-6 border border-gray-200 bg-white rounded-lg md:flex-1 md:min-w-[330px]">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Authors</h2>

                  <div className="space-y-3">
                    {authors.slice(0, showMoreAuthors ? authors.length : 5).map((author, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-lime-300 rounded-full mr-3"></div>
                          <div>
                            <p className="text-base font-bold text-gray-900">{author.name}</p>
                            <p className="text-xs text-gray-500">{author.followers}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-4 w-full text-sm font-medium text-gray-700 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
                    onClick={handleShowMoreAuthors}
                  >
                    {showMoreAuthors ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Insights_Main;