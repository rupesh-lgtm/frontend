import { i } from "framer-motion/client";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const servicesData = [
  {
    id: "web",
    title: "Web Development",
    desc: "We provide end-to-end web development solutions that help businesses establish a strong online presence, improve user engagement, and drive measurable growth. Our team builds fast, secure, scalable, and responsive websites tailored to your business needs.",
    link: "/services/web",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    desc: "Android & iOS applications.",
  },
  {
    id: "software",
    title: "Software Development",
    desc: "Business automation solutions.",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    desc: "AWS, Azure deployment.",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "Creative user interfaces.",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    desc: "SEO & paid campaigns.",
  },
  { id: "ai", title: "AI Development", desc: "Machine learning solutions." },
  {
    id: "cyber",
    title: "Cyber Security",
    desc: "Security audits & protection.",
  },
  {
    id: "devops",
    title: "DevOps Services",
    desc: "CI/CD automation pipelines.",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    desc: "Data insights and visualization.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    desc: "Online store development.",
  },
  {
    id: "automation",
    title: "AI & Automation",
    desc: "AI-powered automation tools.",
  },
  {
    id: "digital",
    title: "Digital Marketing & IT Support",
    desc: "Integrated digital marketing and IT support services.",
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    desc: "AWS, Azure deployment.",
  },
];

const Servicesss = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">All Services</h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.slice(0, visibleCount).map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <NavLink to={`/services/${service.id}`}>
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

export default Servicesss;
