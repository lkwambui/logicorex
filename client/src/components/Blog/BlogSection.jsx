import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogFallback from '../../assets/blogs/blog1.jpg';
import blogImg1 from '../../assets/blogs/blog1.jpg';
import blogImg2 from '../../assets/blogs/blog2.jpg';
import blogImg3 from '../../assets/blogs/blog3.jpg';
import blogImg4 from '../../assets/blogs/blog4.jpg';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use local relatable images if available, otherwise fallback
  const blogImages = [
    blogImg1,
    blogImg2,
    blogImg3,
    blogImg4,
  ];
  // Use backend coverImage if available, otherwise fallback to local image
  const getCoverImage = (blog, idx) => {
    if (blog.coverImage && blog.coverImage.startsWith("/uploads/")) {
      // Use backend image, prepend API base if needed
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
        setBlogs(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section className="bg-[#f5f5f0] py-16 px-4 sm:px-8 lg:px-20" aria-label="Latest blog posts">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <p className="text-gray-600">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-gray-600">No blog posts available.</p>
          ) : (
            blogs.map((blog, index) => (
              <div
                key={blog.slug}
                className={`bg-white rounded-lg shadow-sm transition-transform duration-300 ${
                  index === blogs.length - 1 ? 'hover:shadow-xl hover:-translate-y-2' : ''
                }`}
              >
                <img
                  src={getCoverImage(blog, index) || blogFallback}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                  loading="lazy"
                  decoding="async"
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
                    className="text-sm font-semibold text-gray-800 hover:text-[#0098FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0098FF] focus-visible:ring-offset-2"
                    data-analytics="cta:blog-read"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/blog"
            className="border border-gray-800 text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2"
            data-analytics="cta:blog"
          >
            View more articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
