import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogFallback from '../assets/blogs/blog1.jpg';
import blogImg1 from '../assets/blogs/blog1.jpg';
import blogImg2 from '../assets/blogs/blog2.jpg';
import blogImg3 from '../assets/blogs/blog3.jpg';
import blogImg4 from '../assets/blogs/blog4.jpg';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const postsPerPage = 9;

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Use backend coverImage if available, otherwise fallback to local image
  const blogImages = [blogImg1, blogImg2, blogImg3, blogImg4];
  const getCoverImage = (blog, idx) => {
    if (blog.coverImage && blog.coverImage.startsWith("/uploads/")) {
      return `${API_URL.replace(/\/api$/, "")}${blog.coverImage}`;
    }
    return blogImages[idx % blogImages.length];
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/blogs?published=true`);
        if (!response.ok) {
          throw new Error("Failed to load blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  if (loading) {
    return (
      <section className="bg-[#f5f5f0] py-16 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#f5f5f0] py-16 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f5f5f0] py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.length === 0 ? (
            <p className="text-gray-600">No blog posts available.</p>
          ) : (
            currentBlogs.map((blog, index) => (
              <div
                key={blog.slug}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={getCoverImage(blog, index) || blogFallback}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={e => { e.target.onerror = null; e.target.src = blogFallback; }}
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-1">
                    {`${new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()} • ${
                      blog.author || "LogicoreX Team"
                    }`}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {blog.excerpt || blog.content?.slice(0, 120) + "..."}
                  </p>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-sm font-semibold text-gray-800 hover:text-[#0098FF]"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded border ${
                  currentPage === i + 1 ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
                } hover:bg-gray-800 transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
