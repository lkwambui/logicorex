import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaChartLine, FaCogs, FaCloud, FaHandshake, FaUsers } from "react-icons/fa";

export default function Consultancy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-customdarkblue text-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Strategic Tech Consultancy for Modern Businesses
          </h1>
          <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
            LogicoreX helps organizations align technology with business goals — delivering clarity,
            innovation, and long-term value through data-driven strategies and scalable digital systems.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-white text-customdarkblue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* WHAT WE OFFER */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-customdarkblue mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you're a startup seeking direction or an enterprise optimizing your tech stack,
            our consultancy ensures you make the right technology decisions for growth and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 hover:bg-gray-100 transition rounded-xl p-8 text-center shadow-sm">
            <FaLightbulb className="text-customdarkblue text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Product & Technology Strategy</h3>
            <p className="text-gray-600 text-sm">
              We help you define a clear roadmap for your product — balancing innovation with practicality to
              ensure sustainable business growth.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 transition rounded-xl p-8 text-center shadow-sm">
            <FaCogs className="text-customdarkblue text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Architecture & System Design</h3>
            <p className="text-gray-600 text-sm">
              Our engineers craft scalable system architectures, API ecosystems, and secure cloud solutions that
              evolve with your business.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 transition rounded-xl p-8 text-center shadow-sm">
            <FaChartLine className="text-customdarkblue text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
            <p className="text-gray-600 text-sm">
              We modernize legacy systems and guide organizations through digital transformation with measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-customdarkblue mb-4">
            Our Approach
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            At LogicoreX, we blend strategy, design, and engineering to help you make confident technology decisions.
            Here's how we partner with you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <FaHandshake className="text-3xl text-customdarkblue mb-3 mx-auto" />
              <h4 className="font-semibold text-lg mb-1">1. Discovery</h4>
              <p className="text-sm text-gray-600">
                We start by understanding your business goals, challenges, and existing systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <FaLightbulb className="text-3xl text-customdarkblue mb-3 mx-auto" />
              <h4 className="font-semibold text-lg mb-1">2. Strategy</h4>
              <p className="text-sm text-gray-600">
                We define a tailored roadmap with actionable steps that align your vision with modern tech.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <FaCloud className="text-3xl text-customdarkblue mb-3 mx-auto" />
              <h4 className="font-semibold text-lg mb-1">3. Implementation</h4>
              <p className="text-sm text-gray-600">
                We design, build, and integrate digital solutions — from architecture to deployment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <FaUsers className="text-3xl text-customdarkblue mb-3 mx-auto" />
              <h4 className="font-semibold text-lg mb-1">4. Support</h4>
              <p className="text-sm text-gray-600">
                We offer ongoing support, analytics, and optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-customdarkblue text-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Tech Strategy?
          </h2>
          <p className="text-gray-200 mb-8">
            Let’s work together to create innovative, scalable, and efficient solutions that move your business forward.
          </p>
          <Link
            to="/contact"
            className="bg-white text-customdarkblue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
