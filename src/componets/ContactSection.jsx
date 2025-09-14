import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", phone: "", message: "" });
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-black via-[#0d0d0d] to-gray-900 py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="h-[3px] w-12 bg-orange-500 mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-snug">
            Why Hire Hedgehog Electric <br /> As Your Electrician?
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Our electricians are hardworking, dedicated, and focused on meeting the needs of our clients. 
            Your safety is our top priority. We go above and beyond to ensure that all electrical installations, 
            repairs, and other services are carried out safely and effectively.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold rounded-lg shadow-md transition">
              Contact Us
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaPhoneAlt className="text-orange-600 text-lg" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Have any questions?</p>
                <p className="text-lg font-semibold text-white">+91-9670870839</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#111] p-8 rounded-xl shadow-lg border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="text-sm text-gray-400">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-orange-500 text-white p-3 rounded-lg outline-none transition"
                  placeholder="Enter first name"
                />
              </motion.div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="text-sm text-gray-400">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-orange-500 text-white p-3 rounded-lg outline-none transition"
                  placeholder="Enter last name"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="text-sm text-gray-400">Phone Number *</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-orange-500 text-white p-3 rounded-lg outline-none transition"
                placeholder="Enter phone number"
              />
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-orange-500 text-white p-3 rounded-lg outline-none transition resize-none"
                placeholder="Write your message..."
              />
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md"
              >
                Send Information
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactSection;
