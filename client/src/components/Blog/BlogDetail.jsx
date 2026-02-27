import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogFallback from '../../assets/blogs/blog1.jpg';

import { API_URL } from "../../config/api";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCoverImage = (post) =>
    post.coverImage ||
    `https://picsum.photos/seed/${encodeURIComponent(post.slug)}/1200/700`;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_URL}/blogs/${slug}`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p className="text-center mt-20">Loading blog...</p>;
  }

  if (error || !blog) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <img
        src={getCoverImage(blog) || blogFallback}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <p className="text-sm text-gray-500 mb-2">
        {`${new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()} • ${
          blog.author || "LogicoreX Team"
        }`}
      </p>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
