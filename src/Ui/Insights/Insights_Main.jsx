import { FaEllipsisH } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

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
    description: "Learn how to identify lucrative opportunities in the ever-evolving real estate sector.",
    category: "Real Estate Investment",
    date: "Aug 15, 2028",
    author: "Sarah Lee",
  },
  {
    title: "Effective Tax Strategies for Investors",
    description: "Practical advice on optimizing your investment returns through strategic tax planning.",
    category: "Tax Planning",
    date: "Aug 22, 2028",
    author: "Mark Thompson",
  },
];

const Insights_Main = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar (hidden on small screens, visible on larger screens) */}
      <Sidebar />

      <div className="flex-1">
        <Header />

        {/* Main Content */}
        <div className="p-4 lg:ml-44 lg:mr-2 md:p-6 mt-14">
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
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition ${
                  index === 0 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column (Featured Articles and Popular Insights) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
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
                      <p className="text-xs text-green-600 font-medium">{article.category} • {article.date}</p>
                      <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{article.author}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Insights Section */}
              <div>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold text-gray-900">Popular Insights</h2>
    <span className="text-gray-400 text-xl cursor-pointer">...</span>
  </div>

  {/* Insights Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {insights.map((insight, index) => (
      <div
        key={index}
        className="p-5 bg-green-50 border border-green-200 rounded-2xl shadow-sm flex gap-4 items-start"
      >
        {/* Image Placeholder */}
        <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-300 rounded-lg"></div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-xs text-green-700 font-semibold">
            {insight.category} • {insight.date}
          </p>
          <h3 className="text-base font-extrabold text-gray-900 leading-tight">
            {insight.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            {insight.description}
          </p>

          {/* Author */}
          <div className="flex items-center mt-3">
            <span className="h-3.5 w-3.5 bg-green-600 rounded-full mr-2"></span>
            <p className="text-sm font-bold text-gray-900">{insight.author}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


            </div>

            {/* Right Column (Recent Articles & Trending Tags) */}
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
              <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-base font-semibold">Trending Tags</h2>
                  <FaEllipsisH className="text-gray-500 text-sm" />
                </div>
                <div className="space-y-4">
                  {trendingTags.map((tag, index) => (
                    <div key={index} className="border-b pb-2 last:border-b-0">
                      <p className="text-sm font-semibold text-gray-900">{tag.tag}</p>
                      <p className="text-sm text-gray-500">{tag.category} • {tag.articles}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-sm font-medium text-gray-700 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights_Main;