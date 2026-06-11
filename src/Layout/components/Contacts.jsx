import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SocialMediaSection from "./SocialMediaSection";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_ksssc6p",
        //"YOUR_TEMPLATE_ID",
        "template_k0pmxxl",
        form.current,
        // "YOUR_PUBLIC_KEY",
        "qgTfm2ktaYMc1Q46X",
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        () => {
          alert("Failed ❌ Try Again");
        },
      );
  };

  return (
    <section className="bg-gray-100 py-10 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-4 rounded-xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6">
            Write Us <span className="text-orange-500">Something</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="user_name"
                required
                placeholder="Your Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter E-Mail"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="mobile"
                required
                placeholder="Mobile No."
                className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                name="address"
                required
                placeholder="Full Address"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <select
              name="service"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            >
            <option>Select Services</option>
            <option>Full Stack</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>AI/ML</option>
            <option>Social Media Marketing</option>
            </select>

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Submit Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-600 to-gray-600 text-white p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 border-b border-white-600 pb-2">
            Contact Info
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-white text-xl" />
              <div>
                <h4 className="font-semibold">Send E-Mail</h4>
                <p className="text-white-300">info@innovixtechnology.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-white text-xl" />
              <div>
                <h4 className="font-semibold">Call Anytime</h4>
                <p className="text-white-300">+91-120-4977413</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-white-500 text-xl" />
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-white-300">
                  C-35, 1st Floor, Sector-6, Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>
            <SocialMediaSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
