import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [demoProduct, setDemoProduct] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    // Check for user token for protection
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const categories = [
    {
      name: "School & Education SaaS",
      products: [
        {
          title: "Multi-tenant School Management System",
          description: "Fees, grades, parent portal, M-Pesa/Pesapal integration.",
        },
        {
          title: "Online Course Platform / Mini LMS",
          description: "For local tutors or schools to deliver courses online.",
        },
        {
          title: "Exam & Result Management Platform",
          description: "CBC-focused exam and result tracking for schools.",
        },
      ],
    },
    {
      name: "Healthcare / Clinic Systems",
      products: [
        {
          title: "Private Clinic OPD System",
          description: "Patient registration, consultation, pharmacy, payment.",
        },
        {
          title: "Telemedicine Platform",
          description: "Consultation booking, video calls, and payment integration.",
        },
        {
          title: "Lab & Test Management System",
          description: "Results tracking and billing for clinics and labs.",
        },
      ],
    },
    {
      name: "SME & Business Tools",
      products: [
        {
          title: "Inventory + POS System",
          description: "For shops, pharmacies, hardware stores.",
        },
        {
          title: "HR & Payroll System",
          description: "HR and payroll management for SMEs.",
        },
        {
          title: "Salon / Spa Appointment & Booking System",
          description: "Online booking and management for salons and spas.",
        },
        {
          title: "WhatsApp CRM",
          description: "CRM solution for small businesses using WhatsApp.",
        },
      ],
    },
    {
      name: "Property & Rentals",
      products: [
        {
          title: "Rental / Property Management System",
          description: "Tenants, payments, maintenance tracking.",
        },
        {
          title: "Landlord Dashboard",
          description: "Manage multiple properties and tenants easily.",
        },
      ],
    },
    {
      name: "Events & Ticketing",
      products: [
        {
          title: "Event Ticketing Platform",
          description: "QR tickets, M-Pesa/Pesapal payments for events.",
        },
        {
          title: "Wedding / Party Planner Booking Platform",
          description: "Book planners and manage events online.",
        },
      ],
    },
    {
      name: "Marketplaces",
      products: [
        {
          title: "Niche E-Commerce / Dropshipping Platform",
          description: "Beauty, Kids, Agro-tools, and more.",
        },
        {
          title: "Digital Products Marketplace",
          description: "For Kenyan creators: ebooks, templates, courses.",
        },
        {
          title: "Agriculture Produce Marketplace",
          description: "Connect farmers to buyers for fresh produce.",
        },
      ],
    },
    {
      name: "Finance & Savings",
      products: [
        {
          title: "SACCO / Cooperative Management System",
          description: "Loans, contributions, dividends for cooperatives.",
        },
        {
          title: "Micro-lending Platform",
          description: "Micro-lending for SMEs and small businesses.",
        },
      ],
    },
  ];

  const handleRequestDemo = (product) => {
    setDemoProduct(product);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Demo request submitted! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-customlightblue/10 to-white flex flex-col items-center py-12 px-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <h1 className="text-4xl font-bold text-customdarkblue mb-4">Our Products</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
        Explore our suite of modern management systems designed for businesses, schools, and organizations. Each product is crafted for reliability, security, and ease of use. Contact us for demos, pricing, and custom solutions.
      </p>
      <div className="w-full max-w-6xl">
        {categories.map((cat, idx) => (
          <section key={cat.name} className="mb-12">
            <h2 className="text-2xl font-bold text-customdarkblue mb-6 border-b border-customlightblue pb-2">{cat.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.products.map((prod, pidx) => (
                <div key={prod.title} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                  <div className="bg-customlightblue/20 rounded-full p-4 mb-4">
                    <svg className="w-10 h-10 text-customdarkblue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">{prod.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{prod.description}</p>
                  <button
                    className="bg-customdarkblue text-white px-6 py-2 rounded hover:bg-customlightblue transition"
                    onClick={() => handleRequestDemo(prod.title)}
                  >
                    Request Demo
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* Modal for Request Demo */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-customdarkblue text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-customdarkblue">Request Demo</h2>
            <p className="mb-4 text-gray-600">Product: <span className="font-semibold">{demoProduct}</span></p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customlightblue"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleFormChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customlightblue"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleFormChange}
                placeholder="Message (optional)"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customlightblue"
                rows={3}
              />
              <button
                type="submit"
                className="w-full bg-customdarkblue text-white py-2 rounded hover:bg-customlightblue transition font-semibold"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
