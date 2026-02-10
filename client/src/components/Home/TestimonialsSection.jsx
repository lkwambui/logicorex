import React from "react";

const testimonials = [
  {
    quote:
      "LogicoreX helped us launch faster with a clean UI and a scalable frontend foundation.",
    name: "Mercy Wanjiru",
    role: "Product Lead",
    company: "Nimbus Labs",
  },
  {
    quote:
      "The team translated our vision into a cohesive brand system that stands out.",
    name: "Brian Otieno",
    role: "Marketing Manager",
    company: "Harbor Finance",
  },
  {
    quote:
      "From discovery to delivery, communication was smooth and the results exceeded expectations.",
    name: "Aisha Mwangi",
    role: "Founder",
    company: "Nova Retail",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          What clients say
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Real feedback from teams we partnered with.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <blockquote className="text-gray-700">“{item.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-gray-600">
                <span className="block font-semibold text-gray-900">
                  {item.name}
                </span>
                {item.role}, {item.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
