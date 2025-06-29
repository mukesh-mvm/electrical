import React from "react";

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
    <section className="max-w-[1500px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Column */}
      <div>
        <p className="text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nulla
          quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan
          tincidunt. Nulla porttitor accumsan tincidunt.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={`${url}?auto=format&fit=crop&w=400&q=60`}
              alt={`work-${idx}`}
              className=" w-full h-24 sm:h-28 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div>
        <p className="text-sm uppercase text-orange-400 font-semibold mb-2">
          What we do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          We Design And Build Amazing Spaces That People Love To Live
        </h2>

        {/* Checklist */}
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          {[
            "Nulla porttitor accumsan",
            "Curabitur arcu erat",
            "Donec velit neque",
            "Nulla porttitor accumsan",
            "Curabitur arcu erat",
            "Donec velit neque",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
