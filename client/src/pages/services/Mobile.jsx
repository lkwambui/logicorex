import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaApple, FaAndroid, FaCode, FaRocket, FaCloud, FaShieldAlt } from "react-icons/fa";

export default function Mobile() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-[#0098FF] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mobile App Development for a Connected Future
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
            At LogicoreX, we build seamless, high-performing mobile apps that empower users and accelerate business growth — from concept to launch.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-white text-[#0098FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </header>

      {/* WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0098FF] mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you're building your first app or scaling an existing product, we bring creativity, strategy, and technical precision to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaCode className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom App Development</h3>
            <p className="text-gray-600 text-sm">
              Tailored mobile solutions designed from scratch to meet your specific business goals.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaCloud className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-600 text-sm">
              Secure and scalable backends that sync data across devices effortlessly.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaRocket className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">App Optimization</h3>
            <p className="text-gray-600 text-sm">
              Boost performance, reduce load time, and enhance user experience across devices.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaShieldAlt className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
            <p className="text-gray-600 text-sm">
              We implement robust security measures and follow best practices for data protection.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaMobileAlt className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX for Mobile</h3>
            <p className="text-gray-600 text-sm">
              User-centered designs that combine beauty, clarity, and intuitive navigation.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaRocket className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
            <p className="text-gray-600 text-sm">
              Continuous improvements, updates, and monitoring to keep your app running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS WE BUILD FOR */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0098FF] mb-10">
            Platforms We Build For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow text-center">
              <FaApple className="text-5xl text-[#0098FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">iOS</h3>
              <p className="text-sm text-gray-600">
                We develop pixel-perfect apps using Swift and SwiftUI for iPhones and iPads, ensuring smooth performance.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow text-center">
              <FaAndroid className="text-5xl text-[#0098FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Android</h3>
              <p className="text-sm text-gray-600">
                Scalable apps built with Kotlin and Jetpack Compose that adhere to Material Design standards.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow text-center">
              <FaMobileAlt className="text-5xl text-[#0098FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
              <p className="text-sm text-gray-600">
                Faster time-to-market with React Native and Flutter — one codebase, multiple platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0098FF] mb-10">
          Our Mobile Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { step: "1. Strategy", desc: "Understanding goals, defining scope, and creating a roadmap." },
            { step: "2. Design", desc: "Crafting user flows, wireframes, and sleek interfaces for intuitive UX." },
            { step: "3. Development", desc: "Building robust, scalable apps using modern frameworks and APIs." },
            { step: "4. Launch & Support", desc: "Testing, deployment, and continuous improvement post-launch." },
          ].map((phase, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-[#0098FF] mb-2">{phase.step}</h4>
              <p className="text-sm text-gray-600">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0098FF] text-gray-50 text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build the Next Big App?
          </h2>
          <p className="text-gray-200 mb-8">
            Let’s turn your vision into a powerful mobile experience that stands out in the market.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#0098FF] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
