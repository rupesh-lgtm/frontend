import BreadcrumbHero from "../components/BreadcrumbHero";
import development from "../../assets/images/development.png";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Delhi, India",
    type: "Full Time",
    desc: "React & Tailwind CSS experience required",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Full Time",
    desc: "Node.js & Database knowledge required",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Noida, India",
    type: "Part Time",
    desc: "Figma & modern UI skills required",
  },
];

const Careers = () => {
  return (
    <>
    <BreadcrumbHero title="Careers" bgImage={development} />
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
      <title>Careers at Innovix Technology | Jobs & Opportunities</title>
      <meta
        name="description"
        content="Join Innovix Technology and build your career in IT, development, design, and innovation. Explore job openings today."
      />
      <meta
        name="keywords"
        content="Innovix careers, IT jobs India, developer jobs, tech careers"
      />
      </Helmet>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Team 🚀
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are always looking for talented people to grow with us.
        </p>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Current Openings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                📍 {job.location} | {job.type}
              </p>
              <p className="text-gray-600 mb-4">{job.desc}</p>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="bg-white py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Join Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-2">💡 Growth</h3>
            <p>Learn and grow with industry experts.</p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🌍 Flexible Work</h3>
            <p>Remote and hybrid work options available.</p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🎯 Impact</h3>
            <p>Work on real-world impactful projects.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-6 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Didn’t find a suitable role?
        </h2>
        <p className="mb-6">
          Send us your resume and we’ll get back to you.
        </p>

        <NavLink to="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </NavLink>
      </section>

    </div>
    </>
    
  );
};

export default Careers;