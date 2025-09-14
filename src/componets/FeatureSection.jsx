import React from "react";
import { motion } from "framer-motion";

const imageUrls = [
  "/images/worker1.png",
  "/images/worker2.png",
  "/images/worker3.png",
  "/images/worker4.png",
  "/images/worker5.png",
  "/images/worker6.png",
];

const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black py-16 px-6">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
            With over five years of proven expertise, we provide{" "}
            <span className="text-orange-400 font-semibold">
              residential, commercial, and industrial electrical services
            </span>{" "}
            that combine safety, efficiency, and innovation. From small home
            projects to large-scale installations, our skilled team ensures
            reliable results delivered on time and with the highest standards of
            quality.
          </p>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-3 gap-3 mt-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {imageUrls.map((url, idx) => (
              <motion.img
                key={idx}
                src={`${url}?auto=format&fit=crop&w=400&q=60`}
                alt={`work-${idx}`}
                className="w-full h-24 sm:h-28 object-cover rounded-lg shadow"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase text-orange-400 font-semibold mb-2 tracking-wide">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-snug">
            We Power Homes, Businesses, and Industries with{" "}
            <span className="text-orange-400">Trusted Electrical Solutions</span>
          </h2>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
            {[
              "Professional Residential Electrical Services",
              "Reliable Commercial Electrical Solutions",
              "24/7 Emergency Support Anytime You Need",
              "Experienced and Certified Electricians",
              "Safe, Efficient, and Cost-Effective Work",
              "Proven Track Record of Successful Projects",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-orange-400 mt-1">✔</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
