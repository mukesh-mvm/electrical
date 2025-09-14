"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../ContactSection";
import Navbar from "../Navbar";


const ContactUsPage = () => {
  return (
    <div className="w-full text-white">
        <Navbar/>
      {/* HERO SECTION */}
      <motion.section
        className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
       style={{ backgroundImage: `url("/images/contact.jpg")` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800" />
        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Get in Touch with Nitin Electricals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-white/90 font-medium"
          >
            We provide reliable electrical solutions for homes and offices. Reach out to us for expert guidance, consultations, and service requests.
          </motion.p>
        </div>
      </motion.section>

      {/* CONTACT FORM SECTION */}
      <ContactSection />

      {/* CONTACT INFO SECTION */}
      <motion.section
        className="relative w-full py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-black via-gray-900 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our Contact Information
            </h2>
            <p className="text-gray-300 text-lg">
              Reach out to us via phone, email, or visit our office for expert electrical services.
            </p>
            <div className="space-y-3 text-gray-200">
              <p>📞 Phone: +91 9670870839</p>
              <p>✉️ Email: nitinelectricalcon@gmail.com</p>
              <p>🏢 Pipra Baghel Kushinagar Up (274407)</p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Nitin Electricals Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.224802449576!2d72.83002847552044!3d19.107431987048946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62d2a9b1a6f%3A0x2e4f7d6c7ef9f2c3!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1694700000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="h-64 md:h-full w-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUsPage;
