// context/RegisterContext.js
"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
const RegisterContext = createContext({
  phoneNumber: "",
  setPhoneNumber: (phoneNumber: string) => {},
  otp: "",
  setOtp: (otp: string) => {},
  stage: "phone",
  setStage: (stage: string) => {},
  encryptedPin: "",
  setEncryptedPin: (encryptedPin: string) => {},
});

interface RegisterProviderProps {
  children: ReactNode;
}

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  // phone number and stage of registration
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState("phone");
  const [encryptedPin, setEncryptedPin] = useState("");

  return (
    <RegisterContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        otp,
        setOtp,
        stage,
        setStage,
        encryptedPin,
        setEncryptedPin,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

// Custom hook for easier usage
export const useRegister = () => useContext(RegisterContext);
