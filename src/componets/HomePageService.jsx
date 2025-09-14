"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";





const services = [
  {
    icon: "/images/Icons/icon1.png",
    title: "New wiring & rewiring &",
    highlight: "Switchboard upgrades",
    link:"/switch"
  },
  {
    icon: "/images/Icons/icon2.png",
    title: "Fan, light, and appliance installations",
    highlight: "Circuit breaker replacement",
     link:"/circuit"
  },
  {
    icon: "/images/Icons/icon3.png",
    title: "Smart home setup",
    highlight: "",
     link:"/smart"
  },
  
];






const services2 = [
  {
    icon: "/images/Icons/icon4.png",
    title: "Complete office wiring &",
    highlight: "LED lighting solutions",
    link:"/office"
  },
  {
    icon: "/images/Icons/icon5.png",
    title: "Power backup systems (UPS, inverters)",
    highlight: "That Converts",
    link:"/inverter"
  },
  {
    icon: "/images/Icons/icon6.png",
    title: "Server room wiring &",
    highlight: "Energy audits & load management",
    link:"/server-room"
  },
  
];





const services3 = [
  {
    icon: "/images/Icons/icon4.png",
    title: "Short-circuit repairs",
    highlight: "",
  },
  {
    icon: "/images/Icons/icon5.png",
    title: "Power outage response &",
    highlight: "Fuse & breaker failures",
  },
  {
    icon: "/images/Icons/icon6.png",
    title: "Fault diagnosis and quick fix",
    highlight: "",
  },
  
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

export default function HelpBrands() {

   const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-black via-[#0d0d0d] to-gray-900 text-white py-20 px-6">
      {/* Background Glow */}

      {/* Heading */}
     



      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Residential Electrical<span className="text-orange-400">{" "}SERVICES</span>
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
      >
        {services.map(({ icon, title, highlight,link }, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(link)}
            className="flex flex-col cursor-pointer items-center text-center bg-gradient-to-b from-gray-900/70 to-black/70 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition"
          >
            {/* Icon (Image) */}
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-500/30 mb-6 overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={icon}
                alt={title}
                className="w-15 h-15 object-contain"
              />
            </motion.div>

            {/* Title + Highlight */}
            <h3 className="text-lg font-semibold leading-snug">
              {title}{" "}
              <span className="text-yellow-400 font-bold">{highlight}</span>
            </h3>
          </motion.div>
        ))}
      </motion.div>




      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 pt-5"
      >
       Commercial Electrical<span className="text-orange-400">{" "}SERVICES</span>
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
      >
        {services2.map(({ icon, title, highlight,link }, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
             onClick={() => navigate(link)}
            className="flex flex-col items-center cursor-pointer text-center bg-gradient-to-b from-gray-900/70 to-black/70 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition"
          >
            {/* Icon (Image) */}
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-500/30 mb-6 overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={icon}
                alt={title}
                className="w-15 h-15 object-contain"
              />
            </motion.div>

            {/* Title + Highlight */}
            <h3 className="text-lg font-semibold leading-snug">
              {title}{" "}
              <span className="text-yellow-400 font-bold">{highlight}</span>
            </h3>
          </motion.div>
        ))}
      </motion.div>


      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 pt-5"
      >
       Emergency <span className="text-orange-400">{" "}Services – 24/7</span>
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
      >
        {services3.map(({ icon, title, highlight }, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center text-center bg-gradient-to-b from-gray-900/70 to-black/70 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition"
          >
            {/* Icon (Image) */}
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-500/30 mb-6 overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={icon}
                alt={title}
                className="w-15 h-15 object-contain"
              />
            </motion.div>

            {/* Title + Highlight */}
            <h3 className="text-lg font-semibold leading-snug">
              {title}{" "}
              <span className="text-yellow-400 font-bold">{highlight}</span>
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
