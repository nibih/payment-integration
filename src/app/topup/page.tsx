"use client";
import { useContext } from "react";

export default function TopUpMethods() {
  const { setMethod } = useContext(PaymentContext);
  // Define the top-up methods with their icon paths
  const topUpMethods = [
    {
      title: "JakOne Mobile",
      description: "No administration fees via the JakOne Mobile App",
      icon: "/phone.png", // Path to icon in the public folder,
      property: "jakone",
    },
    {
      title: "ATM Bank DKI",
      description: "Top up Martipay from nearest Bank DKI ATM",
      icon: "/atm.png",
      property: "atm",
    },
    {
      title: "Other Bank",
      description: "Transfer anytime from your favourite Indonesia bank",
      icon: "/bank.png",
      property: "other",
    },
    {
      title: "Debit Card",
      description: "Top up online using your debit card",
      icon: "/card.png",
      property: "debit",
    },
  ];

  return (
    <div>
      {/* Header */}

      {/* Page Title */}
      <div className="mb-6 flex items-center space-x-4">
        <img src="/money.png" alt="Top Up" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800">Top Up Methods</h3>
      </div>

      {/* List of Top Up Methods */}
      <div className="space-y-4">
        {topUpMethods.map((method, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center rounded-lg bg-white p-4 shadow-sm hover:bg-gray-100"
            onClick={() => {
              // go to method subpage with method.title as the parameter
            }}
          >
            {/* Dynamically Loaded Icon */}
            <div className="mr-4 flex h-20 w-20 items-center justify-center rounded-full">
              <img
                src={method.icon}
                alt={`${method.title} icon`}
                className="h-16 w-16 object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              <h4 className="text-base font-semibold text-gray-800">
                {method.title}
              </h4>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>

            {/* Right Arrow */}
            <span className="text-xl text-gray-600">&rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
