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
    <div className="relative w-full h-[50vh] md:h-[80vh] text-white overflow-hidden">
        <Navbar/>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover brightness-60 transition-all duration-700"
        />
      </div>

      {/* Bottom-Left Content */}
      <div className="absolute pb-[100px] md:pb-0 bottom-6 left-6 z-10 max-w-xl text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_10px_#000]">
          {slides[current].title}
        </h1>
        <p className="mt-3 text-white/90 font-medium text-base sm:text-lg">
          {slides[current].description}
        </p>
        <button className="  mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-base font-semibold rounded-full shadow-lg transition">
          Book a Free Consultation
        </button>
      </div>

      {/* Bottom-Right Controls with Bullets in Between */}
      <div className="absolute  bottom-6 right-6 z-20 flex items-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Bullets */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleBulletClick(index)}
              className={`w-3 h-3 rounded-full border border-white ${
                current === index ? "bg-white" : "bg-transparent"
              } hover:bg-white transition`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CarouselHero;
