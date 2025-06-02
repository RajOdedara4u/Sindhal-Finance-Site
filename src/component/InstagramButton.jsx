import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/sindhal_personal_finance/"
      data-aos="flip-left"
      target="_blank"
      rel="noopener noreferrer"
      className="relative animate__animated animate__tada inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-[#E1306C] text-white hover:bg-[#e1306bca] focus:ring-4 focus:outline-none"
    >
      <span className="flex items-center gap-2 px-4 py-2 transition-all ease-in duration-75 rounded-md">
        <FaInstagram className="text-lg" />
        DM On Instagram
      </span>
    </a>
  );
};

export default InstagramButton;
