import { useState } from "react";
import { NavLink } from "react-router-dom";
import digital from "../../assets/images/DigitalLandscape.png";
import post from "../../assets/images/Postpartumrecovery.png";
import ai from "../../assets/images/aisolutionsautomation.png";
import pms from "../../assets/images/pms.png";
import automation from "../../assets/images/automation-in-healthcare-header.jpeg";
import phi from "../../assets/images/phi.png";
import idhm from "../../assets/images/idhm.png";
import hms from "../../assets/images/hms.png";
export const blogs = [
  {
    id: "1",
    title: "AI & Machine Learning in Healthcare",
    desc: "Transforming the US Medical Landscape",
    image: ai,
  },
  {
    id: "2",
    title:
      "How Digital Innovation Can Support Girls Through Postpartum Recovery",
    desc: "In today’s fast-evolving digital landscape, technology is not just transforming businesses",
    image: post,
  },
  {
    id: "3",
    title: "Clinical Trials in the Digital Landscape",
    desc: "Transforming Research for the Future",
    image: digital,
  },
  {
    id: "4",
    title: "Practice Management System (PMS)",
    desc: "The Backbone of Modern Business Efficiency",
    image: pms,
  },
  {
    id: "5",
    title: "Automation in Healthcare IT",
    desc: "How PMS Reduces Manual Workloads",
    image: automation,
  },
  {
    id: "6",
    title:
      "PHI in Healthcare: Why Protecting Patient Information Matters More Than Ever",
    desc: "In today’s digital healthcare environment, patient information moves faster than ever before. Hospitals, clinics, diagnostic centers, and healthcare providers rely on electronic systems to store, manage, and share sensitive data.",
    image: phi,
  },
  {
    id: "7",
    title:
      "India’s Digital Health Mission and the Expanding Role of HMS Providers",
    desc: "India’s healthcare industry is stepping into a new digital era. With the rapid growth of healthcare technology and government-led initiatives, hospitals and healthcare institutions are transforming the way they deliver patient care",
    image: idhm,
  },
  {
    id: "8",
    title: "From Handwritten Records to Smart Healthcare: Why HMS Matters",
    desc: "Healthcare has evolved dramatically over the years. What once depended heavily on handwritten patient files, manual billing systems, and physical record rooms is now transitioning into a digitally connected ecosystem",
    image: hms,
  },
  {
    id: "9",
    title:
      "The End of Manual Patient Registration: Why ABHA Integration Matters",
    desc: "For decades, patient registration has been one of the most time consuming processes in healthcare. Long queues, repetitive paperwork, manual data entry, and frequent errors have slowed down patient onboarding and increased the workload for hospital staff. As healthcare embraces digital transformation, the need for a faster, smarter, and more accurate registration process has become essential.",
    image: hms,
  },
];

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full object-contain rounded-xl"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
                {blog.desc}
              </p>

              {/* Button */}
              <div className="mt-auto">
                <NavLink
                  to={`/blog/${blog.id}`}
                  className="inline-block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
        {/* Prev */}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg shadow transition ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
