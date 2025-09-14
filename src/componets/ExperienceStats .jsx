import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const progressData = [
  { label: "Industrial Project", value: 85, color: "bg-blue-500" },
  { label: "Residential Project", value: 75, color: "bg-green-500" },
];

const ProgressBar = ({ label, value, color }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between mb-1">
      <span className="font-semibold text-gray-200">{label}</span>
      <span className="text-sm font-medium text-gray-400">{value}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3 relative">
      <motion.div
        className={`${color} h-3 rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  </motion.div>
);

const ExperienceStats = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = () => setIsModalOpen(true);
  const closeVideoModal = () => setIsModalOpen(false);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black py-16 px-4 sm:px-6 relative">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative bg-black max-w-3xl w-full rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 text-white text-2xl z-50"
            >
              <IoMdClose />
            </button>
            {/* Video */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={openVideoModal}
          >
            <motion.div
              className="text-pink-500 text-xl hover:scale-110 transition-transform"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaPlayCircle className="text-4xl" />
            </motion.div>
            <div>
              <p className="text-sm text-gray-400 font-medium">
                Custom Building & Home Renovations
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                5 Years Of Experience
              </h2>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            I am proud to lead a team with over five years of experience
            delivering reliable residential, commercial, and 24/7 emergency
            electrical services. Our goal is to keep your homes and businesses
            safe, powered, and running smoothly with quality workmanship and a
            customer-first approach.
          </p>
          <div className="mt-4">
            <span className="font-bold text-white">Arjun Kushwaha</span>
            <p className="text-xs text-gray-400">CEO</p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-400 font-semibold">
              Project Scope
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Providing The Highest Quality Services
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              We specialize in delivering residential, commercial, and
              industrial electrical solutions, backed by over five years of
              proven experience. Our team has successfully completed a wide
              range of projects, from home wiring and lighting to large-scale
              industrial installations.
            </p>
          </div>

          <div className="mt-8">
            {progressData.map((item, i) => (
              <ProgressBar
                key={i}
                label={item.label}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-6 py-2 rounded text-sm font-semibold transition shadow"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceStats;
