import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaPaintBrush, FaServer, FaRocket, FaCogs, FaUsers } from "react-icons/fa";
import PartyLounges from "../../assets/web/project_1.png";
import WalkingShadowPoetry from "../../assets/web/project_2.png";
import JantaNet from "../../assets/web/project_3.png";

export default function Web() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-customdarkblue text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Web Design & Development
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
            We build beautiful, fast, and reliable websites — designed to impress and engineered to perform.
            From concept to deployment, we help brands stand out and scale effortlessly online.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-customdarkblue px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get in Touch
            </Link>
            <a
              href="/portfolio"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center text-customdarkblue">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <FaLaptopCode className="text-4xl text-customdarkblue mb-4" />
            <h3 className="font-semibold text-lg mb-2">Custom Web Apps</h3>
            <p className="text-gray-600 text-sm">
              From prototypes to full-scale systems built with React, Next.js, and Node — scalable, secure, and future-ready.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <FaPaintBrush className="text-4xl text-customdarkblue mb-4" />
            <h3 className="font-semibold text-lg mb-2">Design Systems</h3>
            <p className="text-gray-600 text-sm">
              Pixel-perfect UI design and reusable component libraries that keep your product consistent across every platform.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <FaServer className="text-4xl text-customdarkblue mb-4" />
            <h3 className="font-semibold text-lg mb-2">Performance & Hosting</h3>
            <p className="text-gray-600 text-sm">
              Optimized builds, SEO, and secure hosting setups — ensuring your site is fast, reliable, and discoverable.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#0098FF]">
            Why Choose LogicoreX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <FaRocket className="text-4xl text-[#0098FF] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Results-Driven Design</h3>
              <p className="text-gray-600 text-sm">
                Every website we build is designed with measurable goals — engagement, conversion, and growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <FaCogs className="text-4xl text-[#0098FF] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Modern Tech Stack</h3>
              <p className="text-gray-600 text-sm">
                We use the latest frameworks and tools — ensuring maintainability, performance, and future scalability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <FaUsers className="text-4xl text-[#0098FF] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Client Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Our agile approach keeps you involved every step of the way — from concept sketches to launch day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-6 py-20">
  <h3 className="text-3xl font-semibold mb-10 text-center text-customdarkblue">
    Featured Projects
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project 1 */}
    <article className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
      <img
        src={PartyLounges}
        alt="Party Lounges"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h4 className="font-semibold text-lg">Party Lounges - Premium Event Furniture & Decor Rental Platform</h4>
        <p className="text-sm text-gray-600 mt-2">
          LogicoreX supported Party Lounges by designing and implementing a clean, 
          modern website to showcase their wide range of furniture and décor rental 
          options for weddings, corporate events and private functions. The site lets
           users easily explore stylish lounge sets, view high-quality imagery, check 
           pricing & availability, and make inquiries, all optimized for performance 
           and seamless mobile experience.
        </p>
        <div className="mt-4">
          <Link
            to="/contact"
            className="text-customdarkblue text-sm font-semibold hover:underline"
          >
            View More
          </Link>
        </div>
      </div>
    </article>

    {/* Project 2 */}
    <article className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
      <img
        src={WalkingShadowPoetry}
        alt="Portfolio Website"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h4 className="font-semibold text-lg">Walking Shadow Poetry – Platform for Spoken Word & Healing Through Art</h4>
        <p className="text-sm text-gray-600 mt-2">
          LogicoreX collaborated with Walking Shadow Poetry to develop 
          a powerful digital presence that reflects their mission: 
          to give voice to resilience, growth, and transformation. 
          The website neatly showcases their poetry performances, 
          episodes, gallery of work, and shop-front all optimized 
          for mobile and speed. Emphasizing creative storytelling 
          and change-oriented content.
        </p>
        <div className="mt-4">
          <Link
            to="/contact"
            className="text-customdarkblue text-sm font-semibold hover:underline"
          >
            View More
          </Link>
        </div>
      </div>
    </article>

    {/* Project 3 */}
    <article className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
      <img
        src={JantaNet}
        alt="JantaNet Website"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h4 className="font-semibold text-lg">Jantanet- a Modern Internet Service Provider Platform</h4>
        <p className="text-sm text-gray-600 mt-2">
          We collaborated with Gemstone Technologies to built Jantanet, an intuitive job search platform that connects job 
          seekers with the right opportunities through a clean and efficient interface.
          The system includes dynamic job listings, search and category filters,
          and an employer dashboard for posting and managing vacancies. 
        </p>
        <div className="mt-4">
          <Link
            to="/portfolio"
            className="text-customdarkblue text-sm font-semibold hover:underline"
          >
            View More
          </Link>
        </div>
      </div>
    </article>
  </div>
</section>


      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-xl bg-customdarkblue text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">
              Ready to Build Your Next Web Project?
            </h4>
            <p className="mt-1 text-sm opacity-90">
              Tell us your vision — we’ll help you bring it to life with creativity and precision.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-[#0098FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
