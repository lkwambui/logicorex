import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "ShopMaster Dashboard",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?auto=format&fit=crop&w=800&q=80",
    description:
      "A scalable e-commerce admin platform built with React and Node.js. Optimized for analytics and seamless order tracking.",
  },
  {
    id: 2,
    title: "Nova Agency Website",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1611162616305-4ec3060a0584?auto=format&fit=crop&w=800&q=80",
    description:
      "A clean, fast, and responsive site for a creative agency. Developed with Next.js and Tailwind CSS for SEO excellence.",
  },
  {
    id: 3,
    title: "FinEdge Platform",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1616422574341-5e1e9d5a84a0?auto=format&fit=crop&w=800&q=80",
    description:
      "A fintech app that helps users manage and visualize spending using React, Express, and Chart.js.",
  },
  {
    id: 4,
    title: "LearnSphere App",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1591696331119-2b9d9f6a9f2f?auto=format&fit=crop&w=800&q=80",
    description:
      "An interactive e-learning app built with Flutter for seamless learning experiences on Android and iOS.",
  },
  {
    id: 5,
    title: "BrandNova Identity Kit",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1626178804809-31acba10c1b7?auto=format&fit=crop&w=800&q=80",
    description:
      "Complete brand identity system including logo, palette, typography, and brand assets for startups.",
  },
  {
    id: 6,
    title: "UX Redesign for PaySmart",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1612831201918-1cf0f486f24c?auto=format&fit=crop&w=800&q=80",
    description:
      "A UX redesign for a digital payments platform, focusing on usability, accessibility, and conversion rate optimization.",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-[#0098FF] text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-100">
            A showcase of LogicoreX’s creativity, innovation, and impact through
            technology and design.
          </p>
        </div>
      </header>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {["All", "Web", "Mobile", "UI/UX", "Branding"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                filter === cat
                  ? "bg-[#0098FF] text-white border-[#0098FF]"
                  : "bg-white text-[#0098FF] border-[#0098FF] hover:bg-[#0098FF]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#0098FF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {project.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="text-[#0098FF] text-sm font-semibold hover:underline"
                >
                  Discuss this project →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
