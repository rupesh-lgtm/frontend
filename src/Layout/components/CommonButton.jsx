import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CommonButton = ({ text, to = "/", icon = true }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(to)}
      className="flex items-center gap-3 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition"
    >
      {text}

      {icon && (
        <span className="bg-white text-orange-600 p-2 rounded-full">
          <Plus size={16} />
        </span>
      )}
    </motion.button>
  );
};

export default CommonButton;