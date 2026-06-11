import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaSatellite, FaPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: <FaRocket size={30} />,
    title: "Space Technology",
    desc: "Advanced solutions for satellite systems and space exploration."
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Defense Systems",
    desc: "High-security defense solutions with cutting-edge technology."
  },
  {
    icon: <FaSatellite size={30} />,
    title: "Satellite Communication",
    desc: "Reliable and secure communication networks for global coverage."
  },
  {
    icon: <FaPlane size={30} />,
    title: "Aviation Engineering",
    desc: "Innovative aircraft design and aerospace engineering services."
  }
];

const AerospaceDefense = () => {
  return (
    <div className="bg-white text-black overflow-hidden">
 {/* SEO META */}
      <Helmet>
        <title>Aerospace & Defense Solutions | Innovix Technology</title>
        <meta
          name="description"
          content="Innovix Technology provides advanced aerospace and defense solutions including aviation systems, satellite technology, and defense engineering."
        />
        <meta
          name="keywords"
          content="aerospace solutions, defense technology, aviation systems, satellite communication, innovix technology"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Aerospace & Defense | Innovix Technology" />
        <meta property="og:description" content="Next-gen aerospace and defense solutions by Innovix Technology." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Aerospace & Defense Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-900">
            Powering the future of aviation, space exploration, and national security.
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
          Our Expertise
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-orange-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center"
            >
              <div className="text-white mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-white">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-black mb-4">
            We provide mission-critical aerospace and defense solutions with unmatched precision and reliability.
          </p>
          <ul className="space-y-3 text-black">
            <li>✔ Advanced Technology Integration</li>
            <li>✔ High-Level Security Standards</li>
            <li>✔ Global Reach & Support</li>
            <li>✔ Expert Engineering Team</li>
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 md:px-20 bg-gray-200 grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "15+", label: "Years Experience" },
          { number: "300+", label: "Projects" },
          { number: "50+", label: "Global Clients" },
          { number: "99%", label: "Success Rate" }
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
      <section className="py-10 px-6 text-center bg-gray-300">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Build the Future?
        </motion.h2>
        <p className="mb-6 text-black">
          Join us in shaping next-generation aerospace and defense innovations.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-orange-600 px-6 py-3 rounded-full text-white"
        >
          <NavLink to="/contact">Contact Us</NavLink>
        </motion.button>
      </section>
    </div>
  );
};

export default AerospaceDefense;
