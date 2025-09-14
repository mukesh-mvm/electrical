import React from "react";
import { motion } from "framer-motion";

const Highlight = ({content}) => {
  

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            {content.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-white/80 leading-relaxed mb-6"
          >
            {content.paragraph}
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-3 text-white/90"
          >
            {content.list.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-white text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            {content.button}
          </motion.button>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={content.image}
            alt={content.imageAlt}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Highlight;
