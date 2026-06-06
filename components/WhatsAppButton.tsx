"use client";

import { COMPANY } from "@/lib/company";

export default function WhatsAppButton() {
  const message =
    "Hello Conflux Trading, I am interested in your products.";

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        text-white
        px-5
        py-3
        rounded-full
        shadow-lg
        hover:scale-105
        transition
      "
    >
      WhatsApp Us
    </a>
  );
}