import { motion } from "framer-motion";
import { useState } from "react";

const workshops = [
  {
    title: "Full Stack Development",
    desc: "Learn MERN stack with real-world projects and deployment.",
    duration: "8 Weeks",
  },
  {
    title: "Frontend Development",
    desc: "Master React, Tailwind CSS, and UI/UX best practices.",
    duration: "6 Weeks",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Express, APIs, and database integration.",
    duration: "6 Weeks",
  },
  {
    title: "AI & Machine Learning",
    desc: "Introduction to AI models, Python, and real use cases.",
    duration: "10 Weeks",
  },
];

export default function TrainingWorkshops() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Training & Workshops
        </motion.h1>
        <p className="mt-4 text-lg">
          Upgrade your skills with industry-focused IT training programs
        </p>
      </div>

      {/* Workshops Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {workshops.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
            <p className="mt-3 text-blue-600 font-medium">{item.duration}</p>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Training?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">
          <div className="p-6 shadow rounded-xl">
            <h3 className="font-semibold text-lg">Expert Mentors</h3>
            <p className="text-gray-600 text-sm mt-2">Learn from industry professionals</p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <h3 className="font-semibold text-lg">Hands-on Projects</h3>
            <p className="text-gray-600 text-sm mt-2">Build real-world applications</p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <h3 className="font-semibold text-lg">Certification</h3>
            <p className="text-gray-600 text-sm mt-2">Get recognized certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
