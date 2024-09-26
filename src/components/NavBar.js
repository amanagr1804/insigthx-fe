import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-primary fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto rounded-md" src="/images/logo.png" alt="InsigthX" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-textPrimary hover:text-hoverBlue transition-all duration-300">Home</a>
            <a href="#features" className="text-textPrimary hover:text-hoverBlue transition-all duration-300">Features</a>
            <a href="#about" className="text-textPrimary hover:text-hoverBlue transition-all duration-300">About</a>
            <a href="#how-it-works" className="text-textPrimary hover:text-hoverBlue transition-all duration-300">How It Works</a>
            <a href="#our-presence" className="text-textPrimary hover:text-hoverBlue transition-all duration-300">Our Presence</a>
            <a href="#contact" className="text-textPrimary hover:text-hoverBlue transition-all duration-300">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-textPrimary hover:text-hoverBlue transition-all duration-300">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
