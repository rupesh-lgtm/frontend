import { NavLink } from "react-router-dom";
import { useState } from "react";
import ai from "../../assets/images/news.png";
import ml from "../../assets/images/alml.png";
import healthcare from "../../assets/images/healthcare.png";
import Cybersecurity from "../../assets/images/Cybersecurity.png";
import clinicalintelligence from "../../assets/images/clinicalintelligence_cover.jpeg";
import pms from "../../assets/images/pms.webp";
import patient from "../../assets/images/patient.png";
import Healthcaresecure from "../../assets/images/Healthcare.png";
import patients from "../../assets/images/patients.png";
import pmshelth from "../../assets/images/pmshelth.png";
import Medical from "../../assets/images/Medical.png";
import Adopting from "../../assets/images/Adopting.png";
import Medical1 from "../../assets/images/Medical1.png";
import Healthcareneed from "../../assets/images/Healthcareneed.png";
import Healthcarewaiting from "../../assets/images/Healthcarewaiting.png";
import hmis from "../../assets/images/hmis.png";
import Codingerrors from "../../assets/images/Codingerrors.png";
import healthcareoperation from "../../assets/images/healthcareoperation.png";
import securityhelth from "../../assets/images/securityhelth.png";
export const news = [
  {
    id: "1",
    title: "Why Every Growing Business Needs ERP Today",
    date: "Edition 28 April 2026",
    desc: "The Future of Business is Integrated: Why ERP is No Longer Optional",
    image: ai,
  },
  {
    id: "2",
    title: "INNOVIX TECHNOLOGY NEWSLETTER",
    date: "Edition: 29 April 2026",
    desc: "At Innovix Technology, we empower businesses with cutting-edge IT solutions.",
    image: ml,
  },
  {
    id: "3",
    title: "Digital Transformation in Healthcare: What’s Changing in 2026",
    date: "Edition: 30 April 2026",
    desc: "Healthcare is undergoing a massive shift, driven by technology, innovation, and the growing demand for efficient patient care.",
    image: healthcare,
  },
  {
    id: "4",
    title: "Cybersecurity in Healthcare: Protecting Patient Trust",
    date: "Edition: 1 May 2026",
    desc: "In today’s digital-first world, healthcare is more connected than ever.",
    image: Cybersecurity,
  },
  {
    id: "5",
    title: "InnovixCare: The Future of Clinical Intelligence is Here",
    date: "Edition: 4 May 2026",
    desc: "Transforming Healthcare Delivery with 4-Step Clinical Precision, Global Localization, and Integrated Business Intelligence.",
    image: clinicalintelligence,
  },
  {
    id: "6",
    title:
      "Why Practice Management Systems Are the Backbone of Modern Indian Healthcare",
    date: "Edition: 5 May 2026",
    desc: "India’s healthcare ecosystem is evolving rapidly. With rising patient volumes, increasing operational complexity,",
    image: pms,
  },
  {
    id: "7",
    title:
      "From Waiting Rooms to Smart Care: How PMS Improves Patient Journeys",
    date: "Edition: 6 May 2026",
    desc: "In India’s fast-growing healthcare ecosystem, patient expectations are changing rapidly.",
    image: patient,
  },
  {
    id: "8",
    title: "Building Secure Healthcare Systems The IT Backbone Behind PMS",
    date: "Edition: 7 May 2026",
    desc: "In today’s digital healthcare landscape, technology is transforming the way hospitals and clinics operate.",
    image: Healthcaresecure,
  },
  {
    id: "9",
    title:
      "No More Long Queues: How PMS is Transforming Patient Access in India",
    date: "Edition: 8 May 2026",
    desc: "India’s healthcare sector is undergoing a major transformation. As patient expectations rise and healthcare facilities experience increasing pressure,",
    image: pms,
  },
  {
    id: "10",
    title: "Why Every Clinic Needs a Practice Management System",
    date: "Edition: 11 May 2026",
    desc: "In today’s fast-moving healthcare environment, clinics are expected to deliver faster service, better patient care.",
    image: patients,
  },
  {
    id: "11",
    title:
      "Newsletter: Why Healthcare Businesses Are Investing in Patient Management Systems (PMS)",
    date: "Edition: 12 May 2026",
    desc: "In today’s rapidly evolving healthcare environment, efficiency, patient satisfaction, and data- driven operations are becoming critical for success.",
    image: pmshelth,
  },
  {
    id: "12",
    title: "5 Healthcare Trends You Can’t Ignore in 2026",
    date: "Edition: 13 May 2026",
    desc: "And Why Practice Management Systems (PMS) Are Becoming Essential",
    image: pmshelth,
  },
  {
    id: "13",
    title: "Healthcare Needs to Be Modernized with the Help of PMS",
    date: "Edition: 14 May 2026",
    desc: "IThe healthcare industry is evolving rapidly, yet many hospitals and clinics still struggle with outdated systems, manual paperwork, long patient queues, and inefficient workflows.",
    image: pmshelth,
  },
  {
    id: "14",
    title:
      "Newsletter: The Role of PMS in Creating Paperless Healthcare Facilities",
    date: "Edition: 15 May 2026",
    desc: `The healthcare industry is rapidly moving toward digital transformation, and one of the
biggest changes shaping modern healthcare facilities is the shift from paper-based operations
to fully digital systems.`,
    image: pmshelth,
  },
  {
    id: "15",
    title: "How We Built a Resilient Medical Knowledge Base for the AI Era",
    date: "Edition: 19 May 2026",
    desc: `The healthcare industry is entering a new digital frontier one where Artificial Intelligence is no longer optional, but essential. From predictive diagnostics to automated workflows, AI is transforming how healthcare organizations operate`,
    image: Medical,
  },
  {
    id: "16",
    title: "🏥 Why Healthcare Providers Are Adopting AI Coding Assistants",
    date: "Edition: 21 May 2026",
    desc: `The healthcare industry is entering a new era of intelligent automation.
As hospitals and clinics continue to face rising patient volumes, administrative overload, claim denials, and increasing compliance requirements, traditional medical coding methods are no longer enough to support modern healthcare operations.`,
    image: Adopting,
  },
  {
    id: "17",
    title: "How Encryption is Redefining Healthcare Data Security",
    date: "Edition: 22 May 2026",
    desc: `The healthcare industry is undergoing a digital transformation like never before. From Electronic Health Records (EHRs) to AI-driven diagnostics and cloud-based hospital systems, patient data has become the backbone of modern healthcare`,
    image: Medical,
  },
  {
    id: "18",
    title: "The Role of Smart Bed Management in Modern Hospitals",
    date: "Edition: 25 May 2026",
    desc: `Optimizing Patient Care Through Intelligent Hospital Operations`,
    image: Medical1,
  },
  {
    id: "19",
    title: "Modern Healthcare Needs Modern Digital Infrastructure",
    date: "Edition: 26 May 2026",
    desc: `Healthcare is evolving faster than ever before. From patient expectations to operational efficiency, hospitals and clinics are under constant pressure to deliver smarter, faster, and more connected care`,
    image: Healthcareneed,
  },
  {
    id: "20",
    title: "Why Long Waiting Lines Are Killing Your Hospital’s Reputation",
    date: "Edition: 27 May 2026",
    desc: `In healthcare, every minute matters — not just in treatment, but in patient experience.Today’s patients expect hospitals to deliver fast, organized, and seamless care.`,
    image: Healthcarewaiting,
  },
  {
    id: "21",
    title: "How Smart HMIS Systems Give Doctors Their Time Back",
    date: "Edition: 29 May 2026",
    desc: `In today’s healthcare environment, doctors are expected to do far more than just treat
patients. Between clinical documentation, reviewing patient history, coordinating with labs,
writing prescriptions, and handling compliance requirements, physicians often spend more
time interacting with software than with the patients sitting in front of them.`,
    image: hmis,
  },
  {
    id: "22",
    title:
      "The Smooth Discharge Hub: How Automated Invoicing Gets Patients Home Faster",
    date: "Edition: 1 june 2026",
    desc: `In today&#39;s healthcare environment, patient experience extends far beyond clinical care. One of
the most overlooked yet critical moments in a patient&#39;s journey is the discharge process. Long
waiting times for billing, insurance verification, and final invoice generation can create
frustration for patients and their families, overshadowing an otherwise positive healthcare
experience.`,
    image: hmis,
  },
  {
    id: "23",
    title: "The Hidden Cost of Coding Errors in Healthcare",
    date: "Edition: 2 june 2026",
    desc: `Medical coding may happen behind the scenes, but its impact is felt across every aspect of healthcare operations. From claim processing and reimbursements to compliance and patient care, accurate coding serves as the foundation of a healthy revenue cycle.
Unfortunately, even small coding mistakes can create significant financial and operational challenges for healthcare organizations.
`,
    image: Codingerrors,
  },
  {
    id: "24",
    title:
      "How Digital Orthopaedics is Transforming Hand and Joint Rehabilitation",
    date: "Edition: 5 june 2026",
    desc: `From Recovery to Results: The Digital Revolution in Orthopaedic Care`,
    image: Codingerrors,
  },
  {
    id: "25",
    title:
      "Transforming Healthcare Operations through Intelligent Documentation",
    date: "Edition: 8 june 2026",
    desc: `In todays fast paced healthcare environment, accurate and timely documentation is no longer
just a compliance requirement it&#39;s a critical driver of operational excellence. As hospitals and
healthcare organizations continue their digital transformation journey, intelligent
documentation solutions are reshaping how patient information is captured, managed, and
utilized.`,
    image: healthcareoperation,
  },
  {
    id: "26",
    title:
      "Securing Healthcare in the Cloud: The Power of AWS-Integrated Healthcare Systems Why Security Matters More Than Ever",
    date: "Edition: 9 june 2026",
    desc: `Healthcare organizations are experiencing rapid digital transformation. From Electronic
Health Records (EHRs) and telemedicine platforms to patient portals and connected medical
devices, healthcare data is being generated and shared at unprecedented levels. While this
innovation improves patient care, it also increases the need for robust cybersecurity.`,
    image: securityhelth,
  },
];

export default function NewLetterList() {
  const [currentPage, setCurrentPage] = useState(1);

  // Per Page Items
  const itemsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedNews = news.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedNews.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto object-contain rounded-xl"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                {news.title}
              </h2>

              <p>
                <strong>{news.date}</strong>
              </p>

              <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
                {news.desc}
              </p>

              {/* Button */}
              <div className="mt-auto">
                <NavLink
                  to={`/newsletter/${news.id}`}
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
        {/* Prev Button */}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-white shadow disabled:opacity-50 hover:bg-gray-200"
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

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-white shadow disabled:opacity-50 hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
