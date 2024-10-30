"use client";

import { useRegister } from "@/context/RegisterContext";
import { encryptPin } from "@/lib/encryption";
import { redirect } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
export default function Otp() {
  const { encryptedPin, setEncryptedPin, stage, setStage } = useRegister();
  const [pin, setPin] = useState("");
  useEffect(() => {
    // if pin is filled, encrypt and set to context
    if (pin.length === 6) {
      const encrypted = encryptPin(pin);
      setEncryptedPin(encrypted);
      setStage("confirm");
      redirect("/");
    }
  }, [pin]);
  return (
    <>
      <h1 className="text-2xl">LRT X JakOne Pay</h1>
      <div className="m-auto w-96 flex flex-col gap-3">
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-light text-center mb-4">Buat PIN kamu!</h2>
        <InputOTP maxLength={6} value={pin} onChange={(pin) => setPin(pin)}>
          <InputOTPGroup className="grow justify-between">
            <InputOTPSlot
              className="border-orange-500 border-2 border-b-4 px-5 py-6"
              index={0}
            />
            <InputOTPSlot
              className="border-orange-500 border-2 border-b-4 px-5 py-6"
              index={1}
            />
            <InputOTPSlot
              className="border-orange-500 border-2 border-b-4 px-5 py-6"
              index={3}
            />
            <InputOTPSlot
              className="border-orange-500 border-2 border-b-4 px-5 py-6"
              index={2}
            />
            <InputOTPSlot
              className="border-orange-500 border-2 border-b-4 px-5 py-6"
              index={4}
            />
            <InputOTPSlot
              className="border-orange-500 border-2 border-b-4 px-5 py-6"
              index={5}
            />
          </InputOTPGroup>
        </InputOTP>
        {/* Tidak terima kode? */}
        <div className="flex items-center flex-col justify-center">
          <img src="/mascot.png" alt="Logo" className="w-9/12 mx-auto mb-4" />
          <h3
            className="
            text-2xl
            text-center
            "
          >
            Seluruh informasi kamu terlindungi
          </h3>
          <div className="m-auto">
            {/* copyright */}
            <p className="text-xs text-gray-500 text-center mt-4">
              © powered by
            </p>
            <img src="/Logo_BDKI.png" alt="Logo" className="h-5 mx-auto mb-4" />
          </div>
        </div>
      </div>
    </>
  );
}
