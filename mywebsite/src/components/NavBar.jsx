import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#141B2B] text-white shadow-md "style={{ height: '80px' }}>
      <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between ">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-white">Unmesh </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-xl hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="text-xl hover:text-blue-400 transition">Services</Link>
          <Link to="/ideas" className="text-xl hover:text-blue-400 transition">Ideas</Link>
          <Link to="/about" className="text-xl hover:text-blue-400 transition">About</Link>
          <Link to="/contact" className="text-xl hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
            Portfolio Management
          </button>
          <button className="bg-teal-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-teal-300 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
