import React from "react";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "+917302756618"; // Replace with your WhatsApp number
  const message = "Hello, I would like to know more!"; // Predefined message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition duration-300"
      >
        <img
          src="/whatsapp.svg" // Provide the correct path to the WhatsApp icon
          alt="WhatsApp Icon"
          className="w-10 h-10"
        />
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;