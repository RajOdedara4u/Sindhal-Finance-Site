import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io"; // Subscription bell icon
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918980002847"
      data-aos="flip-left"
      target="_blank"
      rel="noopener noreferrer"
      className="relative animate__animated animate__tada inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-green-500 text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
    >
      <span className="flex items-center gap-2 px-4 py-2 transition-all ease-in duration-75 rounded-md">
        <FaWhatsapp className="text-lg" />
        Let's talk about it
      </span>
      <IoMdNotificationsOutline className="text-lg" />
    </a>
  );
};

export default WhatsAppButton;
