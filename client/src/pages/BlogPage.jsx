import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogData';

const postsPerPage = 4;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <section className="bg-[#f5f5f0] py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentBlogs.map(blog => (
            <div key={blog.slug} className="bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover rounded-t-lg" />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{`${blog.date} • ${blog.author}`}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
                <Link to={`/blog/${blog.slug}`} className="text-sm font-semibold text-gray-800 hover:text-[#0098FF]">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
      </div>
    </section>
  );
}
