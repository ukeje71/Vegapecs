import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md border-b border-green-100">
      {/* Main Navigation */}
      <div className="flex flex-row justify-between"></div>
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
                    className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4 ml-6">
          <button className="px-4 py-2 text-green-600 font-medium hover:bg-green-50 rounded-lg transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleNav}
        >
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-4 py-3 space-y-3">
            {["Home", "Solutions", "Marketplace", "Resources", "About"].map(
              (item) => (
                <li key={`mobile-${item}`}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="px-4 py-3 border-t border-gray-100 space-y-3">
            <button className="w-full py-2 text-green-600 font-medium hover:bg-green-50 rounded-lg transition-colors">
              Log In
            </button>
            <button className="w-full py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg hover:shadow-lg transition-all">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
