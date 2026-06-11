import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
const API_URL = "http://localhost:5000/api/blogs";
// const API_URL = "https://innovixtechnology.com/api/blogs";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH SINGLE BLOG =================

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }

      const data = await response.json();

      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700">
          Loading Blog...
        </h2>
      </div>
    );
  }

  // ================= NO BLOG FOUND =================

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Blog Not Found</h2>

        <p className="text-gray-500 mt-2">
          The blog you are looking for does not exist.
        </p>

        <Link
          to="/blogs"
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbHero title="Blog" bgImage={aboutBg} />

      <section className="py-6 max-w-7xl mx-auto px-6 text-center bg-orange-500">
        <h2 className="text-3xl font-bold mb-4 text-white">Bloging</h2>
        <p className="text-white">
          Innovix Technology is a performance-driven digital marketing and
          technology agency helping brands scale with smart strategies.
        </p>
      </section>
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Blog Image */}

          {blog.image?.url && (
            <img
              src={blog.image.url || blog.image}
              alt={blog.title.alt || "blog"}
              className="w-full h-[400px] object-cover"
            />
          )}

          {/* Blog Content */}

          <div className="p-6 sm:p-10">
            {/* Category */}

            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">
              {blog.category}
            </p>

            {/* Title */}

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-3 leading-tight">
              {blog.title}
            </h1>

            {/* Date */}

            {blog.created_at && (
              <p className="text-gray-400 text-sm mt-3">
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
            )}

            {/* Content */}

            <div
              className="mt-8 text-gray-700 leading-8 text-lg prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />

            {/* Back Button */}

            <div className="mt-10">
              <Link
                to="/blogs"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
