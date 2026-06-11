import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect personal information such as your name, email address, phone number, and usage data when you interact with our website.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to improve our services, personalize user experience, and communicate important updates.",
  },
  {
    title: "Cookies Policy",
    content:
      "We use cookies to enhance user experience and analyze website traffic. You can disable cookies through your browser settings.",
  },
  {
    title: "Data Security",
    content:
      "We implement strong security measures to protect your personal data from unauthorized access or misuse.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use third-party services like analytics tools or payment gateways which have their own privacy policies.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your personal information at any time.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* SEO */}
      <Helmet>
        <title>Privacy Policy | Innovix Technology</title>
        <meta
          name="description"
          content="Read the privacy policy of Innovix Technology. Learn how we collect, use, and protect your data securely."
        />
        <meta
          name="keywords"
          content="privacy policy, Innovix Technology, data protection, security, user data"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c')] bg-cover bg-center opacity-40"
        />

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-5xl font-bold bg-gray-200 p-3 text-black"
        >
          Privacy Policy
        </motion.h1>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-lg text-gray-600 text-center"
        >
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information.
        </motion.p>

        <div className="space-y-8">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-teal-600">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default PrivacyPolicy;