import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.4;
      setIsSticky(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "relative px-1 py-1 transition text-white hover:text-yellow-400";
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
        <nav className="hidden md:flex gap-6 text-base font-medium items-center">
          {/* Home */}
          <a href="#" className={`group ${navLinkClass}`}>
            Home
            <span className={underlineClass}></span>
          </a>

          {/* Services with hover and click */}
          <div
            className="relative group"
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

            <div
              className={`absolute top-full mt-2 left-0 w-44 bg-black border border-white/10 shadow-lg transition-all ${
                servicesOpen ? "block" : "hidden"
              }`}
            >
              {["Home Wiring", "Lighting", "Theater Setup"].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-yellow-500/20 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* About Us */}
          <a href="#" className={`group ${navLinkClass}`}>
            About Us
            <span className={underlineClass}></span>
          </a>

          {/* Contact Us */}
          <a href="#" className={`group ${navLinkClass}`}>
            Contact Us
            <span className={underlineClass}></span>
          </a>
        </nav>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-white z-40">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-sm z-20 px-6 py-4 space-y-4">
          {/* Home */}
          <a href="#" className="block text-white text-lg hover:text-yellow-400 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-white text-lg hover:text-yellow-400"
            >
              <span>Services</span>
              {servicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-2 text-sm text-gray-300">
                {["Home Wiring", "Lighting", "Theater Setup"].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block hover:text-yellow-400 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* About Us */}
          <a href="#" className="block text-white text-lg hover:text-yellow-400 relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Contact Us */}
          <a href="#" className="block text-white text-lg hover:text-yellow-400 relative group">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
