import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaIndustry, FaTruckLoading, FaCogs, FaWarehouse } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: <FaIndustry size={30} />,
    title: "Smart Manufacturing",
    desc: "Advanced manufacturing systems with automation and AI integration."
  },
  {
    icon: <FaTruckLoading size={30} />,
    title: "Logistics Management",
    desc: "Optimized supply chain and transportation solutions."
  },
  {
    icon: <FaCogs size={30} />,
    title: "Process Automation",
    desc: "Streamlined industrial processes for maximum efficiency."
  },
  {
    icon: <FaWarehouse size={30} />,
    title: "Warehouse Solutions",
    desc: "Smart warehousing with real-time tracking and inventory control."
  }
];

const ManufacturingLogistics = () => {
  return (
    <div className="bg-gray-100 text-gray-800 overflow-hidden">
<Helmet>
  <title>Manufacturing & Logistics Solutions | Innovix Technology</title>
  
  <meta 
    name="description" 
    content="Innovix Technology provides smart manufacturing and logistics solutions including automation, supply chain optimization, warehouse management, and real-time tracking systems." 
  />
  
  <meta 
    name="keywords" 
    content="manufacturing solutions, logistics services, supply chain management, warehouse automation, Innovix Technology" 
  />

  {/* Open Graph */}
  <meta property="og:title" content="Manufacturing & Logistics | Innovix Technology" />
  <meta property="og:description" content="Smart manufacturing and logistics solutions for modern businesses." />
  <meta property="og:image" content="/images/manufacturing.jpg" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-black">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
          className="absolute w-full h-full object-cover opacity-50"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Manufacturing & Logistics
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Driving efficiency in manufacturing and supply chain with smart and scalable solutions.
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
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            We combine manufacturing excellence with logistics expertise to deliver seamless operations.
          </p>
          <ul className="space-y-3">
            <li>✔ End-to-End Supply Chain</li>
            <li>✔ Smart Automation</li>
            <li>✔ Real-Time Tracking</li>
            <li>✔ Cost Optimization</li>
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-10 px-6 md:px-20 bg-blue-600 text-white grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "25+", label: "Factories Supported" },
          { number: "1000+", label: "Shipments" },
          { number: "300+", label: "Clients" },
          { number: "24/7", label: "Operations" }
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
      <section className="py-5 px-6 text-center bg-gray-200 text-black">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Optimize Your Operations Today
        </motion.h2>
        <p className="mb-2">
          Partner with us for efficient manufacturing and logistics solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white px-6 py-3 rounded-full"
        >
          <NavLink to="/contact">Get Started</NavLink>
        </motion.button>
      </section>
    </div>
  );
};

export default ManufacturingLogistics;
