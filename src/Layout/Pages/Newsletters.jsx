import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
const Newsletters = () => {
  const API_URL = "http://localhost:5000/api/blogs";
  const BACKEND_BASE_URL = "http://localhost:5000";

  // const API_URL = "https://innovixtechnology.com/api/blogs";
  // const BACKEND_BASE_URL = "https://innovixtechnology.com";

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const newslettersPerPage = 3; // Har page par 3 cards dikhane ke liye

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch content");
        const data = await res.json();

        // Kahali un posts ko filter karein jinka type 'newsletter' hai
        const onlyNewsletters = data.filter(
          (item) => item.type && item.type.toLowerCase() === "newsletter",
        );
        setNewsletters(onlyNewsletters);
      } catch (error) {
        console.error("Error fetching newsletters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  // ================= PAGINATION LOGIC =================
  const indexOfLast = currentPage * newslettersPerPage;
  const indexOfFirst = indexOfLast - newslettersPerPage;
  const currentNewsletters = newsletters.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(newsletters.length / newslettersPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
          Loading Newsletters...
        </p>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbHero title="NewsLetter" bgImage={aboutBg} />

      <section className="py-6 max-w-7xl mx-auto px-6 text-center bg-orange-500">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Latest NewsLetter
        </h2>
        <p className="text-white">
          Innovix Technology is a performance-driven digital marketing and
          technology agency helping brands scale with smart strategies.
        </p>
      </section>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-2">
              Our Public Newsletters
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with our latest newsletter editions and resources.
            </p>
          </header>

          {/* Newsletters Grid Engine */}
          {currentNewsletters.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No newsletters published yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentNewsletters.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div>
                    {item.image && (
                      <img
                        src={
                          item.image.startsWith("http")
                            ? item.image
                            : `${BACKEND_BASE_URL}/${item.image}`
                        }
                        alt={item.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://placehold.co/600x400?text=Newsletter+Cover";
                        }}
                      />
                    )}
                    <div className="p-5">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                        {item.category || "General"}
                      </span>
                      <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white line-clamp-2">
                        {item.title}
                      </h3>
                      {/* Rich text snippet limitation */}
                      <div
                        className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/newsletters/${item.id}`}
                      className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors text-sm shadow-sm"
                    >
                      Read Full Edition
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Newsletters;
