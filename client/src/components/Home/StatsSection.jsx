import React from "react";

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "45+", label: "Brands supported" },
  { value: "7 yrs", label: "Industry experience" },
  { value: "98%", label: "Client satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-12 px-4" aria-label="Key performance stats">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm"
          >
            <p className="text-3xl md:text-4xl font-bold text-customdarkblue">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
