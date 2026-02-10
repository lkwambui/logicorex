import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-customdarkblue py-14 px-4" aria-label="Primary call to action">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to build something impactful?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/80">
          Let’s talk about your goals, timeline, and the right digital strategy.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-customdarkblue px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            data-analytics="cta:contact"
          >
            Book a consultation
          </Link>
          <Link
            to="/portfolio"
            className="border border-white/70 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            data-analytics="cta:portfolio-secondary"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
