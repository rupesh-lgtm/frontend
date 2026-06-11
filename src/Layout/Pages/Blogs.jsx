import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";

const API_URL = "http://localhost:5000/api/blogs";

// const API_URL = "https://innovixtechnology.com/api/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // ================= FETCH BLOGS API =================

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();

      // Only blog type
      const onlyBlogs = data.filter((item) => item.type === "blog");

      setBlogs(onlyBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= CATEGORIES =================

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ];

  // ================= FILTER BLOGS =================

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <BreadcrumbHero title="Blogs" bgImage={aboutBg} />

      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Latest Blogs
          </h1>

          <p className="text-gray-500 mt-2">
            Explore our latest articles & updates
          </p>
        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-3 mb-10 hidden">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-indigo-300"
                  : "bg-white text-gray-700 hover:bg-indigo-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading */}

        {loading ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              Loading Blogs...
            </h2>
          </div>
        ) : filteredBlogs.length > 0 ? (
          // ================= BLOG CARDS =================

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}

                {blog.image?.url && (
                  <img
                    src={blog.image.url || blog.image}
                    alt={blog.title.alt || "blog"}
                    className="w-full h-56 object-cover"
                  />
                )}

                {/* Content */}

                <div className="p-5">
                  <p className="text-indigo-600 font-semibold text-sm">
                    {blog.category}
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">
                    {blog.title}
                  </h2>

                  <div
                    className="text-gray-600 mt-3 text-sm leading-6 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.content,
                    }}
                  />

                  <Link
                    to={`/blogs/${blog.id}`}
                    className="inline-block mt-5 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // ================= EMPTY STATE =================

          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Blogs Found
            </h2>

            <p className="text-gray-500 mt-2">
              Please add some blogs to display here.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
