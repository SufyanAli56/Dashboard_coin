import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Cards_Left from "../../components/Cards_Left/Cards_Left";

const Cards = () => {
  const cardsData = [
    {
      title: "Platinum Plus Visa",
      type: "Debit",
      amount: "$415,000",
      cardNumber: "**** **** **** 9967",
      exp: "12/29",
      cvv: "313",
      brand: "VISA",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      isCredit: false,
    },
    {
      title: "Freedom Unlimited Mastercard",
      type: "Credit",
      amount: "$532,000",
      cardNumber: "**** **** **** 5487",
      exp: "05/25",
      cvv: "411",
      brand: "Mastercard",
      bgColor: "bg-green-800",
      textColor: "text-white",
      isCredit: true,
    },
    {
      title: "Elite Traveler Mastercard",
      type: "Credit",
      amount: "$430,000",
      cardNumber: "**** **** **** 3321",
      exp: "08/29",
      cvv: "672",
      brand: "Mastercard",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      isCredit: true,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 md:ml-6 lg:ml-8">
          <div className="w-full max-w-md mx-auto mt-16 p-4 bg-gray-100 rounded-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 px-2">
              <h2 className="text-lg font-semibold">My Cards</h2>
              <button className="text-green-500 font-medium text-sm">+ Add</button>
            </div>

            {/* Cards in Column Layout for All Screens */}
            <div className="space-y-4">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl shadow-md ${card.bgColor} ${card.textColor}`}
                >
                  {/* Card Title & Brand */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">{card.title}</h3>
                    <span className="text-xs font-bold">{card.brand}</span>
                  </div>

                  {/* Amount & Type */}
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">{card.amount}</p>
                    <p className="text-sm font-medium">{card.type}</p>
                  </div>

                  {/* Card Details */}
                  <div className="mt-3 text-sm">
                    <p className="text-gray-500">Card Number</p>
                    <p className="font-medium">{card.cardNumber}</p>
                    <div className="flex justify-between mt-2">
                      <div>
                        <p className="text-gray-500">EXP</p>
                        <p className="font-medium">{card.exp}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">CVV</p>
                        <p className="font-medium">{card.cvv}</p>
                      </div>
                    </div>
                  </div>

                  {/* Credit Card Toggle */}
                  {card.isCredit && (
                    <div className="mt-3 flex justify-end">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500"></div>
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:left-6"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Left Section */}
        <Cards_Left />
      </div>
    </>
  );
};

export default Cards;
