import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import webDesignImage from "../../assets/consultation_and_services/webdesign_and_development.jpg";
import uiuxdesignImage from "../../assets/consultation_and_services/ui_ux_design.jpg";
import graphicsdesignImage from "../../assets/consultation_and_services/graphics_design.jpg";
import mobileAppDevelopmentImage from "../../assets/consultation_and_services/mobile-app-development.jpg";
import TechConsultationImage from "../../assets/consultation_and_services/tech-consultation.jpg";

const slides = [
  {
    id: 1,
    title: "Web Design & Development",
    subtitle:
      "We craft responsive, SEO-optimized, and fast-loading websites tailored to your business goals.",
    description:
      "From corporate websites to powerful e-commerce platforms, we combine creativity, functionality, and performance to give your brand a digital edge. Our team ensures your website looks stunning on every device and converts visitors into loyal customers.",
    image: webDesignImage,
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Designing intuitive and engaging digital experiences.",
    description:
      "We prioritize usability and aesthetics to ensure that your users enjoy a seamless experience. Our UI/UX design process focuses on user research, wireframing, prototyping, and testing — all aimed at creating interfaces that feel effortless and enjoyable to use.",
    image: uiuxdesignImage,
  },
  {
    id: 3,
    title: "Graphics Design",
    subtitle: "Visual storytelling that leaves a lasting impression.",
    description:
      "Our creative team designs logos, brand identities, and marketing materials that resonate. Whether it's digital banners, posters, or social media visuals, we bring your ideas to life with precision and passion.",
    image: graphicsdesignImage,
  },
  {
    id: 4,
    title: "Mobile App Development",
    subtitle: "Building scalable, intuitive mobile solutions.",
    description:
      "We develop high-performing Android and iOS apps using modern frameworks. From concept to deployment, we ensure your app is user-friendly, secure, and aligned with your business strategy.",
    image: mobileAppDevelopmentImage,
  },
  {
    id: 5,
    title: "Tech Consultancy",
    subtitle: "Guiding your business through digital transformation.",
    description:
      "Our team provides expert advice on digital strategy, process automation, and software integration. We help organizations innovate and scale by aligning technology with long-term goals.",
    image: TechConsultationImage,
  },
];

export default function LandingSlideshow() {
  const [current, setCurrent] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [paused, setPaused] = useState(false);
  const slideTrackRef = useRef(null);

  // Responsive slide count
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleNext = () => {
    if (slideTrackRef.current) {
      slideTrackRef.current.style.transition = "transform 0.6s ease-in-out";
      setCurrent((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideTrackRef.current) {
      slideTrackRef.current.style.transition = "transform 0.6s ease-in-out";
      setCurrent((prev) => prev - 1);
    }
  };

  // Infinite loop adjustment
  useEffect(() => {
    if (!slideTrackRef.current) return;
    const totalSlides = slides.length;
    const track = slideTrackRef.current;

    const handleTransitionEnd = () => {
      if (current >= totalSlides) {
        track.style.transition = "none";
        setCurrent(0);
        track.style.transform = `translateX(0)`;
      } else if (current < 0) {
        track.style.transition = "none";
        setCurrent(totalSlides - 1);
        track.style.transform = `translateX(-${
          (totalSlides - 1) * (100 / visibleSlides)
        }%)`;
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [current, visibleSlides]);

  return (
    <div
      className="relative w-full py-20 bg-gray-100 flex flex-col items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-customdarkblue mb-10">
        Consultation & Services
      </h2>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4">
        {/* Slide Track */}
        <div
          ref={slideTrackRef}
          className="flex"
          style={{
            transform: `translateX(-${current * (100 / visibleSlides)}%)`,
            width: `${(slides.length + visibleSlides) * (100 / visibleSlides)}%`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {[...slides, ...slides.slice(0, visibleSlides)].map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-customdarkblue mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base font-medium">
                    {slide.subtitle}
                  </p>
                  <p className="text-gray-500 mb-4 text-sm sm:text-base line-clamp-3">
                    {slide.description}
                  </p>
                  <Link
                    to="/login"
                    className="inline-block bg-customdarkblue hover:bg-[#007acc] text-white px-5 py-2 rounded-lg font-medium transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left & Right Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronLeft className="text-customdarkblue text-xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaChevronRight className="text-customdarkblue text-xl" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current % slides.length
                ? "bg-customdarkblue scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
