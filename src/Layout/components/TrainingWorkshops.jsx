import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaLaptopCode } from "react-icons/fa";

const workshops = [
  {
    title: "Web Development Bootcamp",
    desc: "Learn full-stack development with real-world projects.",
    icon: FaLaptopCode,
  },
  {
    title: "Team Collaboration Training",
    desc: "Enhance teamwork and communication skills.",
    icon: FaUsers,
  },
  {
    title: "Expert Mentorship Sessions",
    desc: "Get guidance from industry professionals.",
    icon: FaChalkboardTeacher,
  },
];

export default function TrainingWorkshops() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Training Workshops
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Upskill yourself with our creative and industry-focused workshops.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Top Border Animation */}
                <span className="absolute top-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500"></span>

                {/* Icon */}
                <div className="text-4xl mb-4 text-blue-500">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md">
            Join Workshop
          </button>
        </motion.div>
      </div>
    </div>
  );
}
