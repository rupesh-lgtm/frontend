import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiX } from "react-icons/fi";
const LoginModal = ({ close }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");

      close();
      navigate("/dashboard");
    } else {
      setError("Invalid demo credentials");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      {/* Modal */}
      <div
        className="
      relative
      w-full
      max-w-md
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-[0_20px_80px_rgba(0,0,0,0.25)]
      animate-[fadeIn_.3s_ease]
    "
      >
        {/* Top Gradient */}
        <div className="relative h-36 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
          {/* Close Button */}
          <button
            onClick={close}
            className="
          absolute top-4 right-4
          w-10 h-10
          rounded-full
          flex items-center justify-center
          bg-white/20
          text-white
          hover:bg-white/30
          transition
        "
          >
            <FiX size={20} />
          </button>

          {/* Logo Circle */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div
              className="
            w-24 h-24
            rounded-full
            bg-white
            border-4 border-white
            shadow-xl
            flex items-center justify-center
          "
            >
              <div
                className="
              w-16 h-16
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-red-500
              flex items-center justify-center
              text-white
              text-3xl
              font-bold
            "
              >
                A
              </div>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="px-8 pt-16 pb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Login to access your dashboard
          </p>

          {/* Email */}
          <div className="relative mb-4">
            <FiMail
              className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-gray-400
          "
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
            w-full
            rounded-2xl
            border border-gray-300
            py-3 pl-12 pr-4
            outline-none
            transition-all
            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-100 text-gray-600
          "
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <FiLock
              className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-gray-400
          "
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
            w-full
            rounded-2xl
            border border-gray-300
            py-3 pl-12 pr-4
            outline-none
            transition-all
            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-100 text-gray-600
          "
            />
          </div>

          {/* Error */}
          {error && (
            <div
              className="
            mb-4
            rounded-xl
            border border-red-200
            bg-red-50
            px-4 py-3
            text-sm text-red-500
          "
            >
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-orange-500
          to-red-500
          py-3
          text-white
          font-semibold
          shadow-lg
          transition-all
          hover:scale-[1.02]
          hover:shadow-xl
          active:scale-[0.98]
        "
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-gray-400">Secure Access</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Cancel */}
          <button
            onClick={close}
            className="
          w-full
          rounded-2xl
          border border-gray-300
          py-3
          text-gray-600
          font-medium
          hover:bg-gray-100
          transition
        "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
