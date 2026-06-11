import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
const NewsletterDetails = () => {
  const { id } = useParams();

  const API_URL = `http://localhost:5000/api/blogs/${id}`;
  const BACKEND_BASE_URL = "http://localhost:5000";
  // const API_URL = `http://innovixtechnology.com/api/blogs/${id}`;
  // const BACKEND_BASE_URL = "http://innovixtechnology.com";

  const [newsletter, setNewsletter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Newsletter not found");
        }

        const data = await res.json();
        setNewsletter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletter();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!newsletter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Newsletter Not Found</h2>

        <Link
          to="/newsletters"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Newsletters
        </Link>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbHero title="Newsletter Details" bgImage={aboutBg} />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Cover Image */}
          {/* {newsletter.image && (
          <img
            src={
              newsletter.image.startsWith("http")
                ? newsletter.image
                : `${BACKEND_BASE_URL}/${newsletter.image}`
            }
            alt={newsletter.title}
            className="w-full h-[400px] object-cover"
            onError={(e) => {
              e.target.src = "https://placehold.co/1200x600?text=Newsletter";
            }}
          />
        )} */}

          <div className="p-8">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {newsletter.category || "General"}
            </span>

            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {newsletter.title}
            </h1>

            <div className="text-sm text-gray-500 mb-6">
              Published on{" "}
              {newsletter.created_at && (
                <p className="text-gray-400 text-sm mt-3">
                  {new Date(newsletter.created_at).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* CKEditor Content */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: newsletter.content,
              }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-6">
          <Link
            to="/newsletters"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
          >
            ← Back to Newsletters
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsletterDetails;
