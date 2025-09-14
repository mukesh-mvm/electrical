"use client";

import { motion } from "framer-motion";

// All content stored in an array


export default function ServiceGallery({galleryContent}) {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {galleryContent.map((section, idx) => (
          <div key={idx}>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {section.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
            >
              {section.description}
            </motion.p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
