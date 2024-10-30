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
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50">
          <div className="m-auto mt-20 w-96 rounded-lg bg-white p-8">
            <h1 className="text-2xl">Konfirmasi PIN kamu!</h1>
            <p className="text-sm text-gray-500">
              PIN yang kamu masukkan TIDAK SESUAI
            </p>
            <button
              onClick={() => setShow(false)}
              className="mt-4 w-full rounded-lg bg-orange-800 py-2 text-white"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      )}
      <h1 className="text-2xl">LRT X JakOne Pay</h1>
      <div className="m-auto mt-10 flex w-96 flex-col gap-3">
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="mx-auto mb-4 h-12" />
        <h2 className="mb-4 text-center text-2xl font-light">
          Konfirmasi PIN kamu!
        </h2>
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
          <h3 className="text-center text-2xl">Konfirmasi PIN kamu!</h3>
        </div>
        <div className="m-auto">
          {/* copyright */}
          <p className="mt-4 text-center text-xs text-gray-500">
            © powered by
          </p>
          <img src="/Logo_BDKI.png" alt="Logo" className="mx-auto mb-4 h-5" />
        </div>
      </div>
    </>
  );
}
