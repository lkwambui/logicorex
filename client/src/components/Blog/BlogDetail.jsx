import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../data/blogData';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg mb-6" />
      <p className="text-sm text-gray-500 mb-2">{`${blog.date} • ${blog.author}`}</p>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
