import React from "react";
import { motion } from "framer-motion";

const OfficeWiringPage = () => {
  // All content stored in a single object
  const sectionContent = {
    heading: "Why Choose Our Electrical Services?",
    paragraph:
      "For over 5 years, we’ve been delivering reliable office wiring and LED lighting solutions that empower workplaces to perform better. Our certified electricians combine safety, efficiency, and innovation to create lighting systems that save energy and improve productivity.",
    highlightedText: "office wiring and LED lighting",
    list: [
      "⚡ 5+ Years of proven expertise in industrial & residential projects",
      "👷‍♂️ Licensed, skilled, and professional electricians",
      "⏰ 24/7 emergency services whenever you need us",
      "💡 Affordable, energy-efficient LED & wiring solutions",
      "🏢 Customized setups designed for modern office needs",
    ],
    buttonText: "Get Your Free Consultation",
    image: "/images/why.jpg",
    imageAlt: "Office electrical wiring work",
  };

  return (
    <div className="w-full text-white">
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={sectionContent.image}
              alt={sectionContent.imageAlt}
              className="rounded-2xl shadow-2xl w-full h-auto object-contain"
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
              {sectionContent.heading}
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              {sectionContent.paragraph.split(sectionContent.highlightedText)[0]}
              <span className="font-semibold text-white">
                {sectionContent.highlightedText}
              </span>
              {sectionContent.paragraph.split(sectionContent.highlightedText)[1]}
            </p>

            <ul className="space-y-4 text-lg font-medium text-gray-200">
              {sectionContent.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-white text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              {sectionContent.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfficeWiringPage;
