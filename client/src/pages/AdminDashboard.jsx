import React, { useState, useEffect, lazy } from "react";
// Lazy load admin subpages for code splitting
const AdminProducts = lazy(() => import("./AdminProducts.jsx"));
const AdminCourses = lazy(() => import("./AdminCourses.jsx"));
const AdminUsers = lazy(() => import("./AdminUsers.jsx"));
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("blogs");
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [courseForm, setCourseForm] = useState({ title: "", price: "", duration: "", published: false });
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [courses, setCourses] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editBlogSlug, setEditBlogSlug] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    published: false,
    coverImage: undefined,
  });
  const [blogError, setBlogError] = useState("");
  const [blogLoading, setBlogLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchData();
  }, [token]);

  const fetchData = async () => {
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [blogRes, courseRes, consultRes] = await Promise.all([
        fetch(`${API_URL}/blogs`, { headers }),
        fetch(`${API_URL}/courses`, { headers }),
        fetch(`${API_URL}/consultations`, { headers }),
      ]);

      if (blogRes.ok) setBlogs(await blogRes.json());
      if (courseRes.ok) setCourses(await courseRes.json());
      if (consultRes.ok) setConsultations(await consultRes.json());
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleBlogChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setBlogFormData({
        ...blogFormData,
        [name]: files[0],
      });
    } else {
      setBlogFormData({
        ...blogFormData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setBlogError("");
    setBlogLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", blogFormData.title);
      formData.append("slug", blogFormData.slug);
      formData.append("excerpt", blogFormData.excerpt);
      formData.append("content", blogFormData.content);
      formData.append("author", blogFormData.author);
      formData.append("tags", blogFormData.tags);
      formData.append("published", blogFormData.published);
      if (blogFormData.coverImage) {
        formData.append("coverImage", blogFormData.coverImage);
      }
      const response = await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create blog");
      }
      // Reset form and refresh blogs
      setBlogFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "",
        tags: "",
        published: false,
        coverImage: undefined,
      });
      setShowBlogForm(false);
      fetchData();
    } catch (err) {
      setBlogError(err.message);
    } finally {
      setBlogLoading(false);
    }
  };

  // Blog edit and delete handlers
  const handleEditBlog = (blog) => {
    setEditBlogSlug(blog.slug);
    setBlogFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
      tags: blog.tags ? (Array.isArray(blog.tags) ? blog.tags.join(", ") : blog.tags) : "",
      published: blog.published,
      coverImage: undefined,
    });
    setShowEditModal(true);
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setBlogError("");
    setBlogLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", blogFormData.title);
      formData.append("slug", blogFormData.slug);
      formData.append("excerpt", blogFormData.excerpt);
      formData.append("content", blogFormData.content);
      formData.append("author", blogFormData.author);
      formData.append("tags", blogFormData.tags);
      formData.append("published", blogFormData.published);
      if (blogFormData.coverImage) {
        formData.append("coverImage", blogFormData.coverImage);
      }
      const response = await fetch(`${API_URL}/blogs/${editBlogSlug}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update blog");
      }
      setShowEditModal(false);
      setEditBlogSlug(null);
      setBlogFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "",
        tags: "",
        published: false,
        coverImage: undefined,
      });
      fetchData();
    } catch (err) {
      setBlogError(err.message);
    } finally {
      setBlogLoading(false);
    }
  };


  const handleDeleteBlog = async (blogSlug) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const response = await fetch(`${API_URL}/blogs/${blogSlug}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to delete blog");
      toast.success("Blog deleted successfully");
      fetchData();
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <>
      {/* Edit Blog Modal (must be outside function body, inside render tree) */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative animate-fadeIn">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-customdarkblue text-2xl"
              onClick={() => { setShowEditModal(false); setEditBlogSlug(null); }}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Edit Blog Post</h3>
            {blogError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {blogError}
              </div>
            )}
            <form onSubmit={handleUpdateBlog} className="space-y-4" encType="multipart/form-data">
              <div>
                <label className="block mb-1 font-medium">Cover Image (leave blank to keep current)</label>
                <input
                  type="file"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleBlogChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Blog Title"
                  value={blogFormData.title}
                  onChange={handleBlogChange}
                  required
                  className="px-3 py-2 border rounded"
                />
                <input
                  type="text"
                  name="slug"
                  placeholder="URL Slug"
                  value={blogFormData.slug}
                  onChange={handleBlogChange}
                  required
                  className="px-3 py-2 border rounded"
                />
              </div>
              <input
                type="text"
                name="author"
                placeholder="Author Name"
                value={blogFormData.author}
                onChange={handleBlogChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                name="excerpt"
                placeholder="Blog Excerpt (brief summary)"
                value={blogFormData.excerpt}
                onChange={handleBlogChange}
                required
                rows="2"
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                name="content"
                placeholder="Full Blog Content"
                value={blogFormData.content}
                onChange={handleBlogChange}
                required
                rows="6"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="tags"
                placeholder="Tags (comma-separated)"
                value={blogFormData.tags}
                onChange={handleBlogChange}
                className="w-full px-3 py-2 border rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="published"
                  checked={blogFormData.published}
                  onChange={handleBlogChange}
                  className="w-4 h-4"
                />
                <span>Publish immediately</span>
              </label>
              <button
                type="submit"
                disabled={blogLoading}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {blogLoading ? "Updating..." : "Update Blog Post"}
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="bg-customdarkblue text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-4 mb-6 border-b">
          <input
            type="text"
            placeholder={`Search ${activeTab}`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-3 py-2 border rounded mb-2 mr-4"
            style={{ minWidth: 200 }}
          />
          {["blogs", "courses", "products", "users", "consultations"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-customdarkblue text-customdarkblue"
                  : "text-gray-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "products" && (
          <div>
            {/* Products CRUD UI */}
            <React.Suspense fallback={<div>Loading...</div>}>
              <AdminProducts />
            </React.Suspense>
          </div>
        )}

        {activeTab === "courses" && (
          <div>
            {/* Courses CRUD UI */}
            <React.Suspense fallback={<div>Loading...</div>}>
              <AdminCourses />
            </React.Suspense>
          </div>
        )}

        {activeTab === "users" && (
          <div>
            {/* Users CRUD UI */}
            <React.Suspense fallback={<div>Loading...</div>}>
              <AdminUsers />
            </React.Suspense>
          </div>
        )}

        {activeTab === "blogs" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Blog Posts</h2>
              <button
                onClick={() => setShowBlogForm(!showBlogForm)}
                className="bg-customdarkblue text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                {showBlogForm ? "Cancel" : "Create Blog"}
              </button>
            </div>

            {showBlogForm && (
              <div className="bg-white p-6 rounded-lg shadow mb-6 border">
                <h3 className="text-xl font-bold mb-4">New Blog Post</h3>
                {blogError && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {blogError}
                  </div>
                )}
                <form onSubmit={handleCreateBlog} className="space-y-4" encType="multipart/form-data">
                                    {/* Blog Cover Image Upload */}
                                    <div>
                                      <label className="block mb-1 font-medium">Cover Image</label>
                                      <input
                                        type="file"
                                        name="coverImage"
                                        accept="image/*"
                                        onChange={handleBlogChange}
                                        className="w-full px-3 py-2 border rounded"
                                      />
                                    </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="title"
                      placeholder="Blog Title"
                      value={blogFormData.title}
                      onChange={handleBlogChange}
                      required
                      className="px-3 py-2 border rounded"
                    />
                    <input
                      type="text"
                      name="slug"
                      placeholder="URL Slug"
                      value={blogFormData.slug}
                      onChange={handleBlogChange}
                      required
                      className="px-3 py-2 border rounded"
                    />
                  </div>

                  <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={blogFormData.author}
                    onChange={handleBlogChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />

                  <textarea
                    name="excerpt"
                    placeholder="Blog Excerpt (brief summary)"
                    value={blogFormData.excerpt}
                    onChange={handleBlogChange}
                    required
                    rows="2"
                    className="w-full px-3 py-2 border rounded"
                  />

                  <textarea
                    name="content"
                    placeholder="Full Blog Content"
                    value={blogFormData.content}
                    onChange={handleBlogChange}
                    required
                    rows="6"
                    className="w-full px-3 py-2 border rounded"
                  />

                  <input
                    type="text"
                    name="tags"
                    placeholder="Tags (comma-separated)"
                    value={blogFormData.tags}
                    onChange={handleBlogChange}
                    className="w-full px-3 py-2 border rounded"
                  />

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="published"
                      checked={blogFormData.published}
                      onChange={handleBlogChange}
                      className="w-4 h-4"
                    />
                    <span>Publish immediately</span>
                  </label>

                  <button
                    type="submit"
                    disabled={blogLoading}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                  >
                    {blogLoading ? "Creating..." : "Create Blog Post"}
                  </button>
                </form>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white p-4 rounded-lg shadow border flex flex-col h-full"
                  >
                    <div>
                      <h3 className="font-semibold text-lg">{blog.title}</h3>
                      <p className="text-sm text-gray-600">
                        Published: {blog.published ? "Yes" : "No"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Created: {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex-grow" />
                    <div className="flex gap-2 mt-4">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition w-full"
                        onClick={() => handleEditBlog(blog)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition w-full"
                        onClick={() => handleDeleteBlog(blog.slug)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No blog posts yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Courses tab is now handled by AdminCourses component */}

        {activeTab === "consultations" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Consultation Requests</h2>
            <div className="grid gap-4">
              {consultations.length > 0 ? (
                consultations.map((req) => (
                  <div
                    key={req._id}
                    className="bg-white p-4 rounded-lg shadow border"
                  >
                    <h3 className="font-semibold text-lg">{req.name}</h3>
                    <p className="text-sm text-gray-600">Email: {req.email}</p>
                    <p className="text-sm text-gray-600">Service: {req.service}</p>
                    <p className="text-sm text-gray-600">Status: {req.status}</p>
                    <p className="text-sm text-gray-600 mt-2">{req.message}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No consultation requests yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
