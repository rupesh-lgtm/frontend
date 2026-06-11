import React from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaWind, FaLeaf, FaBolt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const services = [
  {
    icon: <FaSolarPanel size={30} />,
    title: "Solar Energy",
    desc: "Sustainable solar power solutions for homes and industries."
  },
  {
    icon: <FaWind size={30} />,
    title: "Wind Energy",
    desc: "Efficient wind power systems for clean electricity generation."
  },
  {
    icon: <FaLeaf size={30} />,
    title: "Green Solutions",
    desc: "Eco-friendly technologies to reduce carbon footprint."
  },
  {
    icon: <FaBolt size={30} />,
    title: "Energy Storage",
    desc: "Advanced battery systems for reliable energy storage."
  }
];

const EnergyCleanTech = () => {
  return (
    <div className="bg-green-50 text-gray-800 overflow-hidden">
      <Helmet>
      <title>Energy & Clean Technology Services | Innovix Technology</title>

      <meta 
      name="description" 
      content="Innovix Technology provides advanced energy and clean technology solutions including solar, wind, and sustainable energy systems for a greener future." 
      />

      <meta 
      name="keywords" 
      content="energy solutions, clean technology, solar energy, wind energy, renewable energy, Innovix Technology, green energy services" 
      />

      <meta name="author" content="Innovix Technology" />

      {/* Open Graph */}
      <meta property="og:title" content="Energy & Clean Technology | Innovix Technology" />
      <meta property="og:description" content="Sustainable energy solutions powered by Innovix Technology." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourwebsite.com/energy-clean-technology" />
      <meta property="og:image" content="https://yourwebsite.com/energy.jpg" />

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Energy & Clean Technology | Innovix Technology" />
      <meta name="twitter:description" content="Innovative clean energy solutions for a sustainable future." />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-orange-500">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Energy & Clean Technology
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-100">
            Powering a sustainable future with renewable energy and clean tech innovations.
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
          Our Solutions
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
              <div className="text-green-600 mb-4 flex justify-center">
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
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            We are committed to delivering sustainable energy solutions that drive efficiency and environmental responsibility.
          </p>
          <ul className="space-y-3">
            <li>✔ Renewable Energy Expertise</li>
            <li>✔ Eco-Friendly Technologies</li>
            <li>✔ Cost-Effective Solutions</li>
            <li>✔ Future-Ready Infrastructure</li>
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-10 px-6 md:px-20 bg-orange-500 text-white grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "20+", label: "Projects" },
          { number: "100MW+", label: "Energy Generated" },
          { number: "50+", label: "Clients" },
          { number: "100%", label: "Green Solutions" }
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
      <section className="py-10 px-6 text-center bg-gray-900 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Build a Greener Tomorrow
        </motion.h2>
        <p className="mb-6">
          Partner with us to embrace clean and renewable energy solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          <NavLink to="/contact">Get Started</NavLink>
        </motion.button>
      </section>
    </div>
  );
};

export default EnergyCleanTech;
