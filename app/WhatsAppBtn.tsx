"use client";

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/919000000000" // Replace with your number
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="/WhatsApp.svg" // Download & place a WhatsApp icon in `public`
        alt="Chat on WhatsApp"
        className="w-12 h-12 drop-shadow-lg hover:scale-110 transition"
      />
    </a>
  );
}
