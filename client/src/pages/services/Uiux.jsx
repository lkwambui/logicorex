import React from "react";
import { Link } from "react-router-dom";
import { FaPencilRuler, FaUserFriends, FaSearch, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

export default function Uiux() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-customdarkblue text-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            UI/UX Design that Blends Aesthetics and Usability
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-lg">
            We craft digital experiences that not only look beautiful but also feel intuitive — where every click, tap, and swipe feels natural.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-gray-50 text-customdarkblue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
            <a
              href="#process"
              className="border border-gray-50 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-customdarkblue transition"
            >
              Our Process
            </a>
          </div>
        </div>
      </header>

      {/* WHY UI/UX MATTERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-customdarkblue mb-4">
            Why UI/UX Design Matters
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Great design is more than just visuals — it’s about creating meaningful interactions that drive engagement and build trust with users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaSearch className="text-4xl text-customdarkblue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Understanding</h3>
            <p className="text-gray-600 text-sm">
              Deep research into user behaviors ensures every design decision solves a real problem.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaLayerGroup className="text-4xl text-customdarkblue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
            <p className="text-gray-600 text-sm">
              We focus on flow, accessibility, and micro-interactions that make every user journey effortless.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaCheckCircle className="text-4xl text-customdarkblue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Impact</h3>
            <p className="text-gray-600 text-sm">
              A well-designed experience improves conversion rates, user retention, and brand credibility.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section id="process" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-customdarkblue mb-10">
            Our Design Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow text-center hover:shadow-md transition">
              <FaUserFriends className="text-4xl text-customdarkblue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Research</h3>
              <p className="text-gray-600 text-sm">
                We start by understanding user needs through interviews, analytics, and competitor studies.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow text-center hover:shadow-md transition">
              <FaPencilRuler className="text-4xl text-customdarkblue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Design</h3>
              <p className="text-gray-600 text-sm">
                Wireframes, prototypes, and high-fidelity designs that align with brand identity and usability goals.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow text-center hover:shadow-md transition">
              <FaCheckCircle className="text-4xl text-customdarkblue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Validation</h3>
              <p className="text-gray-600 text-sm">
                We conduct usability testing and iterations to ensure every interaction feels right before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-customdarkblue text-gray-50 text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Design Experiences Users Love
          </h2>
          <p className="text-gray-200 mb-8">
            Partner with LogicoreX to craft intuitive, elegant, and impactful user experiences that drive results.
          </p>
          <Link
            to="/contact"
            className="bg-white text-customdarkblue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
