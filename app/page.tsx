"use client";

import Image from "next/image";
import bullLogo from "/public/bull-logo.png";
<link rel="icon" href="/favicon.ico" />

import WhatsAppBtn from "./WhatsAppBtn";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLeadSchema } from "./validationSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";

type LeadsForm = z.infer<typeof createLeadSchema>;

export default function Home() {
  const router = useRouter();
    const [showTerms, setShowTerms] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadsForm>({
    resolver: zodResolver(createLeadSchema),
    defaultValues: { terms: true },
  });
  
  const [error, setError] = useState("");
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

          <form
            className="space-y-4"
            onSubmit={handleSubmit(async (data) => {
              // await axios.post("/api/leads", data)
              try {
                await axios.post("/api/leads", data);
                // toast.success("Form submitted successfully!");
if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true");
    }
    reset(); // Reset form fields
window.location.href = "/thankyou";
              } catch (err) {
                toast.error("Something went wrong. Please try again.");
                setError("An unexpected error occured");
              }
            })}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}

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
                {...register("phone")}
              />
            </div>
            {errors.phone && <p>{errors.phone.message}</p>}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              {...register("city")}
            />
            {errors.city && <p>{errors.city.message}</p>}

            <div className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 accent-cyan-500"
                {...register("terms")}
                defaultChecked
              />
              <label htmlFor="terms">
                I agree to{" "}
               <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowTerms(true);
  }}
  className="underline text-cyan-400"
>
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

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setShowTerms(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
            <div className="max-h-80 overflow-y-auto text-sm">
              {/* Place your terms & conditions content here */}
<>&nbsp;</>

              <p>
At Bull CFD, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, services, or interact with us in any way. By accessing our platform, you consent to the practices described below.              </p>
              {/* ...more content... */}
<>&nbsp;</>

              <h2 className="font-semibold">1. Information We Collect</h2>
<>&nbsp;</>

              <p>
We may collect the following types of information:

Personal Identification Information: Name, email address, phone number, date of birth, nationality, and government-issued identification.
Financial Information: Bank account details, payment card details, transaction history.
Technical Data: IP address, device information, browser type, operating system, and cookies.
Usage Data: Trading activities, preferences, and navigation patterns.
KYC/AML Documentation: Proof of identity and proof of address to comply with regulatory obligations.
              </p>
<>&nbsp;</>

              <h2 className="font-semibold">2. How We Use Your Information
</h2>
<>&nbsp;</>

<p>We use your information for the following purposes:

To create and manage your Bull CFD trading account.
To verify your identity and comply with KYC/AML regulations.
To process transactions and manage payment operations.
To provide customer support and respond to inquiries.
To send updates, newsletters, and promotional offers (you can opt-out anytime).
To analyze website usage and improve user experience.
To detect and prevent fraud, abuse, and unauthorized access.</p>
<>&nbsp;</>

<h2 className="font-semibold">
  3. Sharing Your Information

</h2>
<>&nbsp;</>

<p>
  We may share your information with:

Regulatory authorities and financial institutions as required by law.
Third-party service providers that assist with hosting, payment processing, KYC verification, and customer support.
Legal or government agencies in the case of fraud, investigation, or legal obligation.
We do not sell, trade, or rent your personal data to any third parties.

</p>
<>&nbsp;</>

<h2 className="font-semibold">4. Data Security
</h2>
<>&nbsp;</>

<p>We implement strong security measures including encryption, firewalls, and access controls to protect your personal and financial data. However, no digital transmission or storage method is 100% secure, and we cannot guarantee absolute security.</p>
<>&nbsp;</>

<h2 className="font-semibold">5. Your Rights
</h2>  
<>&nbsp;</>

<p>You have the right to:

Access the personal data we hold about you.
Request correction of inaccurate or incomplete information.
Request deletion of your data, subject to regulatory and legal requirements.
Withdraw consent where applicable.</p>
<>&nbsp;</>

<h2 className="font-semibold">6. Cookies and Tracking Technologies
</h2> 
<>&nbsp;</>

<p>Our website uses cookies and similar technologies to enhance your browsing experience and analyze usage. You can modify your browser settings to manage cookie preferences.</p>
<>&nbsp;</>

<h2 className="font-semibold">7. International Data Transfers
</h2>
<>&nbsp;</>

<p>Your data may be transferred and stored outside your country of residence. We ensure all transfers comply with applicable data protection laws.</p>
<>&nbsp;</>

     <h2 className="font-semibold">8. Third-Party Links
</h2> 
<>&nbsp;</>

<p>
  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies separately.
</p>
<>&nbsp;</>

      <h2 className="font-semibold">9. Updates to This Policy
</h2>
<>&nbsp;</>

<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated Effective Date. Your continued use of the service after updates constitutes your acceptance of the changes.
</p>
<>&nbsp;</>

<h2 className="font-semibold">
  10. Contact Us

</h2>
<>&nbsp;</>

<p>
If you have any questions or concerns regarding this Privacy Policy or how we handle your data, please contact us at:

Email: support@bullcfd.com
</p>
      </div>
          </div>
        </div>
      )};
    </main>
  );
}
