"use client";
import { Input } from "@/components/ui/input";

import { useRegister } from "@/context/RegisterContext";
import { redirect } from "next/navigation";
export default function register() {
  const { phoneNumber, setPhoneNumber, stage, setStage } = useRegister();
  return (
    <>
      <h1 className="text-2xl">LRT X JakOne Pay</h1>
      <div className="m-auto flex w-96 flex-col gap-3">
        {/* logo lrt */}
        <img src="/Logo_LRT.png" alt="Logo" className="mx-auto mb-4 h-12" />
        <Input
          className="bg-slate-200"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Nomor telepon/handphone"
        />
        <Input className="bg-slate-200" type="text" placeholder="Nama" />
        <Input
          className="bg-slate-200"
          type="text"
          placeholder="Tanggal Lahir"
        />
        <Input
          className="bg-slate-200"
          type="text"
          placeholder="Tempat Lahir"
        />
        <Input className="bg-slate-200" type="email" placeholder="Email" />
        <button
          onClick={() => {
            // redirect to otp page
            if (phoneNumber.length === 0) {
              alert("Nomor telepon tidak boleh kosong");
            } else {
              setStage("pin");
              redirect("/pin");
            }
          }}
          className="mt-10 rounded bg-red-500 px-2 py-2 text-base text-white"
        >
          Daftar
        </button>
      </div>

      <div className="m-auto">
        {/* copyright */}
        <p className="mt-4 text-center text-xs text-gray-500">© powered by</p>
        <img src="/Logo_BDKI.png" alt="Logo" className="mx-auto mb-4 h-5" />
      </div>
    </>
  );
}
