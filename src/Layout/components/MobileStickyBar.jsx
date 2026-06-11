import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg md:hidden">
      <div className="flex text-center">
        {/* Enquiry */}
        <a
          href="/contact"
          className="flex-1 py-3 flex flex-col items-center justify-center text-orange-600"
        >
          <FaEnvelope size={14} />
          <span className="text-xs mt-1">Enquiry</span>
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/919211492008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 flex flex-col items-center justify-center text-orange-600"
        >
          <FaWhatsapp size={14} />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:+919211492008"
          className="flex-1 py-3 flex flex-col items-center justify-center text-orange-600 border-l border-r"
        >
          <FaPhoneAlt size={14} />
          <span className="text-xs mt-1">Call</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
