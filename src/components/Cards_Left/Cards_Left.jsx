import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const cardsData = [
  {
    type: "Platinum Plus Visa",
    brand: <FaCcVisa className="text-4xl text-green-800" />,
    amount: "$415,000",
    cardType: "Debit",
    number: "**** **** **** 9927",
    exp: "12/23",
    cvv: "313",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    hasSwitch: false,
  },
  {
    type: "Freedom Unlimited Mastercard",
    brand: <FaCcMastercard className="text-4xl text-white" />,
    amount: "$532,000",
    cardType: "Credit",
    number: "**** **** **** 5487",
    exp: "06/25",
    cvv: "411",
    bgColor: "bg-teal-900",
    textColor: "text-white",
    hasSwitch: true,
  },
  {
    type: "Elite Traveler Mastercard",
    brand: <FaCcMastercard className="text-4xl text-green-900" />,
    amount: "$430,000",
    cardType: "Credit",
    number: "**** **** **** 3321",
    exp: "08/29",
    cvv: "672",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    hasSwitch: true,
  },
];

export default function Cards_Left() {
  const [enabled, setEnabled] = useState(Array(cardsData.length).fill(true));

  return (
    <div className="p-2 max-w-full mx-auto mt-6 bg-stone-100 md:mt-9 md:ml-11 md:h-fit rounded-lg shadow-lg lg:mt-20 lg:ml-[120px]">
      {/* Header */}
      <div className="flex px-2 justify-between items-center mb-4 md:pr-7 ">
        <h2 className="text-lg font-semibold text-gray-700 min-w-max">My Cards</h2>
        <div className="flex gap-[2px] cursor-pointer min-w-max">
          <IoMdAdd className="text-xl text-gray-700 cursor-pointer" />
          <p className="text-sm text-gray-700">Add</p>
        </div>
      </div>

      {/* Responsive Cards Layout */}
      <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto md:overflow-x-auto md:flex-row p-2 whitespace-nowrap">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`p-4 min-w-[320px] md:min-w-[280px] rounded-lg shadow-md ${card.bgColor} ${card.textColor}`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm">{card.type}</span>
              {card.brand}
            </div>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-2xl font-bold">{card.amount}</h3>
              <p className="text-sm font-semibold">{card.cardType}</p>
            </div>
            <div className="text-sm flex justify-between mt-3">
              <div>
                <p className="text-gray-500">Card Number</p>
                <p>{card.number}</p>
              </div>
              <div>
                <p className="text-gray-500">EXP</p>
                <p>{card.exp}</p>
              </div>
              <div>
                <p className="text-gray-500">CVV</p>
                <p>{card.cvv}</p>
              </div>
            </div>
            {card.hasSwitch && (
              <div className="mt-3 flex justify-end">
                <Switch
                  checked={enabled[index]}
                  onChange={() =>
                    setEnabled((prev) => {
                      const newState = [...prev];
                      newState[index] = !newState[index];
                      return newState;
                    })
                  }
                  className={`${enabled[index] ? "bg-green-500" : "bg-gray-300"}
              relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`transform transition ease-in-out duration-200 inline-block h-4 w-4 bg-white rounded-full shadow-lg
                ${enabled[index] ? "translate-x-6" : "translate-x-1"}`}
                  />
                </Switch>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
