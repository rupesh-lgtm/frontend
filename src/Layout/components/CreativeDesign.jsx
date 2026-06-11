import { motion } from "framer-motion";
import { useState } from "react";
import myVideo from "../../assets/videos/Future.mp4"
import { NavLink } from "react-router-dom";
import CommonButton from "../components/CommonButton"
export default function CreativeDesign() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "UI/UX Design",
      desc: "Beautiful and user-friendly interfaces",
    },
    {
      title: "Web Development",
      desc: "Modern and scalable web apps",
    },
    {
      title: "Brand Identity",
      desc: "Creative branding solutions",
    },
    {
      title: "Animation",
      desc: "Smooth and engaging animations",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-purple-100 py-16 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Creative Design Studio
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We build modern, creative, and animated experiences for your brand
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Top Border Animation */}
            <div
              className={`absolute top-0 left-0 h-1 w-full bg-orange-500 transition-all duration-300 ${
                hovered === i ? "opacity-100" : "opacity-0"
              }`}
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.desc}</p>

            {/* Hover Glow */}
            <div
              className={`absolute inset-0 bg-purple-100 opacity-0 transition duration-300 ${
                hovered === i ? "opacity-20" : "opacity-0"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Introducing Innovix Technology With Clients Experiences
          </h2>
          <p className="text-gray-600 mb-6">
            Partner with Innovix Technology and take your business to the next level with smart, reliable, and future-ready solutions..
          To become a global leader in technology solutions by continuously innovating and delivering excellence.
          </p>
          <CommonButton text="Get Started" to="/services/creative-design" />
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl h-64 md:h-80 shadow-xl overflow-hidden">
              <video controls className="w-full h-full rounded-2xl">
              <source src={myVideo} type="video/mp4" />
              </video>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-10 left-10 bg-white p-4 rounded-xl shadow-lg"
          >
            ✨ Creative
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-lg"
          >
            🚀 Modern
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
