import { FiArrowLeft } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Insights = () => {
  const relatedArticles = [
    {
      title: "Diversifying Your Portfolio",
      category: "Investment Strategies",
    },
    {
      title: "Understanding Mutual Fund Fees",
      category: "Personal Finance",
    },
    {
      title: "The Benefits of Passive Investing",
      category: "Investment Philosophy",
    },
    {
      title: "How to Choose the Right Index Fund",
      category: "Mutual Funds",
    },
  ];

  return (
    <div className="flex min-h-fit">
      <Sidebar />

      <div className="flex-1">
        <Header />

        {/* Main Content */}
        <div className="p-4 md:p-6 lg:ml-44 mt-8">
          {/* Article Header Section */}
          <div className="mt-6 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold text-center text-gray-800">
              The Rise of Index Funds
            </h2>
            <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
              An exploration of how index funds have become a dominant investment
              choice for both novice and experienced investors due to their
              simplicity, lower costs, and competitive returns.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <AiFillCheckCircle className="text-green-500" />
                <span className="ml-1">Alex Read</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span>Mutual Funds</span>
              <span className="hidden md:inline">•</span>
              <span>September 14, 2028</span>
            </div>

            <div className="mt-6 mb-6 bg-gray-300 h-48 md:h-72 rounded-lg"></div>
          </div>
        </div>

        {/* Article Content and Sidebar */}
        <div className="p-4 md:p-6 lg:ml-44 mt-8 flex flex-col lg:flex-row gap-8">
          {/* Left Side - Article Content */}
          <div className="w-full lg:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">The Appeal of Index Funds</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Unlike actively managed funds that attempt to beat the market by selecting a variety of stocks,
              index funds follow a passive investment strategy. They simply track a predefined basket of stocks
              that represent a particular market index, such as the S&P 500 or the NASDAQ. This method offers
              several inherent advantages:
            </p>

            {/* Bullet Points Section */}
            <ul className="list-disc pl-6 text-gray-600 mt-4 text-sm md:text-base">
              <li className="mt-2">
                <strong>Lower Costs:</strong> Index funds typically have lower expense ratios than actively managed funds because they require less management effort. The reduced cost is a critical factor that directly improves investor returns over time.
              </li>
              <li className="mt-2">
                <strong>Transparency:</strong> Investors know exactly which assets are held by an index fund, providing greater transparency compared to the often opaque strategies employed by active fund managers.
              </li>
              <li className="mt-2">
                <strong>Tax Efficiency:</strong> By trading less frequently, index funds generate fewer capital gains distributions, which can be advantageous from a tax perspective.
              </li>
            </ul>

            {/* Performance Comparison */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Performance Comparison</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Numerous studies have shown that index funds consistently outperform a large portion of actively managed funds over long periods. According to the S&P Indices Versus Active (SPIVA) reports, over the last 15 years, more than 80% of active fund managers have failed to beat their respective benchmarks. This has progressively driven investors toward the more predictable performance of index funds.
            </p>

            {/* Investor Behavior */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Investor Behavior and Market Trends</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              The rise of index funds also reflects a broader shift in investor behavior, where there is an increasing preference for investment options that are easy to understand and manage. This trend is coupled with the growing availability of financial information and online trading platforms that encourage a more hands-off approach to investing.
            </p>

            {/* Conclusion */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Conclusion</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              As the financial landscape continues to evolve, the simplicity and effectiveness of index funds make them a compelling choice for those looking to build long-term wealth. Their ability to offer market-matching performance at a fraction of the cost of actively managed funds ensures they will remain a significant part of the investment conversation for years to come.
            </p>

            {/* Quote */}
            <div className="mt-4 p-4 bg-gray-100 border-l-4 border-green-500 italic text-gray-700 text-sm md:text-base">
              "Index funds are the most sensible equity investment for the great majority of investors."
            </div>
          </div>

          {/* Right Side - Sidebar Content */}
          <div className="w-full lg:w-1/4 h-fit bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Introduction</h3>
            <ul className="text-gray-600 text-sm mt-2 space-y-2">
              <li>The Appeal of Index Funds</li>
              <li>Performance Comparison</li>
              <li>Investor Behavior and Market Trends</li>
              <li>Conclusion</li>
            </ul>

            {/* Social Media Share Section */}
            <h3 className="text-lg font-semibold text-gray-800 mt-6">Share</h3>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-blue-600 cursor-pointer" />
              <FaTwitter className="text-blue-400 cursor-pointer" />
              <FaLinkedinIn className="text-blue-700 cursor-pointer" />
              <FaWhatsapp className="text-green-600 cursor-pointer" />
            </div>

            {/* Tags Section */}
            <h3 className="text-lg font-semibold text-gray-800 mt-6">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#IndexFunds</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#MutualFunds</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#Investing</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#PassiveInvesting</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#StocksPlanning</span>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="ml-4 md:ml-44 mt-8 px-4 md:px-6 pb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Contents</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {relatedArticles.map((article, index) => (
              <div key={index} className="w-48 md:w-64 bg-white p-4 rounded-lg shadow-sm flex-shrink-0">
                <div className="h-24 bg-gray-200 rounded-md mb-3"></div>
                <p className="text-xs text-gray-500 font-semibold">{article.category}</p>
                <h3 className="text-sm font-medium text-gray-800 mt-1">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;