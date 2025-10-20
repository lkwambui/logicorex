import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/blogs/blog1.jpg';
import blog2 from '../../assets/blogs/blog2.jpg';
import blog3 from '../../assets/blogs/blog3.jpg';
import blog4 from '../../assets/blogs/blog4.jpg';

const blogs = [
  {
    slug: 'psychology-of-color-graphic-design',
    title: 'The Psychology of Color in Graphic Design: How to Influence Emotions and Decisions',
    excerpt: 'Color isn’t just about making things look pretty—it’s a powerful tool that...',
    image: blog1,
    date: 'February 22, 2024',
    author: 'Lucy Kamau',
  },
  {
    slug: 'microinteractions-invisible-ui',
    title: 'The Invisible UI: Why Microinteractions Matter More Than You Think',
    excerpt: 'We often focus on layouts, colors, and big design features—but it’s the tiny details that...',
    image: blog2,
    date: 'March 27, 2024',
    author: 'Lily Mwende',
  },
  {
    slug: 'common-ux-mistakes',
    title: '5 Common UX Mistakes and How to Avoid Them',
    excerpt: 'User experience (UX) is the backbone of any successful digital product...',
    image: blog3,
    date: 'April 30, 2024',
    author: 'Oliver Otieno',
  },
  {
    slug: 'crafting-engaging-mobile-apps',
    title: 'Beyond the Build: Crafting Mobile Apps That Users Keep Coming Back To',
    excerpt: 'In a world flooded with mobile apps, building one isn’t enough...',
    image: blog4,
    date: 'June 5, 2024',
    author: 'Ava Kimani',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#f5f5f0] py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              className={`bg-white rounded-lg shadow-sm transition-transform duration-300 ${
                index === blogs.length - 1 ? 'hover:shadow-xl hover:-translate-y-2' : ''
              }`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
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

        <div className="mt-10 flex justify-center">
        <Link to="/blog">
          <button className="border border-gray-800 text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
           View more articles →
            </button>
</Link>
        </div>
      </div>
    </section>
  );
}
