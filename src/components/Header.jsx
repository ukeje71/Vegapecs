import React, { useState, useRef, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
          setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100 h-20 flex justify-center items-center"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Branding */}
        <div className="flex items-center space-x-2">
          <Leaf className="text-green-600 w-8 h-8" />
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            VegaPecs
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {["Home", "Solutions", "Marketplace", "About Us", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wider hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 ml-6">
          <a
            href="https://wa.me/2348182443958"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-800 group-hover:scale-105">
              Order
            </button>
          </a>
          <button className="px-6 py-2 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-all duration-300 hover:shadow-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          {navOpen ? (
            <X size={24} className="text-green-600" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Animated Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
          navOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-2">
          {["Home", "Solutions", "Marketplace", "About Us", "Contact"].map(
            (item, index) => (
              <li key={`mobile-${item}`}>
                <a
                  href="#"
                  className="block py-3 px-4 text-gray-700 hover:bg-green-50 rounded-lg font-medium transition-colors duration-200"
                  style={{
                    transitionDelay: `${navOpen ? index * 50 : 0}ms`,
                    transform: navOpen ? "translateY(0)" : "translateY(-10px)",
                    opacity: navOpen ? 1 : 0
                  }}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <div className="px-6 pb-6 pt-2 space-y-3 border-t border-gray-100">
          <a
            href="https://wa.me/2348182443958"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-800">
              Order Now
            </button>
          </a>
          <button className="w-full py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;