import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "./CommonButton";
import ServiceNav from "./ServiceNav";
import Resources from "./Resources";
import Industries from "./Industries";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLOSE MENU FUNCTION (important)
  const handleClose = () => {
    setOpen(false);
    setServiceOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-18 md:h-14 lg:h-12 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink
              to="/"
              className="text-black hover:text-orange-500 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-black hover:text-orange-500 transition"
            >
              About
            </NavLink>

            <ServiceNav />
            <Industries />
            <Resources />

            <NavLink
              to="/contact"
              className="text-black hover:text-orange-500 transition"
            >
              Contact
            </NavLink>

            {/* Employee Login Button */}
            <a
              href="https://hrm.innovixtechnology.com/login/?next=/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center justify-center
              bg-orange-500 text-white
              hover:bg-orange-600
              transition-all duration-300
              px-4 xl:px-6
              py-2.5
              rounded-full
              font-medium
              text-sm
              whitespace-nowrap
            "
            >
              Employee Login
            </a>
          </div>

          {/* MOBILE/TABLET RIGHT SECTION */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Employee Login Button Mobile + Tablet */}
            <a
              href="https://hrm.innovixtechnology.com/login/?next=/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-orange-500 text-white
              hover:bg-orange-600
              transition-all duration-300
              px-3 sm:px-4
              py-2
              rounded-full
              text-xs sm:text-sm
              font-medium
              whitespace-nowrap
            "
            >
              Employee Login
            </a>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setOpen(!open)} className="text-black p-1">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-6 text-white">
              <NavLink to="/" onClick={handleClose}>
                Home
              </NavLink>

              <NavLink to="/about" onClick={handleClose}>
                About
              </NavLink>

              {/* SERVICES */}
              <div className="w-full">
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex justify-between items-center w-full font-medium"
                >
                  Services
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    serviceOpen ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col text-sm rounded-lg gap-1">
                    <NavLink
                      to="/services/data-analytics"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Data & Analytics
                    </NavLink>

                    <NavLink
                      to="/services/ai-solutions"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      AI & Automation
                    </NavLink>

                    <NavLink
                      to="/services/creative-design"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Creative & Design
                    </NavLink>

                    <NavLink
                      to="/services/consulting-strategy"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Consulting & Strategy
                    </NavLink>

                    <NavLink
                      to="/training-workshop"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Training & Workshop
                    </NavLink>

                    <NavLink
                      to="/services/support-maintenance"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Support & Maintenance
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* INDUSTRIES */}
              <div className="w-full">
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex justify-between items-center w-full font-medium"
                >
                  Industries
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      industriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    industriesOpen ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col text-sm rounded-lg gap-1">
                    <NavLink
                      to="/banking-finance"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Banking & Finance
                    </NavLink>

                    <NavLink
                      to="/aerospace-defense"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Aerospace & Defense
                    </NavLink>

                    <NavLink
                      to="/automotive-transportation"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Automotive & Transportation
                    </NavLink>

                    <NavLink
                      to="/energy-clean-technology"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Energy & Clean Technology
                    </NavLink>

                    <NavLink
                      to="/information-communication"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      ICT
                    </NavLink>

                    <NavLink
                      to="/manufacturing-logistics"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Manufacturing & Logistics
                    </NavLink>

                    <NavLink
                      to="/life-sciences-healthcare"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Healthcare
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* RESOURCES */}
              <div className="w-full">
                <button
                  onClick={() => setResourceOpen(!resourceOpen)}
                  className="flex justify-between items-center w-full font-medium"
                >
                  Resources
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      resourceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    resourceOpen ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col text-sm rounded-lg gap-1">
                    <NavLink
                      to="/blog"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/blogs"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Blogs
                    </NavLink>

                    <NavLink
                      to="/newsletter"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Newsletter
                    </NavLink>

                    <NavLink
                      to="/careers"
                      onClick={handleClose}
                      className="px-3 py-2 rounded hover:bg-orange-500 transition"
                    >
                      Careers
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to="/contact" onClick={handleClose}>
                Contact
              </NavLink>

              {/* Mobile Employee Login */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
