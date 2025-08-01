"use client";

const PHONE_NUMBER = "+918360891276"; // apna number yahan daalo
const PREFILL_MESSAGE = "Hi! Please send me my trading id.";

export default function WhatsAppBtn() {
  // URL-encode the message
  const encodedMessage = encodeURIComponent(PREFILL_MESSAGE);
  const href = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="/WhatsApp.svg"
        alt="Chat on WhatsApp"
        className="w-12 h-12 drop-shadow-lg hover:scale-110 transition"
      />
    </a>
  );
}
