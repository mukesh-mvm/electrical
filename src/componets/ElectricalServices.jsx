import React from "react";
import {
  FaTools,
  FaLightbulb,
  FaBolt,
  FaHome,
  FaServer,
  FaBell,
  FaChargingStation,
  FaHouseUser,
} from "react-icons/fa";

const services = [
  { title: "Emergency Repairs", icon: FaTools },
  { title: "Electrical Repair", icon: FaLightbulb },
  { title: "Circuit Breakers", icon: FaBolt },
  { title: "Electrical Installation & Wiring", icon: FaHome },
  { title: "Electrical Panels", icon: FaServer },
  { title: "Smoke Detectors", icon: FaBell },
  { title: "EV Charger Installation", icon: FaChargingStation },
  { title: "Smart Home Services", icon: FaHouseUser },
];

const ElectricalServices = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
          Electrical Services
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-10">
          Have an Expert Home Electrician Help You Today
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#2c2c2c] hover:bg-yellow-500 transition-colors duration-300 rounded-xl p-6 flex flex-col items-center text-center shadow-md cursor-pointer"
              >
                <IconComponent
                  size={32}
                  className="text-yellow-400 group-hover:text-black transition-colors duration-300 mb-3"
                />
                <h3 className="text-lg font-semibold group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElectricalServices;
