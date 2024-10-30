"use client";
import { PaymentProvider } from "@/context/PaymentContext";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "flex h-full min-h-screen w-full flex-col bg-gray-50 p-5 font-sans text-gray-800 antialiased"
      }
    >
      <div className="mb-4 flex items-center space-x-2">
        <button className="text-2xl text-gray-700">&larr;</button>
        <h2 className="text-xl font-semibold">Top Up LRTJPay</h2>
      </div>
      <PaymentProvider>{children}</PaymentProvider>
    </div>
  );
}
