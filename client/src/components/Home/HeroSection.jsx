import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
      </div>

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
            className="bg-customdarkblue hover:bg-customlightblue text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Explore Our Services
          </Link>
<Link
  to="/academy"
  className="relative bg-white hover:bg-gray-100 text-[#0098FF] px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
>
  Join the Academy
  <span className="absolute -top-2 -right-3 bg-customdarkblue text-[10px] text-gray-50 font-bold px-2 py-0.5 rounded-full shadow-md rotate-[-6deg] animate-pulse">
    Coming Soon
  </span>
</Link>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
