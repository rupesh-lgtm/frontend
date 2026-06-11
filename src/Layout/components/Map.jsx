import { motion } from "framer-motion";

const Map = () => {
  return (
    <section className="py-10 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our <span className="text-orange-500">Location</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=28.5937,77.3265&z=18&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full h-[450px] border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;