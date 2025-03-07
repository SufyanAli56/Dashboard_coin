import { AiFillCheckCircle } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Innovations = () => {
  const relatedArticles = [
    { title: "The Role of AI in Banking", category: "Financial Technology" },
    { title: "Blockchain and Secure Transactions", category: "Banking Security" },
    { title: "How Digital Wallets Are Changing Payments", category: "Cashless Economy" },
    { title: "The Future of Mobile Banking", category: "Online Banking" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar className="hidden md:block" />

      <div className="flex-1">
        <Header />
        <div className="px-4 md:px-6 md:ml-10 lg:ml-44 mt-20">
          {/* Article Header */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold text-center text-gray-800">
              Innovations in Banking
            </h2>
            <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
              Exploring how modern technology is transforming the banking industry, improving efficiency, security, and customer experience.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <AiFillCheckCircle className="text-green-500" />
                <span className="ml-1">Jordan Smith</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span>Banking Technology</span>
              <span className="hidden md:inline">•</span>
              <span>March 5, 2025</span>
            </div>

            <div className="mt-6 bg-gray-300 h-40 md:h-64 lg:h-80 rounded-lg"></div>
          </div>
        </div>
        <div className="px-4 md:px-6 md:ml-10 lg:ml-44 mt-8 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">The Evolution of Banking Technology</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Over the years, banking has undergone a remarkable transformation, shifting from traditional brick-and-mortar institutions to digital-first solutions. Innovations in financial technology (FinTech) have revolutionized the way people interact with banks, ensuring convenience, speed, and enhanced security.
            </p>

            <ul className="list-disc pl-6 text-gray-600 mt-4 text-sm md:text-base">
              <li className="mt-2">
                <strong>Artificial Intelligence (AI):</strong> AI-driven chatbots and automation tools have improved customer service and fraud detection, making banking more efficient.
              </li>
              <li className="mt-2">
                <strong>Blockchain Technology:</strong> Blockchain ensures transparency and security in financial transactions, reducing fraud risks.
              </li>
              <li className="mt-2">
                <strong>Contactless Payments:</strong> Mobile wallets and NFC technology have made transactions faster and more secure than ever before.
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">The Future of Banking</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Banks are continuously evolving, integrating AI, big data analytics, and cybersecurity advancements to enhance user experience and security. With the rise of open banking and decentralized finance (DeFi), the industry is moving towards greater accessibility and innovation.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">Conclusion</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              The rapid pace of innovation in banking is shaping the future of finance, making it more digital, secure, and accessible. As technology continues to evolve, customers can expect even more seamless and efficient banking solutions.
            </p>

            <div className="mt-4 p-4 bg-gray-100 border-l-4 border-blue-500 italic text-gray-700 text-sm md:text-base">
              "Technology is redefining the way we bank, ensuring a more connected and secure financial future."
            </div>
          </div>

          <div className="w-full h-fit lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Contents</h3>
            <ul className="text-gray-600 text-sm mt-2 space-y-2">
              <li>The Evolution of Banking Technology</li>
              <li>The Future of Banking</li>
              <li>Conclusion</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">Share</h3>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-blue-600 cursor-pointer" />
              <FaTwitter className="text-blue-400 cursor-pointer" />
              <FaLinkedinIn className="text-blue-700 cursor-pointer" />
              <FaWhatsapp className="text-green-600 cursor-pointer" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#BankingTech</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#FinTech</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#DigitalBanking</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#Blockchain</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded">#FinancialInnovation</span>
            </div>
          </div>
        </div>

       <div className="px-4 md:px-6 md:ml-10 lg:ml-44 mt-8 pb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
    Related Contents
  </h2>

  <div className="flex flex-wrap justify-center sm:justify-start gap-4 tablet-scroll">
    {relatedArticles.map((article, index) => (
      <div
        key={index}
        className="w-full sm:w-64 md:w-64 lg:w-64 bg-white p-5 rounded-lg shadow-sm 
                   flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105"
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

export default Innovations;
