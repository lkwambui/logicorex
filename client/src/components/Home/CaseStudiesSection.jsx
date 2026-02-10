import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "E-commerce Growth Sprint",
    summary:
      "Redesigned storefront and checkout flow to increase conversions and speed.",
    tag: "Web + UX",
  },
  {
    title: "Mobile Banking UX Refresh",
    summary:
      "Simplified onboarding and improved accessibility for daily transactions.",
    tag: "Mobile + UI",
  },
  {
    title: "Brand Identity System",
    summary:
      "Delivered a cohesive visual system across digital and print channels.",
    tag: "Brand + Design",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 px-4" aria-label="Featured case studies">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Featured Work
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              See how we help teams move faster, launch smarter, and delight users.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-customdarkblue font-semibold hover:underline"
            data-analytics="cta:portfolio"
          >
            View full portfolio →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="text-xs uppercase tracking-wide text-customdarkblue font-semibold">
                {item.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.summary}</p>
              <Link
                to="/portfolio"
                className="mt-4 inline-flex items-center text-sm font-semibold text-gray-800 hover:text-customdarkblue"
                data-analytics="cta:case-study"
              >
                See details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
