// context/RegisterContext.js
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
const PaymentContext = createContext({
  method: "",
  setMethod: (method: string) => {},
});

interface PaymentProviderProps {
  children: ReactNode;
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  // phone number and stage of registration
  const [method, setMethod] = useState("");
  return (
    <PaymentContext.Provider
      value={{
        method,
        setMethod,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook for easier usage
export const usePayment = () => useContext(PaymentContext);
