import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import girlImg from "../../assets/images/about1.png";
import CommonButton from "../components/CommonButton"

const WelcomeSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 lg:py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to{" "}
            <span className="text-orange-600">Innovix Technology</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mt-6 mb-6"></div>

          <h3 className="italic text-xl text-gray-700 mb-4">
            “Where Strategy Meets Measurable Growth”
          </h3>

          <p className="text-gray-600 leading-relaxed space-y-3 text-base mb-4">
            Innovix Technology helped us generate consistent, high-quality leads
            and significantly improve our overall online performance. Their
            strategic approach and data-driven execution delivered real results.
            The team is proactive, responsive, and easy to work with. They
            understand business goals and align marketing efforts accordingly.
            We highly recommend Innovix Technology for scalable growth
            solutions.
          </p>

          {/* Button */}
          <CommonButton text="About More" to="/about" />
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Orange Blob */}
          <div className="absolute w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-30 -bottom-6 -left-6"></div>

          {/* Circular Image */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full border-[10px] border-white shadow-2xl overflow-hidden">
            <img
              src={girlImg}
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Icon Overlay */}
          <div className="absolute bottom-10 left-10 bg-orange-600 text-white p-6 rounded-3xl shadow-xl">
            <span className="text-4xl font-bold">“</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
