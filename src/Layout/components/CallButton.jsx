import { MdOutlineAddIcCall } from "react-icons/md";
import { NavLink } from "react-router-dom";

const CallButton = () => {
  return (
    <NavLink to="tel:+918800960940">
      <button
        className="
          flex items-center gap-2
          px-6 py-3
          bg-gradient-to-r from-orange-500 to-orange-600
          text-white font-semibold
          rounded-full
          shadow-lg
          hover:from-orange-600 hover:to-orange-700
          hover:shadow-orange-500/50
          active:scale-95
          transition-all duration-300
        "
      >
        <MdOutlineAddIcCall className="text-xl animate-pulse" />
        <span>+91 88009 60940</span>
      </button>
    </NavLink>
  );
};

export default CallButton;
