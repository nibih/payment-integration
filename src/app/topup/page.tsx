export default function TopUpMethods() {
  // Define the top-up methods with their icon paths
  const topUpMethods = [
    {
      title: "JakOne Mobile",
      description: "No administration fees via the JakOne Mobile App",
      icon: "/phone.png", // Path to icon in the public folder
    },
    {
      title: "ATM Bank DKI",
      description: "Top up Martipay from nearest Bank DKI ATM",
      icon: "/atm.png",
    },
    {
      title: "Other Bank",
      description: "Transfer anytime from your favourite Indonesia bank",
      icon: "/bank.png",
    },
    {
      title: "Debit Card",
      description: "Top up online using your debit card",
      icon: "/card.png",
    },
  ];

  return (
    <div>
      {/* Header */}

      {/* Page Title */}
      <div
        className="mb-6 flex 
        items-center space-x-4
      "
      >
        <img src="/money.png" alt="Top Up" className="w-12 h-12" />
        <h3 className="text-lg font-semibold text-gray-800">Top Up Methods</h3>
      </div>

      {/* List of Top Up Methods */}
      <div className="space-y-4">
        {topUpMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
          >
            {/* Dynamically Loaded Icon */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center mr-4">
              <img
                src={method.icon}
                alt={`${method.title} icon`}
                className="w-16 h-16 object-contain"
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
