import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const OfficeHero = ({heroContent}) => {
  // All content comes from this object
  

  return (
    <>
      <Navbar />
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroContent.image}
          alt={heroContent.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            {heroContent.title}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-white/90 font-medium"
          >
            {heroContent.paragraph}
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className={`mt-6 px-8 py-3 rounded-full shadow-xl text-lg font-semibold transition ${heroContent.buttonColor}`}
          >
            {heroContent.buttonText}
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default OfficeHero;
