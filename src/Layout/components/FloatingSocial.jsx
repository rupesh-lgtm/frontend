import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FloatingSocial = () => {
  return (
    <div className="fixed right-4 bottom-20 z-50 hidden md:flex flex-col items-end space-y-3">
      <a
        href="https://wa.me/919211492008"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={20} />
        <span className="ml-2 hidden group-hover:inline-block">WhatsApp</span>
      </a>

      <a
        href="tel:+919211492008"
        className="group flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaPhoneAlt size={18} />
        <span className="ml-2 hidden group-hover:inline-block">Call Now</span>
      </a>

      <a
        href="/contact"
        className="group flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaEnvelope size={18} />
        <span className="ml-2 hidden group-hover:inline-block">Enquiry</span>
      </a>
    </div>
  );
};

export default FloatingSocial;
