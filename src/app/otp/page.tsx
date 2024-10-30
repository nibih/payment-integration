"use client";

import { useRegister } from "@/context/RegisterContext";
import { redirect } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect } from "react";
export default function Otp() {
  const { phoneNumber, otp, setOtp, stage, setStage } = useRegister();
  useEffect(() => {
    // if otp is filled, move to register page
    if (otp.length === 6) {
      setStage("register");
      redirect("/");
    }
  }, [otp]);
  return (
    <>
      <h1 className="text-2xl">Verifikasi Kode OTP</h1>
      <div className="m-auto mt-10 w-96 flex flex-col gap-5">
        <p
          className="
          text-sm
          text-gray-500
          mb-4
          "
        >
          (otp tidak dicek, masukkan angka random) Masukkan 6 digit kode yang
          sudah dikirim ke nomor kamu dibawah ini ya!
          <br />
          <span className="text-red-500 font-semibold">{phoneNumber}</span>{" "}
        </p>

        <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
          <InputOTPGroup className="grow justify-between">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {/* Tidak terima kode? */}
        <div className="flex items-center flex-col justify-center">
          <h2 className="text-lg">Tidak terima kode? </h2>
          <p className="text-gray-500">Kirim ulang dalam </p>
          <p className="text-red-500 font-semibold"> 00:30</p>
        </div>
      </div>
    </>
  );
}
