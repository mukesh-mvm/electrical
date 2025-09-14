import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";

const slides = [
  {
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2024/01/studiomcgee-WatersEdge-20230620-0033_web-scaled-1-2048x1366.jpg",
    title: "Home Electrical Wiring",
    description:
      "Safe and professional internal electrical wiring for new and existing homes.",
  },
  {
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/06/studiomcgee-McGeeSummer2025-250122-0164-aspect-ratio-3-2.jpg",
    title: "Smart Lighting Setup",
    description:
      "Upgrade your home with energy-efficient smart lighting systems.",
  },
  {
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/03/studiomcgee-McGeeSummer2025-250122-0392-2048x1362.jpg",
    title: "Home Theater Wiring",
    description:
      "Complete audio-visual wiring for a premium cinematic experience at home.",
  },
  {
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/06/studiomcgee-TheOaksProject-20240530-0521-aspect-ratio-3-2-2048x1365.jpg",
    title: "Custom Electrical Projects",
    description:
      "Tailored electric solutions designed for your unique needs and lifestyle.",
  },
];

const CarouselHero = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleBulletClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] text-white overflow-hidden">
      <Navbar />

      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-white/90 text-lg md:text-xl font-medium">
          {slides[current].description}
        </p>
        <button className="w-[300px] mt-8 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-full shadow-xl transition transform hover:scale-105">
          Contact Us
        </button>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Bullets */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleBulletClick(index)}
              className={`w-3.5 h-3.5 rounded-full border border-white shadow ${
                current === index ? "bg-yellow-400 border-yellow-400" : "bg-transparent"
              } transition`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CarouselHero;
