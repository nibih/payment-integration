"use client";
import { usePayment } from "@/context/PaymentContext";
export default function method() {
  const { method } = usePayment();
  const ammountOptions = [
    {
      title: "Rp 50.000",
      value: 50000,
    },
    {
      title: "Rp 100.000",
      value: 100000,
    },
    {
      title: "Rp 150.000",
      value: 150000,
    },
    {
      title: "Rp 200.000",
      value: 200000,
    },
    {
      title: "Rp 250.000",
      value: 250000,
    },
    {
      title: "Rp 300.000",
      value: 300000,
    },
  ];
  return (
    <div>
      {/* Page Title */}
      <div className="mb-6 flex items-center space-x-4">
        <img src="/money.png" alt="Top Up" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800">Via {method}</h3>
      </div>
      {/* top up information */}
      {/* icon and orange h4 and black p in a slightly orange box*/}

      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-orange-100 p-4">
          <div className="flex">
            <img
              src="/Announcement.png"
              alt="Announcement"
              className="h-6 w-6"
            />
            <h4 className="text-orange-800">Top Up Information</h4>
          </div>
          <p className="text-black">
            You can save up to Rp 2.000.000 with maximum transactions of Rp
            20.000.000 per month
          </p>
        </div>
      </div>

      {/* List of buttons for topup ammount*/}

      <div className="grid grid-cols-2 gap-4 p-4">
        {ammountOptions.map((option, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center rounded-lg border-2 bg-white p-4 shadow-sm hover:bg-gray-100"
          >
            <div className="mr-4 flex h-20 w-20 items-center justify-center rounded-full">
              <img
                src="/money.png"
                alt="Top Up"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="grow">
              <h4 className="text-lg font-semibold text-gray-800">
                {option.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
      {/* enter another amount */}
      {/* h3 with enter another */}
      <h3 className="text-lg font-semibold text-gray-800">
        Enter Another Amount
      </h3>
      {/* input with placeholder "Rp 0" */}
      {/* but the Rp is always there */}
      <input
        type="number"
        placeholder="0"
        className="w-full rounded-lg border-2 p-4"
      />
    </div>
  );
}
