import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/people/Innovix-Technology-Pvt-Ltd/61577428696679/",
    bg: "bg-[#3b5998]",
  },
  // {
  //   id: 2,
  //   icon: <FaTwitter />,
  //   link: "https://twitter.com",
  //   bg: "bg-[#1DA1F2]",
  // },
  {
    id: 3,
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@InnovixTechnology",
    bg: "bg-[#FF0000]",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/innovix-technology-pvt-ltd/",
    bg: "bg-[#0A66C2]",
  },
  {
    id: 5,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/technologyinnovix/",
    bg: "bg-[#0A66C2]",
  },
];

const SocialMediaSection = () => {
  return (
    <section className="px-0 py-4">
      <div className="max-w-4xl mx-auto flex justify-left">
        <div className="flex gap-4">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`${item.bg} bg-gray-700 p-3 rounded-full hover:bg-orange-500 transition`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
