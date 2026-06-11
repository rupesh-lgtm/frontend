import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
import Contacts from "../components/Contacts";
import Map from "../components/Map";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      
       {/* SEO */}
      <Helmet>
        <title>Contact Innovix Technology | IT Services & Solutions</title>
        <meta name="description" content="Contact Innovix Technology for IT services, software development, and business solutions. Get in touch with our expert team today." />
        <meta name="keywords" content="Innovix Technology, contact, IT services, software company, web development, business solutions" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Innovix Technology" />
        <meta property="og:description" content="Reach out to Innovix Technology for innovative IT solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbHero title="Contact" bgImage={aboutBg} />

      {/* About Page Content */}
      <section className="py-6 max-w-7xl mx-auto px-6 text-white overflow-x-hidden text-center bg-gradient-to-br from-orange-600 to-orange-500">
        <h2 className="text-3xl font-bold mb-4">Call-to-Action</h2>
        <p>
          Send us a message and we’ll respond within 24 hours.
        </p>
      </section>
      <Contacts />
      <Map />
    </div>
  );
};

export default Contact;
