import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-transparent text-darkGray text-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-20 space-y-10 lg:space-y-0">
          {/* Left Section */}
          <div className="flex-1 lg:max-w-xs space-y-5 text-left">
            <img
              src={Logo}
              alt="LogicoreX Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />

            <div className="flex space-x-4 text-xl text-darkGray">
              <a
                href="https://instagram.com/lucy_kamau_designer_and_dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LogicoreX on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com/@lucykamau_designdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LogicoreX on TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://linkedin.com/in/lucy-kamau-87bb75209/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LogicoreX on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/lkwambui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LogicoreX on GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/254799656264"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with LogicoreX on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="text-xs space-y-1">
              <Link to="/about" className="block hover:text-customdarkblue text-left">
                The Spark Behind Innovation
              </Link>
              <p>© 2025 Logicorex, Ltd.</p>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {/* Company */}
            <div className="text-left">
              <h4 className="font-semibold mb-2 text-darkGray">Company</h4>
              <ul className="space-y-1">
                <li><Link to="/" className="block hover:text-customdarkblue">Home</Link></li>
                <li><Link to="/about" className="block hover:text-customdarkblue">About</Link></li>
                <li><Link to="/blog" className="block hover:text-customdarkblue">Blog</Link></li>
                <li><Link to="/contact" className="block hover:text-customdarkblue">Contact</Link></li>
              </ul>
            </div>

            {/* Consultation & Services */}
            <div className="text-left">
              <h4 className="font-semibold mb-2 text-darkGray">Consultation & Services</h4>
              <ul className="space-y-1">
                <li><Link to="/services/web" className="block hover:text-customdarkblue">Web Design & Development</Link></li>
                <li><Link to="/services/uiux" className="block hover:text-customdarkblue">UI/UX Design</Link></li>
                <li><Link to="/services/graphics" className="block hover:text-customdarkblue">Graphics Design</Link></li>
                <li><Link to="/services/mobile" className="block hover:text-customdarkblue">Mobile App Development</Link></li>
                <li><Link to="/services/consultancy" className="block hover:text-customdarkblue">Tech Consultancy</Link></li>
              </ul>
            </div>

            {/* Academy Resources */}
            <div className="text-left relative">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-darkGray">LogicoreX Academy Resources</h4>
              </div>

              <ul className="space-y-1 opacity-80 pointer-events-none">
                <li><span className="block">Design & Development</span></li>
                <li><span className="block">UI/UX Design</span></li>
                <li><span className="block">Web Design</span></li>
                <li><span className="block">Frontend Web Development</span></li>
                <li><span className="block">React for Beginners</span></li>
                <li><span className="block">Graphics Design</span></li>
              </ul>
            </div>

            {/* Logicorex For */}
            <div className="text-left">
              <h4 className="font-semibold mb-2 text-darkGray">Logicorex for</h4>
              <ul className="space-y-1">
                <li><Link to="/contact" className="block hover:text-customdarkblue">Students</Link></li>
                <li><Link to="/services/web" className="block hover:text-customdarkblue">Business</Link></li>
                <li><Link to="/contact" className="block hover:text-customdarkblue">Partnerships</Link></li>
              </ul>
              <div className="mt-4 text-customdarkblue font-medium">
                <Link to="/contact" className="hover:underline">Explore more →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
