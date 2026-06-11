import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ServiceNav = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const services = [
    { id: 1, name: "Blogs", path: "/blog" },
    { id: 2, name: "Careers", path: "/careers" },
    { id: 3, name: "NewsLetter", path: "/newsletter" },
    // { id: 4, name: "NewsLetters", path: "/newsletters" },
    // { id: 5, name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="px-0 py-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className="relative"
          onMouseEnter={() => setActiveMenu("services")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="flex items-center gap-1 text-black hover:text-orange-400">
            Resources
            <ChevronDown
              size={16}
              className={`transition-transform ${
                activeMenu === "services" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {activeMenu === "services" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 mt-1 w-56 bg-black rounded-lg shadow-lg overflow-hidden"
              >
                {services.map((service) => (
                  <NavLink
                    key={service.id}
                    to={service.path}
                    className="block px-2 py-3 text-sm text-white hover:bg-orange-500"
                  >
                    {service.name}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default ServiceNav;
