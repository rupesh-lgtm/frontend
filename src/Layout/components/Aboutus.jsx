import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import aboutus from "../../assets/images/aboutus.png"

const features = [
  "Thoroughly Verified Candidates",
  "Skilled & Experienced Staff",
  "Easy Hiring Process",
  "Dedicated Customer Support",
  "Affordable & Transparent Pricing",
];
const missionVisionData = [
  {
    title: "Our Mission",
    desc: "Deliver innovative digital solutions that help businesses grow.",
    icon: FaBullseye,
    color: "bg-gray-100",
  },
  {
    title: "Our Vision",
    desc: "Become a global leader in technology and design.",
    icon: FaEye,
    color: "bg-gray-100",
  },
];
export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* ABOUT SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={aboutus}
          alt="about"
          className="rounded-2xl shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            At Innovix Technology, we are passionate about transforming ideas into powerful digital solutions. We combine innovation, technology, and strategy to help businesses grow, scale, and succeed in the modern digital world.
          </p>
          <p className="text-gray-600">
            Our mission is to combine creativity with technology to help brands achieve their goals in the digital world.
          </p>
        </motion.div>
      </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Hiring domestic help shouldn’t be stressful. We make it simple, safe,
          and reliable by connecting you with skilled professionals you can
          trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-2xl mb-3">✅</div>
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {missionVisionData.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className={`p-8 rounded-2xl shadow hover:shadow-xl transition text-center ${item.color}`}
      >
        <Icon className="text-4xl mx-auto mb-4 text-orange-500" />
        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
        <p className="text-gray-700">{item.desc}</p>
      </div>
    );
  })}
</div>

      {/* TEAM SECTION */}
      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt="team"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Team Member</h3>
              <p className="text-gray-500">Position</p>
            </motion.div>
          ))}
        </div>
      </section> */}
{/* STATS SECTION */}
      <section className="py-16 px-6 bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["100+ Projects", "50+ Clients", "5+ Years", "24/7 Support"].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold">{stat}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
