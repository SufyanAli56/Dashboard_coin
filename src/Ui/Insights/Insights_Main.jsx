import { FaSearch } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineEllipsis } from "react-icons/ai";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Insights_Main = () => {
  // Dummy data for articles
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
      author: "Alex Read",
    },
    {
      title: "Retirement Planning: How Much Is Enough?",
      category: "Retirement",
      date: "Sep 10",
      author: "Linda Fisher",
    },
  ];

  const popularInsights = [
    {
      title: "Maximizing Returns from Real Estate",
      category: "Real Estate Investment",
      date: "Aug 15, 2028",
      author: "Sarah Lee",
    },
    {
      title: "Effective Tax Strategies for Investors",
      category: "Tax Planning",
      date: "Aug 22, 2028",
      author: "Mark Thompson",
    },
  ];

  const trendingTags = [
    { tag: "#StockMarket", category: "Stock Market", count: "120 articles" },
    { tag: "#CryptoInvesting", category: "Cryptocurrency", count: "80 articles" },
    { tag: "#TaxSavings", category: "Tax Planning", count: "50 articles" },
    { tag: "#RealEstate", category: "Real Estate Investment", count: "90 articles" },
    { tag: "#RetirementPlanning", category: "Retirement", count: "60 articles" },
    { tag: "#GreenInvesting", category: "Sustainable Investing", count: "40 articles" },
  ];

  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="flex-1">
        <Header />

        {/* Main Content */}
        <div className="p-4 mt-14 ml-44 md:p-6">
        

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {["All", "Stock Market", "Cryptocurrency", "Tax Planning", "Real Estate Investment", "Retirement", "Sustainable Investing", "Investment Strategies"].map((filter, index) => (
              <button key={index} className={`px-4 py-2 rounded-full text-sm font-semibold ${index === 0 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                {filter}
              </button>
            ))}
          </div>

          {/* Featured Articles */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">Featured Articles</h2>
          <div className="flex flex-wrap gap-6 mt-3">
            {featuredArticles.map((article, index) => (
              <div key={index} className="w-full md:w-[48%] bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="h-40 bg-gray-300 rounded-lg mb-3"></div>
                <p className="text-xs text-gray-500">{article.category} • {article.date}</p>
                <h3 className="text-lg font-medium text-gray-800 mt-1">{article.title}</h3>
                <p className="text-gray-600 text-sm mt-1">Explore expert strategies for safeguarding your portfolio against sudden market shifts.</p>
                <p className="text-sm text-gray-700 mt-2">{article.author}</p>
              </div>
            ))}
          </div>

          {/* Recent Articles */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">Recent Articles</h2>
          <div className="flex flex-col gap-4 mt-3">
            {recentArticles.map((article, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500">{article.category} • {article.date}</p>
                  <h3 className="text-sm font-medium text-gray-800">{article.title}</h3>
                  <p className="text-sm text-gray-700">{article.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Insights */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">Popular Insights</h2>
          <div className="flex flex-wrap gap-6 mt-3">
            {popularInsights.map((article, index) => (
              <div key={index} className="w-full md:w-[48%] bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="h-24 bg-gray-300 rounded-md mb-3"></div>
                <p className="text-xs text-gray-500">{article.category} • {article.date}</p>
                <h3 className="text-sm font-medium text-gray-800 mt-1">{article.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{article.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[20%] p-4 mt-20 h-fit bg-white shadow-md hidden lg:block">
        <h3 className="text-lg font-semibold text-gray-800">Trending Tags</h3>
        <ul className="mt-3">
          {trendingTags.map((tag, index) => (
            <li key={index} className="py-2 border-b">
              <p className="text-sm font-medium text-gray-700">{tag.tag}</p>
              <p className="text-xs text-gray-500">{tag.category} • {tag.count}</p>
            </li>
          ))}
        </ul>
        <button className="mt-3 text-sm text-green-600">Show More</button>

        <h3 className="text-lg font-semibold text-gray-800 mt-6">Top Author</h3>
        <p className="text-sm text-gray-700 mt-2">Emily Watson</p>
        <p className="text-xs text-gray-500">4.5K Followers</p>
      </div>
    </div>
  );
};

export default Insights_Main;
