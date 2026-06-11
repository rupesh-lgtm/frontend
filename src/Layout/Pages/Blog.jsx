import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
import BlogList from "../components/BlogList";
import { Helmet } from "react-helmet-async";
const Blog = () => {
  return (
    <>
     <Helmet>
        <title>Innovix Technology Blog | Latest Tech Insights</title>
        <meta
          name="description"
          content="Explore Innovix Technology blogs on AI, Cloud, Cybersecurity, and latest tech trends."
        />
        <meta
          name="keywords"
          content="Innovix Technology blog, AI blogs, cloud computing, cybersecurity articles"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Innovix Technology Blog" />
        <meta property="og:description" content="Latest insights on AI, Cloud & Tech" />
        <meta property="og:type" content="website" />
      </Helmet>
      <BreadcrumbHero title="Blog" bgImage={aboutBg} />

      <section className="py-6 max-w-7xl mx-auto px-6 text-center bg-orange-500">
        <h2 className="text-3xl font-bold mb-4 text-white">Bloging</h2>
        <p className="text-white">
          Innovix Technology is a performance-driven digital marketing and
          technology agency helping brands scale with smart strategies.
        </p>
      </section>
      <BlogList />
    </>
  );
};

export default Blog;
