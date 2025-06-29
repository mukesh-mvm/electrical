import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const progressData = [
  { label: "Government Project", value: 90, color: "bg-yellow-500" },
  { label: "Industrial Project", value: 85, color: "bg-blue-500" },
  { label: "Residential Project", value: 75, color: "bg-green-500" },
];

const ProgressBar = ({ label, value, color }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="font-semibold text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-500">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 relative">
      <div
        className={`${color} h-3 rounded-full transition-all duration-1000`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const ExperienceStats = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = () => setIsModalOpen(true);
  const closeVideoModal = () => setIsModalOpen(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative">
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

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <div className="flex items-center gap-4 cursor-pointer" onClick={openVideoModal}>
            <div className="text-pink-600 text-xl hover:scale-110 transition-transform">
              <FaPlayCircle className="text-4xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">
                Custom Building & Home Renovations
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                10 Years Of Experience
              </h2>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-4">
            <span className="font-bold text-gray-900">Mikel Arteta</span>
            <p className="text-xs text-gray-500">CEO</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-400 font-semibold">
              Project Scope
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              Providing The Highest Quality Services
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Donec sollicitudin molestie malesuada. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
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

          <button className="mt-6 bg-[#c9a47f] hover:bg-[#b8936e] text-white px-6 py-2 rounded text-sm font-semibold transition shadow">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats;
