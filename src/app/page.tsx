"use client";
import { useEffect } from "react";
import { useRegister } from "@/context/RegisterContext";
import { useRouter } from "next/navigation";
export default function Register() {
  // mock, so phone numbner is stored, otp is just a value that is stored
  // after phone is filled and button is pressed, load otp component
  const { stage } = useRegister();
  const router = useRouter();
  useEffect(() => {
    if (stage === "phone") {
      router.push("/phone");
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
  }, [stage]);
  return (
    //load pin component
    <>
      <h1 className="text-2xl">LRT X JakOne Pay</h1>
    </>
  );
}
