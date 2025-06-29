import React from "react";

const ExperienceCentreBanner = () => {
  return (
    <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 py-10">
      <div
        className="relative h-[350px] sm:h-[400px] md:h-[320px] lg:h-[280px] w-full overflow-hidden rounded-2xl flex flex-col md:flex-row items-stretch"
        style={{
          backgroundImage:
            "url('https://studio-mcgee.com/wp-content/app/uploads/2025/06/studiomcgee-McGeeSummer2025-250122-0164-aspect-ratio-3-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Text Section with curved right edge */}
        <div className="relative z-10 w-full md:w-1/2 h-full bg-[#472951]/90 text-white p-6 sm:p-10 flex flex-col justify-center rounded-r-[100px] backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Come, see endless designs
            <br />
            at our <span className="text-[#ff5a5f]">Experience Centre</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/90">
            Walk into any of our centres in 50+ cities
          </p>
          <button className="mt-5 max-w-[200px] bg-[#ff5a5f] hover:bg-[#e44a4e] text-white px-6 py-2 rounded-full text-sm font-semibold transition shadow">
            Find one near you &rarr;
          </button>
        </div>

        {/* Right transparent section (empty to allow background image show) */}
        <div className="w-full md:w-1/2 h-full" />
      </div>
    </div>
  );
};

export default ExperienceCentreBanner;
