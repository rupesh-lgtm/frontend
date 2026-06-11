import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaHeartbeat, FaFlask, FaHospital, FaUserMd } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: <FaHeartbeat size={30} />,
    title: "Patient Care",
    desc: "Advanced healthcare solutions focused on patient safety and care."
  },
  {
    icon: <FaFlask size={30} />,
    title: "Life Sciences Research",
    desc: "Innovative research and development in pharmaceuticals and biotech."
  },
  {
    icon: <FaHospital size={30} />,
    title: "Hospital Management",
    desc: "Smart hospital systems for efficient operations and management."
  },
  {
    icon: <FaUserMd size={30} />,
    title: "Medical Expertise",
    desc: "Experienced professionals delivering world-class medical services."
  }
];

const LifeSciencesHealthcare = () => {
  return (
    <div className="bg-blue-50 text-gray-800 overflow-hidden">
<Helmet>
  <title>Life Sciences & Healthcare Solutions | Innovix Technology</title>

  <meta 
    name="description" 
    content="Innovix Technology provides advanced life sciences and healthcare solutions including hospital management, biotech innovation, and patient care systems." 
  />

  <meta 
    name="keywords" 
    content="life sciences, healthcare solutions, hospital management system, biotech services, medical technology, Innovix Technology" 
  />

  <meta name="author" content="Innovix Technology" />

  {/* Open Graph */}
  <meta property="og:title" content="Life Sciences & Healthcare | Innovix Technology" />
  <meta property="og:description" content="Transforming healthcare with innovative technology and research-driven solutions." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/life-sciences-healthcare" />
  <meta property="og:image" content="https://yourwebsite.com/healthcare.jpg" />
</Helmet>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-orange-500">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Life Sciences & Healthcare
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-100">
            Transforming healthcare with innovation, research, and patient-centric solutions.
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
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            We combine healthcare expertise with cutting-edge technology to improve patient outcomes and research innovation.
          </p>
          <ul className="space-y-3">
            <li>✔ Patient-Centric Approach</li>
            <li>✔ Advanced Medical Technology</li>
            <li>✔ Research-Driven Solutions</li>
            <li>✔ Trusted Healthcare Experts</li>
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-6 px-6 md:px-20 bg-gray-300 text-black grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "100+", label: "Healthcare Projects" },
          { number: "50+", label: "Hospitals" },
          { number: "1M+", label: "Patients Served" },
          { number: "24/7", label: "Care Support" }
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
      <section className="py-6 px-6 text-center bg-gray-400 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Transform Healthcare Together
        </motion.h2>
        <p className="mb-6 ">
          Join us in delivering innovative and life-saving healthcare solutions.
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

export default LifeSciencesHealthcare;
