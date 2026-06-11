import { NavLink } from "react-router-dom";
import logo from "../../assets/images/footer.png";
import footerBg from "../../assets/images/slider1.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import SocialMediaSection from "../components/SocialMediaSection";
import LoginButton from "../components/LoginButton";

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-3 bg-no-repeat px-12 py-16 md:py-0 bg-cover bg-center">
      {/* Dark Overlay (IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-gray-600"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto pt-16 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">About Us</h3>
            <p className="text-sm leading-6 text-white">
              Innovix Technology is a performance-driven digital marketing and
              technology agency helping brands scale with smart strategies,
              innovative tools, and data-backed solutions.
            </p>
            <SocialMediaSection />
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
              Company
              <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#ff4d00]" />
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/service" },
                { name: "Contact Us", path: "/contact" },
                { name: "Creative & Design", path: "/services/creative-design" },
                { name: "Support & Maintenance", path: "/services/support-maintenance" },
                
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition hover:text-orange-400 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
                
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
              Services
              <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#ff4d00]" />
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                { name: "Developments", path: "/development" },
                { name: "Data & Analytics", path: "/services/data-analytics" },
                { name: "AI & Automation", path: "/services/ai-solutions" },
                { name: "Consulting & Strategy", path: "/services/consulting-strategy" },
                {name: "Term & Conditions", path: "/term-conditions" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition hover:text-orange-400 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <FaEnvelope className="text-[#ff4d00] mt-1" />
                info@innovixtechnology.com
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-[#ff4d00] mt-1" />
                +91-120-4977413
              </li>
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-[#ff4d00] mt-1" />
                C-35, 1st Floor, Sector-6, Noida, Uttar Pradesh, India
              </li>
               <li className="flex gap-3">
                <LoginButton />
               </li>
            </ul>
            
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white-700 bg-gray-600">
        <div className="max-w-6xl mx-auto px-6 py-1 flex flex-col md:flex-row items-center justify-between gap-4">
          <NavLink to="/">
            <img src={logo} alt="Innovix Technology" className="h-16 md:h-16 w-32 brightness-0 invert" />
          </NavLink>
          <p className="text-sm text-[#fff]">
            © 2026 <span className="text-orange-600"><NavLink to="https://www.innovixfintech.com/" target="_rupesh">Innovix Fintech</NavLink></span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
