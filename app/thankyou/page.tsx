"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Agar formSubmitted flag nahi hai toh home page par redirect karo
    if (typeof window !== "undefined") {
      const submitted = localStorage.getItem("formSubmitted");
      if (submitted !== "true") {
        router.replace("/");
      } else {
        localStorage.removeItem("formSubmitted");
      }
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p>Your form has been submitted successfully. Our team will call you shortly.</p>
    </div>
  );
}