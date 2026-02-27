import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  GraduationCap,
  Home,
  MenuIcon,
  Phone,
  User,
  X,
  InfoIcon,
  LogOut,
  Box,
} from "lucide-react";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAcademyOpen, setIsAcademyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [user, setUser] = useState(null);
  const { theme, toggleTheme } = useTheme ? useTheme() : { theme: "light", toggleTheme: () => {} };
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  const closeDropdowns = () => {
    setIsServicesOpen(false);
    setIsAcademyOpen(false);
  };

  return (
    <nav className={`relative z-50 border-b border-lightGray shadow-sm ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" aria-label="Go to home">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-darkGray font-medium">
          <Link to="/" className="flex items-center space-x-1 hover:text-customdarkblue">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 hover:text-customdarkblue">
            <InfoIcon className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link to="/blog" className="flex items-center space-x-1 hover:text-customdarkblue">
            <MenuIcon className="w-4 h-4" />
            <span>Blog</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:text-customdarkblue">
            <Phone className="w-4 h-4" />
            <span>Contact</span>
          </Link>
          <Link to="/products" className="flex items-center space-x-1 hover:text-customdarkblue">
            <Box className="w-4 h-4" />
            <span>Products</span>
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center space-x-1 hover:text-customdarkblue focus:outline-none"
            >
              <User className="w-4 h-4" />
              <span>Consultation & Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 w-56 z-10 border border-lightGray rounded">
                <Link to="/services/web" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Web Design & Development
                </Link>
                <Link to="/services/uiux" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  UI/UX Design
                </Link>
                <Link to="/services/graphics" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Graphics Design
                </Link>
                <Link to="/services/mobile" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Mobile App Development
                </Link>
                <Link to="/services/consultancy" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Tech Consultancy
                </Link>
              </div>
            )}
          </div>

          {/* Academy Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAcademyOpen(!isAcademyOpen)}
              className="flex items-center space-x-1 hover:text-customdarkblue focus:outline-none"
            >
              <GraduationCap className="w-4 h-4" />
              <span>LogicoreX Academy</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isAcademyOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 w-56 z-10 border border-lightGray rounded">
                <Link to="/academy" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20 font-semibold text-customdarkblue">
                  All Courses
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link to="/academy?category=web-design" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Web Design & Development
                </Link>
                <Link to="/academy?category=uiux" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  UI/UX Design
                </Link>
                <Link to="/academy?category=frontend" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Frontend Web Development
                </Link>
                <Link to="/academy?category=react" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  React for Beginners
                </Link>
                <Link to="/academy?category=graphics" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Graphics Design
                </Link>
                <Link to="/academy?category=full-stack" onClick={closeDropdowns} className="block px-4 py-2 hover:bg-customlightblue/20">
                  Graphics Design
                </Link>
              </div>
            )}
          </div>

          {/* Dark mode toggle removed */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Link 
                to="/profile" 
                className="flex items-center space-x-1 text-customdarkblue hover:text-opacity-80"
              >
                <User className="w-4 h-4" />
                <span>{user.name}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-customdarkblue font-medium hover:underline">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-customdarkblue text-white px-4 py-1.5 rounded hover:bg-customlightblue transition"
              >
                Signup
              </Link>
            </>
          )}
          
        </div>

        {/* Hamburger for Mobile */}
        {/* Mobile dark mode toggle */}
        <button
          className="md:hidden text-darkGray"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-darkGray font-medium">
          <Link to="/" className="block py-1 hover:text-customdarkblue">Home</Link>
          <Link to="/about" className="block py-1 hover:text-customdarkblue">About</Link>
          <Link to="/blog" className="block py-1 hover:text-customdarkblue">Blog</Link>
          <Link to="/contact" className="block py-1 hover:text-customdarkblue">Contact</Link>
          <Link to="/products" className="block py-1 hover:text-customdarkblue">Products</Link>
          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full py-1 hover:text-customdarkblue"
            >
              <span>Consultation & Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="ml-4 space-y-1">
                <Link to="/services/web" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Web Design & Development</Link>
                <Link to="/services/uiux" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">UI/UX Design</Link>
                <Link to="/services/graphics" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Graphics Design</Link>
                <Link to="/services/mobile" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Mobile App Development</Link>
                <Link to="/services/consultancy" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Tech Consultancy</Link>
              </div>
            )}
          </div>

          {/* Academy Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsAcademyOpen(!isAcademyOpen)}
              className="flex items-center justify-between w-full py-1 hover:text-customdarkblue"
            >
              <span>LogicoreX Academy</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isAcademyOpen && (
              <div className="ml-4 space-y-1">
                <Link to="/academy" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue font-semibold">All Courses</Link>
                <Link to="/academy?category=web-design" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Web Design & Development</Link>
                <Link to="/academy?category=uiux" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">UI/UX Design</Link>
                <Link to="/academy?category=frontend" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Frontend Web Development</Link>
                <Link to="/academy?category=react" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">React for Beginners</Link>
                <Link to="/academy?category=graphics" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Graphics Design</Link>
                <Link to="/academy?category=full-stack" onClick={closeDropdowns} className="block py-1 hover:text-customdarkblue">Full Stack Web Development</Link>
              </div>
            )}
          </div>
          {user ? (
            <div className="space-y-2">
              <div className="py-1 text-customdarkblue font-medium">
                Welcome, {user.name}
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-1 bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="block py-1 text-customdarkblue font-medium hover:underline">
                Login
              </Link>
              <Link
                to="/signup"
                className="block bg-customdarkblue text-white px-3 py-1 rounded hover:bg-customlightblue transition text-center text-sm md:px-4 md:py-1.5 md:text-base"
              >
                Signup
              </Link>
            </>
          )}
        
          {/* Mobile dark mode toggle removed */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
