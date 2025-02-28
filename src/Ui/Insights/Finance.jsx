import { AiFillCheckCircle } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Finance = () => {
  const relatedArticles = [
    { title: "Smart Budgeting Techniques", category: "Personal Finance" },
    { title: "Understanding Credit Scores", category: "Financial Literacy" },
    { title: "How to Save More Effectively", category: "Money Management" },
    { title: "Investment Strategies for Beginners", category: "Investing" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar className="hidden md:block" />

      <div className="flex-1">
        <Header />

        {/* Main Content */}
        <div className="px-4 md:px-6 lg:ml-44 mt-20">
          {/* Article Header */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold text-center text-gray-800">
              Essential Finance Management Tips
            </h2>
            <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
              Discover the key principles of managing your finances efficiently, reducing debt, and building wealth for a secure future.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <AiFillCheckCircle className="text-green-500" />
                <span className="ml-1">Jordan Smith</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span>Personal Finance</span>
              <span className="hidden md:inline">•</span>
              <span>March 12, 2025</span>
            </div>

            <div className="mt-6 bg-gray-300 h-40 md:h-64 lg:h-80 rounded-lg"></div>
          </div>
        </div>

        {/* Article Content and Sidebar */}
        <div className="px-4 md:px-6 lg:ml-44 mt-8 flex flex-col lg:flex-row gap-6">
          {/* Left Side - Article Content */}
          <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Building a Strong Financial Foundation</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Managing finances wisely requires discipline, strategy, and knowledge. The key to financial security is understanding how to budget, save, invest, and control expenses effectively.
            </p>

            {/* Bullet Points Section */}
            <ul className="list-disc pl-6 text-gray-600 mt-4 text-sm md:text-base">
              <li className="mt-2">
                <strong>Track Your Expenses:</strong> Understanding where your money goes helps in cutting unnecessary spending and optimizing your budget.
              </li>
              <li className="mt-2">
                <strong>Save Before You Spend:</strong> Prioritize saving a portion of your income before spending on discretionary expenses.
              </li>
              <li className="mt-2">
                <strong>Emergency Fund:</strong> Having at least 3-6 months’ worth of expenses saved provides a financial safety net during crises.
              </li>
            </ul>

            {/* Investment Planning */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Investment Planning</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Smart investments help grow wealth over time. Consider diversified investment options such as stocks, bonds, real estate, and retirement funds.
            </p>

            {/* Debt Management */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Debt Management Strategies</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Managing debt responsibly is crucial for financial stability. Paying off high-interest debts first, consolidating loans, and maintaining a healthy credit score are key aspects of effective debt management.
            </p>

            {/* Conclusion */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Conclusion</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Financial success is built on smart habits, consistency, and knowledge. By following these finance management tips, you can create a secure future and achieve your financial goals.
            </p>

            {/* Quote */}
            <div className="mt-4 p-4 bg-gray-100 border-l-4 border-green-500 italic text-gray-700 text-sm md:text-base">
              "A budget is telling your money where to go instead of wondering where it went."
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full h-fit lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Contents</h3>
            <ul className="text-gray-600 text-sm mt-2 space-y-2">
              <li>Building a Strong Financial Foundation</li>
              <li>Investment Planning</li>
              <li>Debt Management Strategies</li>
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
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#FinanceTips</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#Budgeting</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#MoneyManagement</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#DebtFree</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#Investing</span>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="px-4 md:px-6 lg:ml-44 mt-8 pb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center sm:text-left">Related Articles</h2>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 overflow-x-auto scrollbar-hide">
            {relatedArticles.map((article, index) => (
              <div
                key={index}
                className="w-full sm:w-64 md:w-64 lg:w-64 bg-white p-5 rounded-lg shadow-sm flex-shrink-0"
              >
                <div className="h-32 sm:h-36 bg-gray-200 rounded-md mb-3"></div>
                <p className="text-xs text-gray-500 font-semibold">{article.category}</p>
                <h3 className="text-base font-medium text-gray-800 mt-1">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Finance;
