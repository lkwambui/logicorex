import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaPaintBrush,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Web Design & Development",
    description: "Professional websites with responsive and modern design.",
    icon: <FaLaptopCode className="text-customdarkblue text-4xl mb-4" />,
  },
  {
    title: "UI/UX Design",
    description: "User-focused interfaces for seamless digital experiences.",
    icon: <FaPencilRuler className="text-customdarkblue text-4xl mb-4" />,
  },
  {
    title: "Graphics Design",
    description: "Creative visuals and branding assets tailored to your needs.",
    icon: <FaPaintBrush className="text-customdarkblue text-4xl mb-4" />,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps built for performance and usability.",
    icon: <FaMobileAlt className="text-customdarkblue text-4xl mb-4" />,
  },
  {
    title: "Tech Consultancy",
    description: "Expert advice to guide your tech strategy and growth.",
    icon: <FaLightbulb className="text-customdarkblue text-4xl mb-4" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Consultation & Services
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link Button */}
        <div className="mt-10 flex justify-end">
          <Link
            to="/services/web"
            className="bg-customdarkblue text-white px-6 py-3 rounded-full font-medium hover:bg-customlightblue transition duration-300"
          >
            Discover More Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
