import { useEffect, useState, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Aboutimg from "../../assets/images/why-choose.png";
import { NavLink } from "react-router-dom";

const BulletPoint = ({ text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center gap-3"
    >
      <CheckCircle className="text-orange-500 w-5 h-5" />
      <span className="text-black text-sm md:text-base">{text}</span>
    </motion.div>
  );
};

const Whychooseus = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 to-gray-200 py-12 md:py-16 px-4 sm:px-6 md:px-14 lg:px-14"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={startCount ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-semibold mb-2">
              — Why Choose Us
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold leading-snug">
              Innovix Technology for
              Client <span className="text-orange-500">Satisfaction</span>
            </h2>

            <p className="text-black mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
              Our ultimate goal is client satisfaction. We strive to deliver
              dependable domestic staffing solutions that make your company
              stress-free.
            </p>

            <div className="w-full h-px bg-gray-400 my-6"></div>

            {/* BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Verified & trained staff",
                "Quick and hassle-free hiring",
                "Affordable pricing",
                "Dedicated support team",
                "Customized staffing solutions",
                "Improve Client Requirements",
                "Sales Conversion & Deal Closure",
                "Relationship Management",
                "Coordination with Recruitment Team",
                "Market Research & Strategy",
              ].map((item, index) => (
                <BulletPoint key={index} text={item} delay={index * 0.1} />
              ))}
            </div>

            {/* BUTTON */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block"
            >
              <NavLink
                to="/contact"
                className="bg-orange-600 text-white hover:bg-orange-700 transition px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-sm md:text-base"
              >
                Contact Now
              </NavLink>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={startCount ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-50 p-4 rounded-2xl shadow-lg
              border-t-4 border-b-4 border-transparent
              hover:border-orange-500 transition-all duration-300"
            >
              <img
                src={Aboutimg}
                alt="Team discussion"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;