import React from "react";

const contacts = [
  { id: 1, name: "Bob Johnson", phone: "120987654324", amount: "$560", status: "Successful" },
  { id: 2, name: "Abe Reeves", phone: "120987654322", amount: "$1,000", status: "Pending" },
  { id: 3, name: "Miles Sanders", phone: "120987654326", amount: "", status: "" },
  { id: 4, name: "Cho Wan Kim", phone: "120987654327", amount: "", status: "" },
  { id: 5, name: "Cynthia Watson", phone: "120987654328", amount: "", status: "" },
];

const Transfer_from = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b">
        <h3 className="text-lg font-semibold text-gray-700 bg-blue-100 px-2 py-1 rounded">Recent Transfer</h3>
        <button className="text-blue-500 text-sm hover:underline">Show More</button>
      </div>

      {/* Scrollable Contact List */}
      <div className="mt-3 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex flex-col items-center bg-green-100 p-3 rounded-lg shadow-sm min-w-[140px]"
            >
              {/* Avatar */}
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {contact.name.charAt(0)}
              </div>
              {/* Contact Details */}
              <div className="mt-2 text-center">
                <h4 className="font-medium text-gray-800 text-sm">{contact.name}</h4>
                <p className="text-gray-500 text-xs">{contact.phone}</p>
                {contact.amount && (
                  <p className="text-green-600 font-semibold text-sm mt-1">{contact.amount}</p>
                )}
                {contact.status && (
                  <p className={`text-xs mt-1 font-medium ${
                    contact.status === "Successful" ? "text-green-600" : "text-red-500"
                  }`}>
                    {contact.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transfer_from;
