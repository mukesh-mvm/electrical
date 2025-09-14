import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

// Service data
const services1 = [
  {
    title: "Residential Electrical Services",
    items: [
      "New wiring & rewiring & Switchboard upgrades",
      "Fan, light, and appliance installations",
      "Smart home setup",
    ],
  },
  {
    title: "Commercial Electrical Services",
    items: [
      "Complete office wiring",
      "Power backup systems (UPS, inverters)",
      "Server room wiring",
    ],
  },
  {
    title: "Emergency Services – 24/7",
    items: [
      "Short-circuit repairs",
      "Power outage response",
      "Fuse & breaker failures",
      "Fault diagnosis and quick fix",
    ],
  },
];

// Mapping service items to routes
const serviceRoutes = {
  "New wiring & rewiring & Switchboard upgrades": "/switch",
  "Fan, light, and appliance installations": "/circuit",
  "Smart home setup": "/smart",
  "Complete office wiring": "/office",
  "Power backup systems (UPS, inverters)": "/inverter",
  "Server room wiring": "/server-room",
  "Energy audits & load management": "/energy-audit",
  "Short-circuit repairs": "/short-circuit",
  "Power outage response": "/power-outage",
  "Fuse & breaker failures": "/fuse-breaker",
  "Fault diagnosis and quick fix": "/fault-diagnosis",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "relative px-2 py-1 transition text-white hover:text-yellow-400";
  const underlineClass =
    "absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isSticky ? "bg-gray-900 shadow-md" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-yellow-400">Nitin Electricals </span>Contractor
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium items-center">
          <Link to="/" className={`group ${navLinkClass}`}>
            Home
            <span className={underlineClass}></span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`group flex items-center gap-1 ${navLinkClass}`}
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services
              {servicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              <span className={underlineClass}></span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-3 left-0 bg-gray-900 border border-white/10 shadow-lg rounded-lg flex w-[400px] overflow-hidden">
                {/* Left Column - Titles */}
                <div className="w-1/2 bg-gray-800">
                  {services1.map((service, idx) => (
                    <div
                      key={idx}
                      className={`px-2 py-1 cursor-pointer transition ${
                        activeService === idx
                          ? "bg-yellow-500/30 text-yellow-400"
                          : "hover:bg-gray-700"
                      }`}
                      onMouseEnter={() => setActiveService(idx)}
                    >
                      {service.title}
                    </div>
                  ))}
                </div>

                {/* Right Column - Items */}
                <div className="w-1/2 p-5 grid grid-cols-1 gap-2">
                  {services1[activeService]?.items.map((item, subIdx) => (
                    <Link
                      key={subIdx}
                      to={serviceRoutes[item] || "#"}
                      className="block text-sm text-gray-300 hover:text-yellow-400 transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/about-us" className={`group ${navLinkClass}`}>
            About Us
            <span className={underlineClass}></span>
          </Link>
          <Link to="/contact" className={`group ${navLinkClass}`}>
            Contact Us
            <span className={underlineClass}></span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white z-40"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-sm z-20 px-6 py-6 space-y-6">
          <Link to="/" className="block text-white text-lg hover:text-yellow-400">
            Home
          </Link>

          {/* Services Mobile Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-white text-lg hover:text-yellow-400"
            >
              <span>Services</span>
              {servicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {servicesOpen && (
              <div className="ml-3 mt-4 space-y-4">
                {services1.map((service, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-gray-200">{service.title}</div>
                    <div className="ml-3 mt-2 space-y-1 text-sm">
                      {service.items.map((item, subIdx) => (
                        <Link
                          key={subIdx}
                          to={serviceRoutes[item] || "#"}
                          className="block text-gray-400 hover:text-yellow-400"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/about-us" className="block text-white text-lg hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/contact" className="block text-white text-lg hover:text-yellow-400">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
