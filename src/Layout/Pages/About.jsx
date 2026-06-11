import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
import Testimonials from "../components/Testimonials";
import Aboutus from "../components/Aboutus";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (

    <>
     {/* SEO */}
      <Helmet>
        <title>About Us | Innovix Technology | Software, Mobile App & AI Development Company in Noida, India</title>
        <meta
          name="description"
          content="Learn about Innovix Technology – a leading provider of innovative IT solutions, digital transformation, and cutting-edge technology services."
        />
        <meta
          name="keywords"
          content="Innovix Technology, IT company, digital transformation, software development, technology services"
        />
      </Helmet>

      <BreadcrumbHero title="About Us" bgImage={aboutBg} />

      <Aboutus />
      <Testimonials />
    </>
  );
};

export default About;
