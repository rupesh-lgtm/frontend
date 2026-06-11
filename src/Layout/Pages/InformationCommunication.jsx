import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaNetworkWired, FaCloud, FaLock, FaMobileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: <FaNetworkWired size={30} />,
    title: "Network Infrastructure",
    desc: "Robust and scalable network solutions for seamless connectivity."
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Communication",
    desc: "Secure and efficient cloud-based communication systems."
  },
  {
    icon: <FaLock size={30} />,
    title: "Cyber Security",
    desc: "Protecting data and communication with advanced security solutions."
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Mobile & IoT",
    desc: "Smart mobile and IoT connectivity for modern businesses."
  }
];

const InformationCommunication = () => {
  return (
    <div className="bg-gray-200 text-black overflow-hidden">
          <Helmet>
          <title>
          Information & Communication Technology Services | Innovix Technology
          </title>

          <meta
          name="description"
          content="Innovix Technology provides advanced ICT solutions including cloud communication, network infrastructure, cybersecurity, and IoT services for modern businesses."
          />

          <meta
          name="keywords"
          content="ICT services, cloud communication, network solutions, cybersecurity, IoT solutions, Innovix Technology"
          />

          {/* Open Graph (Social Media SEO) */}
          <meta property="og:title" content="ICT Services | Innovix Technology" />
          <meta
          property="og:description"
          content="Empowering businesses with secure and scalable ICT solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com/information-communication-technology" />
          <meta property="og:image" content="https://yourdomain.com/ict-banner.jpg" />

          {/* Twitter SEO */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ICT Services | Innovix Technology" />
          <meta
          name="twitter:description"
          content="Advanced ICT solutions including cloud, security and networking."
          />
          </Helmet>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Information & Communication Technology
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Connecting the world with intelligent communication and digital transformation solutions.
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

        <div className="grid md:grid-cols-4 gap-8 text-white">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center bg-gray-200">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="mb-4">
            We deliver reliable ICT solutions that enhance communication, security, and digital transformation.
          </p>
          <ul className="space-y-3">
            <li>✔ High-Speed Connectivity</li>
            <li>✔ Secure Data Systems</li>
            <li>✔ Scalable Cloud Solutions</li>
            <li>✔ 24/7 Technical Support</li>
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 md:px-20 bg-gray-300 grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "500+", label: "Networks Built" },
          { number: "1M+", label: "Users Connected" },
          { number: "99.9%", label: "Uptime" },
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
      <section className="py-10 px-6 text-center bg-gray-400">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Connect the Future?
        </motion.h2>
        <p className="mb-6 text-gray-900">
          Partner with us to build powerful communication and digital networks.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white px-6 py-3 rounded-full"
        >
         <NavLink to="/contact"> Get Started</NavLink>
        </motion.button>
      </section>
    </div>
  );
};

export default InformationCommunication;
