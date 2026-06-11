import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaCar, FaTruck, FaShippingFast, FaTools } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: <FaCar size={30} />,
    title: "Automotive Solutions",
    desc: "Next-gen vehicle solutions with advanced engineering and design."
  },
  {
    icon: <FaTruck size={30} />,
    title: "Logistics & Transport",
    desc: "Efficient and reliable transportation and logistics services."
  },
  {
    icon: <FaShippingFast size={30} />,
    title: "Fleet Management",
    desc: "Smart fleet tracking and management for better operations."
  },
  {
    icon: <FaTools size={30} />,
    title: "Vehicle Maintenance",
    desc: "Comprehensive maintenance and repair services."
  }
];

const AutomotiveTransportation = () => {
  return (
    <div className="bg-gray-100 text-gray-800 overflow-hidden">
     <Helmet>
        <title>Automotive & Transportation Services | Innovix Technology</title>
        <meta
          name="description"
          content="Innovix Technology provides advanced automotive and transportation solutions including logistics, fleet management, and smart mobility systems."
        />
        <meta
          name="keywords"
          content="automotive services, transportation solutions, fleet management, logistics company, innovix technology"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Automotive & Transportation | Innovix Technology" />
        <meta property="og:description" content="Smart mobility and logistics solutions by Innovix Technology." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763"
          className="absolute w-full h-full object-cover opacity-50"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Automotive & Transportation
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Driving innovation in mobility, logistics, and smart transportation systems.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center bg-white">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            We deliver innovative automotive and transportation solutions that ensure efficiency, safety, and performance.
          </p>
          <ul className="space-y-3">
            <li>✔ Smart Mobility Solutions</li>
            <li>✔ Advanced Tracking Systems</li>
            <li>✔ Cost Efficient Logistics</li>
            <li>✔ Expert Technical Team</li>
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-6 px-6 md:px-20 bg-blue-600 text-white grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "12+", label: "Years Experience" },
          { number: "400+", label: "Fleet Managed" },
          { number: "200+", label: "Clients" },
          { number: "24/7", label: "Support" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold">{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-10 px-6 text-center bg-gray-200 text-black">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Move Forward?
        </motion.h2>
        <p className="mb-6 text-gray-900">
          Partner with us for smarter and faster transportation solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-orange-600 px-6 py-3 rounded-full"
        >
          <NavLink to="/contact">Get Started</NavLink>
        </motion.button>
      </section>
    </div>
  );
};

export default AutomotiveTransportation;
