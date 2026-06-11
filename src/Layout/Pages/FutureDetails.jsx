import { motion } from "framer-motion";
import { FaRobot, FaCloud, FaCogs, FaChartLine } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const features = [
  {
    title: "Artificial Intelligence Solutions",
    desc: "Leverage AI to build intelligent systems that automate tasks and improve decision-making.",
    icon: FaRobot,
  },
  {
    title: "Machine Learning & Automation",
    desc: "Enable systems to learn from data and automate complex business processes.",
    icon: FaCogs,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "Deploy scalable and secure applications using cloud and DevOps practices.",
    icon: FaCloud,
  },
  {
    title: "Scalable Digital Transformation",
    desc: "Transform your business with future-ready digital solutions.",
    icon: FaChartLine,
  },
];

const FutureDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔹 HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Future of Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90"
        >
          The future belongs to intelligent systems powered by AI, Cloud, and Automation.
          Businesses are rapidly evolving by integrating smart technologies that enhance
          efficiency, scalability, and decision-making.
        </motion.p>
      </section>

      {/* 🔹 FEATURES SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Core Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
              >
                <Icon className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🔹 PROCESS FLOW */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          {["Data Input", "Processing", "AI Model", "Automation", "Result"].map((step, index, arr) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="bg-white px-5 py-3 rounded-lg shadow min-w-[120px]">
                {step}
              </div>

              {index !== arr.length - 1 && (
                <>
                  <span className="hidden md:block text-xl">➡️</span>
                  <span className="block md:hidden rotate-90 text-xl">➡️</span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 CTA SECTION */}
      <section className="bg-orange-500 text-white py-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-6"
        >
          Embrace the future with intelligent technology solutions.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold"
        >
          <NavLink to="/contact">Get Started </NavLink>
        </motion.button>
      </section>

    </div>
  );
};

export default FutureDetails;