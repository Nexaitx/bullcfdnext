"use client";

import Image from "next/image";
import bullLogo from "/public/bull-logo.png"; // Replace with your actual logo
import WhatsAppBtn from "./WhatsAppBtn";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative">
      {/* LEFT SECTION */}
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <Image
          src={bullLogo}
          alt="Bull CFD Logo"
          width={120}
          height={120}
          className="mb-6"
        />
        <h1 className="text-3xl font-extrabold tracking-wide uppercase">
          Bull CFD
        </h1>
        <p className="text-sm italic text-gray-400 mb-6">
          Ride the Bull, Rule the Market
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Trade with Zero Tax and 50x Leverage
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Indian Stocks (NSE), MCX, US Stocks, Crypto & Forex
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-green-600/80 px-3 py-1 text-sm rounded-full">
            ✅ Zero Tax
          </span>
          <span className="bg-orange-500/80 px-3 py-1 text-sm rounded-full">
            💰 24×7 Deposit & Withdrawal
          </span>
          <span className="bg-blue-600/80 px-3 py-1 text-sm rounded-full">
            📈 Up to 50x Leverage
          </span>
        </div>

        <p className="text-xs mt-6 text-gray-400">
          Indian + US Stocks & Commodities
        </p>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="flex items-center justify-center p-6 bg-white/5">
        <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-6 text-white">
            Create Account
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            />

            <div className="flex w-full">
              <div className="flex items-center px-3 bg-white/10 border border-white/20 rounded-l-md text-white text-sm gap-1">
                <span role="img" aria-label="India">
                  🇮🇳
                </span>
                +91
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="flex-1 px-4 py-2 rounded-r-md bg-white/10 border-t border-b border-r border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            />

            <div className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 accent-cyan-500"
              />
              <label htmlFor="terms">
                I agree to{" "}
                <a href="#" className="underline text-cyan-400">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-all rounded-md font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <WhatsAppBtn />
    </main>
  );
}
