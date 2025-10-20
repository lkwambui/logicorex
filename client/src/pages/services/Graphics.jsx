import React from "react";
import { Link } from "react-router-dom";
import { FaPalette, FaShapes, FaPenFancy, FaPhotoVideo, FaVectorSquare, FaLightbulb } from "react-icons/fa";

export default function Graphics() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-[#0098FF] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Creative Graphics Design that Defines Your Brand
          </h1>
          <p className="mt-5 text-lg text-gray-100 max-w-2xl mx-auto">
            At LogicoreX, we craft compelling visuals that capture attention, build trust, and tell your story through timeless design.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-white text-[#0098FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0098FF] mb-4">
            Our Design Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We blend creativity and strategy to deliver designs that resonate with your audience and strengthen your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaPalette className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
            <p className="text-gray-600 text-sm">
              Logos, color palettes, and brand systems that express your company’s values and vision across platforms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaShapes className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Marketing Collateral</h3>
            <p className="text-gray-600 text-sm">
              Eye-catching social media posts, brochures, and campaign materials that drive awareness and engagement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaPenFancy className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Illustrations & Custom Art</h3>
            <p className="text-gray-600 text-sm">
              Unique vector illustrations and icons that bring your digital products and brand to life.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaPhotoVideo className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital & Print Media</h3>
            <p className="text-gray-600 text-sm">
              Posters, business cards, and digital banners that ensure brand consistency across all touchpoints.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaVectorSquare className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI Graphics</h3>
            <p className="text-gray-600 text-sm">
              We design crisp and functional interface assets for apps, websites, and dashboards.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
            <FaLightbulb className="text-[#0098FF] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creative Consultation</h3>
            <p className="text-gray-600 text-sm">
              Need guidance? We help you shape creative strategies that align with your marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0098FF] mb-4">
            Our Design Process
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Every design we create is the result of a collaborative and thoughtful process that ensures excellence from concept to delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1. Discovery", desc: "We learn about your goals, audience, and brand vision." },
              { step: "2. Concept", desc: "Our designers craft ideas and mood boards tailored to your message." },
              { step: "3. Design", desc: "We turn concepts into visuals that are bold, clean, and functional." },
              { step: "4. Delivery", desc: "Receive high-quality, ready-to-use assets that elevate your brand." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg text-[#0098FF] mb-2">{item.step}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#0098FF] text-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Bring Your Brand to Life
          </h2>
          <p className="text-gray-200 mb-8">
            Partner with LogicoreX to create visuals that inspire action, strengthen identity, and make your brand unforgettable.
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
