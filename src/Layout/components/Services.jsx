import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaEdit,
  FaAppStore,
} from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { NavLink } from "react-router-dom";

// ✅ Slug add kiya (IMPORTANT)
const features = [
  {
    title: "Frontend Innovation",
    slug: "frontend-innovation",
    desc: "Crafting modern, fast, and interactive user interfaces.",
    icon: FaCode,
  },
  {
    title: "Backend Scalability",
    slug: "backend-scalability",
    desc: "Robust server-side architecture with Node.js, APIs & microservices.",
    icon: FaServer,
  },
  {
    title: "Cloud & DevOps Integration",
    slug: "cloud-devops",
    desc: "Deploy scalable apps using AWS, Azure & cloud-native solutions.",
    icon: FaCloud,
  },
  {
    title: "Database Management",
    slug: "database-management",
    desc: "Efficient data handling with MongoDB, MySQL & modern databases.",
    icon: FaDatabase,
  },
  {
    title: "AI Solutions & Automation",
    slug: "ai-solutions",
    desc: "Integrate AI tools and automation for smarter applications.",
    icon: FaRobot,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "We design intuitive, engaging, and conversion-focused UI/UX.",
    icon: FaEdit,
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Grow your business using smart marketing strategies.",
    icon: FaRobot,
  },
  {
    title: "App Development",
    slug: "app-development",
    desc: "Build powerful mobile and web applications.",
    icon: FaAppStore,
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    desc: "Transform raw data into actionable insights with advanced analytics.",
    icon: BiAnalyse,
  },
  
];

export default function Services() {
  return (
    <div className="w-full font-sans">
      
      {/* SECTION */}
      <div className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <NavLink
                to={`/services/${item.slug}`}
                key={i}
                className="group"
              >
                <div
                  className="bg-gray-50 p-6 rounded-2xl shadow
                  border-t-4 border-b-4 border-transparent
                  group-hover:border-orange-500
                  transition-all duration-300
                  cursor-pointer group-hover:scale-105"
                >
                  <Icon className="text-3xl text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}