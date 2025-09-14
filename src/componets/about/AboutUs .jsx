import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const AboutUs = () => {
  return (
    <div className="w-full text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
{/* Hero Section with Background Image */}
<section
  className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/images/about.jpg')" }} // Replace with your image path
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
    >
      About Nitin Electricals
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="mt-4 text-lg md:text-xl text-white/90 font-medium"
    >
      Delivering safe, reliable, and energy-efficient electrical solutions
      for residential and commercial spaces with precision and expertise.
    </motion.p>
  </div>
</section>


      {/* Our Mission Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              At Nitin Electricals, our mission is to provide top-quality electrical services
              with a focus on safety, innovation, and energy efficiency. From new wiring and
              rewiring to LED lighting and smart home setups, we empower homes and businesses
              to operate safely and efficiently.
            </p>

            <ul className="space-y-4 text-lg font-medium text-gray-200">
              <li>⚡ Ensuring safe and reliable electrical systems</li>
              <li>💡 Promoting energy-efficient lighting solutions</li>
              <li>🔌 Expert installation and maintenance services</li>
              <li>🏢 Tailored solutions for residential and commercial spaces</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise / Team Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
          >
            Our certified electricians bring years of experience and advanced technical skills
            to every project. We pride ourselves on delivering reliable solutions that meet the
            highest standards of safety and efficiency.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Services",
                description:
                  "Safe and efficient wiring, lighting, and smart home solutions for your home.",
                icon: "/images/Icons/icon1.png",
              },
              {
                title: "Commercial Services",
                description:
                  "Complete office wiring, LED lighting, and power backup solutions for businesses.",
                icon: "/images/Icons/icon2.png",
              },
              {
                title: "Emergency Services",
                description:
                  "24/7 quick response for outages, short circuits, and electrical faults.",
                icon: "/images/Icons/icon3.png",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-gradient-to-b from-gray-900/70 to-black/70 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-500/30 mb-6 overflow-hidden">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
