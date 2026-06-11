import { useState } from "react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
              className="flex items-center gap-3 bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-700 transition"
      >
        <span className="relative z-10">Login</span>

        {/* hover wave effect */}
        <span
          className="
          absolute inset-0
          bg-white/20
          scale-x-0
          group-hover:scale-x-100
          transition-transform duration-300
          origin-left
        "
        />
      </button>

      {open && <LoginModal close={() => setOpen(false)} />}
    </>
  );
};

export default LoginButton;
