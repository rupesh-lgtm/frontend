import { i, link } from "framer-motion/client";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const servicesData = [
  {
    id: "custom",
    title: "Custom Software Development",
    desc: "We provide end-to-end custom software development solutions that help businesses establish a strong online presence, improve user engagement, and drive measurable growth. Our team builds fast, secure, scalable, and responsive software tailored to your business needs.",
    link: "/developments/custom",
  },
  {
    id: "enterprise",
    title: "Enterprise Software Solutions",
    desc: "Custom enterprise software solutions for large organizations.",
    link: "/developments/enterprise",
  },
  {
    id: "saas",
    title: "SaaS Application Development",
    desc: "Business automation solutions.",
    link: "/developments/saas",
  },
  {
    id: "desktop",
    title: "Desktop Application Development",
    desc: "Cross-platform desktop applications.",
    link: "/developments/desktop",
  },
  {
    id: "api",
    title: "API Development & Integration",
    desc: "Custom API development and integration services.",
    link: "/developments/api",
  },
];

const SoftwareDevelopment = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Software Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.slice(0, visibleCount).map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <NavLink to={`/developments/${service.id}`}>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              </NavLink>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        {visibleCount < servicesData.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
