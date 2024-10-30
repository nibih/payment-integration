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
      <div className="m-auto flex w-96 flex-col gap-3">
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="mx-auto mb-4 h-12" />
        <h2 className="mb-4 text-center text-2xl font-light">Buat PIN kamu!</h2>
        <InputOTP maxLength={6} value={pin} onChange={(pin) => setPin(pin)}>
          <InputOTPGroup className="grow justify-between">
            <InputOTPSlot
              className="border-2 border-b-4 border-orange-500 px-5 py-6"
              index={0}
            />
            <InputOTPSlot
              className="border-2 border-b-4 border-orange-500 px-5 py-6"
              index={1}
            />
            <InputOTPSlot
              className="border-2 border-b-4 border-orange-500 px-5 py-6"
              index={3}
            />
            <InputOTPSlot
              className="border-2 border-b-4 border-orange-500 px-5 py-6"
              index={2}
            />
            <InputOTPSlot
              className="border-2 border-b-4 border-orange-500 px-5 py-6"
              index={4}
            />
            <InputOTPSlot
              className="border-2 border-b-4 border-orange-500 px-5 py-6"
              index={5}
            />
          </InputOTPGroup>
        </InputOTP>
        {/* Tidak terima kode? */}
        <div className="flex flex-col items-center justify-center">
          <img src="/mascot.png" alt="Logo" className="mx-auto mb-4 w-9/12" />
          <h3 className="text-center text-2xl">
            Seluruh informasi kamu terlindungi
          </h3>
          <div className="m-auto">
            {/* copyright */}
            <p className="mt-4 text-center text-xs text-gray-500">
              © powered by
            </p>
            <img src="/Logo_BDKI.png" alt="Logo" className="mx-auto mb-4 h-5" />
          </div>
        </div>
      </div>
    </>
  );
}
