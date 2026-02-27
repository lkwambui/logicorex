
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


import project1Img from '../assets/web/project_1.png';
import project2Img from '../assets/web/project_2.png';
import project3Img from '../assets/web/project_3.png';
import blog1Img from '../assets/blogs/blog1.jpg';
import blog2Img from '../assets/blogs/blog2.jpg';
import blog3Img from '../assets/blogs/blog3.jpg';
import blog4Img from '../assets/blogs/blog4.jpg';

import { API_URL } from "../config/api";


function Products() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [demoProduct, setDemoProduct] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [navigate]);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/products`);
      if (res.ok) {
        setProducts(await res.json());
      } else {
        const data = await res.json();
        setError(data.message || "Failed to fetch products");
      }
    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-customlightblue/10 to-white flex flex-col items-center py-12 px-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <h1 className="text-4xl font-bold text-customdarkblue mb-4">Our Products</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
        Explore our suite of modern management systems designed for businesses, schools, and organizations. Each product is crafted for reliability, security, and ease of use. Contact us for demos, pricing, and custom solutions.
      </p>
      <div className="w-full max-w-6xl">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => {
              let imageSrc = project1Img;
              const title = prod.title ? prod.title.toLowerCase() : "";
              const cat = prod.category ? prod.category.toLowerCase() : "";
              if (title.includes("school") || cat.includes("school")) imageSrc = project1Img;
              else if (title.includes("church")) imageSrc = blog1Img;
              else if (title.includes("property") || title.includes("rental") || cat.includes("property")) imageSrc = blog2Img;
              else if (title.includes("clinic") || title.includes("opd") || cat.includes("clinic")) imageSrc = project2Img;
              else if (title.includes("dropshipping") || title.includes("marketplace") || cat.includes("market")) imageSrc = blog4Img;
              else if (title.includes("event") || cat.includes("event")) imageSrc = blog3Img;
              else if (title.includes("digital product")) imageSrc = blog4Img;
              else if (title.includes("inventory") || title.includes("pos")) imageSrc = project3Img;
              else if (title.includes("salon") || title.includes("beauty")) imageSrc = blog2Img;
              else if (title.includes("hr") || title.includes("payroll")) imageSrc = blog1Img;
              else if (title.includes("resume")) imageSrc = blog1Img;
              else if (title.includes("course") || title.includes("lms")) imageSrc = project1Img;
              else if (title.includes("whatsapp")) imageSrc = blog3Img;
              else if (title.includes("sacco") || cat.includes("finance")) imageSrc = blog1Img;
              else if (title.includes("agriculture")) imageSrc = blog4Img;
              return (
                <div key={prod._id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                  <img
                    src={imageSrc}
                    alt={prod.title + ' image'}
                    className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-customlightblue bg-white"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-center">{prod.title}</h3>
                  <p className="text-gray-600 mb-2 text-center">{prod.category}</p>
                  <p className="text-gray-600 mb-4 text-center">{prod.description}</p>
                  <button
                    className="bg-customdarkblue text-white px-6 py-2 rounded hover:bg-customlightblue transition"
                    onClick={() => handleRequestDemo(prod.title)}
                  >
                    Request Demo
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600">No products yet.</p>
        )}
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
