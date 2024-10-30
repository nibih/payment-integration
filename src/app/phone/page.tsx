"use client";

import { useRegister } from "@/context/RegisterContext";
import { redirect } from "next/navigation";
export default function Phone() {
  const { phoneNumber, setPhoneNumber, stage, setStage } = useRegister();
  return (
    // orange red bg
    // makeheight fill screen
    <>
      <h1 className="text-2xl">LRT X JakOne Pay</h1>
      <div className="m-auto w-96">
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="mx-auto mb-4 h-12" />
        <h2 className="mb-4 text-center text-xl font-light">Selamat datang</h2>
        <p className="mb-4 text-sm text-gray-500">
          Ekspresikan perjalananmu menggunakan LRT Pay
        </p>

        {/* Phone Number Label */}
        <label className="mb-1 block text-sm font-semibold text-gray-700">
          Nomor Telepon
        </label>

        {/* Phone Number Input and OTP Button */}
        <div className="mb-4 flex items-center overflow-hidden rounded-lg border-2 border-red-500">
          <input
            type="tel"
            placeholder="Masukkan nomor telepon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 text-red-500 outline-none"
          />
          {/* on button click move to next page */}
          <button
            onClick={() => {
              // redirect to otp page
              if (phoneNumber.length === 0) {
                alert("Nomor telepon tidak boleh kosong");
              } else {
                setStage("otp");
                redirect("/");
              }
            }}
            className="m-2 rounded bg-red-500 px-2 py-2 text-xs text-white"
          >
            Kirim OTP
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500">
          Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{" "}
          <span className="font-semibold text-red-500">syarat & ketentuan</span>{" "}
          yang berlaku
        </p>
      </div>
      <div className="m-auto">
        {/* copyright */}
        <p className="mt-4 text-center text-xs text-gray-500">
          © powered by JakOne Pay
        </p>
      </div>
    </>
  );
}
