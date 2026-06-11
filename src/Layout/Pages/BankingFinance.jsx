import { FaUniversity, FaChartLine, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: <FaUniversity size={30} />,
    title: "Retail Banking",
    desc: "Secure and efficient banking solutions for individuals and businesses."
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Investment Planning",
    desc: "Grow your wealth with smart and strategic investment solutions."
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Insurance Services",
    desc: "Protect your assets with our reliable insurance plans."
  },
  {
    icon: <FaMoneyBillWave size={30} />,
    title: "Loan & Credit",
    desc: "Flexible loan and credit options tailored to your needs."
  }
];

const BankingFinance = () => {

  return (
    <div className="bg-gray-50 text-gray-800">
    {/* // 🔥 SEO Component for Banking & Finance (Innovix Technology) */}
      <Helmet>
        <title>Banking & Finance Solutions | Innovix Technology | Software, Mobile App & AI Development Company in Noida, India</title>

        <meta
          name="description"
          content="Innovix Technology provides secure and scalable banking and finance solutions including digital banking, fintech services, investment planning, and financial transformation."
        />

        <meta
          name="keywords"
          content="banking solutions, finance services, fintech, digital banking, investment planning, Innovix Technology"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Banking & Finance Solutions | Innovix Technology" />
        <meta property="og:description" content="Secure fintech and banking solutions by Innovix Technology." />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banking & Finance Solutions | Innovix Technology" />
        <meta name="twitter:description" content="Innovative banking and financial services powered by Innovix Technology." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Banking & Finance Solutions</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering your financial future with secure, innovative, and scalable banking services.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
          alt="finance"
          className="rounded-2xl shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            We deliver trusted financial services with cutting-edge technology, ensuring your money is safe and your growth is guaranteed.
          </p>
          <ul className="space-y-3">
            <li>✔ Secure Transactions</li>
            <li>✔ 24/7 Customer Support</li>
            <li>✔ Advanced Analytics</li>
            <li>✔ Easy Loan Approvals</li>
          </ul>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 md:px-20 bg-blue-600 text-white grid md:grid-cols-4 gap-8 text-center">
        {[
          { number: "10+", label: "Years Experience" },
          { number: "500+", label: "Clients" },
          { number: "120+", label: "Projects" },
          { number: "24/7", label: "Support" }
        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold">{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-10 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Start Your Financial Journey Today</h2>
        <p className="mb-6 text-gray-600">Join us and take control of your financial future.</p>
        <NavLink to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Get Started
        </NavLink>
      </section>
    </div>
  );
};

export default BankingFinance;
