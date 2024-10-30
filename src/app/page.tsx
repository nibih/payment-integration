"use client";
import { encryptPin } from "@/lib/encryption";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { useRegister } from "@/context/RegisterContext";
import { redirect, useRouter } from "next/navigation";
export default function Register() {
  // mock, so phone numbner is stored, otp is just a value that is stored
  // after phone is filled and button is pressed, load otp component

  const router = useRouter();
  const { encryptedPin, setEncryptedPin, stage, setStage } = useRegister();
  const [pin, setPin] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    // if pin is filled, encrypt compare to state, if not same, open modal
    if (pin.length === 6) {
      const confirm = encryptPin(pin);
      if (confirm !== encryptedPin) {
        // open modal
        setShow(true);
        setPin("");
      } else {
        setStage("success");
        redirect("/topup");
      }
    }
  }, [pin]);
  useEffect(() => {
    if (stage === "phone") {
      router.push("/phone");
    } else {
    }
    if (stage === "otp") {
      router.push("/otp");
    }
    if (stage === "register") {
      router.push("/register");
    }
    if (stage === "pin") {
      router.push("/pin");
    }
    if (stage === "confirm") {
    }
  }, [stage]);
  return (
    //load pin component
    <>
      {show && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50">
          <div className="bg-white w-96 mt-20 m-auto p-8 rounded-lg">
            <h1 className="text-2xl">Konfirmasi PIN kamu!</h1>
            <p className="text-gray-500 text-sm">
              PIN yang kamu masukkan TIDAK SESUAI
            </p>
            <button
              onClick={() => setShow(false)}
              className="bg-orange-800 text-white w-full py-2 mt-4 rounded-lg"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      )}
      <h1 className="text-2xl">LRT X JakOne Pay</h1>
      <div className="m-auto mt-10 w-96 flex flex-col gap-3">
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-light text-center mb-4">
          Konfirmasi PIN kamu!
        </h2>
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
          <h3
            className="
            text-2xl
            text-center
            "
          >
            Konfirmasi PIN kamu!
          </h3>
        </div>
        <div className="m-auto">
          {/* copyright */}
          <p className="text-xs text-gray-500 text-center mt-4">© powered by</p>
          <img src="/Logo_BDKI.png" alt="Logo" className="h-5 mx-auto mb-4" />
        </div>
      </div>
    </>
  );
}
