import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/blogs";
  const BACKEND_BASE_URL = "http://localhost:5000";
  // const API_URL = "https://www.innovixtechnology.com/api/blogs";
  // const BACKEND_BASE_URL = "https://www.innovixtechnology.com";

  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogsPerPage = 3;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    type: "blog",
    content: "",
    image: "",
  });

  // ================= CKEDITOR IMAGE UPLOAD =================

  function uploadAdapter(loader) {
    return {
      upload: async () => {
        const file = await loader.file;
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({ default: reader.result });
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  // ================= FETCHING COMPONENT DATA =================

  useEffect(() => {
    fetchBlogs();
    const savedDark = JSON.parse(localStorage.getItem("darkMode")) || false;
    setDarkMode(savedDark);
    if (savedDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  // ================= DARK MODE THEME SYSTEM =================

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // ================= EVENT HANDLERS =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      content: data,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  // ================= FORM SUBMISSION =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("category", formData.category);
      formPayload.append("type", formData.type);
      formPayload.append("content", formData.content);

      if (formData.image && typeof formData.image !== "string") {
        formPayload.append("image", formData.image);
      }

      const url = editId ? `${API_URL}/${editId}` : API_URL;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: formPayload,
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(
          data.error || data.message || "Failed to process form changes.",
        );

      // Clean state normalization on finish
      setFormData({
        title: "",
        category: "",
        type: "blog",
        content: "",
        image: "",
      });
      setEditId(null);
      setShowForm(false);
      fetchBlogs();
    } catch (error) {
      console.error("Submit Error:", error);
      alert(error.message);
    }
  };

  // ================= DATA MUTATIONS (EDIT / DELETE) =================

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Deletion processing request failure");
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      category: blog.category,
      type: blog.type || "blog",
      content: blog.content,
      image: blog.image,
    });
    setEditId(blog.id);
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    logout();
    navigate("/");
  };

  const dynamicCategories = [
    "All",
    ...new Set(blogs.map((b) => b.category).filter(Boolean)),
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  // ================= PAGINATION MATHEMATICS =================

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-all">
      {/* Sidebar Layout Structure */}
      <div className="w-64 bg-indigo-700 dark:bg-gray-800 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
            setFormData({
              title: "",
              category: "",
              type: "blog",
              content: "",
              image: "",
            });
          }}
          className="w-full bg-white text-indigo-700 dark:bg-indigo-600 dark:text-white py-2 rounded mb-3 font-semibold hover:bg-gray-100 transition-colors"
        >
          Add Content
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full bg-gray-200 text-black dark:bg-gray-700 dark:text-white py-2 rounded mb-3"
        >
          Toggle Dark Mode
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 py-2 rounded font-semibold hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Container Workspace */}
      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Workspace</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage Blogs & Newsletters seamlessly.
            </p>
          </div>

          <div className="flex gap-3 md:hidden">
            <button
              onClick={() => {
                setShowForm(true);
                setEditId(null);
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              Dark
            </button>
          </div>
        </div>

        {/* Dynamic Categorization Navigation Bar */}
        <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-3">
          {dynamicCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Processing Grid Engine */}
        {currentBlogs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No matching content records found.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {blog.image && (
                    <img
                      src={
                        blog.image.startsWith("http")
                          ? blog.image
                          : `${BACKEND_BASE_URL}/${blog.image}`
                      }
                      alt={blog.title}
                      className="w-full h-52 object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/600x400?text=Image+Not+Found";
                      }}
                    />
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400">
                        {blog.category}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 uppercase font-bold">
                        {blog.type}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-2 line-clamp-1">
                      {blog.title}
                    </h3>
                    <div
                      className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 prose dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </div>
                </div>

                <div className="p-4 pt-0 flex gap-3">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="flex-1 bg-yellow-400 text-gray-900 font-medium py-1.5 rounded hover:bg-yellow-500 transition-colors text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="flex-1 bg-red-500 text-white font-medium py-1.5 rounded hover:bg-red-600 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Unified Input Modal System (Used for both Blogs & Newsletters) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 fallback-overlay">
          <div className="bg-white dark:bg-gray-800 w-full max-w-5xl rounded-xl p-6 relative overflow-y-auto max-h-[90vh] shadow-2xl">
            <button
              onClick={() => {
                setShowForm(false);
                setEditId(null);
              }}
              className="absolute top-3 right-4 text-2xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {editId ? "Edit Posting Entry" : "Create Content Entry"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* IMAGE PREVIEW STABILIZER */}
              {formData.image && (
                <div className="relative">
                  {/* <img
                    src={
                      typeof formData.image === "string"
                        ? formData.image.startsWith("http")
                          ? formData.image
                          : `${BACKEND_BASE_URL}/${formData.image}`
                        : URL.createObjectURL(formData.image)
                    }
                    alt="preview"
                    className="w-full h-52 object-cover rounded-lg border dark:border-gray-700"
                  /> */}
                  {/* <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, image: "" }))
                    }
                    className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    Remove Image
                  </button> */}
                </div>
              )}

              {/* <div>
                <label className="block text-xs font-bold uppercase mb-1 text-gray-500 dark:text-gray-400">
                  Featured Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border dark:border-gray-700 p-2 rounded bg-gray-50 dark:bg-gray-900"
                />
              </div> */}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1 text-gray-500 dark:text-gray-400">
                    Content Type Designation
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border dark:border-gray-700 p-2 rounded text-black bg-white dark:bg-gray-900 dark:text-white"
                  >
                    <option value="blog">Blog</option>
                    <option value="newsletter">Newsletter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1 text-gray-500 dark:text-gray-400">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. Technology, Health"
                    className="w-full border dark:border-gray-700 p-2 rounded text-black bg-white dark:bg-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1 text-gray-500 dark:text-gray-400">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Post heading headline..."
                  className="w-full border dark:border-gray-700 p-2 rounded text-black bg-white dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* INTEGRATED CKEDITOR RICH ENGINE */}
              <div>
                <label className="block text-xs font-bold uppercase mb-1 text-gray-500 dark:text-gray-400">
                  Body Content Text
                </label>
                <div className="bg-white text-black rounded-xl overflow-hidden border">
                  <CKEditor
                    editor={ClassicEditor}
                    data={formData.content}
                    onChange={handleEditorChange}
                    config={{
                      extraPlugins: [uploadPlugin],
                      toolbar: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "underline",
                        "fontColor",
                        "fontBackgroundColor",
                        "|",
                        "link",
                        "bulletedList",
                        "numberedList",
                        "|",
                        "uploadImage",
                        "insertTable",
                        "blockQuote",
                        "|",
                        "undo",
                        "redo",
                      ],
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all shadow-md"
              >
                {editId ? "Update Document Entry" : "Publish Document Entry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
