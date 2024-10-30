"use client";
import { useState } from "react";
import { encryptPin } from "../lib/encryption";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleRegister = () => {
    if (pin === confirmPin) {
      const encryptedPin = encryptPin(pin);
      console.log(
        "Phone:",
        phoneNumber,
        "OTP:",
        otpCode,
        "Encrypted PIN:",
        encryptedPin
      );
      alert("Registration successful! Your data has been securely encrypted.");
    } else {
      alert("Pins don't match!");
    }
  };

  return (
    // orange red bg
    // makeheight fill screen
    <div className="bg-white p-6 h-full mx-auto mt-10 rounded-t-lg">
      <div
        className="h-full m-auto
      w-96
      flex flex-col"
      >
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="h-24 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Nomor Telepon</label>
          <input
            type="tel"
            placeholder="Masukkan nomor telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Kode OTP</label>
          <input
            type="text"
            placeholder="Masukkan kode OTP"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            className="p-2 border rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Create PIN</label>
          <input
            type="password"
            placeholder="Buat PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="p-2 border rounded mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Confirm PIN</label>
          <input
            type="password"
            placeholder="Konfirmasi PIN"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            className="p-2 border rounded mt-1"
          />
        </div>

        <button
          onClick={handleRegister}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}
