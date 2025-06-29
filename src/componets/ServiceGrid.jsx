import React from "react";

const services = [
  {
    title: "Residential Electrical Services",
    items: [
      "New wiring & rewiring",
      "Switchboard upgrades",
      "Fan, light, and appliance installations",
      "Circuit breaker replacement",
      "Smart home setup",
    ],
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/03/studiomcgee-McGeeSummer2025-250122-0392-2048x1362.jpg",
    hoverBg: "bg-amber-600/80", // Warm & welcoming
  },
  {
    title: "Commercial Electrical Services",
    items: [
      "Complete office wiring",
      "Power backup systems (UPS, inverters)",
      "LED lighting solutions",
      "Server room wiring",
      "Energy audits & load management",
    ],
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/03/studiomcgee-McGeeSummer2025-250122-0392-2048x1362.jpg",
    hoverBg: "bg-sky-700/80", // Professional and modern
  },
  {
    title: "Industrial Electrical Services",
    items: [
      "HT/LT panel installation & maintenance",
      "Transformer & generator setup",
      "Industrial automation & PLC systems",
      "Safety compliance & inspections",
    ],
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/06/studiomcgee-TheOaksProject-20240530-0521-aspect-ratio-3-2-2048x1365.jpg",
    hoverBg: "bg-orange-700/80", // Strong, bold, reliable
  },
  {
    title: "Emergency Services – 24/7",
    items: [
      "Short-circuit repairs",
      "Power outage response",
      "Fuse & breaker failures",
      "Fault diagnosis and quick fix",
    ],
    image:
      "https://studio-mcgee.com/wp-content/app/uploads/2025/06/C-002592-01-008_C4C5_SMG_DOTCOM_LivingRoom_002-400x267.jpg",
    hoverBg: "bg-rose-800/90", // Urgent, high-impact
  },
];


const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 max-w-[1500px] mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative group h-72 sm:h-80 md:h-96 w-full  overflow-hidden transition-all duration-500"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />

          {/* Persistent dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-0 transition-all duration-500" />

          {/* Colored hover overlay */}
          <div
            className={`absolute inset-0 ${service.hoverBg} opacity-0 group-hover:opacity-100 transition-all duration-500 z-10`}
          />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:-translate-y-2">
              {service.title}
            </h2>
            <ul className="mt-4 space-y-1 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 text-sm sm:text-base">
  {service.items.map((item, i) => (
    <li key={i}>{item}</li>
  ))}
</ul>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
