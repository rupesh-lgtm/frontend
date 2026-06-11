import { motion } from "framer-motion";
import { useState } from "react";
import CommonButton from "./CommonButton";

import aiinnovation from "../../assets/images/aiinnovation.png";
import web3technology from "../../assets/images/web-3.0-technology.png";
import Cloud from "../../assets/images/Cloud-technology.png";
import Cyber from "../../assets/images/Cyber-security.png";

const developments = [
  {
    title: "AI Innovation",
    slug: "ai-innovation",
    Subtitle: "Driving the Future with",
    image: aiinnovation,
    desc: "We empower businesses with cutting-edge Artificial Intelligence solutions that transform ideas into intelligent systems and real-world impact.",
  },
  {
    title: "Web 3.0",
    slug: "web-3",
    Subtitle: "Next Generation Internet Technology",
    image: web3technology,
    desc: "Web 3.0 is the next generation of the internet where users have control over their data.",
  },
  {
    title: "Cloud Evolution",
    slug: "cloud-evolution",
    Subtitle: "Scale with Power",
    image: Cloud,
    desc: "Empowering businesses with scalable, secure, and high-performance cloud solutions.",
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    Subtitle: "Secure Digital World",
    image: Cyber,
    desc: "Protecting your digital assets, systems, and data from cyber threats.",
  },
];

export default function DevelopmentsHome() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6">
      
      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        Future Developments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">

        {/* LEFT SIDE LIST */}
        <div className="space-y-4">
          {developments.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-4 sm:p-5 rounded-xl shadow-md transition-all duration-300 border-l-4 ${
                active === i
                  ? "bg-white border-orange-500 scale-[1.02]"
                  : "bg-gray-100 border-transparent"
              }`}
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-1">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {item.desc.split(" ").slice(0, 10).join(" ")}...
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 flex flex-col justify-center"
        >
          {/* TITLE */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
            {developments[active].Subtitle}
            <span className="text-orange-500">
              {" "}
              {developments[active].title}
            </span>
          </h2>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-xl mb-4">
            <motion.img
              key={developments[active].image}
              src={developments[active].image}
              alt={developments[active].title}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {developments[active].desc}
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CommonButton
              text="Explore Solutions"
              to={`/development/${developments[active].slug}`}
            />
            <CommonButton text="Get Started" to="/contact" />
          </div>

          {/* PROGRESS BAR */}
          <motion.div
            className="mt-6 h-1.5 bg-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}