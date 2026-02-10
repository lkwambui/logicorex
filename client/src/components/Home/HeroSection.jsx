// ...existing code...
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay to add opacity (darken the image) */}
      <div
        className="absolute inset-0 bg-black/50 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          Empowering Innovation Through Technology & Education
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
          LogicoreX bridges creativity and technology, offering smart digital solutions and hands-on learning experiences that shape the innovators of tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/services/web"
            className="bg-customdarkblue hover:bg-customlightblue text-white px-8 py-3 rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            data-analytics="cta:hero-services"
          >
            Explore Our Services
          </Link>
          <Link
            to="/login"
            className="bg-white text-[#0098FF] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
            data-analytics="cta:hero-academy"
          >
            Join the Academy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;