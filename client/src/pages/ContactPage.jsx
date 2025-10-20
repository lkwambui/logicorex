import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa6";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("");

  const whatsappNumber = "+254799656264"; // Change if needed

  return (
    <div id="contact" className="bg-white text-gray-800 relative">
      {/* Header */}
      <div className="text-center py-12 bg-customdarkblue text-gray-50">
        <h2 className="text-4xl font-bold">Contact us</h2>
        <p className="mt-2 text-lg">We would love to hear from you.</p>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Send Message Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
          <p className="text-sm text-gray-600 mb-6">
            Fill in the form below to reach out to our team. We typically respond within 24 hours.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              fetch("https://formspree.io/f/mwproyzy", {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              })
                .then((res) => {
                  if (res.ok) {
                    setFormStatus("success");
                    e.target.reset();
                  } else {
                    setFormStatus("error");
                  }
                })
                .catch(() => setFormStatus("error"));
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" required className="border rounded px-4 py-2 w-full" />
              <input type="text" name="company" placeholder="Company" className="border rounded px-4 py-2 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="phone" placeholder="Phone" required className="border rounded px-4 py-2 w-full" />
              <input type="email" name="email" placeholder="Email" required className="border rounded px-4 py-2 w-full" />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="border rounded px-4 py-2 w-full" />
            <textarea name="message" placeholder="Message" rows="5" className="border rounded px-4 py-2 w-full" required />
            <button type="submit" className="bg-customdarkblue text-white py-2 px-6 rounded hover:bg-customlightblue">
             Send Message
            </button>

            {formStatus === "success" && (
              <p className="text-green-600 mt-2">Your message was sent successfully!</p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
          <p className="text-sm text-gray-600 mb-6">
            Reach out through any of our channels. Whether you’re a startup, SME, or enterprise, we’re here to help.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-customdarkblue" />
              <span>Makueni, Kenya – Logicorex HQ</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-customdarkblue" />
              <span>
                support@logicorex.com<br />
                info@logicorex.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-customdarkblue" />
              <span>
                +254 799 656 264<br />
                +254 750 649 936
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <p className="mb-2 font-semibold">Follow our social media</p>
            <div className="flex gap-4 text-customdarkblue text-xl">
              <a
                href="https://facebook.com/logicorex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com/company/logicorex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://tiktok.com/@logicorex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://instagram.com/logicorex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button – Mobile Only */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 block md:hidden"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default ContactPage;
